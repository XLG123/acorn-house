import { alignPrograms } from "./programs";

const cl = console.log.bind(console);

// const removeTitleBgImg = () => {
//   const programsTitle = document.getElementById("programs-title");
//   programsTitle.style.backgroundImage =
//     'url("../../src/assets/images/programs-paper.png"), url("../../src/assets/images/acornBanner2.png")';
//   programsTitle.style.backgroundRepeat = "no-repeat, space repeat";
//   programsTitle.style.backgroundPosition = "left 50% top 0.25em";
//   programsTitle.style.backgroundSize = "8em, 4em";
// };

const responsiveLayout = () => {
  alignPrograms();
};

export { responsiveLayout };
