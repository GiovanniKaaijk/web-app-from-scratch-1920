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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _virtualDom_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./virtualDom/createElement */ \"./virtualDom/createElement.js\");\n/* harmony import */ var _virtualDom_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./virtualDom/render */ \"./virtualDom/render.js\");\n/* harmony import */ var _virtualDom_mount__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./virtualDom/mount */ \"./virtualDom/mount.js\");\n/* harmony import */ var _virtualDom_components_formOverlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./virtualDom/components/formOverlay */ \"./virtualDom/components/formOverlay.js\");\n/* harmony import */ var _virtualDom_components_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./virtualDom/components/header */ \"./virtualDom/components/header.js\");\n\n\n\n\n\n\n\nlet vApp;\nlet childElements = [];\nlet overlay,\n    form;\n\nlet api = 'https://api.edamam.com/search'\nlet appId = '&app_id=f8bd8b97'\nlet appKey = '&app_key=db1e2d22f0a7e8cedde770beac059cba'\n\nlet renderRecipe = (result) => {\n    let results = '';\n    let newChildren = [];\n    result.hits.map(result => {\n        let ingredients = '';\n        result.recipe.ingredientLines.map(ingredient => {\n            ingredients += `<p>${ingredient}</p>`\n        })\n        // <p>Calories: ${Math.floor(result.recipe.calories)}</p>\n        //         <div>\n        //             <p>Ingredients:</p>\n        //             ${ingredients}\n        //         </div>\n        \n        newChildren.push(Object(_virtualDom_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('article', {\n            attrs: {\n                class: 'object-wrapper'\n            },\n            children: [\n                Object(_virtualDom_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', {\n                    attrs: {\n                        class: 'img-wrapper',\n                    },\n                    children: [\n                        Object(_virtualDom_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('img', {\n                            attrs: {\n                                src: result.recipe.image\n                            }\n                        })\n                    ]\n                    }),\n                    Object(_virtualDom_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('h2', {\n                        attrs: {\n                            class: 'title'\n                        },\n                        children: [\n                            result.recipe.label,\n                        ]\n                    }),\n                ],\n        }))\n    })\n\n    childElements.push(Object(_virtualDom_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('main', {\n        attrs: {\n            class: ''\n        },\n        children: newChildren\n    }))\n    \n    vApp = Object(_virtualDom_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', {\n        attrs: {\n          id: 'app',\n        },\n        children: childElements\n      });\n    \n    const $app = Object(_virtualDom_render__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(vApp);\n    Object(_virtualDom_mount__WEBPACK_IMPORTED_MODULE_2__[\"default\"])($app, document.querySelector('.root'));\n    \n    form.classList.add('fade')\n    setTimeout(() => {\n        form.classList.remove('fade')\n        form.classList.add('hidden')\n    }, 300);\n}\n\nlet getRecipe = async (filter) => {\n    let apiFilter = `?q=${filter}`\n    let query = api + apiFilter + appId + appKey\n    let result;\n    await fetch(query)\n        .then(res => {\n            if(res.status === 200) {\n                console.log(200)\n                return res.json()\n            }\n        })\n        .then(json => {\n            console.log(json)\n            result = json\n        }).catch(err => {console.log(err)})\n\n    renderRecipe(result)\n}\n\nlet renderData = (e) => {\n    e.preventDefault()\n    overlay.classList.add('show')\n    let formInput = document.querySelector('form input').value\n    console.log(formInput)\n    getRecipe(formInput)\n}\n\nlet setup = () => {\n    prepareHeader()\n    prepareForm()\n}\n\nlet prepareHeader = () => {\n    let $app = Object(_virtualDom_render__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Object(_virtualDom_components_header__WEBPACK_IMPORTED_MODULE_4__[\"default\"])());\n    Object(_virtualDom_mount__WEBPACK_IMPORTED_MODULE_2__[\"default\"])($app, document.querySelector('.header'))\n}\n\nlet prepareForm = () => {\n    let $app = Object(_virtualDom_render__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Object(_virtualDom_components_formOverlay__WEBPACK_IMPORTED_MODULE_3__[\"default\"])());\n    Object(_virtualDom_mount__WEBPACK_IMPORTED_MODULE_2__[\"default\"])($app, document.querySelector('.root'));\n    overlay = document.querySelector('.overlay')\n    form = document.querySelector('form')\n    form.onsubmit = renderData\n}\n\nsetup()//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tYWluLmpzPzFkNTAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJDO0FBQ0Y7QUFDSDs7QUFFbUI7QUFDTjs7QUFFbkQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxXQUFXO0FBQzVDLFNBQVM7QUFDVCwwQkFBMEIsbUNBQW1DO0FBQzdEO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7O0FBRUEseUJBQXlCLHlFQUFDO0FBQzFCO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxnQkFBZ0IseUVBQUM7QUFDakI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLHdCQUF3Qix5RUFBQztBQUN6QjtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQSxxQkFBcUI7QUFDckIsb0JBQW9CLHlFQUFDO0FBQ3JCO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsU0FBUztBQUNULEtBQUs7O0FBRUwsdUJBQXVCLHlFQUFDO0FBQ3hCO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLOztBQUVMLFdBQVcseUVBQUM7QUFDWjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsT0FBTzs7QUFFUCxpQkFBaUIsa0VBQU07QUFDdkIsSUFBSSxpRUFBSzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLDBCQUEwQixPQUFPO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUyxnQkFBZ0IsaUJBQWlCOztBQUUxQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxrRUFBTSxDQUFDLDZFQUFNO0FBQzVCLElBQUksaUVBQUs7QUFDVDs7QUFFQTtBQUNBLGVBQWUsa0VBQU0sQ0FBQyxrRkFBTztBQUM3QixJQUFJLGlFQUFLO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiLi9tYWluLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGggZnJvbSAnLi92aXJ0dWFsRG9tL2NyZWF0ZUVsZW1lbnQnO1xuaW1wb3J0IHJlbmRlciBmcm9tICcuL3ZpcnR1YWxEb20vcmVuZGVyJztcbmltcG9ydCBtb3VudCBmcm9tICcuL3ZpcnR1YWxEb20vbW91bnQnXG5cbmltcG9ydCBmb3JtQXBwIGZyb20gJy4vdmlydHVhbERvbS9jb21wb25lbnRzL2Zvcm1PdmVybGF5J1xuaW1wb3J0IGhlYWRlciBmcm9tICcuL3ZpcnR1YWxEb20vY29tcG9uZW50cy9oZWFkZXInXG5cbmxldCB2QXBwO1xubGV0IGNoaWxkRWxlbWVudHMgPSBbXTtcbmxldCBvdmVybGF5LFxuICAgIGZvcm07XG5cbmxldCBhcGkgPSAnaHR0cHM6Ly9hcGkuZWRhbWFtLmNvbS9zZWFyY2gnXG5sZXQgYXBwSWQgPSAnJmFwcF9pZD1mOGJkOGI5NydcbmxldCBhcHBLZXkgPSAnJmFwcF9rZXk9ZGIxZTJkMjJmMGE3ZThjZWRkZTc3MGJlYWMwNTljYmEnXG5cbmxldCByZW5kZXJSZWNpcGUgPSAocmVzdWx0KSA9PiB7XG4gICAgbGV0IHJlc3VsdHMgPSAnJztcbiAgICBsZXQgbmV3Q2hpbGRyZW4gPSBbXTtcbiAgICByZXN1bHQuaGl0cy5tYXAocmVzdWx0ID0+IHtcbiAgICAgICAgbGV0IGluZ3JlZGllbnRzID0gJyc7XG4gICAgICAgIHJlc3VsdC5yZWNpcGUuaW5ncmVkaWVudExpbmVzLm1hcChpbmdyZWRpZW50ID0+IHtcbiAgICAgICAgICAgIGluZ3JlZGllbnRzICs9IGA8cD4ke2luZ3JlZGllbnR9PC9wPmBcbiAgICAgICAgfSlcbiAgICAgICAgLy8gPHA+Q2Fsb3JpZXM6ICR7TWF0aC5mbG9vcihyZXN1bHQucmVjaXBlLmNhbG9yaWVzKX08L3A+XG4gICAgICAgIC8vICAgICAgICAgPGRpdj5cbiAgICAgICAgLy8gICAgICAgICAgICAgPHA+SW5ncmVkaWVudHM6PC9wPlxuICAgICAgICAvLyAgICAgICAgICAgICAke2luZ3JlZGllbnRzfVxuICAgICAgICAvLyAgICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgbmV3Q2hpbGRyZW4ucHVzaChoKCdhcnRpY2xlJywge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBjbGFzczogJ29iamVjdC13cmFwcGVyJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdpbWctd3JhcHBlcicsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBoKCdpbWcnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiByZXN1bHQucmVjaXBlLmltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgaCgnaDInLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiAndGl0bGUnXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucmVjaXBlLmxhYmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICB9KSlcbiAgICB9KVxuXG4gICAgY2hpbGRFbGVtZW50cy5wdXNoKGgoJ21haW4nLCB7XG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICBjbGFzczogJydcbiAgICAgICAgfSxcbiAgICAgICAgY2hpbGRyZW46IG5ld0NoaWxkcmVuXG4gICAgfSkpXG4gICAgXG4gICAgdkFwcCA9IGgoJ2RpdicsIHtcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBpZDogJ2FwcCcsXG4gICAgICAgIH0sXG4gICAgICAgIGNoaWxkcmVuOiBjaGlsZEVsZW1lbnRzXG4gICAgICB9KTtcbiAgICBcbiAgICBjb25zdCAkYXBwID0gcmVuZGVyKHZBcHApO1xuICAgIG1vdW50KCRhcHAsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yb290JykpO1xuICAgIFxuICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnZmFkZScpXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnZmFkZScpXG4gICAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICB9LCAzMDApO1xufVxuXG5sZXQgZ2V0UmVjaXBlID0gYXN5bmMgKGZpbHRlcikgPT4ge1xuICAgIGxldCBhcGlGaWx0ZXIgPSBgP3E9JHtmaWx0ZXJ9YFxuICAgIGxldCBxdWVyeSA9IGFwaSArIGFwaUZpbHRlciArIGFwcElkICsgYXBwS2V5XG4gICAgbGV0IHJlc3VsdDtcbiAgICBhd2FpdCBmZXRjaChxdWVyeSlcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIGlmKHJlcy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKDIwMClcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGpzb24pXG4gICAgICAgICAgICByZXN1bHQgPSBqc29uXG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiB7Y29uc29sZS5sb2coZXJyKX0pXG5cbiAgICByZW5kZXJSZWNpcGUocmVzdWx0KVxufVxuXG5sZXQgcmVuZGVyRGF0YSA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdzaG93JylcbiAgICBsZXQgZm9ybUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybSBpbnB1dCcpLnZhbHVlXG4gICAgY29uc29sZS5sb2coZm9ybUlucHV0KVxuICAgIGdldFJlY2lwZShmb3JtSW5wdXQpXG59XG5cbmxldCBzZXR1cCA9ICgpID0+IHtcbiAgICBwcmVwYXJlSGVhZGVyKClcbiAgICBwcmVwYXJlRm9ybSgpXG59XG5cbmxldCBwcmVwYXJlSGVhZGVyID0gKCkgPT4ge1xuICAgIGxldCAkYXBwID0gcmVuZGVyKGhlYWRlcigpKTtcbiAgICBtb3VudCgkYXBwLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJykpXG59XG5cbmxldCBwcmVwYXJlRm9ybSA9ICgpID0+IHtcbiAgICBsZXQgJGFwcCA9IHJlbmRlcihmb3JtQXBwKCkpO1xuICAgIG1vdW50KCRhcHAsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yb290JykpO1xuICAgIG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheScpXG4gICAgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKVxuICAgIGZvcm0ub25zdWJtaXQgPSByZW5kZXJEYXRhXG59XG5cbnNldHVwKCkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./main.js\n");

/***/ }),

/***/ "./virtualDom/components/formOverlay.js":
/*!**********************************************!*\
  !*** ./virtualDom/components/formOverlay.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createElement */ \"./virtualDom/createElement.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => {\n    return Object(_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('form', {\n        attrs: {\n          action: '',\n          class: 'root'\n        },\n        children: [Object(_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', {\n            attrs: {},\n            children: [\n                Object(_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('label', {\n                    attrs: {\n                        for: 'recipe'\n                    },\n                    children: [\n                        'What do you feel like eating?'\n                    ]\n                }),\n                Object(_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('input', {\n                    attrs: {\n                        id: 'recipe',\n                        placeholder: 'What do you feel like eating?',\n                        type: 'text'\n                    }\n                }),\n                Object(_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('button', {\n                    attrs: {},\n                    children: [\n                        Object(_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('img', {\n                            attrs: {\n                                src: './images/search.svg',\n                                alt: 'search icon'\n                            }\n                        }),\n                        Object(_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('p', {\n                            attrs: {},\n                            children: [\n                                'Search'\n                            ]\n                        })\n                    ]\n                })\n            ]\n        }), Object(_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', {\n            attrs: {\n                class: 'overlay'\n            },\n            children: [\n                Object(_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('img', {\n                    attrs: {\n                        class: 'spinner',\n                        src: './images/load.svg',\n                        alt: 'spinner'\n                    }\n                })\n            ]\n    \n        })]\n      });\n});\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi92aXJ0dWFsRG9tL2NvbXBvbmVudHMvZm9ybU92ZXJsYXkuanM/YjIyMyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQWlDOztBQUVsQjtBQUNmLFdBQVcsOERBQUM7QUFDWjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsbUJBQW1CLDhEQUFDO0FBQ3BCLHFCQUFxQjtBQUNyQjtBQUNBLGdCQUFnQiw4REFBQztBQUNqQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixnQkFBZ0IsOERBQUM7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixnQkFBZ0IsOERBQUM7QUFDakIsNkJBQTZCO0FBQzdCO0FBQ0Esd0JBQXdCLDhEQUFDO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLHdCQUF3Qiw4REFBQztBQUN6QixxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsU0FBUyxHQUFHLDhEQUFDO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGdCQUFnQiw4REFBQztBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsQ0FBQyIsImZpbGUiOiIuL3ZpcnR1YWxEb20vY29tcG9uZW50cy9mb3JtT3ZlcmxheS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBoIGZyb20gJy4uL2NyZWF0ZUVsZW1lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gICAgcmV0dXJuIGgoJ2Zvcm0nLCB7XG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgYWN0aW9uOiAnJyxcbiAgICAgICAgICBjbGFzczogJ3Jvb3QnXG4gICAgICAgIH0sXG4gICAgICAgIGNoaWxkcmVuOiBbaCgnZGl2Jywge1xuICAgICAgICAgICAgYXR0cnM6IHt9LFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICBoKCdsYWJlbCcsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcjogJ3JlY2lwZSdcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICdXaGF0IGRvIHlvdSBmZWVsIGxpa2UgZWF0aW5nPydcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIGgoJ2lucHV0Jywge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICdyZWNpcGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdXaGF0IGRvIHlvdSBmZWVsIGxpa2UgZWF0aW5nPycsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIGgoJ2J1dHRvbicsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHt9LFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgaCgnaW1nJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogJy4vaW1hZ2VzL3NlYXJjaC5zdmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ6ICdzZWFyY2ggaWNvbidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGgoJ3AnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdTZWFyY2gnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdXG4gICAgICAgIH0pLCBoKCdkaXYnLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIGNsYXNzOiAnb3ZlcmxheSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgIGgoJ2ltZycsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnc3Bpbm5lcicsXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM6ICcuL2ltYWdlcy9sb2FkLnN2ZycsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ6ICdzcGlubmVyJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF1cbiAgICBcbiAgICAgICAgfSldXG4gICAgICB9KTtcbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./virtualDom/components/formOverlay.js\n");

/***/ }),

/***/ "./virtualDom/components/header.js":
/*!*****************************************!*\
  !*** ./virtualDom/components/header.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createElement */ \"./virtualDom/createElement.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => {\n    return Object(_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('header', {\n        attrs: {},\n        children: [Object(_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('img', {\n            attrs: {\n                src: './images/search.svg',\n                alt: 'search icon'\n            }\n        })]\n      });\n});\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi92aXJ0dWFsRG9tL2NvbXBvbmVudHMvaGVhZGVyLmpzPzUwYTEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFpQzs7QUFFbEI7QUFDZixXQUFXLDhEQUFDO0FBQ1osaUJBQWlCO0FBQ2pCLG1CQUFtQiw4REFBQztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsQ0FBQyIsImZpbGUiOiIuL3ZpcnR1YWxEb20vY29tcG9uZW50cy9oZWFkZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaCBmcm9tICcuLi9jcmVhdGVFbGVtZW50JztcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAgIHJldHVybiBoKCdoZWFkZXInLCB7XG4gICAgICAgIGF0dHJzOiB7fSxcbiAgICAgICAgY2hpbGRyZW46IFtoKCdpbWcnLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIHNyYzogJy4vaW1hZ2VzL3NlYXJjaC5zdmcnLFxuICAgICAgICAgICAgICAgIGFsdDogJ3NlYXJjaCBpY29uJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KV1cbiAgICAgIH0pO1xufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./virtualDom/components/header.js\n");

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