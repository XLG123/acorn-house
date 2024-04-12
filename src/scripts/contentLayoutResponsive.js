import platform from "platform";
import { alignPrograms } from "./programs";

const cl = console.log.bind(console);

// const programs

const responsiveLayout = () => {
  alignPrograms();
  // TODO:
  // Modify the size of the content container for mobile/tablet view
  const contentCtn = document.getElementById("content-container");
  if (
    platform.os.family.includes("iOS") ||
    platform.os.family.includes("Android")
  ) {
    contentCtn.style.paddingLeft = "2em";
    contentCtn.style.paddingRight = "2em";
  }
};

export { responsiveLayout };
