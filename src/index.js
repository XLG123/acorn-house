import { reloadPage, scrollToPart } from "./scripts/navBarFunc";
import { modifyYear } from "./scripts/copyRight";

document.addEventListener('DOMContentLoaded', () => {
  reloadPage();
  scrollToPart();
  modifyYear();
})