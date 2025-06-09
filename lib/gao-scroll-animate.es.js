const install = (app) => {
  app.directive("animate", {
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
  });
};
export {
  install as default
};
