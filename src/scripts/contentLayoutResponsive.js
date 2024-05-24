import { restructureSubtitle } from "./onlineContact";
import { alignPrograms } from "./programs";

// const cl = console.log.bind(console);

const responsiveLayout = () => {
  alignPrograms();
  restructureSubtitle();
};

export { responsiveLayout };
