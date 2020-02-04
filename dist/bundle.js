/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _virtualDom_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./virtualDom/createElement */ \"./virtualDom/createElement.js\");\n/* harmony import */ var _virtualDom_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./virtualDom/render */ \"./virtualDom/render.js\");\n/* harmony import */ var _virtualDom_mount__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./virtualDom/mount */ \"./virtualDom/mount.js\");\n/* harmony import */ var _virtualDom_components_formOverlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./virtualDom/components/formOverlay */ \"./virtualDom/components/formOverlay.js\");\n/* harmony import */ var _virtualDom_components_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./virtualDom/components/header */ \"./virtualDom/components/header.js\");\n\n\n\n\n\n\n\nlet vApp;\n\nlet overlay,\n    form;\n\nlet api = 'https://api.edamam.com/search'\nlet appId = '&app_id=f8bd8b97'\nlet appKey = '&app_key=db1e2d22f0a7e8cedde770beac059cba'\n\nlet renderRecipe = (result) => {\n    let results = '';\n    let newChildren = [];\n    result.hits.map(result => {\n        let ingredients = '';\n        result.recipe.ingredientLines.map(ingredient => {\n            ingredients += `<p>${ingredient}</p>`\n        })\n        // <p>Calories: ${Math.floor(result.recipe.calories)}</p>\n        //         <div>\n        //             <p>Ingredients:</p>\n        //             ${ingredients}\n        //         </div>\n        \n        newChildren.push(Object(_virtualDom_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('article', {\n            attrs: {\n                class: 'object-wrapper'\n            },\n            children: [\n                Object(_virtualDom_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', {\n                    attrs: {\n                        class: 'img-wrapper',\n                    },\n                    children: [\n                        Object(_virtualDom_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('img', {\n                            attrs: {\n                                src: result.recipe.image\n                            }\n                        })\n                    ]\n                    }),\n                    Object(_virtualDom_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('h2', {\n                        attrs: {\n                            class: 'title'\n                        },\n                        children: [\n                            result.recipe.label,\n                        ]\n                    }),\n                ],\n        }))\n    })\n    \n    vApp = Object(_virtualDom_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', {\n        attrs: {\n          id: 'app',\n          class: 'container'\n        },\n        children: [Object(_virtualDom_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('main', {\n            attrs: {\n                class: ''\n            },\n            children: newChildren\n        })]\n      });\n\n    \n    form.classList.add('fade')\n    const $app = Object(_virtualDom_render__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(vApp);\n    Object(_virtualDom_mount__WEBPACK_IMPORTED_MODULE_2__[\"default\"])($app, document.querySelector('.container'));\n    setTimeout(() => {\n        form.classList.remove('fade')\n        form.classList.add('hidden')\n    }, 300);\n}\n\nlet getRecipe = async (filter) => {\n    let apiFilter = `?q=${filter}`\n    let query = api + apiFilter + appId + appKey\n    let result;\n    await fetch(query)\n        .then(res => {\n            if(res.status === 200) {\n                console.log(200)\n                return res.json()\n            }\n        })\n        .then(json => {\n            console.log(json)\n            result = json\n        }).catch(err => {console.log(err)})\n\n    renderRecipe(result)\n}\n\nlet renderData = (e) => {\n    e.preventDefault()\n    overlay.classList.add('show')\n    let formInput = document.querySelector('form input').value\n    console.log(formInput)\n    getRecipe(formInput)\n}\n\nlet setup = () => {\n    prepareHeader()\n    prepareForm()\n}\n\nlet prepareHeader = () => {\n    let $app = Object(_virtualDom_render__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Object(_virtualDom_components_header__WEBPACK_IMPORTED_MODULE_4__[\"default\"])());\n    Object(_virtualDom_mount__WEBPACK_IMPORTED_MODULE_2__[\"default\"])($app, document.querySelector('.header'))\n    document.querySelector('.searchSwitch').addEventListener('click', () => {\n        document.querySelector('.overlay').classList.remove('show')\n        document.querySelector('.search').classList.remove('hidden')\n        document.querySelector('form input').value = ''\n    })\n}\n\nlet prepareForm = () => {\n    let $app = Object(_virtualDom_render__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Object(_virtualDom_components_formOverlay__WEBPACK_IMPORTED_MODULE_3__[\"default\"])());\n    Object(_virtualDom_mount__WEBPACK_IMPORTED_MODULE_2__[\"default\"])($app, document.querySelector('.search'));\n    overlay = document.querySelector('.overlay')\n    form = document.querySelector('form')\n    form.onsubmit = renderData\n}\n\nsetup()//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tYWluLmpzPzFkNTAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJDO0FBQ0Y7QUFDSDs7QUFFbUI7QUFDTjs7QUFFbkQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLFdBQVc7QUFDNUMsU0FBUztBQUNULDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBLHlCQUF5QjtBQUN6Qjs7QUFFQSx5QkFBeUIseUVBQUM7QUFDMUI7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGdCQUFnQix5RUFBQztBQUNqQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0Esd0JBQXdCLHlFQUFDO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBLHFCQUFxQjtBQUNyQixvQkFBb0IseUVBQUM7QUFDckI7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxTQUFTO0FBQ1QsS0FBSzs7QUFFTCxXQUFXLHlFQUFDO0FBQ1o7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULG1CQUFtQix5RUFBQztBQUNwQjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNULE9BQU87OztBQUdQO0FBQ0EsaUJBQWlCLGtFQUFNO0FBQ3ZCLElBQUksaUVBQUs7QUFDVDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSwwQkFBMEIsT0FBTztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVMsZ0JBQWdCLGlCQUFpQjs7QUFFMUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUsa0VBQU0sQ0FBQyw2RUFBTTtBQUM1QixJQUFJLGlFQUFLO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxlQUFlLGtFQUFNLENBQUMsa0ZBQU87QUFDN0IsSUFBSSxpRUFBSztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6Ii4vbWFpbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBoIGZyb20gJy4vdmlydHVhbERvbS9jcmVhdGVFbGVtZW50JztcbmltcG9ydCByZW5kZXIgZnJvbSAnLi92aXJ0dWFsRG9tL3JlbmRlcic7XG5pbXBvcnQgbW91bnQgZnJvbSAnLi92aXJ0dWFsRG9tL21vdW50J1xuXG5pbXBvcnQgZm9ybUFwcCBmcm9tICcuL3ZpcnR1YWxEb20vY29tcG9uZW50cy9mb3JtT3ZlcmxheSdcbmltcG9ydCBoZWFkZXIgZnJvbSAnLi92aXJ0dWFsRG9tL2NvbXBvbmVudHMvaGVhZGVyJ1xuXG5sZXQgdkFwcDtcblxubGV0IG92ZXJsYXksXG4gICAgZm9ybTtcblxubGV0IGFwaSA9ICdodHRwczovL2FwaS5lZGFtYW0uY29tL3NlYXJjaCdcbmxldCBhcHBJZCA9ICcmYXBwX2lkPWY4YmQ4Yjk3J1xubGV0IGFwcEtleSA9ICcmYXBwX2tleT1kYjFlMmQyMmYwYTdlOGNlZGRlNzcwYmVhYzA1OWNiYSdcblxubGV0IHJlbmRlclJlY2lwZSA9IChyZXN1bHQpID0+IHtcbiAgICBsZXQgcmVzdWx0cyA9ICcnO1xuICAgIGxldCBuZXdDaGlsZHJlbiA9IFtdO1xuICAgIHJlc3VsdC5oaXRzLm1hcChyZXN1bHQgPT4ge1xuICAgICAgICBsZXQgaW5ncmVkaWVudHMgPSAnJztcbiAgICAgICAgcmVzdWx0LnJlY2lwZS5pbmdyZWRpZW50TGluZXMubWFwKGluZ3JlZGllbnQgPT4ge1xuICAgICAgICAgICAgaW5ncmVkaWVudHMgKz0gYDxwPiR7aW5ncmVkaWVudH08L3A+YFxuICAgICAgICB9KVxuICAgICAgICAvLyA8cD5DYWxvcmllczogJHtNYXRoLmZsb29yKHJlc3VsdC5yZWNpcGUuY2Fsb3JpZXMpfTwvcD5cbiAgICAgICAgLy8gICAgICAgICA8ZGl2PlxuICAgICAgICAvLyAgICAgICAgICAgICA8cD5JbmdyZWRpZW50czo8L3A+XG4gICAgICAgIC8vICAgICAgICAgICAgICR7aW5ncmVkaWVudHN9XG4gICAgICAgIC8vICAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICBuZXdDaGlsZHJlbi5wdXNoKGgoJ2FydGljbGUnLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIGNsYXNzOiAnb2JqZWN0LXdyYXBwZXInXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogJ2ltZy13cmFwcGVyJyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIGgoJ2ltZycsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IHJlc3VsdC5yZWNpcGUuaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBoKCdoMicsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICd0aXRsZSdcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5yZWNpcGUubGFiZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgIH0pKVxuICAgIH0pXG4gICAgXG4gICAgdkFwcCA9IGgoJ2RpdicsIHtcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBpZDogJ2FwcCcsXG4gICAgICAgICAgY2xhc3M6ICdjb250YWluZXInXG4gICAgICAgIH0sXG4gICAgICAgIGNoaWxkcmVuOiBbaCgnbWFpbicsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgY2xhc3M6ICcnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2hpbGRyZW46IG5ld0NoaWxkcmVuXG4gICAgICAgIH0pXVxuICAgICAgfSk7XG5cbiAgICBcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ2ZhZGUnKVxuICAgIGNvbnN0ICRhcHAgPSByZW5kZXIodkFwcCk7XG4gICAgbW91bnQoJGFwcCwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdmYWRlJylcbiAgICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgIH0sIDMwMCk7XG59XG5cbmxldCBnZXRSZWNpcGUgPSBhc3luYyAoZmlsdGVyKSA9PiB7XG4gICAgbGV0IGFwaUZpbHRlciA9IGA/cT0ke2ZpbHRlcn1gXG4gICAgbGV0IHF1ZXJ5ID0gYXBpICsgYXBpRmlsdGVyICsgYXBwSWQgKyBhcHBLZXlcbiAgICBsZXQgcmVzdWx0O1xuICAgIGF3YWl0IGZldGNoKHF1ZXJ5KVxuICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgaWYocmVzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coMjAwKVxuICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coanNvbilcbiAgICAgICAgICAgIHJlc3VsdCA9IGpzb25cbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtjb25zb2xlLmxvZyhlcnIpfSlcblxuICAgIHJlbmRlclJlY2lwZShyZXN1bHQpXG59XG5cbmxldCByZW5kZXJEYXRhID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ3Nob3cnKVxuICAgIGxldCBmb3JtSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtIGlucHV0JykudmFsdWVcbiAgICBjb25zb2xlLmxvZyhmb3JtSW5wdXQpXG4gICAgZ2V0UmVjaXBlKGZvcm1JbnB1dClcbn1cblxubGV0IHNldHVwID0gKCkgPT4ge1xuICAgIHByZXBhcmVIZWFkZXIoKVxuICAgIHByZXBhcmVGb3JtKClcbn1cblxubGV0IHByZXBhcmVIZWFkZXIgPSAoKSA9PiB7XG4gICAgbGV0ICRhcHAgPSByZW5kZXIoaGVhZGVyKCkpO1xuICAgIG1vdW50KCRhcHAsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKSlcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoU3dpdGNoJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5JykuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gnKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtIGlucHV0JykudmFsdWUgPSAnJ1xuICAgIH0pXG59XG5cbmxldCBwcmVwYXJlRm9ybSA9ICgpID0+IHtcbiAgICBsZXQgJGFwcCA9IHJlbmRlcihmb3JtQXBwKCkpO1xuICAgIG1vdW50KCRhcHAsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gnKSk7XG4gICAgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5JylcbiAgICBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpXG4gICAgZm9ybS5vbnN1Ym1pdCA9IHJlbmRlckRhdGFcbn1cblxuc2V0dXAoKSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./main.js\n");

/***/ }),

/***/ "./virtualDom/components/formOverlay.js":
/*!**********************************************!*\
  !*** ./virtualDom/components/formOverlay.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createElement */ \"./virtualDom/createElement.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => {\n    return Object(_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('form', {\n        attrs: {\n          action: '',\n          class: 'search'\n        },\n        children: [Object(_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', {\n            attrs: {},\n            children: [\n                Object(_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('label', {\n                    attrs: {\n                        for: 'recipe'\n                    },\n                    children: [\n                        'What do you feel like eating?'\n                    ]\n                }),\n                Object(_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('input', {\n                    attrs: {\n                        id: 'recipe',\n                        placeholder: 'What do you feel like eating?',\n                        type: 'text'\n                    }\n                }),\n                Object(_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('button', {\n                    attrs: {},\n                    children: [\n                        Object(_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('img', {\n                            attrs: {\n                                src: './images/search.svg',\n                                alt: 'search icon'\n                            }\n                        }),\n                        Object(_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('p', {\n                            attrs: {},\n                            children: [\n                                'Search'\n                            ]\n                        })\n                    ]\n                })\n            ]\n        }), Object(_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', {\n            attrs: {\n                class: 'overlay'\n            },\n            children: [\n                Object(_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('img', {\n                    attrs: {\n                        class: 'spinner',\n                        src: './images/load.svg',\n                        alt: 'spinner'\n                    }\n                })\n            ]\n    \n        })]\n      });\n});\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi92aXJ0dWFsRG9tL2NvbXBvbmVudHMvZm9ybU92ZXJsYXkuanM/YjIyMyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQWlDOztBQUVsQjtBQUNmLFdBQVcsOERBQUM7QUFDWjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsbUJBQW1CLDhEQUFDO0FBQ3BCLHFCQUFxQjtBQUNyQjtBQUNBLGdCQUFnQiw4REFBQztBQUNqQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixnQkFBZ0IsOERBQUM7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixnQkFBZ0IsOERBQUM7QUFDakIsNkJBQTZCO0FBQzdCO0FBQ0Esd0JBQXdCLDhEQUFDO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLHdCQUF3Qiw4REFBQztBQUN6QixxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsU0FBUyxHQUFHLDhEQUFDO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGdCQUFnQiw4REFBQztBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsQ0FBQyIsImZpbGUiOiIuL3ZpcnR1YWxEb20vY29tcG9uZW50cy9mb3JtT3ZlcmxheS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBoIGZyb20gJy4uL2NyZWF0ZUVsZW1lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gICAgcmV0dXJuIGgoJ2Zvcm0nLCB7XG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgYWN0aW9uOiAnJyxcbiAgICAgICAgICBjbGFzczogJ3NlYXJjaCdcbiAgICAgICAgfSxcbiAgICAgICAgY2hpbGRyZW46IFtoKCdkaXYnLCB7XG4gICAgICAgICAgICBhdHRyczoge30sXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgIGgoJ2xhYmVsJywge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yOiAncmVjaXBlJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgJ1doYXQgZG8geW91IGZlZWwgbGlrZSBlYXRpbmc/J1xuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgaCgnaW5wdXQnLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogJ3JlY2lwZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ1doYXQgZG8geW91IGZlZWwgbGlrZSBlYXRpbmc/JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0J1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgaCgnYnV0dG9uJywge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge30sXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBoKCdpbWcnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiAnLi9pbWFnZXMvc2VhcmNoLnN2ZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogJ3NlYXJjaCBpY29uJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgaCgncCcsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1NlYXJjaCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSksIGgoJ2RpdicsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgY2xhc3M6ICdvdmVybGF5J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgaCgnaW1nJywge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdzcGlubmVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogJy4vaW1hZ2VzL2xvYWQuc3ZnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogJ3NwaW5uZXInXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXVxuICAgIFxuICAgICAgICB9KV1cbiAgICAgIH0pO1xufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./virtualDom/components/formOverlay.js\n");

/***/ }),

/***/ "./virtualDom/components/header.js":
/*!*****************************************!*\
  !*** ./virtualDom/components/header.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createElement */ \"./virtualDom/createElement.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => {\n    return Object(_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('header', {\n        attrs: {},\n        children: [Object(_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('img', {\n            attrs: {\n                src: './images/search.svg',\n                alt: 'search icon',\n                class: 'searchSwitch'\n            }\n        })]\n      });\n});\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi92aXJ0dWFsRG9tL2NvbXBvbmVudHMvaGVhZGVyLmpzPzUwYTEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFpQzs7QUFFbEI7QUFDZixXQUFXLDhEQUFDO0FBQ1osaUJBQWlCO0FBQ2pCLG1CQUFtQiw4REFBQztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxDQUFDIiwiZmlsZSI6Ii4vdmlydHVhbERvbS9jb21wb25lbnRzL2hlYWRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBoIGZyb20gJy4uL2NyZWF0ZUVsZW1lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gICAgcmV0dXJuIGgoJ2hlYWRlcicsIHtcbiAgICAgICAgYXR0cnM6IHt9LFxuICAgICAgICBjaGlsZHJlbjogW2goJ2ltZycsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgc3JjOiAnLi9pbWFnZXMvc2VhcmNoLnN2ZycsXG4gICAgICAgICAgICAgICAgYWx0OiAnc2VhcmNoIGljb24nLFxuICAgICAgICAgICAgICAgIGNsYXNzOiAnc2VhcmNoU3dpdGNoJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KV1cbiAgICAgIH0pO1xufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./virtualDom/components/header.js\n");

/***/ }),

/***/ "./virtualDom/createElement.js":
/*!*************************************!*\
  !*** ./virtualDom/createElement.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ((tagName, { attrs, children }) => {\n    const vElem = Object.create(null);\n  \n    Object.assign(vElem, {\n      tagName,\n      attrs,\n      children,\n    });\n  \n    return vElem;\n  });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi92aXJ0dWFsRG9tL2NyZWF0ZUVsZW1lbnQuanM/M2FhYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFlLDBFQUFXLGtCQUFrQjtBQUM1Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxHQUFHIiwiZmlsZSI6Ii4vdmlydHVhbERvbS9jcmVhdGVFbGVtZW50LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKHRhZ05hbWUsIHsgYXR0cnMsIGNoaWxkcmVuIH0pID0+IHtcbiAgICBjb25zdCB2RWxlbSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIFxuICAgIE9iamVjdC5hc3NpZ24odkVsZW0sIHtcbiAgICAgIHRhZ05hbWUsXG4gICAgICBhdHRycyxcbiAgICAgIGNoaWxkcmVuLFxuICAgIH0pO1xuICBcbiAgICByZXR1cm4gdkVsZW07XG4gIH07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./virtualDom/createElement.js\n");

/***/ }),

/***/ "./virtualDom/mount.js":
/*!*****************************!*\
  !*** ./virtualDom/mount.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (($node, $target) => {\n    $target.replaceWith($node);\n    return $node;\n  });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi92aXJ0dWFsRG9tL21vdW50LmpzPzc0NzEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBZTtBQUNmO0FBQ0E7QUFDQSxHQUFHIiwiZmlsZSI6Ii4vdmlydHVhbERvbS9tb3VudC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICgkbm9kZSwgJHRhcmdldCkgPT4ge1xuICAgICR0YXJnZXQucmVwbGFjZVdpdGgoJG5vZGUpO1xuICAgIHJldHVybiAkbm9kZTtcbiAgfTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./virtualDom/mount.js\n");

/***/ }),

/***/ "./virtualDom/render.js":
/*!******************************!*\
  !*** ./virtualDom/render.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst renderElem = ({ tagName, attrs, children}) => {\n    // create the element\n    //   e.g. <div></div>\n    const $el = document.createElement(tagName);\n  \n    // add all attributs as specified in vNode.attrs\n    //   e.g. <div id=\"app\"></div>\n    for (const [k, v] of Object.entries(attrs)) {\n      $el.setAttribute(k, v);\n    }\n  \n    // append all children as specified in vNode.children\n    //   e.g. <div id=\"app\"><img></div>\n    if(children) {\n        children.forEach(child => {\n            $el.appendChild(render(child));\n        });\n    }\n    \n  \n    return $el;\n  };\n  \n  const render = (vNode) => {\n    if (typeof vNode === 'string') {\n      return document.createTextNode(vNode);\n    }\n  \n    // we assume everything else to be a virtual element\n    return renderElem(vNode);\n  };\n  \n  /* harmony default export */ __webpack_exports__[\"default\"] = (render);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi92aXJ0dWFsRG9tL3JlbmRlci5qcz8yOGJkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEscUJBQXFCLDBCQUEwQjtBQUMvQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxFQUFpQixxRUFBTSIsImZpbGUiOiIuL3ZpcnR1YWxEb20vcmVuZGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcmVuZGVyRWxlbSA9ICh7IHRhZ05hbWUsIGF0dHJzLCBjaGlsZHJlbn0pID0+IHtcbiAgICAvLyBjcmVhdGUgdGhlIGVsZW1lbnRcbiAgICAvLyAgIGUuZy4gPGRpdj48L2Rpdj5cbiAgICBjb25zdCAkZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuICBcbiAgICAvLyBhZGQgYWxsIGF0dHJpYnV0cyBhcyBzcGVjaWZpZWQgaW4gdk5vZGUuYXR0cnNcbiAgICAvLyAgIGUuZy4gPGRpdiBpZD1cImFwcFwiPjwvZGl2PlxuICAgIGZvciAoY29uc3QgW2ssIHZdIG9mIE9iamVjdC5lbnRyaWVzKGF0dHJzKSkge1xuICAgICAgJGVsLnNldEF0dHJpYnV0ZShrLCB2KTtcbiAgICB9XG4gIFxuICAgIC8vIGFwcGVuZCBhbGwgY2hpbGRyZW4gYXMgc3BlY2lmaWVkIGluIHZOb2RlLmNoaWxkcmVuXG4gICAgLy8gICBlLmcuIDxkaXYgaWQ9XCJhcHBcIj48aW1nPjwvZGl2PlxuICAgIGlmKGNoaWxkcmVuKSB7XG4gICAgICAgIGNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICAgICAgJGVsLmFwcGVuZENoaWxkKHJlbmRlcihjaGlsZCkpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gIFxuICAgIHJldHVybiAkZWw7XG4gIH07XG4gIFxuICBjb25zdCByZW5kZXIgPSAodk5vZGUpID0+IHtcbiAgICBpZiAodHlwZW9mIHZOb2RlID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHZOb2RlKTtcbiAgICB9XG4gIFxuICAgIC8vIHdlIGFzc3VtZSBldmVyeXRoaW5nIGVsc2UgdG8gYmUgYSB2aXJ0dWFsIGVsZW1lbnRcbiAgICByZXR1cm4gcmVuZGVyRWxlbSh2Tm9kZSk7XG4gIH07XG4gIFxuICBleHBvcnQgZGVmYXVsdCByZW5kZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./virtualDom/render.js\n");

/***/ })

/******/ });