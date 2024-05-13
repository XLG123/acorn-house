import { disableAnimation, pauseAnimations } from "./animation";
import { alignPrograms } from "./programs";

// const cl = console.log.bind(console);

const responsiveLayout = () => {
  alignPrograms();
  pauseAnimations();
  disableAnimation();
};

export { responsiveLayout };
