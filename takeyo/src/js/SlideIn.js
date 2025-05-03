const defaultOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0,
};

const initializeObserveAnimation = (targets, options = {}) => {
  const targetsLength = targets.length;

  if (targetsLength === 0) {
    console.error("initializeObserveAnimation: Target elements are not found.");
    return;
  }
  console.log(`initializeObserveAnimation: Found ${targetsLength} target(s).`);

  const mergedOptions = { ...defaultOptions, ...options };
  const observer = createObserver(mergedOptions, targetsLength);
  targets.forEach((target) => {
    console.log("Observing target:", target);
    observer.observe(target);
  });
};

const createObserver = (options, targetsLength) => {
  let observer;
  let activeCount = 0;

  const handleObserve = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log(`Element ${entry.target} is intersecting.`);
        entry.target.setAttribute("data-animated", "true");
        console.log(`Element ${entry.target} set data-animated to true.`);
        observer.unobserve(entry.target);
        activeCount++;
      }
    });

    if (activeCount === targetsLength) {
      observer.disconnect();
    }
  };

  observer = new IntersectionObserver(handleObserve, options);
  return observer;
};

export { initializeObserveAnimation };
