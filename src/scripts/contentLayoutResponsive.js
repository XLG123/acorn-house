import platform from 'platform';
import { alignPrograms } from './programs';

const responsiveLayout = () => {
  alignPrograms();
  // TODO:
  // Modify the size of the content container for mobile/tablet view
  const contentCtn = document.getElementById("content-container");
  if (platform.isMobile) {
    contentCtn.style.paddingLeft = "1em";
    contentCtn.style.paddingRight = "1em";
    contentCtn.style.backgroundColor = "black";
  } else {
    contentCtn.style.backgroundColor = "Blue";
  }

};

export { responsiveLayout };
