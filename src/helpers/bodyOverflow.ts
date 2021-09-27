type bodyOverflowActiveType = () => void;

const bodyOverflowActive: bodyOverflowActiveType = () => {
  const body: HTMLElement = document.body;
  body.classList.add("disableBody");
};

type bodyOverflowInactiveType = () => void;

const bodyOverflowInactive: bodyOverflowInactiveType = () => {
  const body: HTMLElement = document.body;
  body.classList.remove("disableBody");
};

export {bodyOverflowActive, bodyOverflowInactive}