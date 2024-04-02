import platform from 'platform';
import { alignPrograms } from './programs';

const responsiveLayout = () => {
  alignPrograms();
  // TODO:
  // Modify the size of the content container for mobile/tablet view
  if (platform.isMobile) {
    const contentCtn = document.getElementById("content-container");
    contentCtn.style.paddingLeft = "1em";
    contentCtn.style.paddingRight = "1em";
  }

};

export { responsiveLayout };
