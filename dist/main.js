/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_navBarFunc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/navBarFunc */ \"./src/scripts/navBarFunc.js\");\n/* harmony import */ var _scripts_copyRight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/copyRight */ \"./src/scripts/copyRight.js\");\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  (0,_scripts_navBarFunc__WEBPACK_IMPORTED_MODULE_0__.reloadPage)();\n  (0,_scripts_navBarFunc__WEBPACK_IMPORTED_MODULE_0__.scrollToPart)();\n  (0,_scripts_copyRight__WEBPACK_IMPORTED_MODULE_1__.modifyYear)();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7O0FBQWdFO0FBQ2Y7QUFFakRHLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUNsREosK0RBQVUsQ0FBQyxDQUFDO0VBQ1pDLGlFQUFZLENBQUMsQ0FBQztFQUNkQyw4REFBVSxDQUFDLENBQUM7QUFDZCxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hY29ybi1ob3VzZS8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbG9hZFBhZ2UsIHNjcm9sbFRvUGFydCB9IGZyb20gXCIuL3NjcmlwdHMvbmF2QmFyRnVuY1wiO1xuaW1wb3J0IHsgbW9kaWZ5WWVhciB9IGZyb20gXCIuL3NjcmlwdHMvY29weVJpZ2h0XCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIHJlbG9hZFBhZ2UoKTtcbiAgc2Nyb2xsVG9QYXJ0KCk7XG4gIG1vZGlmeVllYXIoKTtcbn0pIl0sIm5hbWVzIjpbInJlbG9hZFBhZ2UiLCJzY3JvbGxUb1BhcnQiLCJtb2RpZnlZZWFyIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/copyRight.js":
/*!**********************************!*\
  !*** ./src/scripts/copyRight.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   modifyYear: function() { return /* binding */ modifyYear; }\n/* harmony export */ });\nconst modifyYear = () => {\n  let today = new Date();\n  let currYear = today.getFullYear();\n  let el = document.getElementById(\"curr-year\");\n  el.textContent = currYear;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9jb3B5UmlnaHQuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLFVBQVUsR0FBR0EsQ0FBQSxLQUFNO0VBQ3ZCLElBQUlDLEtBQUssR0FBRyxJQUFJQyxJQUFJLENBQUMsQ0FBQztFQUN0QixJQUFJQyxRQUFRLEdBQUdGLEtBQUssQ0FBQ0csV0FBVyxDQUFDLENBQUM7RUFDbEMsSUFBSUMsRUFBRSxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxXQUFXLENBQUM7RUFDN0NGLEVBQUUsQ0FBQ0csV0FBVyxHQUFHTCxRQUFRO0FBQzNCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hY29ybi1ob3VzZS8uL3NyYy9zY3JpcHRzL2NvcHlSaWdodC5qcz8zMTEwIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1vZGlmeVllYXIgPSAoKSA9PiB7XG4gIGxldCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gIGxldCBjdXJyWWVhciA9IHRvZGF5LmdldEZ1bGxZZWFyKCk7XG4gIGxldCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3Vyci15ZWFyXCIpO1xuICBlbC50ZXh0Q29udGVudCA9IGN1cnJZZWFyO1xufVxuXG5leHBvcnQgeyBtb2RpZnlZZWFyIH0iXSwibmFtZXMiOlsibW9kaWZ5WWVhciIsInRvZGF5IiwiRGF0ZSIsImN1cnJZZWFyIiwiZ2V0RnVsbFllYXIiLCJlbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ0ZXh0Q29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/copyRight.js\n");

/***/ }),

/***/ "./src/scripts/navBarFunc.js":
/*!***********************************!*\
  !*** ./src/scripts/navBarFunc.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   reloadPage: function() { return /* binding */ reloadPage; },\n/* harmony export */   scrollToPart: function() { return /* binding */ scrollToPart; }\n/* harmony export */ });\nconst reloadPage = () => {\n  const schoolName = document.getElementById(\"school-name-container\");\n  schoolName.addEventListener(\"click\", () => {\n    document.location.reload();\n  });\n};\nconst scrollToPart = () => {\n  const navLinks = document.getElementById(\"nav-links\");\n  const aboutUSSection = document.getElementById(\"about-us-container\");\n  const programsSection = document.getElementById(\"programs-container\");\n  const contactInfoSection = document.getElementById(\"contact-info-container\");\n  navLinks.addEventListener(\"click\", e => {\n    if (e.target.classList.contains(\"about-us-option\")) {\n      aboutUSSection.scrollIntoView();\n    } else if (e.target.classList.contains(\"programs-option\")) {\n      programsSection.scrollIntoView();\n    } else {\n      contactInfoSection.scrollIntoView();\n    }\n  });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9uYXZCYXJGdW5jLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsTUFBTUEsVUFBVSxHQUFHQSxDQUFBLEtBQU07RUFDdkIsTUFBTUMsVUFBVSxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyx1QkFBdUIsQ0FBQztFQUNuRUYsVUFBVSxDQUFDRyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsTUFBTTtJQUN6Q0YsUUFBUSxDQUFDRyxRQUFRLENBQUNDLE1BQU0sQ0FBQyxDQUFDO0VBQzVCLENBQUMsQ0FBQztBQUNKLENBQUM7QUFFRCxNQUFNQyxZQUFZLEdBQUdBLENBQUEsS0FBTTtFQUN6QixNQUFNQyxRQUFRLEdBQUdOLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFdBQVcsQ0FBQztFQUNyRCxNQUFNTSxjQUFjLEdBQUdQLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLG9CQUFvQixDQUFDO0VBQ3BFLE1BQU1PLGVBQWUsR0FBR1IsUUFBUSxDQUFDQyxjQUFjLENBQUMsb0JBQW9CLENBQUM7RUFDckUsTUFBTVEsa0JBQWtCLEdBQUdULFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLHdCQUF3QixDQUFDO0VBQzVFSyxRQUFRLENBQUNKLGdCQUFnQixDQUFDLE9BQU8sRUFBR1EsQ0FBQyxJQUFLO0lBQ3hDLElBQUlBLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxTQUFTLENBQUNDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFO01BQ2xETixjQUFjLENBQUNPLGNBQWMsQ0FBQyxDQUFDO0lBQ2pDLENBQUMsTUFBTSxJQUFJSixDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsRUFBRTtNQUN6REwsZUFBZSxDQUFDTSxjQUFjLENBQUMsQ0FBQztJQUNsQyxDQUFDLE1BQU07TUFDTEwsa0JBQWtCLENBQUNLLGNBQWMsQ0FBQyxDQUFDO0lBQ3JDO0VBQ0YsQ0FBQyxDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Fjb3JuLWhvdXNlLy4vc3JjL3NjcmlwdHMvbmF2QmFyRnVuYy5qcz82NTE2Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHJlbG9hZFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHNjaG9vbE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNjaG9vbC1uYW1lLWNvbnRhaW5lclwiKTtcbiAgc2Nob29sTmFtZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGRvY3VtZW50LmxvY2F0aW9uLnJlbG9hZCgpO1xuICB9KVxufVxuXG5jb25zdCBzY3JvbGxUb1BhcnQgPSAoKSA9PiB7XG4gIGNvbnN0IG5hdkxpbmtzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXYtbGlua3NcIik7XG4gIGNvbnN0IGFib3V0VVNTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhYm91dC11cy1jb250YWluZXJcIik7XG4gIGNvbnN0IHByb2dyYW1zU2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZ3JhbXMtY29udGFpbmVyXCIpO1xuICBjb25zdCBjb250YWN0SW5mb1NlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRhY3QtaW5mby1jb250YWluZXJcIik7XG4gIG5hdkxpbmtzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJhYm91dC11cy1vcHRpb25cIikpIHtcbiAgICAgIGFib3V0VVNTZWN0aW9uLnNjcm9sbEludG9WaWV3KCk7XG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJwcm9ncmFtcy1vcHRpb25cIikpIHtcbiAgICAgIHByb2dyYW1zU2VjdGlvbi5zY3JvbGxJbnRvVmlldygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250YWN0SW5mb1NlY3Rpb24uc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgeyByZWxvYWRQYWdlLCBzY3JvbGxUb1BhcnQgfSJdLCJuYW1lcyI6WyJyZWxvYWRQYWdlIiwic2Nob29sTmFtZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwibG9jYXRpb24iLCJyZWxvYWQiLCJzY3JvbGxUb1BhcnQiLCJuYXZMaW5rcyIsImFib3V0VVNTZWN0aW9uIiwicHJvZ3JhbXNTZWN0aW9uIiwiY29udGFjdEluZm9TZWN0aW9uIiwiZSIsInRhcmdldCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwic2Nyb2xsSW50b1ZpZXciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/navBarFunc.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2NzcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hY29ybi1ob3VzZS8uL3NyYy9pbmRleC5zY3NzPzk3NDUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;