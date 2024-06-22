import { reloadPage, removeSelectedStyle, scrollToPart } from "./scripts/navBarFunc";
import { automaticScrolling } from "./scripts/aboutUS";
import { modifyYear } from "./scripts/copyRight";
import { responsiveLayout } from "./scripts/contentLayoutResponsive";

document.addEventListener('DOMContentLoaded', () => {
  reloadPage();
  scrollToPart();
  removeSelectedStyle();
  automaticScrolling();
  responsiveLayout();
  modifyYear();
})