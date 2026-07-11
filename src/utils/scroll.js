export const forceScrollTop = () => {
  const html = document.documentElement;
  const body = document.body;
  const scrollingElement = document.scrollingElement || html;
  const previousHtmlBehavior = html.style.scrollBehavior;
  const previousBodyBehavior = body.style.scrollBehavior;

  html.style.scrollBehavior = "auto";
  body.style.scrollBehavior = "auto";
  window.scrollTo({ left: 0, top: 0, behavior: "auto" });
  scrollingElement.scrollTop = 0;
  html.scrollTop = 0;
  body.scrollTop = 0;
  html.style.scrollBehavior = previousHtmlBehavior;
  body.style.scrollBehavior = previousBodyBehavior;
};

export const forceScrollTopAcrossFrames = () => {
  forceScrollTop();

  let secondFrame = null;
  const firstFrame = window.requestAnimationFrame(() => {
    forceScrollTop();
    secondFrame = window.requestAnimationFrame(forceScrollTop);
  });
  const firstTimeout = window.setTimeout(forceScrollTop, 0);
  const secondTimeout = window.setTimeout(forceScrollTop, 80);
  const thirdTimeout = window.setTimeout(forceScrollTop, 180);

  return () => {
    window.cancelAnimationFrame(firstFrame);

    if (secondFrame) {
      window.cancelAnimationFrame(secondFrame);
    }

    window.clearTimeout(firstTimeout);
    window.clearTimeout(secondTimeout);
    window.clearTimeout(thirdTimeout);
  };
};
