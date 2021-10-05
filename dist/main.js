/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/book.js":
/*!*********************!*\
  !*** ./src/book.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\n\r\nconst displayBooking = () => {\r\n    const content = document.getElementById(\"element\")\r\n    content.innerHTML = \"\";\r\n    if (!content.innerHTML) {\r\n        console.log('test')\r\n    }\r\n    else {\r\n        content.innerHTML = \"\";\r\n    }\r\n}\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayBooking);\n\n//# sourceURL=webpack://restaurant_project/./src/book.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nconst displayContact = () => {\r\n    const content = document.getElementById(\"element\");\r\n\r\n    content.innerHTML = \"\";\r\n    if (!content.innerHTML) {\r\n        content.appendChild(\r\n            createContent(\r\n                \"Location\",\r\n                \"X:9 Y:8 Limsa Lominsa Upper Decks Eorzea\"\r\n            )\r\n        )\r\n\r\n        content.appendChild(\r\n            createContent(\r\n                \"Hours\",\r\n                \"Mon - Thu : 11 am - 21 pm<br>\\Fri - Sat : 11 am - 23 pm\"\r\n            )\r\n        )\r\n\r\n\r\n        content.appendChild(\r\n            createContent(\r\n                \"Contact\",\r\n                \"0728376583<br>\\ bismarck@eorzea.com\"\r\n            )\r\n        )\r\n\r\n        // createContent(\"location\", \"X:9 Y:8 Limsa Lominsa Upper Decks Eorzea\")\r\n        // createContent(\"Hours\", \"\")\r\n        // createContent(\"Contact\", \"0728376583 bismarck@eorzea.com\")\r\n    }\r\n    else {\r\n        content.innerHTML = \"\";\r\n    }\r\n}\r\n\r\n\r\nconst createContent = (title, content) => {\r\n    const newDiv = document.createElement(\"div\")\r\n\r\n    const header = document.createElement(\"h3\")\r\n    header.innerHTML = title;\r\n    if (title == \"Location\") {\r\n        newDiv.appendChild(header)\r\n\r\n        const map = document.createElement(\"img\")\r\n        map.src = \"./images/Limsa_Lominsa_Upper_Decks_cropped.png\"\r\n        newDiv.appendChild(map)\r\n        const contents = document.createElement(\"p\")\r\n        contents.innerHTML = content;\r\n        contents.className = \"information\"\r\n        newDiv.appendChild(contents)\r\n\r\n    }\r\n    else {\r\n        const contents = document.createElement(\"p\")\r\n        contents.innerHTML = content;\r\n        contents.className = \"information\"\r\n        newDiv.appendChild(header)\r\n        newDiv.appendChild(contents)\r\n\r\n    }\r\n\r\n\r\n\r\n    return newDiv\r\n\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayContact);\n\n//# sourceURL=webpack://restaurant_project/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst displayHome = () => {\r\n    let content = document.getElementById(\"content\");\r\n    let header = document.createElement(\"header\");\r\n    content.appendChild(header);\r\n    let leftMenu = document.createElement(\"ul\");\r\n    leftMenu.id = \"left-menu\";\r\n    let li1 = document.createElement(\"li\");\r\n    li1.id = \"info\";\r\n    li1.innerHTML = \"About us\";\r\n    let li2 = document.createElement(\"li\");\r\n    li2.id = \"menu\";\r\n    li2.innerHTML = \"Menu\";\r\n    leftMenu.appendChild(li1);\r\n    leftMenu.appendChild(li2);\r\n\r\n    let restaurantName = document.createElement(\"h2\");\r\n    restaurantName.id = \"restaurant-name\";\r\n    restaurantName.innerHTML = \"The Bismarck\"\r\n\r\n    let rightMenu = document.createElement(\"ul\");\r\n    rightMenu.id = \"right-menu\";\r\n    let li3 = document.createElement(\"li\");\r\n    li3.id = \"book\";\r\n    li3.innerHTML = \"Reservation\";\r\n    let li4 = document.createElement(\"li\");\r\n    li4.id = \"contact\";\r\n    li4.innerHTML = \"Contact\";\r\n    rightMenu.appendChild(li3);\r\n    rightMenu.appendChild(li4);\r\n\r\n    header.appendChild(leftMenu);\r\n    header.appendChild(restaurantName);\r\n    header.appendChild(rightMenu);\r\n    let displayArea = document.createElement(\"div\");\r\n    let footer = document.createElement(\"footer\");\r\n    displayArea.id = \"element\";\r\n    content.appendChild(displayArea);\r\n    content.appendChild(footer);\r\n\r\n    return content\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayHome);\n\n//# sourceURL=webpack://restaurant_project/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./info */ \"./src/info.js\");\n/* harmony import */ var _book__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./book */ \"./src/book.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst enableNavBar = () => {\r\n    const menuBtn = document.getElementById(\"menu\");\r\n    menuBtn.addEventListener(\"click\", () => {\r\n        (0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n    })\r\n    const info = document.getElementById(\"info\");\r\n    info.addEventListener(\"click\", () => {\r\n        (0,_info__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n    })\r\n    const contact = document.getElementById(\"contact\");\r\n    contact.addEventListener(\"click\", () => {\r\n        console.log(\"hey im hereeee\")\r\n        ;(0,_contact__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\r\n    })\r\n    const book = document.getElementById(\"book\");\r\n    book.addEventListener(\"click\", () => {\r\n        (0,_book__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n    })\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n;(0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\nenableNavBar();\r\n\n\n//# sourceURL=webpack://restaurant_project/./src/index.js?");

/***/ }),

/***/ "./src/info.js":
/*!*********************!*\
  !*** ./src/info.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst displayInfo = () => {\r\n    const content = document.getElementById(\"element\");\r\n    content.innerHTML = \"\";\r\n\r\n    if (!content.innerHTML) {\r\n        const image = document.createElement(\"img\");\r\n        image.src = \"./images/pexels-andrea-piacquadio-3785693 (1).jpg\"\r\n        image.id = \"owner\";\r\n\r\n        const info = document.createElement(\"p\");\r\n        info.innerHTML = \"Welcome to The Bismarck! Come and taste one of the best italian restaurant in Eorzea!!\"\r\n        info.className = \"info\"\r\n        content.appendChild(image);\r\n        content.appendChild(info);\r\n\r\n    }\r\n    else {\r\n        content.innerHTML = \"\";\r\n\r\n    }\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayInfo);\n\n//# sourceURL=webpack://restaurant_project/./src/info.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst createMenu = () => {\r\n    const content = document.getElementById(\"element\");\r\n    content.innerHTML = \"\";\r\n\r\n    if (!content.innerHTML) {\r\n    // const menu = document.createElement(\"div\");\r\n    // menu.id = \"menuContent\";\r\n\r\n    // content.innerHTML = \"\";\r\n    const menu = document.createElement(\"div\");\r\n    menu.classList.add(\"menu\");\r\n\r\n\r\n    // menu.appendChild(\r\n    //   createMenuItem(\r\n    //     \"Salsiccia\",\r\n    //     \"Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil\"\r\n    //   )\r\n    // );\r\n    menu.appendChild(\r\n      createMenuItem(\r\n        \"Gamberi\",\r\n        \"Tomato sauce, Mozarella, Shrimps, Feta cheese, Olives, Basil\"\r\n      )\r\n    );\r\n    menu.appendChild(\r\n      createMenuItem(\r\n        \"Pepe\",\r\n        \"Tomato sauce, Mozarella, Chilli flakes, Olives, Basil\"\r\n      )\r\n    );\r\n    // menu.appendChild(\r\n    //   createMenuItem(\r\n    //     \"Disgustoso\",\r\n    //     \"Tomato sauce, Bacon, Pineapple, Olives, Basil\"\r\n    //   )\r\n    // );\r\n    // menu.appendChild(\r\n    //   createMenuItem(\r\n    //     \"Colorato\",\r\n    //     \"Tomato sauce, Mozarella, Onion, Pepper, Champignons, Basil\"\r\n    //   )\r\n    // );\r\n    // menu.appendChild(\r\n    //   createMenuItem(\r\n    //     \"Pomodoro\",\r\n    //     \"Tomato sauce, Mozarella, Tomato, Onion, Feta cheese, Chilli\"\r\n    //   )\r\n    // );\r\n    menu.appendChild(\r\n      createMenuItem(\r\n        \"Crema\",\r\n        \"White sauce, Mozarella, Shrimps, Salmon, Pineapple, Olives, Basil\"\r\n      )\r\n    );\r\n    menu.appendChild(\r\n      createMenuItem(\r\n        \"Carne\",\r\n        \"Tomato sauce, Mozarella, Homemade sausage, Bacon, Garlic, Pepper, Chilli\"\r\n      )\r\n    );\r\n\r\n    content.appendChild(menu);\r\n    // return menu;\r\n    }\r\n    else {\r\n      content.innerHTML = \"\";\r\n    }\r\n\r\n}\r\n\r\nfunction createMenuItem(name, description) {\r\n    const menuItem = document.createElement(\"div\");\r\n    menuItem.classList.add(\"menu-item\");\r\n\r\n    const foodName = document.createElement(\"h3\");\r\n    foodName.textContent = name;\r\n\r\n    const foodDescription = document.createElement(\"p\");\r\n    foodDescription.textContent = description;\r\n    foodDescription.className = \"desc\"\r\n\r\n    const foodImage = document.createElement(\"img\");\r\n    foodImage.rel = \"preload\";\r\n    foodImage.src = `images/pastas/${name.toLowerCase()}.jpg`;\r\n    foodImage.alt = `${name}`;\r\n    foodImage.className = \"food\";\r\n\r\n    menuItem.appendChild(foodImage);\r\n    menuItem.appendChild(foodName);\r\n    menuItem.appendChild(foodDescription);\r\n\r\n    return menuItem;\r\n  }\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenu);\n\n//# sourceURL=webpack://restaurant_project/./src/menu.js?");

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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;