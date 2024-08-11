import {
	scrollToPart,
	triggerReload,
	updateNavigationBar
} from "./scripts/navBarFunc";
import { automaticScrolling } from "./scripts/aboutUS";
import { modifyYear } from "./scripts/copyRight";
import { responsiveLayout } from "./scripts/contentLayoutResponsive";

document.addEventListener("DOMContentLoaded", () => {
	triggerReload();
	updateNavigationBar();
	scrollToPart();
    automaticScrolling();
    responsiveLayout();
    modifyYear();
});
