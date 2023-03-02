import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
// import { ParallaxProvider } from 'react-scroll-parallax'

const NavRoutes = () => (
  // <ParallaxProvider scrollAxis='vertical'>
  <Routes>
    <Route exact path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />
  </Routes>
  // </ParallaxProvider>
);

export default NavRoutes;