import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./components/Navbar";
import ContactSection from "./components/sections/ContactSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import Footer from "./components/sections/Footer";
import HeroSection from "./components/sections/HeroSection";
import ResumeSection from "./components/sections/ResumeSection";
import SignalSection from "./components/sections/SignalSection";
import StackSection from "./components/sections/StackSection";
import WorkSection from "./components/sections/WorkSection";
import ProjectDetailPage from "./components/sections/ProjectDetailPage";
import { forceScrollTop, forceScrollTopAcrossFrames } from "./utils/scroll";
import {
  capabilityGroups,
  focusAreas,
  profileStats,
  stackIcons,
  timeline,
  workFilters,
  workItems,
} from "./data/portfolioContent";

const getInitialTheme = () => {
  try {
    return localStorage.getItem("portfolio-theme") || "dark";
  } catch {
    return "dark";
  }
};

if ("scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

function ScrollManager() {
  const { pathname, hash, key } = useLocation();
  const previousLocationRef = useRef(null);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useLayoutEffect(() => {
    const previousLocation = previousLocationRef.current;
    const isInitialRender = previousLocation === null;
    const isPageChange = !isInitialRender && previousLocation.pathname !== pathname;
    const isSamePageHash = !isInitialRender && !isPageChange && Boolean(hash);
    const html = document.documentElement;
    const previousScrollBehavior = html.style.scrollBehavior;
    const target = hash ? document.getElementById(hash.slice(1)) : null;
    const behavior = isSamePageHash ? "smooth" : "auto";

    previousLocationRef.current = { pathname, hash, key };

    if (behavior === "auto") {
      html.style.scrollBehavior = "auto";
    }

    let cancelQueuedScroll = null;

    if (isPageChange && !hash) {
      cancelQueuedScroll = forceScrollTopAcrossFrames();
    } else if (target) {
      target.scrollIntoView({ block: "start", behavior });
    } else if (!hash || isPageChange || isInitialRender) {
      forceScrollTop();
    }

    if (behavior === "auto") {
      html.style.scrollBehavior = previousScrollBehavior;
    }

    return () => cancelQueuedScroll?.();
  }, [pathname, hash, key]);

  return null;
}

function App() {
  const [theme, setTheme] = useState(getInitialTheme);
  const [activeFilter, setActiveFilter] = useState("All");
  const [skillQuery, setSkillQuery] = useState("");

  useEffect(() => {
    try {
      localStorage.setItem("portfolio-theme", theme);
    } catch {
      // Theme persistence is a progressive enhancement.
    }

    document.documentElement.style.colorScheme = theme;
    document.body.dataset.theme = theme;
    document
      .querySelector("meta[name='theme-color']")
      ?.setAttribute("content", theme === "dark" ? "#000000" : "#ffffff");
  }, [theme]);

  const filteredWork = useMemo(() => {
    if (activeFilter === "All") {
      return workItems;
    }

    return workItems.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  const filteredCapabilities = useMemo(() => {
    const query = skillQuery.trim().toLowerCase();

    if (!query) {
      return capabilityGroups;
    }

    return capabilityGroups
      .map((group) => ({
        ...group,
        items: group.items.filter((item) => item.toLowerCase().includes(query)),
      }))
      .filter(
        (group) =>
          group.title.toLowerCase().includes(query) ||
          group.summary.toLowerCase().includes(query) ||
          group.items.length > 0
      );
  }, [skillQuery]);

  const homePage = (
    <>
      <HeroSection stats={profileStats} focusAreas={focusAreas} />
      <SignalSection />
      <WorkSection
        filters={workFilters}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
        workItems={filteredWork}
      />
      <StackSection
        stackIcons={stackIcons}
        capabilityGroups={filteredCapabilities}
        skillQuery={skillQuery}
        onSkillQueryChange={setSkillQuery}
      />
      <ExperienceSection timeline={timeline} />
      <ResumeSection />
      <ContactSection />
    </>
  );

  return (
    <main className="portfolio-shell" data-theme={theme}>
      <ScrollManager />
      <NavBar
        theme={theme}
        onThemeToggle={() => setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"))}
      />
      <Routes>
        <Route path="/" element={homePage} />
        <Route path="/projects/:slug" element={<ProjectDetailPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
