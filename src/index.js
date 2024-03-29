import { reloadPage, scrollToPart } from "./scripts/navBarFunc";
import { automaticScrolling } from "./scripts/aboutUS";
import { modifyYear } from "./scripts/copyRight";
import { alignPrograms } from "./scripts/programs";

document.addEventListener('DOMContentLoaded', () => {
  reloadPage();
  scrollToPart();
  automaticScrolling();
  alignPrograms();
  modifyYear();
})