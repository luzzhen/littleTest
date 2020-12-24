/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page/event */ \"./src/page/event.js\");\n\n\n//# sourceURL=webpack://test/./src/index.js?");

/***/ }),

/***/ "./src/page/event.js":
/*!***************************!*\
  !*** ./src/page/event.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pushNumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pushNumber */ \"./src/page/pushNumber.js\");\n/* harmony import */ var _util_number__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/number */ \"./src/util/number.js\");\n\r\n\r\n\r\nvar isStart = false;\r\nvar n = new _util_number__WEBPACK_IMPORTED_MODULE_1__.default(100)\r\nn.onNumberCreated = function (n, isPrime) {\r\n    ;(0,_pushNumber__WEBPACK_IMPORTED_MODULE_0__.default)(n, isPrime)\r\n}\r\ndocument.onclick = function () {\r\n    if (isStart) {\r\n        n.stop()\r\n        isStart = false\r\n    } else {\r\n        n.start()\r\n        isStart = true\r\n    }\r\n}\n\n//# sourceURL=webpack://test/./src/page/event.js?");

/***/ }),

/***/ "./src/page/pushNumber.js":
/*!********************************!*\
  !*** ./src/page/pushNumber.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* export default binding */ __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _util_number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/number */ \"./src/util/number.js\");\n/* harmony import */ var _util_radColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/radColor */ \"./src/util/radColor.js\");\n\r\n\r\n\r\nvar divcontainer = document.getElementById('divContainer')\r\nvar divcenter = document.getElementById('divCenter')\r\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(n, isPrime) {\r\n    var span = document.createElement('span')\r\n    span.innerText = n\r\n    if (isPrime) {\r\n        var color = (0,_util_radColor__WEBPACK_IMPORTED_MODULE_1__.default)()\r\n        span.style.color = color\r\n        createCenterisPrimeNumber(n, color)\r\n    }\r\n    divcontainer.appendChild(span)\r\n    //产生中间的数字\r\n    createCenterNumber(n)\r\n}\r\n\r\n/**\r\n * 用来生成中间的数字\r\n * @param {*} n \r\n */\r\nfunction createCenterNumber(n) {\r\n    divcenter.innerText = n\r\n}\r\n\r\nfunction createCenterisPrimeNumber(n, color) {\r\n    var div = document.createElement(\"div\")\r\n    div.className = \"center\";\r\n    div.style.color = color;\r\n    div.innerText = n;\r\n    document.body.appendChild(div)\r\n    getComputedStyle(div).left;\r\n    div.style.transform = `translate(${(0,_util_radColor__WEBPACK_IMPORTED_MODULE_1__.getRandom)(-666,666)}px, ${(0,_util_radColor__WEBPACK_IMPORTED_MODULE_1__.getRandom)(-666,666)}px)`;\r\n    div.style.opacity= 0 ;\r\n}\n\n//# sourceURL=webpack://test/./src/page/pushNumber.js?");

/***/ }),

/***/ "./src/util/isPrime.js":
/*!*****************************!*\
  !*** ./src/util/isPrime.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* export default binding */ __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/**\r\n * 判断n是否是素数\r\n * 素数：仅能被1和自身整除\r\n * @param {*} n \r\n */\r\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(n) {\r\n    if (n < 2) {\r\n        return false;\r\n    }\r\n    for (let i = 2; i <= n - 1; i++) {\r\n        if (n % i === 0) {\r\n            //发现 2到n-1之间 有一个数能整除的  不是素数\r\n            return false\r\n        }\r\n        \r\n    }\r\n\r\n    return true\r\n};\n\n//# sourceURL=webpack://test/./src/util/isPrime.js?");

/***/ }),

/***/ "./src/util/number.js":
/*!****************************!*\
  !*** ./src/util/number.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ NumberTimer\n/* harmony export */ });\n/* harmony import */ var _isPrime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isPrime */ \"./src/util/isPrime.js\");\n\r\nclass NumberTimer {\r\n    constructor(duration = 500) {\r\n        this.duration = duration;\r\n        this.number = 1;\r\n        this.timer = null;\r\n        this.onNumberCreated = null\r\n    }\r\n    start() {\r\n        if (this.timer) {\r\n            return;\r\n        }\r\n        this.timer = setInterval(() => {\r\n            this.onNumberCreated && this.onNumberCreated(this.number, (0,_isPrime__WEBPACK_IMPORTED_MODULE_0__.default)(this.number));\r\n            this.number++;\r\n        }, this.duration)\r\n    }\r\n    stop() {\r\n        clearInterval(this.timer)\r\n        this.timer = null\r\n    }\r\n}\n\n//# sourceURL=webpack://test/./src/util/number.js?");

/***/ }),

/***/ "./src/util/radColor.js":
/*!******************************!*\
  !*** ./src/util/radColor.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getRandom\": () => /* binding */ getRandom,\n/* harmony export */   \"default\": () => /* export default binding */ __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar colors = [\"#f26395\", \"#62efab\", \"#ef7658\", \"#ffe868\", \"#80e3f7\", \"#d781f9\"];\r\n\r\nfunction getRandom(min, max) {\r\n    return Math.floor(Math.random() * (max - min) + min)\r\n}\r\n\r\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\r\n    var index = getRandom(0, colors.length)\r\n    // console.log(colors[index])\r\n    return colors[index]\r\n}\n\n//# sourceURL=webpack://test/./src/util/radColor.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;