import { reloadPage, scrollToPart } from "./scripts/navBarFunc";
import { automaticScrolling } from "./scripts/aboutUS";
import { modifyYear } from "./scripts/copyRight";
import { responsiveLayout } from "./scripts/contentLayoutResponsive";

document.addEventListener('DOMContentLoaded', () => {
  reloadPage();
  scrollToPart();
  automaticScrolling();
  responsiveLayout();
  modifyYear();
})