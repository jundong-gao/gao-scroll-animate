const animateDirective = {
  mounted(el) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const animateClassName = el.getAttribute("data-animate") || "";
          if (!animateClassName) return;
          const duration = el.getAttribute("data-duration") || "";
          el.style.setProperty("--gao-animate-duration", duration);
          el.classList.add(...["animate__animated", animateClassName, "gao-animate-duration"]);
          observer.unobserve(el);
        }
      });
    });
    observer.observe(el);
  }
};
const install = (app) => {
  app.directive("animate", animateDirective);
};
export {
  install as default
};
