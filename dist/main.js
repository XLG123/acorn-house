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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_navBarFunc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/navBarFunc */ \"./src/scripts/navBarFunc.js\");\n/* harmony import */ var _scripts_aboutUS__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/aboutUS */ \"./src/scripts/aboutUS.js\");\n/* harmony import */ var _scripts_copyRight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/copyRight */ \"./src/scripts/copyRight.js\");\n/* harmony import */ var _scripts_contentLayoutResponsive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/contentLayoutResponsive */ \"./src/scripts/contentLayoutResponsive.js\");\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  (0,_scripts_navBarFunc__WEBPACK_IMPORTED_MODULE_0__.reloadPage)();\n  (0,_scripts_navBarFunc__WEBPACK_IMPORTED_MODULE_0__.scrollToPart)();\n  (0,_scripts_aboutUS__WEBPACK_IMPORTED_MODULE_1__.automaticScrolling)();\n  (0,_scripts_contentLayoutResponsive__WEBPACK_IMPORTED_MODULE_3__.responsiveLayout)();\n  (0,_scripts_copyRight__WEBPACK_IMPORTED_MODULE_2__.modifyYear)();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBZ0U7QUFDVDtBQUNOO0FBQ29CO0FBRXJFSyxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLE1BQU07RUFDbEROLCtEQUFVLENBQUMsQ0FBQztFQUNaQyxpRUFBWSxDQUFDLENBQUM7RUFDZEMsb0VBQWtCLENBQUMsQ0FBQztFQUNwQkUsa0ZBQWdCLENBQUMsQ0FBQztFQUNsQkQsOERBQVUsQ0FBQyxDQUFDO0FBQ2QsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWNvcm4taG91c2UvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZWxvYWRQYWdlLCBzY3JvbGxUb1BhcnQgfSBmcm9tIFwiLi9zY3JpcHRzL25hdkJhckZ1bmNcIjtcbmltcG9ydCB7IGF1dG9tYXRpY1Njcm9sbGluZyB9IGZyb20gXCIuL3NjcmlwdHMvYWJvdXRVU1wiO1xuaW1wb3J0IHsgbW9kaWZ5WWVhciB9IGZyb20gXCIuL3NjcmlwdHMvY29weVJpZ2h0XCI7XG5pbXBvcnQgeyByZXNwb25zaXZlTGF5b3V0IH0gZnJvbSBcIi4vc2NyaXB0cy9jb250ZW50TGF5b3V0UmVzcG9uc2l2ZVwiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICByZWxvYWRQYWdlKCk7XG4gIHNjcm9sbFRvUGFydCgpO1xuICBhdXRvbWF0aWNTY3JvbGxpbmcoKTtcbiAgcmVzcG9uc2l2ZUxheW91dCgpO1xuICBtb2RpZnlZZWFyKCk7XG59KSJdLCJuYW1lcyI6WyJyZWxvYWRQYWdlIiwic2Nyb2xsVG9QYXJ0IiwiYXV0b21hdGljU2Nyb2xsaW5nIiwibW9kaWZ5WWVhciIsInJlc3BvbnNpdmVMYXlvdXQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/aboutUS.js":
/*!********************************!*\
  !*** ./src/scripts/aboutUS.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   automaticScrolling: function() { return /* binding */ automaticScrolling; }\n/* harmony export */ });\nconst automaticScrolling = () => {\n  const el = document.getElementById(\"images\");\n  const imgOne = document.getElementById(\"img1-container\");\n  const imgTwo = document.getElementById(\"img2-container\");\n  const imgThree = document.getElementById(\"img3-container\");\n  let imgOneBounding,\n    imgTwoBounding,\n    imgThreeBounding = 0;\n  const imgCtnBounding = el.getBoundingClientRect();\n  const imgScroll = () => {\n    imgOneBounding = imgOne.getBoundingClientRect();\n    imgTwoBounding = imgTwo.getBoundingClientRect();\n    imgThreeBounding = imgThree.getBoundingClientRect();\n    if (imgOneBounding.left < imgCtnBounding.left && imgOneBounding.right > imgCtnBounding.left) {\n      el.scrollBy({\n        left: imgTwoBounding.right - imgCtnBounding.right,\n        behavior: \"smooth\"\n      });\n    } else if (imgTwoBounding.left < imgCtnBounding.left && imgTwoBounding.right > imgCtnBounding.left) {\n      el.scrollBy({\n        left: imgThreeBounding.right - imgCtnBounding.right,\n        behavior: \"smooth\"\n      });\n    } else if (imgThreeBounding.left === imgCtnBounding.left && imgThreeBounding.right === imgCtnBounding.right && imgOneBounding.left < 0) {\n      el.scrollBy({\n        left: imgOneBounding.left - imgThreeBounding.left,\n        behavior: \"instant\"\n      });\n    } else {\n      el.scrollBy({\n        left: imgCtnBounding.width + 5,\n        behavior: \"smooth\"\n      });\n    }\n  };\n  let scrollTimer = setInterval(imgScroll, 5000);\n  el.addEventListener(\"mouseover\", () => {\n    clearInterval(scrollTimer);\n  });\n  el.addEventListener(\"mouseleave\", () => {\n    scrollTimer = setInterval(imgScroll, 5000);\n  });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9hYm91dFVTLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxrQkFBa0IsR0FBR0EsQ0FBQSxLQUFNO0VBQy9CLE1BQU1DLEVBQUUsR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsUUFBUSxDQUFDO0VBQzVDLE1BQU1DLE1BQU0sR0FBR0YsUUFBUSxDQUFDQyxjQUFjLENBQUMsZ0JBQWdCLENBQUM7RUFDeEQsTUFBTUUsTUFBTSxHQUFHSCxRQUFRLENBQUNDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQztFQUN4RCxNQUFNRyxRQUFRLEdBQUdKLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGdCQUFnQixDQUFDO0VBRTFELElBQUlJLGNBQWM7SUFDaEJDLGNBQWM7SUFDZEMsZ0JBQWdCLEdBQUcsQ0FBQztFQUV0QixNQUFNQyxjQUFjLEdBQUdULEVBQUUsQ0FBQ1UscUJBQXFCLENBQUMsQ0FBQztFQUVqRCxNQUFNQyxTQUFTLEdBQUdBLENBQUEsS0FBTTtJQUN0QkwsY0FBYyxHQUFHSCxNQUFNLENBQUNPLHFCQUFxQixDQUFDLENBQUM7SUFDL0NILGNBQWMsR0FBR0gsTUFBTSxDQUFDTSxxQkFBcUIsQ0FBQyxDQUFDO0lBQy9DRixnQkFBZ0IsR0FBR0gsUUFBUSxDQUFDSyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ25ELElBQ0VKLGNBQWMsQ0FBQ00sSUFBSSxHQUFHSCxjQUFjLENBQUNHLElBQUksSUFDekNOLGNBQWMsQ0FBQ08sS0FBSyxHQUFHSixjQUFjLENBQUNHLElBQUksRUFDMUM7TUFDQVosRUFBRSxDQUFDYyxRQUFRLENBQUM7UUFDVkYsSUFBSSxFQUFFTCxjQUFjLENBQUNNLEtBQUssR0FBR0osY0FBYyxDQUFDSSxLQUFLO1FBQ2pERSxRQUFRLEVBQUU7TUFDWixDQUFDLENBQUM7SUFDSixDQUFDLE1BQU0sSUFDTFIsY0FBYyxDQUFDSyxJQUFJLEdBQUdILGNBQWMsQ0FBQ0csSUFBSSxJQUN6Q0wsY0FBYyxDQUFDTSxLQUFLLEdBQUdKLGNBQWMsQ0FBQ0csSUFBSSxFQUMxQztNQUNBWixFQUFFLENBQUNjLFFBQVEsQ0FBQztRQUNWRixJQUFJLEVBQUVKLGdCQUFnQixDQUFDSyxLQUFLLEdBQUdKLGNBQWMsQ0FBQ0ksS0FBSztRQUNuREUsUUFBUSxFQUFFO01BQ1osQ0FBQyxDQUFDO0lBQ0osQ0FBQyxNQUFNLElBQ0xQLGdCQUFnQixDQUFDSSxJQUFJLEtBQUtILGNBQWMsQ0FBQ0csSUFBSSxJQUM3Q0osZ0JBQWdCLENBQUNLLEtBQUssS0FBS0osY0FBYyxDQUFDSSxLQUFLLElBQy9DUCxjQUFjLENBQUNNLElBQUksR0FBRyxDQUFDLEVBQ3ZCO01BQ0FaLEVBQUUsQ0FBQ2MsUUFBUSxDQUFDO1FBQ1ZGLElBQUksRUFBRU4sY0FBYyxDQUFDTSxJQUFJLEdBQUdKLGdCQUFnQixDQUFDSSxJQUFJO1FBQ2pERyxRQUFRLEVBQUU7TUFDWixDQUFDLENBQUM7SUFDSixDQUFDLE1BQU07TUFDTGYsRUFBRSxDQUFDYyxRQUFRLENBQUM7UUFDVkYsSUFBSSxFQUFFSCxjQUFjLENBQUNPLEtBQUssR0FBRyxDQUFDO1FBQzlCRCxRQUFRLEVBQUU7TUFDWixDQUFDLENBQUM7SUFDSjtFQUNGLENBQUM7RUFFRCxJQUFJRSxXQUFXLEdBQUdDLFdBQVcsQ0FBQ1AsU0FBUyxFQUFFLElBQUksQ0FBQztFQUU5Q1gsRUFBRSxDQUFDbUIsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLE1BQU07SUFDckNDLGFBQWEsQ0FBQ0gsV0FBVyxDQUFDO0VBQzVCLENBQUMsQ0FBQztFQUVGakIsRUFBRSxDQUFDbUIsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLE1BQU07SUFDdENGLFdBQVcsR0FBR0MsV0FBVyxDQUFDUCxTQUFTLEVBQUUsSUFBSSxDQUFDO0VBQzVDLENBQUMsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hY29ybi1ob3VzZS8uL3NyYy9zY3JpcHRzL2Fib3V0VVMuanM/N2Y5YyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhdXRvbWF0aWNTY3JvbGxpbmcgPSAoKSA9PiB7XG4gIGNvbnN0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbWFnZXNcIik7XG4gIGNvbnN0IGltZ09uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW1nMS1jb250YWluZXJcIik7XG4gIGNvbnN0IGltZ1R3byA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW1nMi1jb250YWluZXJcIik7XG4gIGNvbnN0IGltZ1RocmVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbWczLWNvbnRhaW5lclwiKTtcblxuICBsZXQgaW1nT25lQm91bmRpbmcsXG4gICAgaW1nVHdvQm91bmRpbmcsXG4gICAgaW1nVGhyZWVCb3VuZGluZyA9IDA7XG5cbiAgY29uc3QgaW1nQ3RuQm91bmRpbmcgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICBjb25zdCBpbWdTY3JvbGwgPSAoKSA9PiB7XG4gICAgaW1nT25lQm91bmRpbmcgPSBpbWdPbmUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgaW1nVHdvQm91bmRpbmcgPSBpbWdUd28uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgaW1nVGhyZWVCb3VuZGluZyA9IGltZ1RocmVlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGlmIChcbiAgICAgIGltZ09uZUJvdW5kaW5nLmxlZnQgPCBpbWdDdG5Cb3VuZGluZy5sZWZ0ICYmXG4gICAgICBpbWdPbmVCb3VuZGluZy5yaWdodCA+IGltZ0N0bkJvdW5kaW5nLmxlZnRcbiAgICApIHtcbiAgICAgIGVsLnNjcm9sbEJ5KHtcbiAgICAgICAgbGVmdDogaW1nVHdvQm91bmRpbmcucmlnaHQgLSBpbWdDdG5Cb3VuZGluZy5yaWdodCxcbiAgICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCIsXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgaW1nVHdvQm91bmRpbmcubGVmdCA8IGltZ0N0bkJvdW5kaW5nLmxlZnQgJiZcbiAgICAgIGltZ1R3b0JvdW5kaW5nLnJpZ2h0ID4gaW1nQ3RuQm91bmRpbmcubGVmdFxuICAgICkge1xuICAgICAgZWwuc2Nyb2xsQnkoe1xuICAgICAgICBsZWZ0OiBpbWdUaHJlZUJvdW5kaW5nLnJpZ2h0IC0gaW1nQ3RuQm91bmRpbmcucmlnaHQsXG4gICAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIGltZ1RocmVlQm91bmRpbmcubGVmdCA9PT0gaW1nQ3RuQm91bmRpbmcubGVmdCAmJlxuICAgICAgaW1nVGhyZWVCb3VuZGluZy5yaWdodCA9PT0gaW1nQ3RuQm91bmRpbmcucmlnaHQgJiZcbiAgICAgIGltZ09uZUJvdW5kaW5nLmxlZnQgPCAwXG4gICAgKSB7XG4gICAgICBlbC5zY3JvbGxCeSh7XG4gICAgICAgIGxlZnQ6IGltZ09uZUJvdW5kaW5nLmxlZnQgLSBpbWdUaHJlZUJvdW5kaW5nLmxlZnQsXG4gICAgICAgIGJlaGF2aW9yOiBcImluc3RhbnRcIixcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbC5zY3JvbGxCeSh7XG4gICAgICAgIGxlZnQ6IGltZ0N0bkJvdW5kaW5nLndpZHRoICsgNSxcbiAgICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCIsXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgbGV0IHNjcm9sbFRpbWVyID0gc2V0SW50ZXJ2YWwoaW1nU2Nyb2xsLCA1MDAwKTtcblxuICBlbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsICgpID0+IHtcbiAgICBjbGVhckludGVydmFsKHNjcm9sbFRpbWVyKTtcbiAgfSk7XG5cbiAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xuICAgIHNjcm9sbFRpbWVyID0gc2V0SW50ZXJ2YWwoaW1nU2Nyb2xsLCA1MDAwKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgeyBhdXRvbWF0aWNTY3JvbGxpbmcgfTtcbiJdLCJuYW1lcyI6WyJhdXRvbWF0aWNTY3JvbGxpbmciLCJlbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbWdPbmUiLCJpbWdUd28iLCJpbWdUaHJlZSIsImltZ09uZUJvdW5kaW5nIiwiaW1nVHdvQm91bmRpbmciLCJpbWdUaHJlZUJvdW5kaW5nIiwiaW1nQ3RuQm91bmRpbmciLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJpbWdTY3JvbGwiLCJsZWZ0IiwicmlnaHQiLCJzY3JvbGxCeSIsImJlaGF2aW9yIiwid2lkdGgiLCJzY3JvbGxUaW1lciIsInNldEludGVydmFsIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsZWFySW50ZXJ2YWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/aboutUS.js\n");

/***/ }),

/***/ "./src/scripts/contentLayoutResponsive.js":
/*!************************************************!*\
  !*** ./src/scripts/contentLayoutResponsive.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   responsiveLayout: function() { return /* binding */ responsiveLayout; }\n/* harmony export */ });\n/* harmony import */ var _onlineContact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./onlineContact */ \"./src/scripts/onlineContact.js\");\n/* harmony import */ var _programs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./programs */ \"./src/scripts/programs.js\");\n\n\n\n// const cl = console.log.bind(console);\n\nconst responsiveLayout = () => {\n  (0,_programs__WEBPACK_IMPORTED_MODULE_1__.alignPrograms)();\n  (0,_onlineContact__WEBPACK_IMPORTED_MODULE_0__.restructureSubtitle)();\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9jb250ZW50TGF5b3V0UmVzcG9uc2l2ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0Q7QUFDWDs7QUFFM0M7O0FBRUEsTUFBTUUsZ0JBQWdCLEdBQUdBLENBQUEsS0FBTTtFQUM3QkQsd0RBQWEsQ0FBQyxDQUFDO0VBQ2ZELG1FQUFtQixDQUFDLENBQUM7QUFDdkIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Fjb3JuLWhvdXNlLy4vc3JjL3NjcmlwdHMvY29udGVudExheW91dFJlc3BvbnNpdmUuanM/OTdkNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZXN0cnVjdHVyZVN1YnRpdGxlIH0gZnJvbSBcIi4vb25saW5lQ29udGFjdFwiO1xuaW1wb3J0IHsgYWxpZ25Qcm9ncmFtcyB9IGZyb20gXCIuL3Byb2dyYW1zXCI7XG5cbi8vIGNvbnN0IGNsID0gY29uc29sZS5sb2cuYmluZChjb25zb2xlKTtcblxuY29uc3QgcmVzcG9uc2l2ZUxheW91dCA9ICgpID0+IHtcbiAgYWxpZ25Qcm9ncmFtcygpO1xuICByZXN0cnVjdHVyZVN1YnRpdGxlKCk7XG59O1xuXG5leHBvcnQgeyByZXNwb25zaXZlTGF5b3V0IH07XG4iXSwibmFtZXMiOlsicmVzdHJ1Y3R1cmVTdWJ0aXRsZSIsImFsaWduUHJvZ3JhbXMiLCJyZXNwb25zaXZlTGF5b3V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/contentLayoutResponsive.js\n");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   reloadPage: function() { return /* binding */ reloadPage; },\n/* harmony export */   scrollToPart: function() { return /* binding */ scrollToPart; }\n/* harmony export */ });\nconst reloadPage = () => {\n  const schoolName = document.getElementById(\"school-name-container\");\n  schoolName.addEventListener(\"click\", () => {\n    document.location.reload();\n  });\n};\nconst scrollToPart = () => {\n  const navLinks = document.getElementById(\"nav-links\");\n  const aboutUSSection = document.getElementById(\"about-us-container\");\n  const programsSection = document.getElementById(\"programs-container\");\n  const contactInfoSection = document.getElementById(\"contact-info-container\");\n  const aboutUs = document.getElementById(\"selected-about-us\");\n  const programs = document.getElementById(\"selected-programs\");\n  const contactInfo = document.getElementById(\"selected-contact-info\");\n  navLinks.addEventListener(\"click\", e => {\n    const target = e.target.classList;\n    if (target.contains(\"about-us-option\")) {\n      aboutUSSection.scrollIntoView();\n      aboutUs.classList.add(\"selected\");\n      if (programs.classList.contains(\"selected\")) {\n        programs.classList.remove(\"selected\");\n      } else if (contactInfo.classList.contains(\"selected\")) {\n        contactInfo.classList.remove(\"selected\");\n      }\n    } else if (target.contains(\"programs-option\")) {\n      programsSection.scrollIntoView();\n      programs.classList.add(\"selected\");\n      if (aboutUs.classList.contains(\"selected\")) {\n        aboutUs.classList.remove(\"selected\");\n      } else if (contactInfo.classList.contains(\"selected\")) {\n        contactInfo.classList.remove(\"selected\");\n      }\n    } else {\n      contactInfoSection.scrollIntoView();\n      contactInfo.classList.add(\"selected\");\n      if (aboutUs.classList.contains(\"selected\")) {\n        aboutUs.classList.remove(\"selected\");\n      } else if (programs.classList.contains(\"selected\")) {\n        programs.classList.remove(\"selected\");\n      }\n    }\n  });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxFQUFFO1FBQ2xETCxRQUFRLENBQUNJLFNBQVMsQ0FBQ0ksTUFBTSxDQUFDLFVBQVUsQ0FBQztNQUN2QztJQUNGO0VBQ0YsQ0FBQyxDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Fjb3JuLWhvdXNlLy4vc3JjL3NjcmlwdHMvbmF2QmFyRnVuYy5qcz82NTE2Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHJlbG9hZFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHNjaG9vbE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNjaG9vbC1uYW1lLWNvbnRhaW5lclwiKTtcbiAgc2Nob29sTmFtZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGRvY3VtZW50LmxvY2F0aW9uLnJlbG9hZCgpO1xuICB9KTtcbn07XG5cbmNvbnN0IHNjcm9sbFRvUGFydCA9ICgpID0+IHtcbiAgY29uc3QgbmF2TGlua3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdi1saW5rc1wiKTtcbiAgY29uc3QgYWJvdXRVU1NlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFib3V0LXVzLWNvbnRhaW5lclwiKTtcbiAgY29uc3QgcHJvZ3JhbXNTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9ncmFtcy1jb250YWluZXJcIik7XG4gIGNvbnN0IGNvbnRhY3RJbmZvU2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFjdC1pbmZvLWNvbnRhaW5lclwiKTtcbiAgY29uc3QgYWJvdXRVcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VsZWN0ZWQtYWJvdXQtdXNcIik7XG4gIGNvbnN0IHByb2dyYW1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWxlY3RlZC1wcm9ncmFtc1wiKTtcbiAgY29uc3QgY29udGFjdEluZm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlbGVjdGVkLWNvbnRhY3QtaW5mb1wiKTtcbiAgbmF2TGlua3MuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQuY2xhc3NMaXN0O1xuICAgIGlmICh0YXJnZXQuY29udGFpbnMoXCJhYm91dC11cy1vcHRpb25cIikpIHtcbiAgICAgIGFib3V0VVNTZWN0aW9uLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICBhYm91dFVzLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgIGlmIChwcm9ncmFtcy5jbGFzc0xpc3QuY29udGFpbnMoXCJzZWxlY3RlZFwiKSkge1xuICAgICAgICBwcm9ncmFtcy5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gICAgICB9IGVsc2UgaWYgKGNvbnRhY3RJbmZvLmNsYXNzTGlzdC5jb250YWlucyhcInNlbGVjdGVkXCIpKSB7XG4gICAgICAgIGNvbnRhY3RJbmZvLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRhcmdldC5jb250YWlucyhcInByb2dyYW1zLW9wdGlvblwiKSkge1xuICAgICAgcHJvZ3JhbXNTZWN0aW9uLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICBwcm9ncmFtcy5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICBpZiAoYWJvdXRVcy5jbGFzc0xpc3QuY29udGFpbnMoXCJzZWxlY3RlZFwiKSkge1xuICAgICAgICBhYm91dFVzLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgICAgIH0gZWxzZSBpZiAoY29udGFjdEluZm8uY2xhc3NMaXN0LmNvbnRhaW5zKFwic2VsZWN0ZWRcIikpIHtcbiAgICAgICAgY29udGFjdEluZm8uY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb250YWN0SW5mb1NlY3Rpb24uc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgIGNvbnRhY3RJbmZvLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgIGlmIChhYm91dFVzLmNsYXNzTGlzdC5jb250YWlucyhcInNlbGVjdGVkXCIpKSB7XG4gICAgICAgIGFib3V0VXMuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuICAgICAgfSBlbHNlIGlmIChwcm9ncmFtcy5jbGFzc0xpc3QuY29udGFpbnMoXCJzZWxlY3RlZFwiKSkge1xuICAgICAgICBwcm9ncmFtcy5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydCB7IHJlbG9hZFBhZ2UsIHNjcm9sbFRvUGFydCB9O1xuIl0sIm5hbWVzIjpbInJlbG9hZFBhZ2UiLCJzY2hvb2xOYW1lIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJsb2NhdGlvbiIsInJlbG9hZCIsInNjcm9sbFRvUGFydCIsIm5hdkxpbmtzIiwiYWJvdXRVU1NlY3Rpb24iLCJwcm9ncmFtc1NlY3Rpb24iLCJjb250YWN0SW5mb1NlY3Rpb24iLCJhYm91dFVzIiwicHJvZ3JhbXMiLCJjb250YWN0SW5mbyIsImUiLCJ0YXJnZXQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInNjcm9sbEludG9WaWV3IiwiYWRkIiwicmVtb3ZlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/navBarFunc.js\n");

/***/ }),

/***/ "./src/scripts/onlineContact.js":
/*!**************************************!*\
  !*** ./src/scripts/onlineContact.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   restructureSubtitle: function() { return /* binding */ restructureSubtitle; }\n/* harmony export */ });\n// Add a margin to the bottom of the container if the container's height changes, otherwise set it to 0px.\nconst addMargin = (el, parentCtn) => {\n  if (el.offsetHeight !== 24) {\n    parentCtn.style.marginBottom = \"1em\";\n  } else {\n    parentCtn.style.marginBottom = \"0px\";\n  }\n};\n\n// Restructure the layout of the subtitle when screen size changes and the element is wrapping onto the next line.\nconst restructureSubtitle = () => {\n  const subtitleCtn = document.getElementById(\"subtitle-content\");\n  const chnSubtitle = subtitleCtn.children[1].children[1];\n  addMargin(chnSubtitle, subtitleCtn);\n  window.addEventListener(\"resize\", () => {\n    addMargin(chnSubtitle, subtitleCtn);\n  });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9vbmxpbmVDb250YWN0LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBLE1BQU1BLFNBQVMsR0FBR0EsQ0FBQ0MsRUFBRSxFQUFFQyxTQUFTLEtBQUs7RUFDakMsSUFBSUQsRUFBRSxDQUFDRSxZQUFZLEtBQUssRUFBRSxFQUFFO0lBQ3hCRCxTQUFTLENBQUNFLEtBQUssQ0FBQ0MsWUFBWSxHQUFHLEtBQUs7RUFDeEMsQ0FBQyxNQUFNO0lBQ0hILFNBQVMsQ0FBQ0UsS0FBSyxDQUFDQyxZQUFZLEdBQUcsS0FBSztFQUN4QztBQUNKLENBQUM7O0FBRUQ7QUFDQSxNQUFNQyxtQkFBbUIsR0FBR0EsQ0FBQSxLQUFNO0VBQzlCLE1BQU1DLFdBQVcsR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsa0JBQWtCLENBQUM7RUFDL0QsTUFBTUMsV0FBVyxHQUFHSCxXQUFXLENBQUNJLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQ0EsUUFBUSxDQUFDLENBQUMsQ0FBQztFQUN2RFgsU0FBUyxDQUFDVSxXQUFXLEVBQUVILFdBQVcsQ0FBQztFQUNuQ0ssTUFBTSxDQUFDQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsTUFBTTtJQUNwQ2IsU0FBUyxDQUFDVSxXQUFXLEVBQUVILFdBQVcsQ0FBQztFQUN2QyxDQUFDLENBQUM7QUFDTixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWNvcm4taG91c2UvLi9zcmMvc2NyaXB0cy9vbmxpbmVDb250YWN0LmpzP2EzYzYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQWRkIGEgbWFyZ2luIHRvIHRoZSBib3R0b20gb2YgdGhlIGNvbnRhaW5lciBpZiB0aGUgY29udGFpbmVyJ3MgaGVpZ2h0IGNoYW5nZXMsIG90aGVyd2lzZSBzZXQgaXQgdG8gMHB4LlxuY29uc3QgYWRkTWFyZ2luID0gKGVsLCBwYXJlbnRDdG4pID0+IHtcbiAgICBpZiAoZWwub2Zmc2V0SGVpZ2h0ICE9PSAyNCkge1xuICAgICAgICBwYXJlbnRDdG4uc3R5bGUubWFyZ2luQm90dG9tID0gXCIxZW1cIjtcbiAgICB9IGVsc2Uge1xuICAgICAgICBwYXJlbnRDdG4uc3R5bGUubWFyZ2luQm90dG9tID0gXCIwcHhcIjtcbiAgICB9XG59O1xuXG4vLyBSZXN0cnVjdHVyZSB0aGUgbGF5b3V0IG9mIHRoZSBzdWJ0aXRsZSB3aGVuIHNjcmVlbiBzaXplIGNoYW5nZXMgYW5kIHRoZSBlbGVtZW50IGlzIHdyYXBwaW5nIG9udG8gdGhlIG5leHQgbGluZS5cbmNvbnN0IHJlc3RydWN0dXJlU3VidGl0bGUgPSAoKSA9PiB7XG4gICAgY29uc3Qgc3VidGl0bGVDdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1YnRpdGxlLWNvbnRlbnRcIik7XG4gICAgY29uc3QgY2huU3VidGl0bGUgPSBzdWJ0aXRsZUN0bi5jaGlsZHJlblsxXS5jaGlsZHJlblsxXTtcbiAgICBhZGRNYXJnaW4oY2huU3VidGl0bGUsIHN1YnRpdGxlQ3RuKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiB7XG4gICAgICAgIGFkZE1hcmdpbihjaG5TdWJ0aXRsZSwgc3VidGl0bGVDdG4pO1xuICAgIH0pXG59O1xuXG5leHBvcnQgeyByZXN0cnVjdHVyZVN1YnRpdGxlIH07XG4iXSwibmFtZXMiOlsiYWRkTWFyZ2luIiwiZWwiLCJwYXJlbnRDdG4iLCJvZmZzZXRIZWlnaHQiLCJzdHlsZSIsIm1hcmdpbkJvdHRvbSIsInJlc3RydWN0dXJlU3VidGl0bGUiLCJzdWJ0aXRsZUN0biIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjaG5TdWJ0aXRsZSIsImNoaWxkcmVuIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/onlineContact.js\n");

/***/ }),

/***/ "./src/scripts/programs.js":
/*!*********************************!*\
  !*** ./src/scripts/programs.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   alignPrograms: function() { return /* binding */ alignPrograms; }\n/* harmony export */ });\nconst alignProgramsHelper = (eleOne, eleTwo, eleThree, eleFour, boundingOne, boundingTwo, boundingThree, verticalAlignment) => {\n  if (boundingOne + 10 >= boundingTwo && boundingTwo + 5 >= boundingThree) {\n    verticalAlignment = true;\n  } else {\n    verticalAlignment = false;\n  }\n  if (verticalAlignment) {\n    eleOne.classList.add(\"mobile-view-available-programs\");\n    eleTwo.classList.add(\"mobile-view-available-programs\");\n    eleThree.classList.add(\"mobile-view-available-programs\");\n    eleFour.classList.add(\"mobile-view-available-programs\");\n  } else {\n    eleOne.classList.remove(\"mobile-view-available-programs\");\n    eleTwo.classList.remove(\"mobile-view-available-programs\");\n    eleThree.classList.remove(\"mobile-view-available-programs\");\n    eleFour.classList.remove(\"mobile-view-available-programs\");\n  }\n};\nconst alignPrograms = () => {\n  const afterSchool = document.getElementById(\"after-school-container\");\n  const enrichmentClasses = document.getElementById(\"enrichment-classes-container\");\n  const languageLearning = document.getElementById(\"language-learning-container\");\n  const examPrep = document.getElementById(\"exam-prep-container\");\n  let ctnOnePos, ctnTwoPos, ctnThreePos;\n  let verticalAlign = false;\n  ctnOnePos = afterSchool.getBoundingClientRect().left;\n  ctnTwoPos = enrichmentClasses.getBoundingClientRect().left;\n  ctnThreePos = languageLearning.getBoundingClientRect().left;\n  alignProgramsHelper(afterSchool, enrichmentClasses, languageLearning, examPrep, ctnOnePos, ctnTwoPos, ctnThreePos, verticalAlign);\n  window.addEventListener(\"resize\", () => {\n    ctnOnePos = afterSchool.getBoundingClientRect().left;\n    ctnTwoPos = enrichmentClasses.getBoundingClientRect().left;\n    ctnThreePos = languageLearning.getBoundingClientRect().left;\n\n    // Call the alignProgramsHelper Function to check the alignment\n    alignProgramsHelper(afterSchool, enrichmentClasses, languageLearning, examPrep, ctnOnePos, ctnTwoPos, ctnThreePos);\n  });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cmlwdHMvcHJvZ3JhbXMuanM/ODEwNyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhbGlnblByb2dyYW1zSGVscGVyID0gKFxuICBlbGVPbmUsXG4gIGVsZVR3byxcbiAgZWxlVGhyZWUsXG4gIGVsZUZvdXIsXG4gIGJvdW5kaW5nT25lLFxuICBib3VuZGluZ1R3byxcbiAgYm91bmRpbmdUaHJlZSxcbiAgdmVydGljYWxBbGlnbm1lbnRcbikgPT4ge1xuICBpZiAoYm91bmRpbmdPbmUgKyAxMCA+PSBib3VuZGluZ1R3byAmJiBib3VuZGluZ1R3byArIDUgPj0gYm91bmRpbmdUaHJlZSkge1xuICAgIHZlcnRpY2FsQWxpZ25tZW50ID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICB2ZXJ0aWNhbEFsaWdubWVudCA9IGZhbHNlO1xuICB9XG5cbiAgaWYgKHZlcnRpY2FsQWxpZ25tZW50KSB7XG4gICAgZWxlT25lLmNsYXNzTGlzdC5hZGQoXCJtb2JpbGUtdmlldy1hdmFpbGFibGUtcHJvZ3JhbXNcIik7XG4gICAgZWxlVHdvLmNsYXNzTGlzdC5hZGQoXCJtb2JpbGUtdmlldy1hdmFpbGFibGUtcHJvZ3JhbXNcIik7XG4gICAgZWxlVGhyZWUuY2xhc3NMaXN0LmFkZChcIm1vYmlsZS12aWV3LWF2YWlsYWJsZS1wcm9ncmFtc1wiKTtcbiAgICBlbGVGb3VyLmNsYXNzTGlzdC5hZGQoXCJtb2JpbGUtdmlldy1hdmFpbGFibGUtcHJvZ3JhbXNcIik7XG4gIH0gZWxzZSB7XG4gICAgZWxlT25lLmNsYXNzTGlzdC5yZW1vdmUoXCJtb2JpbGUtdmlldy1hdmFpbGFibGUtcHJvZ3JhbXNcIik7XG4gICAgZWxlVHdvLmNsYXNzTGlzdC5yZW1vdmUoXCJtb2JpbGUtdmlldy1hdmFpbGFibGUtcHJvZ3JhbXNcIik7XG4gICAgZWxlVGhyZWUuY2xhc3NMaXN0LnJlbW92ZShcIm1vYmlsZS12aWV3LWF2YWlsYWJsZS1wcm9ncmFtc1wiKTtcbiAgICBlbGVGb3VyLmNsYXNzTGlzdC5yZW1vdmUoXCJtb2JpbGUtdmlldy1hdmFpbGFibGUtcHJvZ3JhbXNcIik7XG4gIH1cbn07XG5cbmNvbnN0IGFsaWduUHJvZ3JhbXMgPSAoKSA9PiB7XG4gIGNvbnN0IGFmdGVyU2Nob29sID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZnRlci1zY2hvb2wtY29udGFpbmVyXCIpO1xuICBjb25zdCBlbnJpY2htZW50Q2xhc3NlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgIFwiZW5yaWNobWVudC1jbGFzc2VzLWNvbnRhaW5lclwiXG4gICk7XG4gIGNvbnN0IGxhbmd1YWdlTGVhcm5pbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICBcImxhbmd1YWdlLWxlYXJuaW5nLWNvbnRhaW5lclwiXG4gICk7XG4gIGNvbnN0IGV4YW1QcmVwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJleGFtLXByZXAtY29udGFpbmVyXCIpO1xuXG4gIGxldCBjdG5PbmVQb3MsIGN0blR3b1BvcywgY3RuVGhyZWVQb3M7XG5cbiAgbGV0IHZlcnRpY2FsQWxpZ24gPSBmYWxzZTtcblxuICBjdG5PbmVQb3MgPSBhZnRlclNjaG9vbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xuICBjdG5Ud29Qb3MgPSBlbnJpY2htZW50Q2xhc3Nlcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xuICBjdG5UaHJlZVBvcyA9IGxhbmd1YWdlTGVhcm5pbmcuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcblxuICBhbGlnblByb2dyYW1zSGVscGVyKFxuICAgIGFmdGVyU2Nob29sLFxuICAgIGVucmljaG1lbnRDbGFzc2VzLFxuICAgIGxhbmd1YWdlTGVhcm5pbmcsXG4gICAgZXhhbVByZXAsXG4gICAgY3RuT25lUG9zLFxuICAgIGN0blR3b1BvcyxcbiAgICBjdG5UaHJlZVBvcyxcbiAgICB2ZXJ0aWNhbEFsaWduXG4gICk7XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xuICAgIGN0bk9uZVBvcyA9IGFmdGVyU2Nob29sLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XG4gICAgY3RuVHdvUG9zID0gZW5yaWNobWVudENsYXNzZXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcbiAgICBjdG5UaHJlZVBvcyA9IGxhbmd1YWdlTGVhcm5pbmcuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcblxuICAgIC8vIENhbGwgdGhlIGFsaWduUHJvZ3JhbXNIZWxwZXIgRnVuY3Rpb24gdG8gY2hlY2sgdGhlIGFsaWdubWVudFxuICAgIGFsaWduUHJvZ3JhbXNIZWxwZXIoXG4gICAgICBhZnRlclNjaG9vbCxcbiAgICAgIGVucmljaG1lbnRDbGFzc2VzLFxuICAgICAgbGFuZ3VhZ2VMZWFybmluZyxcbiAgICAgIGV4YW1QcmVwLFxuICAgICAgY3RuT25lUG9zLFxuICAgICAgY3RuVHdvUG9zLFxuICAgICAgY3RuVGhyZWVQb3NcbiAgICApO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7IGFsaWduUHJvZ3JhbXMgfTtcbiJdLCJuYW1lcyI6WyJhbGlnblByb2dyYW1zSGVscGVyIiwiZWxlT25lIiwiZWxlVHdvIiwiZWxlVGhyZWUiLCJlbGVGb3VyIiwiYm91bmRpbmdPbmUiLCJib3VuZGluZ1R3byIsImJvdW5kaW5nVGhyZWUiLCJ2ZXJ0aWNhbEFsaWdubWVudCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImFsaWduUHJvZ3JhbXMiLCJhZnRlclNjaG9vbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJlbnJpY2htZW50Q2xhc3NlcyIsImxhbmd1YWdlTGVhcm5pbmciLCJleGFtUHJlcCIsImN0bk9uZVBvcyIsImN0blR3b1BvcyIsImN0blRocmVlUG9zIiwidmVydGljYWxBbGlnbiIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImxlZnQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/programs.js\n");

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