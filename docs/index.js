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



var tarefasAtuais = [
    {
        id: 0,
        descricao: "Lavar roupa",
        dataCriada: new Date(),
        finalizada: false,
        prioridade: _model_Tarefa__WEBPACK_IMPORTED_MODULE_2__["Prioridade"].media,
    },
    {
        id: 1,
        descricao: "Beber Café",
        dataCriada: new Date(),
        finalizada: false,
        prioridade: _model_Tarefa__WEBPACK_IMPORTED_MODULE_2__["Prioridade"].baixa,
    },
];
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
        var priority = parseInt(inputElement.value.split("")[1]) || 3;
        var task = {
            id: tarefasAtuais.length,
            descricao: taskDescription,
            dataCriada: new Date(),
            finalizada: false,
        };
        task.prioridade = priority;
        handleNewTask(task);
        handleCheck();
        handleSuccess("Nova tarefa adicionada com sucesso.", "#00cc44");
        inputElement.value = "";
    });
});
function handleNewTask(task) {
    tarefasAtuais.push(task);
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
    newCellTask.textContent = task.descricao;
    newCellIcon.appendChild(deleteIcon);
    switch (task.prioridade) {
        case 1:
            newCellPriority.textContent = "[alta]";
            newRow.append(newCell, newCellTask, newCellPriority, newCellIcon);
            table.insertBefore(newRow, table.querySelector("table#table tr"));
            break;
        case 2:
            newCellPriority.textContent = "[média]";
            newRow.append(newCell, newCellTask, newCellPriority, newCellIcon);
            table.querySelectorAll("table#table tr").forEach(function (value) {
                if (value.querySelectorAll("td")[2].textContent === "[baixa]") {
                    table.insertBefore(newRow, value);
                    return false;
                }
                table.appendChild(newRow);
            });
            break;
        case 3:
            newCellPriority.textContent = "[baixa]";
            newRow.append(newCell, newCellTask, newCellPriority, newCellIcon);
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
/*! exports provided: Prioridade */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Prioridade", function() { return Prioridade; });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLWljb25zL2ljb25mb250L21hdGVyaWFsLWljb25zLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtaWNvbnMvaWNvbmZvbnQvTWF0ZXJpYWxJY29ucy1SZWd1bGFyLmVvdCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtaWNvbnMvaWNvbmZvbnQvTWF0ZXJpYWxJY29ucy1SZWd1bGFyLnR0ZiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtaWNvbnMvaWNvbmZvbnQvTWF0ZXJpYWxJY29ucy1SZWd1bGFyLndvZmYiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLWljb25zL2ljb25mb250L01hdGVyaWFsSWNvbnMtUmVndWxhci53b2ZmMiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtaWNvbnMvaWNvbmZvbnQvbWF0ZXJpYWwtaWNvbnMuY3NzPzdkYjQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWwvVGFyZWZhLnRzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZS5jc3M/NzE2MyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQywyRkFBc0M7QUFDaEYsc0NBQXNDLG1CQUFPLENBQUMsaUdBQXlDO0FBQ3ZGLG9DQUFvQyxtQkFBTyxDQUFDLHFHQUE2QjtBQUN6RSxvQ0FBb0MsbUJBQU8sQ0FBQyx5R0FBK0I7QUFDM0Usb0NBQW9DLG1CQUFPLENBQUMsdUdBQThCO0FBQzFFLG9DQUFvQyxtQkFBTyxDQUFDLHFHQUE2QjtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFFBQVMsZUFBZSxvQ0FBb0MsdUJBQXVCLHFCQUFxQix5REFBeUQsbVNBQW1TLEdBQUcscUJBQXFCLG9DQUFvQyx3QkFBd0IsdUJBQXVCLG9CQUFvQiwwQkFBMEIsbUJBQW1CLHlCQUF5QiwyQkFBMkIsc0JBQXNCLHdCQUF3QixtQkFBbUIsa0ZBQWtGLCtFQUErRSxxRUFBcUUsMkRBQTJELEdBQUc7QUFDdmhDO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMscUdBQWdEO0FBQzFGO0FBQ0E7QUFDQSxjQUFjLFFBQVMsTUFBTSw2QkFBNkIsS0FBSyxjQUFjLHNCQUFzQixLQUFLLGNBQWMsZ0JBQWdCLG9CQUFvQixvQkFBb0IsOEJBQThCLG1CQUFtQiwwQkFBMEIsa0lBQWtJLDJIQUEySCw2RkFBNkYsMENBQTBDLEtBQUsseUJBQXlCLHlCQUF5QixLQUFLLGNBQWMsZ0NBQWdDLHlCQUF5QixvQkFBb0IsbUJBQW1CLEtBQUssY0FBYyxvQkFBb0IsMEJBQTBCLGdCQUFnQixLQUFLLG9CQUFvQixxQkFBcUIsZ0NBQWdDLHdCQUF3QixtQkFBbUIsMkJBQTJCLG9CQUFvQix5QkFBeUIsbUJBQW1CLDZCQUE2QixLQUFLLHFCQUFxQixtQkFBbUIscUJBQXFCLHdCQUF3QixtQkFBbUIseUJBQXlCLEtBQUssZUFBZSxrQkFBa0IsMEJBQTBCLGdDQUFnQyxLQUFLLFlBQVksd0RBQXdELHNCQUFzQixLQUFLLHFCQUFxQixpREFBaUQsS0FBSyx5QkFBeUIsa0JBQWtCLEtBQUsseUJBQXlCLGtCQUFrQixzQkFBc0IseUJBQXlCLEtBQUsseUJBQXlCLHNCQUFzQixLQUFLLHlCQUF5QixrQkFBa0IsS0FBSyxpQ0FBaUMsb0NBQW9DLEtBQUssd0NBQXdDLHNCQUFzQixLQUFLLGlCQUFpQixzQkFBc0IsbUJBQW1CLEtBQUssdUJBQXVCLGlCQUFpQixLQUFLLGlCQUFpQixvQkFBb0Isc0JBQXNCLGVBQWUsYUFBYSxtQkFBbUIsa0JBQWtCLG1CQUFtQix5QkFBeUIsNkJBQTZCLGtDQUFrQyxpQkFBaUIsS0FBSywwQkFBMEIsMERBQTBELG9CQUFvQix5QkFBeUIseUJBQXlCLG1CQUFtQix1QkFBdUIsMEJBQTBCLGtCQUFrQiw4QkFBOEIseUJBQXlCLHVCQUF1Qix1QkFBdUIsZ0NBQWdDLHdCQUF3Qix1RUFBdUUsK0RBQStELEtBQUssMkJBQTJCLHFDQUFxQywrQkFBK0IsbUNBQW1DLDBDQUEwQyxvQ0FBb0MsS0FBSywyQkFBMkIsc0NBQXNDLCtCQUErQixtQ0FBbUMsMENBQTBDLG9DQUFvQyxLQUFLLG1DQUFtQyxZQUFZLG9DQUFvQyxzQkFBc0IsT0FBTyxVQUFVLG1CQUFtQixpQ0FBaUMsT0FBTyxLQUFLLG9DQUFvQyxZQUFZLGlDQUFpQyxtQkFBbUIsT0FBTyxVQUFVLG1CQUFtQixvQ0FBb0MsT0FBTyxLQUFLO0FBQzVoSDtBQUNBOzs7Ozs7Ozs7Ozs7O0FDTmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7O0FBRWhCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRDQUE0QyxxQkFBcUI7QUFDakU7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCLGlCQUFpQjtBQUN0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLHFCQUFxQjtBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsOEJBQThCOztBQUU5Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCxjQUFjO0FBQ25FO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDN0ZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7O0FBRUE7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRTs7Ozs7Ozs7Ozs7O0FDakNBO0FBQWUsb0ZBQXVCLG9DQUFvQyxFOzs7Ozs7Ozs7Ozs7QUNBMUU7QUFBZSxvRkFBdUIsb0NBQW9DLEU7Ozs7Ozs7Ozs7OztBQ0ExRTtBQUFlLG9GQUF1QixxQ0FBcUMsRTs7Ozs7Ozs7Ozs7O0FDQTNFO0FBQWUsb0ZBQXVCLHNDQUFzQyxFOzs7Ozs7Ozs7OztBQ0E1RSxVQUFVLG1CQUFPLENBQUMseUlBQThEO0FBQ2hGLDBCQUEwQixtQkFBTyxDQUFDLDJKQUFxRDs7QUFFdkY7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7O0FBSUEsc0M7Ozs7Ozs7Ozs7OztBQ2xCYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVEOztBQUV2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsd0JBQXdCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLGlCQUFpQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsU0FBSTs7QUFFbkY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0EscUVBQXFFLHFCQUFxQixhQUFhOztBQUV2Rzs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELEdBQUc7O0FBRUg7OztBQUdBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsNEJBQTRCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLG9CQUFvQiw2QkFBNkI7QUFDakQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7OztBQzVRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBcUI7QUFDQTtBQUMrQjtBQUNBO0FBRXBELElBQUksYUFBYSxHQUFhO0lBQzVCO1FBQ0UsRUFBRSxFQUFFLENBQUM7UUFDTCxTQUFTLEVBQUUsYUFBYTtRQUN4QixVQUFVLEVBQUUsSUFBSSxJQUFJLEVBQUU7UUFDdEIsVUFBVSxFQUFFLEtBQUs7UUFDakIsVUFBVSxFQUFFLHdEQUFVLENBQUMsS0FBSztLQUM3QjtJQUNEO1FBQ0UsRUFBRSxFQUFFLENBQUM7UUFDTCxTQUFTLEVBQUUsWUFBWTtRQUN2QixVQUFVLEVBQUUsSUFBSSxJQUFJLEVBQUU7UUFDdEIsVUFBVSxFQUFFLEtBQUs7UUFDakIsVUFBVSxFQUFFLHdEQUFVLENBQUMsS0FBSztLQUM3QjtDQUNGLENBQUM7QUFFRixNQUFNLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFO0lBQzlCLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN6QixXQUFXLEVBQUUsQ0FBQztJQUVkLFFBQVEsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUMsQ0FBQztRQUNoRSxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDbkIsSUFBSSxZQUFZLEdBQXFCLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUU7WUFDdkIsYUFBYSxDQUFDLGNBQWMsRUFBRSxTQUFTLENBQUMsQ0FBQztZQUN6QyxPQUFPO1NBQ1I7UUFFRCxJQUFJLG9CQUFvQixHQUFZLElBQUksQ0FBQztRQUN6QyxJQUFJLGVBQXVCLENBQUM7UUFDNUIsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUU7WUFDM0MsZUFBZSxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUM7U0FDdEM7YUFBTTtZQUNMLGVBQWUsR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ25FO1FBRUQsYUFBYSxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUk7WUFDekIsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxLQUFLLGVBQWUsQ0FBQyxXQUFXLEVBQUUsRUFBRTtnQkFDbEUsYUFBYSxDQUFDLHdCQUF3QixFQUFFLFNBQVMsQ0FBQyxDQUFDO2dCQUNuRCxvQkFBb0IsR0FBRyxDQUFDLG9CQUFvQixDQUFDO2FBQzlDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsb0JBQW9CO1lBQUUsT0FBTztRQUVsQyxJQUFJLFFBQVEsR0FBVyxRQUFRLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFdEUsSUFBSSxJQUFJLEdBQVc7WUFDakIsRUFBRSxFQUFFLGFBQWEsQ0FBQyxNQUFNO1lBQ3hCLFNBQVMsRUFBRSxlQUFlO1lBQzFCLFVBQVUsRUFBRSxJQUFJLElBQUksRUFBRTtZQUN0QixVQUFVLEVBQUUsS0FBSztTQUNsQixDQUFDO1FBRUYsSUFBSSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7UUFFM0IsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLFdBQVcsRUFBRSxDQUFDO1FBQ2QsYUFBYSxDQUFDLHFDQUFxQyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBRWhFLFlBQVksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0lBQzFCLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUM7QUFFSCxTQUFTLGFBQWEsQ0FBQyxJQUFZO0lBQ2pDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekIsSUFBSSxLQUFLLEdBQXFCLFFBQVEsQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUN6RSxJQUFJLFFBQVEsR0FBcUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNqRSxRQUFRLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQztJQUMzQixJQUFJLE1BQU0sR0FBd0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvRCxJQUFJLE9BQU8sR0FBeUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqRSxJQUFJLGVBQWUsR0FBeUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6RSxJQUFJLFdBQVcsR0FBRyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDdEMsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3RDLElBQUksVUFBVSxHQUFrQixRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVELFVBQVUsQ0FBQyxTQUFTLEdBQUcsZ0JBQWdCLENBQUM7SUFFeEMsVUFBVSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUM7SUFDbEMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM5QixXQUFXLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDekMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUVwQyxRQUFRLElBQUksQ0FBQyxVQUFVLEVBQUU7UUFDdkIsS0FBSyxDQUFDO1lBQ0osZUFBZSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUM7WUFDdkMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsV0FBVyxFQUFFLGVBQWUsRUFBRSxXQUFXLENBQUMsQ0FBQztZQUNsRSxLQUFLLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztZQUNsRSxNQUFNO1FBQ1IsS0FBSyxDQUFDO1lBQ0osZUFBZSxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUM7WUFDeEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsV0FBVyxFQUFFLGVBQWUsRUFBRSxXQUFXLENBQUMsQ0FBQztZQUNsRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFLO2dCQUNyRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEtBQUssU0FBUyxFQUFFO29CQUM3RCxLQUFLLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztvQkFDbEMsT0FBTyxLQUFLLENBQUM7aUJBQ2Q7Z0JBQ0QsS0FBSyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM1QixDQUFDLENBQUMsQ0FBQztZQUNILE1BQU07UUFDUixLQUFLLENBQUM7WUFDSixlQUFlLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQztZQUN4QyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxXQUFXLEVBQUUsZUFBZSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBQ2xFLEtBQUssQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFMUIsTUFBTTtRQUNSO1lBQ0UsTUFBTTtLQUNUO0lBRUQsUUFBUSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUk7UUFDMUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFDLEtBQUs7WUFDbkMsSUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQztZQUN0QyxJQUFJLFNBQVMsWUFBWSxPQUFPLEVBQUU7Z0JBQ2hDLElBQU0sTUFBSSxHQUNSLFNBQVMsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztxQkFDNUQsV0FBVyxDQUFDO2dCQUNqQixTQUFTLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFFL0MsYUFBYSxDQUFDLE1BQU0sQ0FBQyxVQUFDLFdBQVcsRUFBRSxLQUFLO29CQUN0QyxJQUFJLFdBQVcsQ0FBQyxTQUFTLEtBQUssTUFBSSxFQUFFO3dCQUNsQyxhQUFhLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7cUJBQ3hDO2dCQUNILENBQUMsQ0FBQyxDQUFDO2FBQ0o7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQUVEOztHQUVHO0FBQ0gsU0FBUyxvQkFBb0IsQ0FBQyxHQUFhLEVBQUUsUUFBa0I7SUFDN0Qsc0RBQXNEO0lBQ3RELENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsQ0FBQztRQUNqQixHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUc7WUFDUCxJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyx3QkFBd0I7WUFDNUUsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxxQ0FBcUM7WUFDckUsT0FBTyxHQUFHLENBQUM7UUFDYixDQUFDLENBQUM7SUFDSixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUM7QUFFRCxvQkFBb0IsQ0FBQyxhQUFhLEVBQUU7SUFDbEMsSUFBSSxhQUFhLENBQUMsTUFBTSxLQUFLLENBQUM7UUFBRSxPQUFPO0lBQ3ZDLFdBQVcsRUFBRSxDQUFDO0FBQ2hCLENBQUMsQ0FBQyxDQUFDO0FBRUgsU0FBUyxTQUFTLENBQUMsT0FBaUI7SUFDbEMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUk7UUFDbkIsSUFBSSxLQUFLLEdBQXFCLFFBQVEsQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUN6RSxJQUFJLFFBQVEsR0FBcUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNqRSxRQUFRLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQztRQUMzQixJQUFJLE1BQU0sR0FBd0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvRCxJQUFJLE9BQU8sR0FBeUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqRSxJQUFJLGVBQWUsR0FBeUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6RSxJQUFJLFdBQVcsR0FBRyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDdEMsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3RDLElBQUksVUFBVSxHQUFrQixRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzVELFVBQVUsQ0FBQyxTQUFTLEdBQUcsZ0JBQWdCLENBQUM7UUFFeEMsVUFBVSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUM7UUFDbEMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUU5QixRQUFRLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDdkIsS0FBSyxDQUFDO2dCQUNKLGVBQWUsQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDO2dCQUN2QyxNQUFNO1lBQ1IsS0FBSyxDQUFDO2dCQUNKLGVBQWUsQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDO2dCQUN4QyxNQUFNO1lBQ1IsS0FBSyxDQUFDO2dCQUNKLGVBQWUsQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDO2dCQUN4QyxNQUFNO1lBQ1I7Z0JBQ0UsTUFBTTtTQUNUO1FBRUQsd0ZBQXdGO1FBQ3hGLFdBQVcsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUV6QyxXQUFXLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRXBDLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxlQUFlLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDbEUsS0FBSyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQixRQUFRLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSTtZQUMxQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUMsS0FBSztnQkFDbkMsSUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQztnQkFDdEMsSUFBSSxTQUFTLFlBQVksT0FBTyxFQUFFO29CQUNoQyxJQUFNLE1BQUksR0FDUixTQUFTLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7eUJBQzVELFdBQVcsQ0FBQztvQkFDakIsU0FBUyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBRS9DLGFBQWEsQ0FBQyxNQUFNLENBQUMsVUFBQyxXQUFXLEVBQUUsS0FBSzt3QkFDdEMsSUFBSSxXQUFXLENBQUMsU0FBUyxLQUFLLE1BQUksRUFBRTs0QkFDbEMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO3lCQUN4QztvQkFDSCxDQUFDLENBQUMsQ0FBQztpQkFDSjtZQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUM7QUFFRCxTQUFTLFdBQVc7SUFDbEIsUUFBUTtTQUNMLGdCQUFnQixDQUFDLG9DQUFvQyxDQUFDO1NBQ3RELE9BQU8sQ0FBQyxVQUFDLEtBQUs7UUFDYixLQUFLLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUMsQ0FBQztZQUNoQyxJQUFNLFFBQVEsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQzFCLElBQUksUUFBUSxZQUFZLGdCQUFnQixFQUFFO2dCQUN4QyxJQUFJLFFBQVEsQ0FBQyxPQUFPLEVBQUU7b0JBQ3BCLElBQU0sTUFBSSxHQUNSLFFBQVEsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzt5QkFDM0QsV0FBVyxDQUFDO29CQUVqQixhQUFhLENBQUMsTUFBTSxDQUFDLFVBQUMsV0FBVzt3QkFDL0IsSUFBSSxXQUFXLENBQUMsU0FBUyxLQUFLLE1BQUksRUFBRTs0QkFDbEMsV0FBVyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7eUJBQy9CO29CQUNILENBQUMsQ0FBQyxDQUFDO29CQUVILFFBQVEsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7aUJBQ3BFO3FCQUFNO29CQUNMLFFBQVEsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7aUJBQ2hFO2FBQ0Y7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUVELFNBQVMsYUFBYSxDQUFDLE9BQWUsRUFBRSxPQUFlO0lBQ3JELElBQUksZUFBZSxHQUFtQixRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3BFLGVBQWUsQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO0lBQ3JDLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQzVELGVBQWUsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLGtCQUFrQixDQUFDLENBQUM7SUFFMUQsSUFBSSxVQUFVLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQyxVQUFVLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3BELFVBQVUsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQztJQUV0QyxJQUFJLFVBQVUsR0FBb0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNqRSxVQUFVLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMxQyxVQUFVLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztJQUUvQixVQUFVLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ25DLGVBQWUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7SUFFeEMsVUFBVSxDQUFDO1FBQ1QsZUFBZSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztJQUM1RCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDVCxVQUFVLENBQUM7UUFDVCxlQUFlLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNoRCxlQUFlLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFLO1lBQ2pFLGVBQWUsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbkMsZUFBZSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ1gsQ0FBQzs7Ozs7Ozs7Ozs7OztBQy9QRDtBQUFBO0FBQUEsSUFBWSxVQUlYO0FBSkQsV0FBWSxVQUFVO0lBQ3BCLDZDQUFTO0lBQ1QsNkNBQVM7SUFDVCwyQ0FBUTtBQUNWLENBQUMsRUFKVyxVQUFVLEtBQVYsVUFBVSxRQUlyQjs7Ozs7Ozs7Ozs7O0FDYkQsVUFBVSxtQkFBTyxDQUFDLG1KQUF3RTtBQUMxRiwwQkFBMEIsbUJBQU8sQ0FBQyxrSEFBc0Q7O0FBRXhGOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7OztBQUlBLHNDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IHJlcXVpcmUoXCIuL01hdGVyaWFsSWNvbnMtUmVndWxhci5lb3RcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSByZXF1aXJlKFwiLi9NYXRlcmlhbEljb25zLVJlZ3VsYXIud29mZjJcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSByZXF1aXJlKFwiLi9NYXRlcmlhbEljb25zLVJlZ3VsYXIud29mZlwiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IHJlcXVpcmUoXCIuL01hdGVyaWFsSWNvbnMtUmVndWxhci50dGZcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNYXRlcmlhbCBJY29uc1xcXCI7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgLyogRm9yIElFNi04ICovXFxuICBzcmM6IGxvY2FsKFxcXCJNYXRlcmlhbCBJY29uc1xcXCIpLCBsb2NhbChcXFwiTWF0ZXJpYWxJY29ucy1SZWd1bGFyXFxcIiksIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpLCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpIGZvcm1hdChcXFwid29mZlxcXCIpLCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTtcXG59XFxuXFxuLm1hdGVyaWFsLWljb25zIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTWF0ZXJpYWwgSWNvbnNcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xcbiAgd29yZC13cmFwOiBub3JtYWw7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgZGlyZWN0aW9uOiBsdHI7XFxuICAvKiBTdXBwb3J0IGZvciBhbGwgV2ViS2l0IGJyb3dzZXJzLiAqL1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuICAvKiBTdXBwb3J0IGZvciBTYWZhcmkgYW5kIENocm9tZS4gKi9cXG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XFxuICAvKiBTdXBwb3J0IGZvciBGaXJlZm94LiAqL1xcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXG4gIC8qIFN1cHBvcnQgZm9yIElFLiAqL1xcbiAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiAnbGlnYSc7XFxufVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAzMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZDogI2QzY2NlMzsgLyogZmFsbGJhY2sgZm9yIG9sZCBicm93c2VycyAqL1xcclxcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoXFxyXFxuICAgIHRvIHJpZ2h0LFxcclxcbiAgICAjZTllNGYwLFxcclxcbiAgICAjZDNjY2UzXFxyXFxuICApOyAvKiBDaHJvbWUgMTAtMjUsIFNhZmFyaSA1LjEtNiAqL1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcclxcbiAgICB0byByaWdodCxcXHJcXG4gICAgI2U5ZTRmMCxcXHJcXG4gICAgI2QzY2NlM1xcclxcbiAgKTsgLyogVzNDLCBJRSAxMCsvIEVkZ2UsIEZpcmVmb3ggMTYrLCBDaHJvbWUgMjYrLCBPcGVyYSAxMissIFNhZmFyaSA3KyAqL1xcclxcblxcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmEsXFxyXFxuYTp2aXNpdGVkIHtcXHJcXG4gIGNvbG9yOiB5ZWxsb3dncmVlbjtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDg0ODQ4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIHdpZHRoOiA0MDBweDtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSBpbnB1dCB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxMDBweCk7XFxyXFxuICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGNvbG9yOiByZ2IoNzIsIDcyLCA3Mik7XFxyXFxufVxcclxcblxcclxcbmZvcm0gYnV0dG9uIHtcXHJcXG4gIHdpZHRoOiAxMDBweDtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgZm9udC1zaXplOiAwLjdyZW07XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxufVxcclxcblxcclxcbnRhYmxlIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDtcXHJcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxyXFxufVxcclxcblxcclxcbnRkIHtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDA7XFxyXFxufVxcclxcblxcclxcbnRyOmhvdmVyIHRkIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcXHJcXG59XFxyXFxuXFxyXFxudGQ6bnRoLWNoaWxkKDEpIHtcXHJcXG4gIHdpZHRoOiAyNHB4O1xcclxcbn1cXHJcXG5cXHJcXG50ZDpudGgtY2hpbGQoMykge1xcclxcbiAgd2lkdGg6IDcycHg7XFxyXFxuICBmb250LXNpemU6IDEycHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbnRkOm50aC1jaGlsZCgyKSB7XFxyXFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxufVxcclxcblxcclxcbnRkOm50aC1jaGlsZCg0KSB7XFxyXFxuICB3aWR0aDogMzZweDtcXHJcXG59XFxyXFxuXFxyXFxudHIuZG9uZSB0ZDpudGgtY2hpbGQoMikge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxufVxcclxcblxcclxcbnRhYmxlIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG50YWJsZSBpIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIG9wYWNpdHk6IDAuODtcXHJcXG59XFxyXFxuXFxyXFxudGFibGUgaTpob3ZlciB7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uZXJyb3JzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIG1hcmdpbjogMTBweDtcXHJcXG4gIHdpZHRoOiBhdXRvO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgcGFkZGluZzogMjBweCAzNXB4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxufVxcclxcblxcclxcbi5zbmFjay1jb250YWluZXIge1xcclxcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHBhZGRpbmc6IDE1cHggMTVweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogNDVweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IGF1dG87XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIG1hcmdpbjogNXB4IGF1dG87XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG4gIGZvbnQtc2l6ZTogMC43cmVtO1xcclxcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAtMXB4IDdweCAxOHB4IC0xcHggcmdiYSgxMDksIDEwOSwgMTA5LCAwLjQ0KTtcXHJcXG4gIGJveC1zaGFkb3c6IC0xcHggN3B4IDE4cHggLTFweCByZ2JhKDEwOSwgMTA5LCAxMDksIDAuNDQpO1xcclxcbn1cXHJcXG5cXHJcXG4uZXJyb3JzLmFjdGl2YXRlZCB7XFxyXFxuICBhbmltYXRpb24tbmFtZTogc25hY2tBbmltYXRpb247XFxyXFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuNXM7XFxyXFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcclxcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XFxyXFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXHJcXG59XFxyXFxuXFxyXFxuLmVycm9ycy5kZXNhY3RpdmUge1xcclxcbiAgYW5pbWF0aW9uLW5hbWU6IHNuYWNrQW5pbWF0aW9uMjtcXHJcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcXHJcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxyXFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcXHJcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHNuYWNrQW5pbWF0aW9uIHtcXHJcXG4gIGZyb20ge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7XFxyXFxuICAgIG9wYWNpdHk6IDAuMjU7XFxyXFxuICB9XFxyXFxuICB0byB7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBzbmFja0FuaW1hdGlvbjIge1xcclxcbiAgZnJvbSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gIH1cXHJcXG4gIHRvIHtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gdXJsICYmIHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmw7XG5cbiAgaWYgKHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCAnXFxcXG4nKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImZvbnRzL01hdGVyaWFsSWNvbnMtUmVndWxhci5lb3RcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZm9udHMvTWF0ZXJpYWxJY29ucy1SZWd1bGFyLnR0ZlwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmb250cy9NYXRlcmlhbEljb25zLVJlZ3VsYXIud29mZlwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmb250cy9NYXRlcmlhbEljb25zLVJlZ3VsYXIud29mZjJcIjsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21hdGVyaWFsLWljb25zLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCIvLyBJbXBvcnRhbmRvIGVzdGlsb3NcclxuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcclxuaW1wb3J0IFwibWF0ZXJpYWwtaWNvbnMvaWNvbmZvbnQvbWF0ZXJpYWwtaWNvbnMuY3NzXCI7XHJcbmltcG9ydCB7IFRhcmVmYSwgUHJpb3JpZGFkZSB9IGZyb20gXCIuL21vZGVsL1RhcmVmYVwiO1xyXG5cclxubGV0IHRhcmVmYXNBdHVhaXM6IFRhcmVmYVtdID0gW1xyXG4gIHtcclxuICAgIGlkOiAwLFxyXG4gICAgZGVzY3JpY2FvOiBcIkxhdmFyIHJvdXBhXCIsXHJcbiAgICBkYXRhQ3JpYWRhOiBuZXcgRGF0ZSgpLFxyXG4gICAgZmluYWxpemFkYTogZmFsc2UsXHJcbiAgICBwcmlvcmlkYWRlOiBQcmlvcmlkYWRlLm1lZGlhLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBkZXNjcmljYW86IFwiQmViZXIgQ2Fmw6lcIixcclxuICAgIGRhdGFDcmlhZGE6IG5ldyBEYXRlKCksXHJcbiAgICBmaW5hbGl6YWRhOiBmYWxzZSxcclxuICAgIHByaW9yaWRhZGU6IFByaW9yaWRhZGUuYmFpeGEsXHJcbiAgfSxcclxuXTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XHJcbiAgc2hvd1Rhc2tzKHRhcmVmYXNBdHVhaXMpO1xyXG4gIGhhbmRsZUNoZWNrKCk7XHJcblxyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluIGJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHZhciBpbnB1dEVsZW1lbnQgPSA8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik7XHJcbiAgICBpZiAoIWlucHV0RWxlbWVudC52YWx1ZSkge1xyXG4gICAgICBoYW5kbGVTdWNjZXNzKFwiQ2FtcG8gdmF6aW8hXCIsIFwiI2ZmNGQ0ZFwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBwZXJtaXNzaW9uVG9Db250aW51ZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBsZXQgdGFza0Rlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICBpZiAoaW5wdXRFbGVtZW50LnZhbHVlLnNwbGl0KFwiXCIpWzBdICE9PSBcIiNcIikge1xyXG4gICAgICB0YXNrRGVzY3JpcHRpb24gPSBpbnB1dEVsZW1lbnQudmFsdWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0YXNrRGVzY3JpcHRpb24gPSBpbnB1dEVsZW1lbnQudmFsdWUuc3BsaXQoXCJcIikuc3BsaWNlKDUpLmpvaW4oXCJcIik7XHJcbiAgICB9XHJcblxyXG4gICAgdGFyZWZhc0F0dWFpcy5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcbiAgICAgIGlmICh0YXNrLmRlc2NyaWNhby50b0xvd2VyQ2FzZSgpID09PSB0YXNrRGVzY3JpcHRpb24udG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAgIGhhbmRsZVN1Y2Nlc3MoXCJFc3NhIHRhcmVmYSBqw6EgZXhpc3RlIVwiLCBcIiNmZjRkNGRcIik7XHJcbiAgICAgICAgcGVybWlzc2lvblRvQ29udGludWUgPSAhcGVybWlzc2lvblRvQ29udGludWU7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghcGVybWlzc2lvblRvQ29udGludWUpIHJldHVybjtcclxuXHJcbiAgICBsZXQgcHJpb3JpdHk6IG51bWJlciA9IHBhcnNlSW50KGlucHV0RWxlbWVudC52YWx1ZS5zcGxpdChcIlwiKVsxXSkgfHwgMztcclxuXHJcbiAgICBsZXQgdGFzazogVGFyZWZhID0ge1xyXG4gICAgICBpZDogdGFyZWZhc0F0dWFpcy5sZW5ndGgsXHJcbiAgICAgIGRlc2NyaWNhbzogdGFza0Rlc2NyaXB0aW9uLFxyXG4gICAgICBkYXRhQ3JpYWRhOiBuZXcgRGF0ZSgpLFxyXG4gICAgICBmaW5hbGl6YWRhOiBmYWxzZSxcclxuICAgIH07XHJcblxyXG4gICAgdGFzay5wcmlvcmlkYWRlID0gcHJpb3JpdHk7XHJcblxyXG4gICAgaGFuZGxlTmV3VGFzayh0YXNrKTtcclxuICAgIGhhbmRsZUNoZWNrKCk7XHJcbiAgICBoYW5kbGVTdWNjZXNzKFwiTm92YSB0YXJlZmEgYWRpY2lvbmFkYSBjb20gc3VjZXNzby5cIiwgXCIjMDBjYzQ0XCIpO1xyXG5cclxuICAgIGlucHV0RWxlbWVudC52YWx1ZSA9IFwiXCI7XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gaGFuZGxlTmV3VGFzayh0YXNrOiBUYXJlZmEpIHtcclxuICB0YXJlZmFzQXR1YWlzLnB1c2godGFzayk7XHJcbiAgbGV0IHRhYmxlID0gPEhUTUxUYWJsZUVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW4gdGFibGUjdGFibGVcIik7XHJcbiAgbGV0IGNoZWNrYm94ID0gPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gIGNoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XHJcbiAgbGV0IG5ld1JvdyA9IDxIVE1MVGFibGVSb3dFbGVtZW50PmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICBsZXQgbmV3Q2VsbCA9IDxIVE1MVGFibGVDZWxsRWxlbWVudD5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgbGV0IG5ld0NlbGxQcmlvcml0eSA9IDxIVE1MVGFibGVDZWxsRWxlbWVudD5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgbGV0IG5ld0NlbGxUYXNrID0gbmV3Q2VsbC5jbG9uZU5vZGUoKTtcclxuICBsZXQgbmV3Q2VsbEljb24gPSBuZXdDZWxsLmNsb25lTm9kZSgpO1xyXG4gIGxldCBkZWxldGVJY29uID0gPEhUTUxMSUVsZW1lbnQ+ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XHJcbiAgZGVsZXRlSWNvbi5jbGFzc05hbWUgPSBcIm1hdGVyaWFsLWljb25zXCI7XHJcblxyXG4gIGRlbGV0ZUljb24udGV4dENvbnRlbnQgPSBcImRlbGV0ZVwiO1xyXG4gIG5ld0NlbGwuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xyXG4gIG5ld0NlbGxUYXNrLnRleHRDb250ZW50ID0gdGFzay5kZXNjcmljYW87XHJcbiAgbmV3Q2VsbEljb24uYXBwZW5kQ2hpbGQoZGVsZXRlSWNvbik7XHJcblxyXG4gIHN3aXRjaCAodGFzay5wcmlvcmlkYWRlKSB7XHJcbiAgICBjYXNlIDE6XHJcbiAgICAgIG5ld0NlbGxQcmlvcml0eS50ZXh0Q29udGVudCA9IFwiW2FsdGFdXCI7XHJcbiAgICAgIG5ld1Jvdy5hcHBlbmQobmV3Q2VsbCwgbmV3Q2VsbFRhc2ssIG5ld0NlbGxQcmlvcml0eSwgbmV3Q2VsbEljb24pO1xyXG4gICAgICB0YWJsZS5pbnNlcnRCZWZvcmUobmV3Um93LCB0YWJsZS5xdWVyeVNlbGVjdG9yKFwidGFibGUjdGFibGUgdHJcIikpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgMjpcclxuICAgICAgbmV3Q2VsbFByaW9yaXR5LnRleHRDb250ZW50ID0gXCJbbcOpZGlhXVwiO1xyXG4gICAgICBuZXdSb3cuYXBwZW5kKG5ld0NlbGwsIG5ld0NlbGxUYXNrLCBuZXdDZWxsUHJpb3JpdHksIG5ld0NlbGxJY29uKTtcclxuICAgICAgdGFibGUucXVlcnlTZWxlY3RvckFsbChcInRhYmxlI3RhYmxlIHRyXCIpLmZvckVhY2goKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgaWYgKHZhbHVlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0ZFwiKVsyXS50ZXh0Q29udGVudCA9PT0gXCJbYmFpeGFdXCIpIHtcclxuICAgICAgICAgIHRhYmxlLmluc2VydEJlZm9yZShuZXdSb3csIHZhbHVlKTtcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGFibGUuYXBwZW5kQ2hpbGQobmV3Um93KTtcclxuICAgICAgfSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAzOlxyXG4gICAgICBuZXdDZWxsUHJpb3JpdHkudGV4dENvbnRlbnQgPSBcIltiYWl4YV1cIjtcclxuICAgICAgbmV3Um93LmFwcGVuZChuZXdDZWxsLCBuZXdDZWxsVGFzaywgbmV3Q2VsbFByaW9yaXR5LCBuZXdDZWxsSWNvbik7XHJcbiAgICAgIHRhYmxlLmFwcGVuZENoaWxkKG5ld1Jvdyk7XHJcblxyXG4gICAgICBicmVhaztcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxuXHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlcIikuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgIGNvbnN0IGJ0bkRlbGV0ZSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XHJcbiAgICAgIGlmIChidG5EZWxldGUgaW5zdGFuY2VvZiBFbGVtZW50KSB7XHJcbiAgICAgICAgY29uc3QgdGFzayA9XHJcbiAgICAgICAgICBidG5EZWxldGUucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0ZFwiKVsxXVxyXG4gICAgICAgICAgICAudGV4dENvbnRlbnQ7XHJcbiAgICAgICAgYnRuRGVsZXRlLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgdGFyZWZhc0F0dWFpcy5maWx0ZXIoKGN1cnJlbnRUYXNrLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgaWYgKGN1cnJlbnRUYXNrLmRlc2NyaWNhbyA9PT0gdGFzaykge1xyXG4gICAgICAgICAgICB0YXJlZmFzQXR1YWlzLnNwbGljZShpbmRleCwgaW5kZXggKyAxKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbi8qIEBhcnIgYXJyYXkgeW91IHdhbnQgdG8gbGlzdGVuIHRvXHJcbiAgIEBjYWxsYmFjayBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIG9uIGFueSBjaGFuZ2UgaW5zaWRlIGFycmF5XHJcbiAqL1xyXG5mdW5jdGlvbiBsaXN0ZW5DaGFuZ2VzaW5BcnJheShhcnI6IFRhcmVmYVtdLCBjYWxsYmFjazogRnVuY3Rpb24pIHtcclxuICAvLyBBZGQgbW9yZSBtZXRob2RzIGhlcmUgaWYgeW91IHdhbnQgdG8gbGlzdGVuIHRvIHRoZW1cclxuICBbXCJwdXNoXCJdLmZvckVhY2goKG0pID0+IHtcclxuICAgIGFyclttXSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyIHJlcyA9IEFycmF5LnByb3RvdHlwZVttXS5hcHBseShhcnIsIGFyZ3VtZW50cyk7IC8vIGNhbGwgbm9ybWFsIGJlaGF2aW91clxyXG4gICAgICBjYWxsYmFjay5hcHBseShhcnIsIGFyZ3VtZW50cyk7IC8vIGZpbmFsbHkgY2FsbCB0aGUgY2FsbGJhY2sgc3VwcGxpZWRcclxuICAgICAgcmV0dXJuIHJlcztcclxuICAgIH07XHJcbiAgfSk7XHJcbn1cclxuXHJcbmxpc3RlbkNoYW5nZXNpbkFycmF5KHRhcmVmYXNBdHVhaXMsICgpID0+IHtcclxuICBpZiAodGFyZWZhc0F0dWFpcy5sZW5ndGggPT09IDApIHJldHVybjtcclxuICBoYW5kbGVDaGVjaygpO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIHNob3dUYXNrcyh0YXJlZmFzOiBUYXJlZmFbXSkge1xyXG4gIHRhcmVmYXMuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgbGV0IHRhYmxlID0gPEhUTUxUYWJsZUVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW4gdGFibGUjdGFibGVcIik7XHJcbiAgICBsZXQgY2hlY2tib3ggPSA8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBjaGVja2JveC50eXBlID0gXCJjaGVja2JveFwiO1xyXG4gICAgbGV0IG5ld1JvdyA9IDxIVE1MVGFibGVSb3dFbGVtZW50PmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgIGxldCBuZXdDZWxsID0gPEhUTUxUYWJsZUNlbGxFbGVtZW50PmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgIGxldCBuZXdDZWxsUHJpb3JpdHkgPSA8SFRNTFRhYmxlQ2VsbEVsZW1lbnQ+ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgbGV0IG5ld0NlbGxUYXNrID0gbmV3Q2VsbC5jbG9uZU5vZGUoKTtcclxuICAgIGxldCBuZXdDZWxsSWNvbiA9IG5ld0NlbGwuY2xvbmVOb2RlKCk7XHJcbiAgICBsZXQgZGVsZXRlSWNvbiA9IDxIVE1MTElFbGVtZW50PmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xyXG4gICAgZGVsZXRlSWNvbi5jbGFzc05hbWUgPSBcIm1hdGVyaWFsLWljb25zXCI7XHJcblxyXG4gICAgZGVsZXRlSWNvbi50ZXh0Q29udGVudCA9IFwiZGVsZXRlXCI7XHJcbiAgICBuZXdDZWxsLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcclxuXHJcbiAgICBzd2l0Y2ggKHRhc2sucHJpb3JpZGFkZSkge1xyXG4gICAgICBjYXNlIDE6XHJcbiAgICAgICAgbmV3Q2VsbFByaW9yaXR5LnRleHRDb250ZW50ID0gXCJbYWx0YV1cIjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAyOlxyXG4gICAgICAgIG5ld0NlbGxQcmlvcml0eS50ZXh0Q29udGVudCA9IFwiW23DqWRpYV1cIjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAzOlxyXG4gICAgICAgIG5ld0NlbGxQcmlvcml0eS50ZXh0Q29udGVudCA9IFwiW2JhaXhhXVwiO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIG5ld1Jvdy5pbnNlcnRDZWxsKCkudGV4dENvbnRlbnQgPSB0YXJlZmFzQXR1YWlzW3RhcmVmYXNBdHVhaXMubGVuZ3RoIC0gMV0ucHJpb3JpZGFkZTtcclxuICAgIG5ld0NlbGxUYXNrLnRleHRDb250ZW50ID0gdGFzay5kZXNjcmljYW87XHJcblxyXG4gICAgbmV3Q2VsbEljb24uYXBwZW5kQ2hpbGQoZGVsZXRlSWNvbik7XHJcblxyXG4gICAgbmV3Um93LmFwcGVuZChuZXdDZWxsLCBuZXdDZWxsVGFzaywgbmV3Q2VsbFByaW9yaXR5LCBuZXdDZWxsSWNvbik7XHJcbiAgICB0YWJsZS5hcHBlbmRDaGlsZChuZXdSb3cpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlcIikuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCBidG5EZWxldGUgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xyXG4gICAgICAgIGlmIChidG5EZWxldGUgaW5zdGFuY2VvZiBFbGVtZW50KSB7XHJcbiAgICAgICAgICBjb25zdCB0YXNrID1cclxuICAgICAgICAgICAgYnRuRGVsZXRlLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwidGRcIilbMV1cclxuICAgICAgICAgICAgICAudGV4dENvbnRlbnQ7XHJcbiAgICAgICAgICBidG5EZWxldGUucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xyXG5cclxuICAgICAgICAgIHRhcmVmYXNBdHVhaXMuZmlsdGVyKChjdXJyZW50VGFzaywgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRUYXNrLmRlc2NyaWNhbyA9PT0gdGFzaykge1xyXG4gICAgICAgICAgICAgIHRhcmVmYXNBdHVhaXMuc3BsaWNlKGluZGV4LCBpbmRleCArIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUNoZWNrKCkge1xyXG4gIGRvY3VtZW50XHJcbiAgICAucXVlcnlTZWxlY3RvckFsbCgndGFibGUjdGFibGUgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJylcclxuICAgIC5mb3JFYWNoKChpbnB1dCkgPT4ge1xyXG4gICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICBjb25zdCBjaGVja2JveCA9IGUudGFyZ2V0O1xyXG4gICAgICAgIGlmIChjaGVja2JveCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpIHtcclxuICAgICAgICAgIGlmIChjaGVja2JveC5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhc2sgPVxyXG4gICAgICAgICAgICAgIGNoZWNrYm94LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwidGRcIilbMV1cclxuICAgICAgICAgICAgICAgIC50ZXh0Q29udGVudDtcclxuXHJcbiAgICAgICAgICAgIHRhcmVmYXNBdHVhaXMuZmlsdGVyKChjdXJyZW50VGFzaykgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChjdXJyZW50VGFzay5kZXNjcmljYW8gPT09IHRhc2spIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRUYXNrLmZpbmFsaXphZGEgPSB0cnVlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjaGVja2JveC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJkb25lXCIpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2hlY2tib3gucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlU3VjY2VzcyhtZXNzYWdlOiBzdHJpbmcsIGJnQ29sb3I6IHN0cmluZykge1xyXG4gIGxldCBlcnJvcnNDb250YWluZXIgPSA8SFRNTERpdkVsZW1lbnQ+ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBlcnJvcnNDb250YWluZXIuY2xhc3NOYW1lID0gXCJlcnJvcnNcIjtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5hcHBlbmRDaGlsZChlcnJvcnNDb250YWluZXIpO1xyXG4gIGVycm9yc0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImVycm9ycyBhY3RpdmF0ZWRcIik7XHJcblxyXG4gIGxldCBzbmFja0Vycm9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBzbmFja0Vycm9yLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic25hY2stY29udGFpbmVyXCIpO1xyXG4gIHNuYWNrRXJyb3Iuc3R5bGUuYmFja2dyb3VuZCA9IGJnQ29sb3I7XHJcblxyXG4gIGxldCBlcnJvckxhYmVsID0gPEhUTUxTcGFuRWxlbWVudD5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICBlcnJvckxhYmVsLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZXJyb3JcIik7XHJcbiAgZXJyb3JMYWJlbC5pbm5lckhUTUwgPSBtZXNzYWdlO1xyXG5cclxuICBzbmFja0Vycm9yLmFwcGVuZENoaWxkKGVycm9yTGFiZWwpO1xyXG4gIGVycm9yc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzbmFja0Vycm9yKTtcclxuXHJcbiAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICBlcnJvcnNDb250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJlcnJvcnMgZGVzYWN0aXZlXCIpO1xyXG4gIH0sIDMwMDApO1xyXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgZXJyb3JzQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZXJyb3JzXCIpO1xyXG4gICAgZXJyb3JzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc25hY2stY29udGFpbmVyXCIpLmZvckVhY2goKHZhbHVlKSA9PiB7XHJcbiAgICAgIGVycm9yc0NvbnRhaW5lci5yZW1vdmVDaGlsZCh2YWx1ZSk7XHJcbiAgICAgIGVycm9yc0NvbnRhaW5lci5yZW1vdmUoKTtcclxuICAgIH0pO1xyXG4gIH0sIDM1MDApO1xyXG59XHJcbiIsImV4cG9ydCBpbnRlcmZhY2UgVGFyZWZhIHtcclxuICBpZDogbnVtYmVyLFxyXG4gIGRlc2NyaWNhbzogc3RyaW5nLFxyXG4gIGRhdGFDcmlhZGE6IERhdGUsXHJcbiAgZmluYWxpemFkYTogYm9vbGVhbixcclxuICBwcmlvcmlkYWRlPzogUHJpb3JpZGFkZSxcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFByaW9yaWRhZGUge1xyXG4gIGJhaXhhID0gMyxcclxuICBtZWRpYSA9IDIsXHJcbiAgYWx0YSA9IDFcclxufVxyXG5cclxuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307Il0sInNvdXJjZVJvb3QiOiIifQ==