import { reloadPage, scrollToPart } from "./scripts/navBarFunc";
import { automaticScrolling } from "./scripts/aboutUS";
import { modifyYear } from "./scripts/copyRight";

document.addEventListener('DOMContentLoaded', () => {
  reloadPage();
  scrollToPart();
  automaticScrolling();
  modifyYear();
})