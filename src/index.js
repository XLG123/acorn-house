import {
	reloadPage,
	scrollToPart,
	updateNavigationBar,
} from "./scripts/navBarFunc";
import { automaticScrolling } from "./scripts/aboutUS";
import { modifyYear } from "./scripts/copyRight";
import { responsiveLayout } from "./scripts/contentLayoutResponsive";

document.addEventListener("DOMContentLoaded", () => {
	reloadPage();
	scrollToPart();
	updateNavigationBar();
	automaticScrolling();
	responsiveLayout();
	modifyYear();
});
