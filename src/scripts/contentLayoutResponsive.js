import platform from 'platform';
import { alignPrograms } from './programs';

const cl = console.log.bind(console);

const responsiveLayout = () => {

  alignPrograms();
  // TODO:
  // Modify the size of the content container for mobile/tablet view
  const contentCtn = document.getElementById("content-container");
  if (platform.name.includes("mobile") || platform.name.includes("Mobile")) {
    contentCtn.style.paddingLeft = "1em";
    contentCtn.style.paddingRight = "1em";
    cl(platform.toString());
    cl(platform.name);
    contentCtn.style.backgroundColor = "red";
  }

};

export { responsiveLayout };
