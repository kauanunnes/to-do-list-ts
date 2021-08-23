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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/material-icons/iconfont/material-icons.css":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/material-icons/iconfont/material-icons.css ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ./MaterialIcons-Regular.eot */ "./node_modules/material-icons/iconfont/MaterialIcons-Regular.eot");
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ./MaterialIcons-Regular.woff2 */ "./node_modules/material-icons/iconfont/MaterialIcons-Regular.woff2");
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(/*! ./MaterialIcons-Regular.woff */ "./node_modules/material-icons/iconfont/MaterialIcons-Regular.woff");
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(/*! ./MaterialIcons-Regular.ttf */ "./node_modules/material-icons/iconfont/MaterialIcons-Regular.ttf");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);
// Module
exports.push([module.i, "@font-face {\n  font-family: \"Material Icons\";\n  font-style: normal;\n  font-weight: 400;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  /* For IE6-8 */\n  src: local(\"Material Icons\"), local(\"MaterialIcons-Regular\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"truetype\");\n}\n\n.material-icons {\n  font-family: \"Material Icons\";\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;\n  display: inline-block;\n  line-height: 1;\n  text-transform: none;\n  letter-spacing: normal;\n  word-wrap: normal;\n  white-space: nowrap;\n  direction: ltr;\n  /* Support for all WebKit browsers. */\n  -webkit-font-smoothing: antialiased;\n  /* Support for Safari and Chrome. */\n  text-rendering: optimizeLegibility;\n  /* Support for Firefox. */\n  -moz-osx-font-smoothing: grayscale;\n  /* Support for IE. */\n  font-feature-settings: 'liga';\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "* {\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml {\r\n  font-size: 20px;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  padding: 30px;\r\n  display: flex;\r\n  justify-content: center;\r\n  height: 100%;\r\n  background: #d3cce3; /* fallback for old browsers */\r\n  background: -webkit-linear-gradient(\r\n    to right,\r\n    #e9e4f0,\r\n    #d3cce3\r\n  ); /* Chrome 10-25, Safari 5.1-6 */\r\n  background: linear-gradient(\r\n    to right,\r\n    #e9e4f0,\r\n    #d3cce3\r\n  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\r\n\r\n  color: #fff;\r\n  font-family: \"Roboto\", sans-serif;\r\n}\r\n\r\na,\r\na:visited {\r\n  color: yellowgreen;\r\n}\r\n\r\nmain {\r\n  background-color: #484848;\r\n  border-radius: 4px;\r\n  padding: 20px;\r\n  width: 400px;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  margin-bottom: 10px;\r\n  gap: 10px;\r\n}\r\n\r\nform input {\r\n  display: block;\r\n  width: calc(100% - 100px);\r\n  font-size: 0.8rem;\r\n  padding: 5px;\r\n  align-items: stretch;\r\n  outline: none;\r\n  border-radius: 4px;\r\n  border: none;\r\n  color: rgb(72, 72, 72);\r\n}\r\n\r\nform button {\r\n  width: 100px;\r\n  display: block;\r\n  font-size: 0.7rem;\r\n  border: none;\r\n  border-radius: 4px;\r\n}\r\n\r\ntable {\r\n  width: 100%;\r\n  table-layout: fixed;\r\n  border-collapse: collapse;\r\n}\r\n\r\ntd {\r\n  border-bottom: 1px solid rgba(255, 255, 255, 0.3);\r\n  padding: 10px 0;\r\n}\r\n\r\ntr:hover td {\r\n  background-color: rgba(255, 255, 255, 0.1);\r\n}\r\n\r\ntd:nth-child(1) {\r\n  width: 24px;\r\n}\r\n\r\ntd:nth-child(3) {\r\n  width: 72px;\r\n  font-size: 12px;\r\n  text-align: center;\r\n}\r\n\r\ntd:nth-child(2) {\r\n  cursor: default;\r\n}\r\n\r\ntd:nth-child(4) {\r\n  width: 36px;\r\n}\r\n\r\ntr.done td:nth-child(2) {\r\n  text-decoration: line-through;\r\n}\r\n\r\ntable input[type=\"checkbox\"] {\r\n  cursor: pointer;\r\n}\r\n\r\ntable i {\r\n  cursor: pointer;\r\n  opacity: 0.8;\r\n}\r\n\r\ntable i:hover {\r\n  opacity: 1;\r\n}\r\n\r\n.errors {\r\n  display: flex;\r\n  position: fixed;\r\n  right: 0;\r\n  top: 0;\r\n  margin: 10px;\r\n  width: auto;\r\n  height: auto;\r\n  padding: 20px 35px;\r\n  flex-direction: column;\r\n  transform: translateX(20px);\r\n  opacity: 0;\r\n}\r\n\r\n.snack-container {\r\n  font-family: 'Roboto', Arial, Helvetica, sans-serif;\r\n  display: flex;\r\n  padding: 15px 15px;\r\n  text-align: center;\r\n  height: 45px;\r\n  line-height: 1.6;\r\n  align-items: center;\r\n  width: auto;\r\n  justify-content: center;\r\n  border-radius: 4px;\r\n  margin: 5px auto;\r\n  font-weight: 600;\r\n  color: rgb(255, 255, 255);\r\n  font-size: 0.7rem;\r\n  -webkit-box-shadow: -1px 7px 18px -1px rgba(109, 109, 109, 0.44);\r\n  box-shadow: -1px 7px 18px -1px rgba(109, 109, 109, 0.44);\r\n}\r\n\r\n.errors.activated {\r\n  animation-name: snackAnimation;\r\n  animation-duration: 0.5s;\r\n  animation-iteration-count: 1;\r\n  animation-timing-function: ease-out;\r\n  animation-fill-mode: forwards;\r\n}\r\n\r\n.errors.desactive {\r\n  animation-name: snackAnimation2;\r\n  animation-duration: 0.4s;\r\n  animation-iteration-count: 1;\r\n  animation-timing-function: ease-out;\r\n  animation-fill-mode: forwards;\r\n}\r\n\r\n@keyframes snackAnimation {\r\n  from {\r\n    transform: translateX(20px);\r\n    opacity: 0.25;\r\n  }\r\n  to {\r\n    opacity: 1;\r\n    transform: translateX(0);\r\n  }\r\n}\r\n\r\n@keyframes snackAnimation2 {\r\n  from {\r\n    transform: translateX(0);\r\n    opacity: 1;\r\n  }\r\n  to {\r\n    opacity: 0;\r\n    transform: translateX(20px);\r\n  }\r\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/material-icons/iconfont/MaterialIcons-Regular.eot":
/*!************************************************************************!*\
  !*** ./node_modules/material-icons/iconfont/MaterialIcons-Regular.eot ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "fonts/MaterialIcons-Regular.eot");

/***/ }),

/***/ "./node_modules/material-icons/iconfont/MaterialIcons-Regular.ttf":
/*!************************************************************************!*\
  !*** ./node_modules/material-icons/iconfont/MaterialIcons-Regular.ttf ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "fonts/MaterialIcons-Regular.ttf");

/***/ }),

/***/ "./node_modules/material-icons/iconfont/MaterialIcons-Regular.woff":
/*!*************************************************************************!*\
  !*** ./node_modules/material-icons/iconfont/MaterialIcons-Regular.woff ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "fonts/MaterialIcons-Regular.woff");

/***/ }),

/***/ "./node_modules/material-icons/iconfont/MaterialIcons-Regular.woff2":
/*!**************************************************************************!*\
  !*** ./node_modules/material-icons/iconfont/MaterialIcons-Regular.woff2 ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "fonts/MaterialIcons-Regular.woff2");

/***/ }),

/***/ "./node_modules/material-icons/iconfont/material-icons.css":
/*!*****************************************************************!*\
  !*** ./node_modules/material-icons/iconfont/material-icons.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../css-loader/dist/cjs.js!./material-icons.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/material-icons/iconfont/material-icons.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var material_icons_iconfont_material_icons_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! material-icons/iconfont/material-icons.css */ "./node_modules/material-icons/iconfont/material-icons.css");
/* harmony import */ var material_icons_iconfont_material_icons_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(material_icons_iconfont_material_icons_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _model_Tarefa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model/Tarefa */ "./src/model/Tarefa.ts");
// Importando estilos



var t1 = new _model_Tarefa__WEBPACK_IMPORTED_MODULE_2__["Tarefa"]('Passar na padaria', _model_Tarefa__WEBPACK_IMPORTED_MODULE_2__["Prioridade"].baixa);
var t2 = new _model_Tarefa__WEBPACK_IMPORTED_MODULE_2__["Tarefa"]('Pagar escola das crionças', _model_Tarefa__WEBPACK_IMPORTED_MODULE_2__["Prioridade"].alta);
var tarefasAtuais = [t1, t2];
window.addEventListener("load", function () {
    showTasks(tarefasAtuais);
    handleCheck();
    document.querySelector("main button").addEventListener("click", function (e) {
        e.preventDefault();
        var inputElement = document.querySelector("input");
        if (!inputElement.value) {
            handleSuccess("Campo vazio!", "#ff4d4d");
            return;
        }
        var permissionToContinue = true;
        var taskDescription;
        if (inputElement.value.split("")[0] !== "#") {
            taskDescription = inputElement.value;
        }
        else {
            taskDescription = inputElement.value.split("").splice(5).join("");
        }
        tarefasAtuais.forEach(function (task) {
            if (task.descricao.toLowerCase() === taskDescription.toLowerCase()) {
                handleSuccess("Essa tarefa já existe!", "#ff4d4d");
                permissionToContinue = !permissionToContinue;
            }
        });
        if (!permissionToContinue)
            return;
        var priority;
        switch (inputElement.value.split("")[1]) {
            case "1":
                priority = _model_Tarefa__WEBPACK_IMPORTED_MODULE_2__["Prioridade"].alta;
                break;
            case "2":
                priority = _model_Tarefa__WEBPACK_IMPORTED_MODULE_2__["Prioridade"].media;
                break;
            case "3":
                priority = _model_Tarefa__WEBPACK_IMPORTED_MODULE_2__["Prioridade"].baixa;
                break;
            default:
                priority = _model_Tarefa__WEBPACK_IMPORTED_MODULE_2__["Prioridade"].baixa;
                break;
        }
        var task = new _model_Tarefa__WEBPACK_IMPORTED_MODULE_2__["Tarefa"](taskDescription, priority);
        handleNewTask(task);
        handleCheck();
        handleSuccess("Nova tarefa adicionada com sucesso.", "#00cc44");
        inputElement.value = "";
    });
});
function handleNewTask(task) {
    tarefasAtuais.push(task);
    var table = (document.querySelector("main table#table"));
    var newRow = task.toRow();
    switch (task.prioridade) {
        case 1:
            table.insertBefore(newRow, table.querySelector("table#table tr"));
            break;
        case 2:
            table.querySelectorAll("table#table tr").forEach(function (value) {
                if (value.querySelectorAll("td")[2].textContent === "[baixa]") {
                    table.insertBefore(newRow, value);
                    return false;
                }
                table.appendChild(newRow);
            });
            break;
        case 3:
            table.appendChild(newRow);
            break;
        default:
            break;
    }
    document.querySelectorAll("i").forEach(function (item) {
        item.addEventListener("click", function (event) {
            var btnDelete = event.currentTarget;
            if (btnDelete instanceof Element) {
                var task_1 = btnDelete.parentElement.parentElement.querySelectorAll("td")[1]
                    .textContent;
                btnDelete.parentElement.parentElement.remove();
                tarefasAtuais.filter(function (currentTask, index) {
                    if (currentTask.descricao === task_1) {
                        tarefasAtuais.splice(index, index + 1);
                    }
                });
            }
        });
    });
}
/* @arr array you want to listen to
   @callback function that will be called on any change inside array
 */
function listenChangesinArray(arr, callback) {
    // Add more methods here if you want to listen to them
    ["push"].forEach(function (m) {
        arr[m] = function () {
            var res = Array.prototype[m].apply(arr, arguments); // call normal behaviour
            callback.apply(arr, arguments); // finally call the callback supplied
            return res;
        };
    });
}
listenChangesinArray(tarefasAtuais, function () {
    if (tarefasAtuais.length === 0)
        return;
    handleCheck();
});
function showTasks(tarefas) {
    tarefas.forEach(function (task) {
        var table = document.querySelector("main table#table");
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        var newRow = document.createElement("tr");
        var newCell = document.createElement("td");
        var newCellPriority = document.createElement("td");
        var newCellTask = newCell.cloneNode();
        var newCellIcon = newCell.cloneNode();
        var deleteIcon = document.createElement("i");
        deleteIcon.className = "material-icons";
        deleteIcon.textContent = "delete";
        newCell.appendChild(checkbox);
        switch (task.prioridade) {
            case 1:
                newCellPriority.textContent = "[alta]";
                break;
            case 2:
                newCellPriority.textContent = "[média]";
                break;
            case 3:
                newCellPriority.textContent = "[baixa]";
                break;
            default:
                break;
        }
        // newRow.insertCell().textContent = tarefasAtuais[tarefasAtuais.length - 1].prioridade;
        newCellTask.textContent = task.descricao;
        newCellIcon.appendChild(deleteIcon);
        newRow.append(newCell, newCellTask, newCellPriority, newCellIcon);
        table.appendChild(newRow);
        document.querySelectorAll("i").forEach(function (item) {
            item.addEventListener("click", function (event) {
                var btnDelete = event.currentTarget;
                if (btnDelete instanceof Element) {
                    var task_2 = btnDelete.parentElement.parentElement.querySelectorAll("td")[1]
                        .textContent;
                    btnDelete.parentElement.parentElement.remove();
                    tarefasAtuais.filter(function (currentTask, index) {
                        if (currentTask.descricao === task_2) {
                            tarefasAtuais.splice(index, index + 1);
                        }
                    });
                }
            });
        });
    });
}
function handleCheck() {
    document
        .querySelectorAll('table#table input[type="checkbox"]')
        .forEach(function (input) {
        input.addEventListener("click", function (e) {
            var checkbox = e.target;
            if (checkbox instanceof HTMLInputElement) {
                if (checkbox.checked) {
                    var task_3 = checkbox.parentElement.parentElement.querySelectorAll("td")[1]
                        .textContent;
                    tarefasAtuais.filter(function (currentTask) {
                        if (currentTask.descricao === task_3) {
                            currentTask.finalizada = true;
                        }
                    });
                    checkbox.parentElement.parentElement.setAttribute("class", "done");
                }
                else {
                    checkbox.parentElement.parentElement.setAttribute("class", "");
                }
            }
        });
    });
}
function handleSuccess(message, bgColor) {
    var errorsContainer = document.createElement("div");
    errorsContainer.className = "errors";
    document.querySelector("body").appendChild(errorsContainer);
    errorsContainer.setAttribute("class", "errors activated");
    var snackError = document.createElement("div");
    snackError.setAttribute("class", "snack-container");
    snackError.style.background = bgColor;
    var errorLabel = document.createElement("span");
    errorLabel.setAttribute("class", "error");
    errorLabel.innerHTML = message;
    snackError.appendChild(errorLabel);
    errorsContainer.appendChild(snackError);
    setTimeout(function () {
        errorsContainer.setAttribute("class", "errors desactive");
    }, 3000);
    setTimeout(function () {
        errorsContainer.setAttribute("class", "errors");
        errorsContainer.querySelectorAll(".snack-container").forEach(function (value) {
            errorsContainer.removeChild(value);
            errorsContainer.remove();
        });
    }, 3500);
}


/***/ }),

/***/ "./src/model/Tarefa.ts":
/*!*****************************!*\
  !*** ./src/model/Tarefa.ts ***!
  \*****************************/
/*! exports provided: Tarefa, Prioridade */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tarefa", function() { return Tarefa; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Prioridade", function() { return Prioridade; });
var Tarefa = /** @class */ (function () {
    function Tarefa(descricao, prioridade) {
        this.descricao = descricao;
        this.prioridade = prioridade;
        this.finalizada = false;
    }
    Tarefa.prototype.toRow = function () {
        var checkbox = (document.createElement("input"));
        checkbox.type = "checkbox";
        var newRow = (document.createElement("tr"));
        var deleteIcon = document.createElement("i");
        deleteIcon.className = "material-icons";
        deleteIcon.textContent = "delete";
        var newCell = (document.createElement("td"));
        var newCellPriority = (document.createElement("td"));
        var newCellTask = newCell.cloneNode();
        var newCellIcon = newCell.cloneNode();
        newCell.appendChild(checkbox);
        newCellTask.textContent = this.descricao;
        newCellIcon.appendChild(deleteIcon);
        switch (this.prioridade) {
            case 1:
                newCellPriority.textContent = "[alta]";
                break;
            case 2:
                newCellPriority.textContent = "[média]";
                break;
            case 3:
                newCellPriority.textContent = "[baixa]";
                break;
            default:
                break;
        }
        newRow.append(newCell, newCellTask, newCellPriority, newCellIcon);
        return newRow;
    };
    return Tarefa;
}());

var Prioridade;
(function (Prioridade) {
    Prioridade[Prioridade["baixa"] = 3] = "baixa";
    Prioridade[Prioridade["media"] = 2] = "media";
    Prioridade[Prioridade["alta"] = 1] = "alta";
})(Prioridade || (Prioridade = {}));


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLWljb25zL2ljb25mb250L21hdGVyaWFsLWljb25zLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtaWNvbnMvaWNvbmZvbnQvTWF0ZXJpYWxJY29ucy1SZWd1bGFyLmVvdCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtaWNvbnMvaWNvbmZvbnQvTWF0ZXJpYWxJY29ucy1SZWd1bGFyLnR0ZiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtaWNvbnMvaWNvbmZvbnQvTWF0ZXJpYWxJY29ucy1SZWd1bGFyLndvZmYiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLWljb25zL2ljb25mb250L01hdGVyaWFsSWNvbnMtUmVndWxhci53b2ZmMiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtaWNvbnMvaWNvbmZvbnQvbWF0ZXJpYWwtaWNvbnMuY3NzPzdkYjQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWwvVGFyZWZhLnRzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZS5jc3M/NzE2MyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FB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IjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gcmVxdWlyZShcIi4vTWF0ZXJpYWxJY29ucy1SZWd1bGFyLmVvdFwiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IHJlcXVpcmUoXCIuL01hdGVyaWFsSWNvbnMtUmVndWxhci53b2ZmMlwiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IHJlcXVpcmUoXCIuL01hdGVyaWFsSWNvbnMtUmVndWxhci53b2ZmXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gcmVxdWlyZShcIi4vTWF0ZXJpYWxJY29ucy1SZWd1bGFyLnR0ZlwiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk1hdGVyaWFsIEljb25zXFxcIjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAvKiBGb3IgSUU2LTggKi9cXG4gIHNyYzogbG9jYWwoXFxcIk1hdGVyaWFsIEljb25zXFxcIiksIGxvY2FsKFxcXCJNYXRlcmlhbEljb25zLVJlZ3VsYXJcXFwiKSwgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIiksIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIiksIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpO1xcbn1cXG5cXG4ubWF0ZXJpYWwtaWNvbnMge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNYXRlcmlhbCBJY29uc1xcXCI7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XFxuICB3b3JkLXdyYXA6IG5vcm1hbDtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBkaXJlY3Rpb246IGx0cjtcXG4gIC8qIFN1cHBvcnQgZm9yIGFsbCBXZWJLaXQgYnJvd3NlcnMuICovXFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gIC8qIFN1cHBvcnQgZm9yIFNhZmFyaSBhbmQgQ2hyb21lLiAqL1xcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcXG4gIC8qIFN1cHBvcnQgZm9yIEZpcmVmb3guICovXFxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcbiAgLyogU3VwcG9ydCBmb3IgSUUuICovXFxuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6ICdsaWdhJztcXG59XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDMwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZDNjY2UzOyAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXFxyXFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChcXHJcXG4gICAgdG8gcmlnaHQsXFxyXFxuICAgICNlOWU0ZjAsXFxyXFxuICAgICNkM2NjZTNcXHJcXG4gICk7IC8qIENocm9tZSAxMC0yNSwgU2FmYXJpIDUuMS02ICovXFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxyXFxuICAgIHRvIHJpZ2h0LFxcclxcbiAgICAjZTllNGYwLFxcclxcbiAgICAjZDNjY2UzXFxyXFxuICApOyAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXFxyXFxuXFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuYSxcXHJcXG5hOnZpc2l0ZWQge1xcclxcbiAgY29sb3I6IHllbGxvd2dyZWVuO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0ODQ4NDg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgd2lkdGg6IDQwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIGlucHV0IHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwMHB4KTtcXHJcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY29sb3I6IHJnYig3MiwgNzIsIDcyKTtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSBidXR0b24ge1xcclxcbiAgd2lkdGg6IDEwMHB4O1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBmb250LXNpemU6IDAuN3JlbTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxudGFibGUge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xcclxcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXHJcXG59XFxyXFxuXFxyXFxudGQge1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMDtcXHJcXG59XFxyXFxuXFxyXFxudHI6aG92ZXIgdGQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xcclxcbn1cXHJcXG5cXHJcXG50ZDpudGgtY2hpbGQoMSkge1xcclxcbiAgd2lkdGg6IDI0cHg7XFxyXFxufVxcclxcblxcclxcbnRkOm50aC1jaGlsZCgzKSB7XFxyXFxuICB3aWR0aDogNzJweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxudGQ6bnRoLWNoaWxkKDIpIHtcXHJcXG4gIGN1cnNvcjogZGVmYXVsdDtcXHJcXG59XFxyXFxuXFxyXFxudGQ6bnRoLWNoaWxkKDQpIHtcXHJcXG4gIHdpZHRoOiAzNnB4O1xcclxcbn1cXHJcXG5cXHJcXG50ci5kb25lIHRkOm50aC1jaGlsZCgyKSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG59XFxyXFxuXFxyXFxudGFibGUgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbnRhYmxlIGkge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgb3BhY2l0eTogMC44O1xcclxcbn1cXHJcXG5cXHJcXG50YWJsZSBpOmhvdmVyIHtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcbi5lcnJvcnMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbWFyZ2luOiAxMHB4O1xcclxcbiAgd2lkdGg6IGF1dG87XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBwYWRkaW5nOiAyMHB4IDM1cHg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpO1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNuYWNrLWNvbnRhaW5lciB7XFxyXFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgcGFkZGluZzogMTVweCAxNXB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgaGVpZ2h0OiA0NXB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogYXV0bztcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgbWFyZ2luOiA1cHggYXV0bztcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcclxcbiAgZm9udC1zaXplOiAwLjdyZW07XFxyXFxuICAtd2Via2l0LWJveC1zaGFkb3c6IC0xcHggN3B4IDE4cHggLTFweCByZ2JhKDEwOSwgMTA5LCAxMDksIDAuNDQpO1xcclxcbiAgYm94LXNoYWRvdzogLTFweCA3cHggMThweCAtMXB4IHJnYmEoMTA5LCAxMDksIDEwOSwgMC40NCk7XFxyXFxufVxcclxcblxcclxcbi5lcnJvcnMuYWN0aXZhdGVkIHtcXHJcXG4gIGFuaW1hdGlvbi1uYW1lOiBzbmFja0FuaW1hdGlvbjtcXHJcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC41cztcXHJcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxyXFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcXHJcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcclxcbn1cXHJcXG5cXHJcXG4uZXJyb3JzLmRlc2FjdGl2ZSB7XFxyXFxuICBhbmltYXRpb24tbmFtZTogc25hY2tBbmltYXRpb24yO1xcclxcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xcclxcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXHJcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xcclxcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgc25hY2tBbmltYXRpb24ge1xcclxcbiAgZnJvbSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcXHJcXG4gICAgb3BhY2l0eTogMC4yNTtcXHJcXG4gIH1cXHJcXG4gIHRvIHtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHNuYWNrQW5pbWF0aW9uMiB7XFxyXFxuICBmcm9tIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgfVxcclxcbiAgdG8ge1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7XFxyXFxuICB9XFxyXFxufVxcclxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICB1cmwgPSB1cmwgJiYgdXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybDtcblxuICBpZiAodHlwZW9mIHVybCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csICdcXFxcbicpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZm9udHMvTWF0ZXJpYWxJY29ucy1SZWd1bGFyLmVvdFwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmb250cy9NYXRlcmlhbEljb25zLVJlZ3VsYXIudHRmXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImZvbnRzL01hdGVyaWFsSWNvbnMtUmVndWxhci53b2ZmXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImZvbnRzL01hdGVyaWFsSWNvbnMtUmVndWxhci53b2ZmMlwiOyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWF0ZXJpYWwtaWNvbnMuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIi8vIEltcG9ydGFuZG8gZXN0aWxvc1xyXG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQgXCJtYXRlcmlhbC1pY29ucy9pY29uZm9udC9tYXRlcmlhbC1pY29ucy5jc3NcIjtcclxuaW1wb3J0IHsgVGFyZWZhLCBQcmlvcmlkYWRlIH0gZnJvbSBcIi4vbW9kZWwvVGFyZWZhXCI7XHJcblxyXG5sZXQgdDEgPSBuZXcgVGFyZWZhKCdQYXNzYXIgbmEgcGFkYXJpYScsIFByaW9yaWRhZGUuYmFpeGEpO1xyXG5sZXQgdDIgPSBuZXcgVGFyZWZhKCdQYWdhciBlc2NvbGEgZGFzIGNyaW9uw6dhcycsIFByaW9yaWRhZGUuYWx0YSk7XHJcblxyXG5cclxubGV0IHRhcmVmYXNBdHVhaXM6IFRhcmVmYVtdID0gW3QxLCB0Ml1cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XHJcbiAgc2hvd1Rhc2tzKHRhcmVmYXNBdHVhaXMpO1xyXG4gIGhhbmRsZUNoZWNrKCk7XHJcblxyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluIGJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHZhciBpbnB1dEVsZW1lbnQgPSA8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik7XHJcbiAgICBpZiAoIWlucHV0RWxlbWVudC52YWx1ZSkge1xyXG4gICAgICBoYW5kbGVTdWNjZXNzKFwiQ2FtcG8gdmF6aW8hXCIsIFwiI2ZmNGQ0ZFwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBwZXJtaXNzaW9uVG9Db250aW51ZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBsZXQgdGFza0Rlc2NyaXB0aW9uOiBzdHJpbmc7XHJcblxyXG4gICAgaWYgKGlucHV0RWxlbWVudC52YWx1ZS5zcGxpdChcIlwiKVswXSAhPT0gXCIjXCIpIHtcclxuICAgICAgdGFza0Rlc2NyaXB0aW9uID0gaW5wdXRFbGVtZW50LnZhbHVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGFza0Rlc2NyaXB0aW9uID0gaW5wdXRFbGVtZW50LnZhbHVlLnNwbGl0KFwiXCIpLnNwbGljZSg1KS5qb2luKFwiXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHRhcmVmYXNBdHVhaXMuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgICBpZiAodGFzay5kZXNjcmljYW8udG9Mb3dlckNhc2UoKSA9PT0gdGFza0Rlc2NyaXB0aW9uLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgICBoYW5kbGVTdWNjZXNzKFwiRXNzYSB0YXJlZmEgasOhIGV4aXN0ZSFcIiwgXCIjZmY0ZDRkXCIpO1xyXG4gICAgICAgIHBlcm1pc3Npb25Ub0NvbnRpbnVlID0gIXBlcm1pc3Npb25Ub0NvbnRpbnVlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIXBlcm1pc3Npb25Ub0NvbnRpbnVlKSByZXR1cm47XHJcblxyXG4gICAgbGV0IHByaW9yaXR5OiBQcmlvcmlkYWRlO1xyXG5cclxuICAgIHN3aXRjaCAoaW5wdXRFbGVtZW50LnZhbHVlLnNwbGl0KFwiXCIpWzFdKSB7XHJcbiAgICAgIGNhc2UgXCIxXCI6XHJcbiAgICAgICAgcHJpb3JpdHkgPSBQcmlvcmlkYWRlLmFsdGE7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCIyXCI6XHJcbiAgICAgICAgcHJpb3JpdHkgPSBQcmlvcmlkYWRlLm1lZGlhO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiM1wiOlxyXG4gICAgICAgIHByaW9yaXR5ID0gUHJpb3JpZGFkZS5iYWl4YTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBwcmlvcml0eSA9IFByaW9yaWRhZGUuYmFpeGE7XHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCB0YXNrID0gbmV3IFRhcmVmYSh0YXNrRGVzY3JpcHRpb24sIHByaW9yaXR5KVxyXG5cclxuICAgIGhhbmRsZU5ld1Rhc2sodGFzayk7XHJcbiAgICBoYW5kbGVDaGVjaygpO1xyXG4gICAgaGFuZGxlU3VjY2VzcyhcIk5vdmEgdGFyZWZhIGFkaWNpb25hZGEgY29tIHN1Y2Vzc28uXCIsIFwiIzAwY2M0NFwiKTtcclxuXHJcbiAgICBpbnB1dEVsZW1lbnQudmFsdWUgPSBcIlwiO1xyXG4gIH0pO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGhhbmRsZU5ld1Rhc2sodGFzazogVGFyZWZhKTp2b2lkIHtcclxuICB0YXJlZmFzQXR1YWlzLnB1c2godGFzayk7XHJcbiAgbGV0IHRhYmxlOiBIVE1MVGFibGVFbGVtZW50ID0gPEhUTUxUYWJsZUVsZW1lbnQ+KFxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW4gdGFibGUjdGFibGVcIilcclxuICApO1xyXG4gIGxldCBuZXdSb3cgPSB0YXNrLnRvUm93KClcclxuICBzd2l0Y2ggKHRhc2sucHJpb3JpZGFkZSkge1xyXG4gICAgY2FzZSAxOlxyXG4gICAgICB0YWJsZS5pbnNlcnRCZWZvcmUobmV3Um93LCB0YWJsZS5xdWVyeVNlbGVjdG9yKFwidGFibGUjdGFibGUgdHJcIikpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgMjpcclxuICAgICAgdGFibGUucXVlcnlTZWxlY3RvckFsbChcInRhYmxlI3RhYmxlIHRyXCIpLmZvckVhY2goKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgaWYgKHZhbHVlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0ZFwiKVsyXS50ZXh0Q29udGVudCA9PT0gXCJbYmFpeGFdXCIpIHtcclxuICAgICAgICAgIHRhYmxlLmluc2VydEJlZm9yZShuZXdSb3csIHZhbHVlKTtcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGFibGUuYXBwZW5kQ2hpbGQobmV3Um93KTtcclxuICAgICAgfSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAzOlxyXG4gICAgICB0YWJsZS5hcHBlbmRDaGlsZChuZXdSb3cpO1xyXG4gICAgICBicmVhaztcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxuXHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlcIikuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgIGNvbnN0IGJ0bkRlbGV0ZSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XHJcbiAgICAgIGlmIChidG5EZWxldGUgaW5zdGFuY2VvZiBFbGVtZW50KSB7XHJcbiAgICAgICAgY29uc3QgdGFzayA9XHJcbiAgICAgICAgICBidG5EZWxldGUucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0ZFwiKVsxXVxyXG4gICAgICAgICAgICAudGV4dENvbnRlbnQ7XHJcbiAgICAgICAgYnRuRGVsZXRlLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgdGFyZWZhc0F0dWFpcy5maWx0ZXIoKGN1cnJlbnRUYXNrLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgaWYgKGN1cnJlbnRUYXNrLmRlc2NyaWNhbyA9PT0gdGFzaykge1xyXG4gICAgICAgICAgICB0YXJlZmFzQXR1YWlzLnNwbGljZShpbmRleCwgaW5kZXggKyAxKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbi8qIEBhcnIgYXJyYXkgeW91IHdhbnQgdG8gbGlzdGVuIHRvXHJcbiAgIEBjYWxsYmFjayBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIG9uIGFueSBjaGFuZ2UgaW5zaWRlIGFycmF5XHJcbiAqL1xyXG5mdW5jdGlvbiBsaXN0ZW5DaGFuZ2VzaW5BcnJheShhcnI6IFRhcmVmYVtdLCBjYWxsYmFjazogRnVuY3Rpb24pIHtcclxuICAvLyBBZGQgbW9yZSBtZXRob2RzIGhlcmUgaWYgeW91IHdhbnQgdG8gbGlzdGVuIHRvIHRoZW1cclxuICBbXCJwdXNoXCJdLmZvckVhY2goKG0pID0+IHtcclxuICAgIGFyclttXSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyIHJlcyA9IEFycmF5LnByb3RvdHlwZVttXS5hcHBseShhcnIsIGFyZ3VtZW50cyk7IC8vIGNhbGwgbm9ybWFsIGJlaGF2aW91clxyXG4gICAgICBjYWxsYmFjay5hcHBseShhcnIsIGFyZ3VtZW50cyk7IC8vIGZpbmFsbHkgY2FsbCB0aGUgY2FsbGJhY2sgc3VwcGxpZWRcclxuICAgICAgcmV0dXJuIHJlcztcclxuICAgIH07XHJcbiAgfSk7XHJcbn1cclxuXHJcbmxpc3RlbkNoYW5nZXNpbkFycmF5KHRhcmVmYXNBdHVhaXMsICgpID0+IHtcclxuICBpZiAodGFyZWZhc0F0dWFpcy5sZW5ndGggPT09IDApIHJldHVybjtcclxuICBoYW5kbGVDaGVjaygpO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIHNob3dUYXNrcyh0YXJlZmFzOiBUYXJlZmFbXSkge1xyXG4gIHRhcmVmYXMuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgbGV0IHRhYmxlID0gPEhUTUxUYWJsZUVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW4gdGFibGUjdGFibGVcIik7XHJcbiAgICBsZXQgY2hlY2tib3ggPSA8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBjaGVja2JveC50eXBlID0gXCJjaGVja2JveFwiO1xyXG4gICAgbGV0IG5ld1JvdyA9IDxIVE1MVGFibGVSb3dFbGVtZW50PmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgIGxldCBuZXdDZWxsID0gPEhUTUxUYWJsZUNlbGxFbGVtZW50PmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgIGxldCBuZXdDZWxsUHJpb3JpdHkgPSA8SFRNTFRhYmxlQ2VsbEVsZW1lbnQ+ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgbGV0IG5ld0NlbGxUYXNrID0gbmV3Q2VsbC5jbG9uZU5vZGUoKTtcclxuICAgIGxldCBuZXdDZWxsSWNvbiA9IG5ld0NlbGwuY2xvbmVOb2RlKCk7XHJcbiAgICBsZXQgZGVsZXRlSWNvbiA9IDxIVE1MTElFbGVtZW50PmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xyXG4gICAgZGVsZXRlSWNvbi5jbGFzc05hbWUgPSBcIm1hdGVyaWFsLWljb25zXCI7XHJcblxyXG4gICAgZGVsZXRlSWNvbi50ZXh0Q29udGVudCA9IFwiZGVsZXRlXCI7XHJcbiAgICBuZXdDZWxsLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcclxuXHJcbiAgICBzd2l0Y2ggKHRhc2sucHJpb3JpZGFkZSkge1xyXG4gICAgICBjYXNlIDE6XHJcbiAgICAgICAgbmV3Q2VsbFByaW9yaXR5LnRleHRDb250ZW50ID0gXCJbYWx0YV1cIjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAyOlxyXG4gICAgICAgIG5ld0NlbGxQcmlvcml0eS50ZXh0Q29udGVudCA9IFwiW23DqWRpYV1cIjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAzOlxyXG4gICAgICAgIG5ld0NlbGxQcmlvcml0eS50ZXh0Q29udGVudCA9IFwiW2JhaXhhXVwiO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIG5ld1Jvdy5pbnNlcnRDZWxsKCkudGV4dENvbnRlbnQgPSB0YXJlZmFzQXR1YWlzW3RhcmVmYXNBdHVhaXMubGVuZ3RoIC0gMV0ucHJpb3JpZGFkZTtcclxuICAgIG5ld0NlbGxUYXNrLnRleHRDb250ZW50ID0gdGFzay5kZXNjcmljYW87XHJcblxyXG4gICAgbmV3Q2VsbEljb24uYXBwZW5kQ2hpbGQoZGVsZXRlSWNvbik7XHJcblxyXG4gICAgbmV3Um93LmFwcGVuZChuZXdDZWxsLCBuZXdDZWxsVGFzaywgbmV3Q2VsbFByaW9yaXR5LCBuZXdDZWxsSWNvbik7XHJcbiAgICB0YWJsZS5hcHBlbmRDaGlsZChuZXdSb3cpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlcIikuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCBidG5EZWxldGUgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xyXG4gICAgICAgIGlmIChidG5EZWxldGUgaW5zdGFuY2VvZiBFbGVtZW50KSB7XHJcbiAgICAgICAgICBjb25zdCB0YXNrID1cclxuICAgICAgICAgICAgYnRuRGVsZXRlLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwidGRcIilbMV1cclxuICAgICAgICAgICAgICAudGV4dENvbnRlbnQ7XHJcbiAgICAgICAgICBidG5EZWxldGUucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xyXG5cclxuICAgICAgICAgIHRhcmVmYXNBdHVhaXMuZmlsdGVyKChjdXJyZW50VGFzaywgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRUYXNrLmRlc2NyaWNhbyA9PT0gdGFzaykge1xyXG4gICAgICAgICAgICAgIHRhcmVmYXNBdHVhaXMuc3BsaWNlKGluZGV4LCBpbmRleCArIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUNoZWNrKCkge1xyXG4gIGRvY3VtZW50XHJcbiAgICAucXVlcnlTZWxlY3RvckFsbCgndGFibGUjdGFibGUgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJylcclxuICAgIC5mb3JFYWNoKChpbnB1dCkgPT4ge1xyXG4gICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICBjb25zdCBjaGVja2JveCA9IGUudGFyZ2V0O1xyXG4gICAgICAgIGlmIChjaGVja2JveCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpIHtcclxuICAgICAgICAgIGlmIChjaGVja2JveC5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhc2sgPVxyXG4gICAgICAgICAgICAgIGNoZWNrYm94LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwidGRcIilbMV1cclxuICAgICAgICAgICAgICAgIC50ZXh0Q29udGVudDtcclxuXHJcbiAgICAgICAgICAgIHRhcmVmYXNBdHVhaXMuZmlsdGVyKChjdXJyZW50VGFzaykgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChjdXJyZW50VGFzay5kZXNjcmljYW8gPT09IHRhc2spIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRUYXNrLmZpbmFsaXphZGEgPSB0cnVlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjaGVja2JveC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJkb25lXCIpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2hlY2tib3gucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlU3VjY2VzcyhtZXNzYWdlOiBzdHJpbmcsIGJnQ29sb3I6IHN0cmluZykge1xyXG4gIGxldCBlcnJvcnNDb250YWluZXIgPSA8SFRNTERpdkVsZW1lbnQ+ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBlcnJvcnNDb250YWluZXIuY2xhc3NOYW1lID0gXCJlcnJvcnNcIjtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5hcHBlbmRDaGlsZChlcnJvcnNDb250YWluZXIpO1xyXG4gIGVycm9yc0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImVycm9ycyBhY3RpdmF0ZWRcIik7XHJcblxyXG4gIGxldCBzbmFja0Vycm9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBzbmFja0Vycm9yLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic25hY2stY29udGFpbmVyXCIpO1xyXG4gIHNuYWNrRXJyb3Iuc3R5bGUuYmFja2dyb3VuZCA9IGJnQ29sb3I7XHJcblxyXG4gIGxldCBlcnJvckxhYmVsID0gPEhUTUxTcGFuRWxlbWVudD5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICBlcnJvckxhYmVsLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZXJyb3JcIik7XHJcbiAgZXJyb3JMYWJlbC5pbm5lckhUTUwgPSBtZXNzYWdlO1xyXG5cclxuICBzbmFja0Vycm9yLmFwcGVuZENoaWxkKGVycm9yTGFiZWwpO1xyXG4gIGVycm9yc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzbmFja0Vycm9yKTtcclxuXHJcbiAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICBlcnJvcnNDb250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJlcnJvcnMgZGVzYWN0aXZlXCIpO1xyXG4gIH0sIDMwMDApO1xyXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgZXJyb3JzQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZXJyb3JzXCIpO1xyXG4gICAgZXJyb3JzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc25hY2stY29udGFpbmVyXCIpLmZvckVhY2goKHZhbHVlKSA9PiB7XHJcbiAgICAgIGVycm9yc0NvbnRhaW5lci5yZW1vdmVDaGlsZCh2YWx1ZSk7XHJcbiAgICAgIGVycm9yc0NvbnRhaW5lci5yZW1vdmUoKTtcclxuICAgIH0pO1xyXG4gIH0sIDM1MDApO1xyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBUYXJlZmEge1xyXG4gIGRlc2NyaWNhbzogc3RyaW5nO1xyXG4gIGZpbmFsaXphZGE6IGJvb2xlYW47XHJcbiAgcHJpb3JpZGFkZTogUHJpb3JpZGFkZTtcclxuXHJcbiAgY29uc3RydWN0b3IoZGVzY3JpY2FvOiBzdHJpbmcsIHByaW9yaWRhZGU6IFByaW9yaWRhZGUpIHtcclxuICAgIHRoaXMuZGVzY3JpY2FvID0gZGVzY3JpY2FvO1xyXG4gICAgdGhpcy5wcmlvcmlkYWRlID0gcHJpb3JpZGFkZTtcclxuICAgIHRoaXMuZmluYWxpemFkYSA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgdG9Sb3coKTogSFRNTFRhYmxlUm93RWxlbWVudCB7XHJcbiAgICBsZXQgY2hlY2tib3g6IEhUTUxJbnB1dEVsZW1lbnQgPSA8SFRNTElucHV0RWxlbWVudD4oXHJcbiAgICAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxyXG4gICAgKTtcclxuICAgIGNoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XHJcblxyXG4gICAgbGV0IG5ld1JvdzogSFRNTFRhYmxlUm93RWxlbWVudCA9IDxIVE1MVGFibGVSb3dFbGVtZW50PihcclxuICAgICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpXHJcbiAgICApO1xyXG4gICAgbGV0IGRlbGV0ZUljb246IEhUTUxFbGVtZW50ID0gPEhUTUxFbGVtZW50PmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xyXG4gICAgZGVsZXRlSWNvbi5jbGFzc05hbWUgPSBcIm1hdGVyaWFsLWljb25zXCI7XHJcbiAgICBkZWxldGVJY29uLnRleHRDb250ZW50ID0gXCJkZWxldGVcIjtcclxuXHJcbiAgICBsZXQgbmV3Q2VsbDogSFRNTFRhYmxlQ2VsbEVsZW1lbnQgPSA8SFRNTFRhYmxlQ2VsbEVsZW1lbnQ+KFxyXG4gICAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIilcclxuICAgICk7XHJcblxyXG4gICAgbGV0IG5ld0NlbGxQcmlvcml0eTogSFRNTFRhYmxlQ2VsbEVsZW1lbnQgPSA8SFRNTFRhYmxlQ2VsbEVsZW1lbnQ+KFxyXG4gICAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIilcclxuICAgICk7XHJcblxyXG4gICAgbGV0IG5ld0NlbGxUYXNrID0gbmV3Q2VsbC5jbG9uZU5vZGUoKTtcclxuXHJcbiAgICBsZXQgbmV3Q2VsbEljb24gPSBuZXdDZWxsLmNsb25lTm9kZSgpO1xyXG5cclxuICAgIG5ld0NlbGwuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xyXG5cclxuICAgIG5ld0NlbGxUYXNrLnRleHRDb250ZW50ID0gdGhpcy5kZXNjcmljYW87XHJcblxyXG4gICAgbmV3Q2VsbEljb24uYXBwZW5kQ2hpbGQoZGVsZXRlSWNvbik7XHJcbiAgICBzd2l0Y2ggKHRoaXMucHJpb3JpZGFkZSkge1xyXG4gICAgICBjYXNlIDE6XHJcbiAgICAgICAgbmV3Q2VsbFByaW9yaXR5LnRleHRDb250ZW50ID0gXCJbYWx0YV1cIjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAyOlxyXG4gICAgICAgIG5ld0NlbGxQcmlvcml0eS50ZXh0Q29udGVudCA9IFwiW23DqWRpYV1cIjtcclxuXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgMzpcclxuICAgICAgICBuZXdDZWxsUHJpb3JpdHkudGV4dENvbnRlbnQgPSBcIltiYWl4YV1cIjtcclxuXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBuZXdSb3cuYXBwZW5kKG5ld0NlbGwsIG5ld0NlbGxUYXNrLCBuZXdDZWxsUHJpb3JpdHksIG5ld0NlbGxJY29uKTtcclxuXHJcbiAgICByZXR1cm4gbmV3Um93O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGVudW0gUHJpb3JpZGFkZSB7XHJcbiAgYmFpeGEgPSAzLFxyXG4gIG1lZGlhID0gMixcclxuICBhbHRhID0gMSxcclxufVxyXG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiXSwic291cmNlUm9vdCI6IiJ9