import { restructureSubtitle } from "./onlineContact";
import { alignPrograms } from "./programs";

// Adjusts program alignment and subtitle structure for responsive design.
const responsiveLayout = () => {
    alignPrograms();
    restructureSubtitle();
};

export { responsiveLayout };
