import { pauseAnimations } from "./animation";
import { alignPrograms } from "./programs";

// const cl = console.log.bind(console);

const responsiveLayout = () => {
  alignPrograms();
  pauseAnimations();
};

export { responsiveLayout };
