(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/carouselsplide"],{

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/***/ (function(module) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/***/ (function(module) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/***/ (function(module) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/***/ (function(module) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/***/ (function(module) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/***/ (function(module) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/***/ (function(module) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/***/ (function(module) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/***/ (function(module) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/***/ (function(module) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/***/ (function(module) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/***/ (function(module) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/***/ (function(module) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/***/ (function(module) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/***/ (function(module) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ (function(module) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "./node_modules/next/dist/client/image.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/client/image.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _slicedToArray = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");

var _toConsumableArray = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = Image;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/head */ "./node_modules/next/dist/next-server/lib/head.js"));

var _toBase = __webpack_require__(/*! ../next-server/lib/to-base-64 */ "./node_modules/next/dist/next-server/lib/to-base-64.js");

var _imageConfig = __webpack_require__(/*! ../next-server/server/image-config */ "./node_modules/next/dist/next-server/server/image-config.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

if (false) {}

var VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
var loaders = new Map([['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['default', defaultLoader]]);
var VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];

function isStaticRequire(src) {
  return src["default"] !== undefined;
}

function isStaticImageData(src) {
  return src.src !== undefined;
}

function isStaticImport(src) {
  return typeof src === 'object' && (isStaticRequire(src) || isStaticImageData(src));
}

var _ref2 = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","domains":[]} || _imageConfig.imageConfigDefault,
    configDeviceSizes = _ref2.deviceSizes,
    configImageSizes = _ref2.imageSizes,
    configLoader = _ref2.loader,
    configPath = _ref2.path,
    configDomains = _ref2.domains; // sort smallest to largest


var allSizes = [].concat(_toConsumableArray(configDeviceSizes), _toConsumableArray(configImageSizes));
configDeviceSizes.sort(function (a, b) {
  return a - b;
});
allSizes.sort(function (a, b) {
  return a - b;
});

function getWidths(width, layout, sizes) {
  if (sizes && (layout === 'fill' || layout === 'responsive')) {
    // Find all the "vw" percent sizes used in the sizes prop
    var viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
    var percentSizes = [];

    for (var match; match = viewportWidthRe.exec(sizes); match) {
      percentSizes.push(parseInt(match[2]));
    }

    if (percentSizes.length) {
      var smallestRatio = Math.min.apply(Math, percentSizes) * 0.01;
      return {
        widths: allSizes.filter(function (s) {
          return s >= configDeviceSizes[0] * smallestRatio;
        }),
        kind: 'w'
      };
    }

    return {
      widths: allSizes,
      kind: 'w'
    };
  }

  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  var widths = _toConsumableArray(new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(function (w) {
    return allSizes.find(function (p) {
      return p >= w;
    }) || allSizes[allSizes.length - 1];
  })));

  return {
    widths: widths,
    kind: 'x'
  };
}

function generateImgAttrs(_ref3) {
  var src = _ref3.src,
      unoptimized = _ref3.unoptimized,
      layout = _ref3.layout,
      width = _ref3.width,
      quality = _ref3.quality,
      sizes = _ref3.sizes,
      loader = _ref3.loader;

  if (unoptimized) {
    return {
      src: src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  var _getWidths = getWidths(width, layout, sizes),
      widths = _getWidths.widths,
      kind = _getWidths.kind;

  var last = widths.length - 1;
  return {
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map(function (w, i) {
      return "".concat(loader({
        src: src,
        quality: quality,
        width: w
      }), " ").concat(kind === 'w' ? w : i + 1).concat(kind);
    }).join(', '),
    // It's intended to keep `src` the last attribute because React updates
    // attributes in order. If we keep `src` the first one, Safari will
    // immediately start to fetch `src`, before `sizes` and `srcSet` are even
    // updated by React. That causes multiple unnecessary requests if `srcSet`
    // and `sizes` are defined.
    // This bug cannot be reproduced in Chrome or Firefox.
    src: loader({
      src: src,
      quality: quality,
      width: widths[last]
    })
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  var load = loaders.get(configLoader);

  if (load) {
    return load((0, _extends2["default"])({
      root: configPath
    }, loaderProps));
  }

  throw new Error("Unknown \"loader\" found in \"next.config.js\". Expected: ".concat(_imageConfig.VALID_LOADERS.join(', '), ". Received: ").concat(configLoader));
} // See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.


function removePlaceholder(img, placeholder) {
  if (placeholder === 'blur' && img) {
    var handleLoad = function handleLoad() {
      if (!img.src.startsWith('data:')) {
        var p = 'decode' in img ? img.decode() : Promise.resolve();
        p["catch"](function () {}).then(function () {
          img.style.filter = 'none';
          img.style.backgroundSize = 'none';
          img.style.backgroundImage = 'none';
        });
      }
    };

    if (img.complete) {
      // If the real image fails to load, this will still remove the placeholder.
      // This is the desired behavior for now, and will be revisited when error
      // handling is worked on for the image component itself.
      handleLoad();
    } else {
      img.onload = handleLoad;
    }
  }
}

function Image(_ref) {
  var src = _ref.src,
      sizes = _ref.sizes,
      _ref$unoptimized = _ref.unoptimized,
      unoptimized = _ref$unoptimized === void 0 ? false : _ref$unoptimized,
      _ref$priority = _ref.priority,
      priority = _ref$priority === void 0 ? false : _ref$priority,
      loading = _ref.loading,
      className = _ref.className,
      quality = _ref.quality,
      width = _ref.width,
      height = _ref.height,
      objectFit = _ref.objectFit,
      objectPosition = _ref.objectPosition,
      _ref$loader = _ref.loader,
      loader = _ref$loader === void 0 ? defaultImageLoader : _ref$loader,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === void 0 ? 'empty' : _ref$placeholder,
      blurDataURL = _ref.blurDataURL,
      all = (0, _objectWithoutPropertiesLoose2["default"])(_ref, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "objectFit", "objectPosition", "loader", "placeholder", "blurDataURL"]);
  var rest = all;
  var layout = sizes ? 'responsive' : 'intrinsic';

  if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  var staticSrc = '';

  if (isStaticImport(src)) {
    var staticImageData = isStaticRequire(src) ? src["default"] : src;

    if (!staticImageData.src) {
      throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(staticImageData)));
    }

    blurDataURL = blurDataURL || staticImageData.blurDataURL;
    staticSrc = staticImageData.src;

    if (!layout || layout !== 'fill') {
      height = height || staticImageData.height;
      width = width || staticImageData.width;

      if (!staticImageData.height || !staticImageData.width) {
        throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(staticImageData)));
      }
    }
  }

  src = typeof src === 'string' ? src : staticSrc;
  var widthInt = getInt(width);
  var heightInt = getInt(height);
  var qualityInt = getInt(quality);

  if (true) {
    if (!src) {
      throw new Error("Image is missing required \"src\" property. Make sure you pass \"src\" in props to the `next/image` component. Received: ".concat(JSON.stringify({
        width: width,
        height: height,
        quality: quality
      })));
    }

    if (!VALID_LAYOUT_VALUES.includes(layout)) {
      throw new Error("Image with src \"".concat(src, "\" has invalid \"layout\" property. Provided \"").concat(layout, "\" should be one of ").concat(VALID_LAYOUT_VALUES.map(String).join(','), "."));
    }

    if (typeof widthInt !== 'undefined' && isNaN(widthInt) || typeof heightInt !== 'undefined' && isNaN(heightInt)) {
      throw new Error("Image with src \"".concat(src, "\" has invalid \"width\" or \"height\" property. These should be numeric values."));
    }

    if (!VALID_LOADING_VALUES.includes(loading)) {
      throw new Error("Image with src \"".concat(src, "\" has invalid \"loading\" property. Provided \"").concat(loading, "\" should be one of ").concat(VALID_LOADING_VALUES.map(String).join(','), "."));
    }

    if (priority && loading === 'lazy') {
      throw new Error("Image with src \"".concat(src, "\" has both \"priority\" and \"loading='lazy'\" properties. Only one should be used."));
    }

    if (placeholder === 'blur') {
      if (layout !== 'fill' && (widthInt || 0) * (heightInt || 0) < 1600) {
        console.warn("Image with src \"".concat(src, "\" is smaller than 40x40. Consider removing the \"placeholder='blur'\" property to improve performance."));
      }

      if (!blurDataURL) {
        var VALID_BLUR_EXT = ['jpeg', 'png', 'webp']; // should match next-image-loader

        throw new Error("Image with src \"".concat(src, "\" has \"placeholder='blur'\" property but is missing the \"blurDataURL\" property.\n          Possible solutions:\n            - Add a \"blurDataURL\" property, the contents should be a small Data URL to represent the image\n            - Change the \"src\" property to a static import with one of the supported file types: ").concat(VALID_BLUR_EXT.join(','), "\n            - Remove the \"placeholder\" property, effectively no blur effect\n          Read more: https://nextjs.org/docs/messages/placeholder-blur-data-url"));
      }
    }
  }

  var isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src && src.startsWith('data:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  var _ref4 = (0, _useIntersection.useIntersection)({
    rootMargin: '200px',
    disabled: !isLazy
  }),
      _ref5 = _slicedToArray(_ref4, 2),
      setRef = _ref5[0],
      isIntersected = _ref5[1];

  var isVisible = !isLazy || isIntersected;
  var wrapperStyle;
  var sizerStyle;
  var sizerSvg;
  var imgStyle = (0, _extends2["default"])({
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit: objectFit,
    objectPosition: objectPosition
  }, placeholder === 'blur' ? {
    filter: 'blur(20px)',
    backgroundSize: 'cover',
    backgroundImage: "url(\"".concat(blurDataURL, "\")")
  } : undefined);

  if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined' && layout !== 'fill') {
    // <Image src="i.png" width="100" height="100" />
    var quotient = heightInt / widthInt;
    var paddingTop = isNaN(quotient) ? '100%' : "".concat(quotient * 100, "%");

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop: paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = "<svg width=\"".concat(widthInt, "\" height=\"").concat(heightInt, "\" xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\"/>");
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else if (typeof widthInt === 'undefined' && typeof heightInt === 'undefined' && layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else {
    // <Image src="i.png" />
    if (true) {
      throw new Error("Image with src \"".concat(src, "\" must use \"width\" and \"height\" properties or \"layout='fill'\" property."));
    }
  }

  var imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src: src,
      unoptimized: unoptimized,
      layout: layout,
      width: widthInt,
      quality: qualityInt,
      sizes: sizes,
      loader: loader
    });
  }

  return /*#__PURE__*/_react["default"].createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react["default"].createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react["default"].createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block',
      margin: 0,
      border: 'none',
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    role: "presentation",
    src: "data:image/svg+xml;base64,".concat((0, _toBase.toBase64)(sizerSvg))
  }) : null) : null, !isVisible && /*#__PURE__*/_react["default"].createElement("noscript", null, /*#__PURE__*/_react["default"].createElement("img", Object.assign({}, rest, generateImgAttrs({
    src: src,
    unoptimized: unoptimized,
    layout: layout,
    width: widthInt,
    quality: qualityInt,
    sizes: sizes,
    loader: loader
  }), {
    decoding: "async",
    style: imgStyle,
    className: className
  }))), /*#__PURE__*/_react["default"].createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    className: className,
    ref: function ref(element) {
      setRef(element);
      removePlaceholder(element, placeholder);
    },
    style: imgStyle
  })), priority ?
  /*#__PURE__*/
  // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
  _react["default"].createElement(_head["default"], null, /*#__PURE__*/_react["default"].createElement("link", {
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src // @ts-ignore: imagesrcset is not yet in the link element type
    ,
    imagesrcset: imgAttributes.srcSet // @ts-ignore: imagesizes is not yet in the link element type
    ,
    imagesizes: imgAttributes.sizes
  })) : null);
} //BUILT IN LOADERS


_c = Image;

function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader(_ref6) {
  var root = _ref6.root,
      src = _ref6.src,
      width = _ref6.width,
      quality = _ref6.quality;
  // Demo: https://static.imgix.net/daisy.png?format=auto&fit=max&w=300
  var params = ['auto=format', 'fit=max', 'w=' + width];
  var paramsString = '';

  if (quality) {
    params.push('q=' + quality);
  }

  if (params.length) {
    paramsString = '?' + params.join('&');
  }

  return "".concat(root).concat(normalizeSrc(src)).concat(paramsString);
}

function akamaiLoader(_ref7) {
  var root = _ref7.root,
      src = _ref7.src,
      width = _ref7.width;
  return "".concat(root).concat(normalizeSrc(src), "?imwidth=").concat(width);
}

function cloudinaryLoader(_ref8) {
  var root = _ref8.root,
      src = _ref8.src,
      width = _ref8.width,
      quality = _ref8.quality;
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  var params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  var paramsString = params.join(',') + '/';
  return "".concat(root).concat(paramsString).concat(normalizeSrc(src));
}

function defaultLoader(_ref9) {
  var root = _ref9.root,
      src = _ref9.src,
      width = _ref9.width,
      quality = _ref9.quality;

  if (true) {
    var missingValues = []; // these should always be provided but make sure they are

    if (!src) missingValues.push('src');
    if (!width) missingValues.push('width');

    if (missingValues.length > 0) {
      throw new Error("Next Image Optimization requires ".concat(missingValues.join(', '), " to be provided. Make sure you pass them as props to the `next/image` component. Received: ").concat(JSON.stringify({
        src: src,
        width: width,
        quality: quality
      })));
    }

    if (src.startsWith('//')) {
      throw new Error("Failed to parse src \"".concat(src, "\" on `next/image`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)"));
    }

    if (!src.startsWith('/') && configDomains) {
      var parsedSrc;

      try {
        parsedSrc = new URL(src);
      } catch (err) {
        console.error(err);
        throw new Error("Failed to parse src \"".concat(src, "\" on `next/image`, if using relative image it must start with a leading slash \"/\" or be an absolute URL (http:// or https://)"));
      }

      if (!configDomains.includes(parsedSrc.hostname)) {
        throw new Error("Invalid src prop (".concat(src, ") on `next/image`, hostname \"").concat(parsedSrc.hostname, "\" is not configured under images in your `next.config.js`\n") + "See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host");
      }
    }
  }

  return "".concat(root, "?url=").concat(encodeURIComponent(src), "&w=").concat(width, "&q=").concat(quality || 75);
}

var _c;

$RefreshReg$(_c, "Image");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

var requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  var start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function timeRemaining() {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

var cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _slicedToArray = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");

exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

var hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection(_ref) {
  var rootMargin = _ref.rootMargin,
      disabled = _ref.disabled;
  var isDisabled = disabled || !hasIntersectionObserver;
  var unobserve = (0, _react.useRef)();

  var _ref2 = (0, _react.useState)(false),
      _ref3 = _slicedToArray(_ref2, 2),
      visible = _ref3[0],
      setVisible = _ref3[1];

  var setRef = (0, _react.useCallback)(function (el) {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, function (isVisible) {
        return isVisible && setVisible(isVisible);
      }, {
        rootMargin: rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(function () {
    if (!hasIntersectionObserver) {
      if (!visible) {
        var idleCallback = (0, _requestIdleCallback.requestIdleCallback)(function () {
          return setVisible(true);
        });
        return function () {
          return (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
        };
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  var _createObserver = createObserver(options),
      id = _createObserver.id,
      observer = _createObserver.observer,
      elements = _createObserver.elements;

  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements["delete"](element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers["delete"](id);
    }
  };
}

var observers = new Map();

function createObserver(options) {
  var id = options.rootMargin || '';
  var instance = observers.get(id);

  if (instance) {
    return instance;
  }

  var elements = new Map();
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      var callback = elements.get(entry.target);
      var isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id: id,
    observer: observer,
    elements: elements
  });
  return instance;
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp-context.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp-context.js ***!
  \***************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


exports.__esModule = true;
exports.AmpStateContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var AmpStateContext = /*#__PURE__*/_react["default"].createContext({});

exports.AmpStateContext = AmpStateContext;

if (true) {
  AmpStateContext.displayName = 'AmpStateContext';
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp.js ***!
  \*******************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _s = $RefreshSig$();

exports.__esModule = true;
exports.isInAmpMode = isInAmpMode;
exports.useAmp = useAmp;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _ampContext = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function isInAmpMode() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$ampFirst = _ref.ampFirst,
      ampFirst = _ref$ampFirst === void 0 ? false : _ref$ampFirst,
      _ref$hybrid = _ref.hybrid,
      hybrid = _ref$hybrid === void 0 ? false : _ref$hybrid,
      _ref$hasQuery = _ref.hasQuery,
      hasQuery = _ref$hasQuery === void 0 ? false : _ref$hasQuery;

  return ampFirst || hybrid && hasQuery;
}

function useAmp() {
  _s();

  // Don't assign the context value to a variable to save bytes
  return isInAmpMode(_react["default"].useContext(_ampContext.AmpStateContext));
}

_s(useAmp, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head-manager-context.js":
/*!************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head-manager-context.js ***!
  \************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


exports.__esModule = true;
exports.HeadManagerContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var HeadManagerContext = /*#__PURE__*/_react["default"].createContext({});

exports.HeadManagerContext = HeadManagerContext;

if (true) {
  HeadManagerContext.displayName = 'HeadManagerContext';
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head.js ***!
  \********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _defineProperty = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

exports.__esModule = true;
exports.defaultHead = defaultHead;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _sideEffect = _interopRequireDefault(__webpack_require__(/*! ./side-effect */ "./node_modules/next/dist/next-server/lib/side-effect.js"));

var _ampContext = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

var _headManagerContext = __webpack_require__(/*! ./head-manager-context */ "./node_modules/next/dist/next-server/lib/head-manager-context.js");

var _amp = __webpack_require__(/*! ./amp */ "./node_modules/next/dist/next-server/lib/amp.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function defaultHead() {
  var inAmpMode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var head = [/*#__PURE__*/_react["default"].createElement("meta", {
    charSet: "utf-8"
  })];

  if (!inAmpMode) {
    head.push( /*#__PURE__*/_react["default"].createElement("meta", {
      name: "viewport",
      content: "width=device-width"
    }));
  }

  return head;
}

function onlyReactElement(list, child) {
  // React children can be "string" or "number" in this case we ignore them for backwards compat
  if (typeof child === 'string' || typeof child === 'number') {
    return list;
  } // Adds support for React.Fragment


  if (child.type === _react["default"].Fragment) {
    return list.concat(_react["default"].Children.toArray(child.props.children).reduce(function (fragmentList, fragmentChild) {
      if (typeof fragmentChild === 'string' || typeof fragmentChild === 'number') {
        return fragmentList;
      }

      return fragmentList.concat(fragmentChild);
    }, []));
  }

  return list.concat(child);
}

var METATYPES = ['name', 'httpEquiv', 'charSet', 'itemProp'];
/*
returns a function for filtering head child elements
which shouldn't be duplicated, like <title/>
Also adds support for deduplicated `key` properties
*/

function unique() {
  var keys = new Set();
  var tags = new Set();
  var metaTypes = new Set();
  var metaCategories = {};
  return function (h) {
    var isUnique = true;
    var hasKey = false;

    if (h.key && typeof h.key !== 'number' && h.key.indexOf('$') > 0) {
      hasKey = true;
      var key = h.key.slice(h.key.indexOf('$') + 1);

      if (keys.has(key)) {
        isUnique = false;
      } else {
        keys.add(key);
      }
    } // eslint-disable-next-line default-case


    switch (h.type) {
      case 'title':
      case 'base':
        if (tags.has(h.type)) {
          isUnique = false;
        } else {
          tags.add(h.type);
        }

        break;

      case 'meta':
        for (var i = 0, len = METATYPES.length; i < len; i++) {
          var metatype = METATYPES[i];
          if (!h.props.hasOwnProperty(metatype)) continue;

          if (metatype === 'charSet') {
            if (metaTypes.has(metatype)) {
              isUnique = false;
            } else {
              metaTypes.add(metatype);
            }
          } else {
            var category = h.props[metatype];
            var categories = metaCategories[metatype] || new Set();

            if ((metatype !== 'name' || !hasKey) && categories.has(category)) {
              isUnique = false;
            } else {
              categories.add(category);
              metaCategories[metatype] = categories;
            }
          }
        }

        break;
    }

    return isUnique;
  };
}
/**
*
* @param headElements List of multiple <Head> instances
*/


function reduceComponents(headElements, props) {
  return headElements.reduce(function (list, headElement) {
    var headElementChildren = _react["default"].Children.toArray(headElement.props.children);

    return list.concat(headElementChildren);
  }, []).reduce(onlyReactElement, []).reverse().concat(defaultHead(props.inAmpMode)).filter(unique()).reverse().map(function (c, i) {
    var key = c.key || i;

    if (false) { var newProps; }

    return /*#__PURE__*/_react["default"].cloneElement(c, {
      key: key
    });
  });
}
/**
* This component injects elements to `<head>` of your page.
* To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
*/


function Head(_ref) {
  var children = _ref.children;
  var ampState = (0, _react.useContext)(_ampContext.AmpStateContext);
  var headManager = (0, _react.useContext)(_headManagerContext.HeadManagerContext);
  return /*#__PURE__*/_react["default"].createElement(_sideEffect["default"], {
    reduceComponentsToState: reduceComponents,
    headManager: headManager,
    inAmpMode: (0, _amp.isInAmpMode)(ampState)
  }, children);
}

_c = Head;
var _default = Head;
exports.default = _default;

var _c;

$RefreshReg$(_c, "Head");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/side-effect.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/side-effect.js ***!
  \***************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _toConsumableArray = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");

var _classCallCheck = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var _assertThisInitialized = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

var _inherits = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");

var _possibleConstructorReturn = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

exports.__esModule = true;
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var isServer = false;

var _default = /*#__PURE__*/function (_react$Component) {
  _inherits(_default, _react$Component);

  var _super = _createSuper(_default);

  function _default(props) {
    var _this;

    _classCallCheck(this, _default);

    _this = _super.call(this, props);
    _this._hasHeadManager = void 0;

    _this.emitChange = function () {
      if (_this._hasHeadManager) {
        _this.props.headManager.updateHead(_this.props.reduceComponentsToState(_toConsumableArray(_this.props.headManager.mountedInstances), _this.props));
      }
    };

    _this._hasHeadManager = _this.props.headManager && _this.props.headManager.mountedInstances;

    if (isServer && _this._hasHeadManager) {
      _this.props.headManager.mountedInstances.add(_assertThisInitialized(_this));

      _this.emitChange();
    }

    return _this;
  }

  _createClass(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this._hasHeadManager) {
        this.props.headManager.mountedInstances.add(this);
      }

      this.emitChange();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.emitChange();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this._hasHeadManager) {
        this.props.headManager.mountedInstances["delete"](this);
      }

      this.emitChange();
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return _default;
}(_react.Component);

exports.default = _default;

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/to-base-64.js":
/*!**************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/to-base-64.js ***!
  \**************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


exports.__esModule = true;
exports.toBase64 = toBase64;
/**
* Isomorphic base64 that works on the server and client
*/

function toBase64(str) {
  if (false) {} else {
    return window.btoa(str);
  }
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./pages/carouselsplide/index.js":
/*!***************************************!*\
  !*** ./pages/carouselsplide/index.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var splide_nextjs_react_splide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! splide-nextjs/react-splide */ "./node_modules/splide-nextjs/react-splide/dist/js/index.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_card_example_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/card_example.png */ "./pages/assets/card_example.png");
/* harmony import */ var _splidejs_splide_dist_css_themes_splide_default_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @splidejs/splide/dist/css/themes/splide-default.min.css */ "./node_modules/@splidejs/splide/dist/css/themes/splide-default.min.css");
/* harmony import */ var _splidejs_splide_dist_css_themes_splide_default_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_splidejs_splide_dist_css_themes_splide_default_min_css__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Vaypol\\Documents\\BIKINI\\bikini\\pages\\carouselsplide\\index.js",
    _this = undefined;






var CarouselSplide = function CarouselSplide() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(splide_nextjs_react_splide__WEBPACK_IMPORTED_MODULE_1__.Splide, {
    options: {
      rewind: true,
      perPage: 3,
      perMove: 1,
      autoplay: true,
      interval: 3000,
      gap: 20,
      lazyLoad: 'nearby',
      padding: {
        right: 10,
        left: 10
      }
    },
    onMoved: function onMoved(splide, newIndex) {
      console.log("moved", newIndex);
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(splide_nextjs_react_splide__WEBPACK_IMPORTED_MODULE_1__.SplideSlide, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
        src: _assets_card_example_png__WEBPACK_IMPORTED_MODULE_3__.default,
        alt: "Picture of the author"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(splide_nextjs_react_splide__WEBPACK_IMPORTED_MODULE_1__.SplideSlide, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
        src: _assets_card_example_png__WEBPACK_IMPORTED_MODULE_3__.default,
        alt: "Picture of the author"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(splide_nextjs_react_splide__WEBPACK_IMPORTED_MODULE_1__.SplideSlide, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
        src: _assets_card_example_png__WEBPACK_IMPORTED_MODULE_3__.default,
        alt: "Picture of the author"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(splide_nextjs_react_splide__WEBPACK_IMPORTED_MODULE_1__.SplideSlide, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
        src: _assets_card_example_png__WEBPACK_IMPORTED_MODULE_3__.default,
        alt: "Picture of the author"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(splide_nextjs_react_splide__WEBPACK_IMPORTED_MODULE_1__.SplideSlide, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
        src: _assets_card_example_png__WEBPACK_IMPORTED_MODULE_3__.default,
        alt: "Picture of the author"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(splide_nextjs_react_splide__WEBPACK_IMPORTED_MODULE_1__.SplideSlide, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
        src: _assets_card_example_png__WEBPACK_IMPORTED_MODULE_3__.default,
        alt: "Picture of the author"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, _this);
};

_c = CarouselSplide;
/* harmony default export */ __webpack_exports__["default"] = (CarouselSplide);

var _c;

$RefreshReg$(_c, "CarouselSplide");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/object-assign.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/object-assign.js ***!
  \*****************************************************************/
/***/ (function(module) {

"use strict";
var assign=Object.assign.bind(Object);module.exports=assign;module.exports.default=module.exports;
//# sourceMappingURL=object-assign.js.map

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fcarouselsplide&absolutePagePath=C%3A%5CUsers%5CVaypol%5CDocuments%5CBIKINI%5Cbikini%5Cpages%5Ccarouselsplide%5Cindex.js!":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fcarouselsplide&absolutePagePath=C%3A%5CUsers%5CVaypol%5CDocuments%5CBIKINI%5Cbikini%5Cpages%5Ccarouselsplide%5Cindex.js! ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/carouselsplide",
      function () {
        return __webpack_require__(/*! ./pages/carouselsplide/index.js */ "./pages/carouselsplide/index.js");
      }
    ]);
  

/***/ }),

/***/ "./pages/assets/card_example.png":
/*!***************************************!*\
  !*** ./pages/assets/card_example.png ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/pages/assets/card_example.eafb6da23b90dab20860f0448609a227.png","height":518,"width":319,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAYAAAAx8TU7AAAAlElEQVR42iWNMQrCQBRE91zaexXtvIlg4x2sxEILEyRYCdZhWzVBN1aJCT8bNzsjmzwYGKaYpwAwRGtNEWFAcQRZlsF7P3RlTMH9dof4GPFxf9JaS5XnL65XG0wnM84XS6appnLOsawqvI3ht64JYPx0tkNdfOCkJcMo9Gz6DrZr2XrHPtjlHLE8HSC3K5ok5u+S4A/zoZHgWNUqDwAAAABJRU5ErkJggg=="});

/***/ }),

/***/ "./node_modules/@splidejs/splide/dist/css/themes/splide-default.min.css":
/*!******************************************************************************!*\
  !*** ./node_modules/@splidejs/splide/dist/css/themes/splide-default.min.css ***!
  \******************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../../../../../next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../../../../next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!../../../../../next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./splide-default.min.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/@splidejs/splide/dist/css/themes/splide-default.min.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !!../../../../../next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!../../../../../next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./splide-default.min.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/@splidejs/splide/dist/css/themes/splide-default.min.css",
      function () {
        content = __webpack_require__(/*! !!../../../../../next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!../../../../../next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./splide-default.min.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/@splidejs/splide/dist/css/themes/splide-default.min.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js ***!
  \************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
const isOldIE=function isOldIE(){let memo;return function memorize(){if(typeof memo==='undefined'){// Test for IE <= 9 as proposed by Browserhacks
// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
// Tests for existence of standard globals is to allow style-loader
// to operate correctly into non-standard environments
// @see https://github.com/webpack-contrib/style-loader/issues/177
memo=Boolean(window&&document&&document.all&&!window.atob);}return memo;};}();const getTarget=function getTarget(){const memo={};return function memorize(target){if(typeof memo[target]==='undefined'){let styleTarget=document.querySelector(target);// Special case to return head of iframe instead of iframe itself
if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement){try{// This will throw an exception if access to iframe is blocked
// due to cross-origin restrictions
styleTarget=styleTarget.contentDocument.head;}catch(e){// istanbul ignore next
styleTarget=null;}}memo[target]=styleTarget;}return memo[target];};}();const stylesInDom=[];function getIndexByIdentifier(identifier){let result=-1;for(let i=0;i<stylesInDom.length;i++){if(stylesInDom[i].identifier===identifier){result=i;break;}}return result;}function modulesToDom(list,options){const idCountMap={};const identifiers=[];for(let i=0;i<list.length;i++){const item=list[i];const id=options.base?item[0]+options.base:item[0];const count=idCountMap[id]||0;const identifier=id+' '+count.toString();idCountMap[id]=count+1;const index=getIndexByIdentifier(identifier);const obj={css:item[1],media:item[2],sourceMap:item[3]};if(index!==-1){stylesInDom[index].references++;stylesInDom[index].updater(obj);}else{stylesInDom.push({identifier:identifier,updater:addStyle(obj,options),references:1});}identifiers.push(identifier);}return identifiers;}function insertStyleElement(options){const style=document.createElement('style');const attributes=options.attributes||{};if(typeof attributes.nonce==='undefined'){const nonce=// eslint-disable-next-line no-undef
 true?__webpack_require__.nc:0;if(nonce){attributes.nonce=nonce;}}Object.keys(attributes).forEach(function(key){style.setAttribute(key,attributes[key]);});if(typeof options.insert==='function'){options.insert(style);}else{const target=getTarget(options.insert||'head');if(!target){throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");}target.appendChild(style);}return style;}function removeStyleElement(style){// istanbul ignore if
if(style.parentNode===null){return false;}style.parentNode.removeChild(style);}/* istanbul ignore next  */const replaceText=function replaceText(){const textStore=[];return function replace(index,replacement){textStore[index]=replacement;return textStore.filter(Boolean).join('\n');};}();function applyToSingletonTag(style,index,remove,obj){const css=remove?'':obj.media?'@media '+obj.media+' {'+obj.css+'}':obj.css;// For old IE
/* istanbul ignore if  */if(style.styleSheet){style.styleSheet.cssText=replaceText(index,css);}else{const cssNode=document.createTextNode(css);const childNodes=style.childNodes;if(childNodes[index]){style.removeChild(childNodes[index]);}if(childNodes.length){style.insertBefore(cssNode,childNodes[index]);}else{style.appendChild(cssNode);}}}function applyToTag(style,options,obj){let css=obj.css;const media=obj.media;const sourceMap=obj.sourceMap;if(media){style.setAttribute('media',media);}else{style.removeAttribute('media');}if(sourceMap&&typeof btoa!=='undefined'){css+='\n/*# sourceMappingURL=data:application/json;base64,'+btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))+' */';}// For old IE
/* istanbul ignore if  */if(style.styleSheet){style.styleSheet.cssText=css;}else{while(style.firstChild){style.removeChild(style.firstChild);}style.appendChild(document.createTextNode(css));}}let singleton=null;let singletonCounter=0;function addStyle(obj,options){let style;let update;let remove;if(options.singleton){const styleIndex=singletonCounter++;style=singleton||(singleton=insertStyleElement(options));update=applyToSingletonTag.bind(null,style,styleIndex,false);remove=applyToSingletonTag.bind(null,style,styleIndex,true);}else{style=insertStyleElement(options);update=applyToTag.bind(null,style,options);remove=function(){removeStyleElement(style);};}update(obj);return function updateStyle(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap){return;}update(obj=newObj);}else{remove();}};}module.exports=function(list,options){options=options||{};// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
if(!options.singleton&&typeof options.singleton!=='boolean'){options.singleton=isOldIE();}list=list||[];let lastIdentifiers=modulesToDom(list,options);return function update(newList){newList=newList||[];if(Object.prototype.toString.call(newList)!=='[object Array]'){return;}for(let i=0;i<lastIdentifiers.length;i++){const identifier=lastIdentifiers[i];const index=getIndexByIdentifier(identifier);stylesInDom[index].references--;}const newLastIdentifiers=modulesToDom(newList,options);for(let i=0;i<lastIdentifiers.length;i++){const identifier=lastIdentifiers[i];const index=getIndexByIdentifier(identifier);if(stylesInDom[index].references===0){stylesInDom[index].updater();stylesInDom.splice(index,1);}}lastIdentifiers=newLastIdentifiers;};};
//# sourceMappingURL=injectStylesIntoStyleTag.js.map

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/api.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/api.js ***!
  \***********************************************************/
/***/ (function(module) {

var __dirname = "/";
module.exports=function(){"use strict";var n={762:function(n){n.exports=function(n){var t=[];t.toString=function toString(){return this.map(function(t){var r=cssWithMappingToString(t,n);if(t[2]){return"@media ".concat(t[2]," {").concat(r,"}")}return r}).join("")};t.i=function(n,r,o){if(typeof n==="string"){n=[[null,n,""]]}var e={};if(o){for(var a=0;a<this.length;a++){var c=this[a][0];if(c!=null){e[c]=true}}}for(var i=0;i<n.length;i++){var u=[].concat(n[i]);if(o&&e[u[0]]){continue}if(r){if(!u[2]){u[2]=r}else{u[2]="".concat(r," and ").concat(u[2])}}t.push(u)}};return t};function cssWithMappingToString(n,t){var r=n[1]||"";var o=n[3];if(!o){return r}if(t&&typeof btoa==="function"){var e=toComment(o);var a=o.sources.map(function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")});return[r].concat(a).concat([e]).join("\n")}return[r].join("\n")}function toComment(n){var t=btoa(unescape(encodeURIComponent(JSON.stringify(n))));var r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t);return"/*# ".concat(r," */")}}};var t={};function __nccwpck_require__(r){if(t[r]){return t[r].exports}var o=t[r]={exports:{}};var e=true;try{n[r](o,o.exports,__nccwpck_require__);e=false}finally{if(e)delete t[r]}return o.exports}__nccwpck_require__.ab=__dirname+"/";return __nccwpck_require__(762)}();

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/@splidejs/splide/dist/css/themes/splide-default.min.css":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/@splidejs/splide/dist/css/themes/splide-default.min.css ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@-webkit-keyframes splide-loading{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-moz-keyframes splide-loading{0%{-moz-transform:rotate(0);transform:rotate(0)}to{-moz-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes splide-loading{0%{-webkit-transform:rotate(0);-moz-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);-moz-transform:rotate(1turn);transform:rotate(1turn)}}.splide__container{position:relative;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.splide__list{margin:0!important;padding:0!important;width:-moz-max-content;width:max-content;will-change:transform}.splide.is-active .splide__list{display:-moz-box;display:flex}.splide__pagination{display:-moz-inline-box;display:inline-flex;-moz-box-align:center;align-items:center;width:95%;flex-wrap:wrap;-moz-box-pack:center;justify-content:center;margin:0}.splide__pagination li{list-style-type:none;display:inline-block;line-height:1;margin:0}.splide{visibility:hidden}.splide,.splide__slide{position:relative;outline:none}.splide__slide{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;list-style-type:none!important;margin:0;flex-shrink:0}.splide__slide img{vertical-align:bottom}.splide__slider{position:relative}.splide__spinner{position:absolute;top:0;left:0;right:0;bottom:0;margin:auto;display:inline-block;width:20px;height:20px;border-radius:50%;border:2px solid #999;border-left-color:transparent;-webkit-animation:splide-loading 1s linear infinite;-moz-animation:splide-loading 1s linear infinite;animation:splide-loading 1s linear infinite}.splide__track{position:relative;z-index:0;overflow:hidden}.splide--draggable>.splide__track>.splide__list>.splide__slide{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.splide--fade>.splide__track>.splide__list{display:block}.splide--fade>.splide__track>.splide__list>.splide__slide{position:absolute;top:0;left:0;z-index:0;opacity:0}.splide--fade>.splide__track>.splide__list>.splide__slide.is-active{position:relative;z-index:1;opacity:1}.splide--rtl{direction:rtl}.splide--ttb>.splide__track>.splide__list{display:block}.splide--ttb>.splide__pagination{width:auto}.splide__arrow{position:absolute;z-index:1;top:50%;-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);transform:translateY(-50%);width:2em;height:2em;border-radius:50%;display:-moz-box;display:flex;-moz-box-align:center;align-items:center;-moz-box-pack:center;justify-content:center;border:none;padding:0;opacity:.7;background:#ccc}.splide__arrow svg{width:1.2em;height:1.2em}.splide__arrow:hover{cursor:pointer;opacity:.9}.splide__arrow:focus{outline:none}.splide__arrow--prev{left:1em}.splide__arrow--prev svg{-webkit-transform:scaleX(-1);-moz-transform:scaleX(-1);transform:scaleX(-1)}.splide__arrow--next{right:1em}.splide__pagination{position:absolute;z-index:1;bottom:.5em;left:50%;-webkit-transform:translateX(-50%);-moz-transform:translateX(-50%);transform:translateX(-50%);padding:0}.splide__pagination__page{display:inline-block;width:8px;height:8px;background:#ccc;border-radius:50%;margin:3px;padding:0;-webkit-transition:-webkit-transform .2s linear;transition:-webkit-transform .2s linear;-moz-transition:transform .2s linear, -moz-transform .2s linear;transition:transform .2s linear;transition:transform .2s linear, -webkit-transform .2s linear, -moz-transform .2s linear;border:none;opacity:.7}.splide__pagination__page.is-active{-webkit-transform:scale(1.4);-moz-transform:scale(1.4);transform:scale(1.4);background:#fff}.splide__pagination__page:hover{cursor:pointer;opacity:.9}.splide__pagination__page:focus{outline:none}.splide__progress__bar{width:0;height:3px;background:#ccc}.splide--nav>.splide__track>.splide__list>.splide__slide{border:3px solid transparent}.splide--nav>.splide__track>.splide__list>.splide__slide.is-active{border-color:#000}.splide--nav>.splide__track>.splide__list>.splide__slide:focus{outline:none}.splide--rtl>.splide__arrows .splide__arrow--prev,.splide--rtl>.splide__track>.splide__arrows .splide__arrow--prev{right:1em;left:auto}.splide--rtl>.splide__arrows .splide__arrow--prev svg,.splide--rtl>.splide__track>.splide__arrows .splide__arrow--prev svg{-webkit-transform:scaleX(1);-moz-transform:scaleX(1);transform:scaleX(1)}.splide--rtl>.splide__arrows .splide__arrow--next,.splide--rtl>.splide__track>.splide__arrows .splide__arrow--next{left:1em;right:auto}.splide--rtl>.splide__arrows .splide__arrow--next svg,.splide--rtl>.splide__track>.splide__arrows .splide__arrow--next svg{-webkit-transform:scaleX(-1);-moz-transform:scaleX(-1);transform:scaleX(-1)}.splide--ttb>.splide__arrows .splide__arrow,.splide--ttb>.splide__track>.splide__arrows .splide__arrow{left:50%;-webkit-transform:translate(-50%);-moz-transform:translate(-50%);transform:translate(-50%)}.splide--ttb>.splide__arrows .splide__arrow--prev,.splide--ttb>.splide__track>.splide__arrows .splide__arrow--prev{top:1em}.splide--ttb>.splide__arrows .splide__arrow--prev svg,.splide--ttb>.splide__track>.splide__arrows .splide__arrow--prev svg{-webkit-transform:rotate(-90deg);-moz-transform:rotate(-90deg);transform:rotate(-90deg)}.splide--ttb>.splide__arrows .splide__arrow--next,.splide--ttb>.splide__track>.splide__arrows .splide__arrow--next{top:auto;bottom:1em}.splide--ttb>.splide__arrows .splide__arrow--next svg,.splide--ttb>.splide__track>.splide__arrows .splide__arrow--next svg{-webkit-transform:rotate(90deg);-moz-transform:rotate(90deg);transform:rotate(90deg)}.splide--ttb>.splide__pagination{display:-moz-box;display:flex;-moz-box-orient:vertical;-moz-box-direction:normal;flex-direction:column;bottom:50%;left:auto;right:.5em;-webkit-transform:translateY(50%);-moz-transform:translateY(50%);transform:translateY(50%)}", "",{"version":3,"sources":["webpack://node_modules/@splidejs/splide/dist/css/themes/splide-default.min.css"],"names":[],"mappings":"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","sourcesContent":["@keyframes splide-loading{0%{transform:rotate(0)}to{transform:rotate(1turn)}}.splide__container{position:relative;box-sizing:border-box}.splide__list{margin:0!important;padding:0!important;width:-webkit-max-content;width:max-content;will-change:transform}.splide.is-active .splide__list{display:flex}.splide__pagination{display:inline-flex;align-items:center;width:95%;flex-wrap:wrap;justify-content:center;margin:0}.splide__pagination li{list-style-type:none;display:inline-block;line-height:1;margin:0}.splide{visibility:hidden}.splide,.splide__slide{position:relative;outline:none}.splide__slide{box-sizing:border-box;list-style-type:none!important;margin:0;flex-shrink:0}.splide__slide img{vertical-align:bottom}.splide__slider{position:relative}.splide__spinner{position:absolute;top:0;left:0;right:0;bottom:0;margin:auto;display:inline-block;width:20px;height:20px;border-radius:50%;border:2px solid #999;border-left-color:transparent;animation:splide-loading 1s linear infinite}.splide__track{position:relative;z-index:0;overflow:hidden}.splide--draggable>.splide__track>.splide__list>.splide__slide{-webkit-user-select:none;user-select:none}.splide--fade>.splide__track>.splide__list{display:block}.splide--fade>.splide__track>.splide__list>.splide__slide{position:absolute;top:0;left:0;z-index:0;opacity:0}.splide--fade>.splide__track>.splide__list>.splide__slide.is-active{position:relative;z-index:1;opacity:1}.splide--rtl{direction:rtl}.splide--ttb>.splide__track>.splide__list{display:block}.splide--ttb>.splide__pagination{width:auto}.splide__arrow{position:absolute;z-index:1;top:50%;transform:translateY(-50%);width:2em;height:2em;border-radius:50%;display:flex;align-items:center;justify-content:center;border:none;padding:0;opacity:.7;background:#ccc}.splide__arrow svg{width:1.2em;height:1.2em}.splide__arrow:hover{cursor:pointer;opacity:.9}.splide__arrow:focus{outline:none}.splide__arrow--prev{left:1em}.splide__arrow--prev svg{transform:scaleX(-1)}.splide__arrow--next{right:1em}.splide__pagination{position:absolute;z-index:1;bottom:.5em;left:50%;transform:translateX(-50%);padding:0}.splide__pagination__page{display:inline-block;width:8px;height:8px;background:#ccc;border-radius:50%;margin:3px;padding:0;transition:transform .2s linear;border:none;opacity:.7}.splide__pagination__page.is-active{transform:scale(1.4);background:#fff}.splide__pagination__page:hover{cursor:pointer;opacity:.9}.splide__pagination__page:focus{outline:none}.splide__progress__bar{width:0;height:3px;background:#ccc}.splide--nav>.splide__track>.splide__list>.splide__slide{border:3px solid transparent}.splide--nav>.splide__track>.splide__list>.splide__slide.is-active{border-color:#000}.splide--nav>.splide__track>.splide__list>.splide__slide:focus{outline:none}.splide--rtl>.splide__arrows .splide__arrow--prev,.splide--rtl>.splide__track>.splide__arrows .splide__arrow--prev{right:1em;left:auto}.splide--rtl>.splide__arrows .splide__arrow--prev svg,.splide--rtl>.splide__track>.splide__arrows .splide__arrow--prev svg{transform:scaleX(1)}.splide--rtl>.splide__arrows .splide__arrow--next,.splide--rtl>.splide__track>.splide__arrows .splide__arrow--next{left:1em;right:auto}.splide--rtl>.splide__arrows .splide__arrow--next svg,.splide--rtl>.splide__track>.splide__arrows .splide__arrow--next svg{transform:scaleX(-1)}.splide--ttb>.splide__arrows .splide__arrow,.splide--ttb>.splide__track>.splide__arrows .splide__arrow{left:50%;transform:translate(-50%)}.splide--ttb>.splide__arrows .splide__arrow--prev,.splide--ttb>.splide__track>.splide__arrows .splide__arrow--prev{top:1em}.splide--ttb>.splide__arrows .splide__arrow--prev svg,.splide--ttb>.splide__track>.splide__arrows .splide__arrow--prev svg{transform:rotate(-90deg)}.splide--ttb>.splide__arrows .splide__arrow--next,.splide--ttb>.splide__track>.splide__arrows .splide__arrow--next{top:auto;bottom:1em}.splide--ttb>.splide__arrows .splide__arrow--next svg,.splide--ttb>.splide__track>.splide__arrows .splide__arrow--next svg{transform:rotate(90deg)}.splide--ttb>.splide__pagination{display:flex;flex-direction:column;bottom:50%;left:auto;right:.5em;transform:translateY(50%)}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/next/dist/next-server/server/image-config.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/image-config.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
exports.__esModule=true;exports.imageConfigDefault=exports.VALID_LOADERS=void 0;const VALID_LOADERS=['default','imgix','cloudinary','akamai'];exports.VALID_LOADERS=VALID_LOADERS;const imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:'/_next/image',loader:'default',domains:[],disableStaticImages:false};exports.imageConfigDefault=imageConfigDefault;
//# sourceMappingURL=image-config.js.map

/***/ }),

/***/ "./node_modules/next/image.js":
/*!************************************!*\
  !*** ./node_modules/next/image.js ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/image */ "./node_modules/next/dist/client/image.js")


/***/ }),

/***/ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react/cjs/react-jsx-dev-runtime.development.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.2
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
exports.Fragment = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  exports.Fragment = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === exports.Fragment || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getContextName(type) {
  return type.displayName || 'Context';
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case exports.Fragment:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return 'Profiler';

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentName(init(payload));
          } catch (x) {
            return null;
          }
        }
    }
  }

  return null;
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: _assign({}, props, {
          value: prevLog
        }),
        info: _assign({}, props, {
          value: prevInfo
        }),
        warn: _assign({}, props, {
          value: prevWarn
        }),
        error: _assign({}, props, {
          value: prevError
        }),
        group: _assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: _assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: _assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if (!fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case REACT_SUSPENSE_TYPE:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_BLOCK_TYPE:
        return describeFunctionComponentFrame(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown;
var specialPropRefWarningShown;
var didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function warnIfStringRefCannotBeAutoConverted(config, self) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}

function defineKeyPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingKey = function () {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingKey.isReactWarning = true;
    Object.defineProperty(props, 'key', {
      get: warnAboutAccessingKey,
      configurable: true
    });
  }
}

function defineRefPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingRef = function () {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingRef.isReactWarning = true;
    Object.defineProperty(props, 'ref', {
      get: warnAboutAccessingRef,
      configurable: true
    });
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */

function jsxDEV(type, config, maybeKey, source, self) {
  {
    var propName; // Reserved names are extracted

    var props = {};
    var key = null;
    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
    // but as an intermediary step, we will use jsxDEV for everything except
    // <div {...props} key="Hi" />, because we aren't currently able to tell if
    // key is explicitly declared to be undefined or not.

    if (maybeKey !== undefined) {
      key = '' + maybeKey;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    if (hasValidRef(config)) {
      ref = config.ref;
      warnIfStringRefCannotBeAutoConverted(config, self);
    } // Remaining properties are added to a new props object


    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    } // Resolve default props


    if (type && type.defaultProps) {
      var defaultProps = type.defaultProps;

      for (propName in defaultProps) {
        if (props[propName] === undefined) {
          props[propName] = defaultProps[propName];
        }
      }
    }

    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }

    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
  }
}

var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  }
}

function getDeclarationErrorAddendum() {
  {
    if (ReactCurrentOwner$1.current) {
      var name = getComponentName(ReactCurrentOwner$1.current.type);

      if (name) {
        return '\n\nCheck the render method of `' + name + '`.';
      }
    }

    return '';
  }
}

function getSourceInfoErrorAddendum(source) {
  {
    if (source !== undefined) {
      var fileName = source.fileName.replace(/^.*[\\\/]/, '');
      var lineNumber = source.lineNumber;
      return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
    }

    return '';
  }
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  {
    var info = getDeclarationErrorAddendum();

    if (!info) {
      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

      if (parentName) {
        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
      }
    }

    return info;
  }
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  {
    if (!element._store || element._store.validated || element.key != null) {
      return;
    }

    element._store.validated = true;
    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
      return;
    }

    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
    // property, it may be the creator of the child that's responsible for
    // assigning it a key.

    var childOwner = '';

    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
      // Give the component that originally created this child.
      childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
    }

    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  {
    if (typeof node !== 'object') {
      return;
    }

    if (Array.isArray(node)) {
      for (var i = 0; i < node.length; i++) {
        var child = node[i];

        if (isValidElement(child)) {
          validateExplicitKey(child, parentType);
        }
      }
    } else if (isValidElement(node)) {
      // This element was passed in a valid location.
      if (node._store) {
        node._store.validated = true;
      }
    } else if (node) {
      var iteratorFn = getIteratorFn(node);

      if (typeof iteratorFn === 'function') {
        // Entry iterators used to provide implicit keys,
        // but now we print a separate warning for them later.
        if (iteratorFn !== node.entries) {
          var iterator = iteratorFn.call(node);
          var step;

          while (!(step = iterator.next()).done) {
            if (isValidElement(step.value)) {
              validateExplicitKey(step.value, parentType);
            }
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentName(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentName(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}

function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
  {
    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.

    if (!validType) {
      var info = '';

      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
      }

      var sourceInfo = getSourceInfoErrorAddendum(source);

      if (sourceInfo) {
        info += sourceInfo;
      } else {
        info += getDeclarationErrorAddendum();
      }

      var typeString;

      if (type === null) {
        typeString = 'null';
      } else if (Array.isArray(type)) {
        typeString = 'array';
      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
        typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
        info = ' Did you accidentally export a JSX literal instead of a component?';
      } else {
        typeString = typeof type;
      }

      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }

    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.

    if (element == null) {
      return element;
    } // Skip key warning if the type isn't valid since our key validation logic
    // doesn't expect a non-string/function type and can throw confusing errors.
    // We don't want exception behavior to differ between dev and prod.
    // (Rendering will throw with a helpful message and as soon as the type is
    // fixed, the key warnings will appear.)


    if (validType) {
      var children = props.children;

      if (children !== undefined) {
        if (isStaticChildren) {
          if (Array.isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              validateChildKeys(children[i], type);
            }

            if (Object.freeze) {
              Object.freeze(children);
            }
          } else {
            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
          }
        } else {
          validateChildKeys(children, type);
        }
      }
    }

    if (type === exports.Fragment) {
      validateFragmentProps(element);
    } else {
      validatePropTypes(element);
    }

    return element;
  }
} // These two functions exist to still get child warnings in dev

var jsxDEV$1 =  jsxWithValidation ;

exports.jsxDEV = jsxDEV$1;
  })();
}


/***/ }),

/***/ "./node_modules/react/cjs/react.development.js":
/*!*****************************************************!*\
  !*** ./node_modules/react/cjs/react.development.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.2
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

// TODO: this is special because it gets imported during build.
var ReactVersion = '17.0.2';

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
exports.Fragment = 0xeacb;
exports.StrictMode = 0xeacc;
exports.Profiler = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
exports.Suspense = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  exports.Fragment = symbolFor('react.fragment');
  exports.StrictMode = symbolFor('react.strict_mode');
  exports.Profiler = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  exports.Suspense = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

/**
 * Keeps track of the current dispatcher.
 */
var ReactCurrentDispatcher = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

/**
 * Keeps track of the current batch's configuration such as how long an update
 * should suspend for if it needs to.
 */
var ReactCurrentBatchConfig = {
  transition: 0
};

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var ReactDebugCurrentFrame = {};
var currentExtraStackFrame = null;
function setExtraStackFrame(stack) {
  {
    currentExtraStackFrame = stack;
  }
}

{
  ReactDebugCurrentFrame.setExtraStackFrame = function (stack) {
    {
      currentExtraStackFrame = stack;
    }
  }; // Stack implementation injected by the current renderer.


  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var stack = ''; // Add an extra top frame while an element is being validated

    if (currentExtraStackFrame) {
      stack += currentExtraStackFrame;
    } // Delegate to the injected renderer-specific implementation


    var impl = ReactDebugCurrentFrame.getCurrentStack;

    if (impl) {
      stack += impl() || '';
    }

    return stack;
  };
}

/**
 * Used by act() to track whether you're inside an act() scope.
 */
var IsSomeRendererActing = {
  current: false
};

var ReactSharedInternals = {
  ReactCurrentDispatcher: ReactCurrentDispatcher,
  ReactCurrentBatchConfig: ReactCurrentBatchConfig,
  ReactCurrentOwner: ReactCurrentOwner,
  IsSomeRendererActing: IsSomeRendererActing,
  // Used by renderers to avoid bundling object-assign twice in UMD bundles:
  assign: _assign
};

{
  ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
}

// by calls to these methods by a Babel plugin.
//
// In PROD (or in packages without access to React internals),
// they are left as they are instead.

function warn(format) {
  {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    printWarning('warn', format, args);
  }
}
function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + "." + callerName;

    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }

    error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);

    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}
/**
 * This is the abstract API for an update queue.
 */


var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

var emptyObject = {};

{
  Object.freeze(emptyObject);
}
/**
 * Base class helpers for the updating state of a component.
 */


function Component(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
  // renderer.

  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};
/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */

Component.prototype.setState = function (partialState, callback) {
  if (!(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null)) {
    {
      throw Error( "setState(...): takes an object of state variables to update or a function which returns an object of state variables." );
    }
  }

  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};
/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */


Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};
/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */


{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };

  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);

        return undefined;
      }
    });
  };

  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}

ComponentDummy.prototype = Component.prototype;
/**
 * Convenience component with default shallow equality check for sCU.
 */

function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

_assign(pureComponentPrototype, Component.prototype);

pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };

  {
    Object.seal(refObject);
  }

  return refObject;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getContextName(type) {
  return type.displayName || 'Context';
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case exports.Fragment:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case exports.Profiler:
      return 'Profiler';

    case exports.StrictMode:
      return 'StrictMode';

    case exports.Suspense:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentName(init(payload));
          } catch (x) {
            return null;
          }
        }
    }
  }

  return null;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    }
  };

  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    }
  };

  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

function warnIfStringRefCannotBeAutoConverted(config) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */

function createElement(type, config, children) {
  var propName; // Reserved names are extracted

  var props = {};
  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;

      {
        warnIfStringRefCannotBeAutoConverted(config);
      }
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }

    props.children = childArray;
  } // Resolve default props


  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;

    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }

  {
    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }
  }

  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}
function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
  return newElement;
}
/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */

function cloneElement(element, config, children) {
  if (!!(element === null || element === undefined)) {
    {
      throw Error( "React.cloneElement(...): The argument must be a React element, but you passed " + element + "." );
    }
  }

  var propName; // Original props are copied

  var props = _assign({}, element.props); // Reserved names are extracted


  var key = element.key;
  var ref = element.ref; // Self is preserved since the owner is preserved.

  var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.

  var source = element._source; // Owner will be preserved, unless ref is overridden

  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    } // Remaining properties override existing props


    var defaultProps;

    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';
/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */

function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = key.replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });
  return '$' + escapedString;
}
/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */


var didWarnAboutMaps = false;
var userProvidedKeyEscapeRegex = /\/+/g;

function escapeUserProvidedKey(text) {
  return text.replace(userProvidedKeyEscapeRegex, '$&/');
}
/**
 * Generate a key string that identifies a element within a set.
 *
 * @param {*} element A element that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */


function getElementKey(element, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof element === 'object' && element !== null && element.key != null) {
    // Explicit key
    return escape('' + element.key);
  } // Implicit key determined by the index in the set


  return index.toString(36);
}

function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;

      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }

    }
  }

  if (invokeCallback) {
    var _child = children;
    var mappedChild = callback(_child); // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows:

    var childKey = nameSoFar === '' ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;

    if (Array.isArray(mappedChild)) {
      var escapedChildKey = '';

      if (childKey != null) {
        escapedChildKey = escapeUserProvidedKey(childKey) + '/';
      }

      mapIntoArray(mappedChild, array, escapedChildKey, '', function (c) {
        return c;
      });
    } else if (mappedChild != null) {
      if (isValidElement(mappedChild)) {
        mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
        // traverseAllChildren used to do for objects as children
        escapedPrefix + ( // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
        mappedChild.key && (!_child || _child.key !== mappedChild.key) ? // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
        escapeUserProvidedKey('' + mappedChild.key) + '/' : '') + childKey);
      }

      array.push(mappedChild);
    }

    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.

  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getElementKey(child, i);
      subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
    }
  } else {
    var iteratorFn = getIteratorFn(children);

    if (typeof iteratorFn === 'function') {
      var iterableChildren = children;

      {
        // Warn about using Maps as children
        if (iteratorFn === iterableChildren.entries) {
          if (!didWarnAboutMaps) {
            warn('Using Maps as children is not supported. ' + 'Use an array of keyed ReactElements instead.');
          }

          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(iterableChildren);
      var step;
      var ii = 0;

      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getElementKey(child, ii++);
        subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
      }
    } else if (type === 'object') {
      var childrenString = '' + children;

      {
        {
          throw Error( "Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + "). If you meant to render a collection of children, use an array instead." );
        }
      }
    }
  }

  return subtreeCount;
}

/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }

  var result = [];
  var count = 0;
  mapIntoArray(children, result, '', '', function (child) {
    return func.call(context, child, count++);
  });
  return result;
}
/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */


function countChildren(children) {
  var n = 0;
  mapChildren(children, function () {
    n++; // Don't return anything
  });
  return n;
}

/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */
function forEachChildren(children, forEachFunc, forEachContext) {
  mapChildren(children, function () {
    forEachFunc.apply(this, arguments); // Don't return anything.
  }, forEachContext);
}
/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */


function toArray(children) {
  return mapChildren(children, function (child) {
    return child;
  }) || [];
}
/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */


function onlyChild(children) {
  if (!isValidElement(children)) {
    {
      throw Error( "React.Children.only expected to receive a single React element child." );
    }
  }

  return children;
}

function createContext(defaultValue, calculateChangedBits) {
  if (calculateChangedBits === undefined) {
    calculateChangedBits = null;
  } else {
    {
      if (calculateChangedBits !== null && typeof calculateChangedBits !== 'function') {
        error('createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits);
      }
    }
  }

  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    _calculateChangedBits: calculateChangedBits,
    // As a workaround to support multiple concurrent renderers, we categorize
    // some renderers as primary and others as secondary. We only expect
    // there to be two concurrent renderers at most: React Native (primary) and
    // Fabric (secondary); React DOM (primary) and React ART (secondary).
    // Secondary renderers store their context values on separate fields.
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    // Used to track how many concurrent renderers this context currently
    // supports within in a single renderer. Such as parallel server rendering.
    _threadCount: 0,
    // These are circular
    Provider: null,
    Consumer: null
  };
  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };
  var hasWarnedAboutUsingNestedContextConsumers = false;
  var hasWarnedAboutUsingConsumerProvider = false;
  var hasWarnedAboutDisplayNameOnConsumer = false;

  {
    // A separate object, but proxies back to the original context object for
    // backwards compatibility. It has a different $$typeof, so we can properly
    // warn for the incorrect usage of Context as a Consumer.
    var Consumer = {
      $$typeof: REACT_CONTEXT_TYPE,
      _context: context,
      _calculateChangedBits: context._calculateChangedBits
    }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

    Object.defineProperties(Consumer, {
      Provider: {
        get: function () {
          if (!hasWarnedAboutUsingConsumerProvider) {
            hasWarnedAboutUsingConsumerProvider = true;

            error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
          }

          return context.Provider;
        },
        set: function (_Provider) {
          context.Provider = _Provider;
        }
      },
      _currentValue: {
        get: function () {
          return context._currentValue;
        },
        set: function (_currentValue) {
          context._currentValue = _currentValue;
        }
      },
      _currentValue2: {
        get: function () {
          return context._currentValue2;
        },
        set: function (_currentValue2) {
          context._currentValue2 = _currentValue2;
        }
      },
      _threadCount: {
        get: function () {
          return context._threadCount;
        },
        set: function (_threadCount) {
          context._threadCount = _threadCount;
        }
      },
      Consumer: {
        get: function () {
          if (!hasWarnedAboutUsingNestedContextConsumers) {
            hasWarnedAboutUsingNestedContextConsumers = true;

            error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
          }

          return context.Consumer;
        }
      },
      displayName: {
        get: function () {
          return context.displayName;
        },
        set: function (displayName) {
          if (!hasWarnedAboutDisplayNameOnConsumer) {
            warn('Setting `displayName` on Context.Consumer has no effect. ' + "You should set it directly on the context with Context.displayName = '%s'.", displayName);

            hasWarnedAboutDisplayNameOnConsumer = true;
          }
        }
      }
    }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

    context.Consumer = Consumer;
  }

  {
    context._currentRenderer = null;
    context._currentRenderer2 = null;
  }

  return context;
}

var Uninitialized = -1;
var Pending = 0;
var Resolved = 1;
var Rejected = 2;

function lazyInitializer(payload) {
  if (payload._status === Uninitialized) {
    var ctor = payload._result;
    var thenable = ctor(); // Transition to the next state.

    var pending = payload;
    pending._status = Pending;
    pending._result = thenable;
    thenable.then(function (moduleObject) {
      if (payload._status === Pending) {
        var defaultExport = moduleObject.default;

        {
          if (defaultExport === undefined) {
            error('lazy: Expected the result of a dynamic import() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + // Break up imports to avoid accidentally parsing them as dependencies.
            'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))", moduleObject);
          }
        } // Transition to the next state.


        var resolved = payload;
        resolved._status = Resolved;
        resolved._result = defaultExport;
      }
    }, function (error) {
      if (payload._status === Pending) {
        // Transition to the next state.
        var rejected = payload;
        rejected._status = Rejected;
        rejected._result = error;
      }
    });
  }

  if (payload._status === Resolved) {
    return payload._result;
  } else {
    throw payload._result;
  }
}

function lazy(ctor) {
  var payload = {
    // We use these fields to store the result.
    _status: -1,
    _result: ctor
  };
  var lazyType = {
    $$typeof: REACT_LAZY_TYPE,
    _payload: payload,
    _init: lazyInitializer
  };

  {
    // In production, this would just set it on the object.
    var defaultProps;
    var propTypes; // $FlowFixMe

    Object.defineProperties(lazyType, {
      defaultProps: {
        configurable: true,
        get: function () {
          return defaultProps;
        },
        set: function (newDefaultProps) {
          error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          defaultProps = newDefaultProps; // Match production behavior more closely:
          // $FlowFixMe

          Object.defineProperty(lazyType, 'defaultProps', {
            enumerable: true
          });
        }
      },
      propTypes: {
        configurable: true,
        get: function () {
          return propTypes;
        },
        set: function (newPropTypes) {
          error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          propTypes = newPropTypes; // Match production behavior more closely:
          // $FlowFixMe

          Object.defineProperty(lazyType, 'propTypes', {
            enumerable: true
          });
        }
      }
    });
  }

  return lazyType;
}

function forwardRef(render) {
  {
    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
      error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
    } else if (typeof render !== 'function') {
      error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
    } else {
      if (render.length !== 0 && render.length !== 2) {
        error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
      }
    }

    if (render != null) {
      if (render.defaultProps != null || render.propTypes != null) {
        error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
      }
    }
  }

  var elementType = {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };

  {
    var ownName;
    Object.defineProperty(elementType, 'displayName', {
      enumerable: false,
      configurable: true,
      get: function () {
        return ownName;
      },
      set: function (name) {
        ownName = name;

        if (render.displayName == null) {
          render.displayName = name;
        }
      }
    });
  }

  return elementType;
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === exports.Fragment || type === exports.Profiler || type === REACT_DEBUG_TRACING_MODE_TYPE || type === exports.StrictMode || type === exports.Suspense || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function memo(type, compare) {
  {
    if (!isValidElementType(type)) {
      error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
    }
  }

  var elementType = {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: compare === undefined ? null : compare
  };

  {
    var ownName;
    Object.defineProperty(elementType, 'displayName', {
      enumerable: false,
      configurable: true,
      get: function () {
        return ownName;
      },
      set: function (name) {
        ownName = name;

        if (type.displayName == null) {
          type.displayName = name;
        }
      }
    });
  }

  return elementType;
}

function resolveDispatcher() {
  var dispatcher = ReactCurrentDispatcher.current;

  if (!(dispatcher !== null)) {
    {
      throw Error( "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem." );
    }
  }

  return dispatcher;
}

function useContext(Context, unstable_observedBits) {
  var dispatcher = resolveDispatcher();

  {
    if (unstable_observedBits !== undefined) {
      error('useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? '\n\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://reactjs.org/link/rules-of-hooks' : '');
    } // TODO: add a more generic warning for invalid values.


    if (Context._context !== undefined) {
      var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
      // and nobody should be using this in existing code.

      if (realContext.Consumer === Context) {
        error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
      } else if (realContext.Provider === Context) {
        error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
      }
    }
  }

  return dispatcher.useContext(Context, unstable_observedBits);
}
function useState(initialState) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}
function useReducer(reducer, initialArg, init) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useReducer(reducer, initialArg, init);
}
function useRef(initialValue) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useRef(initialValue);
}
function useEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useEffect(create, deps);
}
function useLayoutEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useLayoutEffect(create, deps);
}
function useCallback(callback, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useCallback(callback, deps);
}
function useMemo(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useMemo(create, deps);
}
function useImperativeHandle(ref, create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useImperativeHandle(ref, create, deps);
}
function useDebugValue(value, formatterFn) {
  {
    var dispatcher = resolveDispatcher();
    return dispatcher.useDebugValue(value, formatterFn);
  }
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: _assign({}, props, {
          value: prevLog
        }),
        info: _assign({}, props, {
          value: prevInfo
        }),
        warn: _assign({}, props, {
          value: prevWarn
        }),
        error: _assign({}, props, {
          value: prevError
        }),
        group: _assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: _assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: _assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if (!fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher$1.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher$1.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher$1.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case exports.Suspense:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_BLOCK_TYPE:
        return describeFunctionComponentFrame(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      setExtraStackFrame(stack);
    } else {
      setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentName(ReactCurrentOwner.current.type);

    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }

  return '';
}

function getSourceInfoErrorAddendum(source) {
  if (source !== undefined) {
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }

  return '';
}

function getSourceInfoErrorAddendumForProps(elementProps) {
  if (elementProps !== null && elementProps !== undefined) {
    return getSourceInfoErrorAddendum(elementProps.__source);
  }

  return '';
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

    if (parentName) {
      info = "\n\nCheck the top-level render call using <" + parentName + ">.";
    }
  }

  return info;
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }

  element._store.validated = true;
  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }

  ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.

  var childOwner = '';

  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
  }

  {
    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }

  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];

      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);

    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;

        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentName(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentName(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}
function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.

  if (!validType) {
    var info = '';

    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendumForProps(props);

    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString;

    if (type === null) {
      typeString = 'null';
    } else if (Array.isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    {
      error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }
  }

  var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.

  if (element == null) {
    return element;
  } // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)


  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === exports.Fragment) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}
var didWarnAboutDeprecatedCreateFactory = false;
function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type;

  {
    if (!didWarnAboutDeprecatedCreateFactory) {
      didWarnAboutDeprecatedCreateFactory = true;

      warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
    } // Legacy hook: remove it


    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');

        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}
function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);

  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }

  validatePropTypes(newElement);
  return newElement;
}

{

  try {
    var frozenObject = Object.freeze({});
    /* eslint-disable no-new */

    new Map([[frozenObject, null]]);
    new Set([frozenObject]);
    /* eslint-enable no-new */
  } catch (e) {
  }
}

var createElement$1 =  createElementWithValidation ;
var cloneElement$1 =  cloneElementWithValidation ;
var createFactory =  createFactoryWithValidation ;
var Children = {
  map: mapChildren,
  forEach: forEachChildren,
  count: countChildren,
  toArray: toArray,
  only: onlyChild
};

exports.Children = Children;
exports.Component = Component;
exports.PureComponent = PureComponent;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
exports.cloneElement = cloneElement$1;
exports.createContext = createContext;
exports.createElement = createElement$1;
exports.createFactory = createFactory;
exports.createRef = createRef;
exports.forwardRef = forwardRef;
exports.isValidElement = isValidElement;
exports.lazy = lazy;
exports.memo = memo;
exports.useCallback = useCallback;
exports.useContext = useContext;
exports.useDebugValue = useDebugValue;
exports.useEffect = useEffect;
exports.useImperativeHandle = useImperativeHandle;
exports.useLayoutEffect = useLayoutEffect;
exports.useMemo = useMemo;
exports.useReducer = useReducer;
exports.useRef = useRef;
exports.useState = useState;
exports.version = ReactVersion;
  })();
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react.development.js */ "./node_modules/react/cjs/react.development.js");
}


/***/ }),

/***/ "./node_modules/react/jsx-dev-runtime.js":
/*!***********************************************!*\
  !*** ./node_modules/react/jsx-dev-runtime.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-jsx-dev-runtime.development.js */ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js");
}


/***/ }),

/***/ "./node_modules/splide-nextjs/react-splide/dist/js/components/Splide.js":
/*!******************************************************************************!*\
  !*** ./node_modules/splide-nextjs/react-splide/dist/js/components/Splide.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _splide = _interopRequireDefault(__webpack_require__(/*! splide-nextjs/splide */ "./node_modules/splide-nextjs/splide/dist/js/splide.esm.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/splide-nextjs/react-splide/dist/js/utils/index.js");

var _events = __webpack_require__(/*! ../constants/events */ "./node_modules/splide-nextjs/react-splide/dist/js/constants/events.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * The class for the Splide component.
 */
var Splide = /*#__PURE__*/function (_React$Component) {
  _inherits(Splide, _React$Component);

  var _super = _createSuper(Splide);

  /**
   * Splide constructor.
   *
   * @param {Object}   props                     - Props.
   * @param {string}   props.id                  - Optional. Id attribute for the root element.
   * @param {string}   props.className           - Optional. Additional class name for the root element.
   * @param {boolean}  props.hasSliderWrapper    - Optional. Whether to wrap a track by a slider element.
   * @param {boolean}  props.hasAutoplayProgress - Optional. Whether to render progress bar for autoplay.
   * @param {boolean}  props.hasAutoplayControls - Optional. Whether to render play/pause button for autoplay.
   * @param {string}   props.playButtonLabel     - Optional. The label for the play button.
   * @param {string}   props.pauseButtonLabel    - Optional. The label for the pause button.
   * @param {function} props.renderControls      - Optional. A function to render custom controls.
   */
  function Splide(props) {
    var _this;

    _classCallCheck(this, Splide);

    _this = _super.call(this, props);
    _this.splideRef = /*#__PURE__*/_react["default"].createRef();
    return _this;
  }
  /**
   * Initialize Splide right after the component is mounted.
   */


  _createClass(Splide, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          _this$props$options = _this$props.options,
          options = _this$props$options === void 0 ? {} : _this$props$options,
          _this$props$Extension = _this$props.Extensions,
          Extensions = _this$props$Extension === void 0 ? {} : _this$props$Extension,
          _this$props$Transitio = _this$props.Transition,
          Transition = _this$props$Transitio === void 0 ? null : _this$props$Transitio;
      this.splide = new _splide["default"](this.splideRef.current, options);
      this.splide.mount(Extensions, Transition);
      this.bind();
    }
    /**
     * Destroy the splide instance just before the component is unmounted.
     */

  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.splide) {
        this.splide.destroy();
      }
    }
    /**
     * Remount the splide when the component is updated.
     */

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.splide.refresh();
    }
    /**
     * Register handlers to Splide events.
     * All event names are converted to "on + camelcase" without colon.
     * For example, arrows:mounted will be onArrowsMounted.
     */

  }, {
    key: "bind",
    value: function bind() {
      var _this2 = this;

      _events.EVENTS.forEach(function (event) {
        var handler = 'on' + event.split(':').map(function (fragment) {
          return fragment.charAt(0).toUpperCase() + fragment.slice(1);
        }).join('');

        if (typeof _this2.props[handler] === 'function') {
          _this2.splide.on(event, function () {
            var _this2$props;

            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            (_this2$props = _this2.props)[handler].apply(_this2$props, [_this2.splide].concat(args));
          });
        }
      });
    }
    /**
     * Sync to the given splide.
     *
     * @param {Splide} splide - Splide instance.
     */

  }, {
    key: "sync",
    value: function sync(splide) {
      if (this.splide) {
        this.splide.sync(splide);
        this.remount();
      }
    }
    /**
     * Remount the splide.
     */

  }, {
    key: "remount",
    value: function remount() {
      if (this.splide) {
        this.splide.destroy();
        this.splide.mount();
        this.bind();
      }
    }
    /**
     * Render the track element.
     *
     * @return {ReactNode}
     */

  }, {
    key: "renderTrack",
    value: function renderTrack() {
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "splide__track"
      }, /*#__PURE__*/_react["default"].createElement("ul", {
        className: "splide__list"
      }, this.props.children));
    }
    /**
     * Render the component.
     *
     * @return {ReactNode} - React component.
     */

  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          id = _this$props2.id,
          className = _this$props2.className,
          hasSliderWrapper = _this$props2.hasSliderWrapper,
          hasAutoplayProgress = _this$props2.hasAutoplayProgress,
          hasAutoplayControls = _this$props2.hasAutoplayControls,
          _this$props2$playButt = _this$props2.playButtonLabel,
          playButtonLabel = _this$props2$playButt === void 0 ? 'Play' : _this$props2$playButt,
          _this$props2$pauseBut = _this$props2.pauseButtonLabel,
          pauseButtonLabel = _this$props2$pauseBut === void 0 ? 'Pause' : _this$props2$pauseBut,
          _this$props2$renderCo = _this$props2.renderControls,
          renderControls = _this$props2$renderCo === void 0 ? _utils.noop : _this$props2$renderCo;
      return /*#__PURE__*/_react["default"].createElement("div", {
        id: id,
        className: (0, _utils.classNames)('splide', className),
        ref: this.splideRef
      }, hasSliderWrapper && /*#__PURE__*/_react["default"].createElement("div", {
        className: "splide__slider"
      }, this.renderTrack()), !hasSliderWrapper && this.renderTrack(), hasAutoplayProgress && /*#__PURE__*/_react["default"].createElement("div", {
        className: "splide__progress"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "splide__progress__bar"
      })), hasAutoplayControls && /*#__PURE__*/_react["default"].createElement("div", {
        className: "splide__autoplay"
      }, /*#__PURE__*/_react["default"].createElement("button", {
        className: "splide__play"
      }, playButtonLabel), /*#__PURE__*/_react["default"].createElement("button", {
        className: "splide__pause"
      }, pauseButtonLabel)), renderControls());
    }
  }]);

  return Splide;
}(_react["default"].Component);

exports.default = Splide;

/***/ }),

/***/ "./node_modules/splide-nextjs/react-splide/dist/js/components/SplideSlide.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/splide-nextjs/react-splide/dist/js/components/SplideSlide.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/splide-nextjs/react-splide/dist/js/utils/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * The component for each slide.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

/**
 * The component for each slide.
 *
 * @param {Object} props - Props.
 */
var _default = function _default(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return /*#__PURE__*/_react["default"].createElement("li", {
    className: (0, _utils.classNames)('splide__slide', className)
  }, children);
};

exports.default = _default;

/***/ }),

/***/ "./node_modules/splide-nextjs/react-splide/dist/js/constants/events.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/splide-nextjs/react-splide/dist/js/constants/events.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.EVENTS = void 0;

/**
 * Export event list.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */
var EVENTS = ['mounted', 'updated', 'move', 'moved', 'drag', 'dragged', 'visible', 'hidden', 'active', 'inactive', 'click', 'arrows:mounted', 'arrows:updated', 'pagination:mounted', 'pagination:updated', 'navigation:mounted', 'autoplay:play', 'autoplay:pause', 'autoplay:playing', 'lazyload:loaded'];
exports.EVENTS = EVENTS;

/***/ }),

/***/ "./node_modules/splide-nextjs/react-splide/dist/js/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/splide-nextjs/react-splide/dist/js/index.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "Splide", ({
  enumerable: true,
  get: function get() {
    return _Splide["default"];
  }
}));
Object.defineProperty(exports, "SplideSlide", ({
  enumerable: true,
  get: function get() {
    return _SplideSlide["default"];
  }
}));

var _Splide = _interopRequireDefault(__webpack_require__(/*! ./components/Splide */ "./node_modules/splide-nextjs/react-splide/dist/js/components/Splide.js"));

var _SplideSlide = _interopRequireDefault(__webpack_require__(/*! ./components/SplideSlide */ "./node_modules/splide-nextjs/react-splide/dist/js/components/SplideSlide.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/***/ }),

/***/ "./node_modules/splide-nextjs/react-splide/dist/js/utils/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/splide-nextjs/react-splide/dist/js/utils/index.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.noop = noop;
exports.classNames = classNames;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Utility functions.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

/**
 * No operation.
 */
function noop() {}
/**
 * Join class names with/without condition.
 *
 * @param {string|Object} args - A class name itself or { className: condition } object.
 */


function classNames() {
  var names = [];

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  args.forEach(function (className) {
    if (!className) {
      return;
    }

    if (typeof className === 'string') {
      names.push(className);
    } else if (_typeof(className) === 'object') {
      Object.keys(className).forEach(function (key) {
        if (className[key]) {
          names.push(key);
        }
      });
    }
  });
  return names.join(' ');
}

/***/ }),

/***/ "./node_modules/splide-nextjs/splide/dist/js/splide.esm.js":
/*!*****************************************************************!*\
  !*** ./node_modules/splide-nextjs/splide/dist/js/splide.esm.js ***!
  \*****************************************************************/
/***/ (function(module) {

/*!
 * Splide.js
 * Version  : 2.4.20
 * License  : MIT
 * Copyright: 2020 Naotoshi Fujita
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 311:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_627__) => {

// ESM COMPAT FLAG
__nested_webpack_require_627__.r(__webpack_exports__);

// EXPORTS
__nested_webpack_require_627__.d(__webpack_exports__, {
  "default": () => /* binding */ module_Splide
});

// NAMESPACE OBJECT: ./src/js/constants/states.js
var states_namespaceObject = {};
__nested_webpack_require_627__.r(states_namespaceObject);
__nested_webpack_require_627__.d(states_namespaceObject, {
  "CREATED": () => CREATED,
  "DESTROYED": () => DESTROYED,
  "IDLE": () => IDLE,
  "MOUNTED": () => MOUNTED,
  "MOVING": () => MOVING
});

;// CONCATENATED MODULE: ./src/js/core/event.js
/**
 * The function for providing an Event object simply managing events.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

/**
 * The function for providing an Event object simply managing events.
 */
/* harmony default export */ const core_event = (function () {
  /**
   * Store all event data.
   *
   * @type {Array}
   */
  var data = [];
  var Event = {
    /**
     * Subscribe the given event(s).
     *
     * @param {string}   events  - An event name. Use space to separate multiple events.
     *                             Also, namespace is accepted by dot, such as 'resize.{namespace}'.
     * @param {function} handler - A callback function.
     * @param {Element}  elm     - Optional. Native event will be listened to when this arg is provided.
     * @param {Object}   options - Optional. Options for addEventListener.
     */
    on: function on(events, handler, elm, options) {
      if (elm === void 0) {
        elm = null;
      }

      if (options === void 0) {
        options = {};
      }

      events.split(' ').forEach(function (event) {
        if (elm) {
          elm.addEventListener(event, handler, options);
        }

        data.push({
          event: event,
          handler: handler,
          elm: elm,
          options: options
        });
      });
    },

    /**
     * Unsubscribe the given event(s).
     *
     * @param {string}  events - A event name or names split by space.
     * @param {Element} elm    - Optional. removeEventListener() will be called when this arg is provided.
     */
    off: function off(events, elm) {
      if (elm === void 0) {
        elm = null;
      }

      events.split(' ').forEach(function (event) {
        data = data.filter(function (item) {
          if (item && item.event === event && item.elm === elm) {
            unsubscribe(item);
            return false;
          }

          return true;
        });
      });
    },

    /**
     * Emit an event.
     * This method is only for custom events.
     *
     * @param {string}  event - An event name.
     * @param {*}       args  - Any number of arguments passed to handlers.
     */
    emit: function emit(event) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      data.forEach(function (item) {
        if (!item.elm && item.event.split('.')[0] === event) {
          item.handler.apply(item, args);
        }
      });
    },

    /**
     * Clear event data.
     */
    destroy: function destroy() {
      data.forEach(unsubscribe);
      data = [];
    }
  };
  /**
   * Remove the registered event listener.
   *
   * @param {Object} item - An object containing event data.
   */

  function unsubscribe(item) {
    if (item.elm) {
      item.elm.removeEventListener(item.event, item.handler, item.options);
    }
  }

  return Event;
});
;// CONCATENATED MODULE: ./src/js/core/state.js
/**
 * The function providing a super simple state system.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

/**
 * The function providing a super simple state system.
 *
 * @param {string|number} initialState - Provide the initial state value.
 */
/* harmony default export */ const state = (function (initialState) {
  /**
   * Store the current state.
   *
   * @type {string|number}
   */
  var curr = initialState;
  return {
    /**
     * Change state.
     *
     * @param {string|number} state - A new state.
     */
    set: function set(state) {
      curr = state;
    },

    /**
     * Verify if the current state is given one or not.
     *
     * @param {string|number} state - A state name to be verified.
     *
     * @return {boolean} - True if the current state is the given one.
     */
    is: function is(state) {
      return state === curr;
    }
  };
});
;// CONCATENATED MODULE: ./src/js/utils/object.js
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Some utility functions related with Object, supporting IE.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */
var keys = Object.keys;
/**
 * Iterate an object like Array.forEach.
 * IE doesn't support forEach of HTMLCollection.
 *
 * @param {Object}    obj       - An object.
 * @param {function}  callback  - A function handling each value. Arguments are value, property and index.
 */

function each(obj, callback) {
  keys(obj).some(function (key, index) {
    return callback(obj[key], key, index);
  });
}
/**
 * Return values of the given object as an array.
 * IE doesn't support Object.values.
 *
 * @param {Object} obj - An object.
 *
 * @return {Array} - An array containing all values of the given object.
 */

function values(obj) {
  return keys(obj).map(function (key) {
    return obj[key];
  });
}
/**
 * Check if the given subject is object or not.
 *
 * @param {*} subject - A subject to be verified.
 *
 * @return {boolean} - True if object, false otherwise.
 */

function isObject(subject) {
  return typeof subject === 'object';
}
/**
 * Merge two objects deeply.
 *
 * @param {Object} to   - An object where "from" is merged.
 * @param {Object} from - An object merged to "to".
 *
 * @return {Object} - A merged object.
 */

function merge(_ref, from) {
  var to = _extends({}, _ref);

  each(from, function (value, key) {
    if (isObject(value)) {
      if (!isObject(to[key])) {
        to[key] = {};
      }

      to[key] = merge(to[key], value);
    } else {
      to[key] = value;
    }
  });
  return to;
}
/**
 * Assign all properties "from" to "to" object.
 *
 * @param {Object} to   - An object where properties are assigned.
 * @param {Object} from - An object whose properties are assigned to "to".
 *
 * @return {Object} - An assigned object.
 */

function object_assign(to, from) {
  keys(from).forEach(function (key) {
    if (!to[key]) {
      Object.defineProperty(to, key, Object.getOwnPropertyDescriptor(from, key));
    }
  });
  return to;
}
;// CONCATENATED MODULE: ./src/js/utils/utils.js
/**
 * A package of some miscellaneous utility functions.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

/**
 * Convert the given value to array.
 *
 * @param {*} value - Any value.
 *
 * @return {*[]} - Array containing the given value.
 */

function toArray(value) {
  return Array.isArray(value) ? value : [value];
}
/**
 * Check if the given value is between min and max.
 * Min will be returned when the value is less than min or max will do when greater than max.
 *
 * @param {number} value - A number to be checked.
 * @param {number} m1    - Minimum or maximum number.
 * @param {number} m2    - Maximum or minimum number.
 *
 * @return {number} - A value itself, min or max.
 */

function between(value, m1, m2) {
  return Math.min(Math.max(value, m1 > m2 ? m2 : m1), m1 > m2 ? m1 : m2);
}
/**
 * The sprintf method with minimum functionality.
 *
 * @param {string}       format       - The string format.
 * @param {string|Array} replacements - Replacements accepting multiple arguments.
 *
 * @returns {string} - Converted string.
 */

function sprintf(format, replacements) {
  var i = 0;
  return format.replace(/%s/g, function () {
    return toArray(replacements)[i++];
  });
}
/**
 * Append px unit to the given subject if necessary.
 *
 * @param {number|string} value - A value that may not include an unit.
 *
 * @return {string} - If the value is string, return itself.
 *                    If number, do value + "px". An empty string, otherwise.
 */

function unit(value) {
  var type = typeof value;

  if (type === 'number' && value > 0) {
    return parseFloat(value) + 'px';
  }

  return type === 'string' ? value : '';
}
/**
 * Pad start with 0.
 *
 * @param {number} number - A number to be filled with 0.
 *
 * @return {string|number} - Padded number.
 */

function pad(number) {
  return number < 10 ? '0' + number : number;
}
/**
 * Convert the given value to pixel.
 *
 * @param {Element}       root  - Root element where a dummy div is appended.
 * @param {string|number} value - CSS value to be converted, such as 10rem.
 *
 * @return {number} - Pixel.
 */

function toPixel(root, value) {
  if (typeof value === 'string') {
    var div = create('div', {});
    applyStyle(div, {
      position: 'absolute',
      width: value
    });
    append(root, div);
    value = div.clientWidth;
    dom_remove(div);
  }

  return +value || 0;
}
;// CONCATENATED MODULE: ./src/js/utils/dom.js
/**
 * Some utility functions related with DOM.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */


/**
 * Find the first element matching the given selector.
 * Be aware that all selectors after a space are ignored.
 *
 * @param {Element|Node}  elm       - An ancestor element.
 * @param {string}        selector  - DOMString.
 *
 * @return {Element|null} - A found element or null.
 */

function find(elm, selector) {
  return elm ? elm.querySelector(selector.split(' ')[0]) : null;
}
/**
 * Find a first child having the given tag or class name.
 *
 * @param {Element} parent         - A parent element.
 * @param {string}  tagOrClassName - A tag or class name.
 *
 * @return {Element|undefined} - A found element on success or undefined on failure.
 */

function child(parent, tagOrClassName) {
  return children(parent, tagOrClassName)[0];
}
/**
 * Return chile elements that matches the provided tag or class name.
 *
 * @param {Element} parent         - A parent element.
 * @param {string}  tagOrClassName - A tag or class name.
 *
 * @return {Element[]} - Found elements.
 */

function children(parent, tagOrClassName) {
  if (parent) {
    return values(parent.children).filter(function (child) {
      return hasClass(child, tagOrClassName.split(' ')[0]) || child.tagName === tagOrClassName;
    });
  }

  return [];
}
/**
 * Create an element with some optional attributes.
 *
 * @param {string} tag   - A tag name.
 * @param {Object} attrs - An object any attribute pairs of name and value.
 *
 * @return {Element} - A created element.
 */

function create(tag, attrs) {
  var elm = document.createElement(tag);
  each(attrs, function (value, key) {
    return setAttribute(elm, key, value);
  });
  return elm;
}
/**
 * Convert HTML string to DOM node.
 *
 * @param {string} html - HTML string.
 *
 * @return {Node} - A created node.
 */

function domify(html) {
  var div = create('div', {});
  div.innerHTML = html;
  return div.firstChild;
}
/**
 * Remove a given element from a DOM tree.
 *
 * @param {Element|Element[]} elms - Element(s) to be removed.
 */

function dom_remove(elms) {
  toArray(elms).forEach(function (elm) {
    if (elm) {
      var parent = elm.parentElement;
      parent && parent.removeChild(elm);
    }
  });
}
/**
 * Append a child to a given element.
 *
 * @param {Element} parent - A parent element.
 * @param {Element} child  - An element to be appended.
 */

function append(parent, child) {
  if (parent) {
    parent.appendChild(child);
  }
}
/**
 * Insert an element before the reference element.
 *
 * @param {Element|Node} ref - A reference element.
 * @param {Element}      elm - An element to be inserted.
 */

function before(elm, ref) {
  if (elm && ref) {
    var parent = ref.parentElement;
    parent && parent.insertBefore(elm, ref);
  }
}
/**
 * Apply styles to the given element.
 *
 * @param {Element} elm     - An element where styles are applied.
 * @param {Object}  styles  - Object containing styles.
 */

function applyStyle(elm, styles) {
  if (elm) {
    each(styles, function (value, prop) {
      if (value !== null) {
        elm.style[prop] = value;
      }
    });
  }
}
/**
 * Add or remove classes to/from the element.
 * This function is for internal usage.
 *
 * @param {Element}         elm     - An element where classes are added.
 * @param {string|string[]} classes - Class names being added.
 * @param {boolean}         remove  - Whether to remove or add classes.
 */

function addOrRemoveClasses(elm, classes, remove) {
  if (elm) {
    toArray(classes).forEach(function (name) {
      if (name) {
        elm.classList[remove ? 'remove' : 'add'](name);
      }
    });
  }
}
/**
 * Add classes to the element.
 *
 * @param {Element}          elm     - An element where classes are added.
 * @param {string|string[]}  classes - Class names being added.
 */


function addClass(elm, classes) {
  addOrRemoveClasses(elm, classes, false);
}
/**
 * Remove a class from the element.
 *
 * @param {Element}         elm     - An element where classes are removed.
 * @param {string|string[]} classes - A class name being removed.
 */

function removeClass(elm, classes) {
  addOrRemoveClasses(elm, classes, true);
}
/**
 * Verify if the provided element has the class or not.
 *
 * @param {Element} elm       - An element.
 * @param {string}  className - A class name.
 *
 * @return {boolean} - True if the element has the class or false if not.
 */

function hasClass(elm, className) {
  return !!elm && elm.classList.contains(className);
}
/**
 * Set attribute to the given element.
 *
 * @param {Element}                 elm   - An element where an attribute is assigned.
 * @param {string}                  name  - Attribute name.
 * @param {string|number|boolean}   value - Attribute value.
 */

function setAttribute(elm, name, value) {
  if (elm) {
    elm.setAttribute(name, value);
  }
}
/**
 * Get attribute from the given element.
 *
 * @param {Element} elm  - An element where an attribute is assigned.
 * @param {string}  name - Attribute name.
 *
 * @return {string} - The value of the given attribute if available. An empty string if not.
 */

function getAttribute(elm, name) {
  return elm ? elm.getAttribute(name) : '';
}
/**
 * Remove attribute from the given element.
 *
 * @param {Element|Element[]} elms  - An element where an attribute is removed.
 * @param {string|string[]}      names - Attribute name.
 */

function removeAttribute(elms, names) {
  toArray(names).forEach(function (name) {
    toArray(elms).forEach(function (elm) {
      return elm && elm.removeAttribute(name);
    });
  });
}
/**
 * Return the Rect object of the provided object.
 *
 * @param {Element} elm - An element.
 *
 * @return {ClientRect|DOMRect} - A rect object.
 */

function getRect(elm) {
  return elm.getBoundingClientRect();
}
/**
 * Trigger the given callback after all images contained by the element are loaded.
 *
 * @param {Element}  elm      - Element that may contain images.
 * @param {Function} callback - Callback function fired right after all images are loaded.
 */

function loaded(elm, callback) {
  var images = elm.querySelectorAll('img');
  var length = images.length;

  if (length) {
    var count = 0;
    each(images, function (img) {
      img.onload = img.onerror = function () {
        if (++count === length) {
          callback();
        }
      };
    });
  } else {
    // Trigger the callback immediately if there is no image.
    callback();
  }
}
;// CONCATENATED MODULE: ./src/js/constants/types.js
/**
 * Export slider types.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

/**
 * Normal slider.
 *
 * @type {string}
 */
var SLIDE = 'slide';
/**
 * Loop after the last slide and before the first one.
 *
 * @type {string}
 */

var LOOP = 'loop';
/**
 * The track doesn't move.
 *
 * @type {string}
 */

var FADE = 'fade';
;// CONCATENATED MODULE: ./src/js/transitions/slide/index.js
/**
 * The component for general slide effect transition.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */


/**
 * The component for general slide effect transition.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const slide = (function (Splide, Components) {
  /**
   * Hold the list element.
   *
   * @type {Element}
   */
  var list;
  /**
   * Hold the onEnd callback function.
   *
   * @type {function}
   */

  var endCallback;
  return {
    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      list = Components.Elements.list;
      Splide.on('transitionend', function (e) {
        if (e.target === list && endCallback) {
          endCallback();
        }
      }, list);
    },

    /**
     * Start transition.
     *
     * @param {number}   destIndex - Destination slide index that might be clone's.
     * @param {number}   newIndex  - New index.
     * @param {number}   prevIndex - Previous index.
     * @param {Object}   coord     - Destination coordinates.
     * @param {function} done      - Callback function must be invoked when transition is completed.
     */
    start: function start(destIndex, newIndex, prevIndex, coord, done) {
      var options = Splide.options;
      var edgeIndex = Components.Controller.edgeIndex;
      var speed = options.speed;
      endCallback = done;

      if (Splide.is(SLIDE)) {
        if (prevIndex === 0 && newIndex >= edgeIndex || prevIndex >= edgeIndex && newIndex === 0) {
          speed = options.rewindSpeed || speed;
        }
      }

      applyStyle(list, {
        transition: "transform " + speed + "ms " + options.easing,
        transform: "translate(" + coord.x + "px," + coord.y + "px)"
      });
    }
  };
});
;// CONCATENATED MODULE: ./src/js/transitions/fade/index.js
/**
 * The component for fade transition.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */


/**
 * The component for fade transition.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const fade = (function (Splide, Components) {
  var Fade = {
    /**
     * Called when the component is mounted.
     * Apply transition style to the first slide.
     */
    mount: function mount() {
      apply(Splide.index);
    },

    /**
     * Start transition.
     *
     * @param {number}    destIndex - Destination slide index that might be clone's.
     * @param {number}    newIndex  - New index.
     * @param {number}    prevIndex - Previous index.
     * @param {Object}    coord     - Destination coordinates.
     * @param {function}  done      - Callback function must be invoked when transition is completed.
     */
    start: function start(destIndex, newIndex, prevIndex, coord, done) {
      var track = Components.Elements.track;
      applyStyle(track, {
        height: unit(track.clientHeight)
      });
      apply(newIndex);
      setTimeout(function () {
        done();
        applyStyle(track, {
          height: ''
        });
      });
    }
  };
  /**
   * Apply transition style to the slide specified by the given index.
   *
   * @param {number} index - A slide index.
   */

  function apply(index) {
    var options = Splide.options;
    applyStyle(Components.Elements.slides[index], {
      transition: "opacity " + options.speed + "ms " + options.easing
    });
  }

  return Fade;
});
;// CONCATENATED MODULE: ./src/js/transitions/index.js
/**
 * Export transition components.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */


;// CONCATENATED MODULE: ./src/js/core/composer.js
/**
 * Provide a function for composing components.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */



/**
 * Compose components.
 *
 * @param {Splide}   Splide     - Splide instance.
 * @param {Object}   Components - Additional components.
 * @param {function} Transition - Change component for transition.
 *
 * @return {Object} - An object containing all components.
 */

function compose(Splide, Components, Transition) {
  var components = {};
  each(Components, function (Component, name) {
    components[name] = Component(Splide, components, name.toLowerCase());
  });

  if (!Transition) {
    Transition = Splide.is(FADE) ? fade : slide;
  }

  components.Transition = Transition(Splide, components);
  return components;
}
;// CONCATENATED MODULE: ./src/js/utils/error.js
/**
 * Utility functions for outputting logs.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

/**
 * Prefix of an error massage.
 *
 * @type {string}
 */
var MESSAGE_PREFIX = '[SPLIDE]';
/**
 * Display an error message on the browser console.
 *
 * @param {string} message - An error message.
 */

function error(message) {
  console.error(MESSAGE_PREFIX + " " + message);
}
/**
 * Check existence of the given object and throw an error if it doesn't.
 *
 * @throws {Error}
 *
 * @param {*}      subject - A subject to be confirmed.
 * @param {string} message - An error message.
 */

function exist(subject, message) {
  if (!subject) {
    throw new Error(message);
  }
}
;// CONCATENATED MODULE: ./src/js/constants/classes.js
/**
 * Export class names.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

/**
 * A root class name.
 *
 * @type {string}
 */
var ROOT = 'splide';
/**
 * The definition table of all classes for elements.
 * They might be modified by options.
 *
 * @type {Object}
 */

var ELEMENT_CLASSES = {
  root: ROOT,
  slider: ROOT + "__slider",
  track: ROOT + "__track",
  list: ROOT + "__list",
  slide: ROOT + "__slide",
  container: ROOT + "__slide__container",
  arrows: ROOT + "__arrows",
  arrow: ROOT + "__arrow",
  prev: ROOT + "__arrow--prev",
  next: ROOT + "__arrow--next",
  pagination: ROOT + "__pagination",
  page: ROOT + "__pagination__page",
  clone: ROOT + "__slide--clone",
  progress: ROOT + "__progress",
  bar: ROOT + "__progress__bar",
  autoplay: ROOT + "__autoplay",
  play: ROOT + "__play",
  pause: ROOT + "__pause",
  spinner: ROOT + "__spinner",
  sr: ROOT + "__sr"
};
/**
 * Definitions of status classes.
 *
 * @type {Object}
 */

var STATUS_CLASSES = {
  active: 'is-active',
  visible: 'is-visible',
  loading: 'is-loading'
};
;// CONCATENATED MODULE: ./src/js/constants/i18n.js
/**
 * Export i18n texts as object.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

/**
 * Texts for i18n.
 *
 * @type {Object}
 */
var I18N = {
  prev: 'Previous slide',
  next: 'Next slide',
  first: 'Go to first slide',
  last: 'Go to last slide',
  slideX: 'Go to slide %s',
  pageX: 'Go to page %s',
  play: 'Start autoplay',
  pause: 'Pause autoplay'
};
;// CONCATENATED MODULE: ./src/js/constants/defaults.js
/**
 * Export default options.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */


var DEFAULTS = {
  /**
   * Determine a slider type.
   * - 'slide': Regular slider.
   * - 'loop' : Carousel slider.
   * - 'fade' : Change slides with fade transition. perPage, drag options are ignored.
   *
   * @type {string}
   */
  type: 'slide',

  /**
   * Whether to rewind a slider before the first slide or after the last one.
   * In "loop" mode, this option is ignored.
   *
   * @type {boolean}
   */
  rewind: false,

  /**
   * Transition speed in milliseconds.
   *
   * @type {number}
   */
  speed: 400,

  /**
   * Transition speed on rewind in milliseconds.
   *
   * @type {number}
   */
  rewindSpeed: 0,

  /**
   * Whether to prevent any actions while a slider is transitioning.
   * If false, navigation, drag and swipe work while the slider is running.
   * Even so, it will be forced to wait for transition in some cases in the loop mode to shift a slider.
   *
   * @type {boolean}
   */
  waitForTransition: true,

  /**
   * Define slider max width.
   *
   * @type {number}
   */
  width: 0,

  /**
   * Define slider height.
   *
   * @type {number}
   */
  height: 0,

  /**
   * Fix width of slides. CSS format is allowed such as 10em, 80% or 80vw.
   * perPage number will be ignored when this option is falsy.
   *
   * @type {number|string}
   */
  fixedWidth: 0,

  /**
   * Fix height of slides. CSS format is allowed such as 10em, 80vh but % unit is not accepted.
   * heightRatio option will be ignored when this option is falsy.
   *
   * @type {number|string}
   */
  fixedHeight: 0,

  /**
   * Determine height of slides by ratio to a slider width.
   * This will be ignored when the fixedHeight is provided.
   *
   * @type {number}
   */
  heightRatio: 0,

  /**
   * If true, slide width will be determined by the element width itself.
   * - perPage/perMove should be 1.
   *
   * @type {boolean}
   */
  autoWidth: false,

  /**
   * If true, slide height will be determined by the element width itself.
   * - perPage/perMove should be 1.
   *
   * @type {boolean}
   */
  autoHeight: false,

  /**
   * Determine how many slides should be displayed per page.
   *
   * @type {number}
   */
  perPage: 1,

  /**
   * Determine how many slides should be moved when a slider goes to next or perv.
   *
   * @type {number}
   */
  perMove: 0,

  /**
   * Determine manually how many clones should be generated on the left and right side.
   * The total number of clones will be twice of this number.
   *
   * @type {number}
   */
  clones: 0,

  /**
   * Start index.
   *
   * @type {number}
   */
  start: 0,

  /**
   * Determine which slide should be focused if there are multiple slides in a page.
   * A string "center" is acceptable for centering slides.
   *
   * @type {boolean|number|string}
   */
  focus: false,

  /**
   * Gap between slides. CSS format is allowed such as 1em.
   *
   * @type {number|string}
   */
  gap: 0,

  /**
   * Set padding-left/right in horizontal mode or padding-top/bottom in vertical one.
   * Give a single value to set a same size for both sides or
   * do an object for different sizes.
   * Also, CSS format is allowed such as 1em.
   *
   * @example
   * - 10: Number
   * - '1em': CSS format.
   * - { left: 0, right: 20 }: Object for different sizes in horizontal mode.
   * - { top: 0, bottom: 20 }: Object for different sizes in vertical mode.
   *
   * @type {number|string|Object}
   */
  padding: 0,

  /**
   * Whether to append arrows.
   *
   * @type {boolean}
   */
  arrows: true,

  /**
   * Change the arrow SVG path like 'm7.61 0.807-2.12...'.
   *
   * @type {string}
   */
  arrowPath: '',

  /**
   * Whether to append pagination(indicator dots) or not.
   *
   * @type {boolean}
   */
  pagination: true,

  /**
   * Activate autoplay.
   *
   * @type {boolean}
   */
  autoplay: false,

  /**
   * Autoplay interval in milliseconds.
   *
   * @type {number}
   */
  interval: 5000,

  /**
   * Whether to stop autoplay when a slider is hovered.
   *
   * @type {boolean}
   */
  pauseOnHover: true,

  /**
   * Whether to stop autoplay when a slider elements are focused.
   * True is recommended for accessibility.
   *
   * @type {boolean}
   */
  pauseOnFocus: true,

  /**
   * Whether to reset progress of the autoplay timer when resumed.
   *
   * @type {boolean}
   */
  resetProgress: true,

  /**
   * Loading images lazily.
   * Image src must be provided by a data-splide-lazy attribute.
   *
   * - false: Do nothing.
   * - 'nearby': Only images around an active slide will be loaded.
   * - 'sequential': All images will be sequentially loaded.
   *
   * @type {boolean|string}
   */
  lazyLoad: false,

  /**
   * This option works only when a lazyLoad option is "nearby".
   * Determine how many pages(not slides) around an active slide should be loaded beforehand.
   *
   * @type {number}
   */
  preloadPages: 1,

  /**
   * Easing for CSS transition. For example, linear, ease or cubic-bezier().
   *
   * @type {string}
   */
  easing: 'cubic-bezier(.42,.65,.27,.99)',

  /**
   * Whether to enable keyboard shortcuts
   * - true or 'global': Listen to keydown event of the document.
   * - 'focused': Listen to the keydown event of the slider root element. tabindex="0" will be added to the element.
   * - false: Disable keyboard shortcuts.
   *
   * @type {boolean|string}
   */
  keyboard: 'global',

  /**
   * Whether to allow mouse drag and touch swipe.
   *
   * @type {boolean}
   */
  drag: true,

  /**
   * The angle threshold for drag.
   * The slider starts moving only when the drag angle is less than this threshold.
   *
   * @type {number}
   */
  dragAngleThreshold: 30,

  /**
   * Distance threshold for determining if the action is "flick" or "swipe".
   * When a drag distance is over this value, the action will be treated as "swipe", not "flick".
   *
   * @type {number}
   */
  swipeDistanceThreshold: 150,

  /**
   * Velocity threshold for determining if the action is "flick" or "swipe".
   * Around 0.5 is recommended.
   *
   * @type {number}
   */
  flickVelocityThreshold: .6,

  /**
   * Determine power of flick. The larger number this is, the farther a slider runs by flick.
   * Around 500 is recommended.
   *
   * @type {number}
   */
  flickPower: 600,

  /**
   * Limit a number of pages to move by flick.
   *
   * @type {number}
   */
  flickMaxPages: 1,

  /**
   * Slider direction.
   * - 'ltr': Left to right.
   * - 'rtl': Right to left.
   * - 'ttb': Top to bottom.
   *
   * @type {string}
   */
  direction: 'ltr',

  /**
   * Set img src to background-image of its parent element.
   * Images with various sizes can be displayed as same dimension without cropping work.
   * fixedHeight or heightRatio is required.
   *
   * @type {boolean}
   */
  cover: false,

  /**
   * Whether to enable accessibility(aria and screen reader texts) or not.
   *
   * @type {boolean}
   */
  accessibility: true,

  /**
   * Whether to add tabindex="0" to visible slides or not.
   *
   * @type {boolean}
   */
  slideFocus: true,

  /**
   * Determine if a slider is navigation for another.
   * Use "sync" API to synchronize two sliders.
   *
   * @type {boolean}
   */
  isNavigation: false,

  /**
   * Whether to trim spaces before the fist slide or after the last one when "focus" is not 0.
   *
   * @type {boolean}
   */
  trimSpace: true,

  /**
   * The "is-active" class is added after transition as default.
   * If true, it will be added before move.
   *
   * @type {boolean}
   */
  updateOnMove: false,

  /**
   * Throttle duration in milliseconds for the resize event.
   *
   * @type {number}
   */
  throttle: 100,

  /**
   * Whether to destroy a slider or not.
   *
   * @type {boolean}
   */
  destroy: false,

  /**
   * Options for specific breakpoints.
   *
   * @example
   * {
   *   1000: {
   *     perPage: 3,
   *     gap: 20
   *   },
   *   600: {
   *     perPage: 1,
   *     gap: 5,
   *   }
   * }
   *
   * @type {boolean|Object}
   */
  breakpoints: false,

  /**
   * Collection of class names.
   *
   * @see ./classes.js
   *
   * @type {Object}
   */
  classes: ELEMENT_CLASSES,

  /**
   * Collection of i18n texts.
   *
   * @see ./i18n.js
   *
   * @type {Object}
   */
  i18n: I18N
};
;// CONCATENATED MODULE: ./src/js/constants/states.js
/**
 * Export state constants.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

/**
 * Splide has been just created.
 *
 * @type {number}
 */
var CREATED = 1;
/**
 * All components have been mounted and initialized.
 *
 * @type {number}
 */

var MOUNTED = 2;
/**
 * Splide is ready for transition.
 *
 * @type {number}
 */

var IDLE = 3;
/**
 * Splide is moving.
 *
 * @type {number}
 */

var MOVING = 4;
/**
 * Splide is moving.
 *
 * @type {number}
 */

var DESTROYED = 5;
;// CONCATENATED MODULE: ./src/js/splide.js
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The main class for applying Splide to an element.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */








/**
 * The main class for applying Splide to an element,
 * providing some APIs to control the behavior.
 */

var Splide = /*#__PURE__*/function () {
  /**
   * Splide constructor.
   *
   * @throws {Error} When the given root element or selector is invalid.
   *
   * @param {Element|string}  root       - A selector for a root element or an element itself.
   * @param {Object}          options    - Optional. Options to change default behaviour.
   * @param {Object}          Components - Optional. Components.
   */
  function Splide(root, options, Components) {
    if (options === void 0) {
      options = {};
    }

    if (Components === void 0) {
      Components = {};
    }

    this.root = root instanceof Element ? root : document.querySelector(root);
    exist(this.root, 'An invalid element/selector was given.');
    this.Components = null;
    this.Event = core_event();
    this.State = state(CREATED);
    this.STATES = states_namespaceObject;
    this._o = merge(DEFAULTS, options);
    this._i = 0;
    this._c = Components;
    this._e = {}; // Extensions

    this._t = null; // Transition
  }
  /**
   * Compose and mount components.
   *
   * @param {Object}   Extensions - Optional. Additional components.
   * @param {function} Transition - Optional. Set a custom transition component.
   *
   * @return {Splide|undefined} - This instance or undefined if an exception occurred.
   */


  var _proto = Splide.prototype;

  _proto.mount = function mount(Extensions, Transition) {
    var _this = this;

    if (Extensions === void 0) {
      Extensions = this._e;
    }

    if (Transition === void 0) {
      Transition = this._t;
    }

    // Reset the state.
    this.State.set(CREATED);
    this._e = Extensions;
    this._t = Transition;
    this.Components = compose(this, merge(this._c, Extensions), Transition);

    try {
      each(this.Components, function (component, key) {
        var required = component.required;

        if (required === undefined || required) {
          component.mount && component.mount();
        } else {
          delete _this.Components[key];
        }
      });
    } catch (e) {
      error(e.message);
      return;
    }

    var State = this.State;
    State.set(MOUNTED);
    each(this.Components, function (component) {
      component.mounted && component.mounted();
    });
    this.emit('mounted');
    State.set(IDLE);
    this.emit('ready');
    applyStyle(this.root, {
      visibility: 'visible'
    });
    this.on('move drag', function () {
      return State.set(MOVING);
    }).on('moved dragged', function () {
      return State.set(IDLE);
    });
    return this;
  }
  /**
   * Set sync target.
   *
   * @param {Splide} splide - A Splide instance.
   *
   * @return {Splide} - This instance.
   */
  ;

  _proto.sync = function sync(splide) {
    this.sibling = splide;
    return this;
  }
  /**
   * Register callback fired on the given event(s).
   *
   * @param {string}   events  - An event name. Use space to separate multiple events.
   *                             Also, namespace is accepted by dot, such as 'resize.{namespace}'.
   * @param {function} handler - A callback function.
   * @param {Element}  elm     - Optional. Native event will be listened to when this arg is provided.
   * @param {Object}   options - Optional. Options for addEventListener.
   *
   * @return {Splide} - This instance.
   */
  ;

  _proto.on = function on(events, handler, elm, options) {
    if (elm === void 0) {
      elm = null;
    }

    if (options === void 0) {
      options = {};
    }

    this.Event.on(events, handler, elm, options);
    return this;
  }
  /**
   * Unsubscribe the given event.
   *
   * @param {string}  events - A event name.
   * @param {Element} elm    - Optional. removeEventListener() will be called when this arg is provided.
   *
   * @return {Splide} - This instance.
   */
  ;

  _proto.off = function off(events, elm) {
    if (elm === void 0) {
      elm = null;
    }

    this.Event.off(events, elm);
    return this;
  }
  /**
   * Emit an event.
   *
   * @param {string} event - An event name.
   * @param {*}      args  - Any number of arguments passed to handlers.
   */
  ;

  _proto.emit = function emit(event) {
    var _this$Event;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    (_this$Event = this.Event).emit.apply(_this$Event, [event].concat(args));

    return this;
  }
  /**
   * Go to the slide specified by the given control.
   *
   * @param {string|number} control - A control pattern.
   * @param {boolean}       wait    - Optional. Whether to wait for transition.
   */
  ;

  _proto.go = function go(control, wait) {
    if (wait === void 0) {
      wait = this.options.waitForTransition;
    }

    if (this.State.is(IDLE) || this.State.is(MOVING) && !wait) {
      this.Components.Controller.go(control, false);
    }

    return this;
  }
  /**
   * Verify whether the slider type is the given one or not.
   *
   * @param {string} type - A slider type.
   *
   * @return {boolean} - True if the slider type is the provided type or false if not.
   */
  ;

  _proto.is = function is(type) {
    return type === this._o.type;
  }
  /**
   * Insert a slide.
   *
   * @param {Element|string} slide - A slide element to be added.
   * @param {number}         index - A slide will be added at the position.
   */
  ;

  _proto.add = function add(slide, index) {
    if (index === void 0) {
      index = -1;
    }

    this.Components.Elements.add(slide, index, this.refresh.bind(this));
    return this;
  }
  /**
   * Remove the slide designated by the index.
   *
   * @param {number} index - A slide index.
   */
  ;

  _proto.remove = function remove(index) {
    this.Components.Elements.remove(index);
    this.refresh();
    return this;
  }
  /**
   * Destroy all Slide objects and clones and recreate them again.
   */
  ;

  _proto.refresh = function refresh() {
    this.emit('refresh:before').emit('refresh').emit('resize');
    return this;
  }
  /**
   * Destroy the Splide.
   * "Completely" boolean is mainly for breakpoints.
   *
   * @param {boolean} completely - Destroy completely.
   */
  ;

  _proto.destroy = function destroy(completely) {
    var _this2 = this;

    if (completely === void 0) {
      completely = true;
    }

    // Postpone destroy because it should be done after mount.
    if (this.State.is(CREATED)) {
      this.on('ready', function () {
        return _this2.destroy(completely);
      });
      return;
    }

    values(this.Components).reverse().forEach(function (component) {
      component.destroy && component.destroy(completely);
    });
    this.emit('destroy', completely); // Destroy all event handlers, including ones for native events.

    this.Event.destroy();
    this.State.set(DESTROYED);
    return this;
  }
  /**
   * Return the current slide index.
   *
   * @return {number} - The current slide index.
   // */
  ;

  _createClass(Splide, [{
    key: "index",
    get: function get() {
      return this._i;
    }
    /**
     * Set the current slide index.
     *
     * @param {number|string} index - A new index.
     */
    ,
    set: function set(index) {
      this._i = parseInt(index);
    }
    /**
     * Return length of slides.
     * This is an alias of Elements.length.
     *
     * @return {number} - A number of slides.
     */

  }, {
    key: "length",
    get: function get() {
      return this.Components.Elements.length;
    }
    /**
     * Return options.
     *
     * @return {Object} - Options object.
     */

  }, {
    key: "options",
    get: function get() {
      return this._o;
    }
    /**
     * Set options with merging the given object to the current one.
     *
     * @param {Object} options - New options.
     */
    ,
    set: function set(options) {
      var created = this.State.is(CREATED);

      if (!created) {
        this.emit('update');
      }

      this._o = merge(this._o, options);

      if (!created) {
        this.emit('updated', this._o);
      }
    }
    /**
     * Return the class list.
     * This is an alias of Splide.options.classList.
     *
     * @return {Object} - An object containing all class list.
     */

  }, {
    key: "classes",
    get: function get() {
      return this._o.classes;
    }
    /**
     * Return the i18n strings.
     * This is an alias of Splide.options.i18n.
     *
     * @return {Object} - An object containing all i18n strings.
     */

  }, {
    key: "i18n",
    get: function get() {
      return this._o.i18n;
    }
  }]);

  return Splide;
}();


;// CONCATENATED MODULE: ./src/js/components/options/index.js
/**
 * The component for initializing options.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */



/**
 * The component for initializing options.
 *
 * @param {Splide} Splide - A Splide instance.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const options = (function (Splide) {
  /**
   * Retrieve options from the data attribute.
   * Note that IE10 doesn't support dataset property.
   *
   * @type {string}
   */
  var options = getAttribute(Splide.root, 'data-splide');

  if (options) {
    try {
      Splide.options = JSON.parse(options);
    } catch (e) {
      error(e.message);
    }
  }

  return {
    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      if (Splide.State.is(CREATED)) {
        Splide.index = Splide.options.start;
      }
    }
  };
});
;// CONCATENATED MODULE: ./src/js/constants/directions.js
/**
 * Export layout modes.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

/**
 * Enumerate slides from left to right.
 *
 * @type {string}
 */
var LTR = 'ltr';
/**
 * Enumerate slides from right to left.
 *
 * @type {string}
 */

var RTL = 'rtl';
/**
 * Enumerate slides in a col.
 *
 * @type {string}
 */

var TTB = 'ttb';
;// CONCATENATED MODULE: ./src/js/components/elements/slide.js
/**
 * The sub component for handling each slide.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */






/**
 * Events for restoring original styles.
 *
 * @type {string}
 */

var STYLE_RESTORE_EVENTS = 'update.slide';
/**
 * The sub component for handling each slide.
 *
 * @param {Splide}  Splide    - A Splide instance.
 * @param {number}  index     - An unique slide index.
 * @param {number}  realIndex - Clones should pass a real slide index.
 * @param {Element} slide     - A slide element.
 *
 * @return {Object} - The sub component object.
 */

/* harmony default export */ const elements_slide = (function (Splide, index, realIndex, slide) {
  /**
   * Whether to update "is-active" class before or after transition.
   *
   * @type {boolean}
   */
  var updateOnMove = Splide.options.updateOnMove;
  /**
   * Events when the slide status is updated.
   * Append a namespace to remove listeners later.
   *
   * @type {string}
   */

  var STATUS_UPDATE_EVENTS = 'ready.slide updated.slide resized.slide moved.slide' + (updateOnMove ? ' move.slide' : '');
  /**
   * Slide sub component object.
   *
   * @type {Object}
   */

  var Slide = {
    /**
     * Slide element.
     *
     * @type {Element}
     */
    slide: slide,

    /**
     * Slide index.
     *
     * @type {number}
     */
    index: index,

    /**
     * Real index for clones.
     *
     * @type {number}
     */
    realIndex: realIndex,

    /**
     * Container element if available.
     *
     * @type {Element|undefined}
     */
    container: child(slide, Splide.classes.container),

    /**
     * Whether this is a cloned slide or not.
     *
     * @type {boolean}
     */
    isClone: realIndex > -1,

    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      var _this = this;

      if (!this.isClone) {
        slide.id = Splide.root.id + "-slide" + pad(index + 1);
      }

      Splide.on(STATUS_UPDATE_EVENTS, function () {
        return _this.update();
      }).on(STYLE_RESTORE_EVENTS, restoreStyles).on('click', function () {
        return Splide.emit('click', _this);
      }, slide);
      /*
       * Add "is-active" class to a clone element temporarily
       * and it will be removed on "moved" event.
       */

      if (updateOnMove) {
        Splide.on('move.slide', function (newIndex) {
          if (newIndex === realIndex) {
            _update(true, false);
          }
        });
      } // Make sure the slide is shown.


      applyStyle(slide, {
        display: ''
      }); // Hold the original styles.

      this.styles = getAttribute(slide, 'style') || '';
    },

    /**
     * Destroy.
     */
    destroy: function destroy() {
      Splide.off(STATUS_UPDATE_EVENTS).off(STYLE_RESTORE_EVENTS).off('click', slide);
      removeClass(slide, values(STATUS_CLASSES));
      restoreStyles();
      removeAttribute(this.container, 'style');
    },

    /**
     * Update active and visible status.
     */
    update: function update() {
      _update(this.isActive(), false);

      _update(this.isVisible(), true);
    },

    /**
     * Check whether this slide is active or not.
     *
     * @return {boolean} - True if the slide is active or false if not.
     */
    isActive: function isActive() {
      return Splide.index === index;
    },

    /**
     * Check whether this slide is visible in the viewport or not.
     *
     * @return {boolean} - True if the slide is visible or false if not.
     */
    isVisible: function isVisible() {
      var active = this.isActive();

      if (Splide.is(FADE) || active) {
        return active;
      }

      var ceil = Math.ceil;
      var trackRect = getRect(Splide.Components.Elements.track);
      var slideRect = getRect(slide);

      if (Splide.options.direction === TTB) {
        return trackRect.top <= slideRect.top && slideRect.bottom <= ceil(trackRect.bottom);
      }

      return trackRect.left <= slideRect.left && slideRect.right <= ceil(trackRect.right);
    },

    /**
     * Calculate how far this slide is from another slide and
     * return true if the distance is within the given number.
     *
     * @param {number} from   - Index of a target slide.
     * @param {number} within - True if the slide is within this number.
     *
     * @return {boolean} - True if the slide is within the number or false otherwise.
     */
    isWithin: function isWithin(from, within) {
      var diff = Math.abs(from - index);

      if (!Splide.is(SLIDE) && !this.isClone) {
        diff = Math.min(diff, Splide.length - diff);
      }

      return diff < within;
    }
  };
  /**
   * Update classes for activity or visibility.
   *
   * @param {boolean} active        - Is active/visible or not.
   * @param {boolean} forVisibility - Toggle classes for activity or visibility.
   */

  function _update(active, forVisibility) {
    var type = forVisibility ? 'visible' : 'active';
    var className = STATUS_CLASSES[type];

    if (active) {
      addClass(slide, className);
      Splide.emit("" + type, Slide);
    } else {
      if (hasClass(slide, className)) {
        removeClass(slide, className);
        Splide.emit("" + (forVisibility ? 'hidden' : 'inactive'), Slide);
      }
    }
  }
  /**
   * Restore the original styles.
   */


  function restoreStyles() {
    setAttribute(slide, 'style', Slide.styles);
  }

  return Slide;
});
;// CONCATENATED MODULE: ./src/js/components/elements/index.js
/**
 * The component for main elements.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */





/**
 * The property name for UID stored in a window object.
 *
 * @type {string}
 */

var UID_NAME = 'uid';
/**
 * The component for main elements.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const components_elements = (function (Splide, Components) {
  /**
   * Hold the root element.
   *
   * @type {Element}
   */
  var root = Splide.root;
  /**
   * Hold the class list.
   *
   * @type {Object}
   */

  var classes = Splide.classes;
  /**
   * Store Slide objects.
   *
   * @type {Array}
   */

  var Slides = [];
  /*
   * Assign unique ID to the root element if it doesn't have the one.
   * Note that IE doesn't support padStart() to fill the uid by 0.
   */

  if (!root.id) {
    window.splide = window.splide || {};
    var uid = window.splide[UID_NAME] || 0;
    window.splide[UID_NAME] = ++uid;
    root.id = "splide" + pad(uid);
  }
  /**
   * Elements component object.
   *
   * @type {Object}
   */


  var Elements = {
    /**
     * Called when the component is mounted.
     * Collect main elements and store them as member properties.
     */
    mount: function mount() {
      var _this = this;

      this.init();
      Splide.on('refresh', function () {
        _this.destroy();

        _this.init();
      }).on('updated', function () {
        removeClass(root, getClasses());
        addClass(root, getClasses());
      });
    },

    /**
     * Destroy.
     */
    destroy: function destroy() {
      Slides.forEach(function (Slide) {
        Slide.destroy();
      });
      Slides = [];
      removeClass(root, getClasses());
    },

    /**
     * Initialization.
     */
    init: function init() {
      var _this2 = this;

      collect();
      addClass(root, getClasses());
      this.slides.forEach(function (slide, index) {
        _this2.register(slide, index, -1);
      });
    },

    /**
     * Register a slide to create a Slide object and handle its behavior.
     *
     * @param {Element} slide     - A slide element.
     * @param {number}  index     - A unique index. This can be negative.
     * @param {number}  realIndex - A real index for clones. Set -1 for real slides.
     */
    register: function register(slide, index, realIndex) {
      var SlideObject = elements_slide(Splide, index, realIndex, slide);
      SlideObject.mount();
      Slides.push(SlideObject);
    },

    /**
     * Return the Slide object designated by the index.
     * Note that "find" is not supported by IE.
     *
     * @return {Object|undefined} - A Slide object if available. Undefined if not.
     */
    getSlide: function getSlide(index) {
      return Slides.filter(function (Slide) {
        return Slide.index === index;
      })[0];
    },

    /**
     * Return all Slide objects.
     *
     * @param {boolean} includeClones - Whether to include cloned slides or not.
     *
     * @return {Object[]} - Slide objects.
     */
    getSlides: function getSlides(includeClones) {
      return includeClones ? Slides : Slides.filter(function (Slide) {
        return !Slide.isClone;
      });
    },

    /**
     * Return Slide objects belonging to the given page.
     *
     * @param {number} page - A page number.
     *
     * @return {Object[]} - An array containing Slide objects.
     */
    getSlidesByPage: function getSlidesByPage(page) {
      var idx = Components.Controller.toIndex(page);
      var options = Splide.options;
      var max = options.focus !== false ? 1 : options.perPage;
      return Slides.filter(function (_ref) {
        var index = _ref.index;
        return idx <= index && index < idx + max;
      });
    },

    /**
     * Insert a slide to a slider.
     * Need to refresh Splide after adding a slide.
     *
     * @param {Node|string} slide    - A slide element to be added.
     * @param {number}      index    - A slide will be added at the position.
     * @param {Function}    callback - Called right after the slide is added to the DOM tree.
     */
    add: function add(slide, index, callback) {
      if (typeof slide === 'string') {
        slide = domify(slide);
      }

      if (slide instanceof Element) {
        var ref = this.slides[index]; // This will be removed in mount() of a Slide component.

        applyStyle(slide, {
          display: 'none'
        });

        if (ref) {
          before(slide, ref);
          this.slides.splice(index, 0, slide);
        } else {
          append(this.list, slide);
          this.slides.push(slide);
        }

        loaded(slide, function () {
          callback && callback(slide);
        });
      }
    },

    /**
     * Remove a slide from a slider.
     * Need to refresh Splide after removing a slide.
     *
     * @param index - Slide index.
     */
    remove: function remove(index) {
      dom_remove(this.slides.splice(index, 1)[0]);
    },

    /**
     * Trigger the provided callback for each Slide object.
     *
     * @param {Function} callback - A callback function. The first argument will be the Slide object.
     */
    each: function each(callback) {
      Slides.forEach(callback);
    },

    /**
     * Return slides length without clones.
     *
     * @return {number} - Slide length.
     */
    get length() {
      return this.slides.length;
    },

    /**
     * Return "SlideObjects" length including clones.
     *
     * @return {number} - Slide length including clones.
     */
    get total() {
      return Slides.length;
    }

  };
  /**
   * Collect elements.
   */

  function collect() {
    Elements.slider = child(root, classes.slider);
    Elements.track = find(root, "." + classes.track);
    Elements.list = child(Elements.track, classes.list);
    exist(Elements.track && Elements.list, 'Track or list was not found.');
    Elements.slides = children(Elements.list, classes.slide);
    var arrows = findParts(classes.arrows);
    Elements.arrows = {
      prev: find(arrows, "." + classes.prev),
      next: find(arrows, "." + classes.next)
    };
    var autoplay = findParts(classes.autoplay);
    Elements.bar = find(findParts(classes.progress), "." + classes.bar);
    Elements.play = find(autoplay, "." + classes.play);
    Elements.pause = find(autoplay, "." + classes.pause);
    Elements.track.id = Elements.track.id || root.id + "-track";
    Elements.list.id = Elements.list.id || root.id + "-list";
  }
  /**
   * Return class names for the root element.
   */


  function getClasses() {
    var rootClass = classes.root;
    var options = Splide.options;
    return [rootClass + "--" + options.type, rootClass + "--" + options.direction, options.drag ? rootClass + "--draggable" : '', options.isNavigation ? rootClass + "--nav" : '', STATUS_CLASSES.active];
  }
  /**
   * Find parts only from children of the root or track.
   *
   * @return {Element} - A found element or undefined.
   */


  function findParts(className) {
    return child(root, className) || child(Elements.slider, className);
  }

  return Elements;
});
;// CONCATENATED MODULE: ./src/js/components/controller/index.js
/**
 * The component for controlling the track.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */



var floor = Math.floor;
/**
 * The component for controlling the track.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const controller = (function (Splide, Components) {
  /**
   * Store current options.
   *
   * @type {Object}
   */
  var options;
  /**
   * True if the slide is LOOP mode.
   *
   * @type {boolean}
   */

  var isLoop;
  /**
   * Controller component object.
   *
   * @type {Object}
   */

  var Controller = {
    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      options = Splide.options;
      isLoop = Splide.is(LOOP);
      bind();
    },

    /**
     * Make track run by the given control.
     * - "+{i}" : Increment the slide index by i.
     * - "-{i}" : Decrement the slide index by i.
     * - "{i}"  : Go to the slide whose index is i.
     * - ">"    : Go to next page.
     * - "<"    : Go to prev page.
     * - ">{i}" : Go to page i.
     *
     * @param {string|number} control  - A control pattern.
     * @param {boolean}       silently - Go to the destination without event emission.
     */
    go: function go(control, silently) {
      var destIndex = this.trim(this.parse(control));
      Components.Track.go(destIndex, this.rewind(destIndex), silently);
    },

    /**
     * Parse the given control and return the destination index for the track.
     *
     * @param {string} control - A control target pattern.
     *
     * @return {number} - A parsed target.
     */
    parse: function parse(control) {
      var index = Splide.index;
      var matches = String(control).match(/([+\-<>]+)(\d+)?/);
      var indicator = matches ? matches[1] : '';
      var number = matches ? parseInt(matches[2]) : 0;

      switch (indicator) {
        case '+':
          index += number || 1;
          break;

        case '-':
          index -= number || 1;
          break;

        case '>':
        case '<':
          index = parsePage(number, index, indicator === '<');
          break;

        default:
          index = parseInt(control);
      }

      return index;
    },

    /**
     * Compute index from the given page number.
     *
     * @param {number} page - Page number.
     *
     * @return {number} - A computed page number.
     */
    toIndex: function toIndex(page) {
      if (hasFocus()) {
        return page;
      }

      var length = Splide.length;
      var perPage = options.perPage;
      var index = page * perPage;
      index = index - (this.pageLength * perPage - length) * floor(index / length); // Adjustment for the last page.

      if (length - perPage <= index && index < length) {
        index = length - perPage;
      }

      return index;
    },

    /**
     * Compute page number from the given slide index.
     *
     * @param {number} index - Slide index.
     *
     * @return {number} - A computed page number.
     */
    toPage: function toPage(index) {
      if (hasFocus()) {
        return index;
      }

      var length = Splide.length;
      var perPage = options.perPage; // Make the last "perPage" number of slides belong to the last page.

      if (length - perPage <= index && index < length) {
        return floor((length - 1) / perPage);
      }

      return floor(index / perPage);
    },

    /**
     * Trim the given index according to the current mode.
     * Index being returned could be less than 0 or greater than the length in Loop mode.
     *
     * @param {number} index - An index being trimmed.
     *
     * @return {number} - A trimmed index.
     */
    trim: function trim(index) {
      if (!isLoop) {
        index = options.rewind ? this.rewind(index) : between(index, 0, this.edgeIndex);
      }

      return index;
    },

    /**
     * Rewind the given index if it's out of range.
     *
     * @param {number} index - An index.
     *
     * @return {number} - A rewound index.
     */
    rewind: function rewind(index) {
      var edge = this.edgeIndex;

      if (isLoop) {
        while (index > edge) {
          index -= edge + 1;
        }

        while (index < 0) {
          index += edge + 1;
        }
      } else {
        if (index > edge) {
          index = 0;
        } else if (index < 0) {
          index = edge;
        }
      }

      return index;
    },

    /**
     * Check if the direction is "rtl" or not.
     *
     * @return {boolean} - True if "rtl" or false if not.
     */
    isRtl: function isRtl() {
      return options.direction === RTL;
    },

    /**
     * Return the page length.
     *
     * @return {number} - Max page number.
     */
    get pageLength() {
      var length = Splide.length;
      return hasFocus() ? length : Math.ceil(length / options.perPage);
    },

    /**
     * Return the edge index.
     *
     * @return {number} - Edge index.
     */
    get edgeIndex() {
      var length = Splide.length;

      if (!length) {
        return 0;
      }

      if (hasFocus() || options.isNavigation || isLoop) {
        return length - 1;
      }

      return length - options.perPage;
    },

    /**
     * Return the index of the previous slide.
     *
     * @return {number} - The index of the previous slide if available. -1 otherwise.
     */
    get prevIndex() {
      var prev = Splide.index - 1;

      if (isLoop || options.rewind) {
        prev = this.rewind(prev);
      }

      return prev > -1 ? prev : -1;
    },

    /**
     * Return the index of the next slide.
     *
     * @return {number} - The index of the next slide if available. -1 otherwise.
     */
    get nextIndex() {
      var next = Splide.index + 1;

      if (isLoop || options.rewind) {
        next = this.rewind(next);
      }

      return Splide.index < next && next <= this.edgeIndex || next === 0 ? next : -1;
    }

  };
  /**
   * Listen to some events.
   */

  function bind() {
    Splide.on('move', function (newIndex) {
      Splide.index = newIndex;
    }).on('updated refresh', function (newOptions) {
      options = newOptions || options;
      Splide.index = between(Splide.index, 0, Controller.edgeIndex);
    });
  }
  /**
   * Verify if the focus option is available or not.
   *
   * @return {boolean} - True if a slider has the focus option.
   */


  function hasFocus() {
    return options.focus !== false;
  }
  /**
   * Return the next or previous page index computed by the page number and current index.
   *
   * @param {number}  number - Specify the page number.
   * @param {number}  index  - Current index.
   * @param {boolean} prev   - Prev or next.
   *
   * @return {number} - Slide index.
   */


  function parsePage(number, index, prev) {
    if (number > -1) {
      return Controller.toIndex(number);
    }

    var perMove = options.perMove;
    var sign = prev ? -1 : 1;

    if (perMove) {
      return index + perMove * sign;
    }

    return Controller.toIndex(Controller.toPage(index) + sign);
  }

  return Controller;
});
;// CONCATENATED MODULE: ./src/js/components/track/index.js
/**
 * The component for moving list in the track.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */





var abs = Math.abs;
/**
 * The component for moving list in the track.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const track = (function (Splide, Components) {
  /**
   * Hold the Layout component.
   *
   * @type {Object}
   */
  var Layout;
  /**
   * Hold the Layout component.
   *
   * @type {Object}
   */

  var Elements;
  /**
   * Store the list element.
   *
   * @type {Element}
   */

  var list;
  /**
   * Whether the current direction is vertical or not.
   *
   * @type {boolean}
   */

  var isVertical = Splide.options.direction === TTB;
  /**
   * Whether the slider type is FADE or not.
   *
   * @type {boolean}
   */

  var isFade = Splide.is(FADE);
  /**
   * Whether the slider direction is RTL or not.
   *
   * @type {boolean}
   */

  var isRTL = Splide.options.direction === RTL;
  /**
   * This will be true while transitioning from the last index to the first one.
   *
   * @type {boolean}
   */

  var isLoopPending = false;
  /**
   * Sign for the direction. Only RTL mode uses the positive sign.
   *
   * @type {number}
   */

  var sign = isRTL ? 1 : -1;
  /**
   * Track component object.
   *
   * @type {Object}
   */

  var Track = {
    /**
     * Make public the sign defined locally.
     *
     * @type {number}
     */
    sign: sign,

    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      Elements = Components.Elements;
      Layout = Components.Layout;
      list = Elements.list;
    },

    /**
     * Called after the component is mounted.
     * The resize event must be registered after the Layout's one is done.
     */
    mounted: function mounted() {
      var _this = this;

      if (!isFade) {
        this.jump(0);
        Splide.on('mounted resize updated', function () {
          _this.jump(Splide.index);
        });
      }
    },

    /**
     * Go to the given destination index.
     * After arriving there, the track is jump to the new index without animation, mainly for loop mode.
     *
     * @param {number}  destIndex - A destination index.
     *                              This can be negative or greater than slides length for reaching clones.
     * @param {number}  newIndex  - An actual new index. They are always same in Slide and Rewind mode.
     * @param {boolean} silently  - If true, suppress emitting events.
     */
    go: function go(destIndex, newIndex, silently) {
      var newPosition = getTrimmedPosition(destIndex);
      var prevIndex = Splide.index; // Prevent any actions while transitioning from the last index to the first one for jump.

      if (Splide.State.is(MOVING) && isLoopPending) {
        return;
      }

      isLoopPending = destIndex !== newIndex;

      if (!silently) {
        Splide.emit('move', newIndex, prevIndex, destIndex);
      }

      if (Math.abs(newPosition - this.position) >= 1 || isFade) {
        Components.Transition.start(destIndex, newIndex, prevIndex, this.toCoord(newPosition), function () {
          onTransitionEnd(destIndex, newIndex, prevIndex, silently);
        });
      } else {
        if (destIndex !== prevIndex && Splide.options.trimSpace === 'move') {
          Components.Controller.go(destIndex + destIndex - prevIndex, silently);
        } else {
          onTransitionEnd(destIndex, newIndex, prevIndex, silently);
        }
      }
    },

    /**
     * Move the track to the specified index.
     *
     * @param {number} index - A destination index where the track jumps.
     */
    jump: function jump(index) {
      this.translate(getTrimmedPosition(index));
    },

    /**
     * Set the list position by CSS translate property.
     *
     * @param {number} position - A new position value.
     */
    translate: function translate(position) {
      applyStyle(list, {
        transform: "translate" + (isVertical ? 'Y' : 'X') + "(" + position + "px)"
      });
    },

    /**
     * Cancel the transition and set the list position.
     * Also, loop the slider if necessary.
     */
    cancel: function cancel() {
      if (Splide.is(LOOP)) {
        this.shift();
      } else {
        // Ensure the current position.
        this.translate(this.position);
      }

      applyStyle(list, {
        transition: ''
      });
    },

    /**
     * Shift the slider if it exceeds borders on the edge.
     */
    shift: function shift() {
      var position = abs(this.position);
      var left = abs(this.toPosition(0));
      var right = abs(this.toPosition(Splide.length));
      var innerSize = right - left;

      if (position < left) {
        position += innerSize;
      } else if (position > right) {
        position -= innerSize;
      }

      this.translate(sign * position);
    },

    /**
     * Trim redundant spaces on the left or right edge if necessary.
     *
     * @param {number} position - Position value to be trimmed.
     *
     * @return {number} - Trimmed position.
     */
    trim: function trim(position) {
      if (!Splide.options.trimSpace || Splide.is(LOOP)) {
        return position;
      }

      var edge = sign * (Layout.totalSize() - Layout.size - Layout.gap);
      return between(position, edge, 0);
    },

    /**
     * Calculate the closest slide index from the given position.
     *
     * @param {number} position - A position converted to an slide index.
     *
     * @return {number} - The closest slide index.
     */
    toIndex: function toIndex(position) {
      var _this2 = this;

      var index = 0;
      var minDistance = Infinity;
      Elements.getSlides(true).forEach(function (Slide) {
        var slideIndex = Slide.index;
        var distance = abs(_this2.toPosition(slideIndex) - position);

        if (distance < minDistance) {
          minDistance = distance;
          index = slideIndex;
        }
      });
      return index;
    },

    /**
     * Return coordinates object by the given position.
     *
     * @param {number} position - A position value.
     *
     * @return {Object} - A coordinates object.
     */
    toCoord: function toCoord(position) {
      return {
        x: isVertical ? 0 : position,
        y: isVertical ? position : 0
      };
    },

    /**
     * Calculate the track position by a slide index.
     *
     * @param {number} index - Slide index.
     *
     * @return {Object} - Calculated position.
     */
    toPosition: function toPosition(index) {
      var position = Layout.totalSize(index) - Layout.slideSize(index) - Layout.gap;
      return sign * (position + this.offset(index));
    },

    /**
     * Return the current offset value, considering direction.
     *
     * @return {number} - Offset amount.
     */
    offset: function offset(index) {
      var focus = Splide.options.focus;
      var slideSize = Layout.slideSize(index);

      if (focus === 'center') {
        return -(Layout.size - slideSize) / 2;
      }

      return -(parseInt(focus) || 0) * (slideSize + Layout.gap);
    },

    /**
     * Return the current position.
     * This returns the correct position even while transitioning by CSS.
     *
     * @return {number} - Current position.
     */
    get position() {
      var prop = isVertical ? 'top' : isRTL ? 'right' : 'left';
      return getRect(list)[prop] - (getRect(Elements.track)[prop] - Layout.padding[prop] * sign);
    }

  };
  /**
   * Called whenever slides arrive at a destination.
   *
   * @param {number}  destIndex - A destination index.
   * @param {number}  newIndex  - A new index.
   * @param {number}  prevIndex - A previous index.
   * @param {boolean} silently  - If true, suppress emitting events.
   */

  function onTransitionEnd(destIndex, newIndex, prevIndex, silently) {
    applyStyle(list, {
      transition: ''
    });
    isLoopPending = false;

    if (!isFade) {
      Track.jump(newIndex);
    }

    if (!silently) {
      Splide.emit('moved', newIndex, prevIndex, destIndex);
    }
  }
  /**
   * Convert index to the trimmed position.
   *
   * @return {number} - Trimmed position.
   */


  function getTrimmedPosition(index) {
    return Track.trim(Track.toPosition(index));
  }

  return Track;
});
;// CONCATENATED MODULE: ./src/js/components/clones/index.js
/**
 * The component for cloning some slides for "loop" mode of the track.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */




/**
 * The component for cloning some slides for "loop" mode of the track.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const clones = (function (Splide, Components) {
  /**
   * Store information of all clones.
   *
   * @type {Array}
   */
  var clones = [];
  /**
   * Store the current clone count on one side.
   *
   * @type {number}
   */

  var cloneCount = 0;
  /**
   * Keep Elements component.
   *
   * @type {Object}
   */

  var Elements = Components.Elements;
  /**
   * Clones component object.
   *
   * @type {Object}
   */

  var Clones = {
    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      var _this = this;

      if (Splide.is(LOOP)) {
        init();
        Splide.on('refresh:before', function () {
          _this.destroy();
        }).on('refresh', init).on('resize', function () {
          if (cloneCount !== getCloneCount()) {
            // Destroy before refresh not to collect clones by the Elements component.
            _this.destroy();

            Splide.refresh();
          }
        });
      }
    },

    /**
     * Destroy.
     */
    destroy: function destroy() {
      dom_remove(clones);
      clones = [];
    },

    /**
     * Return all clones.
     *
     * @return {Element[]} - Cloned elements.
     */
    get clones() {
      return clones;
    },

    /**
     * Return clone length.
     *
     * @return {number} - A length of clones.
     */
    get length() {
      return clones.length;
    }

  };
  /**
   * Initialization.
   */

  function init() {
    Clones.destroy();
    cloneCount = getCloneCount();
    generateClones(cloneCount);
  }
  /**
   * Generate and append/prepend clones.
   *
   * @param {number} count - The half number of clones.
   */


  function generateClones(count) {
    var length = Elements.length,
        register = Elements.register;

    if (length) {
      var slides = Elements.slides;

      while (slides.length < count) {
        slides = slides.concat(slides);
      } // Clones after the last element.


      slides.slice(0, count).forEach(function (elm, index) {
        var clone = cloneDeeply(elm);
        append(Elements.list, clone);
        clones.push(clone);
        register(clone, index + length, index % length);
      }); // Clones before the first element.

      slides.slice(-count).forEach(function (elm, index) {
        var clone = cloneDeeply(elm);
        before(clone, slides[0]);
        clones.push(clone);
        register(clone, index - count, (length + index - count % length) % length);
      });
    }
  }
  /**
   * Return half count of clones to be generated.
   * Clone count is determined by:
   * - "clones" value in the options.
   * - Number of slides that can be placed in a view in "fixed" mode.
   * - Max pages a flick action can move.
   * - Whether the slide length is enough for perPage.
   *
   * @return {number} - Count for clones.
   */


  function getCloneCount() {
    var options = Splide.options;

    if (options.clones) {
      return options.clones;
    } // Use the slide length in autoWidth mode because the number cannot be calculated.


    var baseCount = options.autoWidth || options.autoHeight ? Elements.length : options.perPage;
    var dimension = options.direction === TTB ? 'Height' : 'Width';
    var fixedSize = toPixel(Splide.root, options["fixed" + dimension]);

    if (fixedSize) {
      // Roughly calculate the count. This needs not to be strict.
      baseCount = Math.ceil(Elements.track["client" + dimension] / fixedSize);
    }

    return baseCount * (options.drag ? options.flickMaxPages + 1 : 1);
  }
  /**
   * Clone deeply the given element.
   *
   * @param {Element} elm - An element being duplicated.
   *
   * @return {Node} - A cloned node(element).
   */


  function cloneDeeply(elm) {
    var clone = elm.cloneNode(true);
    addClass(clone, Splide.classes.clone); // ID should not be duplicated.

    removeAttribute(clone, 'id');
    return clone;
  }

  return Clones;
});
;// CONCATENATED MODULE: ./src/js/components/layout/directions/horizontal.js
/**
 * The resolver component for horizontal layout.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */



/**
 * The resolver component for horizontal layout.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The resolver object.
 */

/* harmony default export */ const horizontal = (function (Splide, Components) {
  /**
   * Keep the Elements component.
   *
   * @type {string}
   */
  var Elements = Components.Elements;
  /**
   * Keep the root element.
   *
   * @type {Element}
   */

  var root = Splide.root;
  /**
   * Keep the track element.
   *
   * @type {Element}
   */

  var track;
  /**
   * Keep the latest options.
   *
   * @type {Element}
   */

  var options = Splide.options;
  return {
    /**
     * Margin property name.
     *
     * @type {string}
     */
    margin: 'margin' + (options.direction === RTL ? 'Left' : 'Right'),

    /**
     * Always 0 because the height will be determined by inner contents.
     *
     * @type {number}
     */
    height: 0,

    /**
     * Initialization.
     */
    init: function init() {
      this.resize();
    },

    /**
     * Resize gap and padding.
     * This must be called on init.
     */
    resize: function resize() {
      options = Splide.options;
      track = Elements.track;
      this.gap = toPixel(root, options.gap);
      var padding = options.padding;
      var left = toPixel(root, padding.left || padding);
      var right = toPixel(root, padding.right || padding);
      this.padding = {
        left: left,
        right: right
      };
      applyStyle(track, {
        paddingLeft: unit(left),
        paddingRight: unit(right)
      });
    },

    /**
     * Return total width from the left of the list to the right of the slide specified by the provided index.
     *
     * @param {number} index - Optional. A slide index. If undefined, total width of the slider will be returned.
     *
     * @return {number} - Total width to the right side of the specified slide, or 0 for an invalid index.
     */
    totalWidth: function totalWidth(index) {
      if (index === void 0) {
        index = Splide.length - 1;
      }

      var Slide = Elements.getSlide(index);
      var width = 0;

      if (Slide) {
        var slideRect = getRect(Slide.slide);
        var listRect = getRect(Elements.list);

        if (options.direction === RTL) {
          width = listRect.right - slideRect.left;
        } else {
          width = slideRect.right - listRect.left;
        }

        width += this.gap;
      }

      return width;
    },

    /**
     * Return the slide width in px.
     *
     * @param {number} index - Slide index.
     *
     * @return {number} - The slide width.
     */
    slideWidth: function slideWidth(index) {
      if (options.autoWidth) {
        var Slide = Elements.getSlide(index);
        return Slide ? Slide.slide.offsetWidth : 0;
      }

      var width = options.fixedWidth || (this.width + this.gap) / options.perPage - this.gap;
      return toPixel(root, width);
    },

    /**
     * Return the slide height in px.
     *
     * @return {number} - The slide height.
     */
    slideHeight: function slideHeight() {
      var height = options.height || options.fixedHeight || this.width * options.heightRatio;
      return toPixel(root, height);
    },

    /**
     * Return slider width without padding.
     *
     * @return {number} - Current slider width.
     */
    get width() {
      return track.clientWidth - this.padding.left - this.padding.right;
    }

  };
});
;// CONCATENATED MODULE: ./src/js/components/layout/directions/vertical.js
/**
 * The resolver component for vertical layout.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */



/**
 * The resolver component for vertical layout.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The resolver object.
 */

/* harmony default export */ const vertical = (function (Splide, Components) {
  /**
   * Keep the Elements component.
   *
   * @type {string}
   */
  var Elements = Components.Elements;
  /**
   * Keep the root element.
   *
   * @type {Element}
   */

  var root = Splide.root;
  /**
   * Keep the track element.
   *
   * @type {Element}
   */

  var track;
  /**
   * Keep the latest options.
   *
   * @type {Element}
   */

  var options;
  return {
    /**
     * Margin property name.
     *
     * @type {string}
     */
    margin: 'marginBottom',

    /**
     * Initialization.
     */
    init: function init() {
      this.resize();
    },

    /**
     * Resize gap and padding.
     * This must be called on init.
     */
    resize: function resize() {
      options = Splide.options;
      track = Elements.track;
      this.gap = toPixel(root, options.gap);
      var padding = options.padding;
      var top = toPixel(root, padding.top || padding);
      var bottom = toPixel(root, padding.bottom || padding);
      this.padding = {
        top: top,
        bottom: bottom
      };
      applyStyle(track, {
        paddingTop: unit(top),
        paddingBottom: unit(bottom)
      });
    },

    /**
     * Return total height from the top of the list to the bottom of the slide specified by the provided index.
     *
     * @param {number} index - Optional. A slide index. If undefined, total height of the slider will be returned.
     *
     * @return {number} - Total height to the bottom of the specified slide, or 0 for an invalid index.
     */
    totalHeight: function totalHeight(index) {
      if (index === void 0) {
        index = Splide.length - 1;
      }

      var Slide = Elements.getSlide(index);

      if (Slide) {
        return getRect(Slide.slide).bottom - getRect(Elements.list).top + this.gap;
      }

      return 0;
    },

    /**
     * Return the slide width in px.
     *
     * @return {number} - The slide width.
     */
    slideWidth: function slideWidth() {
      return toPixel(root, options.fixedWidth || this.width);
    },

    /**
     * Return the slide height in px.
     *
     * @param {number} index - Slide index.
     *
     * @return {number} - The slide height.
     */
    slideHeight: function slideHeight(index) {
      if (options.autoHeight) {
        var Slide = Elements.getSlide(index);
        return Slide ? Slide.slide.offsetHeight : 0;
      }

      var height = options.fixedHeight || (this.height + this.gap) / options.perPage - this.gap;
      return toPixel(root, height);
    },

    /**
     * Return slider width without padding.
     *
     * @return {number} - Current slider width.
     */
    get width() {
      return track.clientWidth;
    },

    /**
     * Return slide height without padding.
     *
     * @return {number} - Slider height.
     */
    get height() {
      var height = options.height || this.width * options.heightRatio;
      exist(height, '"height" or "heightRatio" is missing.');
      return toPixel(root, height) - this.padding.top - this.padding.bottom;
    }

  };
});
;// CONCATENATED MODULE: ./src/js/utils/time.js
/**
 * A package of utility functions related with time.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

/**
 * Simple throttle function that controls how often the given function is executed.
 *
 * @param {function} func - A function to be throttled.
 * @param {number}   wait - Time in millisecond for interval of execution.
 *
 * @return {Function} - A debounced function.
 */
function throttle(func, wait) {
  var timeout; // Declare function by the "function" keyword to prevent "this" from being inherited.

  return function () {
    if (!timeout) {
      timeout = setTimeout(function () {
        func();
        timeout = null;
      }, wait);
    }
  };
}
/**
 * Custom setInterval function that provides progress rate as callback.
 *
 * @param {function} callback - A callback function fired every time the interval time passes.
 * @param {number}   interval - Interval duration in milliseconds.
 * @param {function} progress - A callback function fired whenever the progress goes.
 *
 * @return {Object} - An object containing play() and pause() functions.
 */

function createInterval(callback, interval, progress) {
  var _window = window,
      requestAnimationFrame = _window.requestAnimationFrame;
  var start,
      elapse,
      rate,
      _pause = true;

  var step = function step(timestamp) {
    if (!_pause) {
      if (!start) {
        start = timestamp;

        if (rate && rate < 1) {
          start -= rate * interval;
        }
      }

      elapse = timestamp - start;
      rate = elapse / interval;

      if (elapse >= interval) {
        start = 0;
        rate = 1;
        callback();
      }

      if (progress) {
        progress(rate);
      }

      requestAnimationFrame(step);
    }
  };

  return {
    pause: function pause() {
      _pause = true;
      start = 0;
    },
    play: function play(reset) {
      start = 0;

      if (reset) {
        rate = 0;
      }

      if (_pause) {
        _pause = false;
        requestAnimationFrame(step);
      }
    }
  };
}
;// CONCATENATED MODULE: ./src/js/components/layout/index.js
/**
 * The component for handing slide layouts and their sizes.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */







/**
 * The component for handing slide layouts and their sizes.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const layout = (function (Splide, Components) {
  /**
   * Keep the Elements component.
   *
   * @type {string}
   */
  var Elements = Components.Elements;
  /**
   * Whether the slider is vertical or not.
   *
   * @type {boolean}
   */

  var isVertical = Splide.options.direction === TTB;
  /**
   * Layout component object.
   *
   * @type {Object}
   */

  var Layout = object_assign({
    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      bind();
      init(); // The word "size" means width for a horizontal slider and height for a vertical slider.

      this.totalSize = isVertical ? this.totalHeight : this.totalWidth;
      this.slideSize = isVertical ? this.slideHeight : this.slideWidth;
    },

    /**
     * Destroy the component.
     */
    destroy: function destroy() {
      removeAttribute([Elements.list, Elements.track], 'style');
    },

    /**
     * Return the slider height on the vertical mode or width on the horizontal mode.
     *
     * @return {number}
     */
    get size() {
      return isVertical ? this.height : this.width;
    }

  }, isVertical ? vertical(Splide, Components) : horizontal(Splide, Components));
  /**
   * Init slider styles according to options.
   */

  function init() {
    Layout.init();
    applyStyle(Splide.root, {
      maxWidth: unit(Splide.options.width)
    });
    Elements.each(function (Slide) {
      Slide.slide.style[Layout.margin] = unit(Layout.gap);
    });
    resize();
  }
  /**
   * Listen the resize native event with throttle.
   * Initialize when the component is mounted or options are updated.
   */


  function bind() {
    Splide.on('resize load', throttle(function () {
      Splide.emit('resize');
    }, Splide.options.throttle), window).on('resize', resize).on('updated refresh', init);
  }
  /**
   * Resize the track and slide elements.
   */


  function resize() {
    var options = Splide.options;
    Layout.resize();
    applyStyle(Elements.track, {
      height: unit(Layout.height)
    });
    var slideHeight = options.autoHeight ? null : unit(Layout.slideHeight());
    Elements.each(function (Slide) {
      applyStyle(Slide.container, {
        height: slideHeight
      });
      applyStyle(Slide.slide, {
        width: options.autoWidth ? null : unit(Layout.slideWidth(Slide.index)),
        height: Slide.container ? null : slideHeight
      });
    });
    Splide.emit('resized');
  }

  return Layout;
});
;// CONCATENATED MODULE: ./src/js/components/drag/index.js
/**
 * The component for supporting mouse drag and swipe.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */





var drag_abs = Math.abs;
/**
 * If the absolute velocity is greater thant this value,
 * a slider always goes to a different slide after drag, not allowed to stay on a current slide.
 */

var MIN_VELOCITY = 0.1;
/**
 * Adjust how much the track can be pulled on the first or last page.
 * The larger number this is, the farther the track moves.
 * This should be around 5 - 9.
 *
 * @type {number}
 */

var FRICTION_REDUCER = 7;
/**
 * The component supporting mouse drag and swipe.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const drag = (function (Splide, Components) {
  /**
   * Store the Move component.
   *
   * @type {Object}
   */
  var Track = Components.Track;
  /**
   * Store the Controller component.
   *
   * @type {Object}
   */

  var Controller = Components.Controller;
  /**
   * Coordinate of the track on starting drag.
   *
   * @type {Object}
   */

  var startCoord;
  /**
   * Analyzed info on starting drag.
   *
   * @type {Object|null}
   */

  var startInfo;
  /**
   * Analyzed info being updated while dragging/swiping.
   *
   * @type {Object}
   */

  var currentInfo;
  /**
   * Determine whether slides are being dragged or not.
   *
   * @type {boolean}
   */

  var isDragging;
  /**
   * Whether the slider direction is vertical or not.
   *
   * @type {boolean}
   */

  var isVertical = Splide.options.direction === TTB;
  /**
   * Axis for the direction.
   *
   * @type {string}
   */

  var axis = isVertical ? 'y' : 'x';
  /**
   * Drag component object.
   *
   * @type {Object}
   */

  var Drag = {
    /**
     * Whether dragging is disabled or not.
     *
     * @type {boolean}
     */
    disabled: false,

    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      var _this = this;

      var Elements = Components.Elements;
      var track = Elements.track;
      Splide.on('touchstart mousedown', start, track).on('touchmove mousemove', move, track, {
        passive: false
      }).on('touchend touchcancel mouseleave mouseup dragend', end, track).on('mounted refresh', function () {
        // Prevent dragging an image or anchor itself.
        each(Elements.list.querySelectorAll('img, a'), function (elm) {
          Splide.off('dragstart', elm).on('dragstart', function (e) {
            e.preventDefault();
          }, elm, {
            passive: false
          });
        });
      }).on('mounted updated', function () {
        _this.disabled = !Splide.options.drag;
      });
    }
  };
  /**
   * Called when the track starts to be dragged.
   *
   * @param {TouchEvent|MouseEvent} e - TouchEvent or MouseEvent object.
   */

  function start(e) {
    if (!Drag.disabled && !isDragging) {
      // These prams are used to evaluate whether the slider should start moving.
      init(e);
    }
  }
  /**
   * Initialize parameters.
   *
   * @param {TouchEvent|MouseEvent} e - TouchEvent or MouseEvent object.
   */


  function init(e) {
    startCoord = Track.toCoord(Track.position);
    startInfo = analyze(e, {});
    currentInfo = startInfo;
  }
  /**
   * Called while the track being dragged.
   *
   * @param {TouchEvent|MouseEvent} e - TouchEvent or MouseEvent object.
   */


  function move(e) {
    if (startInfo) {
      currentInfo = analyze(e, startInfo);

      if (isDragging) {
        if (e.cancelable) {
          e.preventDefault();
        }

        if (!Splide.is(FADE)) {
          var position = startCoord[axis] + currentInfo.offset[axis];
          Track.translate(resist(position));
        }
      } else {
        if (shouldMove(currentInfo)) {
          Splide.emit('drag', startInfo);
          isDragging = true;
          Track.cancel(); // These params are actual drag data.

          init(e);
        }
      }
    }
  }
  /**
   * Determine whether to start moving the track or not by drag angle.
   *
   * @param {Object} info - An information object.
   *
   * @return {boolean} - True if the track should be moved or false if not.
   */


  function shouldMove(_ref) {
    var offset = _ref.offset;

    if (Splide.State.is(MOVING) && Splide.options.waitForTransition) {
      return false;
    }

    var angle = Math.atan(drag_abs(offset.y) / drag_abs(offset.x)) * 180 / Math.PI;

    if (isVertical) {
      angle = 90 - angle;
    }

    return angle < Splide.options.dragAngleThreshold;
  }
  /**
   * Resist dragging the track on the first/last page because there is no more.
   *
   * @param {number} position - A position being applied to the track.
   *
   * @return {Object} - Adjusted position.
   */


  function resist(position) {
    if (Splide.is(SLIDE)) {
      var sign = Track.sign;

      var _start = sign * Track.trim(Track.toPosition(0));

      var _end = sign * Track.trim(Track.toPosition(Controller.edgeIndex));

      position *= sign;

      if (position < _start) {
        position = _start - FRICTION_REDUCER * Math.log(_start - position);
      } else if (position > _end) {
        position = _end + FRICTION_REDUCER * Math.log(position - _end);
      }

      position *= sign;
    }

    return position;
  }
  /**
   * Called when dragging ends.
   */


  function end() {
    startInfo = null;

    if (isDragging) {
      Splide.emit('dragged', currentInfo);
      go(currentInfo);
      isDragging = false;
    }
  }
  /**
   * Go to the slide determined by the analyzed data.
   *
   * @param {Object} info - An info object.
   */


  function go(info) {
    var velocity = info.velocity[axis];
    var absV = drag_abs(velocity);

    if (absV > 0) {
      var options = Splide.options;
      var index = Splide.index;
      var sign = velocity < 0 ? -1 : 1;
      var destIndex = index;

      if (!Splide.is(FADE)) {
        var destination = Track.position;

        if (absV > options.flickVelocityThreshold && drag_abs(info.offset[axis]) < options.swipeDistanceThreshold) {
          destination += sign * Math.min(absV * options.flickPower, Components.Layout.size * (options.flickMaxPages || 1));
        }

        destIndex = Track.toIndex(destination);
      }
      /*
       * Do not allow the track to go to a previous position if there is enough velocity.
       * Always use the adjacent index for the fade mode.
       */


      if (destIndex === index && absV > MIN_VELOCITY) {
        destIndex = index + sign * Track.sign;
      }

      if (Splide.is(SLIDE)) {
        destIndex = between(destIndex, 0, Controller.edgeIndex);
      }

      Controller.go(destIndex, options.isNavigation);
    }
  }
  /**
   * Analyze the given event object and return important information for handling swipe behavior.
   *
   * @param {Event}   e          - Touch or Mouse event object.
   * @param {Object}  startInfo  - Information analyzed on start for calculating difference from the current one.
   *
   * @return {Object} - An object containing analyzed information, such as offset, velocity, etc.
   */


  function analyze(e, startInfo) {
    var timeStamp = e.timeStamp,
        touches = e.touches;

    var _ref2 = touches ? touches[0] : e,
        clientX = _ref2.clientX,
        clientY = _ref2.clientY;

    var _ref3 = startInfo.to || {},
        _ref3$x = _ref3.x,
        fromX = _ref3$x === void 0 ? clientX : _ref3$x,
        _ref3$y = _ref3.y,
        fromY = _ref3$y === void 0 ? clientY : _ref3$y;

    var startTime = startInfo.time || 0;
    var offset = {
      x: clientX - fromX,
      y: clientY - fromY
    };
    var duration = timeStamp - startTime;
    var velocity = {
      x: offset.x / duration,
      y: offset.y / duration
    };
    return {
      to: {
        x: clientX,
        y: clientY
      },
      offset: offset,
      time: timeStamp,
      velocity: velocity
    };
  }

  return Drag;
});
;// CONCATENATED MODULE: ./src/js/components/click/index.js
/**
 * The component for handling a click event.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

/**
 * The component for handling a click event.
 * Click should be disabled during drag/swipe.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The component object.
 */
/* harmony default export */ const click = (function (Splide, Components) {
  /**
   * Whether click is disabled or not.
   *
   * @type {boolean}
   */
  var disabled = false;
  /**
   * Click component object.
   *
   * @type {Object}
   */

  var Click = {
    /**
     * Mount only when the drag is activated and the slide type is not "fade".
     *
     * @type {boolean}
     */
    required: Splide.options.drag,

    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      Splide.on('click', onClick, Components.Elements.track, {
        capture: true
      }).on('drag', function () {
        disabled = true;
      }).on('dragged', function () {
        // Make sure the flag is released after the click event is fired.
        setTimeout(function () {
          disabled = false;
        });
      });
    }
  };
  /**
   * Called when a track element is clicked.
   *
   * @param {Event} e - A click event.
   */

  function onClick(e) {
    if (disabled) {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
  }

  return Click;
});
;// CONCATENATED MODULE: ./src/js/components/autoplay/index.js
/**
 * The component for playing slides automatically.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */


/**
 * Set of pause flags.
 */

var PAUSE_FLAGS = {
  HOVER: 1,
  FOCUS: 2,
  MANUAL: 3
};
/**
 * The component for playing slides automatically.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 * @param {string} name       - A component name as a lowercase string.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const autoplay = (function (Splide, Components, name) {
  /**
   * Store pause flags.
   *
   * @type {Array}
   */
  var flags = [];
  /**
   * Store an interval object.
   *
   * @type {Object};
   */

  var interval;
  /**
   * Keep the Elements component.
   *
   * @type {string}
   */

  var Elements = Components.Elements;
  /**
   * Autoplay component object.
   *
   * @type {Object}
   */

  var Autoplay = {
    /**
     * Required only when the autoplay option is true.
     *
     * @type {boolean}
     */
    required: Splide.options.autoplay,

    /**
     * Called when the component is mounted.
     * Note that autoplay starts only if there are slides over perPage number.
     */
    mount: function mount() {
      var options = Splide.options;

      if (Elements.slides.length > options.perPage) {
        interval = createInterval(function () {
          Splide.go('>');
        }, options.interval, function (rate) {
          Splide.emit(name + ":playing", rate);

          if (Elements.bar) {
            applyStyle(Elements.bar, {
              width: rate * 100 + "%"
            });
          }
        });
        bind();
        this.play();
      }
    },

    /**
     * Start autoplay.
     *
     * @param {number} flag - A pause flag to be removed.
     */
    play: function play(flag) {
      if (flag === void 0) {
        flag = 0;
      }

      flags = flags.filter(function (f) {
        return f !== flag;
      });

      if (!flags.length) {
        Splide.emit(name + ":play");
        interval.play(Splide.options.resetProgress);
      }
    },

    /**
     * Pause autoplay.
     * Note that Array.includes is not supported by IE.
     *
     * @param {number} flag - A pause flag to be added.
     */
    pause: function pause(flag) {
      if (flag === void 0) {
        flag = 0;
      }

      interval.pause();

      if (flags.indexOf(flag) === -1) {
        flags.push(flag);
      }

      if (flags.length === 1) {
        Splide.emit(name + ":pause");
      }
    }
  };
  /**
   * Listen some events.
   */

  function bind() {
    var options = Splide.options;
    var sibling = Splide.sibling;
    var elms = [Splide.root, sibling ? sibling.root : null];

    if (options.pauseOnHover) {
      switchOn(elms, 'mouseleave', PAUSE_FLAGS.HOVER, true);
      switchOn(elms, 'mouseenter', PAUSE_FLAGS.HOVER, false);
    }

    if (options.pauseOnFocus) {
      switchOn(elms, 'focusout', PAUSE_FLAGS.FOCUS, true);
      switchOn(elms, 'focusin', PAUSE_FLAGS.FOCUS, false);
    }

    if (Elements.play) {
      Splide.on('click', function () {
        // Need to be removed a focus flag at first.
        Autoplay.play(PAUSE_FLAGS.FOCUS);
        Autoplay.play(PAUSE_FLAGS.MANUAL);
      }, Elements.play);
    }

    if (Elements.pause) {
      switchOn([Elements.pause], 'click', PAUSE_FLAGS.MANUAL, false);
    }

    Splide.on('move refresh', function () {
      Autoplay.play();
    }) // Rewind the timer.
    .on('destroy', function () {
      Autoplay.pause();
    });
  }
  /**
   * Play or pause on the given event.
   *
   * @param {Element[]} elms  - Elements.
   * @param {string}    event - An event name or names.
   * @param {number}    flag  - A pause flag defined on the top.
   * @param {boolean}   play  - Determine whether to play or pause.
   */


  function switchOn(elms, event, flag, play) {
    elms.forEach(function (elm) {
      Splide.on(event, function () {
        Autoplay[play ? 'play' : 'pause'](flag);
      }, elm);
    });
  }

  return Autoplay;
});
;// CONCATENATED MODULE: ./src/js/components/cover/index.js
/**
 * The component for change an img element to background image of its wrapper.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

/**
 * The component for change an img element to background image of its wrapper.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const cover = (function (Splide, Components) {
  /**
   * Hold options.
   *
   * @type {Object}
   */
  var options = Splide.options;
  /**
   * Cover component object.
   *
   * @type {Object}
   */

  var Cover = {
    /**
     * Required only when "cover" option is true.
     *
     * @type {boolean}
     */
    required: options.cover,

    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      Splide.on('lazyload:loaded', function (img) {
        cover(img, false);
      });
      Splide.on('mounted updated refresh', function () {
        return apply(false);
      });
    },

    /**
     * Destroy.
     */
    destroy: function destroy() {
      apply(true);
    }
  };
  /**
   * Apply "cover" to all slides.
   *
   * @param {boolean} uncover - If true, "cover" will be clear.
   */

  function apply(uncover) {
    Components.Elements.each(function (Slide) {
      var img = child(Slide.slide, 'IMG') || child(Slide.container, 'IMG');

      if (img && img.src) {
        cover(img, uncover);
      }
    });
  }
  /**
   * Set background image of the parent element, using source of the given image element.
   *
   * @param {Element} img     - An image element.
   * @param {boolean} uncover - Reset "cover".
   */


  function cover(img, uncover) {
    applyStyle(img.parentElement, {
      background: uncover ? '' : "center/cover no-repeat url(\"" + img.src + "\")"
    });
    applyStyle(img, {
      display: uncover ? '' : 'none'
    });
  }

  return Cover;
});
;// CONCATENATED MODULE: ./src/js/components/arrows/path.js
/**
 * Export vector path for an arrow.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

/**
 * Namespace definition for SVG element.
 *
 * @type {string}
 */
var XML_NAME_SPACE = 'http://www.w3.org/2000/svg';
/**
 * The arrow vector path.
 *
 * @type {number}
 */

var PATH = 'm15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z';
/**
 * SVG width and height.
 *
 * @type {number}
 */

var SIZE = 40;
;// CONCATENATED MODULE: ./src/js/components/arrows/index.js
/**
 * The component for appending prev/next arrows.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */



/**
 * The component for appending prev/next arrows.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 * @param {string} name       - A component name as a lowercase string.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const arrows = (function (Splide, Components, name) {
  /**
   * Previous arrow element.
   *
   * @type {Element|undefined}
   */
  var prev;
  /**
   * Next arrow element.
   *
   * @type {Element|undefined}
   */

  var next;
  /**
   * Store the class list.
   *
   * @type {Object}
   */

  var classes = Splide.classes;
  /**
   * Hold the root element.
   *
   * @type {Element}
   */

  var root = Splide.root;
  /**
   * Whether arrows are created programmatically or not.
   *
   * @type {boolean}
   */

  var created;
  /**
   * Hold the Elements component.
   *
   * @type {Object}
   */

  var Elements = Components.Elements;
  /**
   * Arrows component object.
   *
   * @type {Object}
   */

  var Arrows = {
    /**
     * Required when the arrows option is true.
     *
     * @type {boolean}
     */
    required: Splide.options.arrows,

    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      // Attempt to get arrows from HTML source.
      prev = Elements.arrows.prev;
      next = Elements.arrows.next; // If arrows were not found in HTML, let's generate them.

      if ((!prev || !next) && Splide.options.arrows) {
        prev = createArrow(true);
        next = createArrow(false);
        created = true;
        appendArrows();
      }

      if (prev && next) {
        bind();
      }

      this.arrows = {
        prev: prev,
        next: next
      };
    },

    /**
     * Called after all components are mounted.
     */
    mounted: function mounted() {
      Splide.emit(name + ":mounted", prev, next);
    },

    /**
     * Destroy.
     */
    destroy: function destroy() {
      removeAttribute([prev, next], 'disabled');

      if (created) {
        dom_remove(prev.parentElement);
      }
    }
  };
  /**
   * Listen to native and custom events.
   */

  function bind() {
    Splide.on('click', function () {
      Splide.go('<');
    }, prev).on('click', function () {
      Splide.go('>');
    }, next).on('mounted move updated refresh', updateDisabled);
  }
  /**
   * Update a disabled attribute.
   */


  function updateDisabled() {
    var _Components$Controlle = Components.Controller,
        prevIndex = _Components$Controlle.prevIndex,
        nextIndex = _Components$Controlle.nextIndex;
    var isEnough = Splide.length > Splide.options.perPage || Splide.is(LOOP);
    prev.disabled = prevIndex < 0 || !isEnough;
    next.disabled = nextIndex < 0 || !isEnough;
    Splide.emit(name + ":updated", prev, next, prevIndex, nextIndex);
  }
  /**
   * Create a wrapper element and append arrows.
   */


  function appendArrows() {
    var wrapper = create('div', {
      "class": classes.arrows
    });
    append(wrapper, prev);
    append(wrapper, next);
    var slider = Elements.slider;
    var parent = Splide.options.arrows === 'slider' && slider ? slider : root;
    before(wrapper, parent.firstElementChild);
  }
  /**
   * Create an arrow element.
   *
   * @param {boolean} prev - Determine to create a prev arrow or next arrow.
   *
   * @return {Element} - A created arrow element.
   */


  function createArrow(prev) {
    var arrow = "<button class=\"" + classes.arrow + " " + (prev ? classes.prev : classes.next) + "\" type=\"button\">" + ("<svg xmlns=\"" + XML_NAME_SPACE + "\"\tviewBox=\"0 0 " + SIZE + " " + SIZE + "\"\twidth=\"" + SIZE + "\"\theight=\"" + SIZE + "\">") + ("<path d=\"" + (Splide.options.arrowPath || PATH) + "\" />");
    return domify(arrow);
  }

  return Arrows;
});
;// CONCATENATED MODULE: ./src/js/components/pagination/index.js
/**
 * The component for handling pagination
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */


/**
 * The event name for updating some attributes of pagination nodes.
 *
 * @type {string}
 */

var ATTRIBUTES_UPDATE_EVENT = 'move.page';
/**
 * The event name for recreating pagination.
 *
 * @type {string}
 */

var UPDATE_EVENT = 'updated.page refresh.page';
/**
 * The component for handling pagination
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 * @param {string} name       - A component name as a lowercase string.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const pagination = (function (Splide, Components, name) {
  /**
   * Store all data for pagination.
   * - list: A list element.
   * - items: An array that contains objects(li, button, index, page).
   *
   * @type {Object}
   */
  var data = {};
  /**
   * Hold the Elements component.
   *
   * @type {Object}
   */

  var Elements = Components.Elements;
  /**
   * Pagination component object.
   *
   * @type {Object}
   */

  var Pagination = {
    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      var pagination = Splide.options.pagination;

      if (pagination) {
        data = createPagination();
        var slider = Elements.slider;
        var parent = pagination === 'slider' && slider ? slider : Splide.root;
        append(parent, data.list);
        Splide.on(ATTRIBUTES_UPDATE_EVENT, updateAttributes);
      }

      Splide.off(UPDATE_EVENT).on(UPDATE_EVENT, function () {
        Pagination.destroy();

        if (Splide.options.pagination) {
          Pagination.mount();
          Pagination.mounted();
        }
      });
    },

    /**
     * Called after all components are mounted.
     */
    mounted: function mounted() {
      if (Splide.options.pagination) {
        var index = Splide.index;
        Splide.emit(name + ":mounted", data, this.getItem(index));
        updateAttributes(index, -1);
      }
    },

    /**
     * Destroy the pagination.
     * Be aware that node.remove() is not supported by IE.
     */
    destroy: function destroy() {
      dom_remove(data.list);

      if (data.items) {
        data.items.forEach(function (item) {
          Splide.off('click', item.button);
        });
      } // Do not remove UPDATE_EVENT to recreate pagination if needed.


      Splide.off(ATTRIBUTES_UPDATE_EVENT);
      data = {};
    },

    /**
     * Return an item by index.
     *
     * @param {number} index - A slide index.
     *
     * @return {Object|undefined} - An item object on success or undefined on failure.
     */
    getItem: function getItem(index) {
      return data.items[Components.Controller.toPage(index)];
    },

    /**
     * Return object containing pagination data.
     *
     * @return {Object} - Pagination data including list and items.
     */
    get data() {
      return data;
    }

  };
  /**
   * Update attributes.
   *
   * @param {number} index     - Active index.
   * @param {number} prevIndex - Prev index.
   */

  function updateAttributes(index, prevIndex) {
    var prev = Pagination.getItem(prevIndex);
    var curr = Pagination.getItem(index);
    var active = STATUS_CLASSES.active;

    if (prev) {
      removeClass(prev.button, active);
    }

    if (curr) {
      addClass(curr.button, active);
    }

    Splide.emit(name + ":updated", data, prev, curr);
  }
  /**
   * Create a wrapper and button elements.
   *
   * @return {Object} - An object contains all data.
   */


  function createPagination() {
    var options = Splide.options;
    var classes = Splide.classes;
    var list = create('ul', {
      "class": classes.pagination
    });
    var items = Elements.getSlides(false).filter(function (Slide) {
      return options.focus !== false || Slide.index % options.perPage === 0;
    }).map(function (Slide, page) {
      var li = create('li', {});
      var button = create('button', {
        "class": classes.page,
        type: 'button'
      });
      append(li, button);
      append(list, li);
      Splide.on('click', function () {
        Splide.go(">" + page);
      }, button);
      return {
        li: li,
        button: button,
        page: page,
        Slides: Elements.getSlidesByPage(page)
      };
    });
    return {
      list: list,
      items: items
    };
  }

  return Pagination;
});
;// CONCATENATED MODULE: ./src/js/components/lazyload/index.js
/**
 * The component for loading slider images lazily.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */



/**
 * The name for a data attribute of src.
 *
 * @type {string}
 */

var SRC_DATA_NAME = 'data-splide-lazy';
/**
 * The name for a data attribute of srcset.
 *
 * @type {string}
 */

var SRCSET_DATA_NAME = 'data-splide-lazy-srcset';
/**
 * The component for loading slider images lazily.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 * @param {string} name       - A component name as a lowercase string.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const lazyload = (function (Splide, Components, name) {
  /**
   * Next index for sequential loading.
   *
   * @type {number}
   */
  var nextIndex;
  /**
   * Store objects containing an img element and a Slide object.
   *
   * @type {Object[]}
   */

  var images;
  /**
   * Store the options.
   *
   * @type {Object}
   */

  var options = Splide.options;
  /**
   * Whether to load images sequentially or not.
   *
   * @type {boolean}
   */

  var isSequential = options.lazyLoad === 'sequential';
  /**
   * Lazyload component object.
   *
   * @type {Object}
   */

  var Lazyload = {
    /**
     * Mount only when the lazyload option is provided.
     *
     * @type {boolean}
     */
    required: options.lazyLoad,

    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      Splide.on('mounted refresh', function () {
        init();
        Components.Elements.each(function (Slide) {
          each(Slide.slide.querySelectorAll("[" + SRC_DATA_NAME + "], [" + SRCSET_DATA_NAME + "]"), function (img) {
            if (!img.src && !img.srcset) {
              images.push({
                img: img,
                Slide: Slide
              });
              applyStyle(img, {
                display: 'none'
              });
            }
          });
        });

        if (isSequential) {
          loadNext();
        }
      });

      if (!isSequential) {
        Splide.on("mounted refresh moved." + name, check);
      }
    },

    /**
     * Destroy.
     */
    destroy: init
  };
  /**
   * Initialize parameters.
   */

  function init() {
    images = [];
    nextIndex = 0;
  }
  /**
   * Check how close each image is from the active slide and
   * determine whether to start loading or not, according to the distance.
   *
   * @param {number} index - Current index.
   */


  function check(index) {
    index = isNaN(index) ? Splide.index : index;
    images = images.filter(function (image) {
      if (image.Slide.isWithin(index, options.perPage * (options.preloadPages + 1))) {
        load(image.img, image.Slide);
        return false;
      }

      return true;
    }); // Unbind if all images are loaded.

    if (!images[0]) {
      Splide.off("moved." + name);
    }
  }
  /**
   * Start loading an image.
   * Creating a clone of the image element since setting src attribute directly to it
   * often occurs 'hitch', blocking some other processes of a browser.
   *
   * @param {Element} img   - An image element.
   * @param {Object}  Slide - A Slide object.
   */


  function load(img, Slide) {
    addClass(Slide.slide, STATUS_CLASSES.loading);
    var spinner = create('span', {
      "class": Splide.classes.spinner
    });
    append(img.parentElement, spinner);

    img.onload = function () {
      loaded(img, spinner, Slide, false);
    };

    img.onerror = function () {
      loaded(img, spinner, Slide, true);
    };

    setAttribute(img, 'srcset', getAttribute(img, SRCSET_DATA_NAME) || '');
    setAttribute(img, 'src', getAttribute(img, SRC_DATA_NAME) || '');
  }
  /**
   * Start loading a next image in images array.
   */


  function loadNext() {
    if (nextIndex < images.length) {
      var image = images[nextIndex];
      load(image.img, image.Slide);
    }

    nextIndex++;
  }
  /**
   * Called just after the image was loaded or loading was aborted by some error.
   *
   * @param {Element} img     - An image element.
   * @param {Element} spinner - A spinner element.
   * @param {Object}  Slide   - A Slide object.
   * @param {boolean} error   - True if the image was loaded successfully or false on error.
   */


  function loaded(img, spinner, Slide, error) {
    removeClass(Slide.slide, STATUS_CLASSES.loading);

    if (!error) {
      dom_remove(spinner);
      applyStyle(img, {
        display: ''
      });
      Splide.emit(name + ":loaded", img).emit('resize');
    }

    if (isSequential) {
      loadNext();
    }
  }

  return Lazyload;
});
;// CONCATENATED MODULE: ./src/js/constants/a11y.js
/**
 * Export aria attribute names.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

/**
 * Attribute name for aria-current.
 *
 * @type {string}
 */
var ARIA_CURRENRT = 'aria-current';
/**
 * Attribute name for aria-control.
 *
 * @type {string}
 */

var ARIA_CONTROLS = 'aria-controls';
/**
 * Attribute name for aria-control.
 *
 * @type {string}
 */

var ARIA_LABEL = 'aria-label';
/**
 * Attribute name for aria-labelledby.
 *
 * @type {string}
 */

var ARIA_LABELLEDBY = 'aria-labelledby';
/**
 * Attribute name for aria-hidden.
 *
 * @type {string}
 */

var ARIA_HIDDEN = 'aria-hidden';
/**
 * Attribute name for tab-index.
 *
 * @type {string}
 */

var TAB_INDEX = 'tabindex';
;// CONCATENATED MODULE: ./src/js/components/keyboard/index.js
/**
 * The component for controlling slides via keyboard.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */


/**
 * Map a key to a slide control.
 *
 * @type {Object}
 */

var KEY_MAP = {
  ltr: {
    ArrowLeft: '<',
    ArrowRight: '>',
    // For IE.
    Left: '<',
    Right: '>'
  },
  rtl: {
    ArrowLeft: '>',
    ArrowRight: '<',
    // For IE.
    Left: '>',
    Right: '<'
  },
  ttb: {
    ArrowUp: '<',
    ArrowDown: '>',
    // For IE.
    Up: '<',
    Down: '>'
  }
};
/**
 * The component for controlling slides via keyboard.
 *
 * @param {Splide} Splide - A Splide instance.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const keyboard = (function (Splide) {
  /**
   * Hold the target element.
   *
   * @type {Element|Document|undefined}
   */
  var target;
  return {
    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      Splide.on('mounted updated', function () {
        var options = Splide.options;
        var root = Splide.root;
        var map = KEY_MAP[options.direction];
        var keyboard = options.keyboard;

        if (target) {
          Splide.off('keydown', target);
          removeAttribute(root, TAB_INDEX);
        }

        if (keyboard) {
          if (keyboard === 'focused') {
            target = root;
            setAttribute(root, TAB_INDEX, 0);
          } else {
            target = document;
          }

          Splide.on('keydown', function (e) {
            if (map[e.key]) {
              Splide.go(map[e.key]);
            }
          }, target);
        }
      });
    }
  };
});
;// CONCATENATED MODULE: ./src/js/components/a11y/index.js
/**
 * The component for enhancing accessibility.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */



/**
 * The component for enhancing accessibility.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const a11y = (function (Splide, Components) {
  /**
   * Hold a i18n object.
   *
   * @type {Object}
   */
  var i18n = Splide.i18n;
  /**
   * Hold the Elements component.
   *
   * @type {Object}
   */

  var Elements = Components.Elements;
  /**
   * All attributes related with A11y.
   *
   * @type {string[]}
   */

  var allAttributes = [ARIA_HIDDEN, TAB_INDEX, ARIA_CONTROLS, ARIA_LABEL, ARIA_CURRENRT, 'role'];
  /**
   * A11y component object.
   *
   * @type {Object}
   */

  var A11y = {
    /**
     * Required only when the accessibility option is true.
     *
     * @type {boolean}
     */
    required: Splide.options.accessibility,

    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      Splide.on('visible', function (Slide) {
        updateSlide(Slide.slide, true);
      }).on('hidden', function (Slide) {
        updateSlide(Slide.slide, false);
      }).on('arrows:mounted', initArrows).on('arrows:updated', updateArrows).on('pagination:mounted', initPagination).on('pagination:updated', updatePagination).on('refresh', function () {
        removeAttribute(Components.Clones.clones, allAttributes);
      });

      if (Splide.options.isNavigation) {
        Splide.on('navigation:mounted navigation:updated', initNavigation).on('active', function (Slide) {
          updateNavigation(Slide, true);
        }).on('inactive', function (Slide) {
          updateNavigation(Slide, false);
        });
      }

      initAutoplay();
    },

    /**
     * Destroy.
     */
    destroy: function destroy() {
      var Arrows = Components.Arrows;
      var arrows = Arrows ? Arrows.arrows : {};
      removeAttribute(Elements.slides.concat([arrows.prev, arrows.next, Elements.play, Elements.pause]), allAttributes);
    }
  };
  /**
   * Update slide attributes when it gets visible or hidden.
   *
   * @param {Element} slide   - A slide element.
   * @param {Boolean} visible - True when the slide gets visible, or false when hidden.
   */

  function updateSlide(slide, visible) {
    setAttribute(slide, ARIA_HIDDEN, !visible);

    if (Splide.options.slideFocus) {
      setAttribute(slide, TAB_INDEX, visible ? 0 : -1);
    }
  }
  /**
   * Initialize arrows if they are available.
   * Append screen reader elements and add aria-controls attribute.
   *
   * @param {Element} prev - Previous arrow element.
   * @param {Element} next - Next arrow element.
   */


  function initArrows(prev, next) {
    var controls = Elements.track.id;
    setAttribute(prev, ARIA_CONTROLS, controls);
    setAttribute(next, ARIA_CONTROLS, controls);
  }
  /**
   * Update arrow attributes.
   *
   * @param {Element} prev      - Previous arrow element.
   * @param {Element} next      - Next arrow element.
   * @param {number}  prevIndex - Previous slide index or -1 when there is no precede slide.
   * @param {number}  nextIndex - Next slide index or -1 when there is no next slide.
   */


  function updateArrows(prev, next, prevIndex, nextIndex) {
    var index = Splide.index;
    var prevLabel = prevIndex > -1 && index < prevIndex ? i18n.last : i18n.prev;
    var nextLabel = nextIndex > -1 && index > nextIndex ? i18n.first : i18n.next;
    setAttribute(prev, ARIA_LABEL, prevLabel);
    setAttribute(next, ARIA_LABEL, nextLabel);
  }
  /**
   * Initialize pagination if it's available.
   * Append a screen reader element and add aria-controls/label attribute to each item.
   *
   * @param {Object} data       - Data object containing all items.
   * @param {Object} activeItem - An initial active item.
   */


  function initPagination(data, activeItem) {
    if (activeItem) {
      setAttribute(activeItem.button, ARIA_CURRENRT, true);
    }

    data.items.forEach(function (item) {
      var options = Splide.options;
      var text = options.focus === false && options.perPage > 1 ? i18n.pageX : i18n.slideX;
      var label = sprintf(text, item.page + 1);
      var button = item.button;
      var controls = item.Slides.map(function (Slide) {
        return Slide.slide.id;
      });
      setAttribute(button, ARIA_CONTROLS, controls.join(' '));
      setAttribute(button, ARIA_LABEL, label);
    });
  }
  /**
   * Update pagination attributes.
   *
   * @param {Object}  data - Data object containing all items.
   * @param {Element} prev - A previous active element.
   * @param {Element} curr - A current active element.
   */


  function updatePagination(data, prev, curr) {
    if (prev) {
      removeAttribute(prev.button, ARIA_CURRENRT);
    }

    if (curr) {
      setAttribute(curr.button, ARIA_CURRENRT, true);
    }
  }
  /**
   * Initialize autoplay buttons.
   */


  function initAutoplay() {
    ['play', 'pause'].forEach(function (name) {
      var elm = Elements[name];

      if (elm) {
        if (!isButton(elm)) {
          setAttribute(elm, 'role', 'button');
        }

        setAttribute(elm, ARIA_CONTROLS, Elements.track.id);
        setAttribute(elm, ARIA_LABEL, i18n[name]);
      }
    });
  }
  /**
   * Initialize navigation slider.
   * Add button role, aria-label, aria-controls to slide elements and append screen reader text to them.
   *
   * @param {Splide} main - A main Splide instance.
   */


  function initNavigation(main) {
    Elements.each(function (Slide) {
      var slide = Slide.slide;
      var realIndex = Slide.realIndex;

      if (!isButton(slide)) {
        setAttribute(slide, 'role', 'button');
      }

      var slideIndex = realIndex > -1 ? realIndex : Slide.index;
      var label = sprintf(i18n.slideX, slideIndex + 1);
      var mainSlide = main.Components.Elements.getSlide(slideIndex);
      setAttribute(slide, ARIA_LABEL, label);

      if (mainSlide) {
        setAttribute(slide, ARIA_CONTROLS, mainSlide.slide.id);
      }
    });
  }
  /**
   * Update navigation attributes.
   *
   * @param {Object}  Slide  - A target Slide object.
   * @param {boolean} active - True if the slide is active or false if inactive.
   */


  function updateNavigation(_ref, active) {
    var slide = _ref.slide;

    if (active) {
      setAttribute(slide, ARIA_CURRENRT, true);
    } else {
      removeAttribute(slide, ARIA_CURRENRT);
    }
  }
  /**
   * Check if the given element is button or not.
   *
   * @param {Element} elm - An element to be checked.
   *
   * @return {boolean} - True if the given element is button.
   */


  function isButton(elm) {
    return elm.tagName === 'BUTTON';
  }

  return A11y;
});
;// CONCATENATED MODULE: ./src/js/components/sync/index.js
/**
 * The component for synchronizing a slider with another.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */


/**
 * The event name for sync.
 *
 * @type {string}
 */

var SYNC_EVENT = 'move.sync';
/**
 * The event names for click navigation.
 * @type {string}
 */

var CLICK_EVENTS = 'mouseup touchend';
/**
 * The keys for triggering the navigation button.
 *
 * @type {String[]}
 */

var TRIGGER_KEYS = [' ', 'Enter', 'Spacebar'];
/**
 * The component for synchronizing a slider with another.
 *
 * @param {Splide} Splide - A Splide instance.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const sync = (function (Splide) {
  /**
   * Keep the sibling Splide instance.
   *
   * @type {Splide}
   */
  var sibling = Splide.sibling;
  /**
   * Whether the sibling slider is navigation or not.
   *
   * @type {Splide|boolean}
   */

  var isNavigation = sibling && sibling.options.isNavigation;
  /**
   * Layout component object.
   *
   * @type {Object}
   */

  var Sync = {
    /**
     * Required only when the sub slider is available.
     *
     * @type {boolean}
     */
    required: !!sibling,

    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      syncMain();
      syncSibling();

      if (isNavigation) {
        bind();
        Splide.on('refresh', function () {
          setTimeout(function () {
            bind();
            sibling.emit('navigation:updated', Splide);
          });
        });
      }
    },

    /**
     * Called after all components are mounted.
     */
    mounted: function mounted() {
      if (isNavigation) {
        sibling.emit('navigation:mounted', Splide);
      }
    }
  };
  /**
   * Listen the primary slider event to move secondary one.
   * Must unbind a handler at first to avoid infinite loop.
   */

  function syncMain() {
    Splide.on(SYNC_EVENT, function (newIndex, prevIndex, destIndex) {
      sibling.off(SYNC_EVENT).go(sibling.is(LOOP) ? destIndex : newIndex, false);
      syncSibling();
    });
  }
  /**
   * Listen the secondary slider event to move primary one.
   * Must unbind a handler at first to avoid infinite loop.
   */


  function syncSibling() {
    sibling.on(SYNC_EVENT, function (newIndex, prevIndex, destIndex) {
      Splide.off(SYNC_EVENT).go(Splide.is(LOOP) ? destIndex : newIndex, false);
      syncMain();
    });
  }
  /**
   * Listen some events on each slide.
   */


  function bind() {
    sibling.Components.Elements.each(function (_ref) {
      var slide = _ref.slide,
          index = _ref.index;

      /*
       * Listen mouseup and touchend events to handle click.
       */
      Splide.off(CLICK_EVENTS, slide).on(CLICK_EVENTS, function (e) {
        // Ignore a middle or right click.
        if (!e.button || e.button === 0) {
          moveSibling(index);
        }
      }, slide);
      /*
       * Subscribe keyup to handle Enter and Space key.
       * Note that Array.includes is not supported by IE.
       */

      Splide.off('keyup', slide).on('keyup', function (e) {
        if (TRIGGER_KEYS.indexOf(e.key) > -1) {
          e.preventDefault();
          moveSibling(index);
        }
      }, slide, {
        passive: false
      });
    });
  }
  /**
   * Move the sibling to the given index.
   * Need to check "IDLE" status because slides can be moving by Drag component.
   *
   * @param {number} index - Target index.
   */


  function moveSibling(index) {
    if (Splide.State.is(IDLE)) {
      sibling.go(index);
    }
  }

  return Sync;
});
;// CONCATENATED MODULE: ./src/js/components/breakpoints/index.js
/**
 * The component for updating options according to a current window width.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */


/**
 * Interval time for throttle.
 *
 * @type {number}
 */

var THROTTLE = 50;
/**
 * The component for updating options according to a current window width.
 *
 * @param {Splide} Splide - A Splide instance.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const breakpoints = (function (Splide) {
  /**
   * Store breakpoints.
   *
   * @type {Object|boolean}
   */
  var breakpoints = Splide.options.breakpoints;
  /**
   * The check function whose frequency of call is reduced.
   *
   * @type {Function}
   */

  var throttledCheck = throttle(check, THROTTLE);
  /**
   * Keep initial options.
   *
   * @type {Object}
   */

  var initialOptions;
  /**
   * An array containing objects of point and MediaQueryList.
   *
   * @type {Object[]}
   */

  var map = [];
  /**
   * Hold the previous breakpoint.
   *
   * @type {number|undefined}
   */

  var prevPoint;
  /**
   * Breakpoints component object.
   *
   * @type {Object}
   */

  var Breakpoints = {
    /**
     * Required only when the breakpoints definition is provided and browser supports matchMedia.
     *
     * @type {boolean}
     */
    required: breakpoints && matchMedia,

    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      map = Object.keys(breakpoints).sort(function (n, m) {
        return +n - +m;
      }).map(function (point) {
        return {
          point: point,
          mql: matchMedia("(max-width:" + point + "px)")
        };
      });
      /*
       * To keep monitoring resize event after destruction without "completely",
       * use native addEventListener instead of Splide.on.
       */

      this.destroy(true);
      addEventListener('resize', throttledCheck); // Keep initial options to apply them when no breakpoint matches.

      initialOptions = Splide.options;
      check();
    },

    /**
     * Destroy.
     *
     * @param {boolean} completely - Whether to destroy Splide completely.
     */
    destroy: function destroy(completely) {
      if (completely) {
        removeEventListener('resize', throttledCheck);
      }
    }
  };
  /**
   * Check the breakpoint.
   */

  function check() {
    var point = getPoint();

    if (point !== prevPoint) {
      prevPoint = point;
      var State = Splide.State;
      var options = breakpoints[point] || initialOptions;
      var destroy = options.destroy;

      if (destroy) {
        Splide.options = initialOptions;
        Splide.destroy(destroy === 'completely');
      } else {
        if (State.is(DESTROYED)) {
          Splide.mount();
        }

        Splide.options = options;
      }
    }
  }
  /**
   * Return the breakpoint matching current window width.
   * Note that Array.prototype.find is not supported by IE.
   *
   * @return {number|string} - A breakpoint as number or string. -1 if no point matches.
   */


  function getPoint() {
    var item = map.filter(function (item) {
      return item.mql.matches;
    })[0];
    return item ? item.point : -1;
  }

  return Breakpoints;
});
;// CONCATENATED MODULE: ./src/js/components/index.js
/**
 * Export components.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

















var COMPLETE = {
  Options: options,
  Breakpoints: breakpoints,
  Controller: controller,
  Elements: components_elements,
  Track: track,
  Clones: clones,
  Layout: layout,
  Drag: drag,
  Click: click,
  Autoplay: autoplay,
  Cover: cover,
  Arrows: arrows,
  Pagination: pagination,
  LazyLoad: lazyload,
  Keyboard: keyboard,
  Sync: sync,
  A11y: a11y
};
var LIGHT = {
  Options: options,
  Controller: controller,
  Elements: components_elements,
  Track: track,
  Clones: clones,
  Layout: layout,
  Drag: drag,
  Click: click,
  Arrows: arrows,
  Pagination: pagination,
  A11y: a11y
};
;// CONCATENATED MODULE: ./build/module/module.js
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

/**
 * Export Splide class for import.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */


/**
 * Export Splide class for import from other projects.
 */

var module_Splide = /*#__PURE__*/function (_Core) {
  _inheritsLoose(Splide, _Core);

  function Splide(root, options) {
    return _Core.call(this, root, options, COMPLETE) || this;
  }

  return Splide;
}(Splide);



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_139193__(moduleId) {
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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_139193__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__nested_webpack_require_139193__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__nested_webpack_require_139193__.o(definition, key) && !__nested_webpack_require_139193__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__nested_webpack_require_139193__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__nested_webpack_require_139193__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_139193__(311);
/******/ })()
;
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ // runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fcarouselsplide&absolutePagePath=C%3A%5CUsers%5CVaypol%5CDocuments%5CBIKINI%5Cbikini%5Cpages%5Ccarouselsplide%5Cindex.js!"));
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRoSG9sZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FycmF5V2l0aG91dEhvbGVzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9ub25JdGVyYWJsZVJlc3QuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2ltYWdlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3VzZS1pbnRlcnNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2FtcC1jb250ZXh0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9hbXAuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQtbWFuYWdlci1jb250ZXh0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9zaWRlLWVmZmVjdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdG8tYmFzZS02NC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2Fyb3VzZWxzcGxpZGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvcG9seWZpbGxzL29iamVjdC1hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vX05fRS8iLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2Fzc2V0cy9jYXJkX2V4YW1wbGUucG5nIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNwbGlkZWpzL3NwbGlkZS9kaXN0L2Nzcy90aGVtZXMvc3BsaWRlLWRlZmF1bHQubWluLmNzcz82MjM2Iiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzcGxpZGVqcy9zcGxpZGUvZGlzdC9jc3MvdGhlbWVzL3NwbGlkZS1kZWZhdWx0Lm1pbi5jc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC9janMvcmVhY3QtanN4LWRldi1ydW50aW1lLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QvY2pzL3JlYWN0LmRldmVsb3BtZW50LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC9qc3gtZGV2LXJ1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9zcGxpZGUtbmV4dGpzL3JlYWN0LXNwbGlkZS9kaXN0L2pzL2NvbXBvbmVudHMvU3BsaWRlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvc3BsaWRlLW5leHRqcy9yZWFjdC1zcGxpZGUvZGlzdC9qcy9jb21wb25lbnRzL1NwbGlkZVNsaWRlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvc3BsaWRlLW5leHRqcy9yZWFjdC1zcGxpZGUvZGlzdC9qcy9jb25zdGFudHMvZXZlbnRzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvc3BsaWRlLW5leHRqcy9yZWFjdC1zcGxpZGUvZGlzdC9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3NwbGlkZS1uZXh0anMvcmVhY3Qtc3BsaWRlL2Rpc3QvanMvdXRpbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9zcGxpZGUtbmV4dGpzL3NwbGlkZS9kaXN0L2pzL3NwbGlkZS5lc20uanMiXSwibmFtZXMiOlsiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJleHBvcnRzIiwiSW1hZ2UiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTIiLCJfZXh0ZW5kczIiLCJfcmVhY3QiLCJfaGVhZCIsIl90b0Jhc2UiLCJfaW1hZ2VDb25maWciLCJfdXNlSW50ZXJzZWN0aW9uIiwiVkFMSURfTE9BRElOR19WQUxVRVMiLCJ1bmRlZmluZWQiLCJsb2FkZXJzIiwiTWFwIiwiaW1naXhMb2FkZXIiLCJjbG91ZGluYXJ5TG9hZGVyIiwiYWthbWFpTG9hZGVyIiwiZGVmYXVsdExvYWRlciIsIlZBTElEX0xBWU9VVF9WQUxVRVMiLCJpc1N0YXRpY1JlcXVpcmUiLCJzcmMiLCJpc1N0YXRpY0ltYWdlRGF0YSIsImlzU3RhdGljSW1wb3J0IiwicHJvY2VzcyIsImltYWdlQ29uZmlnRGVmYXVsdCIsImNvbmZpZ0RldmljZVNpemVzIiwiZGV2aWNlU2l6ZXMiLCJjb25maWdJbWFnZVNpemVzIiwiaW1hZ2VTaXplcyIsImNvbmZpZ0xvYWRlciIsImxvYWRlciIsImNvbmZpZ1BhdGgiLCJwYXRoIiwiY29uZmlnRG9tYWlucyIsImRvbWFpbnMiLCJhbGxTaXplcyIsInNvcnQiLCJhIiwiYiIsImdldFdpZHRocyIsIndpZHRoIiwibGF5b3V0Iiwic2l6ZXMiLCJ2aWV3cG9ydFdpZHRoUmUiLCJwZXJjZW50U2l6ZXMiLCJtYXRjaCIsImV4ZWMiLCJwdXNoIiwicGFyc2VJbnQiLCJsZW5ndGgiLCJzbWFsbGVzdFJhdGlvIiwiTWF0aCIsIm1pbiIsIndpZHRocyIsImZpbHRlciIsInMiLCJraW5kIiwiU2V0IiwibWFwIiwidyIsImZpbmQiLCJwIiwiZ2VuZXJhdGVJbWdBdHRycyIsInVub3B0aW1pemVkIiwicXVhbGl0eSIsInNyY1NldCIsImxhc3QiLCJpIiwiam9pbiIsImdldEludCIsIngiLCJkZWZhdWx0SW1hZ2VMb2FkZXIiLCJsb2FkZXJQcm9wcyIsImxvYWQiLCJnZXQiLCJyb290IiwiRXJyb3IiLCJWQUxJRF9MT0FERVJTIiwicmVtb3ZlUGxhY2Vob2xkZXIiLCJpbWciLCJwbGFjZWhvbGRlciIsImhhbmRsZUxvYWQiLCJzdGFydHNXaXRoIiwiZGVjb2RlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ0aGVuIiwic3R5bGUiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRJbWFnZSIsImNvbXBsZXRlIiwib25sb2FkIiwiX3JlZiIsInByaW9yaXR5IiwibG9hZGluZyIsImNsYXNzTmFtZSIsImhlaWdodCIsIm9iamVjdEZpdCIsIm9iamVjdFBvc2l0aW9uIiwiYmx1ckRhdGFVUkwiLCJhbGwiLCJyZXN0Iiwic3RhdGljU3JjIiwic3RhdGljSW1hZ2VEYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsIndpZHRoSW50IiwiaGVpZ2h0SW50IiwicXVhbGl0eUludCIsImluY2x1ZGVzIiwiU3RyaW5nIiwiaXNOYU4iLCJjb25zb2xlIiwid2FybiIsIlZBTElEX0JMVVJfRVhUIiwiaXNMYXp5IiwidXNlSW50ZXJzZWN0aW9uIiwicm9vdE1hcmdpbiIsImRpc2FibGVkIiwic2V0UmVmIiwiaXNJbnRlcnNlY3RlZCIsImlzVmlzaWJsZSIsIndyYXBwZXJTdHlsZSIsInNpemVyU3R5bGUiLCJzaXplclN2ZyIsImltZ1N0eWxlIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwiYm90dG9tIiwicmlnaHQiLCJib3hTaXppbmciLCJwYWRkaW5nIiwiYm9yZGVyIiwibWFyZ2luIiwiZGlzcGxheSIsIm1pbldpZHRoIiwibWF4V2lkdGgiLCJtaW5IZWlnaHQiLCJtYXhIZWlnaHQiLCJxdW90aWVudCIsInBhZGRpbmdUb3AiLCJvdmVyZmxvdyIsImltZ0F0dHJpYnV0ZXMiLCJjcmVhdGVFbGVtZW50IiwiYWx0Iiwicm9sZSIsInRvQmFzZTY0IiwiT2JqZWN0IiwiYXNzaWduIiwiZGVjb2RpbmciLCJyZWYiLCJlbGVtZW50Iiwia2V5IiwicmVsIiwiYXMiLCJocmVmIiwiaW1hZ2VzcmNzZXQiLCJpbWFnZXNpemVzIiwibm9ybWFsaXplU3JjIiwic2xpY2UiLCJwYXJhbXMiLCJwYXJhbXNTdHJpbmciLCJtaXNzaW5nVmFsdWVzIiwicGFyc2VkU3JjIiwiVVJMIiwiZXJyIiwiZXJyb3IiLCJob3N0bmFtZSIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJzZWxmIiwiY2IiLCJzdGFydCIsIkRhdGUiLCJub3ciLCJzZXRUaW1lb3V0IiwiZGlkVGltZW91dCIsInRpbWVSZW1haW5pbmciLCJtYXgiLCJjYW5jZWxJZGxlQ2FsbGJhY2siLCJpZCIsImNsZWFyVGltZW91dCIsIl9yZXF1ZXN0SWRsZUNhbGxiYWNrIiwiaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImlzRGlzYWJsZWQiLCJ1bm9ic2VydmUiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwidXNlQ2FsbGJhY2siLCJlbCIsImN1cnJlbnQiLCJ0YWdOYW1lIiwib2JzZXJ2ZSIsInVzZUVmZmVjdCIsImlkbGVDYWxsYmFjayIsImNhbGxiYWNrIiwib3B0aW9ucyIsImNyZWF0ZU9ic2VydmVyIiwib2JzZXJ2ZXIiLCJlbGVtZW50cyIsInNldCIsInNpemUiLCJkaXNjb25uZWN0Iiwib2JzZXJ2ZXJzIiwiaW5zdGFuY2UiLCJlbnRyaWVzIiwiZm9yRWFjaCIsImVudHJ5IiwidGFyZ2V0IiwiaXNJbnRlcnNlY3RpbmciLCJpbnRlcnNlY3Rpb25SYXRpbyIsIm9iaiIsIl9fZXNNb2R1bGUiLCJBbXBTdGF0ZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiZGlzcGxheU5hbWUiLCJpc0luQW1wTW9kZSIsInVzZUFtcCIsIl9hbXBDb250ZXh0IiwiYW1wRmlyc3QiLCJoeWJyaWQiLCJoYXNRdWVyeSIsInVzZUNvbnRleHQiLCJIZWFkTWFuYWdlckNvbnRleHQiLCJkZWZhdWx0SGVhZCIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwiX3NpZGVFZmZlY3QiLCJfaGVhZE1hbmFnZXJDb250ZXh0IiwiX2FtcCIsIl9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSIsIldlYWtNYXAiLCJjYWNoZSIsImhhcyIsIm5ld09iaiIsImhhc1Byb3BlcnR5RGVzY3JpcHRvciIsImRlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiZGVzYyIsImluQW1wTW9kZSIsImhlYWQiLCJjaGFyU2V0IiwibmFtZSIsImNvbnRlbnQiLCJvbmx5UmVhY3RFbGVtZW50IiwibGlzdCIsImNoaWxkIiwidHlwZSIsIkZyYWdtZW50IiwiY29uY2F0IiwiQ2hpbGRyZW4iLCJ0b0FycmF5IiwicHJvcHMiLCJjaGlsZHJlbiIsInJlZHVjZSIsImZyYWdtZW50TGlzdCIsImZyYWdtZW50Q2hpbGQiLCJNRVRBVFlQRVMiLCJ1bmlxdWUiLCJrZXlzIiwidGFncyIsIm1ldGFUeXBlcyIsIm1ldGFDYXRlZ29yaWVzIiwiaCIsImlzVW5pcXVlIiwiaGFzS2V5IiwiaW5kZXhPZiIsImFkZCIsImxlbiIsIm1ldGF0eXBlIiwiY2F0ZWdvcnkiLCJjYXRlZ29yaWVzIiwicmVkdWNlQ29tcG9uZW50cyIsImhlYWRFbGVtZW50cyIsImhlYWRFbGVtZW50IiwiaGVhZEVsZW1lbnRDaGlsZHJlbiIsInJldmVyc2UiLCJjIiwiY2xvbmVFbGVtZW50IiwiSGVhZCIsImFtcFN0YXRlIiwiaGVhZE1hbmFnZXIiLCJyZWR1Y2VDb21wb25lbnRzVG9TdGF0ZSIsIl9kZWZhdWx0IiwiaXNTZXJ2ZXIiLCJfaGFzSGVhZE1hbmFnZXIiLCJlbWl0Q2hhbmdlIiwidXBkYXRlSGVhZCIsIm1vdW50ZWRJbnN0YW5jZXMiLCJDb21wb25lbnQiLCJzdHIiLCJ3aW5kb3ciLCJidG9hIiwiQ2Fyb3VzZWxTcGxpZGUiLCJyZXdpbmQiLCJwZXJQYWdlIiwicGVyTW92ZSIsImF1dG9wbGF5IiwiaW50ZXJ2YWwiLCJnYXAiLCJsYXp5TG9hZCIsInNwbGlkZSIsIm5ld0luZGV4IiwibG9nIiwiQ2FyZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLHdDQUF3QyxTQUFTO0FBQ2pEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxtQzs7Ozs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTs7QUFFQSxpQzs7Ozs7Ozs7OztBQ0pBLHVCQUF1QixtQkFBTyxDQUFDLHFGQUFvQjs7QUFFbkQ7QUFDQTtBQUNBOztBQUVBLG9DOzs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx3Qzs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUM7Ozs7Ozs7Ozs7QUNOQTtBQUNBLGlCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw4Qjs7Ozs7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlDOzs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwwQjs7Ozs7Ozs7OztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUM7Ozs7Ozs7Ozs7QUNQQSxxQkFBcUIsbUJBQU8sQ0FBQyxpRkFBa0I7O0FBRS9DO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBLDJCOzs7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RkFBOEYsZUFBZTtBQUM3RztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUssRUFBRTs7QUFFUCxpREFBaUQ7QUFDakQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsMkJBQTJCOztBQUUzQjtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQzs7QUFFdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7O0FBRVI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLFdBQVcsRUFBRTtBQUNiLFdBQVcsRUFBRTtBQUNiLFdBQVcsY0FBYztBQUN6QixXQUFXLEVBQUU7QUFDYixXQUFXLEVBQUU7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFL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OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsMkJBQTJCOztBQUUzQjtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0EseUNBQXlDO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFROztBQUVSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7QUFFUjtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBLFNBQVM7QUFDVCx3QkFBd0I7QUFDeEI7QUFDQSxTQUFTO0FBQ1Qsd0JBQXdCO0FBQ3hCO0FBQ0EsU0FBUztBQUNULHlCQUF5QjtBQUN6QjtBQUNBLFNBQVM7QUFDVCx5QkFBeUI7QUFDekI7QUFDQSxTQUFTO0FBQ1Qsa0NBQWtDO0FBQ2xDO0FBQ0EsU0FBUztBQUNULDRCQUE0QjtBQUM1QjtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBEQUEwRDs7QUFFMUQ7QUFDQTs7QUFFQTtBQUNBLDBEQUEwRDtBQUMxRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7O0FBR1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWSxrQkFBa0I7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7OztBQUdqQjtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBIQUEwSDtBQUMx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QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEscUJBQXFCO0FBQzdCLFFBQVEscUJBQXFCO0FBQzdCO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7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LHlDQUF5QztBQUM1RjtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVyxpQ0FBbUI7QUFDOUIsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxpQ0FBbUI7QUFDOUI7QUFDQSxpRUFBaUUsa0JBQWtCO0FBQ25GO0FBQ0EsMERBQTBELGNBQWM7QUFDeEU7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixpQ0FBbUI7QUFDcEMsVUFBVTtBQUNWO0FBQ0EsQ0FBQyxFIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvcGFnZXMvY2Fyb3VzZWxzcGxpZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycjI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5TGlrZVRvQXJyYXk7IiwiZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhIb2xlczsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXlcIik7XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRob3V0SG9sZXM7IiwiZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3M7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5OyIsImZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZXh0ZW5kczsiLCJmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfTtcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2Y7IiwidmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vc2V0UHJvdG90eXBlT2ZcIik7XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW5oZXJpdHM7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChpdGVyKSkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheTsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuO1xuICB2YXIgX2FyciA9IFtdO1xuICB2YXIgX24gPSB0cnVlO1xuICB2YXIgX2QgPSBmYWxzZTtcbiAgdmFyIF9lID0gdW5kZWZpbmVkO1xuXG4gIHRyeSB7XG4gICAgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2QgPSB0cnVlO1xuICAgIF9lID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIF9hcnI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheUxpbWl0OyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX25vbkl0ZXJhYmxlUmVzdDsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVNwcmVhZDsiLCJmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKTtcblxudmFyIGFzc2VydFRoaXNJbml0aWFsaXplZCA9IHJlcXVpcmUoXCIuL2Fzc2VydFRoaXNJbml0aWFsaXplZFwiKTtcblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9XG5cbiAgcmV0dXJuIGFzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjsiLCJmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcblxuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZjsiLCJ2YXIgYXJyYXlXaXRoSG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhIb2xlc1wiKTtcblxudmFyIGl0ZXJhYmxlVG9BcnJheUxpbWl0ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5TGltaXRcIik7XG5cbnZhciB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5XCIpO1xuXG52YXIgbm9uSXRlcmFibGVSZXN0ID0gcmVxdWlyZShcIi4vbm9uSXRlcmFibGVSZXN0XCIpO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHtcbiAgcmV0dXJuIGFycmF5V2l0aEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IG5vbkl0ZXJhYmxlUmVzdCgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zbGljZWRUb0FycmF5OyIsInZhciBhcnJheVdpdGhvdXRIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aG91dEhvbGVzXCIpO1xuXG52YXIgaXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5XCIpO1xuXG52YXIgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheVwiKTtcblxudmFyIG5vbkl0ZXJhYmxlU3ByZWFkID0gcmVxdWlyZShcIi4vbm9uSXRlcmFibGVTcHJlYWRcIik7XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aG91dEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5KGFycikgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBub25JdGVyYWJsZVNwcmVhZCgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90b0NvbnN1bWFibGVBcnJheTsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5XCIpO1xuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheTsiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PUltYWdlO3ZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCIpKTt2YXIgX2V4dGVuZHMyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9oZWFkPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9oZWFkXCIpKTt2YXIgX3RvQmFzZT1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjRcIik7dmFyIF9pbWFnZUNvbmZpZz1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZ1wiKTt2YXIgX3VzZUludGVyc2VjdGlvbj1yZXF1aXJlKFwiLi91c2UtaW50ZXJzZWN0aW9uXCIpO2lmKHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJyl7O2dsb2JhbC5fX05FWFRfSU1BR0VfSU1QT1JURUQ9dHJ1ZTt9Y29uc3QgVkFMSURfTE9BRElOR19WQUxVRVM9WydsYXp5JywnZWFnZXInLHVuZGVmaW5lZF07Y29uc3QgbG9hZGVycz1uZXcgTWFwKFtbJ2ltZ2l4JyxpbWdpeExvYWRlcl0sWydjbG91ZGluYXJ5JyxjbG91ZGluYXJ5TG9hZGVyXSxbJ2FrYW1haScsYWthbWFpTG9hZGVyXSxbJ2RlZmF1bHQnLGRlZmF1bHRMb2FkZXJdXSk7Y29uc3QgVkFMSURfTEFZT1VUX1ZBTFVFUz1bJ2ZpbGwnLCdmaXhlZCcsJ2ludHJpbnNpYycsJ3Jlc3BvbnNpdmUnLHVuZGVmaW5lZF07ZnVuY3Rpb24gaXNTdGF0aWNSZXF1aXJlKHNyYyl7cmV0dXJuIHNyYy5kZWZhdWx0IT09dW5kZWZpbmVkO31mdW5jdGlvbiBpc1N0YXRpY0ltYWdlRGF0YShzcmMpe3JldHVybiBzcmMuc3JjIT09dW5kZWZpbmVkO31mdW5jdGlvbiBpc1N0YXRpY0ltcG9ydChzcmMpe3JldHVybiB0eXBlb2Ygc3JjPT09J29iamVjdCcmJihpc1N0YXRpY1JlcXVpcmUoc3JjKXx8aXNTdGF0aWNJbWFnZURhdGEoc3JjKSk7fWNvbnN0e2RldmljZVNpemVzOmNvbmZpZ0RldmljZVNpemVzLGltYWdlU2l6ZXM6Y29uZmlnSW1hZ2VTaXplcyxsb2FkZXI6Y29uZmlnTG9hZGVyLHBhdGg6Y29uZmlnUGF0aCxkb21haW5zOmNvbmZpZ0RvbWFpbnN9PXByb2Nlc3MuZW52Ll9fTkVYVF9JTUFHRV9PUFRTfHxfaW1hZ2VDb25maWcuaW1hZ2VDb25maWdEZWZhdWx0Oy8vIHNvcnQgc21hbGxlc3QgdG8gbGFyZ2VzdFxuY29uc3QgYWxsU2l6ZXM9Wy4uLmNvbmZpZ0RldmljZVNpemVzLC4uLmNvbmZpZ0ltYWdlU2l6ZXNdO2NvbmZpZ0RldmljZVNpemVzLnNvcnQoKGEsYik9PmEtYik7YWxsU2l6ZXMuc29ydCgoYSxiKT0+YS1iKTtmdW5jdGlvbiBnZXRXaWR0aHMod2lkdGgsbGF5b3V0LHNpemVzKXtpZihzaXplcyYmKGxheW91dD09PSdmaWxsJ3x8bGF5b3V0PT09J3Jlc3BvbnNpdmUnKSl7Ly8gRmluZCBhbGwgdGhlIFwidndcIiBwZXJjZW50IHNpemVzIHVzZWQgaW4gdGhlIHNpemVzIHByb3BcbmNvbnN0IHZpZXdwb3J0V2lkdGhSZT0vKF58XFxzKSgxP1xcZD9cXGQpdncvZztjb25zdCBwZXJjZW50U2l6ZXM9W107Zm9yKGxldCBtYXRjaDttYXRjaD12aWV3cG9ydFdpZHRoUmUuZXhlYyhzaXplcyk7bWF0Y2gpe3BlcmNlbnRTaXplcy5wdXNoKHBhcnNlSW50KG1hdGNoWzJdKSk7fWlmKHBlcmNlbnRTaXplcy5sZW5ndGgpe2NvbnN0IHNtYWxsZXN0UmF0aW89TWF0aC5taW4oLi4ucGVyY2VudFNpemVzKSowLjAxO3JldHVybnt3aWR0aHM6YWxsU2l6ZXMuZmlsdGVyKHM9PnM+PWNvbmZpZ0RldmljZVNpemVzWzBdKnNtYWxsZXN0UmF0aW8pLGtpbmQ6J3cnfTt9cmV0dXJue3dpZHRoczphbGxTaXplcyxraW5kOid3J307fWlmKHR5cGVvZiB3aWR0aCE9PSdudW1iZXInfHxsYXlvdXQ9PT0nZmlsbCd8fGxheW91dD09PSdyZXNwb25zaXZlJyl7cmV0dXJue3dpZHRoczpjb25maWdEZXZpY2VTaXplcyxraW5kOid3J307fWNvbnN0IHdpZHRocz1bLi4ubmV3IFNldCgvLyA+IFRoaXMgbWVhbnMgdGhhdCBtb3N0IE9MRUQgc2NyZWVucyB0aGF0IHNheSB0aGV5IGFyZSAzeCByZXNvbHV0aW9uLFxuLy8gPiBhcmUgYWN0dWFsbHkgM3ggaW4gdGhlIGdyZWVuIGNvbG9yLCBidXQgb25seSAxLjV4IGluIHRoZSByZWQgYW5kXG4vLyA+IGJsdWUgY29sb3JzLiBTaG93aW5nIGEgM3ggcmVzb2x1dGlvbiBpbWFnZSBpbiB0aGUgYXBwIHZzIGEgMnhcbi8vID4gcmVzb2x1dGlvbiBpbWFnZSB3aWxsIGJlIHZpc3VhbGx5IHRoZSBzYW1lLCB0aG91Z2ggdGhlIDN4IGltYWdlXG4vLyA+IHRha2VzIHNpZ25pZmljYW50bHkgbW9yZSBkYXRhLiBFdmVuIHRydWUgM3ggcmVzb2x1dGlvbiBzY3JlZW5zIGFyZVxuLy8gPiB3YXN0ZWZ1bCBhcyB0aGUgaHVtYW4gZXllIGNhbm5vdCBzZWUgdGhhdCBsZXZlbCBvZiBkZXRhaWwgd2l0aG91dFxuLy8gPiBzb21ldGhpbmcgbGlrZSBhIG1hZ25pZnlpbmcgZ2xhc3MuXG4vLyBodHRwczovL2Jsb2cudHdpdHRlci5jb20vZW5naW5lZXJpbmcvZW5fdXMvdG9waWNzL2luZnJhc3RydWN0dXJlLzIwMTkvY2FwcGluZy1pbWFnZS1maWRlbGl0eS1vbi11bHRyYS1oaWdoLXJlc29sdXRpb24tZGV2aWNlcy5odG1sXG5bd2lkdGgsd2lkdGgqMi8qLCB3aWR0aCAqIDMqL10ubWFwKHc9PmFsbFNpemVzLmZpbmQocD0+cD49dyl8fGFsbFNpemVzW2FsbFNpemVzLmxlbmd0aC0xXSkpXTtyZXR1cm57d2lkdGhzLGtpbmQ6J3gnfTt9ZnVuY3Rpb24gZ2VuZXJhdGVJbWdBdHRycyh7c3JjLHVub3B0aW1pemVkLGxheW91dCx3aWR0aCxxdWFsaXR5LHNpemVzLGxvYWRlcn0pe2lmKHVub3B0aW1pemVkKXtyZXR1cm57c3JjLHNyY1NldDp1bmRlZmluZWQsc2l6ZXM6dW5kZWZpbmVkfTt9Y29uc3R7d2lkdGhzLGtpbmR9PWdldFdpZHRocyh3aWR0aCxsYXlvdXQsc2l6ZXMpO2NvbnN0IGxhc3Q9d2lkdGhzLmxlbmd0aC0xO3JldHVybntzaXplczohc2l6ZXMmJmtpbmQ9PT0ndyc/JzEwMHZ3JzpzaXplcyxzcmNTZXQ6d2lkdGhzLm1hcCgodyxpKT0+YCR7bG9hZGVyKHtzcmMscXVhbGl0eSx3aWR0aDp3fSl9ICR7a2luZD09PSd3Jz93OmkrMX0ke2tpbmR9YCkuam9pbignLCAnKSwvLyBJdCdzIGludGVuZGVkIHRvIGtlZXAgYHNyY2AgdGhlIGxhc3QgYXR0cmlidXRlIGJlY2F1c2UgUmVhY3QgdXBkYXRlc1xuLy8gYXR0cmlidXRlcyBpbiBvcmRlci4gSWYgd2Uga2VlcCBgc3JjYCB0aGUgZmlyc3Qgb25lLCBTYWZhcmkgd2lsbFxuLy8gaW1tZWRpYXRlbHkgc3RhcnQgdG8gZmV0Y2ggYHNyY2AsIGJlZm9yZSBgc2l6ZXNgIGFuZCBgc3JjU2V0YCBhcmUgZXZlblxuLy8gdXBkYXRlZCBieSBSZWFjdC4gVGhhdCBjYXVzZXMgbXVsdGlwbGUgdW5uZWNlc3NhcnkgcmVxdWVzdHMgaWYgYHNyY1NldGBcbi8vIGFuZCBgc2l6ZXNgIGFyZSBkZWZpbmVkLlxuLy8gVGhpcyBidWcgY2Fubm90IGJlIHJlcHJvZHVjZWQgaW4gQ2hyb21lIG9yIEZpcmVmb3guXG5zcmM6bG9hZGVyKHtzcmMscXVhbGl0eSx3aWR0aDp3aWR0aHNbbGFzdF19KX07fWZ1bmN0aW9uIGdldEludCh4KXtpZih0eXBlb2YgeD09PSdudW1iZXInKXtyZXR1cm4geDt9aWYodHlwZW9mIHg9PT0nc3RyaW5nJyl7cmV0dXJuIHBhcnNlSW50KHgsMTApO31yZXR1cm4gdW5kZWZpbmVkO31mdW5jdGlvbiBkZWZhdWx0SW1hZ2VMb2FkZXIobG9hZGVyUHJvcHMpe2NvbnN0IGxvYWQ9bG9hZGVycy5nZXQoY29uZmlnTG9hZGVyKTtpZihsb2FkKXtyZXR1cm4gbG9hZCgoMCxfZXh0ZW5kczIuZGVmYXVsdCkoe3Jvb3Q6Y29uZmlnUGF0aH0sbG9hZGVyUHJvcHMpKTt9dGhyb3cgbmV3IEVycm9yKGBVbmtub3duIFwibG9hZGVyXCIgZm91bmQgaW4gXCJuZXh0LmNvbmZpZy5qc1wiLiBFeHBlY3RlZDogJHtfaW1hZ2VDb25maWcuVkFMSURfTE9BREVSUy5qb2luKCcsICcpfS4gUmVjZWl2ZWQ6ICR7Y29uZmlnTG9hZGVyfWApO30vLyBTZWUgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xLzM5Nzc3ODMzLzI2NjUzNSBmb3Igd2h5IHdlIHVzZSB0aGlzIHJlZlxuLy8gaGFuZGxlciBpbnN0ZWFkIG9mIHRoZSBpbWcncyBvbkxvYWQgYXR0cmlidXRlLlxuZnVuY3Rpb24gcmVtb3ZlUGxhY2Vob2xkZXIoaW1nLHBsYWNlaG9sZGVyKXtpZihwbGFjZWhvbGRlcj09PSdibHVyJyYmaW1nKXtjb25zdCBoYW5kbGVMb2FkPSgpPT57aWYoIWltZy5zcmMuc3RhcnRzV2l0aCgnZGF0YTonKSl7Y29uc3QgcD0nZGVjb2RlJ2luIGltZz9pbWcuZGVjb2RlKCk6UHJvbWlzZS5yZXNvbHZlKCk7cC5jYXRjaCgoKT0+e30pLnRoZW4oKCk9PntpbWcuc3R5bGUuZmlsdGVyPSdub25lJztpbWcuc3R5bGUuYmFja2dyb3VuZFNpemU9J25vbmUnO2ltZy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2U9J25vbmUnO30pO319O2lmKGltZy5jb21wbGV0ZSl7Ly8gSWYgdGhlIHJlYWwgaW1hZ2UgZmFpbHMgdG8gbG9hZCwgdGhpcyB3aWxsIHN0aWxsIHJlbW92ZSB0aGUgcGxhY2Vob2xkZXIuXG4vLyBUaGlzIGlzIHRoZSBkZXNpcmVkIGJlaGF2aW9yIGZvciBub3csIGFuZCB3aWxsIGJlIHJldmlzaXRlZCB3aGVuIGVycm9yXG4vLyBoYW5kbGluZyBpcyB3b3JrZWQgb24gZm9yIHRoZSBpbWFnZSBjb21wb25lbnQgaXRzZWxmLlxuaGFuZGxlTG9hZCgpO31lbHNle2ltZy5vbmxvYWQ9aGFuZGxlTG9hZDt9fX1mdW5jdGlvbiBJbWFnZShfcmVmKXtsZXR7c3JjLHNpemVzLHVub3B0aW1pemVkPWZhbHNlLHByaW9yaXR5PWZhbHNlLGxvYWRpbmcsY2xhc3NOYW1lLHF1YWxpdHksd2lkdGgsaGVpZ2h0LG9iamVjdEZpdCxvYmplY3RQb3NpdGlvbixsb2FkZXI9ZGVmYXVsdEltYWdlTG9hZGVyLHBsYWNlaG9sZGVyPSdlbXB0eScsYmx1ckRhdGFVUkx9PV9yZWYsYWxsPSgwLF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlMi5kZWZhdWx0KShfcmVmLFtcInNyY1wiLFwic2l6ZXNcIixcInVub3B0aW1pemVkXCIsXCJwcmlvcml0eVwiLFwibG9hZGluZ1wiLFwiY2xhc3NOYW1lXCIsXCJxdWFsaXR5XCIsXCJ3aWR0aFwiLFwiaGVpZ2h0XCIsXCJvYmplY3RGaXRcIixcIm9iamVjdFBvc2l0aW9uXCIsXCJsb2FkZXJcIixcInBsYWNlaG9sZGVyXCIsXCJibHVyRGF0YVVSTFwiXSk7bGV0IHJlc3Q9YWxsO2xldCBsYXlvdXQ9c2l6ZXM/J3Jlc3BvbnNpdmUnOidpbnRyaW5zaWMnO2lmKCdsYXlvdXQnaW4gcmVzdCl7Ly8gT3ZlcnJpZGUgZGVmYXVsdCBsYXlvdXQgaWYgdGhlIHVzZXIgc3BlY2lmaWVkIG9uZTpcbmlmKHJlc3QubGF5b3V0KWxheW91dD1yZXN0LmxheW91dDsvLyBSZW1vdmUgcHJvcGVydHkgc28gaXQncyBub3Qgc3ByZWFkIGludG8gaW1hZ2U6XG5kZWxldGUgcmVzdFsnbGF5b3V0J107fWxldCBzdGF0aWNTcmM9Jyc7aWYoaXNTdGF0aWNJbXBvcnQoc3JjKSl7Y29uc3Qgc3RhdGljSW1hZ2VEYXRhPWlzU3RhdGljUmVxdWlyZShzcmMpP3NyYy5kZWZhdWx0OnNyYztpZighc3RhdGljSW1hZ2VEYXRhLnNyYyl7dGhyb3cgbmV3IEVycm9yKGBBbiBvYmplY3Qgc2hvdWxkIG9ubHkgYmUgcGFzc2VkIHRvIHRoZSBpbWFnZSBjb21wb25lbnQgc3JjIHBhcmFtZXRlciBpZiBpdCBjb21lcyBmcm9tIGEgc3RhdGljIGltYWdlIGltcG9ydC4gSXQgbXVzdCBpbmNsdWRlIHNyYy4gUmVjZWl2ZWQgJHtKU09OLnN0cmluZ2lmeShzdGF0aWNJbWFnZURhdGEpfWApO31ibHVyRGF0YVVSTD1ibHVyRGF0YVVSTHx8c3RhdGljSW1hZ2VEYXRhLmJsdXJEYXRhVVJMO3N0YXRpY1NyYz1zdGF0aWNJbWFnZURhdGEuc3JjO2lmKCFsYXlvdXR8fGxheW91dCE9PSdmaWxsJyl7aGVpZ2h0PWhlaWdodHx8c3RhdGljSW1hZ2VEYXRhLmhlaWdodDt3aWR0aD13aWR0aHx8c3RhdGljSW1hZ2VEYXRhLndpZHRoO2lmKCFzdGF0aWNJbWFnZURhdGEuaGVpZ2h0fHwhc3RhdGljSW1hZ2VEYXRhLndpZHRoKXt0aHJvdyBuZXcgRXJyb3IoYEFuIG9iamVjdCBzaG91bGQgb25seSBiZSBwYXNzZWQgdG8gdGhlIGltYWdlIGNvbXBvbmVudCBzcmMgcGFyYW1ldGVyIGlmIGl0IGNvbWVzIGZyb20gYSBzdGF0aWMgaW1hZ2UgaW1wb3J0LiBJdCBtdXN0IGluY2x1ZGUgaGVpZ2h0IGFuZCB3aWR0aC4gUmVjZWl2ZWQgJHtKU09OLnN0cmluZ2lmeShzdGF0aWNJbWFnZURhdGEpfWApO319fXNyYz10eXBlb2Ygc3JjPT09J3N0cmluZyc/c3JjOnN0YXRpY1NyYztjb25zdCB3aWR0aEludD1nZXRJbnQod2lkdGgpO2NvbnN0IGhlaWdodEludD1nZXRJbnQoaGVpZ2h0KTtjb25zdCBxdWFsaXR5SW50PWdldEludChxdWFsaXR5KTtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7aWYoIXNyYyl7dGhyb3cgbmV3IEVycm9yKGBJbWFnZSBpcyBtaXNzaW5nIHJlcXVpcmVkIFwic3JjXCIgcHJvcGVydHkuIE1ha2Ugc3VyZSB5b3UgcGFzcyBcInNyY1wiIGluIHByb3BzIHRvIHRoZSBcXGBuZXh0L2ltYWdlXFxgIGNvbXBvbmVudC4gUmVjZWl2ZWQ6ICR7SlNPTi5zdHJpbmdpZnkoe3dpZHRoLGhlaWdodCxxdWFsaXR5fSl9YCk7fWlmKCFWQUxJRF9MQVlPVVRfVkFMVUVTLmluY2x1ZGVzKGxheW91dCkpe3Rocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxheW91dFwiIHByb3BlcnR5LiBQcm92aWRlZCBcIiR7bGF5b3V0fVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MQVlPVVRfVkFMVUVTLm1hcChTdHJpbmcpLmpvaW4oJywnKX0uYCk7fWlmKHR5cGVvZiB3aWR0aEludCE9PSd1bmRlZmluZWQnJiZpc05hTih3aWR0aEludCl8fHR5cGVvZiBoZWlnaHRJbnQhPT0ndW5kZWZpbmVkJyYmaXNOYU4oaGVpZ2h0SW50KSl7dGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwid2lkdGhcIiBvciBcImhlaWdodFwiIHByb3BlcnR5LiBUaGVzZSBzaG91bGQgYmUgbnVtZXJpYyB2YWx1ZXMuYCk7fWlmKCFWQUxJRF9MT0FESU5HX1ZBTFVFUy5pbmNsdWRlcyhsb2FkaW5nKSl7dGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwibG9hZGluZ1wiIHByb3BlcnR5LiBQcm92aWRlZCBcIiR7bG9hZGluZ31cIiBzaG91bGQgYmUgb25lIG9mICR7VkFMSURfTE9BRElOR19WQUxVRVMubWFwKFN0cmluZykuam9pbignLCcpfS5gKTt9aWYocHJpb3JpdHkmJmxvYWRpbmc9PT0nbGF6eScpe3Rocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgYm90aCBcInByaW9yaXR5XCIgYW5kIFwibG9hZGluZz0nbGF6eSdcIiBwcm9wZXJ0aWVzLiBPbmx5IG9uZSBzaG91bGQgYmUgdXNlZC5gKTt9aWYocGxhY2Vob2xkZXI9PT0nYmx1cicpe2lmKGxheW91dCE9PSdmaWxsJyYmKHdpZHRoSW50fHwwKSooaGVpZ2h0SW50fHwwKTwxNjAwKXtjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaXMgc21hbGxlciB0aGFuIDQweDQwLiBDb25zaWRlciByZW1vdmluZyB0aGUgXCJwbGFjZWhvbGRlcj0nYmx1cidcIiBwcm9wZXJ0eSB0byBpbXByb3ZlIHBlcmZvcm1hbmNlLmApO31pZighYmx1ckRhdGFVUkwpe2NvbnN0IFZBTElEX0JMVVJfRVhUPVsnanBlZycsJ3BuZycsJ3dlYnAnXTsvLyBzaG91bGQgbWF0Y2ggbmV4dC1pbWFnZS1sb2FkZXJcbnRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgXCJwbGFjZWhvbGRlcj0nYmx1cidcIiBwcm9wZXJ0eSBidXQgaXMgbWlzc2luZyB0aGUgXCJibHVyRGF0YVVSTFwiIHByb3BlcnR5LlxuICAgICAgICAgIFBvc3NpYmxlIHNvbHV0aW9uczpcbiAgICAgICAgICAgIC0gQWRkIGEgXCJibHVyRGF0YVVSTFwiIHByb3BlcnR5LCB0aGUgY29udGVudHMgc2hvdWxkIGJlIGEgc21hbGwgRGF0YSBVUkwgdG8gcmVwcmVzZW50IHRoZSBpbWFnZVxuICAgICAgICAgICAgLSBDaGFuZ2UgdGhlIFwic3JjXCIgcHJvcGVydHkgdG8gYSBzdGF0aWMgaW1wb3J0IHdpdGggb25lIG9mIHRoZSBzdXBwb3J0ZWQgZmlsZSB0eXBlczogJHtWQUxJRF9CTFVSX0VYVC5qb2luKCcsJyl9XG4gICAgICAgICAgICAtIFJlbW92ZSB0aGUgXCJwbGFjZWhvbGRlclwiIHByb3BlcnR5LCBlZmZlY3RpdmVseSBubyBibHVyIGVmZmVjdFxuICAgICAgICAgIFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvcGxhY2Vob2xkZXItYmx1ci1kYXRhLXVybGApO319fWxldCBpc0xhenk9IXByaW9yaXR5JiYobG9hZGluZz09PSdsYXp5J3x8dHlwZW9mIGxvYWRpbmc9PT0ndW5kZWZpbmVkJyk7aWYoc3JjJiZzcmMuc3RhcnRzV2l0aCgnZGF0YTonKSl7Ly8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRUUC9CYXNpY3Nfb2ZfSFRUUC9EYXRhX1VSSXNcbnVub3B0aW1pemVkPXRydWU7aXNMYXp5PWZhbHNlO31jb25zdFtzZXRSZWYsaXNJbnRlcnNlY3RlZF09KDAsX3VzZUludGVyc2VjdGlvbi51c2VJbnRlcnNlY3Rpb24pKHtyb290TWFyZ2luOicyMDBweCcsZGlzYWJsZWQ6IWlzTGF6eX0pO2NvbnN0IGlzVmlzaWJsZT0haXNMYXp5fHxpc0ludGVyc2VjdGVkO2xldCB3cmFwcGVyU3R5bGU7bGV0IHNpemVyU3R5bGU7bGV0IHNpemVyU3ZnO2xldCBpbWdTdHlsZT0oMCxfZXh0ZW5kczIuZGVmYXVsdCkoe3Bvc2l0aW9uOidhYnNvbHV0ZScsdG9wOjAsbGVmdDowLGJvdHRvbTowLHJpZ2h0OjAsYm94U2l6aW5nOidib3JkZXItYm94JyxwYWRkaW5nOjAsYm9yZGVyOidub25lJyxtYXJnaW46J2F1dG8nLGRpc3BsYXk6J2Jsb2NrJyx3aWR0aDowLGhlaWdodDowLG1pbldpZHRoOicxMDAlJyxtYXhXaWR0aDonMTAwJScsbWluSGVpZ2h0OicxMDAlJyxtYXhIZWlnaHQ6JzEwMCUnLG9iamVjdEZpdCxvYmplY3RQb3NpdGlvbn0scGxhY2Vob2xkZXI9PT0nYmx1cic/e2ZpbHRlcjonYmx1cigyMHB4KScsYmFja2dyb3VuZFNpemU6J2NvdmVyJyxiYWNrZ3JvdW5kSW1hZ2U6YHVybChcIiR7Ymx1ckRhdGFVUkx9XCIpYH06dW5kZWZpbmVkKTtpZih0eXBlb2Ygd2lkdGhJbnQhPT0ndW5kZWZpbmVkJyYmdHlwZW9mIGhlaWdodEludCE9PSd1bmRlZmluZWQnJiZsYXlvdXQhPT0nZmlsbCcpey8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgLz5cbmNvbnN0IHF1b3RpZW50PWhlaWdodEludC93aWR0aEludDtjb25zdCBwYWRkaW5nVG9wPWlzTmFOKHF1b3RpZW50KT8nMTAwJSc6YCR7cXVvdGllbnQqMTAwfSVgO2lmKGxheW91dD09PSdyZXNwb25zaXZlJyl7Ly8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJyZXNwb25zaXZlXCIgLz5cbndyYXBwZXJTdHlsZT17ZGlzcGxheTonYmxvY2snLG92ZXJmbG93OidoaWRkZW4nLHBvc2l0aW9uOidyZWxhdGl2ZScsYm94U2l6aW5nOidib3JkZXItYm94JyxtYXJnaW46MH07c2l6ZXJTdHlsZT17ZGlzcGxheTonYmxvY2snLGJveFNpemluZzonYm9yZGVyLWJveCcscGFkZGluZ1RvcH07fWVsc2UgaWYobGF5b3V0PT09J2ludHJpbnNpYycpey8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiaW50cmluc2ljXCIgLz5cbndyYXBwZXJTdHlsZT17ZGlzcGxheTonaW5saW5lLWJsb2NrJyxtYXhXaWR0aDonMTAwJScsb3ZlcmZsb3c6J2hpZGRlbicscG9zaXRpb246J3JlbGF0aXZlJyxib3hTaXppbmc6J2JvcmRlci1ib3gnLG1hcmdpbjowfTtzaXplclN0eWxlPXtib3hTaXppbmc6J2JvcmRlci1ib3gnLGRpc3BsYXk6J2Jsb2NrJyxtYXhXaWR0aDonMTAwJSd9O3NpemVyU3ZnPWA8c3ZnIHdpZHRoPVwiJHt3aWR0aEludH1cIiBoZWlnaHQ9XCIke2hlaWdodEludH1cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmVyc2lvbj1cIjEuMVwiLz5gO31lbHNlIGlmKGxheW91dD09PSdmaXhlZCcpey8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiZml4ZWRcIiAvPlxud3JhcHBlclN0eWxlPXtvdmVyZmxvdzonaGlkZGVuJyxib3hTaXppbmc6J2JvcmRlci1ib3gnLGRpc3BsYXk6J2lubGluZS1ibG9jaycscG9zaXRpb246J3JlbGF0aXZlJyx3aWR0aDp3aWR0aEludCxoZWlnaHQ6aGVpZ2h0SW50fTt9fWVsc2UgaWYodHlwZW9mIHdpZHRoSW50PT09J3VuZGVmaW5lZCcmJnR5cGVvZiBoZWlnaHRJbnQ9PT0ndW5kZWZpbmVkJyYmbGF5b3V0PT09J2ZpbGwnKXsvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiBsYXlvdXQ9XCJmaWxsXCIgLz5cbndyYXBwZXJTdHlsZT17ZGlzcGxheTonYmxvY2snLG92ZXJmbG93OidoaWRkZW4nLHBvc2l0aW9uOidhYnNvbHV0ZScsdG9wOjAsbGVmdDowLGJvdHRvbTowLHJpZ2h0OjAsYm94U2l6aW5nOidib3JkZXItYm94JyxtYXJnaW46MH07fWVsc2V7Ly8gPEltYWdlIHNyYz1cImkucG5nXCIgLz5cbmlmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXt0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgbXVzdCB1c2UgXCJ3aWR0aFwiIGFuZCBcImhlaWdodFwiIHByb3BlcnRpZXMgb3IgXCJsYXlvdXQ9J2ZpbGwnXCIgcHJvcGVydHkuYCk7fX1sZXQgaW1nQXR0cmlidXRlcz17c3JjOidkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUlBQUFBQUFBUC8vL3lINUJBRUFBQUFBTEFBQUFBQUJBQUVBQUFJQlJBQTcnLHNyY1NldDp1bmRlZmluZWQsc2l6ZXM6dW5kZWZpbmVkfTtpZihpc1Zpc2libGUpe2ltZ0F0dHJpYnV0ZXM9Z2VuZXJhdGVJbWdBdHRycyh7c3JjLHVub3B0aW1pemVkLGxheW91dCx3aWR0aDp3aWR0aEludCxxdWFsaXR5OnF1YWxpdHlJbnQsc2l6ZXMsbG9hZGVyfSk7fXJldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse3N0eWxlOndyYXBwZXJTdHlsZX0sc2l6ZXJTdHlsZT8vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtzdHlsZTpzaXplclN0eWxlfSxzaXplclN2Zz8vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImltZ1wiLHtzdHlsZTp7bWF4V2lkdGg6JzEwMCUnLGRpc3BsYXk6J2Jsb2NrJyxtYXJnaW46MCxib3JkZXI6J25vbmUnLHBhZGRpbmc6MH0sYWx0OlwiXCIsXCJhcmlhLWhpZGRlblwiOnRydWUscm9sZTpcInByZXNlbnRhdGlvblwiLHNyYzpgZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwkeygwLF90b0Jhc2UudG9CYXNlNjQpKHNpemVyU3ZnKX1gfSk6bnVsbCk6bnVsbCwhaXNWaXNpYmxlJiYvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm5vc2NyaXB0XCIsbnVsbCwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImltZ1wiLE9iamVjdC5hc3NpZ24oe30scmVzdCxnZW5lcmF0ZUltZ0F0dHJzKHtzcmMsdW5vcHRpbWl6ZWQsbGF5b3V0LHdpZHRoOndpZHRoSW50LHF1YWxpdHk6cXVhbGl0eUludCxzaXplcyxsb2FkZXJ9KSx7ZGVjb2Rpbmc6XCJhc3luY1wiLHN0eWxlOmltZ1N0eWxlLGNsYXNzTmFtZTpjbGFzc05hbWV9KSkpLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsT2JqZWN0LmFzc2lnbih7fSxyZXN0LGltZ0F0dHJpYnV0ZXMse2RlY29kaW5nOlwiYXN5bmNcIixjbGFzc05hbWU6Y2xhc3NOYW1lLHJlZjplbGVtZW50PT57c2V0UmVmKGVsZW1lbnQpO3JlbW92ZVBsYWNlaG9sZGVyKGVsZW1lbnQscGxhY2Vob2xkZXIpO30sc3R5bGU6aW1nU3R5bGV9KSkscHJpb3JpdHk/LyojX19QVVJFX18qLyAvLyBOb3RlIGhvdyB3ZSBvbWl0IHRoZSBgaHJlZmAgYXR0cmlidXRlLCBhcyBpdCB3b3VsZCBvbmx5IGJlIHJlbGV2YW50XG4vLyBmb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBgaW1hZ2VzcmNzZXRgLCBhbmQgaW4gdGhvc2UgY2FzZXNcbi8vIGl0IHdvdWxkIGxpa2VseSBjYXVzZSB0aGUgaW5jb3JyZWN0IGltYWdlIHRvIGJlIHByZWxvYWRlZC5cbi8vXG4vLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zZW1hbnRpY3MuaHRtbCNhdHRyLWxpbmstaW1hZ2VzcmNzZXRcbl9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX2hlYWQuZGVmYXVsdCxudWxsLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLHtrZXk6J19fbmltZy0nK2ltZ0F0dHJpYnV0ZXMuc3JjK2ltZ0F0dHJpYnV0ZXMuc3JjU2V0K2ltZ0F0dHJpYnV0ZXMuc2l6ZXMscmVsOlwicHJlbG9hZFwiLGFzOlwiaW1hZ2VcIixocmVmOmltZ0F0dHJpYnV0ZXMuc3JjU2V0P3VuZGVmaW5lZDppbWdBdHRyaWJ1dGVzLnNyYy8vIEB0cy1pZ25vcmU6IGltYWdlc3Jjc2V0IGlzIG5vdCB5ZXQgaW4gdGhlIGxpbmsgZWxlbWVudCB0eXBlXG4saW1hZ2VzcmNzZXQ6aW1nQXR0cmlidXRlcy5zcmNTZXQvLyBAdHMtaWdub3JlOiBpbWFnZXNpemVzIGlzIG5vdCB5ZXQgaW4gdGhlIGxpbmsgZWxlbWVudCB0eXBlXG4saW1hZ2VzaXplczppbWdBdHRyaWJ1dGVzLnNpemVzfSkpOm51bGwpO30vL0JVSUxUIElOIExPQURFUlNcbmZ1bmN0aW9uIG5vcm1hbGl6ZVNyYyhzcmMpe3JldHVybiBzcmNbMF09PT0nLyc/c3JjLnNsaWNlKDEpOnNyYzt9ZnVuY3Rpb24gaW1naXhMb2FkZXIoe3Jvb3Qsc3JjLHdpZHRoLHF1YWxpdHl9KXsvLyBEZW1vOiBodHRwczovL3N0YXRpYy5pbWdpeC5uZXQvZGFpc3kucG5nP2Zvcm1hdD1hdXRvJmZpdD1tYXgmdz0zMDBcbmNvbnN0IHBhcmFtcz1bJ2F1dG89Zm9ybWF0JywnZml0PW1heCcsJ3c9Jyt3aWR0aF07bGV0IHBhcmFtc1N0cmluZz0nJztpZihxdWFsaXR5KXtwYXJhbXMucHVzaCgncT0nK3F1YWxpdHkpO31pZihwYXJhbXMubGVuZ3RoKXtwYXJhbXNTdHJpbmc9Jz8nK3BhcmFtcy5qb2luKCcmJyk7fXJldHVybmAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX0ke3BhcmFtc1N0cmluZ31gO31mdW5jdGlvbiBha2FtYWlMb2FkZXIoe3Jvb3Qsc3JjLHdpZHRofSl7cmV0dXJuYCR7cm9vdH0ke25vcm1hbGl6ZVNyYyhzcmMpfT9pbXdpZHRoPSR7d2lkdGh9YDt9ZnVuY3Rpb24gY2xvdWRpbmFyeUxvYWRlcih7cm9vdCxzcmMsd2lkdGgscXVhbGl0eX0pey8vIERlbW86IGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RlbW8vaW1hZ2UvdXBsb2FkL3dfMzAwLGNfbGltaXQscV9hdXRvL3R1cnRsZXMuanBnXG5jb25zdCBwYXJhbXM9WydmX2F1dG8nLCdjX2xpbWl0Jywnd18nK3dpZHRoLCdxXycrKHF1YWxpdHl8fCdhdXRvJyldO2xldCBwYXJhbXNTdHJpbmc9cGFyYW1zLmpvaW4oJywnKSsnLyc7cmV0dXJuYCR7cm9vdH0ke3BhcmFtc1N0cmluZ30ke25vcm1hbGl6ZVNyYyhzcmMpfWA7fWZ1bmN0aW9uIGRlZmF1bHRMb2FkZXIoe3Jvb3Qsc3JjLHdpZHRoLHF1YWxpdHl9KXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y29uc3QgbWlzc2luZ1ZhbHVlcz1bXTsvLyB0aGVzZSBzaG91bGQgYWx3YXlzIGJlIHByb3ZpZGVkIGJ1dCBtYWtlIHN1cmUgdGhleSBhcmVcbmlmKCFzcmMpbWlzc2luZ1ZhbHVlcy5wdXNoKCdzcmMnKTtpZighd2lkdGgpbWlzc2luZ1ZhbHVlcy5wdXNoKCd3aWR0aCcpO2lmKG1pc3NpbmdWYWx1ZXMubGVuZ3RoPjApe3Rocm93IG5ldyBFcnJvcihgTmV4dCBJbWFnZSBPcHRpbWl6YXRpb24gcmVxdWlyZXMgJHttaXNzaW5nVmFsdWVzLmpvaW4oJywgJyl9IHRvIGJlIHByb3ZpZGVkLiBNYWtlIHN1cmUgeW91IHBhc3MgdGhlbSBhcyBwcm9wcyB0byB0aGUgXFxgbmV4dC9pbWFnZVxcYCBjb21wb25lbnQuIFJlY2VpdmVkOiAke0pTT04uc3RyaW5naWZ5KHtzcmMsd2lkdGgscXVhbGl0eX0pfWApO31pZihzcmMuc3RhcnRzV2l0aCgnLy8nKSl7dGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gcGFyc2Ugc3JjIFwiJHtzcmN9XCIgb24gXFxgbmV4dC9pbWFnZVxcYCwgcHJvdG9jb2wtcmVsYXRpdmUgVVJMICgvLykgbXVzdCBiZSBjaGFuZ2VkIHRvIGFuIGFic29sdXRlIFVSTCAoaHR0cDovLyBvciBodHRwczovLylgKTt9aWYoIXNyYy5zdGFydHNXaXRoKCcvJykmJmNvbmZpZ0RvbWFpbnMpe2xldCBwYXJzZWRTcmM7dHJ5e3BhcnNlZFNyYz1uZXcgVVJMKHNyYyk7fWNhdGNoKGVycil7Y29uc29sZS5lcnJvcihlcnIpO3Rocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIHBhcnNlIHNyYyBcIiR7c3JjfVwiIG9uIFxcYG5leHQvaW1hZ2VcXGAsIGlmIHVzaW5nIHJlbGF0aXZlIGltYWdlIGl0IG11c3Qgc3RhcnQgd2l0aCBhIGxlYWRpbmcgc2xhc2ggXCIvXCIgb3IgYmUgYW4gYWJzb2x1dGUgVVJMIChodHRwOi8vIG9yIGh0dHBzOi8vKWApO31pZighY29uZmlnRG9tYWlucy5pbmNsdWRlcyhwYXJzZWRTcmMuaG9zdG5hbWUpKXt0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgc3JjIHByb3AgKCR7c3JjfSkgb24gXFxgbmV4dC9pbWFnZVxcYCwgaG9zdG5hbWUgXCIke3BhcnNlZFNyYy5ob3N0bmFtZX1cIiBpcyBub3QgY29uZmlndXJlZCB1bmRlciBpbWFnZXMgaW4geW91ciBcXGBuZXh0LmNvbmZpZy5qc1xcYFxcbmArYFNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25leHQtaW1hZ2UtdW5jb25maWd1cmVkLWhvc3RgKTt9fX1yZXR1cm5gJHtyb290fT91cmw9JHtlbmNvZGVVUklDb21wb25lbnQoc3JjKX0mdz0ke3dpZHRofSZxPSR7cXVhbGl0eXx8NzV9YDt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbWFnZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjaz1leHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2s9dm9pZCAwO2NvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2s9dHlwZW9mIHNlbGYhPT0ndW5kZWZpbmVkJyYmc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrfHxmdW5jdGlvbihjYil7bGV0IHN0YXJ0PURhdGUubm93KCk7cmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtjYih7ZGlkVGltZW91dDpmYWxzZSx0aW1lUmVtYWluaW5nOmZ1bmN0aW9uKCl7cmV0dXJuIE1hdGgubWF4KDAsNTAtKERhdGUubm93KCktc3RhcnQpKTt9fSk7fSwxKTt9O2V4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjaz1yZXF1ZXN0SWRsZUNhbGxiYWNrO2NvbnN0IGNhbmNlbElkbGVDYWxsYmFjaz10eXBlb2Ygc2VsZiE9PSd1bmRlZmluZWQnJiZzZWxmLmNhbmNlbElkbGVDYWxsYmFja3x8ZnVuY3Rpb24oaWQpe3JldHVybiBjbGVhclRpbWVvdXQoaWQpO307ZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2s9Y2FuY2VsSWRsZUNhbGxiYWNrO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMudXNlSW50ZXJzZWN0aW9uPXVzZUludGVyc2VjdGlvbjt2YXIgX3JlYWN0PXJlcXVpcmUoXCJyZWFjdFwiKTt2YXIgX3JlcXVlc3RJZGxlQ2FsbGJhY2s9cmVxdWlyZShcIi4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrXCIpO2NvbnN0IGhhc0ludGVyc2VjdGlvbk9ic2VydmVyPXR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciE9PSd1bmRlZmluZWQnO2Z1bmN0aW9uIHVzZUludGVyc2VjdGlvbih7cm9vdE1hcmdpbixkaXNhYmxlZH0pe2NvbnN0IGlzRGlzYWJsZWQ9ZGlzYWJsZWR8fCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcjtjb25zdCB1bm9ic2VydmU9KDAsX3JlYWN0LnVzZVJlZikoKTtjb25zdFt2aXNpYmxlLHNldFZpc2libGVdPSgwLF9yZWFjdC51c2VTdGF0ZSkoZmFsc2UpO2NvbnN0IHNldFJlZj0oMCxfcmVhY3QudXNlQ2FsbGJhY2spKGVsPT57aWYodW5vYnNlcnZlLmN1cnJlbnQpe3Vub2JzZXJ2ZS5jdXJyZW50KCk7dW5vYnNlcnZlLmN1cnJlbnQ9dW5kZWZpbmVkO31pZihpc0Rpc2FibGVkfHx2aXNpYmxlKXJldHVybjtpZihlbCYmZWwudGFnTmFtZSl7dW5vYnNlcnZlLmN1cnJlbnQ9b2JzZXJ2ZShlbCxpc1Zpc2libGU9PmlzVmlzaWJsZSYmc2V0VmlzaWJsZShpc1Zpc2libGUpLHtyb290TWFyZ2lufSk7fX0sW2lzRGlzYWJsZWQscm9vdE1hcmdpbix2aXNpYmxlXSk7KDAsX3JlYWN0LnVzZUVmZmVjdCkoKCk9PntpZighaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpe2lmKCF2aXNpYmxlKXtjb25zdCBpZGxlQ2FsbGJhY2s9KDAsX3JlcXVlc3RJZGxlQ2FsbGJhY2sucmVxdWVzdElkbGVDYWxsYmFjaykoKCk9PnNldFZpc2libGUodHJ1ZSkpO3JldHVybigpPT4oMCxfcmVxdWVzdElkbGVDYWxsYmFjay5jYW5jZWxJZGxlQ2FsbGJhY2spKGlkbGVDYWxsYmFjayk7fX19LFt2aXNpYmxlXSk7cmV0dXJuW3NldFJlZix2aXNpYmxlXTt9ZnVuY3Rpb24gb2JzZXJ2ZShlbGVtZW50LGNhbGxiYWNrLG9wdGlvbnMpe2NvbnN0e2lkLG9ic2VydmVyLGVsZW1lbnRzfT1jcmVhdGVPYnNlcnZlcihvcHRpb25zKTtlbGVtZW50cy5zZXQoZWxlbWVudCxjYWxsYmFjayk7b2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KTtyZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCl7ZWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpO29ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KTsvLyBEZXN0cm95IG9ic2VydmVyIHdoZW4gdGhlcmUncyBub3RoaW5nIGxlZnQgdG8gd2F0Y2g6XG5pZihlbGVtZW50cy5zaXplPT09MCl7b2JzZXJ2ZXIuZGlzY29ubmVjdCgpO29ic2VydmVycy5kZWxldGUoaWQpO319O31jb25zdCBvYnNlcnZlcnM9bmV3IE1hcCgpO2Z1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpe2NvbnN0IGlkPW9wdGlvbnMucm9vdE1hcmdpbnx8Jyc7bGV0IGluc3RhbmNlPW9ic2VydmVycy5nZXQoaWQpO2lmKGluc3RhbmNlKXtyZXR1cm4gaW5zdGFuY2U7fWNvbnN0IGVsZW1lbnRzPW5ldyBNYXAoKTtjb25zdCBvYnNlcnZlcj1uZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcz0+e2VudHJpZXMuZm9yRWFjaChlbnRyeT0+e2NvbnN0IGNhbGxiYWNrPWVsZW1lbnRzLmdldChlbnRyeS50YXJnZXQpO2NvbnN0IGlzVmlzaWJsZT1lbnRyeS5pc0ludGVyc2VjdGluZ3x8ZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8+MDtpZihjYWxsYmFjayYmaXNWaXNpYmxlKXtjYWxsYmFjayhpc1Zpc2libGUpO319KTt9LG9wdGlvbnMpO29ic2VydmVycy5zZXQoaWQsaW5zdGFuY2U9e2lkLG9ic2VydmVyLGVsZW1lbnRzfSk7cmV0dXJuIGluc3RhbmNlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1pbnRlcnNlY3Rpb24uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5BbXBTdGF0ZUNvbnRleHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO2Z1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKXtyZXR1cm4gb2JqJiZvYmouX19lc01vZHVsZT9vYmo6e2RlZmF1bHQ6b2JqfTt9Y29uc3QgQW1wU3RhdGVDb250ZXh0PS8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVDb250ZXh0KHt9KTtleHBvcnRzLkFtcFN0YXRlQ29udGV4dD1BbXBTdGF0ZUNvbnRleHQ7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe0FtcFN0YXRlQ29udGV4dC5kaXNwbGF5TmFtZT0nQW1wU3RhdGVDb250ZXh0Jzt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hbXAtY29udGV4dC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmlzSW5BbXBNb2RlPWlzSW5BbXBNb2RlO2V4cG9ydHMudXNlQW1wPXVzZUFtcDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX2FtcENvbnRleHQ9cmVxdWlyZShcIi4vYW1wLWNvbnRleHRcIik7ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmope3JldHVybiBvYmomJm9iai5fX2VzTW9kdWxlP29iajp7ZGVmYXVsdDpvYmp9O31mdW5jdGlvbiBpc0luQW1wTW9kZSh7YW1wRmlyc3Q9ZmFsc2UsaHlicmlkPWZhbHNlLGhhc1F1ZXJ5PWZhbHNlfT17fSl7cmV0dXJuIGFtcEZpcnN0fHxoeWJyaWQmJmhhc1F1ZXJ5O31mdW5jdGlvbiB1c2VBbXAoKXsvLyBEb24ndCBhc3NpZ24gdGhlIGNvbnRleHQgdmFsdWUgdG8gYSB2YXJpYWJsZSB0byBzYXZlIGJ5dGVzXG5yZXR1cm4gaXNJbkFtcE1vZGUoX3JlYWN0LmRlZmF1bHQudXNlQ29udGV4dChfYW1wQ29udGV4dC5BbXBTdGF0ZUNvbnRleHQpKTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hbXAuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5IZWFkTWFuYWdlckNvbnRleHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO2Z1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKXtyZXR1cm4gb2JqJiZvYmouX19lc01vZHVsZT9vYmo6e2RlZmF1bHQ6b2JqfTt9Y29uc3QgSGVhZE1hbmFnZXJDb250ZXh0PS8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVDb250ZXh0KHt9KTtleHBvcnRzLkhlYWRNYW5hZ2VyQ29udGV4dD1IZWFkTWFuYWdlckNvbnRleHQ7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe0hlYWRNYW5hZ2VyQ29udGV4dC5kaXNwbGF5TmFtZT0nSGVhZE1hbmFnZXJDb250ZXh0Jzt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1oZWFkLW1hbmFnZXItY29udGV4dC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHRIZWFkPWRlZmF1bHRIZWFkO2V4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfc2lkZUVmZmVjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3NpZGUtZWZmZWN0XCIpKTt2YXIgX2FtcENvbnRleHQ9cmVxdWlyZShcIi4vYW1wLWNvbnRleHRcIik7dmFyIF9oZWFkTWFuYWdlckNvbnRleHQ9cmVxdWlyZShcIi4vaGVhZC1tYW5hZ2VyLWNvbnRleHRcIik7dmFyIF9hbXA9cmVxdWlyZShcIi4vYW1wXCIpO2Z1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKXtyZXR1cm4gb2JqJiZvYmouX19lc01vZHVsZT9vYmo6e2RlZmF1bHQ6b2JqfTt9ZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCl7aWYodHlwZW9mIFdlYWtNYXAhPT1cImZ1bmN0aW9uXCIpcmV0dXJuIG51bGw7dmFyIGNhY2hlPW5ldyBXZWFrTWFwKCk7X2dldFJlcXVpcmVXaWxkY2FyZENhY2hlPWZ1bmN0aW9uKCl7cmV0dXJuIGNhY2hlO307cmV0dXJuIGNhY2hlO31mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmope2lmKG9iaiYmb2JqLl9fZXNNb2R1bGUpe3JldHVybiBvYmo7fWlmKG9iaj09PW51bGx8fHR5cGVvZiBvYmohPT1cIm9iamVjdFwiJiZ0eXBlb2Ygb2JqIT09XCJmdW5jdGlvblwiKXtyZXR1cm57ZGVmYXVsdDpvYmp9O312YXIgY2FjaGU9X2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7aWYoY2FjaGUmJmNhY2hlLmhhcyhvYmopKXtyZXR1cm4gY2FjaGUuZ2V0KG9iaik7fXZhciBuZXdPYmo9e307dmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvcj1PYmplY3QuZGVmaW5lUHJvcGVydHkmJk9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7Zm9yKHZhciBrZXkgaW4gb2JqKXtpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLGtleSkpe3ZhciBkZXNjPWhhc1Byb3BlcnR5RGVzY3JpcHRvcj9PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaixrZXkpOm51bGw7aWYoZGVzYyYmKGRlc2MuZ2V0fHxkZXNjLnNldCkpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosa2V5LGRlc2MpO31lbHNle25ld09ialtrZXldPW9ialtrZXldO319fW5ld09iai5kZWZhdWx0PW9iajtpZihjYWNoZSl7Y2FjaGUuc2V0KG9iaixuZXdPYmopO31yZXR1cm4gbmV3T2JqO31mdW5jdGlvbiBkZWZhdWx0SGVhZChpbkFtcE1vZGU9ZmFsc2Upe2NvbnN0IGhlYWQ9Wy8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLHtjaGFyU2V0OlwidXRmLThcIn0pXTtpZighaW5BbXBNb2RlKXtoZWFkLnB1c2goLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIse25hbWU6XCJ2aWV3cG9ydFwiLGNvbnRlbnQ6XCJ3aWR0aD1kZXZpY2Utd2lkdGhcIn0pKTt9cmV0dXJuIGhlYWQ7fWZ1bmN0aW9uIG9ubHlSZWFjdEVsZW1lbnQobGlzdCxjaGlsZCl7Ly8gUmVhY3QgY2hpbGRyZW4gY2FuIGJlIFwic3RyaW5nXCIgb3IgXCJudW1iZXJcIiBpbiB0aGlzIGNhc2Ugd2UgaWdub3JlIHRoZW0gZm9yIGJhY2t3YXJkcyBjb21wYXRcbmlmKHR5cGVvZiBjaGlsZD09PSdzdHJpbmcnfHx0eXBlb2YgY2hpbGQ9PT0nbnVtYmVyJyl7cmV0dXJuIGxpc3Q7fS8vIEFkZHMgc3VwcG9ydCBmb3IgUmVhY3QuRnJhZ21lbnRcbmlmKGNoaWxkLnR5cGU9PT1fcmVhY3QuZGVmYXVsdC5GcmFnbWVudCl7cmV0dXJuIGxpc3QuY29uY2F0KF9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLnRvQXJyYXkoY2hpbGQucHJvcHMuY2hpbGRyZW4pLnJlZHVjZSgoZnJhZ21lbnRMaXN0LGZyYWdtZW50Q2hpbGQpPT57aWYodHlwZW9mIGZyYWdtZW50Q2hpbGQ9PT0nc3RyaW5nJ3x8dHlwZW9mIGZyYWdtZW50Q2hpbGQ9PT0nbnVtYmVyJyl7cmV0dXJuIGZyYWdtZW50TGlzdDt9cmV0dXJuIGZyYWdtZW50TGlzdC5jb25jYXQoZnJhZ21lbnRDaGlsZCk7fSxbXSkpO31yZXR1cm4gbGlzdC5jb25jYXQoY2hpbGQpO31jb25zdCBNRVRBVFlQRVM9WyduYW1lJywnaHR0cEVxdWl2JywnY2hhclNldCcsJ2l0ZW1Qcm9wJ107LypcbiByZXR1cm5zIGEgZnVuY3Rpb24gZm9yIGZpbHRlcmluZyBoZWFkIGNoaWxkIGVsZW1lbnRzXG4gd2hpY2ggc2hvdWxkbid0IGJlIGR1cGxpY2F0ZWQsIGxpa2UgPHRpdGxlLz5cbiBBbHNvIGFkZHMgc3VwcG9ydCBmb3IgZGVkdXBsaWNhdGVkIGBrZXlgIHByb3BlcnRpZXNcbiovZnVuY3Rpb24gdW5pcXVlKCl7Y29uc3Qga2V5cz1uZXcgU2V0KCk7Y29uc3QgdGFncz1uZXcgU2V0KCk7Y29uc3QgbWV0YVR5cGVzPW5ldyBTZXQoKTtjb25zdCBtZXRhQ2F0ZWdvcmllcz17fTtyZXR1cm4gaD0+e2xldCBpc1VuaXF1ZT10cnVlO2xldCBoYXNLZXk9ZmFsc2U7aWYoaC5rZXkmJnR5cGVvZiBoLmtleSE9PSdudW1iZXInJiZoLmtleS5pbmRleE9mKCckJyk+MCl7aGFzS2V5PXRydWU7Y29uc3Qga2V5PWgua2V5LnNsaWNlKGgua2V5LmluZGV4T2YoJyQnKSsxKTtpZihrZXlzLmhhcyhrZXkpKXtpc1VuaXF1ZT1mYWxzZTt9ZWxzZXtrZXlzLmFkZChrZXkpO319Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlZmF1bHQtY2FzZVxuc3dpdGNoKGgudHlwZSl7Y2FzZSd0aXRsZSc6Y2FzZSdiYXNlJzppZih0YWdzLmhhcyhoLnR5cGUpKXtpc1VuaXF1ZT1mYWxzZTt9ZWxzZXt0YWdzLmFkZChoLnR5cGUpO31icmVhaztjYXNlJ21ldGEnOmZvcihsZXQgaT0wLGxlbj1NRVRBVFlQRVMubGVuZ3RoO2k8bGVuO2krKyl7Y29uc3QgbWV0YXR5cGU9TUVUQVRZUEVTW2ldO2lmKCFoLnByb3BzLmhhc093blByb3BlcnR5KG1ldGF0eXBlKSljb250aW51ZTtpZihtZXRhdHlwZT09PSdjaGFyU2V0Jyl7aWYobWV0YVR5cGVzLmhhcyhtZXRhdHlwZSkpe2lzVW5pcXVlPWZhbHNlO31lbHNle21ldGFUeXBlcy5hZGQobWV0YXR5cGUpO319ZWxzZXtjb25zdCBjYXRlZ29yeT1oLnByb3BzW21ldGF0eXBlXTtjb25zdCBjYXRlZ29yaWVzPW1ldGFDYXRlZ29yaWVzW21ldGF0eXBlXXx8bmV3IFNldCgpO2lmKChtZXRhdHlwZSE9PSduYW1lJ3x8IWhhc0tleSkmJmNhdGVnb3JpZXMuaGFzKGNhdGVnb3J5KSl7aXNVbmlxdWU9ZmFsc2U7fWVsc2V7Y2F0ZWdvcmllcy5hZGQoY2F0ZWdvcnkpO21ldGFDYXRlZ29yaWVzW21ldGF0eXBlXT1jYXRlZ29yaWVzO319fWJyZWFrO31yZXR1cm4gaXNVbmlxdWU7fTt9LyoqXG4gKlxuICogQHBhcmFtIGhlYWRFbGVtZW50cyBMaXN0IG9mIG11bHRpcGxlIDxIZWFkPiBpbnN0YW5jZXNcbiAqL2Z1bmN0aW9uIHJlZHVjZUNvbXBvbmVudHMoaGVhZEVsZW1lbnRzLHByb3BzKXtyZXR1cm4gaGVhZEVsZW1lbnRzLnJlZHVjZSgobGlzdCxoZWFkRWxlbWVudCk9Pntjb25zdCBoZWFkRWxlbWVudENoaWxkcmVuPV9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLnRvQXJyYXkoaGVhZEVsZW1lbnQucHJvcHMuY2hpbGRyZW4pO3JldHVybiBsaXN0LmNvbmNhdChoZWFkRWxlbWVudENoaWxkcmVuKTt9LFtdKS5yZWR1Y2Uob25seVJlYWN0RWxlbWVudCxbXSkucmV2ZXJzZSgpLmNvbmNhdChkZWZhdWx0SGVhZChwcm9wcy5pbkFtcE1vZGUpKS5maWx0ZXIodW5pcXVlKCkpLnJldmVyc2UoKS5tYXAoKGMsaSk9Pntjb25zdCBrZXk9Yy5rZXl8fGk7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0nZGV2ZWxvcG1lbnQnJiZwcm9jZXNzLmVudi5fX05FWFRfT1BUSU1JWkVfRk9OVFMmJiFwcm9wcy5pbkFtcE1vZGUpe2lmKGMudHlwZT09PSdsaW5rJyYmYy5wcm9wc1snaHJlZiddJiYvLyBUT0RPKHByYXRlZWtiaEApOiBSZXBsYWNlIHRoaXMgd2l0aCBjb25zdCBmcm9tIGBjb25zdGFudHNgIHdoZW4gdGhlIHRyZWUgc2hha2luZyB3b3Jrcy5cblsnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MnLCdodHRwczovL3VzZS50eXBla2l0Lm5ldC8nXS5zb21lKHVybD0+Yy5wcm9wc1snaHJlZiddLnN0YXJ0c1dpdGgodXJsKSkpe2NvbnN0IG5ld1Byb3BzPXsuLi4oYy5wcm9wc3x8e30pfTtuZXdQcm9wc1snZGF0YS1ocmVmJ109bmV3UHJvcHNbJ2hyZWYnXTtuZXdQcm9wc1snaHJlZiddPXVuZGVmaW5lZDsvLyBBZGQgdGhpcyBhdHRyaWJ1dGUgdG8gbWFrZSBpdCBlYXN5IHRvIGlkZW50aWZ5IG9wdGltaXplZCB0YWdzXG5uZXdQcm9wc1snZGF0YS1vcHRpbWl6ZWQtZm9udHMnXT10cnVlO3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jbG9uZUVsZW1lbnQoYyxuZXdQcm9wcyk7fX1yZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY2xvbmVFbGVtZW50KGMse2tleX0pO30pO30vKipcbiAqIFRoaXMgY29tcG9uZW50IGluamVjdHMgZWxlbWVudHMgdG8gYDxoZWFkPmAgb2YgeW91ciBwYWdlLlxuICogVG8gYXZvaWQgZHVwbGljYXRlZCBgdGFnc2AgaW4gYDxoZWFkPmAgeW91IGNhbiB1c2UgdGhlIGBrZXlgIHByb3BlcnR5LCB3aGljaCB3aWxsIG1ha2Ugc3VyZSBldmVyeSB0YWcgaXMgb25seSByZW5kZXJlZCBvbmNlLlxuICovZnVuY3Rpb24gSGVhZCh7Y2hpbGRyZW59KXtjb25zdCBhbXBTdGF0ZT0oMCxfcmVhY3QudXNlQ29udGV4dCkoX2FtcENvbnRleHQuQW1wU3RhdGVDb250ZXh0KTtjb25zdCBoZWFkTWFuYWdlcj0oMCxfcmVhY3QudXNlQ29udGV4dCkoX2hlYWRNYW5hZ2VyQ29udGV4dC5IZWFkTWFuYWdlckNvbnRleHQpO3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9zaWRlRWZmZWN0LmRlZmF1bHQse3JlZHVjZUNvbXBvbmVudHNUb1N0YXRlOnJlZHVjZUNvbXBvbmVudHMsaGVhZE1hbmFnZXI6aGVhZE1hbmFnZXIsaW5BbXBNb2RlOigwLF9hbXAuaXNJbkFtcE1vZGUpKGFtcFN0YXRlKX0sY2hpbGRyZW4pO312YXIgX2RlZmF1bHQ9SGVhZDtleHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1oZWFkLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9yZWFjdD1yZXF1aXJlKFwicmVhY3RcIik7Y29uc3QgaXNTZXJ2ZXI9dHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnO2NsYXNzIF9kZWZhdWx0IGV4dGVuZHMgX3JlYWN0LkNvbXBvbmVudHtjb25zdHJ1Y3Rvcihwcm9wcyl7c3VwZXIocHJvcHMpO3RoaXMuX2hhc0hlYWRNYW5hZ2VyPXZvaWQgMDt0aGlzLmVtaXRDaGFuZ2U9KCk9PntpZih0aGlzLl9oYXNIZWFkTWFuYWdlcil7dGhpcy5wcm9wcy5oZWFkTWFuYWdlci51cGRhdGVIZWFkKHRoaXMucHJvcHMucmVkdWNlQ29tcG9uZW50c1RvU3RhdGUoWy4uLnRoaXMucHJvcHMuaGVhZE1hbmFnZXIubW91bnRlZEluc3RhbmNlc10sdGhpcy5wcm9wcykpO319O3RoaXMuX2hhc0hlYWRNYW5hZ2VyPXRoaXMucHJvcHMuaGVhZE1hbmFnZXImJnRoaXMucHJvcHMuaGVhZE1hbmFnZXIubW91bnRlZEluc3RhbmNlcztpZihpc1NlcnZlciYmdGhpcy5faGFzSGVhZE1hbmFnZXIpe3RoaXMucHJvcHMuaGVhZE1hbmFnZXIubW91bnRlZEluc3RhbmNlcy5hZGQodGhpcyk7dGhpcy5lbWl0Q2hhbmdlKCk7fX1jb21wb25lbnREaWRNb3VudCgpe2lmKHRoaXMuX2hhc0hlYWRNYW5hZ2VyKXt0aGlzLnByb3BzLmhlYWRNYW5hZ2VyLm1vdW50ZWRJbnN0YW5jZXMuYWRkKHRoaXMpO310aGlzLmVtaXRDaGFuZ2UoKTt9Y29tcG9uZW50RGlkVXBkYXRlKCl7dGhpcy5lbWl0Q2hhbmdlKCk7fWNvbXBvbmVudFdpbGxVbm1vdW50KCl7aWYodGhpcy5faGFzSGVhZE1hbmFnZXIpe3RoaXMucHJvcHMuaGVhZE1hbmFnZXIubW91bnRlZEluc3RhbmNlcy5kZWxldGUodGhpcyk7fXRoaXMuZW1pdENoYW5nZSgpO31yZW5kZXIoKXtyZXR1cm4gbnVsbDt9fWV4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNpZGUtZWZmZWN0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMudG9CYXNlNjQ9dG9CYXNlNjQ7LyoqXG4gKiBJc29tb3JwaGljIGJhc2U2NCB0aGF0IHdvcmtzIG9uIHRoZSBzZXJ2ZXIgYW5kIGNsaWVudFxuICovZnVuY3Rpb24gdG9CYXNlNjQoc3RyKXtpZih0eXBlb2Ygd2luZG93PT09J3VuZGVmaW5lZCcpe3JldHVybiBCdWZmZXIuZnJvbShzdHIpLnRvU3RyaW5nKCdiYXNlNjQnKTt9ZWxzZXtyZXR1cm4gd2luZG93LmJ0b2Eoc3RyKTt9fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dG8tYmFzZS02NC5qcy5tYXAiLCJpbXBvcnQgeyBTcGxpZGUsIFNwbGlkZVNsaWRlIH0gZnJvbSBcInNwbGlkZS1uZXh0anMvcmVhY3Qtc3BsaWRlXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi4vYXNzZXRzL2NhcmRfZXhhbXBsZS5wbmdcIjtcclxuaW1wb3J0IFwiQHNwbGlkZWpzL3NwbGlkZS9kaXN0L2Nzcy90aGVtZXMvc3BsaWRlLWRlZmF1bHQubWluLmNzc1wiO1xyXG5cclxuY29uc3QgQ2Fyb3VzZWxTcGxpZGUgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxTcGxpZGVcclxuICAgICAgb3B0aW9ucz17e1xyXG4gICAgICAgIHJld2luZDogdHJ1ZSxcclxuICAgICAgICBwZXJQYWdlOiAzLFxyXG4gICAgICAgIHBlck1vdmU6IDEsXHJcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgaW50ZXJ2YWw6IDMwMDAsXHJcbiAgICAgICAgIGdhcDogMjAsXHJcbiAgICAgICAgIGxhenlMb2FkOiAnbmVhcmJ5JyxcclxuICAgICAgICAgcGFkZGluZzoge1xyXG4gICAgICAgICAgcmlnaHQgOiAxMCxcclxuICAgICAgICAgIGxlZnQ6IDEwLFxyXG4gICAgICAgIH1cclxuICAgICAgfX1cclxuICAgICAgb25Nb3ZlZD17KHNwbGlkZSwgbmV3SW5kZXgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm1vdmVkXCIsIG5ld0luZGV4KTtcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPFNwbGlkZVNsaWRlPlxyXG4gICAgICAgIDxJbWFnZSBzcmM9e0NhcmR9IGFsdD1cIlBpY3R1cmUgb2YgdGhlIGF1dGhvclwiIC8+XHJcbiAgICAgIDwvU3BsaWRlU2xpZGU+XHJcbiAgICAgIDxTcGxpZGVTbGlkZT5cclxuICAgICAgICA8SW1hZ2Ugc3JjPXtDYXJkfSBhbHQ9XCJQaWN0dXJlIG9mIHRoZSBhdXRob3JcIiAvPlxyXG4gICAgICA8L1NwbGlkZVNsaWRlPlxyXG4gICAgICA8U3BsaWRlU2xpZGU+XHJcbiAgICAgICAgPEltYWdlIHNyYz17Q2FyZH0gYWx0PVwiUGljdHVyZSBvZiB0aGUgYXV0aG9yXCIgLz5cclxuICAgICAgPC9TcGxpZGVTbGlkZT5cclxuICAgICAgPFNwbGlkZVNsaWRlPlxyXG4gICAgICAgIDxJbWFnZSBzcmM9e0NhcmR9IGFsdD1cIlBpY3R1cmUgb2YgdGhlIGF1dGhvclwiIC8+XHJcbiAgICAgIDwvU3BsaWRlU2xpZGU+XHJcbiAgICAgIDxTcGxpZGVTbGlkZT5cclxuICAgICAgICA8SW1hZ2Ugc3JjPXtDYXJkfSBhbHQ9XCJQaWN0dXJlIG9mIHRoZSBhdXRob3JcIiAvPlxyXG4gICAgICA8L1NwbGlkZVNsaWRlPlxyXG4gICAgICA8U3BsaWRlU2xpZGU+XHJcbiAgICAgICAgPEltYWdlIHNyYz17Q2FyZH0gYWx0PVwiUGljdHVyZSBvZiB0aGUgYXV0aG9yXCIgLz5cclxuICAgICAgPC9TcGxpZGVTbGlkZT5cclxuICAgIDwvU3BsaWRlPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbFNwbGlkZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIGFzc2lnbj1PYmplY3QuYXNzaWduLmJpbmQoT2JqZWN0KTttb2R1bGUuZXhwb3J0cz1hc3NpZ247bW9kdWxlLmV4cG9ydHMuZGVmYXVsdD1tb2R1bGUuZXhwb3J0cztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW9iamVjdC1hc3NpZ24uanMubWFwIiwiXG4gICAgKHdpbmRvdy5fX05FWFRfUCA9IHdpbmRvdy5fX05FWFRfUCB8fCBbXSkucHVzaChbXG4gICAgICBcIi9jYXJvdXNlbHNwbGlkZVwiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXFZheXBvbFxcXFxEb2N1bWVudHNcXFxcQklLSU5JXFxcXGJpa2luaVxcXFxwYWdlc1xcXFxjYXJvdXNlbHNwbGlkZVxcXFxpbmRleC5qc1wiKTtcbiAgICAgIH1cbiAgICBdKTtcbiAgIiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wYWdlcy9hc3NldHMvY2FyZF9leGFtcGxlLmVhZmI2ZGEyM2I5MGRhYjIwODYwZjA0NDg2MDlhMjI3LnBuZ1wiLFwiaGVpZ2h0XCI6NTE4LFwid2lkdGhcIjozMTksXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBVUFBQUFJQ0FZQUFBQXg4VFU3QUFBQWxFbEVRVlI0MmlXTk1RckNRQlJFOTF6YWV4WHR2SWxnNHgyc3hFSUxFeVJZQ2RaaFd6VkJOMWFKQ1Q4Yk56c2ptendZR0thWXB3QXdSR3RORVdGQWNRUlpsc0Y3UDNSbFRNSDlkb2Y0R1BGeGY5SmFTNVhuTDY1WEcwd25NODRYUzZhcHBuTE9zYXdxdkkzaHQ2NEpZUHgwdGtOZGZPQ2tKY01vOUd6NkRyWnIyWHJIUHRqbEhMRThIU0MzSzVvazV1K1M0QS96b1pIZ1dOVXFEd0FBQUFCSlJVNUVya0pnZ2c9PVwifTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNV0udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNV0udXNlWzJdIS4vc3BsaWRlLWRlZmF1bHQubWluLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLGIsaXNOYW1lZEV4cG9ydCl7aWYoIWEmJmJ8fGEmJiFiKXtyZXR1cm4gZmFsc2U7fWxldCBwO2ZvcihwIGluIGEpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKGFbcF0hPT1iW3BdKXtyZXR1cm4gZmFsc2U7fX1mb3IocCBpbiBiKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZighYVtwXSl7cmV0dXJuIGZhbHNlO319cmV0dXJuIHRydWU7fTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi8uLi8uLi9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNV0udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNV0udXNlWzJdIS4vc3BsaWRlLWRlZmF1bHQubWluLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzVdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzVdLnVzZVsyXSEuL3NwbGlkZS1kZWZhdWx0Lm1pbi5jc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7Y29uc3QgaXNPbGRJRT1mdW5jdGlvbiBpc09sZElFKCl7bGV0IG1lbW87cmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCl7aWYodHlwZW9mIG1lbW89PT0ndW5kZWZpbmVkJyl7Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncbi8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbi8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbi8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5tZW1vPUJvb2xlYW4od2luZG93JiZkb2N1bWVudCYmZG9jdW1lbnQuYWxsJiYhd2luZG93LmF0b2IpO31yZXR1cm4gbWVtbzt9O30oKTtjb25zdCBnZXRUYXJnZXQ9ZnVuY3Rpb24gZ2V0VGFyZ2V0KCl7Y29uc3QgbWVtbz17fTtyZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KXtpZih0eXBlb2YgbWVtb1t0YXJnZXRdPT09J3VuZGVmaW5lZCcpe2xldCBzdHlsZVRhcmdldD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbmlmKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCYmc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpe3RyeXsvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbnN0eWxlVGFyZ2V0PXN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO31jYXRjaChlKXsvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuc3R5bGVUYXJnZXQ9bnVsbDt9fW1lbW9bdGFyZ2V0XT1zdHlsZVRhcmdldDt9cmV0dXJuIG1lbW9bdGFyZ2V0XTt9O30oKTtjb25zdCBzdHlsZXNJbkRvbT1bXTtmdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKXtsZXQgcmVzdWx0PS0xO2ZvcihsZXQgaT0wO2k8c3R5bGVzSW5Eb20ubGVuZ3RoO2krKyl7aWYoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllcj09PWlkZW50aWZpZXIpe3Jlc3VsdD1pO2JyZWFrO319cmV0dXJuIHJlc3VsdDt9ZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3Qsb3B0aW9ucyl7Y29uc3QgaWRDb3VudE1hcD17fTtjb25zdCBpZGVudGlmaWVycz1bXTtmb3IobGV0IGk9MDtpPGxpc3QubGVuZ3RoO2krKyl7Y29uc3QgaXRlbT1saXN0W2ldO2NvbnN0IGlkPW9wdGlvbnMuYmFzZT9pdGVtWzBdK29wdGlvbnMuYmFzZTppdGVtWzBdO2NvbnN0IGNvdW50PWlkQ291bnRNYXBbaWRdfHwwO2NvbnN0IGlkZW50aWZpZXI9aWQrJyAnK2NvdW50LnRvU3RyaW5nKCk7aWRDb3VudE1hcFtpZF09Y291bnQrMTtjb25zdCBpbmRleD1nZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtjb25zdCBvYmo9e2NzczppdGVtWzFdLG1lZGlhOml0ZW1bMl0sc291cmNlTWFwOml0ZW1bM119O2lmKGluZGV4IT09LTEpe3N0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7c3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTt9ZWxzZXtzdHlsZXNJbkRvbS5wdXNoKHtpZGVudGlmaWVyOmlkZW50aWZpZXIsdXBkYXRlcjphZGRTdHlsZShvYmosb3B0aW9ucykscmVmZXJlbmNlczoxfSk7fWlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7fXJldHVybiBpZGVudGlmaWVyczt9ZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpe2NvbnN0IHN0eWxlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7Y29uc3QgYXR0cmlidXRlcz1vcHRpb25zLmF0dHJpYnV0ZXN8fHt9O2lmKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlPT09J3VuZGVmaW5lZCcpe2NvbnN0IG5vbmNlPS8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxudHlwZW9mIF9fd2VicGFja19ub25jZV9fIT09J3VuZGVmaW5lZCc/X193ZWJwYWNrX25vbmNlX186bnVsbDtpZihub25jZSl7YXR0cmlidXRlcy5ub25jZT1ub25jZTt9fU9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24oa2V5KXtzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LGF0dHJpYnV0ZXNba2V5XSk7fSk7aWYodHlwZW9mIG9wdGlvbnMuaW5zZXJ0PT09J2Z1bmN0aW9uJyl7b3B0aW9ucy5pbnNlcnQoc3R5bGUpO31lbHNle2NvbnN0IHRhcmdldD1nZXRUYXJnZXQob3B0aW9ucy5pbnNlcnR8fCdoZWFkJyk7aWYoIXRhcmdldCl7dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTt9dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTt9cmV0dXJuIHN0eWxlO31mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpey8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuaWYoc3R5bGUucGFyZW50Tm9kZT09PW51bGwpe3JldHVybiBmYWxzZTt9c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7fS8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL2NvbnN0IHJlcGxhY2VUZXh0PWZ1bmN0aW9uIHJlcGxhY2VUZXh0KCl7Y29uc3QgdGV4dFN0b3JlPVtdO3JldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LHJlcGxhY2VtZW50KXt0ZXh0U3RvcmVbaW5kZXhdPXJlcGxhY2VtZW50O3JldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO307fSgpO2Z1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsaW5kZXgscmVtb3ZlLG9iail7Y29uc3QgY3NzPXJlbW92ZT8nJzpvYmoubWVkaWE/J0BtZWRpYSAnK29iai5tZWRpYSsnIHsnK29iai5jc3MrJ30nOm9iai5jc3M7Ly8gRm9yIG9sZCBJRVxuLyogaXN0YW5idWwgaWdub3JlIGlmICAqL2lmKHN0eWxlLnN0eWxlU2hlZXQpe3N0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dD1yZXBsYWNlVGV4dChpbmRleCxjc3MpO31lbHNle2NvbnN0IGNzc05vZGU9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtjb25zdCBjaGlsZE5vZGVzPXN0eWxlLmNoaWxkTm9kZXM7aWYoY2hpbGROb2Rlc1tpbmRleF0pe3N0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTt9aWYoY2hpbGROb2Rlcy5sZW5ndGgpe3N0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLGNoaWxkTm9kZXNbaW5kZXhdKTt9ZWxzZXtzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTt9fX1mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLG9wdGlvbnMsb2JqKXtsZXQgY3NzPW9iai5jc3M7Y29uc3QgbWVkaWE9b2JqLm1lZGlhO2NvbnN0IHNvdXJjZU1hcD1vYmouc291cmNlTWFwO2lmKG1lZGlhKXtzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJyxtZWRpYSk7fWVsc2V7c3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO31pZihzb3VyY2VNYXAmJnR5cGVvZiBidG9hIT09J3VuZGVmaW5lZCcpe2Nzcys9J1xcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsJytidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpKycgKi8nO30vLyBGb3Igb2xkIElFXG4vKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovaWYoc3R5bGUuc3R5bGVTaGVldCl7c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0PWNzczt9ZWxzZXt3aGlsZShzdHlsZS5maXJzdENoaWxkKXtzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTt9c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7fX1sZXQgc2luZ2xldG9uPW51bGw7bGV0IHNpbmdsZXRvbkNvdW50ZXI9MDtmdW5jdGlvbiBhZGRTdHlsZShvYmosb3B0aW9ucyl7bGV0IHN0eWxlO2xldCB1cGRhdGU7bGV0IHJlbW92ZTtpZihvcHRpb25zLnNpbmdsZXRvbil7Y29uc3Qgc3R5bGVJbmRleD1zaW5nbGV0b25Db3VudGVyKys7c3R5bGU9c2luZ2xldG9ufHwoc2luZ2xldG9uPWluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7dXBkYXRlPWFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLHN0eWxlLHN0eWxlSW5kZXgsZmFsc2UpO3JlbW92ZT1hcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCxzdHlsZSxzdHlsZUluZGV4LHRydWUpO31lbHNle3N0eWxlPWluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTt1cGRhdGU9YXBwbHlUb1RhZy5iaW5kKG51bGwsc3R5bGUsb3B0aW9ucyk7cmVtb3ZlPWZ1bmN0aW9uKCl7cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTt9O311cGRhdGUob2JqKTtyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKXtpZihuZXdPYmope2lmKG5ld09iai5jc3M9PT1vYmouY3NzJiZuZXdPYmoubWVkaWE9PT1vYmoubWVkaWEmJm5ld09iai5zb3VyY2VNYXA9PT1vYmouc291cmNlTWFwKXtyZXR1cm47fXVwZGF0ZShvYmo9bmV3T2JqKTt9ZWxzZXtyZW1vdmUoKTt9fTt9bW9kdWxlLmV4cG9ydHM9ZnVuY3Rpb24obGlzdCxvcHRpb25zKXtvcHRpb25zPW9wdGlvbnN8fHt9Oy8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuaWYoIW9wdGlvbnMuc2luZ2xldG9uJiZ0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24hPT0nYm9vbGVhbicpe29wdGlvbnMuc2luZ2xldG9uPWlzT2xkSUUoKTt9bGlzdD1saXN0fHxbXTtsZXQgbGFzdElkZW50aWZpZXJzPW1vZHVsZXNUb0RvbShsaXN0LG9wdGlvbnMpO3JldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCl7bmV3TGlzdD1uZXdMaXN0fHxbXTtpZihPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkhPT0nW29iamVjdCBBcnJheV0nKXtyZXR1cm47fWZvcihsZXQgaT0wO2k8bGFzdElkZW50aWZpZXJzLmxlbmd0aDtpKyspe2NvbnN0IGlkZW50aWZpZXI9bGFzdElkZW50aWZpZXJzW2ldO2NvbnN0IGluZGV4PWdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO3N0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07fWNvbnN0IG5ld0xhc3RJZGVudGlmaWVycz1tb2R1bGVzVG9Eb20obmV3TGlzdCxvcHRpb25zKTtmb3IobGV0IGk9MDtpPGxhc3RJZGVudGlmaWVycy5sZW5ndGg7aSsrKXtjb25zdCBpZGVudGlmaWVyPWxhc3RJZGVudGlmaWVyc1tpXTtjb25zdCBpbmRleD1nZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtpZihzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcz09PTApe3N0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKCk7c3R5bGVzSW5Eb20uc3BsaWNlKGluZGV4LDEpO319bGFzdElkZW50aWZpZXJzPW5ld0xhc3RJZGVudGlmaWVyczt9O307XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMubWFwIiwibW9kdWxlLmV4cG9ydHM9ZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgbj17NzYyOmZ1bmN0aW9uKG4pe24uZXhwb3J0cz1mdW5jdGlvbihuKXt2YXIgdD1bXTt0LnRvU3RyaW5nPWZ1bmN0aW9uIHRvU3RyaW5nKCl7cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKHQpe3ZhciByPWNzc1dpdGhNYXBwaW5nVG9TdHJpbmcodCxuKTtpZih0WzJdKXtyZXR1cm5cIkBtZWRpYSBcIi5jb25jYXQodFsyXSxcIiB7XCIpLmNvbmNhdChyLFwifVwiKX1yZXR1cm4gcn0pLmpvaW4oXCJcIil9O3QuaT1mdW5jdGlvbihuLHIsbyl7aWYodHlwZW9mIG49PT1cInN0cmluZ1wiKXtuPVtbbnVsbCxuLFwiXCJdXX12YXIgZT17fTtpZihvKXtmb3IodmFyIGE9MDthPHRoaXMubGVuZ3RoO2ErKyl7dmFyIGM9dGhpc1thXVswXTtpZihjIT1udWxsKXtlW2NdPXRydWV9fX1mb3IodmFyIGk9MDtpPG4ubGVuZ3RoO2krKyl7dmFyIHU9W10uY29uY2F0KG5baV0pO2lmKG8mJmVbdVswXV0pe2NvbnRpbnVlfWlmKHIpe2lmKCF1WzJdKXt1WzJdPXJ9ZWxzZXt1WzJdPVwiXCIuY29uY2F0KHIsXCIgYW5kIFwiKS5jb25jYXQodVsyXSl9fXQucHVzaCh1KX19O3JldHVybiB0fTtmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKG4sdCl7dmFyIHI9blsxXXx8XCJcIjt2YXIgbz1uWzNdO2lmKCFvKXtyZXR1cm4gcn1pZih0JiZ0eXBlb2YgYnRvYT09PVwiZnVuY3Rpb25cIil7dmFyIGU9dG9Db21tZW50KG8pO3ZhciBhPW8uc291cmNlcy5tYXAoZnVuY3Rpb24obil7cmV0dXJuXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChvLnNvdXJjZVJvb3R8fFwiXCIpLmNvbmNhdChuLFwiICovXCIpfSk7cmV0dXJuW3JdLmNvbmNhdChhKS5jb25jYXQoW2VdKS5qb2luKFwiXFxuXCIpfXJldHVybltyXS5qb2luKFwiXFxuXCIpfWZ1bmN0aW9uIHRvQ29tbWVudChuKXt2YXIgdD1idG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShuKSkpKTt2YXIgcj1cInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdCh0KTtyZXR1cm5cIi8qIyBcIi5jb25jYXQocixcIiAqL1wiKX19fTt2YXIgdD17fTtmdW5jdGlvbiBfX25jY3dwY2tfcmVxdWlyZV9fKHIpe2lmKHRbcl0pe3JldHVybiB0W3JdLmV4cG9ydHN9dmFyIG89dFtyXT17ZXhwb3J0czp7fX07dmFyIGU9dHJ1ZTt0cnl7bltyXShvLG8uZXhwb3J0cyxfX25jY3dwY2tfcmVxdWlyZV9fKTtlPWZhbHNlfWZpbmFsbHl7aWYoZSlkZWxldGUgdFtyXX1yZXR1cm4gby5leHBvcnRzfV9fbmNjd3Bja19yZXF1aXJlX18uYWI9X19kaXJuYW1lK1wiL1wiO3JldHVybiBfX25jY3dwY2tfcmVxdWlyZV9fKDc2Mil9KCk7IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJALXdlYmtpdC1rZXlmcmFtZXMgc3BsaWRlLWxvYWRpbmd7MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDApO3RyYW5zZm9ybTpyb3RhdGUoMCl9dG97LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDF0dXJuKTt0cmFuc2Zvcm06cm90YXRlKDF0dXJuKX19QC1tb3ota2V5ZnJhbWVzIHNwbGlkZS1sb2FkaW5nezAley1tb3otdHJhbnNmb3JtOnJvdGF0ZSgwKTt0cmFuc2Zvcm06cm90YXRlKDApfXRvey1tb3otdHJhbnNmb3JtOnJvdGF0ZSgxdHVybik7dHJhbnNmb3JtOnJvdGF0ZSgxdHVybil9fUBrZXlmcmFtZXMgc3BsaWRlLWxvYWRpbmd7MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDApOy1tb3otdHJhbnNmb3JtOnJvdGF0ZSgwKTt0cmFuc2Zvcm06cm90YXRlKDApfXRvey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxdHVybik7LW1vei10cmFuc2Zvcm06cm90YXRlKDF0dXJuKTt0cmFuc2Zvcm06cm90YXRlKDF0dXJuKX19LnNwbGlkZV9fY29udGFpbmVye3Bvc2l0aW9uOnJlbGF0aXZlOy13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94Oy1tb3otYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveH0uc3BsaWRlX19saXN0e21hcmdpbjowIWltcG9ydGFudDtwYWRkaW5nOjAhaW1wb3J0YW50O3dpZHRoOi1tb3otbWF4LWNvbnRlbnQ7d2lkdGg6bWF4LWNvbnRlbnQ7d2lsbC1jaGFuZ2U6dHJhbnNmb3JtfS5zcGxpZGUuaXMtYWN0aXZlIC5zcGxpZGVfX2xpc3R7ZGlzcGxheTotbW96LWJveDtkaXNwbGF5OmZsZXh9LnNwbGlkZV9fcGFnaW5hdGlvbntkaXNwbGF5Oi1tb3otaW5saW5lLWJveDtkaXNwbGF5OmlubGluZS1mbGV4Oy1tb3otYm94LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7d2lkdGg6OTUlO2ZsZXgtd3JhcDp3cmFwOy1tb3otYm94LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7bWFyZ2luOjB9LnNwbGlkZV9fcGFnaW5hdGlvbiBsaXtsaXN0LXN0eWxlLXR5cGU6bm9uZTtkaXNwbGF5OmlubGluZS1ibG9jaztsaW5lLWhlaWdodDoxO21hcmdpbjowfS5zcGxpZGV7dmlzaWJpbGl0eTpoaWRkZW59LnNwbGlkZSwuc3BsaWRlX19zbGlkZXtwb3NpdGlvbjpyZWxhdGl2ZTtvdXRsaW5lOm5vbmV9LnNwbGlkZV9fc2xpZGV7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7LW1vei1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94O2xpc3Qtc3R5bGUtdHlwZTpub25lIWltcG9ydGFudDttYXJnaW46MDtmbGV4LXNocmluazowfS5zcGxpZGVfX3NsaWRlIGltZ3t2ZXJ0aWNhbC1hbGlnbjpib3R0b219LnNwbGlkZV9fc2xpZGVye3Bvc2l0aW9uOnJlbGF0aXZlfS5zcGxpZGVfX3NwaW5uZXJ7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO3JpZ2h0OjA7Ym90dG9tOjA7bWFyZ2luOmF1dG87ZGlzcGxheTppbmxpbmUtYmxvY2s7d2lkdGg6MjBweDtoZWlnaHQ6MjBweDtib3JkZXItcmFkaXVzOjUwJTtib3JkZXI6MnB4IHNvbGlkICM5OTk7Ym9yZGVyLWxlZnQtY29sb3I6dHJhbnNwYXJlbnQ7LXdlYmtpdC1hbmltYXRpb246c3BsaWRlLWxvYWRpbmcgMXMgbGluZWFyIGluZmluaXRlOy1tb3otYW5pbWF0aW9uOnNwbGlkZS1sb2FkaW5nIDFzIGxpbmVhciBpbmZpbml0ZTthbmltYXRpb246c3BsaWRlLWxvYWRpbmcgMXMgbGluZWFyIGluZmluaXRlfS5zcGxpZGVfX3RyYWNre3Bvc2l0aW9uOnJlbGF0aXZlO3otaW5kZXg6MDtvdmVyZmxvdzpoaWRkZW59LnNwbGlkZS0tZHJhZ2dhYmxlPi5zcGxpZGVfX3RyYWNrPi5zcGxpZGVfX2xpc3Q+LnNwbGlkZV9fc2xpZGV7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lfS5zcGxpZGUtLWZhZGU+LnNwbGlkZV9fdHJhY2s+LnNwbGlkZV9fbGlzdHtkaXNwbGF5OmJsb2NrfS5zcGxpZGUtLWZhZGU+LnNwbGlkZV9fdHJhY2s+LnNwbGlkZV9fbGlzdD4uc3BsaWRlX19zbGlkZXtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7ei1pbmRleDowO29wYWNpdHk6MH0uc3BsaWRlLS1mYWRlPi5zcGxpZGVfX3RyYWNrPi5zcGxpZGVfX2xpc3Q+LnNwbGlkZV9fc2xpZGUuaXMtYWN0aXZle3Bvc2l0aW9uOnJlbGF0aXZlO3otaW5kZXg6MTtvcGFjaXR5OjF9LnNwbGlkZS0tcnRse2RpcmVjdGlvbjpydGx9LnNwbGlkZS0tdHRiPi5zcGxpZGVfX3RyYWNrPi5zcGxpZGVfX2xpc3R7ZGlzcGxheTpibG9ja30uc3BsaWRlLS10dGI+LnNwbGlkZV9fcGFnaW5hdGlvbnt3aWR0aDphdXRvfS5zcGxpZGVfX2Fycm93e3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6MTt0b3A6NTAlOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSk7LW1vei10cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKTt3aWR0aDoyZW07aGVpZ2h0OjJlbTtib3JkZXItcmFkaXVzOjUwJTtkaXNwbGF5Oi1tb3otYm94O2Rpc3BsYXk6ZmxleDstbW96LWJveC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyOy1tb3otYm94LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7Ym9yZGVyOm5vbmU7cGFkZGluZzowO29wYWNpdHk6Ljc7YmFja2dyb3VuZDojY2NjfS5zcGxpZGVfX2Fycm93IHN2Z3t3aWR0aDoxLjJlbTtoZWlnaHQ6MS4yZW19LnNwbGlkZV9fYXJyb3c6aG92ZXJ7Y3Vyc29yOnBvaW50ZXI7b3BhY2l0eTouOX0uc3BsaWRlX19hcnJvdzpmb2N1c3tvdXRsaW5lOm5vbmV9LnNwbGlkZV9fYXJyb3ctLXByZXZ7bGVmdDoxZW19LnNwbGlkZV9fYXJyb3ctLXByZXYgc3Zney13ZWJraXQtdHJhbnNmb3JtOnNjYWxlWCgtMSk7LW1vei10cmFuc2Zvcm06c2NhbGVYKC0xKTt0cmFuc2Zvcm06c2NhbGVYKC0xKX0uc3BsaWRlX19hcnJvdy0tbmV4dHtyaWdodDoxZW19LnNwbGlkZV9fcGFnaW5hdGlvbntwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OjE7Ym90dG9tOi41ZW07bGVmdDo1MCU7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKTstbW96LXRyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpO3RyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpO3BhZGRpbmc6MH0uc3BsaWRlX19wYWdpbmF0aW9uX19wYWdle2Rpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOjhweDtoZWlnaHQ6OHB4O2JhY2tncm91bmQ6I2NjYztib3JkZXItcmFkaXVzOjUwJTttYXJnaW46M3B4O3BhZGRpbmc6MDstd2Via2l0LXRyYW5zaXRpb246LXdlYmtpdC10cmFuc2Zvcm0gLjJzIGxpbmVhcjt0cmFuc2l0aW9uOi13ZWJraXQtdHJhbnNmb3JtIC4ycyBsaW5lYXI7LW1vei10cmFuc2l0aW9uOnRyYW5zZm9ybSAuMnMgbGluZWFyLCAtbW96LXRyYW5zZm9ybSAuMnMgbGluZWFyO3RyYW5zaXRpb246dHJhbnNmb3JtIC4ycyBsaW5lYXI7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjJzIGxpbmVhciwgLXdlYmtpdC10cmFuc2Zvcm0gLjJzIGxpbmVhciwgLW1vei10cmFuc2Zvcm0gLjJzIGxpbmVhcjtib3JkZXI6bm9uZTtvcGFjaXR5Oi43fS5zcGxpZGVfX3BhZ2luYXRpb25fX3BhZ2UuaXMtYWN0aXZley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuNCk7LW1vei10cmFuc2Zvcm06c2NhbGUoMS40KTt0cmFuc2Zvcm06c2NhbGUoMS40KTtiYWNrZ3JvdW5kOiNmZmZ9LnNwbGlkZV9fcGFnaW5hdGlvbl9fcGFnZTpob3ZlcntjdXJzb3I6cG9pbnRlcjtvcGFjaXR5Oi45fS5zcGxpZGVfX3BhZ2luYXRpb25fX3BhZ2U6Zm9jdXN7b3V0bGluZTpub25lfS5zcGxpZGVfX3Byb2dyZXNzX19iYXJ7d2lkdGg6MDtoZWlnaHQ6M3B4O2JhY2tncm91bmQ6I2NjY30uc3BsaWRlLS1uYXY+LnNwbGlkZV9fdHJhY2s+LnNwbGlkZV9fbGlzdD4uc3BsaWRlX19zbGlkZXtib3JkZXI6M3B4IHNvbGlkIHRyYW5zcGFyZW50fS5zcGxpZGUtLW5hdj4uc3BsaWRlX190cmFjaz4uc3BsaWRlX19saXN0Pi5zcGxpZGVfX3NsaWRlLmlzLWFjdGl2ZXtib3JkZXItY29sb3I6IzAwMH0uc3BsaWRlLS1uYXY+LnNwbGlkZV9fdHJhY2s+LnNwbGlkZV9fbGlzdD4uc3BsaWRlX19zbGlkZTpmb2N1c3tvdXRsaW5lOm5vbmV9LnNwbGlkZS0tcnRsPi5zcGxpZGVfX2Fycm93cyAuc3BsaWRlX19hcnJvdy0tcHJldiwuc3BsaWRlLS1ydGw+LnNwbGlkZV9fdHJhY2s+LnNwbGlkZV9fYXJyb3dzIC5zcGxpZGVfX2Fycm93LS1wcmV2e3JpZ2h0OjFlbTtsZWZ0OmF1dG99LnNwbGlkZS0tcnRsPi5zcGxpZGVfX2Fycm93cyAuc3BsaWRlX19hcnJvdy0tcHJldiBzdmcsLnNwbGlkZS0tcnRsPi5zcGxpZGVfX3RyYWNrPi5zcGxpZGVfX2Fycm93cyAuc3BsaWRlX19hcnJvdy0tcHJldiBzdmd7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGVYKDEpOy1tb3otdHJhbnNmb3JtOnNjYWxlWCgxKTt0cmFuc2Zvcm06c2NhbGVYKDEpfS5zcGxpZGUtLXJ0bD4uc3BsaWRlX19hcnJvd3MgLnNwbGlkZV9fYXJyb3ctLW5leHQsLnNwbGlkZS0tcnRsPi5zcGxpZGVfX3RyYWNrPi5zcGxpZGVfX2Fycm93cyAuc3BsaWRlX19hcnJvdy0tbmV4dHtsZWZ0OjFlbTtyaWdodDphdXRvfS5zcGxpZGUtLXJ0bD4uc3BsaWRlX19hcnJvd3MgLnNwbGlkZV9fYXJyb3ctLW5leHQgc3ZnLC5zcGxpZGUtLXJ0bD4uc3BsaWRlX190cmFjaz4uc3BsaWRlX19hcnJvd3MgLnNwbGlkZV9fYXJyb3ctLW5leHQgc3Zney13ZWJraXQtdHJhbnNmb3JtOnNjYWxlWCgtMSk7LW1vei10cmFuc2Zvcm06c2NhbGVYKC0xKTt0cmFuc2Zvcm06c2NhbGVYKC0xKX0uc3BsaWRlLS10dGI+LnNwbGlkZV9fYXJyb3dzIC5zcGxpZGVfX2Fycm93LC5zcGxpZGUtLXR0Yj4uc3BsaWRlX190cmFjaz4uc3BsaWRlX19hcnJvd3MgLnNwbGlkZV9fYXJyb3d7bGVmdDo1MCU7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUpOy1tb3otdHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUpfS5zcGxpZGUtLXR0Yj4uc3BsaWRlX19hcnJvd3MgLnNwbGlkZV9fYXJyb3ctLXByZXYsLnNwbGlkZS0tdHRiPi5zcGxpZGVfX3RyYWNrPi5zcGxpZGVfX2Fycm93cyAuc3BsaWRlX19hcnJvdy0tcHJldnt0b3A6MWVtfS5zcGxpZGUtLXR0Yj4uc3BsaWRlX19hcnJvd3MgLnNwbGlkZV9fYXJyb3ctLXByZXYgc3ZnLC5zcGxpZGUtLXR0Yj4uc3BsaWRlX190cmFjaz4uc3BsaWRlX19hcnJvd3MgLnNwbGlkZV9fYXJyb3ctLXByZXYgc3Zney13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtOTBkZWcpOy1tb3otdHJhbnNmb3JtOnJvdGF0ZSgtOTBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTkwZGVnKX0uc3BsaWRlLS10dGI+LnNwbGlkZV9fYXJyb3dzIC5zcGxpZGVfX2Fycm93LS1uZXh0LC5zcGxpZGUtLXR0Yj4uc3BsaWRlX190cmFjaz4uc3BsaWRlX19hcnJvd3MgLnNwbGlkZV9fYXJyb3ctLW5leHR7dG9wOmF1dG87Ym90dG9tOjFlbX0uc3BsaWRlLS10dGI+LnNwbGlkZV9fYXJyb3dzIC5zcGxpZGVfX2Fycm93LS1uZXh0IHN2Zywuc3BsaWRlLS10dGI+LnNwbGlkZV9fdHJhY2s+LnNwbGlkZV9fYXJyb3dzIC5zcGxpZGVfX2Fycm93LS1uZXh0IHN2Z3std2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoOTBkZWcpOy1tb3otdHJhbnNmb3JtOnJvdGF0ZSg5MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg5MGRlZyl9LnNwbGlkZS0tdHRiPi5zcGxpZGVfX3BhZ2luYXRpb257ZGlzcGxheTotbW96LWJveDtkaXNwbGF5OmZsZXg7LW1vei1ib3gtb3JpZW50OnZlcnRpY2FsOy1tb3otYm94LWRpcmVjdGlvbjpub3JtYWw7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2JvdHRvbTo1MCU7bGVmdDphdXRvO3JpZ2h0Oi41ZW07LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSg1MCUpOy1tb3otdHJhbnNmb3JtOnRyYW5zbGF0ZVkoNTAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSg1MCUpfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9ub2RlX21vZHVsZXMvQHNwbGlkZWpzL3NwbGlkZS9kaXN0L2Nzcy90aGVtZXMvc3BsaWRlLWRlZmF1bHQubWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxrQ0FBMEIsR0FBRywyQkFBa0IsQ0FBbEIsbUJBQW1CLENBQUMsR0FBRywrQkFBc0IsQ0FBdEIsdUJBQXVCLENBQUMsQ0FBNUUsK0JBQTBCLEdBQUcsd0JBQWtCLENBQWxCLG1CQUFtQixDQUFDLEdBQUcsNEJBQXNCLENBQXRCLHVCQUF1QixDQUFDLENBQTVF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LENBQUMsK0RBQStELFlBQVksQ0FBQyxtSEFBbUgsU0FBUyxDQUFDLFNBQVMsQ0FBQywySEFBMkgsMkJBQWtCLENBQWxCLHdCQUFrQixDQUFsQixtQkFBbUIsQ0FBQyxtSEFBbUgsUUFBUSxDQUFDLFVBQVUsQ0FBQywySEFBMkgsNEJBQW1CLENBQW5CLHlCQUFtQixDQUFuQixvQkFBb0IsQ0FBQyx1R0FBdUcsUUFBUSxDQUFDLGlDQUF3QixDQUF4Qiw4QkFBd0IsQ0FBeEIseUJBQXlCLENBQUMsbUhBQW1ILE9BQU8sQ0FBQywySEFBMkgsZ0NBQXVCLENBQXZCLDZCQUF1QixDQUF2Qix3QkFBd0IsQ0FBQyxtSEFBbUgsUUFBUSxDQUFDLFVBQVUsQ0FBQywySEFBMkgsK0JBQXNCLENBQXRCLDRCQUFzQixDQUF0Qix1QkFBdUIsQ0FBQyxpQ0FBaUMsZ0JBQVksQ0FBWixZQUFZLENBQUMsd0JBQXFCLENBQXJCLHlCQUFxQixDQUFyQixxQkFBcUIsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxpQ0FBd0IsQ0FBeEIsOEJBQXdCLENBQXhCLHlCQUF5QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAa2V5ZnJhbWVzIHNwbGlkZS1sb2FkaW5nezAle3RyYW5zZm9ybTpyb3RhdGUoMCl9dG97dHJhbnNmb3JtOnJvdGF0ZSgxdHVybil9fS5zcGxpZGVfX2NvbnRhaW5lcntwb3NpdGlvbjpyZWxhdGl2ZTtib3gtc2l6aW5nOmJvcmRlci1ib3h9LnNwbGlkZV9fbGlzdHttYXJnaW46MCFpbXBvcnRhbnQ7cGFkZGluZzowIWltcG9ydGFudDt3aWR0aDotd2Via2l0LW1heC1jb250ZW50O3dpZHRoOm1heC1jb250ZW50O3dpbGwtY2hhbmdlOnRyYW5zZm9ybX0uc3BsaWRlLmlzLWFjdGl2ZSAuc3BsaWRlX19saXN0e2Rpc3BsYXk6ZmxleH0uc3BsaWRlX19wYWdpbmF0aW9ue2Rpc3BsYXk6aW5saW5lLWZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO3dpZHRoOjk1JTtmbGV4LXdyYXA6d3JhcDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO21hcmdpbjowfS5zcGxpZGVfX3BhZ2luYXRpb24gbGl7bGlzdC1zdHlsZS10eXBlOm5vbmU7ZGlzcGxheTppbmxpbmUtYmxvY2s7bGluZS1oZWlnaHQ6MTttYXJnaW46MH0uc3BsaWRle3Zpc2liaWxpdHk6aGlkZGVufS5zcGxpZGUsLnNwbGlkZV9fc2xpZGV7cG9zaXRpb246cmVsYXRpdmU7b3V0bGluZTpub25lfS5zcGxpZGVfX3NsaWRle2JveC1zaXppbmc6Ym9yZGVyLWJveDtsaXN0LXN0eWxlLXR5cGU6bm9uZSFpbXBvcnRhbnQ7bWFyZ2luOjA7ZmxleC1zaHJpbms6MH0uc3BsaWRlX19zbGlkZSBpbWd7dmVydGljYWwtYWxpZ246Ym90dG9tfS5zcGxpZGVfX3NsaWRlcntwb3NpdGlvbjpyZWxhdGl2ZX0uc3BsaWRlX19zcGlubmVye3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDtyaWdodDowO2JvdHRvbTowO21hcmdpbjphdXRvO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOjIwcHg7aGVpZ2h0OjIwcHg7Ym9yZGVyLXJhZGl1czo1MCU7Ym9yZGVyOjJweCBzb2xpZCAjOTk5O2JvcmRlci1sZWZ0LWNvbG9yOnRyYW5zcGFyZW50O2FuaW1hdGlvbjpzcGxpZGUtbG9hZGluZyAxcyBsaW5lYXIgaW5maW5pdGV9LnNwbGlkZV9fdHJhY2t7cG9zaXRpb246cmVsYXRpdmU7ei1pbmRleDowO292ZXJmbG93OmhpZGRlbn0uc3BsaWRlLS1kcmFnZ2FibGU+LnNwbGlkZV9fdHJhY2s+LnNwbGlkZV9fbGlzdD4uc3BsaWRlX19zbGlkZXstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZX0uc3BsaWRlLS1mYWRlPi5zcGxpZGVfX3RyYWNrPi5zcGxpZGVfX2xpc3R7ZGlzcGxheTpibG9ja30uc3BsaWRlLS1mYWRlPi5zcGxpZGVfX3RyYWNrPi5zcGxpZGVfX2xpc3Q+LnNwbGlkZV9fc2xpZGV7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO3otaW5kZXg6MDtvcGFjaXR5OjB9LnNwbGlkZS0tZmFkZT4uc3BsaWRlX190cmFjaz4uc3BsaWRlX19saXN0Pi5zcGxpZGVfX3NsaWRlLmlzLWFjdGl2ZXtwb3NpdGlvbjpyZWxhdGl2ZTt6LWluZGV4OjE7b3BhY2l0eToxfS5zcGxpZGUtLXJ0bHtkaXJlY3Rpb246cnRsfS5zcGxpZGUtLXR0Yj4uc3BsaWRlX190cmFjaz4uc3BsaWRlX19saXN0e2Rpc3BsYXk6YmxvY2t9LnNwbGlkZS0tdHRiPi5zcGxpZGVfX3BhZ2luYXRpb257d2lkdGg6YXV0b30uc3BsaWRlX19hcnJvd3twb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OjE7dG9wOjUwJTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKTt3aWR0aDoyZW07aGVpZ2h0OjJlbTtib3JkZXItcmFkaXVzOjUwJTtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7Ym9yZGVyOm5vbmU7cGFkZGluZzowO29wYWNpdHk6Ljc7YmFja2dyb3VuZDojY2NjfS5zcGxpZGVfX2Fycm93IHN2Z3t3aWR0aDoxLjJlbTtoZWlnaHQ6MS4yZW19LnNwbGlkZV9fYXJyb3c6aG92ZXJ7Y3Vyc29yOnBvaW50ZXI7b3BhY2l0eTouOX0uc3BsaWRlX19hcnJvdzpmb2N1c3tvdXRsaW5lOm5vbmV9LnNwbGlkZV9fYXJyb3ctLXByZXZ7bGVmdDoxZW19LnNwbGlkZV9fYXJyb3ctLXByZXYgc3Zne3RyYW5zZm9ybTpzY2FsZVgoLTEpfS5zcGxpZGVfX2Fycm93LS1uZXh0e3JpZ2h0OjFlbX0uc3BsaWRlX19wYWdpbmF0aW9ue3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6MTtib3R0b206LjVlbTtsZWZ0OjUwJTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKTtwYWRkaW5nOjB9LnNwbGlkZV9fcGFnaW5hdGlvbl9fcGFnZXtkaXNwbGF5OmlubGluZS1ibG9jazt3aWR0aDo4cHg7aGVpZ2h0OjhweDtiYWNrZ3JvdW5kOiNjY2M7Ym9yZGVyLXJhZGl1czo1MCU7bWFyZ2luOjNweDtwYWRkaW5nOjA7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjJzIGxpbmVhcjtib3JkZXI6bm9uZTtvcGFjaXR5Oi43fS5zcGxpZGVfX3BhZ2luYXRpb25fX3BhZ2UuaXMtYWN0aXZle3RyYW5zZm9ybTpzY2FsZSgxLjQpO2JhY2tncm91bmQ6I2ZmZn0uc3BsaWRlX19wYWdpbmF0aW9uX19wYWdlOmhvdmVye2N1cnNvcjpwb2ludGVyO29wYWNpdHk6Ljl9LnNwbGlkZV9fcGFnaW5hdGlvbl9fcGFnZTpmb2N1c3tvdXRsaW5lOm5vbmV9LnNwbGlkZV9fcHJvZ3Jlc3NfX2Jhcnt3aWR0aDowO2hlaWdodDozcHg7YmFja2dyb3VuZDojY2NjfS5zcGxpZGUtLW5hdj4uc3BsaWRlX190cmFjaz4uc3BsaWRlX19saXN0Pi5zcGxpZGVfX3NsaWRle2JvcmRlcjozcHggc29saWQgdHJhbnNwYXJlbnR9LnNwbGlkZS0tbmF2Pi5zcGxpZGVfX3RyYWNrPi5zcGxpZGVfX2xpc3Q+LnNwbGlkZV9fc2xpZGUuaXMtYWN0aXZle2JvcmRlci1jb2xvcjojMDAwfS5zcGxpZGUtLW5hdj4uc3BsaWRlX190cmFjaz4uc3BsaWRlX19saXN0Pi5zcGxpZGVfX3NsaWRlOmZvY3Vze291dGxpbmU6bm9uZX0uc3BsaWRlLS1ydGw+LnNwbGlkZV9fYXJyb3dzIC5zcGxpZGVfX2Fycm93LS1wcmV2LC5zcGxpZGUtLXJ0bD4uc3BsaWRlX190cmFjaz4uc3BsaWRlX19hcnJvd3MgLnNwbGlkZV9fYXJyb3ctLXByZXZ7cmlnaHQ6MWVtO2xlZnQ6YXV0b30uc3BsaWRlLS1ydGw+LnNwbGlkZV9fYXJyb3dzIC5zcGxpZGVfX2Fycm93LS1wcmV2IHN2Zywuc3BsaWRlLS1ydGw+LnNwbGlkZV9fdHJhY2s+LnNwbGlkZV9fYXJyb3dzIC5zcGxpZGVfX2Fycm93LS1wcmV2IHN2Z3t0cmFuc2Zvcm06c2NhbGVYKDEpfS5zcGxpZGUtLXJ0bD4uc3BsaWRlX19hcnJvd3MgLnNwbGlkZV9fYXJyb3ctLW5leHQsLnNwbGlkZS0tcnRsPi5zcGxpZGVfX3RyYWNrPi5zcGxpZGVfX2Fycm93cyAuc3BsaWRlX19hcnJvdy0tbmV4dHtsZWZ0OjFlbTtyaWdodDphdXRvfS5zcGxpZGUtLXJ0bD4uc3BsaWRlX19hcnJvd3MgLnNwbGlkZV9fYXJyb3ctLW5leHQgc3ZnLC5zcGxpZGUtLXJ0bD4uc3BsaWRlX190cmFjaz4uc3BsaWRlX19hcnJvd3MgLnNwbGlkZV9fYXJyb3ctLW5leHQgc3Zne3RyYW5zZm9ybTpzY2FsZVgoLTEpfS5zcGxpZGUtLXR0Yj4uc3BsaWRlX19hcnJvd3MgLnNwbGlkZV9fYXJyb3csLnNwbGlkZS0tdHRiPi5zcGxpZGVfX3RyYWNrPi5zcGxpZGVfX2Fycm93cyAuc3BsaWRlX19hcnJvd3tsZWZ0OjUwJTt0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUpfS5zcGxpZGUtLXR0Yj4uc3BsaWRlX19hcnJvd3MgLnNwbGlkZV9fYXJyb3ctLXByZXYsLnNwbGlkZS0tdHRiPi5zcGxpZGVfX3RyYWNrPi5zcGxpZGVfX2Fycm93cyAuc3BsaWRlX19hcnJvdy0tcHJldnt0b3A6MWVtfS5zcGxpZGUtLXR0Yj4uc3BsaWRlX19hcnJvd3MgLnNwbGlkZV9fYXJyb3ctLXByZXYgc3ZnLC5zcGxpZGUtLXR0Yj4uc3BsaWRlX190cmFjaz4uc3BsaWRlX19hcnJvd3MgLnNwbGlkZV9fYXJyb3ctLXByZXYgc3Zne3RyYW5zZm9ybTpyb3RhdGUoLTkwZGVnKX0uc3BsaWRlLS10dGI+LnNwbGlkZV9fYXJyb3dzIC5zcGxpZGVfX2Fycm93LS1uZXh0LC5zcGxpZGUtLXR0Yj4uc3BsaWRlX190cmFjaz4uc3BsaWRlX19hcnJvd3MgLnNwbGlkZV9fYXJyb3ctLW5leHR7dG9wOmF1dG87Ym90dG9tOjFlbX0uc3BsaWRlLS10dGI+LnNwbGlkZV9fYXJyb3dzIC5zcGxpZGVfX2Fycm93LS1uZXh0IHN2Zywuc3BsaWRlLS10dGI+LnNwbGlkZV9fdHJhY2s+LnNwbGlkZV9fYXJyb3dzIC5zcGxpZGVfX2Fycm93LS1uZXh0IHN2Z3t0cmFuc2Zvcm06cm90YXRlKDkwZGVnKX0uc3BsaWRlLS10dGI+LnNwbGlkZV9fcGFnaW5hdGlvbntkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2JvdHRvbTo1MCU7bGVmdDphdXRvO3JpZ2h0Oi41ZW07dHJhbnNmb3JtOnRyYW5zbGF0ZVkoNTAlKX1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5pbWFnZUNvbmZpZ0RlZmF1bHQ9ZXhwb3J0cy5WQUxJRF9MT0FERVJTPXZvaWQgMDtjb25zdCBWQUxJRF9MT0FERVJTPVsnZGVmYXVsdCcsJ2ltZ2l4JywnY2xvdWRpbmFyeScsJ2FrYW1haSddO2V4cG9ydHMuVkFMSURfTE9BREVSUz1WQUxJRF9MT0FERVJTO2NvbnN0IGltYWdlQ29uZmlnRGVmYXVsdD17ZGV2aWNlU2l6ZXM6WzY0MCw3NTAsODI4LDEwODAsMTIwMCwxOTIwLDIwNDgsMzg0MF0saW1hZ2VTaXplczpbMTYsMzIsNDgsNjQsOTYsMTI4LDI1NiwzODRdLHBhdGg6Jy9fbmV4dC9pbWFnZScsbG9hZGVyOidkZWZhdWx0Jyxkb21haW5zOltdLGRpc2FibGVTdGF0aWNJbWFnZXM6ZmFsc2V9O2V4cG9ydHMuaW1hZ2VDb25maWdEZWZhdWx0PWltYWdlQ29uZmlnRGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWltYWdlLWNvbmZpZy5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvaW1hZ2UnKVxuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNy4wLjJcbiAqIHJlYWN0LWpzeC1kZXYtcnVudGltZS5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgX2Fzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxuLy8gQVRURU5USU9OXG4vLyBXaGVuIGFkZGluZyBuZXcgc3ltYm9scyB0byB0aGlzIGZpbGUsXG4vLyBQbGVhc2UgY29uc2lkZXIgYWxzbyBhZGRpbmcgdG8gJ3JlYWN0LWRldnRvb2xzLXNoYXJlZC9zcmMvYmFja2VuZC9SZWFjdFN5bWJvbHMnXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IDB4ZWFjNztcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IDB4ZWFjYTtcbmV4cG9ydHMuRnJhZ21lbnQgPSAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IDB4ZWFjYztcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gMHhlYWQyO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gMHhlYWNlO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IDB4ZWFkMTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSAweGVhZDg7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gMHhlYWQzO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IDB4ZWFkNDtcbnZhciBSRUFDVF9CTE9DS19UWVBFID0gMHhlYWQ5O1xudmFyIFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFID0gMHhlYWRhO1xudmFyIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSAweGVhZDU7XG52YXIgUkVBQ1RfU0NPUEVfVFlQRSA9IDB4ZWFkNztcbnZhciBSRUFDVF9PUEFRVUVfSURfVFlQRSA9IDB4ZWFlMDtcbnZhciBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSA9IDB4ZWFlMTtcbnZhciBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IDB4ZWFlMjtcbnZhciBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgPSAweGVhZTM7XG5cbmlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3IpIHtcbiAgdmFyIHN5bWJvbEZvciA9IFN5bWJvbC5mb3I7XG4gIFJFQUNUX0VMRU1FTlRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZWxlbWVudCcpO1xuICBSRUFDVF9QT1JUQUxfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucG9ydGFsJyk7XG4gIGV4cG9ydHMuRnJhZ21lbnQgPSBzeW1ib2xGb3IoJ3JlYWN0LmZyYWdtZW50Jyk7XG4gIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN0cmljdF9tb2RlJyk7XG4gIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnByb2ZpbGVyJyk7XG4gIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnByb3ZpZGVyJyk7XG4gIFJFQUNUX0NPTlRFWFRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuY29udGV4dCcpO1xuICBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpO1xuICBSRUFDVF9TVVNQRU5TRV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdXNwZW5zZScpO1xuICBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN1c3BlbnNlX2xpc3QnKTtcbiAgUkVBQ1RfTUVNT19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5tZW1vJyk7XG4gIFJFQUNUX0xBWllfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubGF6eScpO1xuICBSRUFDVF9CTE9DS19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5ibG9jaycpO1xuICBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc2VydmVyLmJsb2NrJyk7XG4gIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZ1bmRhbWVudGFsJyk7XG4gIFJFQUNUX1NDT1BFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnNjb3BlJyk7XG4gIFJFQUNUX09QQVFVRV9JRF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5vcGFxdWUuaWQnKTtcbiAgUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmRlYnVnX3RyYWNlX21vZGUnKTtcbiAgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm9mZnNjcmVlbicpO1xuICBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmxlZ2FjeV9oaWRkZW4nKTtcbn1cblxudmFyIE1BWUJFX0lURVJBVE9SX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yO1xudmFyIEZBVVhfSVRFUkFUT1JfU1lNQk9MID0gJ0BAaXRlcmF0b3InO1xuZnVuY3Rpb24gZ2V0SXRlcmF0b3JGbihtYXliZUl0ZXJhYmxlKSB7XG4gIGlmIChtYXliZUl0ZXJhYmxlID09PSBudWxsIHx8IHR5cGVvZiBtYXliZUl0ZXJhYmxlICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIG1heWJlSXRlcmF0b3IgPSBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgJiYgbWF5YmVJdGVyYWJsZVtNQVlCRV9JVEVSQVRPUl9TWU1CT0xdIHx8IG1heWJlSXRlcmFibGVbRkFVWF9JVEVSQVRPUl9TWU1CT0xdO1xuXG4gIGlmICh0eXBlb2YgbWF5YmVJdGVyYXRvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBtYXliZUl0ZXJhdG9yO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbnZhciBSZWFjdFNoYXJlZEludGVybmFscyA9IFJlYWN0Ll9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEO1xuXG5mdW5jdGlvbiBlcnJvcihmb3JtYXQpIHtcbiAge1xuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBhcmdzW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIHByaW50V2FybmluZygnZXJyb3InLCBmb3JtYXQsIGFyZ3MpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHByaW50V2FybmluZyhsZXZlbCwgZm9ybWF0LCBhcmdzKSB7XG4gIC8vIFdoZW4gY2hhbmdpbmcgdGhpcyBsb2dpYywgeW91IG1pZ2h0IHdhbnQgdG8gYWxzb1xuICAvLyB1cGRhdGUgY29uc29sZVdpdGhTdGFja0Rldi53d3cuanMgYXMgd2VsbC5cbiAge1xuICAgIHZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcbiAgICB2YXIgc3RhY2sgPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0oKTtcblxuICAgIGlmIChzdGFjayAhPT0gJycpIHtcbiAgICAgIGZvcm1hdCArPSAnJXMnO1xuICAgICAgYXJncyA9IGFyZ3MuY29uY2F0KFtzdGFja10pO1xuICAgIH1cblxuICAgIHZhciBhcmdzV2l0aEZvcm1hdCA9IGFyZ3MubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gJycgKyBpdGVtO1xuICAgIH0pOyAvLyBDYXJlZnVsOiBSTiBjdXJyZW50bHkgZGVwZW5kcyBvbiB0aGlzIHByZWZpeFxuXG4gICAgYXJnc1dpdGhGb3JtYXQudW5zaGlmdCgnV2FybmluZzogJyArIGZvcm1hdCk7IC8vIFdlIGludGVudGlvbmFsbHkgZG9uJ3QgdXNlIHNwcmVhZCAob3IgLmFwcGx5KSBkaXJlY3RseSBiZWNhdXNlIGl0XG4gICAgLy8gYnJlYWtzIElFOTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xMzYxMFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmdcblxuICAgIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKGNvbnNvbGVbbGV2ZWxdLCBjb25zb2xlLCBhcmdzV2l0aEZvcm1hdCk7XG4gIH1cbn1cblxuLy8gRmlsdGVyIGNlcnRhaW4gRE9NIGF0dHJpYnV0ZXMgKGUuZy4gc3JjLCBocmVmKSBpZiB0aGVpciB2YWx1ZXMgYXJlIGVtcHR5IHN0cmluZ3MuXG5cbnZhciBlbmFibGVTY29wZUFQSSA9IGZhbHNlOyAvLyBFeHBlcmltZW50YWwgQ3JlYXRlIEV2ZW50IEhhbmRsZSBBUEkuXG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSAvLyBOb3RlOiB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyAoZS5nLiBpZiBpdCdzIGEgcG9seWZpbGwpLlxuXG5cbiAgaWYgKHR5cGUgPT09IGV4cG9ydHMuRnJhZ21lbnQgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSB8fCBlbmFibGVTY29wZUFQSSApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCkge1xuICAgIGlmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9CTE9DS19UWVBFIHx8IHR5cGVbMF0gPT09IFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGdldFdyYXBwZWROYW1lKG91dGVyVHlwZSwgaW5uZXJUeXBlLCB3cmFwcGVyTmFtZSkge1xuICB2YXIgZnVuY3Rpb25OYW1lID0gaW5uZXJUeXBlLmRpc3BsYXlOYW1lIHx8IGlubmVyVHlwZS5uYW1lIHx8ICcnO1xuICByZXR1cm4gb3V0ZXJUeXBlLmRpc3BsYXlOYW1lIHx8IChmdW5jdGlvbk5hbWUgIT09ICcnID8gd3JhcHBlck5hbWUgKyBcIihcIiArIGZ1bmN0aW9uTmFtZSArIFwiKVwiIDogd3JhcHBlck5hbWUpO1xufVxuXG5mdW5jdGlvbiBnZXRDb250ZXh0TmFtZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8ICdDb250ZXh0Jztcbn1cblxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKSB7XG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICAvLyBIb3N0IHJvb3QsIHRleHQgbm9kZSBvciBqdXN0IGludmFsaWQgdHlwZS5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHtcbiAgICBpZiAodHlwZW9mIHR5cGUudGFnID09PSAnbnVtYmVyJykge1xuICAgICAgZXJyb3IoJ1JlY2VpdmVkIGFuIHVuZXhwZWN0ZWQgb2JqZWN0IGluIGdldENvbXBvbmVudE5hbWUoKS4gJyArICdUaGlzIGlzIGxpa2VseSBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8IG51bGw7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIGV4cG9ydHMuRnJhZ21lbnQ6XG4gICAgICByZXR1cm4gJ0ZyYWdtZW50JztcblxuICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICByZXR1cm4gJ1BvcnRhbCc7XG5cbiAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICByZXR1cm4gJ1Byb2ZpbGVyJztcblxuICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgIHJldHVybiAnU3RyaWN0TW9kZSc7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlJztcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgcmV0dXJuICdTdXNwZW5zZUxpc3QnO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgIHN3aXRjaCAodHlwZS4kJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgIHZhciBjb250ZXh0ID0gdHlwZTtcbiAgICAgICAgcmV0dXJuIGdldENvbnRleHROYW1lKGNvbnRleHQpICsgJy5Db25zdW1lcic7XG5cbiAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgdmFyIHByb3ZpZGVyID0gdHlwZTtcbiAgICAgICAgcmV0dXJuIGdldENvbnRleHROYW1lKHByb3ZpZGVyLl9jb250ZXh0KSArICcuUHJvdmlkZXInO1xuXG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRXcmFwcGVkTmFtZSh0eXBlLCB0eXBlLnJlbmRlciwgJ0ZvcndhcmRSZWYnKTtcblxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKHR5cGUudHlwZSk7XG5cbiAgICAgIGNhc2UgUkVBQ1RfQkxPQ0tfVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUodHlwZS5fcmVuZGVyKTtcblxuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgbGF6eUNvbXBvbmVudCA9IHR5cGU7XG4gICAgICAgICAgdmFyIHBheWxvYWQgPSBsYXp5Q29tcG9uZW50Ll9wYXlsb2FkO1xuICAgICAgICAgIHZhciBpbml0ID0gbGF6eUNvbXBvbmVudC5faW5pdDtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZShpbml0KHBheWxvYWQpKTtcbiAgICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuLy8gSGVscGVycyB0byBwYXRjaCBjb25zb2xlLmxvZ3MgdG8gYXZvaWQgbG9nZ2luZyBkdXJpbmcgc2lkZS1lZmZlY3QgZnJlZVxuLy8gcmVwbGF5aW5nIG9uIHJlbmRlciBmdW5jdGlvbi4gVGhpcyBjdXJyZW50bHkgb25seSBwYXRjaGVzIHRoZSBvYmplY3Rcbi8vIGxhemlseSB3aGljaCB3b24ndCBjb3ZlciBpZiB0aGUgbG9nIGZ1bmN0aW9uIHdhcyBleHRyYWN0ZWQgZWFnZXJseS5cbi8vIFdlIGNvdWxkIGFsc28gZWFnZXJseSBwYXRjaCB0aGUgbWV0aG9kLlxudmFyIGRpc2FibGVkRGVwdGggPSAwO1xudmFyIHByZXZMb2c7XG52YXIgcHJldkluZm87XG52YXIgcHJldldhcm47XG52YXIgcHJldkVycm9yO1xudmFyIHByZXZHcm91cDtcbnZhciBwcmV2R3JvdXBDb2xsYXBzZWQ7XG52YXIgcHJldkdyb3VwRW5kO1xuXG5mdW5jdGlvbiBkaXNhYmxlZExvZygpIHt9XG5cbmRpc2FibGVkTG9nLl9fcmVhY3REaXNhYmxlZExvZyA9IHRydWU7XG5mdW5jdGlvbiBkaXNhYmxlTG9ncygpIHtcbiAge1xuICAgIGlmIChkaXNhYmxlZERlcHRoID09PSAwKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICAgIHByZXZMb2cgPSBjb25zb2xlLmxvZztcbiAgICAgIHByZXZJbmZvID0gY29uc29sZS5pbmZvO1xuICAgICAgcHJldldhcm4gPSBjb25zb2xlLndhcm47XG4gICAgICBwcmV2RXJyb3IgPSBjb25zb2xlLmVycm9yO1xuICAgICAgcHJldkdyb3VwID0gY29uc29sZS5ncm91cDtcbiAgICAgIHByZXZHcm91cENvbGxhcHNlZCA9IGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQ7XG4gICAgICBwcmV2R3JvdXBFbmQgPSBjb25zb2xlLmdyb3VwRW5kOyAvLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzE5MDk5XG5cbiAgICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZTogZGlzYWJsZWRMb2csXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lIEZsb3cgdGhpbmtzIGNvbnNvbGUgaXMgaW1tdXRhYmxlLlxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjb25zb2xlLCB7XG4gICAgICAgIGluZm86IHByb3BzLFxuICAgICAgICBsb2c6IHByb3BzLFxuICAgICAgICB3YXJuOiBwcm9wcyxcbiAgICAgICAgZXJyb3I6IHByb3BzLFxuICAgICAgICBncm91cDogcHJvcHMsXG4gICAgICAgIGdyb3VwQ29sbGFwc2VkOiBwcm9wcyxcbiAgICAgICAgZ3JvdXBFbmQ6IHByb3BzXG4gICAgICB9KTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgfVxuXG4gICAgZGlzYWJsZWREZXB0aCsrO1xuICB9XG59XG5mdW5jdGlvbiByZWVuYWJsZUxvZ3MoKSB7XG4gIHtcbiAgICBkaXNhYmxlZERlcHRoLS07XG5cbiAgICBpZiAoZGlzYWJsZWREZXB0aCA9PT0gMCkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgICB2YXIgcHJvcHMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH07IC8vICRGbG93Rml4TWUgRmxvdyB0aGlua3MgY29uc29sZSBpcyBpbW11dGFibGUuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNvbnNvbGUsIHtcbiAgICAgICAgbG9nOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2TG9nXG4gICAgICAgIH0pLFxuICAgICAgICBpbmZvOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2SW5mb1xuICAgICAgICB9KSxcbiAgICAgICAgd2FybjogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldldhcm5cbiAgICAgICAgfSksXG4gICAgICAgIGVycm9yOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2RXJyb3JcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwQ29sbGFwc2VkOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBDb2xsYXBzZWRcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwRW5kOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBFbmRcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICB9XG5cbiAgICBpZiAoZGlzYWJsZWREZXB0aCA8IDApIHtcbiAgICAgIGVycm9yKCdkaXNhYmxlZERlcHRoIGZlbGwgYmVsb3cgemVyby4gJyArICdUaGlzIGlzIGEgYnVnIGluIFJlYWN0LiBQbGVhc2UgZmlsZSBhbiBpc3N1ZS4nKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudERpc3BhdGNoZXIgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnREaXNwYXRjaGVyO1xudmFyIHByZWZpeDtcbmZ1bmN0aW9uIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKG5hbWUsIHNvdXJjZSwgb3duZXJGbikge1xuICB7XG4gICAgaWYgKHByZWZpeCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBFeHRyYWN0IHRoZSBWTSBzcGVjaWZpYyBwcmVmaXggdXNlZCBieSBlYWNoIGxpbmUuXG4gICAgICB0cnkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICB2YXIgbWF0Y2ggPSB4LnN0YWNrLnRyaW0oKS5tYXRjaCgvXFxuKCAqKGF0ICk/KS8pO1xuICAgICAgICBwcmVmaXggPSBtYXRjaCAmJiBtYXRjaFsxXSB8fCAnJztcbiAgICAgIH1cbiAgICB9IC8vIFdlIHVzZSB0aGUgcHJlZml4IHRvIGVuc3VyZSBvdXIgc3RhY2tzIGxpbmUgdXAgd2l0aCBuYXRpdmUgc3RhY2sgZnJhbWVzLlxuXG5cbiAgICByZXR1cm4gJ1xcbicgKyBwcmVmaXggKyBuYW1lO1xuICB9XG59XG52YXIgcmVlbnRyeSA9IGZhbHNlO1xudmFyIGNvbXBvbmVudEZyYW1lQ2FjaGU7XG5cbntcbiAgdmFyIFBvc3NpYmx5V2Vha01hcCA9IHR5cGVvZiBXZWFrTWFwID09PSAnZnVuY3Rpb24nID8gV2Vha01hcCA6IE1hcDtcbiAgY29tcG9uZW50RnJhbWVDYWNoZSA9IG5ldyBQb3NzaWJseVdlYWtNYXAoKTtcbn1cblxuZnVuY3Rpb24gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZShmbiwgY29uc3RydWN0KSB7XG4gIC8vIElmIHNvbWV0aGluZyBhc2tlZCBmb3IgYSBzdGFjayBpbnNpZGUgYSBmYWtlIHJlbmRlciwgaXQgc2hvdWxkIGdldCBpZ25vcmVkLlxuICBpZiAoIWZuIHx8IHJlZW50cnkpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICB7XG4gICAgdmFyIGZyYW1lID0gY29tcG9uZW50RnJhbWVDYWNoZS5nZXQoZm4pO1xuXG4gICAgaWYgKGZyYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBmcmFtZTtcbiAgICB9XG4gIH1cblxuICB2YXIgY29udHJvbDtcbiAgcmVlbnRyeSA9IHRydWU7XG4gIHZhciBwcmV2aW91c1ByZXBhcmVTdGFja1RyYWNlID0gRXJyb3IucHJlcGFyZVN0YWNrVHJhY2U7IC8vICRGbG93Rml4TWUgSXQgZG9lcyBhY2NlcHQgdW5kZWZpbmVkLlxuXG4gIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gdW5kZWZpbmVkO1xuICB2YXIgcHJldmlvdXNEaXNwYXRjaGVyO1xuXG4gIHtcbiAgICBwcmV2aW91c0Rpc3BhdGNoZXIgPSBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQ7IC8vIFNldCB0aGUgZGlzcGF0Y2hlciBpbiBERVYgYmVjYXVzZSB0aGlzIG1pZ2h0IGJlIGNhbGwgaW4gdGhlIHJlbmRlciBmdW5jdGlvblxuICAgIC8vIGZvciB3YXJuaW5ncy5cblxuICAgIFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudCA9IG51bGw7XG4gICAgZGlzYWJsZUxvZ3MoKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgLy8gVGhpcyBzaG91bGQgdGhyb3cuXG4gICAgaWYgKGNvbnN0cnVjdCkge1xuICAgICAgLy8gU29tZXRoaW5nIHNob3VsZCBiZSBzZXR0aW5nIHRoZSBwcm9wcyBpbiB0aGUgY29uc3RydWN0b3IuXG4gICAgICB2YXIgRmFrZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH07IC8vICRGbG93Rml4TWVcblxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRmFrZS5wcm90b3R5cGUsICdwcm9wcycsIHtcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gV2UgdXNlIGEgdGhyb3dpbmcgc2V0dGVyIGluc3RlYWQgb2YgZnJvemVuIG9yIG5vbi13cml0YWJsZSBwcm9wc1xuICAgICAgICAgIC8vIGJlY2F1c2UgdGhhdCB3b24ndCB0aHJvdyBpbiBhIG5vbi1zdHJpY3QgbW9kZSBmdW5jdGlvbi5cbiAgICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSAnb2JqZWN0JyAmJiBSZWZsZWN0LmNvbnN0cnVjdCkge1xuICAgICAgICAvLyBXZSBjb25zdHJ1Y3QgYSBkaWZmZXJlbnQgY29udHJvbCBmb3IgdGhpcyBjYXNlIHRvIGluY2x1ZGUgYW55IGV4dHJhXG4gICAgICAgIC8vIGZyYW1lcyBhZGRlZCBieSB0aGUgY29uc3RydWN0IGNhbGwuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgUmVmbGVjdC5jb25zdHJ1Y3QoRmFrZSwgW10pO1xuICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICAgIH1cblxuICAgICAgICBSZWZsZWN0LmNvbnN0cnVjdChmbiwgW10sIEZha2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBGYWtlLmNhbGwoKTtcbiAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgICB9XG5cbiAgICAgICAgZm4uY2FsbChGYWtlLnByb3RvdHlwZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgfVxuXG4gICAgICBmbigpO1xuICAgIH1cbiAgfSBjYXRjaCAoc2FtcGxlKSB7XG4gICAgLy8gVGhpcyBpcyBpbmxpbmVkIG1hbnVhbGx5IGJlY2F1c2UgY2xvc3VyZSBkb2Vzbid0IGRvIGl0IGZvciB1cy5cbiAgICBpZiAoc2FtcGxlICYmIGNvbnRyb2wgJiYgdHlwZW9mIHNhbXBsZS5zdGFjayA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIFRoaXMgZXh0cmFjdHMgdGhlIGZpcnN0IGZyYW1lIGZyb20gdGhlIHNhbXBsZSB0aGF0IGlzbid0IGFsc28gaW4gdGhlIGNvbnRyb2wuXG4gICAgICAvLyBTa2lwcGluZyBvbmUgZnJhbWUgdGhhdCB3ZSBhc3N1bWUgaXMgdGhlIGZyYW1lIHRoYXQgY2FsbHMgdGhlIHR3by5cbiAgICAgIHZhciBzYW1wbGVMaW5lcyA9IHNhbXBsZS5zdGFjay5zcGxpdCgnXFxuJyk7XG4gICAgICB2YXIgY29udHJvbExpbmVzID0gY29udHJvbC5zdGFjay5zcGxpdCgnXFxuJyk7XG4gICAgICB2YXIgcyA9IHNhbXBsZUxpbmVzLmxlbmd0aCAtIDE7XG4gICAgICB2YXIgYyA9IGNvbnRyb2xMaW5lcy5sZW5ndGggLSAxO1xuXG4gICAgICB3aGlsZSAocyA+PSAxICYmIGMgPj0gMCAmJiBzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgIC8vIFdlIGV4cGVjdCBhdCBsZWFzdCBvbmUgc3RhY2sgZnJhbWUgdG8gYmUgc2hhcmVkLlxuICAgICAgICAvLyBUeXBpY2FsbHkgdGhpcyB3aWxsIGJlIHRoZSByb290IG1vc3Qgb25lLiBIb3dldmVyLCBzdGFjayBmcmFtZXMgbWF5IGJlXG4gICAgICAgIC8vIGN1dCBvZmYgZHVlIHRvIG1heGltdW0gc3RhY2sgbGltaXRzLiBJbiB0aGlzIGNhc2UsIG9uZSBtYXliZSBjdXQgb2ZmXG4gICAgICAgIC8vIGVhcmxpZXIgdGhhbiB0aGUgb3RoZXIuIFdlIGFzc3VtZSB0aGF0IHRoZSBzYW1wbGUgaXMgbG9uZ2VyIG9yIHRoZSBzYW1lXG4gICAgICAgIC8vIGFuZCB0aGVyZSBmb3IgY3V0IG9mZiBlYXJsaWVyLiBTbyB3ZSBzaG91bGQgZmluZCB0aGUgcm9vdCBtb3N0IGZyYW1lIGluXG4gICAgICAgIC8vIHRoZSBzYW1wbGUgc29tZXdoZXJlIGluIHRoZSBjb250cm9sLlxuICAgICAgICBjLS07XG4gICAgICB9XG5cbiAgICAgIGZvciAoOyBzID49IDEgJiYgYyA+PSAwOyBzLS0sIGMtLSkge1xuICAgICAgICAvLyBOZXh0IHdlIGZpbmQgdGhlIGZpcnN0IG9uZSB0aGF0IGlzbid0IHRoZSBzYW1lIHdoaWNoIHNob3VsZCBiZSB0aGVcbiAgICAgICAgLy8gZnJhbWUgdGhhdCBjYWxsZWQgb3VyIHNhbXBsZSBmdW5jdGlvbiBhbmQgdGhlIGNvbnRyb2wuXG4gICAgICAgIGlmIChzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgICAgLy8gSW4gVjgsIHRoZSBmaXJzdCBsaW5lIGlzIGRlc2NyaWJpbmcgdGhlIG1lc3NhZ2UgYnV0IG90aGVyIFZNcyBkb24ndC5cbiAgICAgICAgICAvLyBJZiB3ZSdyZSBhYm91dCB0byByZXR1cm4gdGhlIGZpcnN0IGxpbmUsIGFuZCB0aGUgY29udHJvbCBpcyBhbHNvIG9uIHRoZSBzYW1lXG4gICAgICAgICAgLy8gbGluZSwgdGhhdCdzIGEgcHJldHR5IGdvb2QgaW5kaWNhdG9yIHRoYXQgb3VyIHNhbXBsZSB0aHJldyBhdCBzYW1lIGxpbmUgYXNcbiAgICAgICAgICAvLyB0aGUgY29udHJvbC4gSS5lLiBiZWZvcmUgd2UgZW50ZXJlZCB0aGUgc2FtcGxlIGZyYW1lLiBTbyB3ZSBpZ25vcmUgdGhpcyByZXN1bHQuXG4gICAgICAgICAgLy8gVGhpcyBjYW4gaGFwcGVuIGlmIHlvdSBwYXNzZWQgYSBjbGFzcyB0byBmdW5jdGlvbiBjb21wb25lbnQsIG9yIG5vbi1mdW5jdGlvbi5cbiAgICAgICAgICBpZiAocyAhPT0gMSB8fCBjICE9PSAxKSB7XG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgIHMtLTtcbiAgICAgICAgICAgICAgYy0tOyAvLyBXZSBtYXkgc3RpbGwgaGF2ZSBzaW1pbGFyIGludGVybWVkaWF0ZSBmcmFtZXMgZnJvbSB0aGUgY29uc3RydWN0IGNhbGwuXG4gICAgICAgICAgICAgIC8vIFRoZSBuZXh0IG9uZSB0aGF0IGlzbid0IHRoZSBzYW1lIHNob3VsZCBiZSBvdXIgbWF0Y2ggdGhvdWdoLlxuXG4gICAgICAgICAgICAgIGlmIChjIDwgMCB8fCBzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgICAgICAgICAgLy8gVjggYWRkcyBhIFwibmV3XCIgcHJlZml4IGZvciBuYXRpdmUgY2xhc3Nlcy4gTGV0J3MgcmVtb3ZlIGl0IHRvIG1ha2UgaXQgcHJldHRpZXIuXG4gICAgICAgICAgICAgICAgdmFyIF9mcmFtZSA9ICdcXG4nICsgc2FtcGxlTGluZXNbc10ucmVwbGFjZSgnIGF0IG5ldyAnLCAnIGF0ICcpO1xuXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRGcmFtZUNhY2hlLnNldChmbiwgX2ZyYW1lKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IC8vIFJldHVybiB0aGUgbGluZSB3ZSBmb3VuZC5cblxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9mcmFtZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSB3aGlsZSAocyA+PSAxICYmIGMgPj0gMCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gZmluYWxseSB7XG4gICAgcmVlbnRyeSA9IGZhbHNlO1xuXG4gICAge1xuICAgICAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50ID0gcHJldmlvdXNEaXNwYXRjaGVyO1xuICAgICAgcmVlbmFibGVMb2dzKCk7XG4gICAgfVxuXG4gICAgRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSBwcmV2aW91c1ByZXBhcmVTdGFja1RyYWNlO1xuICB9IC8vIEZhbGxiYWNrIHRvIGp1c3QgdXNpbmcgdGhlIG5hbWUgaWYgd2UgY291bGRuJ3QgbWFrZSBpdCB0aHJvdy5cblxuXG4gIHZhciBuYW1lID0gZm4gPyBmbi5kaXNwbGF5TmFtZSB8fCBmbi5uYW1lIDogJyc7XG4gIHZhciBzeW50aGV0aWNGcmFtZSA9IG5hbWUgPyBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZShuYW1lKSA6ICcnO1xuXG4gIHtcbiAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb21wb25lbnRGcmFtZUNhY2hlLnNldChmbiwgc3ludGhldGljRnJhbWUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzeW50aGV0aWNGcmFtZTtcbn1cbmZ1bmN0aW9uIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZShmbiwgc291cmNlLCBvd25lckZuKSB7XG4gIHtcbiAgICByZXR1cm4gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZShmbiwgZmFsc2UpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNob3VsZENvbnN0cnVjdChDb21wb25lbnQpIHtcbiAgdmFyIHByb3RvdHlwZSA9IENvbXBvbmVudC5wcm90b3R5cGU7XG4gIHJldHVybiAhIShwcm90b3R5cGUgJiYgcHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpO1xufVxuXG5mdW5jdGlvbiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYodHlwZSwgc291cmNlLCBvd25lckZuKSB7XG5cbiAgaWYgKHR5cGUgPT0gbnVsbCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHtcbiAgICAgIHJldHVybiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKHR5cGUsIHNob3VsZENvbnN0cnVjdCh0eXBlKSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSh0eXBlKTtcbiAgfVxuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSgnU3VzcGVuc2UnKTtcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKCdTdXNwZW5zZUxpc3QnKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZSh0eXBlLnJlbmRlcik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAvLyBNZW1vIG1heSBjb250YWluIGFueSBjb21wb25lbnQgdHlwZSBzbyB3ZSByZWN1cnNpdmVseSByZXNvbHZlIGl0LlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKHR5cGUudHlwZSwgc291cmNlLCBvd25lckZuKTtcblxuICAgICAgY2FzZSBSRUFDVF9CTE9DS19UWVBFOlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKHR5cGUuX3JlbmRlcik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIGxhenlDb21wb25lbnQgPSB0eXBlO1xuICAgICAgICAgIHZhciBwYXlsb2FkID0gbGF6eUNvbXBvbmVudC5fcGF5bG9hZDtcbiAgICAgICAgICB2YXIgaW5pdCA9IGxhenlDb21wb25lbnQuX2luaXQ7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gTGF6eSBtYXkgY29udGFpbiBhbnkgY29tcG9uZW50IHR5cGUgc28gd2UgcmVjdXJzaXZlbHkgcmVzb2x2ZSBpdC5cbiAgICAgICAgICAgIHJldHVybiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoaW5pdChwYXlsb2FkKSwgc291cmNlLCBvd25lckZuKTtcbiAgICAgICAgICB9IGNhdGNoICh4KSB7fVxuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuXG52YXIgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpIHtcbiAge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcbiAgICAgIHZhciBzdGFjayA9IGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihlbGVtZW50LnR5cGUsIGVsZW1lbnQuX3NvdXJjZSwgb3duZXIgPyBvd25lci50eXBlIDogbnVsbCk7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLnNldEV4dHJhU3RhY2tGcmFtZShzdGFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuc2V0RXh0cmFTdGFja0ZyYW1lKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja1Byb3BUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24sIGNvbXBvbmVudE5hbWUsIGVsZW1lbnQpIHtcbiAge1xuICAgIC8vICRGbG93Rml4TWUgVGhpcyBpcyBva2F5IGJ1dCBGbG93IGRvZXNuJ3Qga25vdyBpdC5cbiAgICB2YXIgaGFzID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xuXG4gICAgZm9yICh2YXIgdHlwZVNwZWNOYW1lIGluIHR5cGVTcGVjcykge1xuICAgICAgaWYgKGhhcyh0eXBlU3BlY3MsIHR5cGVTcGVjTmFtZSkpIHtcbiAgICAgICAgdmFyIGVycm9yJDEgPSB2b2lkIDA7IC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXG4gICAgICAgIC8vIGZhaWwgdGhlIHJlbmRlciBwaGFzZSB3aGVyZSBpdCBkaWRuJ3QgZmFpbCBiZWZvcmUuIFNvIHdlIGxvZyBpdC5cbiAgICAgICAgLy8gQWZ0ZXIgdGhlc2UgaGF2ZSBiZWVuIGNsZWFuZWQgdXAsIHdlJ2xsIGxldCB0aGVtIHRocm93LlxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbGx5IGFuIGludmFyaWFudCB0aGF0IGdldHMgY2F1Z2h0LiBJdCdzIHRoZSBzYW1lXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYXMgd2l0aG91dCB0aGlzIHN0YXRlbWVudCBleGNlcHQgd2l0aCBhIGJldHRlciBtZXNzYWdlLlxuICAgICAgICAgIGlmICh0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHZhciBlcnIgPSBFcnJvcigoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6ICcgKyBsb2NhdGlvbiArICcgdHlwZSBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7ICcgKyAnaXQgbXVzdCBiZSBhIGZ1bmN0aW9uLCB1c3VhbGx5IGZyb20gdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLCBidXQgcmVjZWl2ZWQgYCcgKyB0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gKyAnYC4nICsgJ1RoaXMgb2Z0ZW4gaGFwcGVucyBiZWNhdXNlIG9mIHR5cG9zIHN1Y2ggYXMgYFByb3BUeXBlcy5mdW5jdGlvbmAgaW5zdGVhZCBvZiBgUHJvcFR5cGVzLmZ1bmNgLicpO1xuICAgICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZXJyb3IkMSA9IHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdKHZhbHVlcywgdHlwZVNwZWNOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgbnVsbCwgJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJyk7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgZXJyb3IkMSA9IGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yJDEgJiYgIShlcnJvciQxIGluc3RhbmNlb2YgRXJyb3IpKSB7XG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAgICAgICBlcnJvcignJXM6IHR5cGUgc3BlY2lmaWNhdGlvbiBvZiAlcycgKyAnIGAlc2AgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciAnICsgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICVzLiAnICsgJ1lvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gcGFzcyBhbiBhcmd1bWVudCB0byB0aGUgdHlwZSBjaGVja2VyICcgKyAnY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCAnICsgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nLCBjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycsIGxvY2F0aW9uLCB0eXBlU3BlY05hbWUsIHR5cGVvZiBlcnJvciQxKTtcblxuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yJDEgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yJDEubWVzc2FnZSBpbiBsb2dnZWRUeXBlRmFpbHVyZXMpKSB7XG4gICAgICAgICAgLy8gT25seSBtb25pdG9yIHRoaXMgZmFpbHVyZSBvbmNlIGJlY2F1c2UgdGhlcmUgdGVuZHMgdG8gYmUgYSBsb3Qgb2YgdGhlXG4gICAgICAgICAgLy8gc2FtZSBlcnJvci5cbiAgICAgICAgICBsb2dnZWRUeXBlRmFpbHVyZXNbZXJyb3IkMS5tZXNzYWdlXSA9IHRydWU7XG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAgICAgICBlcnJvcignRmFpbGVkICVzIHR5cGU6ICVzJywgbG9jYXRpb24sIGVycm9yJDEubWVzc2FnZSk7XG5cbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG52YXIgUmVhY3RDdXJyZW50T3duZXIgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnRPd25lcjtcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgUkVTRVJWRURfUFJPUFMgPSB7XG4gIGtleTogdHJ1ZSxcbiAgcmVmOiB0cnVlLFxuICBfX3NlbGY6IHRydWUsXG4gIF9fc291cmNlOiB0cnVlXG59O1xudmFyIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duO1xudmFyIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duO1xudmFyIGRpZFdhcm5BYm91dFN0cmluZ1JlZnM7XG5cbntcbiAgZGlkV2FybkFib3V0U3RyaW5nUmVmcyA9IHt9O1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZFJlZihjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ3JlZicpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdyZWYnKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLnJlZiAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZEtleShjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ2tleScpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdrZXknKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLmtleSAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnLCBzZWxmKSB7XG4gIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5yZWYgPT09ICdzdHJpbmcnICYmIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQgJiYgc2VsZiAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnN0YXRlTm9kZSAhPT0gc2VsZikge1xuICAgICAgdmFyIGNvbXBvbmVudE5hbWUgPSBnZXRDb21wb25lbnROYW1lKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSk7XG5cbiAgICAgIGlmICghZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSkge1xuICAgICAgICBlcnJvcignQ29tcG9uZW50IFwiJXNcIiBjb250YWlucyB0aGUgc3RyaW5nIHJlZiBcIiVzXCIuICcgKyAnU3VwcG9ydCBmb3Igc3RyaW5nIHJlZnMgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIG1ham9yIHJlbGVhc2UuICcgKyAnVGhpcyBjYXNlIGNhbm5vdCBiZSBhdXRvbWF0aWNhbGx5IGNvbnZlcnRlZCB0byBhbiBhcnJvdyBmdW5jdGlvbi4gJyArICdXZSBhc2sgeW91IHRvIG1hbnVhbGx5IGZpeCB0aGlzIGNhc2UgYnkgdXNpbmcgdXNlUmVmKCkgb3IgY3JlYXRlUmVmKCkgaW5zdGVhZC4gJyArICdMZWFybiBtb3JlIGFib3V0IHVzaW5nIHJlZnMgc2FmZWx5IGhlcmU6ICcgKyAnaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3N0cmljdC1tb2RlLXN0cmluZy1yZWYnLCBnZXRDb21wb25lbnROYW1lKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSksIGNvbmZpZy5yZWYpO1xuXG4gICAgICAgIGRpZFdhcm5BYm91dFN0cmluZ1JlZnNbY29tcG9uZW50TmFtZV0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAge1xuICAgIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGBrZXlgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHdhcm5BYm91dEFjY2Vzc2luZ0tleS5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAna2V5Jywge1xuICAgICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdLZXksXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAge1xuICAgIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGByZWZgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHdhcm5BYm91dEFjY2Vzc2luZ1JlZi5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAncmVmJywge1xuICAgICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgfVxufVxuLyoqXG4gKiBGYWN0b3J5IG1ldGhvZCB0byBjcmVhdGUgYSBuZXcgUmVhY3QgZWxlbWVudC4gVGhpcyBubyBsb25nZXIgYWRoZXJlcyB0b1xuICogdGhlIGNsYXNzIHBhdHRlcm4sIHNvIGRvIG5vdCB1c2UgbmV3IHRvIGNhbGwgaXQuIEFsc28sIGluc3RhbmNlb2YgY2hlY2tcbiAqIHdpbGwgbm90IHdvcmsuIEluc3RlYWQgdGVzdCAkJHR5cGVvZiBmaWVsZCBhZ2FpbnN0IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSB0byBjaGVja1xuICogaWYgc29tZXRoaW5nIGlzIGEgUmVhY3QgRWxlbWVudC5cbiAqXG4gKiBAcGFyYW0geyp9IHR5cGVcbiAqIEBwYXJhbSB7Kn0gcHJvcHNcbiAqIEBwYXJhbSB7Kn0ga2V5XG4gKiBAcGFyYW0ge3N0cmluZ3xvYmplY3R9IHJlZlxuICogQHBhcmFtIHsqfSBvd25lclxuICogQHBhcmFtIHsqfSBzZWxmIEEgKnRlbXBvcmFyeSogaGVscGVyIHRvIGRldGVjdCBwbGFjZXMgd2hlcmUgYHRoaXNgIGlzXG4gKiBkaWZmZXJlbnQgZnJvbSB0aGUgYG93bmVyYCB3aGVuIFJlYWN0LmNyZWF0ZUVsZW1lbnQgaXMgY2FsbGVkLCBzbyB0aGF0IHdlXG4gKiBjYW4gd2Fybi4gV2Ugd2FudCB0byBnZXQgcmlkIG9mIG93bmVyIGFuZCByZXBsYWNlIHN0cmluZyBgcmVmYHMgd2l0aCBhcnJvd1xuICogZnVuY3Rpb25zLCBhbmQgYXMgbG9uZyBhcyBgdGhpc2AgYW5kIG93bmVyIGFyZSB0aGUgc2FtZSwgdGhlcmUgd2lsbCBiZSBub1xuICogY2hhbmdlIGluIGJlaGF2aW9yLlxuICogQHBhcmFtIHsqfSBzb3VyY2UgQW4gYW5ub3RhdGlvbiBvYmplY3QgKGFkZGVkIGJ5IGEgdHJhbnNwaWxlciBvciBvdGhlcndpc2UpXG4gKiBpbmRpY2F0aW5nIGZpbGVuYW1lLCBsaW5lIG51bWJlciwgYW5kL29yIG90aGVyIGluZm9ybWF0aW9uLlxuICogQGludGVybmFsXG4gKi9cblxuXG52YXIgUmVhY3RFbGVtZW50ID0gZnVuY3Rpb24gKHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIG93bmVyLCBwcm9wcykge1xuICB2YXIgZWxlbWVudCA9IHtcbiAgICAvLyBUaGlzIHRhZyBhbGxvd3MgdXMgdG8gdW5pcXVlbHkgaWRlbnRpZnkgdGhpcyBhcyBhIFJlYWN0IEVsZW1lbnRcbiAgICAkJHR5cGVvZjogUkVBQ1RfRUxFTUVOVF9UWVBFLFxuICAgIC8vIEJ1aWx0LWluIHByb3BlcnRpZXMgdGhhdCBiZWxvbmcgb24gdGhlIGVsZW1lbnRcbiAgICB0eXBlOiB0eXBlLFxuICAgIGtleToga2V5LFxuICAgIHJlZjogcmVmLFxuICAgIHByb3BzOiBwcm9wcyxcbiAgICAvLyBSZWNvcmQgdGhlIGNvbXBvbmVudCByZXNwb25zaWJsZSBmb3IgY3JlYXRpbmcgdGhpcyBlbGVtZW50LlxuICAgIF9vd25lcjogb3duZXJcbiAgfTtcblxuICB7XG4gICAgLy8gVGhlIHZhbGlkYXRpb24gZmxhZyBpcyBjdXJyZW50bHkgbXV0YXRpdmUuIFdlIHB1dCBpdCBvblxuICAgIC8vIGFuIGV4dGVybmFsIGJhY2tpbmcgc3RvcmUgc28gdGhhdCB3ZSBjYW4gZnJlZXplIHRoZSB3aG9sZSBvYmplY3QuXG4gICAgLy8gVGhpcyBjYW4gYmUgcmVwbGFjZWQgd2l0aCBhIFdlYWtNYXAgb25jZSB0aGV5IGFyZSBpbXBsZW1lbnRlZCBpblxuICAgIC8vIGNvbW1vbmx5IHVzZWQgZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzLlxuICAgIGVsZW1lbnQuX3N0b3JlID0ge307IC8vIFRvIG1ha2UgY29tcGFyaW5nIFJlYWN0RWxlbWVudHMgZWFzaWVyIGZvciB0ZXN0aW5nIHB1cnBvc2VzLCB3ZSBtYWtlXG4gICAgLy8gdGhlIHZhbGlkYXRpb24gZmxhZyBub24tZW51bWVyYWJsZSAod2hlcmUgcG9zc2libGUsIHdoaWNoIHNob3VsZFxuICAgIC8vIGluY2x1ZGUgZXZlcnkgZW52aXJvbm1lbnQgd2UgcnVuIHRlc3RzIGluKSwgc28gdGhlIHRlc3QgZnJhbWV3b3JrXG4gICAgLy8gaWdub3JlcyBpdC5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50Ll9zdG9yZSwgJ3ZhbGlkYXRlZCcsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgdmFsdWU6IGZhbHNlXG4gICAgfSk7IC8vIHNlbGYgYW5kIHNvdXJjZSBhcmUgREVWIG9ubHkgcHJvcGVydGllcy5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NlbGYnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc2VsZlxuICAgIH0pOyAvLyBUd28gZWxlbWVudHMgY3JlYXRlZCBpbiB0d28gZGlmZmVyZW50IHBsYWNlcyBzaG91bGQgYmUgY29uc2lkZXJlZFxuICAgIC8vIGVxdWFsIGZvciB0ZXN0aW5nIHB1cnBvc2VzIGFuZCB0aGVyZWZvcmUgd2UgaGlkZSBpdCBmcm9tIGVudW1lcmF0aW9uLlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc291cmNlJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNvdXJjZVxuICAgIH0pO1xuXG4gICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudC5wcm9wcyk7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufTtcbi8qKlxuICogaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0anMvcmZjcy9wdWxsLzEwN1xuICogQHBhcmFtIHsqfSB0eXBlXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHNcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAqL1xuXG5mdW5jdGlvbiBqc3hERVYodHlwZSwgY29uZmlnLCBtYXliZUtleSwgc291cmNlLCBzZWxmKSB7XG4gIHtcbiAgICB2YXIgcHJvcE5hbWU7IC8vIFJlc2VydmVkIG5hbWVzIGFyZSBleHRyYWN0ZWRcblxuICAgIHZhciBwcm9wcyA9IHt9O1xuICAgIHZhciBrZXkgPSBudWxsO1xuICAgIHZhciByZWYgPSBudWxsOyAvLyBDdXJyZW50bHksIGtleSBjYW4gYmUgc3ByZWFkIGluIGFzIGEgcHJvcC4gVGhpcyBjYXVzZXMgYSBwb3RlbnRpYWxcbiAgICAvLyBpc3N1ZSBpZiBrZXkgaXMgYWxzbyBleHBsaWNpdGx5IGRlY2xhcmVkIChpZS4gPGRpdiB7Li4ucHJvcHN9IGtleT1cIkhpXCIgLz5cbiAgICAvLyBvciA8ZGl2IGtleT1cIkhpXCIgey4uLnByb3BzfSAvPiApLiBXZSB3YW50IHRvIGRlcHJlY2F0ZSBrZXkgc3ByZWFkLFxuICAgIC8vIGJ1dCBhcyBhbiBpbnRlcm1lZGlhcnkgc3RlcCwgd2Ugd2lsbCB1c2UganN4REVWIGZvciBldmVyeXRoaW5nIGV4Y2VwdFxuICAgIC8vIDxkaXYgey4uLnByb3BzfSBrZXk9XCJIaVwiIC8+LCBiZWNhdXNlIHdlIGFyZW4ndCBjdXJyZW50bHkgYWJsZSB0byB0ZWxsIGlmXG4gICAgLy8ga2V5IGlzIGV4cGxpY2l0bHkgZGVjbGFyZWQgdG8gYmUgdW5kZWZpbmVkIG9yIG5vdC5cblxuICAgIGlmIChtYXliZUtleSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBrZXkgPSAnJyArIG1heWJlS2V5O1xuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZEtleShjb25maWcpKSB7XG4gICAgICBrZXkgPSAnJyArIGNvbmZpZy5rZXk7XG4gICAgfVxuXG4gICAgaWYgKGhhc1ZhbGlkUmVmKGNvbmZpZykpIHtcbiAgICAgIHJlZiA9IGNvbmZpZy5yZWY7XG4gICAgICB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnLCBzZWxmKTtcbiAgICB9IC8vIFJlbWFpbmluZyBwcm9wZXJ0aWVzIGFyZSBhZGRlZCB0byBhIG5ldyBwcm9wcyBvYmplY3RcblxuXG4gICAgZm9yIChwcm9wTmFtZSBpbiBjb25maWcpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgcHJvcE5hbWUpICYmICFSRVNFUlZFRF9QUk9QUy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gY29uZmlnW3Byb3BOYW1lXTtcbiAgICAgIH1cbiAgICB9IC8vIFJlc29sdmUgZGVmYXVsdCBwcm9wc1xuXG5cbiAgICBpZiAodHlwZSAmJiB0eXBlLmRlZmF1bHRQcm9wcykge1xuICAgICAgdmFyIGRlZmF1bHRQcm9wcyA9IHR5cGUuZGVmYXVsdFByb3BzO1xuXG4gICAgICBmb3IgKHByb3BOYW1lIGluIGRlZmF1bHRQcm9wcykge1xuICAgICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBkZWZhdWx0UHJvcHNbcHJvcE5hbWVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGtleSB8fCByZWYpIHtcbiAgICAgIHZhciBkaXNwbGF5TmFtZSA9IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nID8gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgJ1Vua25vd24nIDogdHlwZTtcblxuICAgICAgaWYgKGtleSkge1xuICAgICAgICBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVmKSB7XG4gICAgICAgIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlYWN0RWxlbWVudCh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LCBwcm9wcyk7XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudE93bmVyJDEgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnRPd25lcjtcbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuXG5mdW5jdGlvbiBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGVsZW1lbnQpIHtcbiAge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcbiAgICAgIHZhciBzdGFjayA9IGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihlbGVtZW50LnR5cGUsIGVsZW1lbnQuX3NvdXJjZSwgb3duZXIgPyBvd25lci50eXBlIDogbnVsbCk7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEuc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxLnNldEV4dHJhU3RhY2tGcmFtZShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duO1xuXG57XG4gIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gZmFsc2U7XG59XG4vKipcbiAqIFZlcmlmaWVzIHRoZSBvYmplY3QgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2lzdmFsaWRlbGVtZW50XG4gKiBAcGFyYW0gez9vYmplY3R9IG9iamVjdFxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBgb2JqZWN0YCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIEBmaW5hbFxuICovXG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50KG9iamVjdCkge1xuICB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKSB7XG4gIHtcbiAgICBpZiAoUmVhY3RDdXJyZW50T3duZXIkMS5jdXJyZW50KSB7XG4gICAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUoUmVhY3RDdXJyZW50T3duZXIkMS5jdXJyZW50LnR5cGUpO1xuXG4gICAgICBpZiAobmFtZSkge1xuICAgICAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHRoZSByZW5kZXIgbWV0aG9kIG9mIGAnICsgbmFtZSArICdgLic7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuICcnO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKHNvdXJjZSkge1xuICB7XG4gICAgaWYgKHNvdXJjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgZmlsZU5hbWUgPSBzb3VyY2UuZmlsZU5hbWUucmVwbGFjZSgvXi4qW1xcXFxcXC9dLywgJycpO1xuICAgICAgdmFyIGxpbmVOdW1iZXIgPSBzb3VyY2UubGluZU51bWJlcjtcbiAgICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgeW91ciBjb2RlIGF0ICcgKyBmaWxlTmFtZSArICc6JyArIGxpbmVOdW1iZXIgKyAnLic7XG4gICAgfVxuXG4gICAgcmV0dXJuICcnO1xuICB9XG59XG4vKipcbiAqIFdhcm4gaWYgdGhlcmUncyBubyBrZXkgZXhwbGljaXRseSBzZXQgb24gZHluYW1pYyBhcnJheXMgb2YgY2hpbGRyZW4gb3JcbiAqIG9iamVjdCBrZXlzIGFyZSBub3QgdmFsaWQuIFRoaXMgYWxsb3dzIHVzIHRvIGtlZXAgdHJhY2sgb2YgY2hpbGRyZW4gYmV0d2VlblxuICogdXBkYXRlcy5cbiAqL1xuXG5cbnZhciBvd25lckhhc0tleVVzZVdhcm5pbmcgPSB7fTtcblxuZnVuY3Rpb24gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKSB7XG4gIHtcbiAgICB2YXIgaW5mbyA9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuXG4gICAgaWYgKCFpbmZvKSB7XG4gICAgICB2YXIgcGFyZW50TmFtZSA9IHR5cGVvZiBwYXJlbnRUeXBlID09PSAnc3RyaW5nJyA/IHBhcmVudFR5cGUgOiBwYXJlbnRUeXBlLmRpc3BsYXlOYW1lIHx8IHBhcmVudFR5cGUubmFtZTtcblxuICAgICAgaWYgKHBhcmVudE5hbWUpIHtcbiAgICAgICAgaW5mbyA9IFwiXFxuXFxuQ2hlY2sgdGhlIHRvcC1sZXZlbCByZW5kZXIgY2FsbCB1c2luZyA8XCIgKyBwYXJlbnROYW1lICsgXCI+LlwiO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpbmZvO1xuICB9XG59XG4vKipcbiAqIFdhcm4gaWYgdGhlIGVsZW1lbnQgZG9lc24ndCBoYXZlIGFuIGV4cGxpY2l0IGtleSBhc3NpZ25lZCB0byBpdC5cbiAqIFRoaXMgZWxlbWVudCBpcyBpbiBhbiBhcnJheS4gVGhlIGFycmF5IGNvdWxkIGdyb3cgYW5kIHNocmluayBvciBiZVxuICogcmVvcmRlcmVkLiBBbGwgY2hpbGRyZW4gdGhhdCBoYXZlbid0IGFscmVhZHkgYmVlbiB2YWxpZGF0ZWQgYXJlIHJlcXVpcmVkIHRvXG4gKiBoYXZlIGEgXCJrZXlcIiBwcm9wZXJ0eSBhc3NpZ25lZCB0byBpdC4gRXJyb3Igc3RhdHVzZXMgYXJlIGNhY2hlZCBzbyBhIHdhcm5pbmdcbiAqIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnQgRWxlbWVudCB0aGF0IHJlcXVpcmVzIGEga2V5LlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIGVsZW1lbnQncyBwYXJlbnQncyB0eXBlLlxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVFeHBsaWNpdEtleShlbGVtZW50LCBwYXJlbnRUeXBlKSB7XG4gIHtcbiAgICBpZiAoIWVsZW1lbnQuX3N0b3JlIHx8IGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCB8fCBlbGVtZW50LmtleSAhPSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcbiAgICB2YXIgY3VycmVudENvbXBvbmVudEVycm9ySW5mbyA9IGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSk7XG5cbiAgICBpZiAob3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgb3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dID0gdHJ1ZTsgLy8gVXN1YWxseSB0aGUgY3VycmVudCBvd25lciBpcyB0aGUgb2ZmZW5kZXIsIGJ1dCBpZiBpdCBhY2NlcHRzIGNoaWxkcmVuIGFzIGFcbiAgICAvLyBwcm9wZXJ0eSwgaXQgbWF5IGJlIHRoZSBjcmVhdG9yIG9mIHRoZSBjaGlsZCB0aGF0J3MgcmVzcG9uc2libGUgZm9yXG4gICAgLy8gYXNzaWduaW5nIGl0IGEga2V5LlxuXG4gICAgdmFyIGNoaWxkT3duZXIgPSAnJztcblxuICAgIGlmIChlbGVtZW50ICYmIGVsZW1lbnQuX293bmVyICYmIGVsZW1lbnQuX293bmVyICE9PSBSZWFjdEN1cnJlbnRPd25lciQxLmN1cnJlbnQpIHtcbiAgICAgIC8vIEdpdmUgdGhlIGNvbXBvbmVudCB0aGF0IG9yaWdpbmFsbHkgY3JlYXRlZCB0aGlzIGNoaWxkLlxuICAgICAgY2hpbGRPd25lciA9IFwiIEl0IHdhcyBwYXNzZWQgYSBjaGlsZCBmcm9tIFwiICsgZ2V0Q29tcG9uZW50TmFtZShlbGVtZW50Ll9vd25lci50eXBlKSArIFwiLlwiO1xuICAgIH1cblxuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZWxlbWVudCk7XG5cbiAgICBlcnJvcignRWFjaCBjaGlsZCBpbiBhIGxpc3Qgc2hvdWxkIGhhdmUgYSB1bmlxdWUgXCJrZXlcIiBwcm9wLicgKyAnJXMlcyBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3dhcm5pbmcta2V5cyBmb3IgbW9yZSBpbmZvcm1hdGlvbi4nLCBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvLCBjaGlsZE93bmVyKTtcblxuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gIH1cbn1cbi8qKlxuICogRW5zdXJlIHRoYXQgZXZlcnkgZWxlbWVudCBlaXRoZXIgaXMgcGFzc2VkIGluIGEgc3RhdGljIGxvY2F0aW9uLCBpbiBhblxuICogYXJyYXkgd2l0aCBhbiBleHBsaWNpdCBrZXlzIHByb3BlcnR5IGRlZmluZWQsIG9yIGluIGFuIG9iamVjdCBsaXRlcmFsXG4gKiB3aXRoIHZhbGlkIGtleSBwcm9wZXJ0eS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3ROb2RlfSBub2RlIFN0YXRpY2FsbHkgcGFzc2VkIGNoaWxkIG9mIGFueSB0eXBlLlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIG5vZGUncyBwYXJlbnQncyB0eXBlLlxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVDaGlsZEtleXMobm9kZSwgcGFyZW50VHlwZSkge1xuICB7XG4gICAgaWYgKHR5cGVvZiBub2RlICE9PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChBcnJheS5pc0FycmF5KG5vZGUpKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNoaWxkID0gbm9kZVtpXTtcblxuICAgICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShjaGlsZCwgcGFyZW50VHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzVmFsaWRFbGVtZW50KG5vZGUpKSB7XG4gICAgICAvLyBUaGlzIGVsZW1lbnQgd2FzIHBhc3NlZCBpbiBhIHZhbGlkIGxvY2F0aW9uLlxuICAgICAgaWYgKG5vZGUuX3N0b3JlKSB7XG4gICAgICAgIG5vZGUuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChub2RlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4obm9kZSk7XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyBFbnRyeSBpdGVyYXRvcnMgdXNlZCB0byBwcm92aWRlIGltcGxpY2l0IGtleXMsXG4gICAgICAgIC8vIGJ1dCBub3cgd2UgcHJpbnQgYSBzZXBhcmF0ZSB3YXJuaW5nIGZvciB0aGVtIGxhdGVyLlxuICAgICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gbm9kZS5lbnRyaWVzKSB7XG4gICAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG5vZGUpO1xuICAgICAgICAgIHZhciBzdGVwO1xuXG4gICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoc3RlcC52YWx1ZSwgcGFyZW50VHlwZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEdpdmVuIGFuIGVsZW1lbnQsIHZhbGlkYXRlIHRoYXQgaXRzIHByb3BzIGZvbGxvdyB0aGUgcHJvcFR5cGVzIGRlZmluaXRpb24sXG4gKiBwcm92aWRlZCBieSB0aGUgdHlwZS5cbiAqXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudFxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCkge1xuICB7XG4gICAgdmFyIHR5cGUgPSBlbGVtZW50LnR5cGU7XG5cbiAgICBpZiAodHlwZSA9PT0gbnVsbCB8fCB0eXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHByb3BUeXBlcztcblxuICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgLy8gTm90ZTogTWVtbyBvbmx5IGNoZWNrcyBvdXRlciBwcm9wcyBoZXJlLlxuICAgIC8vIElubmVyIHByb3BzIGFyZSBjaGVja2VkIGluIHRoZSByZWNvbmNpbGVyLlxuICAgIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSkpIHtcbiAgICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHByb3BUeXBlcykge1xuICAgICAgLy8gSW50ZW50aW9uYWxseSBpbnNpZGUgdG8gYXZvaWQgdHJpZ2dlcmluZyBsYXp5IGluaXRpYWxpemVyczpcbiAgICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKTtcbiAgICAgIGNoZWNrUHJvcFR5cGVzKHByb3BUeXBlcywgZWxlbWVudC5wcm9wcywgJ3Byb3AnLCBuYW1lLCBlbGVtZW50KTtcbiAgICB9IGVsc2UgaWYgKHR5cGUuUHJvcFR5cGVzICE9PSB1bmRlZmluZWQgJiYgIXByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duKSB7XG4gICAgICBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IHRydWU7IC8vIEludGVudGlvbmFsbHkgaW5zaWRlIHRvIGF2b2lkIHRyaWdnZXJpbmcgbGF6eSBpbml0aWFsaXplcnM6XG5cbiAgICAgIHZhciBfbmFtZSA9IGdldENvbXBvbmVudE5hbWUodHlwZSk7XG5cbiAgICAgIGVycm9yKCdDb21wb25lbnQgJXMgZGVjbGFyZWQgYFByb3BUeXBlc2AgaW5zdGVhZCBvZiBgcHJvcFR5cGVzYC4gRGlkIHlvdSBtaXNzcGVsbCB0aGUgcHJvcGVydHkgYXNzaWdubWVudD8nLCBfbmFtZSB8fCAnVW5rbm93bicpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdHlwZS5nZXREZWZhdWx0UHJvcHMgPT09ICdmdW5jdGlvbicgJiYgIXR5cGUuZ2V0RGVmYXVsdFByb3BzLmlzUmVhY3RDbGFzc0FwcHJvdmVkKSB7XG4gICAgICBlcnJvcignZ2V0RGVmYXVsdFByb3BzIGlzIG9ubHkgdXNlZCBvbiBjbGFzc2ljIFJlYWN0LmNyZWF0ZUNsYXNzICcgKyAnZGVmaW5pdGlvbnMuIFVzZSBhIHN0YXRpYyBwcm9wZXJ0eSBuYW1lZCBgZGVmYXVsdFByb3BzYCBpbnN0ZWFkLicpO1xuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhIGZyYWdtZW50LCB2YWxpZGF0ZSB0aGF0IGl0IGNhbiBvbmx5IGJlIHByb3ZpZGVkIHdpdGggZnJhZ21lbnQgcHJvcHNcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBmcmFnbWVudFxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVGcmFnbWVudFByb3BzKGZyYWdtZW50KSB7XG4gIHtcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGZyYWdtZW50LnByb3BzKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGtleSA9IGtleXNbaV07XG5cbiAgICAgIGlmIChrZXkgIT09ICdjaGlsZHJlbicgJiYga2V5ICE9PSAna2V5Jykge1xuICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGZyYWdtZW50KTtcblxuICAgICAgICBlcnJvcignSW52YWxpZCBwcm9wIGAlc2Agc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4gJyArICdSZWFjdC5GcmFnbWVudCBjYW4gb25seSBoYXZlIGBrZXlgIGFuZCBgY2hpbGRyZW5gIHByb3BzLicsIGtleSk7XG5cbiAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGZyYWdtZW50LnJlZiAhPT0gbnVsbCkge1xuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShmcmFnbWVudCk7XG5cbiAgICAgIGVycm9yKCdJbnZhbGlkIGF0dHJpYnV0ZSBgcmVmYCBzdXBwbGllZCB0byBgUmVhY3QuRnJhZ21lbnRgLicpO1xuXG4gICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBqc3hXaXRoVmFsaWRhdGlvbih0eXBlLCBwcm9wcywga2V5LCBpc1N0YXRpY0NoaWxkcmVuLCBzb3VyY2UsIHNlbGYpIHtcbiAge1xuICAgIHZhciB2YWxpZFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSk7IC8vIFdlIHdhcm4gaW4gdGhpcyBjYXNlIGJ1dCBkb24ndCB0aHJvdy4gV2UgZXhwZWN0IHRoZSBlbGVtZW50IGNyZWF0aW9uIHRvXG4gICAgLy8gc3VjY2VlZCBhbmQgdGhlcmUgd2lsbCBsaWtlbHkgYmUgZXJyb3JzIGluIHJlbmRlci5cblxuICAgIGlmICghdmFsaWRUeXBlKSB7XG4gICAgICB2YXIgaW5mbyA9ICcnO1xuXG4gICAgICBpZiAodHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmIE9iamVjdC5rZXlzKHR5cGUpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBpbmZvICs9ICcgWW91IGxpa2VseSBmb3Jnb3QgdG8gZXhwb3J0IHlvdXIgY29tcG9uZW50IGZyb20gdGhlIGZpbGUgJyArIFwiaXQncyBkZWZpbmVkIGluLCBvciB5b3UgbWlnaHQgaGF2ZSBtaXhlZCB1cCBkZWZhdWx0IGFuZCBuYW1lZCBpbXBvcnRzLlwiO1xuICAgICAgfVxuXG4gICAgICB2YXIgc291cmNlSW5mbyA9IGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKHNvdXJjZSk7XG5cbiAgICAgIGlmIChzb3VyY2VJbmZvKSB7XG4gICAgICAgIGluZm8gKz0gc291cmNlSW5mbztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluZm8gKz0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG4gICAgICB9XG5cbiAgICAgIHZhciB0eXBlU3RyaW5nO1xuXG4gICAgICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgICAgICB0eXBlU3RyaW5nID0gJ251bGwnO1xuICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHR5cGUpKSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSAnYXJyYXknO1xuICAgICAgfSBlbHNlIGlmICh0eXBlICE9PSB1bmRlZmluZWQgJiYgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFKSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSBcIjxcIiArIChnZXRDb21wb25lbnROYW1lKHR5cGUudHlwZSkgfHwgJ1Vua25vd24nKSArIFwiIC8+XCI7XG4gICAgICAgIGluZm8gPSAnIERpZCB5b3UgYWNjaWRlbnRhbGx5IGV4cG9ydCBhIEpTWCBsaXRlcmFsIGluc3RlYWQgb2YgYSBjb21wb25lbnQ/JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSB0eXBlb2YgdHlwZTtcbiAgICAgIH1cblxuICAgICAgZXJyb3IoJ1JlYWN0LmpzeDogdHlwZSBpcyBpbnZhbGlkIC0tIGV4cGVjdGVkIGEgc3RyaW5nIChmb3IgJyArICdidWlsdC1pbiBjb21wb25lbnRzKSBvciBhIGNsYXNzL2Z1bmN0aW9uIChmb3IgY29tcG9zaXRlICcgKyAnY29tcG9uZW50cykgYnV0IGdvdDogJXMuJXMnLCB0eXBlU3RyaW5nLCBpbmZvKTtcbiAgICB9XG5cbiAgICB2YXIgZWxlbWVudCA9IGpzeERFVih0eXBlLCBwcm9wcywga2V5LCBzb3VyY2UsIHNlbGYpOyAvLyBUaGUgcmVzdWx0IGNhbiBiZSBudWxsaXNoIGlmIGEgbW9jayBvciBhIGN1c3RvbSBmdW5jdGlvbiBpcyB1c2VkLlxuICAgIC8vIFRPRE86IERyb3AgdGhpcyB3aGVuIHRoZXNlIGFyZSBubyBsb25nZXIgYWxsb3dlZCBhcyB0aGUgdHlwZSBhcmd1bWVudC5cblxuICAgIGlmIChlbGVtZW50ID09IG51bGwpIHtcbiAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH0gLy8gU2tpcCBrZXkgd2FybmluZyBpZiB0aGUgdHlwZSBpc24ndCB2YWxpZCBzaW5jZSBvdXIga2V5IHZhbGlkYXRpb24gbG9naWNcbiAgICAvLyBkb2Vzbid0IGV4cGVjdCBhIG5vbi1zdHJpbmcvZnVuY3Rpb24gdHlwZSBhbmQgY2FuIHRocm93IGNvbmZ1c2luZyBlcnJvcnMuXG4gICAgLy8gV2UgZG9uJ3Qgd2FudCBleGNlcHRpb24gYmVoYXZpb3IgdG8gZGlmZmVyIGJldHdlZW4gZGV2IGFuZCBwcm9kLlxuICAgIC8vIChSZW5kZXJpbmcgd2lsbCB0aHJvdyB3aXRoIGEgaGVscGZ1bCBtZXNzYWdlIGFuZCBhcyBzb29uIGFzIHRoZSB0eXBlIGlzXG4gICAgLy8gZml4ZWQsIHRoZSBrZXkgd2FybmluZ3Mgd2lsbCBhcHBlYXIuKVxuXG5cbiAgICBpZiAodmFsaWRUeXBlKSB7XG4gICAgICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbjtcblxuICAgICAgaWYgKGNoaWxkcmVuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGlzU3RhdGljQ2hpbGRyZW4pIHtcbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgdmFsaWRhdGVDaGlsZEtleXMoY2hpbGRyZW5baV0sIHR5cGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgICAgICAgICBPYmplY3QuZnJlZXplKGNoaWxkcmVuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXJyb3IoJ1JlYWN0LmpzeDogU3RhdGljIGNoaWxkcmVuIHNob3VsZCBhbHdheXMgYmUgYW4gYXJyYXkuICcgKyAnWW91IGFyZSBsaWtlbHkgZXhwbGljaXRseSBjYWxsaW5nIFJlYWN0LmpzeHMgb3IgUmVhY3QuanN4REVWLiAnICsgJ1VzZSB0aGUgQmFiZWwgdHJhbnNmb3JtIGluc3RlYWQuJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGNoaWxkcmVuLCB0eXBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlID09PSBleHBvcnRzLkZyYWdtZW50KSB7XG4gICAgICB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG59IC8vIFRoZXNlIHR3byBmdW5jdGlvbnMgZXhpc3QgdG8gc3RpbGwgZ2V0IGNoaWxkIHdhcm5pbmdzIGluIGRldlxuXG52YXIganN4REVWJDEgPSAganN4V2l0aFZhbGlkYXRpb24gO1xuXG5leHBvcnRzLmpzeERFViA9IGpzeERFViQxO1xuICB9KSgpO1xufVxuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNy4wLjJcbiAqIHJlYWN0LmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxudmFyIF9hc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbi8vIFRPRE86IHRoaXMgaXMgc3BlY2lhbCBiZWNhdXNlIGl0IGdldHMgaW1wb3J0ZWQgZHVyaW5nIGJ1aWxkLlxudmFyIFJlYWN0VmVyc2lvbiA9ICcxNy4wLjInO1xuXG4vLyBBVFRFTlRJT05cbi8vIFdoZW4gYWRkaW5nIG5ldyBzeW1ib2xzIHRvIHRoaXMgZmlsZSxcbi8vIFBsZWFzZSBjb25zaWRlciBhbHNvIGFkZGluZyB0byAncmVhY3QtZGV2dG9vbHMtc2hhcmVkL3NyYy9iYWNrZW5kL1JlYWN0U3ltYm9scydcbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLiBJZiB0aGVyZSBpcyBubyBuYXRpdmUgU3ltYm9sXG4vLyBub3IgcG9seWZpbGwsIHRoZW4gYSBwbGFpbiBudW1iZXIgaXMgdXNlZCBmb3IgcGVyZm9ybWFuY2UuXG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gMHhlYWNhO1xuZXhwb3J0cy5GcmFnbWVudCA9IDB4ZWFjYjtcbmV4cG9ydHMuU3RyaWN0TW9kZSA9IDB4ZWFjYztcbmV4cG9ydHMuUHJvZmlsZXIgPSAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IDB4ZWFjZDtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSAweGVhY2U7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IDB4ZWFkMDtcbmV4cG9ydHMuU3VzcGVuc2UgPSAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IDB4ZWFkOTtcbnZhciBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSA9IDB4ZWFkYTtcbnZhciBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gMHhlYWQ1O1xudmFyIFJFQUNUX1NDT1BFX1RZUEUgPSAweGVhZDc7XG52YXIgUkVBQ1RfT1BBUVVFX0lEX1RZUEUgPSAweGVhZTA7XG52YXIgUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgPSAweGVhZTE7XG52YXIgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSAweGVhZTI7XG52YXIgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFID0gMHhlYWUzO1xuXG5pZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yKSB7XG4gIHZhciBzeW1ib2xGb3IgPSBTeW1ib2wuZm9yO1xuICBSRUFDVF9FTEVNRU5UX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmVsZW1lbnQnKTtcbiAgUkVBQ1RfUE9SVEFMX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnBvcnRhbCcpO1xuICBleHBvcnRzLkZyYWdtZW50ID0gc3ltYm9sRm9yKCdyZWFjdC5mcmFnbWVudCcpO1xuICBleHBvcnRzLlN0cmljdE1vZGUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN0cmljdF9tb2RlJyk7XG4gIGV4cG9ydHMuUHJvZmlsZXIgPSBzeW1ib2xGb3IoJ3JlYWN0LnByb2ZpbGVyJyk7XG4gIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnByb3ZpZGVyJyk7XG4gIFJFQUNUX0NPTlRFWFRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuY29udGV4dCcpO1xuICBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpO1xuICBleHBvcnRzLlN1c3BlbnNlID0gc3ltYm9sRm9yKCdyZWFjdC5zdXNwZW5zZScpO1xuICBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN1c3BlbnNlX2xpc3QnKTtcbiAgUkVBQ1RfTUVNT19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5tZW1vJyk7XG4gIFJFQUNUX0xBWllfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubGF6eScpO1xuICBSRUFDVF9CTE9DS19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5ibG9jaycpO1xuICBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc2VydmVyLmJsb2NrJyk7XG4gIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZ1bmRhbWVudGFsJyk7XG4gIFJFQUNUX1NDT1BFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnNjb3BlJyk7XG4gIFJFQUNUX09QQVFVRV9JRF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5vcGFxdWUuaWQnKTtcbiAgUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmRlYnVnX3RyYWNlX21vZGUnKTtcbiAgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm9mZnNjcmVlbicpO1xuICBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmxlZ2FjeV9oaWRkZW4nKTtcbn1cblxudmFyIE1BWUJFX0lURVJBVE9SX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yO1xudmFyIEZBVVhfSVRFUkFUT1JfU1lNQk9MID0gJ0BAaXRlcmF0b3InO1xuZnVuY3Rpb24gZ2V0SXRlcmF0b3JGbihtYXliZUl0ZXJhYmxlKSB7XG4gIGlmIChtYXliZUl0ZXJhYmxlID09PSBudWxsIHx8IHR5cGVvZiBtYXliZUl0ZXJhYmxlICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIG1heWJlSXRlcmF0b3IgPSBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgJiYgbWF5YmVJdGVyYWJsZVtNQVlCRV9JVEVSQVRPUl9TWU1CT0xdIHx8IG1heWJlSXRlcmFibGVbRkFVWF9JVEVSQVRPUl9TWU1CT0xdO1xuXG4gIGlmICh0eXBlb2YgbWF5YmVJdGVyYXRvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBtYXliZUl0ZXJhdG9yO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8qKlxuICogS2VlcHMgdHJhY2sgb2YgdGhlIGN1cnJlbnQgZGlzcGF0Y2hlci5cbiAqL1xudmFyIFJlYWN0Q3VycmVudERpc3BhdGNoZXIgPSB7XG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICogQHR5cGUge1JlYWN0Q29tcG9uZW50fVxuICAgKi9cbiAgY3VycmVudDogbnVsbFxufTtcblxuLyoqXG4gKiBLZWVwcyB0cmFjayBvZiB0aGUgY3VycmVudCBiYXRjaCdzIGNvbmZpZ3VyYXRpb24gc3VjaCBhcyBob3cgbG9uZyBhbiB1cGRhdGVcbiAqIHNob3VsZCBzdXNwZW5kIGZvciBpZiBpdCBuZWVkcyB0by5cbiAqL1xudmFyIFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnID0ge1xuICB0cmFuc2l0aW9uOiAwXG59O1xuXG4vKipcbiAqIEtlZXBzIHRyYWNrIG9mIHRoZSBjdXJyZW50IG93bmVyLlxuICpcbiAqIFRoZSBjdXJyZW50IG93bmVyIGlzIHRoZSBjb21wb25lbnQgd2hvIHNob3VsZCBvd24gYW55IGNvbXBvbmVudHMgdGhhdCBhcmVcbiAqIGN1cnJlbnRseSBiZWluZyBjb25zdHJ1Y3RlZC5cbiAqL1xudmFyIFJlYWN0Q3VycmVudE93bmVyID0ge1xuICAvKipcbiAgICogQGludGVybmFsXG4gICAqIEB0eXBlIHtSZWFjdENvbXBvbmVudH1cbiAgICovXG4gIGN1cnJlbnQ6IG51bGxcbn07XG5cbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0ge307XG52YXIgY3VycmVudEV4dHJhU3RhY2tGcmFtZSA9IG51bGw7XG5mdW5jdGlvbiBzZXRFeHRyYVN0YWNrRnJhbWUoc3RhY2spIHtcbiAge1xuICAgIGN1cnJlbnRFeHRyYVN0YWNrRnJhbWUgPSBzdGFjaztcbiAgfVxufVxuXG57XG4gIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuc2V0RXh0cmFTdGFja0ZyYW1lID0gZnVuY3Rpb24gKHN0YWNrKSB7XG4gICAge1xuICAgICAgY3VycmVudEV4dHJhU3RhY2tGcmFtZSA9IHN0YWNrO1xuICAgIH1cbiAgfTsgLy8gU3RhY2sgaW1wbGVtZW50YXRpb24gaW5qZWN0ZWQgYnkgdGhlIGN1cnJlbnQgcmVuZGVyZXIuXG5cblxuICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldEN1cnJlbnRTdGFjayA9IG51bGw7XG5cbiAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzdGFjayA9ICcnOyAvLyBBZGQgYW4gZXh0cmEgdG9wIGZyYW1lIHdoaWxlIGFuIGVsZW1lbnQgaXMgYmVpbmcgdmFsaWRhdGVkXG5cbiAgICBpZiAoY3VycmVudEV4dHJhU3RhY2tGcmFtZSkge1xuICAgICAgc3RhY2sgKz0gY3VycmVudEV4dHJhU3RhY2tGcmFtZTtcbiAgICB9IC8vIERlbGVnYXRlIHRvIHRoZSBpbmplY3RlZCByZW5kZXJlci1zcGVjaWZpYyBpbXBsZW1lbnRhdGlvblxuXG5cbiAgICB2YXIgaW1wbCA9IFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0Q3VycmVudFN0YWNrO1xuXG4gICAgaWYgKGltcGwpIHtcbiAgICAgIHN0YWNrICs9IGltcGwoKSB8fCAnJztcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhY2s7XG4gIH07XG59XG5cbi8qKlxuICogVXNlZCBieSBhY3QoKSB0byB0cmFjayB3aGV0aGVyIHlvdSdyZSBpbnNpZGUgYW4gYWN0KCkgc2NvcGUuXG4gKi9cbnZhciBJc1NvbWVSZW5kZXJlckFjdGluZyA9IHtcbiAgY3VycmVudDogZmFsc2Vcbn07XG5cbnZhciBSZWFjdFNoYXJlZEludGVybmFscyA9IHtcbiAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlcjogUmVhY3RDdXJyZW50RGlzcGF0Y2hlcixcbiAgUmVhY3RDdXJyZW50QmF0Y2hDb25maWc6IFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnLFxuICBSZWFjdEN1cnJlbnRPd25lcjogUmVhY3RDdXJyZW50T3duZXIsXG4gIElzU29tZVJlbmRlcmVyQWN0aW5nOiBJc1NvbWVSZW5kZXJlckFjdGluZyxcbiAgLy8gVXNlZCBieSByZW5kZXJlcnMgdG8gYXZvaWQgYnVuZGxpbmcgb2JqZWN0LWFzc2lnbiB0d2ljZSBpbiBVTUQgYnVuZGxlczpcbiAgYXNzaWduOiBfYXNzaWduXG59O1xuXG57XG4gIFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lO1xufVxuXG4vLyBieSBjYWxscyB0byB0aGVzZSBtZXRob2RzIGJ5IGEgQmFiZWwgcGx1Z2luLlxuLy9cbi8vIEluIFBST0QgKG9yIGluIHBhY2thZ2VzIHdpdGhvdXQgYWNjZXNzIHRvIFJlYWN0IGludGVybmFscyksXG4vLyB0aGV5IGFyZSBsZWZ0IGFzIHRoZXkgYXJlIGluc3RlYWQuXG5cbmZ1bmN0aW9uIHdhcm4oZm9ybWF0KSB7XG4gIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBwcmludFdhcm5pbmcoJ3dhcm4nLCBmb3JtYXQsIGFyZ3MpO1xuICB9XG59XG5mdW5jdGlvbiBlcnJvcihmb3JtYXQpIHtcbiAge1xuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBhcmdzW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIHByaW50V2FybmluZygnZXJyb3InLCBmb3JtYXQsIGFyZ3MpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHByaW50V2FybmluZyhsZXZlbCwgZm9ybWF0LCBhcmdzKSB7XG4gIC8vIFdoZW4gY2hhbmdpbmcgdGhpcyBsb2dpYywgeW91IG1pZ2h0IHdhbnQgdG8gYWxzb1xuICAvLyB1cGRhdGUgY29uc29sZVdpdGhTdGFja0Rldi53d3cuanMgYXMgd2VsbC5cbiAge1xuICAgIHZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcbiAgICB2YXIgc3RhY2sgPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0oKTtcblxuICAgIGlmIChzdGFjayAhPT0gJycpIHtcbiAgICAgIGZvcm1hdCArPSAnJXMnO1xuICAgICAgYXJncyA9IGFyZ3MuY29uY2F0KFtzdGFja10pO1xuICAgIH1cblxuICAgIHZhciBhcmdzV2l0aEZvcm1hdCA9IGFyZ3MubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gJycgKyBpdGVtO1xuICAgIH0pOyAvLyBDYXJlZnVsOiBSTiBjdXJyZW50bHkgZGVwZW5kcyBvbiB0aGlzIHByZWZpeFxuXG4gICAgYXJnc1dpdGhGb3JtYXQudW5zaGlmdCgnV2FybmluZzogJyArIGZvcm1hdCk7IC8vIFdlIGludGVudGlvbmFsbHkgZG9uJ3QgdXNlIHNwcmVhZCAob3IgLmFwcGx5KSBkaXJlY3RseSBiZWNhdXNlIGl0XG4gICAgLy8gYnJlYWtzIElFOTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xMzYxMFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmdcblxuICAgIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKGNvbnNvbGVbbGV2ZWxdLCBjb25zb2xlLCBhcmdzV2l0aEZvcm1hdCk7XG4gIH1cbn1cblxudmFyIGRpZFdhcm5TdGF0ZVVwZGF0ZUZvclVubW91bnRlZENvbXBvbmVudCA9IHt9O1xuXG5mdW5jdGlvbiB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgY2FsbGVyTmFtZSkge1xuICB7XG4gICAgdmFyIF9jb25zdHJ1Y3RvciA9IHB1YmxpY0luc3RhbmNlLmNvbnN0cnVjdG9yO1xuICAgIHZhciBjb21wb25lbnROYW1lID0gX2NvbnN0cnVjdG9yICYmIChfY29uc3RydWN0b3IuZGlzcGxheU5hbWUgfHwgX2NvbnN0cnVjdG9yLm5hbWUpIHx8ICdSZWFjdENsYXNzJztcbiAgICB2YXIgd2FybmluZ0tleSA9IGNvbXBvbmVudE5hbWUgKyBcIi5cIiArIGNhbGxlck5hbWU7XG5cbiAgICBpZiAoZGlkV2FyblN0YXRlVXBkYXRlRm9yVW5tb3VudGVkQ29tcG9uZW50W3dhcm5pbmdLZXldKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZXJyb3IoXCJDYW4ndCBjYWxsICVzIG9uIGEgY29tcG9uZW50IHRoYXQgaXMgbm90IHlldCBtb3VudGVkLiBcIiArICdUaGlzIGlzIGEgbm8tb3AsIGJ1dCBpdCBtaWdodCBpbmRpY2F0ZSBhIGJ1ZyBpbiB5b3VyIGFwcGxpY2F0aW9uLiAnICsgJ0luc3RlYWQsIGFzc2lnbiB0byBgdGhpcy5zdGF0ZWAgZGlyZWN0bHkgb3IgZGVmaW5lIGEgYHN0YXRlID0ge307YCAnICsgJ2NsYXNzIHByb3BlcnR5IHdpdGggdGhlIGRlc2lyZWQgc3RhdGUgaW4gdGhlICVzIGNvbXBvbmVudC4nLCBjYWxsZXJOYW1lLCBjb21wb25lbnROYW1lKTtcblxuICAgIGRpZFdhcm5TdGF0ZVVwZGF0ZUZvclVubW91bnRlZENvbXBvbmVudFt3YXJuaW5nS2V5XSA9IHRydWU7XG4gIH1cbn1cbi8qKlxuICogVGhpcyBpcyB0aGUgYWJzdHJhY3QgQVBJIGZvciBhbiB1cGRhdGUgcXVldWUuXG4gKi9cblxuXG52YXIgUmVhY3ROb29wVXBkYXRlUXVldWUgPSB7XG4gIC8qKlxuICAgKiBDaGVja3Mgd2hldGhlciBvciBub3QgdGhpcyBjb21wb3NpdGUgY29tcG9uZW50IGlzIG1vdW50ZWQuXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHdlIHdhbnQgdG8gdGVzdC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBtb3VudGVkLCBmYWxzZSBvdGhlcndpc2UuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICogQGZpbmFsXG4gICAqL1xuICBpc01vdW50ZWQ6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSxcblxuICAvKipcbiAgICogRm9yY2VzIGFuIHVwZGF0ZS4gVGhpcyBzaG91bGQgb25seSBiZSBpbnZva2VkIHdoZW4gaXQgaXMga25vd24gd2l0aFxuICAgKiBjZXJ0YWludHkgdGhhdCB3ZSBhcmUgKipub3QqKiBpbiBhIERPTSB0cmFuc2FjdGlvbi5cbiAgICpcbiAgICogWW91IG1heSB3YW50IHRvIGNhbGwgdGhpcyB3aGVuIHlvdSBrbm93IHRoYXQgc29tZSBkZWVwZXIgYXNwZWN0IG9mIHRoZVxuICAgKiBjb21wb25lbnQncyBzdGF0ZSBoYXMgY2hhbmdlZCBidXQgYHNldFN0YXRlYCB3YXMgbm90IGNhbGxlZC5cbiAgICpcbiAgICogVGhpcyB3aWxsIG5vdCBpbnZva2UgYHNob3VsZENvbXBvbmVudFVwZGF0ZWAsIGJ1dCBpdCB3aWxsIGludm9rZVxuICAgKiBgY29tcG9uZW50V2lsbFVwZGF0ZWAgYW5kIGBjb21wb25lbnREaWRVcGRhdGVgLlxuICAgKlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB0aGF0IHNob3VsZCByZXJlbmRlci5cbiAgICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBjb21wb25lbnQgaXMgdXBkYXRlZC5cbiAgICogQHBhcmFtIHs/c3RyaW5nfSBjYWxsZXJOYW1lIG5hbWUgb2YgdGhlIGNhbGxpbmcgZnVuY3Rpb24gaW4gdGhlIHB1YmxpYyBBUEkuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZW5xdWV1ZUZvcmNlVXBkYXRlOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UsIGNhbGxiYWNrLCBjYWxsZXJOYW1lKSB7XG4gICAgd2Fybk5vb3AocHVibGljSW5zdGFuY2UsICdmb3JjZVVwZGF0ZScpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXBsYWNlcyBhbGwgb2YgdGhlIHN0YXRlLiBBbHdheXMgdXNlIHRoaXMgb3IgYHNldFN0YXRlYCB0byBtdXRhdGUgc3RhdGUuXG4gICAqIFlvdSBzaG91bGQgdHJlYXQgYHRoaXMuc3RhdGVgIGFzIGltbXV0YWJsZS5cbiAgICpcbiAgICogVGhlcmUgaXMgbm8gZ3VhcmFudGVlIHRoYXQgYHRoaXMuc3RhdGVgIHdpbGwgYmUgaW1tZWRpYXRlbHkgdXBkYXRlZCwgc29cbiAgICogYWNjZXNzaW5nIGB0aGlzLnN0YXRlYCBhZnRlciBjYWxsaW5nIHRoaXMgbWV0aG9kIG1heSByZXR1cm4gdGhlIG9sZCB2YWx1ZS5cbiAgICpcbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2UgdGhhdCBzaG91bGQgcmVyZW5kZXIuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBjb21wbGV0ZVN0YXRlIE5leHQgc3RhdGUuXG4gICAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgY29tcG9uZW50IGlzIHVwZGF0ZWQuXG4gICAqIEBwYXJhbSB7P3N0cmluZ30gY2FsbGVyTmFtZSBuYW1lIG9mIHRoZSBjYWxsaW5nIGZ1bmN0aW9uIGluIHRoZSBwdWJsaWMgQVBJLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGVucXVldWVSZXBsYWNlU3RhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSwgY29tcGxldGVTdGF0ZSwgY2FsbGJhY2ssIGNhbGxlck5hbWUpIHtcbiAgICB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgJ3JlcGxhY2VTdGF0ZScpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTZXRzIGEgc3Vic2V0IG9mIHRoZSBzdGF0ZS4gVGhpcyBvbmx5IGV4aXN0cyBiZWNhdXNlIF9wZW5kaW5nU3RhdGUgaXNcbiAgICogaW50ZXJuYWwuIFRoaXMgcHJvdmlkZXMgYSBtZXJnaW5nIHN0cmF0ZWd5IHRoYXQgaXMgbm90IGF2YWlsYWJsZSB0byBkZWVwXG4gICAqIHByb3BlcnRpZXMgd2hpY2ggaXMgY29uZnVzaW5nLiBUT0RPOiBFeHBvc2UgcGVuZGluZ1N0YXRlIG9yIGRvbid0IHVzZSBpdFxuICAgKiBkdXJpbmcgdGhlIG1lcmdlLlxuICAgKlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB0aGF0IHNob3VsZCByZXJlbmRlci5cbiAgICogQHBhcmFtIHtvYmplY3R9IHBhcnRpYWxTdGF0ZSBOZXh0IHBhcnRpYWwgc3RhdGUgdG8gYmUgbWVyZ2VkIHdpdGggc3RhdGUuXG4gICAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgY29tcG9uZW50IGlzIHVwZGF0ZWQuXG4gICAqIEBwYXJhbSB7P3N0cmluZ30gTmFtZSBvZiB0aGUgY2FsbGluZyBmdW5jdGlvbiBpbiB0aGUgcHVibGljIEFQSS5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBlbnF1ZXVlU2V0U3RhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSwgcGFydGlhbFN0YXRlLCBjYWxsYmFjaywgY2FsbGVyTmFtZSkge1xuICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCAnc2V0U3RhdGUnKTtcbiAgfVxufTtcblxudmFyIGVtcHR5T2JqZWN0ID0ge307XG5cbntcbiAgT2JqZWN0LmZyZWV6ZShlbXB0eU9iamVjdCk7XG59XG4vKipcbiAqIEJhc2UgY2xhc3MgaGVscGVycyBmb3IgdGhlIHVwZGF0aW5nIHN0YXRlIG9mIGEgY29tcG9uZW50LlxuICovXG5cblxuZnVuY3Rpb24gQ29tcG9uZW50KHByb3BzLCBjb250ZXh0LCB1cGRhdGVyKSB7XG4gIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgdGhpcy5jb250ZXh0ID0gY29udGV4dDsgLy8gSWYgYSBjb21wb25lbnQgaGFzIHN0cmluZyByZWZzLCB3ZSB3aWxsIGFzc2lnbiBhIGRpZmZlcmVudCBvYmplY3QgbGF0ZXIuXG5cbiAgdGhpcy5yZWZzID0gZW1wdHlPYmplY3Q7IC8vIFdlIGluaXRpYWxpemUgdGhlIGRlZmF1bHQgdXBkYXRlciBidXQgdGhlIHJlYWwgb25lIGdldHMgaW5qZWN0ZWQgYnkgdGhlXG4gIC8vIHJlbmRlcmVyLlxuXG4gIHRoaXMudXBkYXRlciA9IHVwZGF0ZXIgfHwgUmVhY3ROb29wVXBkYXRlUXVldWU7XG59XG5cbkNvbXBvbmVudC5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCA9IHt9O1xuLyoqXG4gKiBTZXRzIGEgc3Vic2V0IG9mIHRoZSBzdGF0ZS4gQWx3YXlzIHVzZSB0aGlzIHRvIG11dGF0ZVxuICogc3RhdGUuIFlvdSBzaG91bGQgdHJlYXQgYHRoaXMuc3RhdGVgIGFzIGltbXV0YWJsZS5cbiAqXG4gKiBUaGVyZSBpcyBubyBndWFyYW50ZWUgdGhhdCBgdGhpcy5zdGF0ZWAgd2lsbCBiZSBpbW1lZGlhdGVseSB1cGRhdGVkLCBzb1xuICogYWNjZXNzaW5nIGB0aGlzLnN0YXRlYCBhZnRlciBjYWxsaW5nIHRoaXMgbWV0aG9kIG1heSByZXR1cm4gdGhlIG9sZCB2YWx1ZS5cbiAqXG4gKiBUaGVyZSBpcyBubyBndWFyYW50ZWUgdGhhdCBjYWxscyB0byBgc2V0U3RhdGVgIHdpbGwgcnVuIHN5bmNocm9ub3VzbHksXG4gKiBhcyB0aGV5IG1heSBldmVudHVhbGx5IGJlIGJhdGNoZWQgdG9nZXRoZXIuICBZb3UgY2FuIHByb3ZpZGUgYW4gb3B0aW9uYWxcbiAqIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBleGVjdXRlZCB3aGVuIHRoZSBjYWxsIHRvIHNldFN0YXRlIGlzIGFjdHVhbGx5XG4gKiBjb21wbGV0ZWQuXG4gKlxuICogV2hlbiBhIGZ1bmN0aW9uIGlzIHByb3ZpZGVkIHRvIHNldFN0YXRlLCBpdCB3aWxsIGJlIGNhbGxlZCBhdCBzb21lIHBvaW50IGluXG4gKiB0aGUgZnV0dXJlIChub3Qgc3luY2hyb25vdXNseSkuIEl0IHdpbGwgYmUgY2FsbGVkIHdpdGggdGhlIHVwIHRvIGRhdGVcbiAqIGNvbXBvbmVudCBhcmd1bWVudHMgKHN0YXRlLCBwcm9wcywgY29udGV4dCkuIFRoZXNlIHZhbHVlcyBjYW4gYmUgZGlmZmVyZW50XG4gKiBmcm9tIHRoaXMuKiBiZWNhdXNlIHlvdXIgZnVuY3Rpb24gbWF5IGJlIGNhbGxlZCBhZnRlciByZWNlaXZlUHJvcHMgYnV0IGJlZm9yZVxuICogc2hvdWxkQ29tcG9uZW50VXBkYXRlLCBhbmQgdGhpcyBuZXcgc3RhdGUsIHByb3BzLCBhbmQgY29udGV4dCB3aWxsIG5vdCB5ZXQgYmVcbiAqIGFzc2lnbmVkIHRvIHRoaXMuXG4gKlxuICogQHBhcmFtIHtvYmplY3R8ZnVuY3Rpb259IHBhcnRpYWxTdGF0ZSBOZXh0IHBhcnRpYWwgc3RhdGUgb3IgZnVuY3Rpb24gdG9cbiAqICAgICAgICBwcm9kdWNlIG5leHQgcGFydGlhbCBzdGF0ZSB0byBiZSBtZXJnZWQgd2l0aCBjdXJyZW50IHN0YXRlLlxuICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBzdGF0ZSBpcyB1cGRhdGVkLlxuICogQGZpbmFsXG4gKiBAcHJvdGVjdGVkXG4gKi9cblxuQ29tcG9uZW50LnByb3RvdHlwZS5zZXRTdGF0ZSA9IGZ1bmN0aW9uIChwYXJ0aWFsU3RhdGUsIGNhbGxiYWNrKSB7XG4gIGlmICghKHR5cGVvZiBwYXJ0aWFsU3RhdGUgPT09ICdvYmplY3QnIHx8IHR5cGVvZiBwYXJ0aWFsU3RhdGUgPT09ICdmdW5jdGlvbicgfHwgcGFydGlhbFN0YXRlID09IG51bGwpKSB7XG4gICAge1xuICAgICAgdGhyb3cgRXJyb3IoIFwic2V0U3RhdGUoLi4uKTogdGFrZXMgYW4gb2JqZWN0IG9mIHN0YXRlIHZhcmlhYmxlcyB0byB1cGRhdGUgb3IgYSBmdW5jdGlvbiB3aGljaCByZXR1cm5zIGFuIG9iamVjdCBvZiBzdGF0ZSB2YXJpYWJsZXMuXCIgKTtcbiAgICB9XG4gIH1cblxuICB0aGlzLnVwZGF0ZXIuZW5xdWV1ZVNldFN0YXRlKHRoaXMsIHBhcnRpYWxTdGF0ZSwgY2FsbGJhY2ssICdzZXRTdGF0ZScpO1xufTtcbi8qKlxuICogRm9yY2VzIGFuIHVwZGF0ZS4gVGhpcyBzaG91bGQgb25seSBiZSBpbnZva2VkIHdoZW4gaXQgaXMga25vd24gd2l0aFxuICogY2VydGFpbnR5IHRoYXQgd2UgYXJlICoqbm90KiogaW4gYSBET00gdHJhbnNhY3Rpb24uXG4gKlxuICogWW91IG1heSB3YW50IHRvIGNhbGwgdGhpcyB3aGVuIHlvdSBrbm93IHRoYXQgc29tZSBkZWVwZXIgYXNwZWN0IG9mIHRoZVxuICogY29tcG9uZW50J3Mgc3RhdGUgaGFzIGNoYW5nZWQgYnV0IGBzZXRTdGF0ZWAgd2FzIG5vdCBjYWxsZWQuXG4gKlxuICogVGhpcyB3aWxsIG5vdCBpbnZva2UgYHNob3VsZENvbXBvbmVudFVwZGF0ZWAsIGJ1dCBpdCB3aWxsIGludm9rZVxuICogYGNvbXBvbmVudFdpbGxVcGRhdGVgIGFuZCBgY29tcG9uZW50RGlkVXBkYXRlYC5cbiAqXG4gKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIHVwZGF0ZSBpcyBjb21wbGV0ZS5cbiAqIEBmaW5hbFxuICogQHByb3RlY3RlZFxuICovXG5cblxuQ29tcG9uZW50LnByb3RvdHlwZS5mb3JjZVVwZGF0ZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICB0aGlzLnVwZGF0ZXIuZW5xdWV1ZUZvcmNlVXBkYXRlKHRoaXMsIGNhbGxiYWNrLCAnZm9yY2VVcGRhdGUnKTtcbn07XG4vKipcbiAqIERlcHJlY2F0ZWQgQVBJcy4gVGhlc2UgQVBJcyB1c2VkIHRvIGV4aXN0IG9uIGNsYXNzaWMgUmVhY3QgY2xhc3NlcyBidXQgc2luY2VcbiAqIHdlIHdvdWxkIGxpa2UgdG8gZGVwcmVjYXRlIHRoZW0sIHdlJ3JlIG5vdCBnb2luZyB0byBtb3ZlIHRoZW0gb3ZlciB0byB0aGlzXG4gKiBtb2Rlcm4gYmFzZSBjbGFzcy4gSW5zdGVhZCwgd2UgZGVmaW5lIGEgZ2V0dGVyIHRoYXQgd2FybnMgaWYgaXQncyBhY2Nlc3NlZC5cbiAqL1xuXG5cbntcbiAgdmFyIGRlcHJlY2F0ZWRBUElzID0ge1xuICAgIGlzTW91bnRlZDogWydpc01vdW50ZWQnLCAnSW5zdGVhZCwgbWFrZSBzdXJlIHRvIGNsZWFuIHVwIHN1YnNjcmlwdGlvbnMgYW5kIHBlbmRpbmcgcmVxdWVzdHMgaW4gJyArICdjb21wb25lbnRXaWxsVW5tb3VudCB0byBwcmV2ZW50IG1lbW9yeSBsZWFrcy4nXSxcbiAgICByZXBsYWNlU3RhdGU6IFsncmVwbGFjZVN0YXRlJywgJ1JlZmFjdG9yIHlvdXIgY29kZSB0byB1c2Ugc2V0U3RhdGUgaW5zdGVhZCAoc2VlICcgKyAnaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8zMjM2KS4nXVxuICB9O1xuXG4gIHZhciBkZWZpbmVEZXByZWNhdGlvbldhcm5pbmcgPSBmdW5jdGlvbiAobWV0aG9kTmFtZSwgaW5mbykge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb21wb25lbnQucHJvdG90eXBlLCBtZXRob2ROYW1lLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2FybignJXMoLi4uKSBpcyBkZXByZWNhdGVkIGluIHBsYWluIEphdmFTY3JpcHQgUmVhY3QgY2xhc3Nlcy4gJXMnLCBpbmZvWzBdLCBpbmZvWzFdKTtcblxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGZvciAodmFyIGZuTmFtZSBpbiBkZXByZWNhdGVkQVBJcykge1xuICAgIGlmIChkZXByZWNhdGVkQVBJcy5oYXNPd25Qcm9wZXJ0eShmbk5hbWUpKSB7XG4gICAgICBkZWZpbmVEZXByZWNhdGlvbldhcm5pbmcoZm5OYW1lLCBkZXByZWNhdGVkQVBJc1tmbk5hbWVdKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gQ29tcG9uZW50RHVtbXkoKSB7fVxuXG5Db21wb25lbnREdW1teS5wcm90b3R5cGUgPSBDb21wb25lbnQucHJvdG90eXBlO1xuLyoqXG4gKiBDb252ZW5pZW5jZSBjb21wb25lbnQgd2l0aCBkZWZhdWx0IHNoYWxsb3cgZXF1YWxpdHkgY2hlY2sgZm9yIHNDVS5cbiAqL1xuXG5mdW5jdGlvbiBQdXJlQ29tcG9uZW50KHByb3BzLCBjb250ZXh0LCB1cGRhdGVyKSB7XG4gIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgdGhpcy5jb250ZXh0ID0gY29udGV4dDsgLy8gSWYgYSBjb21wb25lbnQgaGFzIHN0cmluZyByZWZzLCB3ZSB3aWxsIGFzc2lnbiBhIGRpZmZlcmVudCBvYmplY3QgbGF0ZXIuXG5cbiAgdGhpcy5yZWZzID0gZW1wdHlPYmplY3Q7XG4gIHRoaXMudXBkYXRlciA9IHVwZGF0ZXIgfHwgUmVhY3ROb29wVXBkYXRlUXVldWU7XG59XG5cbnZhciBwdXJlQ29tcG9uZW50UHJvdG90eXBlID0gUHVyZUNvbXBvbmVudC5wcm90b3R5cGUgPSBuZXcgQ29tcG9uZW50RHVtbXkoKTtcbnB1cmVDb21wb25lbnRQcm90b3R5cGUuY29uc3RydWN0b3IgPSBQdXJlQ29tcG9uZW50OyAvLyBBdm9pZCBhbiBleHRyYSBwcm90b3R5cGUganVtcCBmb3IgdGhlc2UgbWV0aG9kcy5cblxuX2Fzc2lnbihwdXJlQ29tcG9uZW50UHJvdG90eXBlLCBDb21wb25lbnQucHJvdG90eXBlKTtcblxucHVyZUNvbXBvbmVudFByb3RvdHlwZS5pc1B1cmVSZWFjdENvbXBvbmVudCA9IHRydWU7XG5cbi8vIGFuIGltbXV0YWJsZSBvYmplY3Qgd2l0aCBhIHNpbmdsZSBtdXRhYmxlIHZhbHVlXG5mdW5jdGlvbiBjcmVhdGVSZWYoKSB7XG4gIHZhciByZWZPYmplY3QgPSB7XG4gICAgY3VycmVudDogbnVsbFxuICB9O1xuXG4gIHtcbiAgICBPYmplY3Quc2VhbChyZWZPYmplY3QpO1xuICB9XG5cbiAgcmV0dXJuIHJlZk9iamVjdDtcbn1cblxuZnVuY3Rpb24gZ2V0V3JhcHBlZE5hbWUob3V0ZXJUeXBlLCBpbm5lclR5cGUsIHdyYXBwZXJOYW1lKSB7XG4gIHZhciBmdW5jdGlvbk5hbWUgPSBpbm5lclR5cGUuZGlzcGxheU5hbWUgfHwgaW5uZXJUeXBlLm5hbWUgfHwgJyc7XG4gIHJldHVybiBvdXRlclR5cGUuZGlzcGxheU5hbWUgfHwgKGZ1bmN0aW9uTmFtZSAhPT0gJycgPyB3cmFwcGVyTmFtZSArIFwiKFwiICsgZnVuY3Rpb25OYW1lICsgXCIpXCIgOiB3cmFwcGVyTmFtZSk7XG59XG5cbmZ1bmN0aW9uIGdldENvbnRleHROYW1lKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgJ0NvbnRleHQnO1xufVxuXG5mdW5jdGlvbiBnZXRDb21wb25lbnROYW1lKHR5cGUpIHtcbiAgaWYgKHR5cGUgPT0gbnVsbCkge1xuICAgIC8vIEhvc3Qgcm9vdCwgdGV4dCBub2RlIG9yIGp1c3QgaW52YWxpZCB0eXBlLlxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAge1xuICAgIGlmICh0eXBlb2YgdHlwZS50YWcgPT09ICdudW1iZXInKSB7XG4gICAgICBlcnJvcignUmVjZWl2ZWQgYW4gdW5leHBlY3RlZCBvYmplY3QgaW4gZ2V0Q29tcG9uZW50TmFtZSgpLiAnICsgJ1RoaXMgaXMgbGlrZWx5IGEgYnVnIGluIFJlYWN0LiBQbGVhc2UgZmlsZSBhbiBpc3N1ZS4nKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgbnVsbDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgZXhwb3J0cy5GcmFnbWVudDpcbiAgICAgIHJldHVybiAnRnJhZ21lbnQnO1xuXG4gICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgIHJldHVybiAnUG9ydGFsJztcblxuICAgIGNhc2UgZXhwb3J0cy5Qcm9maWxlcjpcbiAgICAgIHJldHVybiAnUHJvZmlsZXInO1xuXG4gICAgY2FzZSBleHBvcnRzLlN0cmljdE1vZGU6XG4gICAgICByZXR1cm4gJ1N0cmljdE1vZGUnO1xuXG4gICAgY2FzZSBleHBvcnRzLlN1c3BlbnNlOlxuICAgICAgcmV0dXJuICdTdXNwZW5zZSc7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2VMaXN0JztcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICB2YXIgY29udGV4dCA9IHR5cGU7XG4gICAgICAgIHJldHVybiBnZXRDb250ZXh0TmFtZShjb250ZXh0KSArICcuQ29uc3VtZXInO1xuXG4gICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgIHZhciBwcm92aWRlciA9IHR5cGU7XG4gICAgICAgIHJldHVybiBnZXRDb250ZXh0TmFtZShwcm92aWRlci5fY29udGV4dCkgKyAnLlByb3ZpZGVyJztcblxuICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0V3JhcHBlZE5hbWUodHlwZSwgdHlwZS5yZW5kZXIsICdGb3J3YXJkUmVmJyk7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZSh0eXBlLnR5cGUpO1xuXG4gICAgICBjYXNlIFJFQUNUX0JMT0NLX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKHR5cGUuX3JlbmRlcik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIGxhenlDb21wb25lbnQgPSB0eXBlO1xuICAgICAgICAgIHZhciBwYXlsb2FkID0gbGF6eUNvbXBvbmVudC5fcGF5bG9hZDtcbiAgICAgICAgICB2YXIgaW5pdCA9IGxhenlDb21wb25lbnQuX2luaXQ7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUoaW5pdChwYXlsb2FkKSk7XG4gICAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgUkVTRVJWRURfUFJPUFMgPSB7XG4gIGtleTogdHJ1ZSxcbiAgcmVmOiB0cnVlLFxuICBfX3NlbGY6IHRydWUsXG4gIF9fc291cmNlOiB0cnVlXG59O1xudmFyIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duLCBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93biwgZGlkV2FybkFib3V0U3RyaW5nUmVmcztcblxue1xuICBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzID0ge307XG59XG5cbmZ1bmN0aW9uIGhhc1ZhbGlkUmVmKGNvbmZpZykge1xuICB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCAncmVmJykpIHtcbiAgICAgIHZhciBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbmZpZywgJ3JlZicpLmdldDtcblxuICAgICAgaWYgKGdldHRlciAmJiBnZXR0ZXIuaXNSZWFjdFdhcm5pbmcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb25maWcucmVmICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGhhc1ZhbGlkS2V5KGNvbmZpZykge1xuICB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCAna2V5JykpIHtcbiAgICAgIHZhciBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbmZpZywgJ2tleScpLmdldDtcblxuICAgICAgaWYgKGdldHRlciAmJiBnZXR0ZXIuaXNSZWFjdFdhcm5pbmcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb25maWcua2V5ICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB2YXIgd2FybkFib3V0QWNjZXNzaW5nS2V5ID0gZnVuY3Rpb24gKCkge1xuICAgIHtcbiAgICAgIGlmICghc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24pIHtcbiAgICAgICAgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24gPSB0cnVlO1xuXG4gICAgICAgIGVycm9yKCclczogYGtleWAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgd2FybkFib3V0QWNjZXNzaW5nS2V5LmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAna2V5Jywge1xuICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nS2V5LFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KTtcbn1cblxuZnVuY3Rpb24gZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYgPSBmdW5jdGlvbiAoKSB7XG4gICAge1xuICAgICAgaWYgKCFzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93bikge1xuICAgICAgICBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93biA9IHRydWU7XG5cbiAgICAgICAgZXJyb3IoJyVzOiBgcmVmYCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3NwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdyZWYnLCB7XG4gICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xufVxuXG5mdW5jdGlvbiB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5yZWYgPT09ICdzdHJpbmcnICYmIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQgJiYgY29uZmlnLl9fc2VsZiAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnN0YXRlTm9kZSAhPT0gY29uZmlnLl9fc2VsZikge1xuICAgICAgdmFyIGNvbXBvbmVudE5hbWUgPSBnZXRDb21wb25lbnROYW1lKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSk7XG5cbiAgICAgIGlmICghZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSkge1xuICAgICAgICBlcnJvcignQ29tcG9uZW50IFwiJXNcIiBjb250YWlucyB0aGUgc3RyaW5nIHJlZiBcIiVzXCIuICcgKyAnU3VwcG9ydCBmb3Igc3RyaW5nIHJlZnMgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIG1ham9yIHJlbGVhc2UuICcgKyAnVGhpcyBjYXNlIGNhbm5vdCBiZSBhdXRvbWF0aWNhbGx5IGNvbnZlcnRlZCB0byBhbiBhcnJvdyBmdW5jdGlvbi4gJyArICdXZSBhc2sgeW91IHRvIG1hbnVhbGx5IGZpeCB0aGlzIGNhc2UgYnkgdXNpbmcgdXNlUmVmKCkgb3IgY3JlYXRlUmVmKCkgaW5zdGVhZC4gJyArICdMZWFybiBtb3JlIGFib3V0IHVzaW5nIHJlZnMgc2FmZWx5IGhlcmU6ICcgKyAnaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3N0cmljdC1tb2RlLXN0cmluZy1yZWYnLCBjb21wb25lbnROYW1lLCBjb25maWcucmVmKTtcblxuICAgICAgICBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzW2NvbXBvbmVudE5hbWVdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8qKlxuICogRmFjdG9yeSBtZXRob2QgdG8gY3JlYXRlIGEgbmV3IFJlYWN0IGVsZW1lbnQuIFRoaXMgbm8gbG9uZ2VyIGFkaGVyZXMgdG9cbiAqIHRoZSBjbGFzcyBwYXR0ZXJuLCBzbyBkbyBub3QgdXNlIG5ldyB0byBjYWxsIGl0LiBBbHNvLCBpbnN0YW5jZW9mIGNoZWNrXG4gKiB3aWxsIG5vdCB3b3JrLiBJbnN0ZWFkIHRlc3QgJCR0eXBlb2YgZmllbGQgYWdhaW5zdCBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgdG8gY2hlY2tcbiAqIGlmIHNvbWV0aGluZyBpcyBhIFJlYWN0IEVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHsqfSB0eXBlXG4gKiBAcGFyYW0geyp9IHByb3BzXG4gKiBAcGFyYW0geyp9IGtleVxuICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0fSByZWZcbiAqIEBwYXJhbSB7Kn0gb3duZXJcbiAqIEBwYXJhbSB7Kn0gc2VsZiBBICp0ZW1wb3JhcnkqIGhlbHBlciB0byBkZXRlY3QgcGxhY2VzIHdoZXJlIGB0aGlzYCBpc1xuICogZGlmZmVyZW50IGZyb20gdGhlIGBvd25lcmAgd2hlbiBSZWFjdC5jcmVhdGVFbGVtZW50IGlzIGNhbGxlZCwgc28gdGhhdCB3ZVxuICogY2FuIHdhcm4uIFdlIHdhbnQgdG8gZ2V0IHJpZCBvZiBvd25lciBhbmQgcmVwbGFjZSBzdHJpbmcgYHJlZmBzIHdpdGggYXJyb3dcbiAqIGZ1bmN0aW9ucywgYW5kIGFzIGxvbmcgYXMgYHRoaXNgIGFuZCBvd25lciBhcmUgdGhlIHNhbWUsIHRoZXJlIHdpbGwgYmUgbm9cbiAqIGNoYW5nZSBpbiBiZWhhdmlvci5cbiAqIEBwYXJhbSB7Kn0gc291cmNlIEFuIGFubm90YXRpb24gb2JqZWN0IChhZGRlZCBieSBhIHRyYW5zcGlsZXIgb3Igb3RoZXJ3aXNlKVxuICogaW5kaWNhdGluZyBmaWxlbmFtZSwgbGluZSBudW1iZXIsIGFuZC9vciBvdGhlciBpbmZvcm1hdGlvbi5cbiAqIEBpbnRlcm5hbFxuICovXG5cblxudmFyIFJlYWN0RWxlbWVudCA9IGZ1bmN0aW9uICh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBvd25lciwgcHJvcHMpIHtcbiAgdmFyIGVsZW1lbnQgPSB7XG4gICAgLy8gVGhpcyB0YWcgYWxsb3dzIHVzIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IHRoaXMgYXMgYSBSZWFjdCBFbGVtZW50XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0VMRU1FTlRfVFlQRSxcbiAgICAvLyBCdWlsdC1pbiBwcm9wZXJ0aWVzIHRoYXQgYmVsb25nIG9uIHRoZSBlbGVtZW50XG4gICAgdHlwZTogdHlwZSxcbiAgICBrZXk6IGtleSxcbiAgICByZWY6IHJlZixcbiAgICBwcm9wczogcHJvcHMsXG4gICAgLy8gUmVjb3JkIHRoZSBjb21wb25lbnQgcmVzcG9uc2libGUgZm9yIGNyZWF0aW5nIHRoaXMgZWxlbWVudC5cbiAgICBfb3duZXI6IG93bmVyXG4gIH07XG5cbiAge1xuICAgIC8vIFRoZSB2YWxpZGF0aW9uIGZsYWcgaXMgY3VycmVudGx5IG11dGF0aXZlLiBXZSBwdXQgaXQgb25cbiAgICAvLyBhbiBleHRlcm5hbCBiYWNraW5nIHN0b3JlIHNvIHRoYXQgd2UgY2FuIGZyZWV6ZSB0aGUgd2hvbGUgb2JqZWN0LlxuICAgIC8vIFRoaXMgY2FuIGJlIHJlcGxhY2VkIHdpdGggYSBXZWFrTWFwIG9uY2UgdGhleSBhcmUgaW1wbGVtZW50ZWQgaW5cbiAgICAvLyBjb21tb25seSB1c2VkIGRldmVsb3BtZW50IGVudmlyb25tZW50cy5cbiAgICBlbGVtZW50Ll9zdG9yZSA9IHt9OyAvLyBUbyBtYWtlIGNvbXBhcmluZyBSZWFjdEVsZW1lbnRzIGVhc2llciBmb3IgdGVzdGluZyBwdXJwb3Nlcywgd2UgbWFrZVxuICAgIC8vIHRoZSB2YWxpZGF0aW9uIGZsYWcgbm9uLWVudW1lcmFibGUgKHdoZXJlIHBvc3NpYmxlLCB3aGljaCBzaG91bGRcbiAgICAvLyBpbmNsdWRlIGV2ZXJ5IGVudmlyb25tZW50IHdlIHJ1biB0ZXN0cyBpbiksIHNvIHRoZSB0ZXN0IGZyYW1ld29ya1xuICAgIC8vIGlnbm9yZXMgaXQuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudC5fc3RvcmUsICd2YWxpZGF0ZWQnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIHZhbHVlOiBmYWxzZVxuICAgIH0pOyAvLyBzZWxmIGFuZCBzb3VyY2UgYXJlIERFViBvbmx5IHByb3BlcnRpZXMuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zZWxmJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNlbGZcbiAgICB9KTsgLy8gVHdvIGVsZW1lbnRzIGNyZWF0ZWQgaW4gdHdvIGRpZmZlcmVudCBwbGFjZXMgc2hvdWxkIGJlIGNvbnNpZGVyZWRcbiAgICAvLyBlcXVhbCBmb3IgdGVzdGluZyBwdXJwb3NlcyBhbmQgdGhlcmVmb3JlIHdlIGhpZGUgaXQgZnJvbSBlbnVtZXJhdGlvbi5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NvdXJjZScsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzb3VyY2VcbiAgICB9KTtcblxuICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQucHJvcHMpO1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn07XG4vKipcbiAqIENyZWF0ZSBhbmQgcmV0dXJuIGEgbmV3IFJlYWN0RWxlbWVudCBvZiB0aGUgZ2l2ZW4gdHlwZS5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjY3JlYXRlZWxlbWVudFxuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodHlwZSwgY29uZmlnLCBjaGlsZHJlbikge1xuICB2YXIgcHJvcE5hbWU7IC8vIFJlc2VydmVkIG5hbWVzIGFyZSBleHRyYWN0ZWRcblxuICB2YXIgcHJvcHMgPSB7fTtcbiAgdmFyIGtleSA9IG51bGw7XG4gIHZhciByZWYgPSBudWxsO1xuICB2YXIgc2VsZiA9IG51bGw7XG4gIHZhciBzb3VyY2UgPSBudWxsO1xuXG4gIGlmIChjb25maWcgIT0gbnVsbCkge1xuICAgIGlmIChoYXNWYWxpZFJlZihjb25maWcpKSB7XG4gICAgICByZWYgPSBjb25maWcucmVmO1xuXG4gICAgICB7XG4gICAgICAgIHdhcm5JZlN0cmluZ1JlZkNhbm5vdEJlQXV0b0NvbnZlcnRlZChjb25maWcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZEtleShjb25maWcpKSB7XG4gICAgICBrZXkgPSAnJyArIGNvbmZpZy5rZXk7XG4gICAgfVxuXG4gICAgc2VsZiA9IGNvbmZpZy5fX3NlbGYgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjb25maWcuX19zZWxmO1xuICAgIHNvdXJjZSA9IGNvbmZpZy5fX3NvdXJjZSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNvbmZpZy5fX3NvdXJjZTsgLy8gUmVtYWluaW5nIHByb3BlcnRpZXMgYXJlIGFkZGVkIHRvIGEgbmV3IHByb3BzIG9iamVjdFxuXG4gICAgZm9yIChwcm9wTmFtZSBpbiBjb25maWcpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgcHJvcE5hbWUpICYmICFSRVNFUlZFRF9QUk9QUy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gY29uZmlnW3Byb3BOYW1lXTtcbiAgICAgIH1cbiAgICB9XG4gIH0gLy8gQ2hpbGRyZW4gY2FuIGJlIG1vcmUgdGhhbiBvbmUgYXJndW1lbnQsIGFuZCB0aG9zZSBhcmUgdHJhbnNmZXJyZWQgb250b1xuICAvLyB0aGUgbmV3bHkgYWxsb2NhdGVkIHByb3BzIG9iamVjdC5cblxuXG4gIHZhciBjaGlsZHJlbkxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGggLSAyO1xuXG4gIGlmIChjaGlsZHJlbkxlbmd0aCA9PT0gMSkge1xuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gIH0gZWxzZSBpZiAoY2hpbGRyZW5MZW5ndGggPiAxKSB7XG4gICAgdmFyIGNoaWxkQXJyYXkgPSBBcnJheShjaGlsZHJlbkxlbmd0aCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuTGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoaWxkQXJyYXlbaV0gPSBhcmd1bWVudHNbaSArIDJdO1xuICAgIH1cblxuICAgIHtcbiAgICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICAgIE9iamVjdC5mcmVlemUoY2hpbGRBcnJheSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZEFycmF5O1xuICB9IC8vIFJlc29sdmUgZGVmYXVsdCBwcm9wc1xuXG5cbiAgaWYgKHR5cGUgJiYgdHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICB2YXIgZGVmYXVsdFByb3BzID0gdHlwZS5kZWZhdWx0UHJvcHM7XG5cbiAgICBmb3IgKHByb3BOYW1lIGluIGRlZmF1bHRQcm9wcykge1xuICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGRlZmF1bHRQcm9wc1twcm9wTmFtZV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAge1xuICAgIGlmIChrZXkgfHwgcmVmKSB7XG4gICAgICB2YXIgZGlzcGxheU5hbWUgPSB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyA/IHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8ICdVbmtub3duJyA6IHR5cGU7XG5cbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlZikge1xuICAgICAgICBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBSZWFjdEVsZW1lbnQodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCwgcHJvcHMpO1xufVxuZnVuY3Rpb24gY2xvbmVBbmRSZXBsYWNlS2V5KG9sZEVsZW1lbnQsIG5ld0tleSkge1xuICB2YXIgbmV3RWxlbWVudCA9IFJlYWN0RWxlbWVudChvbGRFbGVtZW50LnR5cGUsIG5ld0tleSwgb2xkRWxlbWVudC5yZWYsIG9sZEVsZW1lbnQuX3NlbGYsIG9sZEVsZW1lbnQuX3NvdXJjZSwgb2xkRWxlbWVudC5fb3duZXIsIG9sZEVsZW1lbnQucHJvcHMpO1xuICByZXR1cm4gbmV3RWxlbWVudDtcbn1cbi8qKlxuICogQ2xvbmUgYW5kIHJldHVybiBhIG5ldyBSZWFjdEVsZW1lbnQgdXNpbmcgZWxlbWVudCBhcyB0aGUgc3RhcnRpbmcgcG9pbnQuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2Nsb25lZWxlbWVudFxuICovXG5cbmZ1bmN0aW9uIGNsb25lRWxlbWVudChlbGVtZW50LCBjb25maWcsIGNoaWxkcmVuKSB7XG4gIGlmICghIShlbGVtZW50ID09PSBudWxsIHx8IGVsZW1lbnQgPT09IHVuZGVmaW5lZCkpIHtcbiAgICB7XG4gICAgICB0aHJvdyBFcnJvciggXCJSZWFjdC5jbG9uZUVsZW1lbnQoLi4uKTogVGhlIGFyZ3VtZW50IG11c3QgYmUgYSBSZWFjdCBlbGVtZW50LCBidXQgeW91IHBhc3NlZCBcIiArIGVsZW1lbnQgKyBcIi5cIiApO1xuICAgIH1cbiAgfVxuXG4gIHZhciBwcm9wTmFtZTsgLy8gT3JpZ2luYWwgcHJvcHMgYXJlIGNvcGllZFxuXG4gIHZhciBwcm9wcyA9IF9hc3NpZ24oe30sIGVsZW1lbnQucHJvcHMpOyAvLyBSZXNlcnZlZCBuYW1lcyBhcmUgZXh0cmFjdGVkXG5cblxuICB2YXIga2V5ID0gZWxlbWVudC5rZXk7XG4gIHZhciByZWYgPSBlbGVtZW50LnJlZjsgLy8gU2VsZiBpcyBwcmVzZXJ2ZWQgc2luY2UgdGhlIG93bmVyIGlzIHByZXNlcnZlZC5cblxuICB2YXIgc2VsZiA9IGVsZW1lbnQuX3NlbGY7IC8vIFNvdXJjZSBpcyBwcmVzZXJ2ZWQgc2luY2UgY2xvbmVFbGVtZW50IGlzIHVubGlrZWx5IHRvIGJlIHRhcmdldGVkIGJ5IGFcbiAgLy8gdHJhbnNwaWxlciwgYW5kIHRoZSBvcmlnaW5hbCBzb3VyY2UgaXMgcHJvYmFibHkgYSBiZXR0ZXIgaW5kaWNhdG9yIG9mIHRoZVxuICAvLyB0cnVlIG93bmVyLlxuXG4gIHZhciBzb3VyY2UgPSBlbGVtZW50Ll9zb3VyY2U7IC8vIE93bmVyIHdpbGwgYmUgcHJlc2VydmVkLCB1bmxlc3MgcmVmIGlzIG92ZXJyaWRkZW5cblxuICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcblxuICBpZiAoY29uZmlnICE9IG51bGwpIHtcbiAgICBpZiAoaGFzVmFsaWRSZWYoY29uZmlnKSkge1xuICAgICAgLy8gU2lsZW50bHkgc3RlYWwgdGhlIHJlZiBmcm9tIHRoZSBwYXJlbnQuXG4gICAgICByZWYgPSBjb25maWcucmVmO1xuICAgICAgb3duZXIgPSBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50O1xuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZEtleShjb25maWcpKSB7XG4gICAgICBrZXkgPSAnJyArIGNvbmZpZy5rZXk7XG4gICAgfSAvLyBSZW1haW5pbmcgcHJvcGVydGllcyBvdmVycmlkZSBleGlzdGluZyBwcm9wc1xuXG5cbiAgICB2YXIgZGVmYXVsdFByb3BzO1xuXG4gICAgaWYgKGVsZW1lbnQudHlwZSAmJiBlbGVtZW50LnR5cGUuZGVmYXVsdFByb3BzKSB7XG4gICAgICBkZWZhdWx0UHJvcHMgPSBlbGVtZW50LnR5cGUuZGVmYXVsdFByb3BzO1xuICAgIH1cblxuICAgIGZvciAocHJvcE5hbWUgaW4gY29uZmlnKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsIHByb3BOYW1lKSAmJiAhUkVTRVJWRURfUFJPUFMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgIGlmIChjb25maWdbcHJvcE5hbWVdID09PSB1bmRlZmluZWQgJiYgZGVmYXVsdFByb3BzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAvLyBSZXNvbHZlIGRlZmF1bHQgcHJvcHNcbiAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBkZWZhdWx0UHJvcHNbcHJvcE5hbWVdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGNvbmZpZ1twcm9wTmFtZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gLy8gQ2hpbGRyZW4gY2FuIGJlIG1vcmUgdGhhbiBvbmUgYXJndW1lbnQsIGFuZCB0aG9zZSBhcmUgdHJhbnNmZXJyZWQgb250b1xuICAvLyB0aGUgbmV3bHkgYWxsb2NhdGVkIHByb3BzIG9iamVjdC5cblxuXG4gIHZhciBjaGlsZHJlbkxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGggLSAyO1xuXG4gIGlmIChjaGlsZHJlbkxlbmd0aCA9PT0gMSkge1xuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gIH0gZWxzZSBpZiAoY2hpbGRyZW5MZW5ndGggPiAxKSB7XG4gICAgdmFyIGNoaWxkQXJyYXkgPSBBcnJheShjaGlsZHJlbkxlbmd0aCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuTGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoaWxkQXJyYXlbaV0gPSBhcmd1bWVudHNbaSArIDJdO1xuICAgIH1cblxuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRBcnJheTtcbiAgfVxuXG4gIHJldHVybiBSZWFjdEVsZW1lbnQoZWxlbWVudC50eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBvd25lciwgcHJvcHMpO1xufVxuLyoqXG4gKiBWZXJpZmllcyB0aGUgb2JqZWN0IGlzIGEgUmVhY3RFbGVtZW50LlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNpc3ZhbGlkZWxlbWVudFxuICogQHBhcmFtIHs/b2JqZWN0fSBvYmplY3RcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgYG9iamVjdGAgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBAZmluYWxcbiAqL1xuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cblxudmFyIFNFUEFSQVRPUiA9ICcuJztcbnZhciBTVUJTRVBBUkFUT1IgPSAnOic7XG4vKipcbiAqIEVzY2FwZSBhbmQgd3JhcCBrZXkgc28gaXQgaXMgc2FmZSB0byB1c2UgYXMgYSByZWFjdGlkXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSB0byBiZSBlc2NhcGVkLlxuICogQHJldHVybiB7c3RyaW5nfSB0aGUgZXNjYXBlZCBrZXkuXG4gKi9cblxuZnVuY3Rpb24gZXNjYXBlKGtleSkge1xuICB2YXIgZXNjYXBlUmVnZXggPSAvWz06XS9nO1xuICB2YXIgZXNjYXBlckxvb2t1cCA9IHtcbiAgICAnPSc6ICc9MCcsXG4gICAgJzonOiAnPTInXG4gIH07XG4gIHZhciBlc2NhcGVkU3RyaW5nID0ga2V5LnJlcGxhY2UoZXNjYXBlUmVnZXgsIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgIHJldHVybiBlc2NhcGVyTG9va3VwW21hdGNoXTtcbiAgfSk7XG4gIHJldHVybiAnJCcgKyBlc2NhcGVkU3RyaW5nO1xufVxuLyoqXG4gKiBUT0RPOiBUZXN0IHRoYXQgYSBzaW5nbGUgY2hpbGQgYW5kIGFuIGFycmF5IHdpdGggb25lIGl0ZW0gaGF2ZSB0aGUgc2FtZSBrZXlcbiAqIHBhdHRlcm4uXG4gKi9cblxuXG52YXIgZGlkV2FybkFib3V0TWFwcyA9IGZhbHNlO1xudmFyIHVzZXJQcm92aWRlZEtleUVzY2FwZVJlZ2V4ID0gL1xcLysvZztcblxuZnVuY3Rpb24gZXNjYXBlVXNlclByb3ZpZGVkS2V5KHRleHQpIHtcbiAgcmV0dXJuIHRleHQucmVwbGFjZSh1c2VyUHJvdmlkZWRLZXlFc2NhcGVSZWdleCwgJyQmLycpO1xufVxuLyoqXG4gKiBHZW5lcmF0ZSBhIGtleSBzdHJpbmcgdGhhdCBpZGVudGlmaWVzIGEgZWxlbWVudCB3aXRoaW4gYSBzZXQuXG4gKlxuICogQHBhcmFtIHsqfSBlbGVtZW50IEEgZWxlbWVudCB0aGF0IGNvdWxkIGNvbnRhaW4gYSBtYW51YWwga2V5LlxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IEluZGV4IHRoYXQgaXMgdXNlZCBpZiBhIG1hbnVhbCBrZXkgaXMgbm90IHByb3ZpZGVkLlxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5cblxuZnVuY3Rpb24gZ2V0RWxlbWVudEtleShlbGVtZW50LCBpbmRleCkge1xuICAvLyBEbyBzb21lIHR5cGVjaGVja2luZyBoZXJlIHNpbmNlIHdlIGNhbGwgdGhpcyBibGluZGx5LiBXZSB3YW50IHRvIGVuc3VyZVxuICAvLyB0aGF0IHdlIGRvbid0IGJsb2NrIHBvdGVudGlhbCBmdXR1cmUgRVMgQVBJcy5cbiAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnb2JqZWN0JyAmJiBlbGVtZW50ICE9PSBudWxsICYmIGVsZW1lbnQua2V5ICE9IG51bGwpIHtcbiAgICAvLyBFeHBsaWNpdCBrZXlcbiAgICByZXR1cm4gZXNjYXBlKCcnICsgZWxlbWVudC5rZXkpO1xuICB9IC8vIEltcGxpY2l0IGtleSBkZXRlcm1pbmVkIGJ5IHRoZSBpbmRleCBpbiB0aGUgc2V0XG5cblxuICByZXR1cm4gaW5kZXgudG9TdHJpbmcoMzYpO1xufVxuXG5mdW5jdGlvbiBtYXBJbnRvQXJyYXkoY2hpbGRyZW4sIGFycmF5LCBlc2NhcGVkUHJlZml4LCBuYW1lU29GYXIsIGNhbGxiYWNrKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIGNoaWxkcmVuO1xuXG4gIGlmICh0eXBlID09PSAndW5kZWZpbmVkJyB8fCB0eXBlID09PSAnYm9vbGVhbicpIHtcbiAgICAvLyBBbGwgb2YgdGhlIGFib3ZlIGFyZSBwZXJjZWl2ZWQgYXMgbnVsbC5cbiAgICBjaGlsZHJlbiA9IG51bGw7XG4gIH1cblxuICB2YXIgaW52b2tlQ2FsbGJhY2sgPSBmYWxzZTtcblxuICBpZiAoY2hpbGRyZW4gPT09IG51bGwpIHtcbiAgICBpbnZva2VDYWxsYmFjayA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgaW52b2tlQ2FsbGJhY2sgPSB0cnVlO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgc3dpdGNoIChjaGlsZHJlbi4kJHR5cGVvZikge1xuICAgICAgICAgIGNhc2UgUkVBQ1RfRUxFTUVOVF9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICAgICAgICBpbnZva2VDYWxsYmFjayA9IHRydWU7XG4gICAgICAgIH1cblxuICAgIH1cbiAgfVxuXG4gIGlmIChpbnZva2VDYWxsYmFjaykge1xuICAgIHZhciBfY2hpbGQgPSBjaGlsZHJlbjtcbiAgICB2YXIgbWFwcGVkQ2hpbGQgPSBjYWxsYmFjayhfY2hpbGQpOyAvLyBJZiBpdCdzIHRoZSBvbmx5IGNoaWxkLCB0cmVhdCB0aGUgbmFtZSBhcyBpZiBpdCB3YXMgd3JhcHBlZCBpbiBhbiBhcnJheVxuICAgIC8vIHNvIHRoYXQgaXQncyBjb25zaXN0ZW50IGlmIHRoZSBudW1iZXIgb2YgY2hpbGRyZW4gZ3Jvd3M6XG5cbiAgICB2YXIgY2hpbGRLZXkgPSBuYW1lU29GYXIgPT09ICcnID8gU0VQQVJBVE9SICsgZ2V0RWxlbWVudEtleShfY2hpbGQsIDApIDogbmFtZVNvRmFyO1xuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkobWFwcGVkQ2hpbGQpKSB7XG4gICAgICB2YXIgZXNjYXBlZENoaWxkS2V5ID0gJyc7XG5cbiAgICAgIGlmIChjaGlsZEtleSAhPSBudWxsKSB7XG4gICAgICAgIGVzY2FwZWRDaGlsZEtleSA9IGVzY2FwZVVzZXJQcm92aWRlZEtleShjaGlsZEtleSkgKyAnLyc7XG4gICAgICB9XG5cbiAgICAgIG1hcEludG9BcnJheShtYXBwZWRDaGlsZCwgYXJyYXksIGVzY2FwZWRDaGlsZEtleSwgJycsIGZ1bmN0aW9uIChjKSB7XG4gICAgICAgIHJldHVybiBjO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChtYXBwZWRDaGlsZCAhPSBudWxsKSB7XG4gICAgICBpZiAoaXNWYWxpZEVsZW1lbnQobWFwcGVkQ2hpbGQpKSB7XG4gICAgICAgIG1hcHBlZENoaWxkID0gY2xvbmVBbmRSZXBsYWNlS2V5KG1hcHBlZENoaWxkLCAvLyBLZWVwIGJvdGggdGhlIChtYXBwZWQpIGFuZCBvbGQga2V5cyBpZiB0aGV5IGRpZmZlciwganVzdCBhc1xuICAgICAgICAvLyB0cmF2ZXJzZUFsbENoaWxkcmVuIHVzZWQgdG8gZG8gZm9yIG9iamVjdHMgYXMgY2hpbGRyZW5cbiAgICAgICAgZXNjYXBlZFByZWZpeCArICggLy8gJEZsb3dGaXhNZSBGbG93IGluY29ycmVjdGx5IHRoaW5rcyBSZWFjdC5Qb3J0YWwgZG9lc24ndCBoYXZlIGEga2V5XG4gICAgICAgIG1hcHBlZENoaWxkLmtleSAmJiAoIV9jaGlsZCB8fCBfY2hpbGQua2V5ICE9PSBtYXBwZWRDaGlsZC5rZXkpID8gLy8gJEZsb3dGaXhNZSBGbG93IGluY29ycmVjdGx5IHRoaW5rcyBleGlzdGluZyBlbGVtZW50J3Mga2V5IGNhbiBiZSBhIG51bWJlclxuICAgICAgICBlc2NhcGVVc2VyUHJvdmlkZWRLZXkoJycgKyBtYXBwZWRDaGlsZC5rZXkpICsgJy8nIDogJycpICsgY2hpbGRLZXkpO1xuICAgICAgfVxuXG4gICAgICBhcnJheS5wdXNoKG1hcHBlZENoaWxkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gMTtcbiAgfVxuXG4gIHZhciBjaGlsZDtcbiAgdmFyIG5leHROYW1lO1xuICB2YXIgc3VidHJlZUNvdW50ID0gMDsgLy8gQ291bnQgb2YgY2hpbGRyZW4gZm91bmQgaW4gdGhlIGN1cnJlbnQgc3VidHJlZS5cblxuICB2YXIgbmV4dE5hbWVQcmVmaXggPSBuYW1lU29GYXIgPT09ICcnID8gU0VQQVJBVE9SIDogbmFtZVNvRmFyICsgU1VCU0VQQVJBVE9SO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgICBuZXh0TmFtZSA9IG5leHROYW1lUHJlZml4ICsgZ2V0RWxlbWVudEtleShjaGlsZCwgaSk7XG4gICAgICBzdWJ0cmVlQ291bnQgKz0gbWFwSW50b0FycmF5KGNoaWxkLCBhcnJheSwgZXNjYXBlZFByZWZpeCwgbmV4dE5hbWUsIGNhbGxiYWNrKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKGNoaWxkcmVuKTtcblxuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdmFyIGl0ZXJhYmxlQ2hpbGRyZW4gPSBjaGlsZHJlbjtcblxuICAgICAge1xuICAgICAgICAvLyBXYXJuIGFib3V0IHVzaW5nIE1hcHMgYXMgY2hpbGRyZW5cbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4gPT09IGl0ZXJhYmxlQ2hpbGRyZW4uZW50cmllcykge1xuICAgICAgICAgIGlmICghZGlkV2FybkFib3V0TWFwcykge1xuICAgICAgICAgICAgd2FybignVXNpbmcgTWFwcyBhcyBjaGlsZHJlbiBpcyBub3Qgc3VwcG9ydGVkLiAnICsgJ1VzZSBhbiBhcnJheSBvZiBrZXllZCBSZWFjdEVsZW1lbnRzIGluc3RlYWQuJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZGlkV2FybkFib3V0TWFwcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKGl0ZXJhYmxlQ2hpbGRyZW4pO1xuICAgICAgdmFyIHN0ZXA7XG4gICAgICB2YXIgaWkgPSAwO1xuXG4gICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgIGNoaWxkID0gc3RlcC52YWx1ZTtcbiAgICAgICAgbmV4dE5hbWUgPSBuZXh0TmFtZVByZWZpeCArIGdldEVsZW1lbnRLZXkoY2hpbGQsIGlpKyspO1xuICAgICAgICBzdWJ0cmVlQ291bnQgKz0gbWFwSW50b0FycmF5KGNoaWxkLCBhcnJheSwgZXNjYXBlZFByZWZpeCwgbmV4dE5hbWUsIGNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICB2YXIgY2hpbGRyZW5TdHJpbmcgPSAnJyArIGNoaWxkcmVuO1xuXG4gICAgICB7XG4gICAgICAgIHtcbiAgICAgICAgICB0aHJvdyBFcnJvciggXCJPYmplY3RzIGFyZSBub3QgdmFsaWQgYXMgYSBSZWFjdCBjaGlsZCAoZm91bmQ6IFwiICsgKGNoaWxkcmVuU3RyaW5nID09PSAnW29iamVjdCBPYmplY3RdJyA/ICdvYmplY3Qgd2l0aCBrZXlzIHsnICsgT2JqZWN0LmtleXMoY2hpbGRyZW4pLmpvaW4oJywgJykgKyAnfScgOiBjaGlsZHJlblN0cmluZykgKyBcIikuIElmIHlvdSBtZWFudCB0byByZW5kZXIgYSBjb2xsZWN0aW9uIG9mIGNoaWxkcmVuLCB1c2UgYW4gYXJyYXkgaW5zdGVhZC5cIiApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN1YnRyZWVDb3VudDtcbn1cblxuLyoqXG4gKiBNYXBzIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYC5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW5tYXBcbiAqXG4gKiBUaGUgcHJvdmlkZWQgbWFwRnVuY3Rpb24oY2hpbGQsIGluZGV4KSB3aWxsIGJlIGNhbGxlZCBmb3IgZWFjaFxuICogbGVhZiBjaGlsZC5cbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKiwgaW50KX0gZnVuYyBUaGUgbWFwIGZ1bmN0aW9uLlxuICogQHBhcmFtIHsqfSBjb250ZXh0IENvbnRleHQgZm9yIG1hcEZ1bmN0aW9uLlxuICogQHJldHVybiB7b2JqZWN0fSBPYmplY3QgY29udGFpbmluZyB0aGUgb3JkZXJlZCBtYXAgb2YgcmVzdWx0cy5cbiAqL1xuZnVuY3Rpb24gbWFwQ2hpbGRyZW4oY2hpbGRyZW4sIGZ1bmMsIGNvbnRleHQpIHtcbiAgaWYgKGNoaWxkcmVuID09IG51bGwpIHtcbiAgICByZXR1cm4gY2hpbGRyZW47XG4gIH1cblxuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBjb3VudCA9IDA7XG4gIG1hcEludG9BcnJheShjaGlsZHJlbiwgcmVzdWx0LCAnJywgJycsIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIHJldHVybiBmdW5jLmNhbGwoY29udGV4dCwgY2hpbGQsIGNvdW50KyspO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cbi8qKlxuICogQ291bnQgdGhlIG51bWJlciBvZiBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzXG4gKiBgcHJvcHMuY2hpbGRyZW5gLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbmNvdW50XG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBudW1iZXIgb2YgY2hpbGRyZW4uXG4gKi9cblxuXG5mdW5jdGlvbiBjb3VudENoaWxkcmVuKGNoaWxkcmVuKSB7XG4gIHZhciBuID0gMDtcbiAgbWFwQ2hpbGRyZW4oY2hpbGRyZW4sIGZ1bmN0aW9uICgpIHtcbiAgICBuKys7IC8vIERvbid0IHJldHVybiBhbnl0aGluZ1xuICB9KTtcbiAgcmV0dXJuIG47XG59XG5cbi8qKlxuICogSXRlcmF0ZXMgdGhyb3VnaCBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmAuXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVuZm9yZWFjaFxuICpcbiAqIFRoZSBwcm92aWRlZCBmb3JFYWNoRnVuYyhjaGlsZCwgaW5kZXgpIHdpbGwgYmUgY2FsbGVkIGZvciBlYWNoXG4gKiBsZWFmIGNoaWxkLlxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHBhcmFtIHtmdW5jdGlvbigqLCBpbnQpfSBmb3JFYWNoRnVuY1xuICogQHBhcmFtIHsqfSBmb3JFYWNoQ29udGV4dCBDb250ZXh0IGZvciBmb3JFYWNoQ29udGV4dC5cbiAqL1xuZnVuY3Rpb24gZm9yRWFjaENoaWxkcmVuKGNoaWxkcmVuLCBmb3JFYWNoRnVuYywgZm9yRWFjaENvbnRleHQpIHtcbiAgbWFwQ2hpbGRyZW4oY2hpbGRyZW4sIGZ1bmN0aW9uICgpIHtcbiAgICBmb3JFYWNoRnVuYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyAvLyBEb24ndCByZXR1cm4gYW55dGhpbmcuXG4gIH0sIGZvckVhY2hDb250ZXh0KTtcbn1cbi8qKlxuICogRmxhdHRlbiBhIGNoaWxkcmVuIG9iamVjdCAodHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gKSBhbmRcbiAqIHJldHVybiBhbiBhcnJheSB3aXRoIGFwcHJvcHJpYXRlbHkgcmUta2V5ZWQgY2hpbGRyZW4uXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVudG9hcnJheVxuICovXG5cblxuZnVuY3Rpb24gdG9BcnJheShjaGlsZHJlbikge1xuICByZXR1cm4gbWFwQ2hpbGRyZW4oY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIHJldHVybiBjaGlsZDtcbiAgfSkgfHwgW107XG59XG4vKipcbiAqIFJldHVybnMgdGhlIGZpcnN0IGNoaWxkIGluIGEgY29sbGVjdGlvbiBvZiBjaGlsZHJlbiBhbmQgdmVyaWZpZXMgdGhhdCB0aGVyZVxuICogaXMgb25seSBvbmUgY2hpbGQgaW4gdGhlIGNvbGxlY3Rpb24uXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVub25seVxuICpcbiAqIFRoZSBjdXJyZW50IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgZnVuY3Rpb24gYXNzdW1lcyB0aGF0IGEgc2luZ2xlIGNoaWxkIGdldHNcbiAqIHBhc3NlZCB3aXRob3V0IGEgd3JhcHBlciwgYnV0IHRoZSBwdXJwb3NlIG9mIHRoaXMgaGVscGVyIGZ1bmN0aW9uIGlzIHRvXG4gKiBhYnN0cmFjdCBhd2F5IHRoZSBwYXJ0aWN1bGFyIHN0cnVjdHVyZSBvZiBjaGlsZHJlbi5cbiAqXG4gKiBAcGFyYW0gez9vYmplY3R9IGNoaWxkcmVuIENoaWxkIGNvbGxlY3Rpb24gc3RydWN0dXJlLlxuICogQHJldHVybiB7UmVhY3RFbGVtZW50fSBUaGUgZmlyc3QgYW5kIG9ubHkgYFJlYWN0RWxlbWVudGAgY29udGFpbmVkIGluIHRoZVxuICogc3RydWN0dXJlLlxuICovXG5cblxuZnVuY3Rpb24gb25seUNoaWxkKGNoaWxkcmVuKSB7XG4gIGlmICghaXNWYWxpZEVsZW1lbnQoY2hpbGRyZW4pKSB7XG4gICAge1xuICAgICAgdGhyb3cgRXJyb3IoIFwiUmVhY3QuQ2hpbGRyZW4ub25seSBleHBlY3RlZCB0byByZWNlaXZlIGEgc2luZ2xlIFJlYWN0IGVsZW1lbnQgY2hpbGQuXCIgKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gY2hpbGRyZW47XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRleHQoZGVmYXVsdFZhbHVlLCBjYWxjdWxhdGVDaGFuZ2VkQml0cykge1xuICBpZiAoY2FsY3VsYXRlQ2hhbmdlZEJpdHMgPT09IHVuZGVmaW5lZCkge1xuICAgIGNhbGN1bGF0ZUNoYW5nZWRCaXRzID0gbnVsbDtcbiAgfSBlbHNlIHtcbiAgICB7XG4gICAgICBpZiAoY2FsY3VsYXRlQ2hhbmdlZEJpdHMgIT09IG51bGwgJiYgdHlwZW9mIGNhbGN1bGF0ZUNoYW5nZWRCaXRzICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGVycm9yKCdjcmVhdGVDb250ZXh0OiBFeHBlY3RlZCB0aGUgb3B0aW9uYWwgc2Vjb25kIGFyZ3VtZW50IHRvIGJlIGEgJyArICdmdW5jdGlvbi4gSW5zdGVhZCByZWNlaXZlZDogJXMnLCBjYWxjdWxhdGVDaGFuZ2VkQml0cyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIGNvbnRleHQgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0NPTlRFWFRfVFlQRSxcbiAgICBfY2FsY3VsYXRlQ2hhbmdlZEJpdHM6IGNhbGN1bGF0ZUNoYW5nZWRCaXRzLFxuICAgIC8vIEFzIGEgd29ya2Fyb3VuZCB0byBzdXBwb3J0IG11bHRpcGxlIGNvbmN1cnJlbnQgcmVuZGVyZXJzLCB3ZSBjYXRlZ29yaXplXG4gICAgLy8gc29tZSByZW5kZXJlcnMgYXMgcHJpbWFyeSBhbmQgb3RoZXJzIGFzIHNlY29uZGFyeS4gV2Ugb25seSBleHBlY3RcbiAgICAvLyB0aGVyZSB0byBiZSB0d28gY29uY3VycmVudCByZW5kZXJlcnMgYXQgbW9zdDogUmVhY3QgTmF0aXZlIChwcmltYXJ5KSBhbmRcbiAgICAvLyBGYWJyaWMgKHNlY29uZGFyeSk7IFJlYWN0IERPTSAocHJpbWFyeSkgYW5kIFJlYWN0IEFSVCAoc2Vjb25kYXJ5KS5cbiAgICAvLyBTZWNvbmRhcnkgcmVuZGVyZXJzIHN0b3JlIHRoZWlyIGNvbnRleHQgdmFsdWVzIG9uIHNlcGFyYXRlIGZpZWxkcy5cbiAgICBfY3VycmVudFZhbHVlOiBkZWZhdWx0VmFsdWUsXG4gICAgX2N1cnJlbnRWYWx1ZTI6IGRlZmF1bHRWYWx1ZSxcbiAgICAvLyBVc2VkIHRvIHRyYWNrIGhvdyBtYW55IGNvbmN1cnJlbnQgcmVuZGVyZXJzIHRoaXMgY29udGV4dCBjdXJyZW50bHlcbiAgICAvLyBzdXBwb3J0cyB3aXRoaW4gaW4gYSBzaW5nbGUgcmVuZGVyZXIuIFN1Y2ggYXMgcGFyYWxsZWwgc2VydmVyIHJlbmRlcmluZy5cbiAgICBfdGhyZWFkQ291bnQ6IDAsXG4gICAgLy8gVGhlc2UgYXJlIGNpcmN1bGFyXG4gICAgUHJvdmlkZXI6IG51bGwsXG4gICAgQ29uc3VtZXI6IG51bGxcbiAgfTtcbiAgY29udGV4dC5Qcm92aWRlciA9IHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfUFJPVklERVJfVFlQRSxcbiAgICBfY29udGV4dDogY29udGV4dFxuICB9O1xuICB2YXIgaGFzV2FybmVkQWJvdXRVc2luZ05lc3RlZENvbnRleHRDb25zdW1lcnMgPSBmYWxzZTtcbiAgdmFyIGhhc1dhcm5lZEFib3V0VXNpbmdDb25zdW1lclByb3ZpZGVyID0gZmFsc2U7XG4gIHZhciBoYXNXYXJuZWRBYm91dERpc3BsYXlOYW1lT25Db25zdW1lciA9IGZhbHNlO1xuXG4gIHtcbiAgICAvLyBBIHNlcGFyYXRlIG9iamVjdCwgYnV0IHByb3hpZXMgYmFjayB0byB0aGUgb3JpZ2luYWwgY29udGV4dCBvYmplY3QgZm9yXG4gICAgLy8gYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuIEl0IGhhcyBhIGRpZmZlcmVudCAkJHR5cGVvZiwgc28gd2UgY2FuIHByb3Blcmx5XG4gICAgLy8gd2FybiBmb3IgdGhlIGluY29ycmVjdCB1c2FnZSBvZiBDb250ZXh0IGFzIGEgQ29uc3VtZXIuXG4gICAgdmFyIENvbnN1bWVyID0ge1xuICAgICAgJCR0eXBlb2Y6IFJFQUNUX0NPTlRFWFRfVFlQRSxcbiAgICAgIF9jb250ZXh0OiBjb250ZXh0LFxuICAgICAgX2NhbGN1bGF0ZUNoYW5nZWRCaXRzOiBjb250ZXh0Ll9jYWxjdWxhdGVDaGFuZ2VkQml0c1xuICAgIH07IC8vICRGbG93Rml4TWU6IEZsb3cgY29tcGxhaW5zIGFib3V0IG5vdCBzZXR0aW5nIGEgdmFsdWUsIHdoaWNoIGlzIGludGVudGlvbmFsIGhlcmVcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKENvbnN1bWVyLCB7XG4gICAgICBQcm92aWRlcjoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoIWhhc1dhcm5lZEFib3V0VXNpbmdDb25zdW1lclByb3ZpZGVyKSB7XG4gICAgICAgICAgICBoYXNXYXJuZWRBYm91dFVzaW5nQ29uc3VtZXJQcm92aWRlciA9IHRydWU7XG5cbiAgICAgICAgICAgIGVycm9yKCdSZW5kZXJpbmcgPENvbnRleHQuQ29uc3VtZXIuUHJvdmlkZXI+IGlzIG5vdCBzdXBwb3J0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiAnICsgJ2EgZnV0dXJlIG1ham9yIHJlbGVhc2UuIERpZCB5b3UgbWVhbiB0byByZW5kZXIgPENvbnRleHQuUHJvdmlkZXI+IGluc3RlYWQ/Jyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuUHJvdmlkZXI7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKF9Qcm92aWRlcikge1xuICAgICAgICAgIGNvbnRleHQuUHJvdmlkZXIgPSBfUHJvdmlkZXI7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBfY3VycmVudFZhbHVlOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBjb250ZXh0Ll9jdXJyZW50VmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKF9jdXJyZW50VmFsdWUpIHtcbiAgICAgICAgICBjb250ZXh0Ll9jdXJyZW50VmFsdWUgPSBfY3VycmVudFZhbHVlO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgX2N1cnJlbnRWYWx1ZTI6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuX2N1cnJlbnRWYWx1ZTI7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKF9jdXJyZW50VmFsdWUyKSB7XG4gICAgICAgICAgY29udGV4dC5fY3VycmVudFZhbHVlMiA9IF9jdXJyZW50VmFsdWUyO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgX3RocmVhZENvdW50OiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBjb250ZXh0Ll90aHJlYWRDb3VudDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX3RocmVhZENvdW50KSB7XG4gICAgICAgICAgY29udGV4dC5fdGhyZWFkQ291bnQgPSBfdGhyZWFkQ291bnQ7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBDb25zdW1lcjoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoIWhhc1dhcm5lZEFib3V0VXNpbmdOZXN0ZWRDb250ZXh0Q29uc3VtZXJzKSB7XG4gICAgICAgICAgICBoYXNXYXJuZWRBYm91dFVzaW5nTmVzdGVkQ29udGV4dENvbnN1bWVycyA9IHRydWU7XG5cbiAgICAgICAgICAgIGVycm9yKCdSZW5kZXJpbmcgPENvbnRleHQuQ29uc3VtZXIuQ29uc3VtZXI+IGlzIG5vdCBzdXBwb3J0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiAnICsgJ2EgZnV0dXJlIG1ham9yIHJlbGVhc2UuIERpZCB5b3UgbWVhbiB0byByZW5kZXIgPENvbnRleHQuQ29uc3VtZXI+IGluc3RlYWQ/Jyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuQ29uc3VtZXI7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBkaXNwbGF5TmFtZToge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5kaXNwbGF5TmFtZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoZGlzcGxheU5hbWUpIHtcbiAgICAgICAgICBpZiAoIWhhc1dhcm5lZEFib3V0RGlzcGxheU5hbWVPbkNvbnN1bWVyKSB7XG4gICAgICAgICAgICB3YXJuKCdTZXR0aW5nIGBkaXNwbGF5TmFtZWAgb24gQ29udGV4dC5Db25zdW1lciBoYXMgbm8gZWZmZWN0LiAnICsgXCJZb3Ugc2hvdWxkIHNldCBpdCBkaXJlY3RseSBvbiB0aGUgY29udGV4dCB3aXRoIENvbnRleHQuZGlzcGxheU5hbWUgPSAnJXMnLlwiLCBkaXNwbGF5TmFtZSk7XG5cbiAgICAgICAgICAgIGhhc1dhcm5lZEFib3V0RGlzcGxheU5hbWVPbkNvbnN1bWVyID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTsgLy8gJEZsb3dGaXhNZTogRmxvdyBjb21wbGFpbnMgYWJvdXQgbWlzc2luZyBwcm9wZXJ0aWVzIGJlY2F1c2UgaXQgZG9lc24ndCB1bmRlcnN0YW5kIGRlZmluZVByb3BlcnR5XG5cbiAgICBjb250ZXh0LkNvbnN1bWVyID0gQ29uc3VtZXI7XG4gIH1cblxuICB7XG4gICAgY29udGV4dC5fY3VycmVudFJlbmRlcmVyID0gbnVsbDtcbiAgICBjb250ZXh0Ll9jdXJyZW50UmVuZGVyZXIyID0gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBjb250ZXh0O1xufVxuXG52YXIgVW5pbml0aWFsaXplZCA9IC0xO1xudmFyIFBlbmRpbmcgPSAwO1xudmFyIFJlc29sdmVkID0gMTtcbnZhciBSZWplY3RlZCA9IDI7XG5cbmZ1bmN0aW9uIGxhenlJbml0aWFsaXplcihwYXlsb2FkKSB7XG4gIGlmIChwYXlsb2FkLl9zdGF0dXMgPT09IFVuaW5pdGlhbGl6ZWQpIHtcbiAgICB2YXIgY3RvciA9IHBheWxvYWQuX3Jlc3VsdDtcbiAgICB2YXIgdGhlbmFibGUgPSBjdG9yKCk7IC8vIFRyYW5zaXRpb24gdG8gdGhlIG5leHQgc3RhdGUuXG5cbiAgICB2YXIgcGVuZGluZyA9IHBheWxvYWQ7XG4gICAgcGVuZGluZy5fc3RhdHVzID0gUGVuZGluZztcbiAgICBwZW5kaW5nLl9yZXN1bHQgPSB0aGVuYWJsZTtcbiAgICB0aGVuYWJsZS50aGVuKGZ1bmN0aW9uIChtb2R1bGVPYmplY3QpIHtcbiAgICAgIGlmIChwYXlsb2FkLl9zdGF0dXMgPT09IFBlbmRpbmcpIHtcbiAgICAgICAgdmFyIGRlZmF1bHRFeHBvcnQgPSBtb2R1bGVPYmplY3QuZGVmYXVsdDtcblxuICAgICAgICB7XG4gICAgICAgICAgaWYgKGRlZmF1bHRFeHBvcnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZXJyb3IoJ2xhenk6IEV4cGVjdGVkIHRoZSByZXN1bHQgb2YgYSBkeW5hbWljIGltcG9ydCgpIGNhbGwuICcgKyAnSW5zdGVhZCByZWNlaXZlZDogJXNcXG5cXG5Zb3VyIGNvZGUgc2hvdWxkIGxvb2sgbGlrZTogXFxuICAnICsgLy8gQnJlYWsgdXAgaW1wb3J0cyB0byBhdm9pZCBhY2NpZGVudGFsbHkgcGFyc2luZyB0aGVtIGFzIGRlcGVuZGVuY2llcy5cbiAgICAgICAgICAgICdjb25zdCBNeUNvbXBvbmVudCA9IGxhenkoKCkgPT4gaW1wJyArIFwib3J0KCcuL015Q29tcG9uZW50JykpXCIsIG1vZHVsZU9iamVjdCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IC8vIFRyYW5zaXRpb24gdG8gdGhlIG5leHQgc3RhdGUuXG5cblxuICAgICAgICB2YXIgcmVzb2x2ZWQgPSBwYXlsb2FkO1xuICAgICAgICByZXNvbHZlZC5fc3RhdHVzID0gUmVzb2x2ZWQ7XG4gICAgICAgIHJlc29sdmVkLl9yZXN1bHQgPSBkZWZhdWx0RXhwb3J0O1xuICAgICAgfVxuICAgIH0sIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgaWYgKHBheWxvYWQuX3N0YXR1cyA9PT0gUGVuZGluZykge1xuICAgICAgICAvLyBUcmFuc2l0aW9uIHRvIHRoZSBuZXh0IHN0YXRlLlxuICAgICAgICB2YXIgcmVqZWN0ZWQgPSBwYXlsb2FkO1xuICAgICAgICByZWplY3RlZC5fc3RhdHVzID0gUmVqZWN0ZWQ7XG4gICAgICAgIHJlamVjdGVkLl9yZXN1bHQgPSBlcnJvcjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGlmIChwYXlsb2FkLl9zdGF0dXMgPT09IFJlc29sdmVkKSB7XG4gICAgcmV0dXJuIHBheWxvYWQuX3Jlc3VsdDtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBwYXlsb2FkLl9yZXN1bHQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gbGF6eShjdG9yKSB7XG4gIHZhciBwYXlsb2FkID0ge1xuICAgIC8vIFdlIHVzZSB0aGVzZSBmaWVsZHMgdG8gc3RvcmUgdGhlIHJlc3VsdC5cbiAgICBfc3RhdHVzOiAtMSxcbiAgICBfcmVzdWx0OiBjdG9yXG4gIH07XG4gIHZhciBsYXp5VHlwZSA9IHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfTEFaWV9UWVBFLFxuICAgIF9wYXlsb2FkOiBwYXlsb2FkLFxuICAgIF9pbml0OiBsYXp5SW5pdGlhbGl6ZXJcbiAgfTtcblxuICB7XG4gICAgLy8gSW4gcHJvZHVjdGlvbiwgdGhpcyB3b3VsZCBqdXN0IHNldCBpdCBvbiB0aGUgb2JqZWN0LlxuICAgIHZhciBkZWZhdWx0UHJvcHM7XG4gICAgdmFyIHByb3BUeXBlczsgLy8gJEZsb3dGaXhNZVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMobGF6eVR5cGUsIHtcbiAgICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBkZWZhdWx0UHJvcHM7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKG5ld0RlZmF1bHRQcm9wcykge1xuICAgICAgICAgIGVycm9yKCdSZWFjdC5sYXp5KC4uLik6IEl0IGlzIG5vdCBzdXBwb3J0ZWQgdG8gYXNzaWduIGBkZWZhdWx0UHJvcHNgIHRvICcgKyAnYSBsYXp5IGNvbXBvbmVudCBpbXBvcnQuIEVpdGhlciBzcGVjaWZ5IHRoZW0gd2hlcmUgdGhlIGNvbXBvbmVudCAnICsgJ2lzIGRlZmluZWQsIG9yIGNyZWF0ZSBhIHdyYXBwaW5nIGNvbXBvbmVudCBhcm91bmQgaXQuJyk7XG5cbiAgICAgICAgICBkZWZhdWx0UHJvcHMgPSBuZXdEZWZhdWx0UHJvcHM7IC8vIE1hdGNoIHByb2R1Y3Rpb24gYmVoYXZpb3IgbW9yZSBjbG9zZWx5OlxuICAgICAgICAgIC8vICRGbG93Rml4TWVcblxuICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShsYXp5VHlwZSwgJ2RlZmF1bHRQcm9wcycsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHByb3BUeXBlczoge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBwcm9wVHlwZXM7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKG5ld1Byb3BUeXBlcykge1xuICAgICAgICAgIGVycm9yKCdSZWFjdC5sYXp5KC4uLik6IEl0IGlzIG5vdCBzdXBwb3J0ZWQgdG8gYXNzaWduIGBwcm9wVHlwZXNgIHRvICcgKyAnYSBsYXp5IGNvbXBvbmVudCBpbXBvcnQuIEVpdGhlciBzcGVjaWZ5IHRoZW0gd2hlcmUgdGhlIGNvbXBvbmVudCAnICsgJ2lzIGRlZmluZWQsIG9yIGNyZWF0ZSBhIHdyYXBwaW5nIGNvbXBvbmVudCBhcm91bmQgaXQuJyk7XG5cbiAgICAgICAgICBwcm9wVHlwZXMgPSBuZXdQcm9wVHlwZXM7IC8vIE1hdGNoIHByb2R1Y3Rpb24gYmVoYXZpb3IgbW9yZSBjbG9zZWx5OlxuICAgICAgICAgIC8vICRGbG93Rml4TWVcblxuICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShsYXp5VHlwZSwgJ3Byb3BUeXBlcycsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGxhenlUeXBlO1xufVxuXG5mdW5jdGlvbiBmb3J3YXJkUmVmKHJlbmRlcikge1xuICB7XG4gICAgaWYgKHJlbmRlciAhPSBudWxsICYmIHJlbmRlci4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFKSB7XG4gICAgICBlcnJvcignZm9yd2FyZFJlZiByZXF1aXJlcyBhIHJlbmRlciBmdW5jdGlvbiBidXQgcmVjZWl2ZWQgYSBgbWVtb2AgJyArICdjb21wb25lbnQuIEluc3RlYWQgb2YgZm9yd2FyZFJlZihtZW1vKC4uLikpLCB1c2UgJyArICdtZW1vKGZvcndhcmRSZWYoLi4uKSkuJyk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgcmVuZGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBlcnJvcignZm9yd2FyZFJlZiByZXF1aXJlcyBhIHJlbmRlciBmdW5jdGlvbiBidXQgd2FzIGdpdmVuICVzLicsIHJlbmRlciA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiByZW5kZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocmVuZGVyLmxlbmd0aCAhPT0gMCAmJiByZW5kZXIubGVuZ3RoICE9PSAyKSB7XG4gICAgICAgIGVycm9yKCdmb3J3YXJkUmVmIHJlbmRlciBmdW5jdGlvbnMgYWNjZXB0IGV4YWN0bHkgdHdvIHBhcmFtZXRlcnM6IHByb3BzIGFuZCByZWYuICVzJywgcmVuZGVyLmxlbmd0aCA9PT0gMSA/ICdEaWQgeW91IGZvcmdldCB0byB1c2UgdGhlIHJlZiBwYXJhbWV0ZXI/JyA6ICdBbnkgYWRkaXRpb25hbCBwYXJhbWV0ZXIgd2lsbCBiZSB1bmRlZmluZWQuJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJlbmRlciAhPSBudWxsKSB7XG4gICAgICBpZiAocmVuZGVyLmRlZmF1bHRQcm9wcyAhPSBudWxsIHx8IHJlbmRlci5wcm9wVHlwZXMgIT0gbnVsbCkge1xuICAgICAgICBlcnJvcignZm9yd2FyZFJlZiByZW5kZXIgZnVuY3Rpb25zIGRvIG5vdCBzdXBwb3J0IHByb3BUeXBlcyBvciBkZWZhdWx0UHJvcHMuICcgKyAnRGlkIHlvdSBhY2NpZGVudGFsbHkgcGFzcyBhIFJlYWN0IGNvbXBvbmVudD8nKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2YXIgZWxlbWVudFR5cGUgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUsXG4gICAgcmVuZGVyOiByZW5kZXJcbiAgfTtcblxuICB7XG4gICAgdmFyIG93bk5hbWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnRUeXBlLCAnZGlzcGxheU5hbWUnLCB7XG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gb3duTmFtZTtcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIG93bk5hbWUgPSBuYW1lO1xuXG4gICAgICAgIGlmIChyZW5kZXIuZGlzcGxheU5hbWUgPT0gbnVsbCkge1xuICAgICAgICAgIHJlbmRlci5kaXNwbGF5TmFtZSA9IG5hbWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50VHlwZTtcbn1cblxuLy8gRmlsdGVyIGNlcnRhaW4gRE9NIGF0dHJpYnV0ZXMgKGUuZy4gc3JjLCBocmVmKSBpZiB0aGVpciB2YWx1ZXMgYXJlIGVtcHR5IHN0cmluZ3MuXG5cbnZhciBlbmFibGVTY29wZUFQSSA9IGZhbHNlOyAvLyBFeHBlcmltZW50YWwgQ3JlYXRlIEV2ZW50IEhhbmRsZSBBUEkuXG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSAvLyBOb3RlOiB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyAoZS5nLiBpZiBpdCdzIGEgcG9seWZpbGwpLlxuXG5cbiAgaWYgKHR5cGUgPT09IGV4cG9ydHMuRnJhZ21lbnQgfHwgdHlwZSA9PT0gZXhwb3J0cy5Qcm9maWxlciB8fCB0eXBlID09PSBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSB8fCB0eXBlID09PSBleHBvcnRzLlN0cmljdE1vZGUgfHwgdHlwZSA9PT0gZXhwb3J0cy5TdXNwZW5zZSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFIHx8IGVuYWJsZVNjb3BlQVBJICkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsKSB7XG4gICAgaWYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0JMT0NLX1RZUEUgfHwgdHlwZVswXSA9PT0gUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gbWVtbyh0eXBlLCBjb21wYXJlKSB7XG4gIHtcbiAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSkge1xuICAgICAgZXJyb3IoJ21lbW86IFRoZSBmaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgY29tcG9uZW50LiBJbnN0ZWFkICcgKyAncmVjZWl2ZWQ6ICVzJywgdHlwZSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiB0eXBlKTtcbiAgICB9XG4gIH1cblxuICB2YXIgZWxlbWVudFR5cGUgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX01FTU9fVFlQRSxcbiAgICB0eXBlOiB0eXBlLFxuICAgIGNvbXBhcmU6IGNvbXBhcmUgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjb21wYXJlXG4gIH07XG5cbiAge1xuICAgIHZhciBvd25OYW1lO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50VHlwZSwgJ2Rpc3BsYXlOYW1lJywge1xuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG93bk5hbWU7XG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICBvd25OYW1lID0gbmFtZTtcblxuICAgICAgICBpZiAodHlwZS5kaXNwbGF5TmFtZSA9PSBudWxsKSB7XG4gICAgICAgICAgdHlwZS5kaXNwbGF5TmFtZSA9IG5hbWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50VHlwZTtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZURpc3BhdGNoZXIoKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50O1xuXG4gIGlmICghKGRpc3BhdGNoZXIgIT09IG51bGwpKSB7XG4gICAge1xuICAgICAgdGhyb3cgRXJyb3IoIFwiSW52YWxpZCBob29rIGNhbGwuIEhvb2tzIGNhbiBvbmx5IGJlIGNhbGxlZCBpbnNpZGUgb2YgdGhlIGJvZHkgb2YgYSBmdW5jdGlvbiBjb21wb25lbnQuIFRoaXMgY291bGQgaGFwcGVuIGZvciBvbmUgb2YgdGhlIGZvbGxvd2luZyByZWFzb25zOlxcbjEuIFlvdSBtaWdodCBoYXZlIG1pc21hdGNoaW5nIHZlcnNpb25zIG9mIFJlYWN0IGFuZCB0aGUgcmVuZGVyZXIgKHN1Y2ggYXMgUmVhY3QgRE9NKVxcbjIuIFlvdSBtaWdodCBiZSBicmVha2luZyB0aGUgUnVsZXMgb2YgSG9va3NcXG4zLiBZb3UgbWlnaHQgaGF2ZSBtb3JlIHRoYW4gb25lIGNvcHkgb2YgUmVhY3QgaW4gdGhlIHNhbWUgYXBwXFxuU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9pbnZhbGlkLWhvb2stY2FsbCBmb3IgdGlwcyBhYm91dCBob3cgdG8gZGVidWcgYW5kIGZpeCB0aGlzIHByb2JsZW0uXCIgKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGlzcGF0Y2hlcjtcbn1cblxuZnVuY3Rpb24gdXNlQ29udGV4dChDb250ZXh0LCB1bnN0YWJsZV9vYnNlcnZlZEJpdHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuXG4gIHtcbiAgICBpZiAodW5zdGFibGVfb2JzZXJ2ZWRCaXRzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGVycm9yKCd1c2VDb250ZXh0KCkgc2Vjb25kIGFyZ3VtZW50IGlzIHJlc2VydmVkIGZvciBmdXR1cmUgJyArICd1c2UgaW4gUmVhY3QuIFBhc3NpbmcgaXQgaXMgbm90IHN1cHBvcnRlZC4gJyArICdZb3UgcGFzc2VkOiAlcy4lcycsIHVuc3RhYmxlX29ic2VydmVkQml0cywgdHlwZW9mIHVuc3RhYmxlX29ic2VydmVkQml0cyA9PT0gJ251bWJlcicgJiYgQXJyYXkuaXNBcnJheShhcmd1bWVudHNbMl0pID8gJ1xcblxcbkRpZCB5b3UgY2FsbCBhcnJheS5tYXAodXNlQ29udGV4dCk/ICcgKyAnQ2FsbGluZyBIb29rcyBpbnNpZGUgYSBsb29wIGlzIG5vdCBzdXBwb3J0ZWQuICcgKyAnTGVhcm4gbW9yZSBhdCBodHRwczovL3JlYWN0anMub3JnL2xpbmsvcnVsZXMtb2YtaG9va3MnIDogJycpO1xuICAgIH0gLy8gVE9ETzogYWRkIGEgbW9yZSBnZW5lcmljIHdhcm5pbmcgZm9yIGludmFsaWQgdmFsdWVzLlxuXG5cbiAgICBpZiAoQ29udGV4dC5fY29udGV4dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgcmVhbENvbnRleHQgPSBDb250ZXh0Ll9jb250ZXh0OyAvLyBEb24ndCBkZWR1cGxpY2F0ZSBiZWNhdXNlIHRoaXMgbGVnaXRpbWF0ZWx5IGNhdXNlcyBidWdzXG4gICAgICAvLyBhbmQgbm9ib2R5IHNob3VsZCBiZSB1c2luZyB0aGlzIGluIGV4aXN0aW5nIGNvZGUuXG5cbiAgICAgIGlmIChyZWFsQ29udGV4dC5Db25zdW1lciA9PT0gQ29udGV4dCkge1xuICAgICAgICBlcnJvcignQ2FsbGluZyB1c2VDb250ZXh0KENvbnRleHQuQ29uc3VtZXIpIGlzIG5vdCBzdXBwb3J0ZWQsIG1heSBjYXVzZSBidWdzLCBhbmQgd2lsbCBiZSAnICsgJ3JlbW92ZWQgaW4gYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gRGlkIHlvdSBtZWFuIHRvIGNhbGwgdXNlQ29udGV4dChDb250ZXh0KSBpbnN0ZWFkPycpO1xuICAgICAgfSBlbHNlIGlmIChyZWFsQ29udGV4dC5Qcm92aWRlciA9PT0gQ29udGV4dCkge1xuICAgICAgICBlcnJvcignQ2FsbGluZyB1c2VDb250ZXh0KENvbnRleHQuUHJvdmlkZXIpIGlzIG5vdCBzdXBwb3J0ZWQuICcgKyAnRGlkIHlvdSBtZWFuIHRvIGNhbGwgdXNlQ29udGV4dChDb250ZXh0KSBpbnN0ZWFkPycpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUNvbnRleHQoQ29udGV4dCwgdW5zdGFibGVfb2JzZXJ2ZWRCaXRzKTtcbn1cbmZ1bmN0aW9uIHVzZVN0YXRlKGluaXRpYWxTdGF0ZSkge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZVN0YXRlKGluaXRpYWxTdGF0ZSk7XG59XG5mdW5jdGlvbiB1c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxBcmcsIGluaXQpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxBcmcsIGluaXQpO1xufVxuZnVuY3Rpb24gdXNlUmVmKGluaXRpYWxWYWx1ZSkge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZVJlZihpbml0aWFsVmFsdWUpO1xufVxuZnVuY3Rpb24gdXNlRWZmZWN0KGNyZWF0ZSwgZGVwcykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUVmZmVjdChjcmVhdGUsIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlTGF5b3V0RWZmZWN0KGNyZWF0ZSwgZGVwcykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUxheW91dEVmZmVjdChjcmVhdGUsIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlQ2FsbGJhY2soY2FsbGJhY2ssIGRlcHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VDYWxsYmFjayhjYWxsYmFjaywgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VNZW1vKGNyZWF0ZSwgZGVwcykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZU1lbW8oY3JlYXRlLCBkZXBzKTtcbn1cbmZ1bmN0aW9uIHVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCBjcmVhdGUsIGRlcHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgY3JlYXRlLCBkZXBzKTtcbn1cbmZ1bmN0aW9uIHVzZURlYnVnVmFsdWUodmFsdWUsIGZvcm1hdHRlckZuKSB7XG4gIHtcbiAgICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gICAgcmV0dXJuIGRpc3BhdGNoZXIudXNlRGVidWdWYWx1ZSh2YWx1ZSwgZm9ybWF0dGVyRm4pO1xuICB9XG59XG5cbi8vIEhlbHBlcnMgdG8gcGF0Y2ggY29uc29sZS5sb2dzIHRvIGF2b2lkIGxvZ2dpbmcgZHVyaW5nIHNpZGUtZWZmZWN0IGZyZWVcbi8vIHJlcGxheWluZyBvbiByZW5kZXIgZnVuY3Rpb24uIFRoaXMgY3VycmVudGx5IG9ubHkgcGF0Y2hlcyB0aGUgb2JqZWN0XG4vLyBsYXppbHkgd2hpY2ggd29uJ3QgY292ZXIgaWYgdGhlIGxvZyBmdW5jdGlvbiB3YXMgZXh0cmFjdGVkIGVhZ2VybHkuXG4vLyBXZSBjb3VsZCBhbHNvIGVhZ2VybHkgcGF0Y2ggdGhlIG1ldGhvZC5cbnZhciBkaXNhYmxlZERlcHRoID0gMDtcbnZhciBwcmV2TG9nO1xudmFyIHByZXZJbmZvO1xudmFyIHByZXZXYXJuO1xudmFyIHByZXZFcnJvcjtcbnZhciBwcmV2R3JvdXA7XG52YXIgcHJldkdyb3VwQ29sbGFwc2VkO1xudmFyIHByZXZHcm91cEVuZDtcblxuZnVuY3Rpb24gZGlzYWJsZWRMb2coKSB7fVxuXG5kaXNhYmxlZExvZy5fX3JlYWN0RGlzYWJsZWRMb2cgPSB0cnVlO1xuZnVuY3Rpb24gZGlzYWJsZUxvZ3MoKSB7XG4gIHtcbiAgICBpZiAoZGlzYWJsZWREZXB0aCA9PT0gMCkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgICBwcmV2TG9nID0gY29uc29sZS5sb2c7XG4gICAgICBwcmV2SW5mbyA9IGNvbnNvbGUuaW5mbztcbiAgICAgIHByZXZXYXJuID0gY29uc29sZS53YXJuO1xuICAgICAgcHJldkVycm9yID0gY29uc29sZS5lcnJvcjtcbiAgICAgIHByZXZHcm91cCA9IGNvbnNvbGUuZ3JvdXA7XG4gICAgICBwcmV2R3JvdXBDb2xsYXBzZWQgPSBjb25zb2xlLmdyb3VwQ29sbGFwc2VkO1xuICAgICAgcHJldkdyb3VwRW5kID0gY29uc29sZS5ncm91cEVuZDsgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xOTA5OVxuXG4gICAgICB2YXIgcHJvcHMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IGRpc2FibGVkTG9nLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfTsgLy8gJEZsb3dGaXhNZSBGbG93IHRoaW5rcyBjb25zb2xlIGlzIGltbXV0YWJsZS5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29uc29sZSwge1xuICAgICAgICBpbmZvOiBwcm9wcyxcbiAgICAgICAgbG9nOiBwcm9wcyxcbiAgICAgICAgd2FybjogcHJvcHMsXG4gICAgICAgIGVycm9yOiBwcm9wcyxcbiAgICAgICAgZ3JvdXA6IHByb3BzLFxuICAgICAgICBncm91cENvbGxhcHNlZDogcHJvcHMsXG4gICAgICAgIGdyb3VwRW5kOiBwcm9wc1xuICAgICAgfSk7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgIH1cblxuICAgIGRpc2FibGVkRGVwdGgrKztcbiAgfVxufVxuZnVuY3Rpb24gcmVlbmFibGVMb2dzKCkge1xuICB7XG4gICAgZGlzYWJsZWREZXB0aC0tO1xuXG4gICAgaWYgKGRpc2FibGVkRGVwdGggPT09IDApIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgICAgdmFyIHByb3BzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lIEZsb3cgdGhpbmtzIGNvbnNvbGUgaXMgaW1tdXRhYmxlLlxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjb25zb2xlLCB7XG4gICAgICAgIGxvZzogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkxvZ1xuICAgICAgICB9KSxcbiAgICAgICAgaW5mbzogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkluZm9cbiAgICAgICAgfSksXG4gICAgICAgIHdhcm46IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZXYXJuXG4gICAgICAgIH0pLFxuICAgICAgICBlcnJvcjogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkVycm9yXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cDogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cENvbGxhcHNlZDogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwQ29sbGFwc2VkXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cEVuZDogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwRW5kXG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgfVxuXG4gICAgaWYgKGRpc2FibGVkRGVwdGggPCAwKSB7XG4gICAgICBlcnJvcignZGlzYWJsZWREZXB0aCBmZWxsIGJlbG93IHplcm8uICcgKyAnVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG59XG5cbnZhciBSZWFjdEN1cnJlbnREaXNwYXRjaGVyJDEgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnREaXNwYXRjaGVyO1xudmFyIHByZWZpeDtcbmZ1bmN0aW9uIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKG5hbWUsIHNvdXJjZSwgb3duZXJGbikge1xuICB7XG4gICAgaWYgKHByZWZpeCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBFeHRyYWN0IHRoZSBWTSBzcGVjaWZpYyBwcmVmaXggdXNlZCBieSBlYWNoIGxpbmUuXG4gICAgICB0cnkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICB2YXIgbWF0Y2ggPSB4LnN0YWNrLnRyaW0oKS5tYXRjaCgvXFxuKCAqKGF0ICk/KS8pO1xuICAgICAgICBwcmVmaXggPSBtYXRjaCAmJiBtYXRjaFsxXSB8fCAnJztcbiAgICAgIH1cbiAgICB9IC8vIFdlIHVzZSB0aGUgcHJlZml4IHRvIGVuc3VyZSBvdXIgc3RhY2tzIGxpbmUgdXAgd2l0aCBuYXRpdmUgc3RhY2sgZnJhbWVzLlxuXG5cbiAgICByZXR1cm4gJ1xcbicgKyBwcmVmaXggKyBuYW1lO1xuICB9XG59XG52YXIgcmVlbnRyeSA9IGZhbHNlO1xudmFyIGNvbXBvbmVudEZyYW1lQ2FjaGU7XG5cbntcbiAgdmFyIFBvc3NpYmx5V2Vha01hcCA9IHR5cGVvZiBXZWFrTWFwID09PSAnZnVuY3Rpb24nID8gV2Vha01hcCA6IE1hcDtcbiAgY29tcG9uZW50RnJhbWVDYWNoZSA9IG5ldyBQb3NzaWJseVdlYWtNYXAoKTtcbn1cblxuZnVuY3Rpb24gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZShmbiwgY29uc3RydWN0KSB7XG4gIC8vIElmIHNvbWV0aGluZyBhc2tlZCBmb3IgYSBzdGFjayBpbnNpZGUgYSBmYWtlIHJlbmRlciwgaXQgc2hvdWxkIGdldCBpZ25vcmVkLlxuICBpZiAoIWZuIHx8IHJlZW50cnkpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICB7XG4gICAgdmFyIGZyYW1lID0gY29tcG9uZW50RnJhbWVDYWNoZS5nZXQoZm4pO1xuXG4gICAgaWYgKGZyYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBmcmFtZTtcbiAgICB9XG4gIH1cblxuICB2YXIgY29udHJvbDtcbiAgcmVlbnRyeSA9IHRydWU7XG4gIHZhciBwcmV2aW91c1ByZXBhcmVTdGFja1RyYWNlID0gRXJyb3IucHJlcGFyZVN0YWNrVHJhY2U7IC8vICRGbG93Rml4TWUgSXQgZG9lcyBhY2NlcHQgdW5kZWZpbmVkLlxuXG4gIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gdW5kZWZpbmVkO1xuICB2YXIgcHJldmlvdXNEaXNwYXRjaGVyO1xuXG4gIHtcbiAgICBwcmV2aW91c0Rpc3BhdGNoZXIgPSBSZWFjdEN1cnJlbnREaXNwYXRjaGVyJDEuY3VycmVudDsgLy8gU2V0IHRoZSBkaXNwYXRjaGVyIGluIERFViBiZWNhdXNlIHRoaXMgbWlnaHQgYmUgY2FsbCBpbiB0aGUgcmVuZGVyIGZ1bmN0aW9uXG4gICAgLy8gZm9yIHdhcm5pbmdzLlxuXG4gICAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciQxLmN1cnJlbnQgPSBudWxsO1xuICAgIGRpc2FibGVMb2dzKCk7XG4gIH1cblxuICB0cnkge1xuICAgIC8vIFRoaXMgc2hvdWxkIHRocm93LlxuICAgIGlmIChjb25zdHJ1Y3QpIHtcbiAgICAgIC8vIFNvbWV0aGluZyBzaG91bGQgYmUgc2V0dGluZyB0aGUgcHJvcHMgaW4gdGhlIGNvbnN0cnVjdG9yLlxuICAgICAgdmFyIEZha2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lXG5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZha2UucHJvdG90eXBlLCAncHJvcHMnLCB7XG4gICAgICAgIHNldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vIFdlIHVzZSBhIHRocm93aW5nIHNldHRlciBpbnN0ZWFkIG9mIGZyb3plbiBvciBub24td3JpdGFibGUgcHJvcHNcbiAgICAgICAgICAvLyBiZWNhdXNlIHRoYXQgd29uJ3QgdGhyb3cgaW4gYSBub24tc3RyaWN0IG1vZGUgZnVuY3Rpb24uXG4gICAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gJ29iamVjdCcgJiYgUmVmbGVjdC5jb25zdHJ1Y3QpIHtcbiAgICAgICAgLy8gV2UgY29uc3RydWN0IGEgZGlmZmVyZW50IGNvbnRyb2wgZm9yIHRoaXMgY2FzZSB0byBpbmNsdWRlIGFueSBleHRyYVxuICAgICAgICAvLyBmcmFtZXMgYWRkZWQgYnkgdGhlIGNvbnN0cnVjdCBjYWxsLlxuICAgICAgICB0cnkge1xuICAgICAgICAgIFJlZmxlY3QuY29uc3RydWN0KEZha2UsIFtdKTtcbiAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgICB9XG5cbiAgICAgICAgUmVmbGVjdC5jb25zdHJ1Y3QoZm4sIFtdLCBGYWtlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgRmFrZS5jYWxsKCk7XG4gICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICBjb250cm9sID0geDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZuLmNhbGwoRmFrZS5wcm90b3R5cGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0cnkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICBjb250cm9sID0geDtcbiAgICAgIH1cblxuICAgICAgZm4oKTtcbiAgICB9XG4gIH0gY2F0Y2ggKHNhbXBsZSkge1xuICAgIC8vIFRoaXMgaXMgaW5saW5lZCBtYW51YWxseSBiZWNhdXNlIGNsb3N1cmUgZG9lc24ndCBkbyBpdCBmb3IgdXMuXG4gICAgaWYgKHNhbXBsZSAmJiBjb250cm9sICYmIHR5cGVvZiBzYW1wbGUuc3RhY2sgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBUaGlzIGV4dHJhY3RzIHRoZSBmaXJzdCBmcmFtZSBmcm9tIHRoZSBzYW1wbGUgdGhhdCBpc24ndCBhbHNvIGluIHRoZSBjb250cm9sLlxuICAgICAgLy8gU2tpcHBpbmcgb25lIGZyYW1lIHRoYXQgd2UgYXNzdW1lIGlzIHRoZSBmcmFtZSB0aGF0IGNhbGxzIHRoZSB0d28uXG4gICAgICB2YXIgc2FtcGxlTGluZXMgPSBzYW1wbGUuc3RhY2suc3BsaXQoJ1xcbicpO1xuICAgICAgdmFyIGNvbnRyb2xMaW5lcyA9IGNvbnRyb2wuc3RhY2suc3BsaXQoJ1xcbicpO1xuICAgICAgdmFyIHMgPSBzYW1wbGVMaW5lcy5sZW5ndGggLSAxO1xuICAgICAgdmFyIGMgPSBjb250cm9sTGluZXMubGVuZ3RoIC0gMTtcblxuICAgICAgd2hpbGUgKHMgPj0gMSAmJiBjID49IDAgJiYgc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAvLyBXZSBleHBlY3QgYXQgbGVhc3Qgb25lIHN0YWNrIGZyYW1lIHRvIGJlIHNoYXJlZC5cbiAgICAgICAgLy8gVHlwaWNhbGx5IHRoaXMgd2lsbCBiZSB0aGUgcm9vdCBtb3N0IG9uZS4gSG93ZXZlciwgc3RhY2sgZnJhbWVzIG1heSBiZVxuICAgICAgICAvLyBjdXQgb2ZmIGR1ZSB0byBtYXhpbXVtIHN0YWNrIGxpbWl0cy4gSW4gdGhpcyBjYXNlLCBvbmUgbWF5YmUgY3V0IG9mZlxuICAgICAgICAvLyBlYXJsaWVyIHRoYW4gdGhlIG90aGVyLiBXZSBhc3N1bWUgdGhhdCB0aGUgc2FtcGxlIGlzIGxvbmdlciBvciB0aGUgc2FtZVxuICAgICAgICAvLyBhbmQgdGhlcmUgZm9yIGN1dCBvZmYgZWFybGllci4gU28gd2Ugc2hvdWxkIGZpbmQgdGhlIHJvb3QgbW9zdCBmcmFtZSBpblxuICAgICAgICAvLyB0aGUgc2FtcGxlIHNvbWV3aGVyZSBpbiB0aGUgY29udHJvbC5cbiAgICAgICAgYy0tO1xuICAgICAgfVxuXG4gICAgICBmb3IgKDsgcyA+PSAxICYmIGMgPj0gMDsgcy0tLCBjLS0pIHtcbiAgICAgICAgLy8gTmV4dCB3ZSBmaW5kIHRoZSBmaXJzdCBvbmUgdGhhdCBpc24ndCB0aGUgc2FtZSB3aGljaCBzaG91bGQgYmUgdGhlXG4gICAgICAgIC8vIGZyYW1lIHRoYXQgY2FsbGVkIG91ciBzYW1wbGUgZnVuY3Rpb24gYW5kIHRoZSBjb250cm9sLlxuICAgICAgICBpZiAoc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAgIC8vIEluIFY4LCB0aGUgZmlyc3QgbGluZSBpcyBkZXNjcmliaW5nIHRoZSBtZXNzYWdlIGJ1dCBvdGhlciBWTXMgZG9uJ3QuXG4gICAgICAgICAgLy8gSWYgd2UncmUgYWJvdXQgdG8gcmV0dXJuIHRoZSBmaXJzdCBsaW5lLCBhbmQgdGhlIGNvbnRyb2wgaXMgYWxzbyBvbiB0aGUgc2FtZVxuICAgICAgICAgIC8vIGxpbmUsIHRoYXQncyBhIHByZXR0eSBnb29kIGluZGljYXRvciB0aGF0IG91ciBzYW1wbGUgdGhyZXcgYXQgc2FtZSBsaW5lIGFzXG4gICAgICAgICAgLy8gdGhlIGNvbnRyb2wuIEkuZS4gYmVmb3JlIHdlIGVudGVyZWQgdGhlIHNhbXBsZSBmcmFtZS4gU28gd2UgaWdub3JlIHRoaXMgcmVzdWx0LlxuICAgICAgICAgIC8vIFRoaXMgY2FuIGhhcHBlbiBpZiB5b3UgcGFzc2VkIGEgY2xhc3MgdG8gZnVuY3Rpb24gY29tcG9uZW50LCBvciBub24tZnVuY3Rpb24uXG4gICAgICAgICAgaWYgKHMgIT09IDEgfHwgYyAhPT0gMSkge1xuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICBzLS07XG4gICAgICAgICAgICAgIGMtLTsgLy8gV2UgbWF5IHN0aWxsIGhhdmUgc2ltaWxhciBpbnRlcm1lZGlhdGUgZnJhbWVzIGZyb20gdGhlIGNvbnN0cnVjdCBjYWxsLlxuICAgICAgICAgICAgICAvLyBUaGUgbmV4dCBvbmUgdGhhdCBpc24ndCB0aGUgc2FtZSBzaG91bGQgYmUgb3VyIG1hdGNoIHRob3VnaC5cblxuICAgICAgICAgICAgICBpZiAoYyA8IDAgfHwgc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAgICAgICAgIC8vIFY4IGFkZHMgYSBcIm5ld1wiIHByZWZpeCBmb3IgbmF0aXZlIGNsYXNzZXMuIExldCdzIHJlbW92ZSBpdCB0byBtYWtlIGl0IHByZXR0aWVyLlxuICAgICAgICAgICAgICAgIHZhciBfZnJhbWUgPSAnXFxuJyArIHNhbXBsZUxpbmVzW3NdLnJlcGxhY2UoJyBhdCBuZXcgJywgJyBhdCAnKTtcblxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50RnJhbWVDYWNoZS5zZXQoZm4sIF9mcmFtZSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSAvLyBSZXR1cm4gdGhlIGxpbmUgd2UgZm91bmQuXG5cblxuICAgICAgICAgICAgICAgIHJldHVybiBfZnJhbWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gd2hpbGUgKHMgPj0gMSAmJiBjID49IDApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IGZpbmFsbHkge1xuICAgIHJlZW50cnkgPSBmYWxzZTtcblxuICAgIHtcbiAgICAgIFJlYWN0Q3VycmVudERpc3BhdGNoZXIkMS5jdXJyZW50ID0gcHJldmlvdXNEaXNwYXRjaGVyO1xuICAgICAgcmVlbmFibGVMb2dzKCk7XG4gICAgfVxuXG4gICAgRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSBwcmV2aW91c1ByZXBhcmVTdGFja1RyYWNlO1xuICB9IC8vIEZhbGxiYWNrIHRvIGp1c3QgdXNpbmcgdGhlIG5hbWUgaWYgd2UgY291bGRuJ3QgbWFrZSBpdCB0aHJvdy5cblxuXG4gIHZhciBuYW1lID0gZm4gPyBmbi5kaXNwbGF5TmFtZSB8fCBmbi5uYW1lIDogJyc7XG4gIHZhciBzeW50aGV0aWNGcmFtZSA9IG5hbWUgPyBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZShuYW1lKSA6ICcnO1xuXG4gIHtcbiAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb21wb25lbnRGcmFtZUNhY2hlLnNldChmbiwgc3ludGhldGljRnJhbWUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzeW50aGV0aWNGcmFtZTtcbn1cbmZ1bmN0aW9uIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZShmbiwgc291cmNlLCBvd25lckZuKSB7XG4gIHtcbiAgICByZXR1cm4gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZShmbiwgZmFsc2UpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNob3VsZENvbnN0cnVjdChDb21wb25lbnQpIHtcbiAgdmFyIHByb3RvdHlwZSA9IENvbXBvbmVudC5wcm90b3R5cGU7XG4gIHJldHVybiAhIShwcm90b3R5cGUgJiYgcHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpO1xufVxuXG5mdW5jdGlvbiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYodHlwZSwgc291cmNlLCBvd25lckZuKSB7XG5cbiAgaWYgKHR5cGUgPT0gbnVsbCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHtcbiAgICAgIHJldHVybiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKHR5cGUsIHNob3VsZENvbnN0cnVjdCh0eXBlKSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSh0eXBlKTtcbiAgfVxuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgZXhwb3J0cy5TdXNwZW5zZTpcbiAgICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSgnU3VzcGVuc2UnKTtcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKCdTdXNwZW5zZUxpc3QnKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZSh0eXBlLnJlbmRlcik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAvLyBNZW1vIG1heSBjb250YWluIGFueSBjb21wb25lbnQgdHlwZSBzbyB3ZSByZWN1cnNpdmVseSByZXNvbHZlIGl0LlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKHR5cGUudHlwZSwgc291cmNlLCBvd25lckZuKTtcblxuICAgICAgY2FzZSBSRUFDVF9CTE9DS19UWVBFOlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKHR5cGUuX3JlbmRlcik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIGxhenlDb21wb25lbnQgPSB0eXBlO1xuICAgICAgICAgIHZhciBwYXlsb2FkID0gbGF6eUNvbXBvbmVudC5fcGF5bG9hZDtcbiAgICAgICAgICB2YXIgaW5pdCA9IGxhenlDb21wb25lbnQuX2luaXQ7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gTGF6eSBtYXkgY29udGFpbiBhbnkgY29tcG9uZW50IHR5cGUgc28gd2UgcmVjdXJzaXZlbHkgcmVzb2x2ZSBpdC5cbiAgICAgICAgICAgIHJldHVybiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoaW5pdChwYXlsb2FkKSwgc291cmNlLCBvd25lckZuKTtcbiAgICAgICAgICB9IGNhdGNoICh4KSB7fVxuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuXG52YXIgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcblxuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCkge1xuICB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuICAgICAgdmFyIHN0YWNrID0gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGVsZW1lbnQudHlwZSwgZWxlbWVudC5fc291cmNlLCBvd25lciA/IG93bmVyLnR5cGUgOiBudWxsKTtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMS5zZXRFeHRyYVN0YWNrRnJhbWUoc3RhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEuc2V0RXh0cmFTdGFja0ZyYW1lKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja1Byb3BUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24sIGNvbXBvbmVudE5hbWUsIGVsZW1lbnQpIHtcbiAge1xuICAgIC8vICRGbG93Rml4TWUgVGhpcyBpcyBva2F5IGJ1dCBGbG93IGRvZXNuJ3Qga25vdyBpdC5cbiAgICB2YXIgaGFzID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xuXG4gICAgZm9yICh2YXIgdHlwZVNwZWNOYW1lIGluIHR5cGVTcGVjcykge1xuICAgICAgaWYgKGhhcyh0eXBlU3BlY3MsIHR5cGVTcGVjTmFtZSkpIHtcbiAgICAgICAgdmFyIGVycm9yJDEgPSB2b2lkIDA7IC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXG4gICAgICAgIC8vIGZhaWwgdGhlIHJlbmRlciBwaGFzZSB3aGVyZSBpdCBkaWRuJ3QgZmFpbCBiZWZvcmUuIFNvIHdlIGxvZyBpdC5cbiAgICAgICAgLy8gQWZ0ZXIgdGhlc2UgaGF2ZSBiZWVuIGNsZWFuZWQgdXAsIHdlJ2xsIGxldCB0aGVtIHRocm93LlxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbGx5IGFuIGludmFyaWFudCB0aGF0IGdldHMgY2F1Z2h0LiBJdCdzIHRoZSBzYW1lXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYXMgd2l0aG91dCB0aGlzIHN0YXRlbWVudCBleGNlcHQgd2l0aCBhIGJldHRlciBtZXNzYWdlLlxuICAgICAgICAgIGlmICh0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHZhciBlcnIgPSBFcnJvcigoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6ICcgKyBsb2NhdGlvbiArICcgdHlwZSBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7ICcgKyAnaXQgbXVzdCBiZSBhIGZ1bmN0aW9uLCB1c3VhbGx5IGZyb20gdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLCBidXQgcmVjZWl2ZWQgYCcgKyB0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gKyAnYC4nICsgJ1RoaXMgb2Z0ZW4gaGFwcGVucyBiZWNhdXNlIG9mIHR5cG9zIHN1Y2ggYXMgYFByb3BUeXBlcy5mdW5jdGlvbmAgaW5zdGVhZCBvZiBgUHJvcFR5cGVzLmZ1bmNgLicpO1xuICAgICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZXJyb3IkMSA9IHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdKHZhbHVlcywgdHlwZVNwZWNOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgbnVsbCwgJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJyk7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgZXJyb3IkMSA9IGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yJDEgJiYgIShlcnJvciQxIGluc3RhbmNlb2YgRXJyb3IpKSB7XG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAgICAgICBlcnJvcignJXM6IHR5cGUgc3BlY2lmaWNhdGlvbiBvZiAlcycgKyAnIGAlc2AgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciAnICsgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICVzLiAnICsgJ1lvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gcGFzcyBhbiBhcmd1bWVudCB0byB0aGUgdHlwZSBjaGVja2VyICcgKyAnY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCAnICsgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nLCBjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycsIGxvY2F0aW9uLCB0eXBlU3BlY05hbWUsIHR5cGVvZiBlcnJvciQxKTtcblxuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yJDEgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yJDEubWVzc2FnZSBpbiBsb2dnZWRUeXBlRmFpbHVyZXMpKSB7XG4gICAgICAgICAgLy8gT25seSBtb25pdG9yIHRoaXMgZmFpbHVyZSBvbmNlIGJlY2F1c2UgdGhlcmUgdGVuZHMgdG8gYmUgYSBsb3Qgb2YgdGhlXG4gICAgICAgICAgLy8gc2FtZSBlcnJvci5cbiAgICAgICAgICBsb2dnZWRUeXBlRmFpbHVyZXNbZXJyb3IkMS5tZXNzYWdlXSA9IHRydWU7XG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAgICAgICBlcnJvcignRmFpbGVkICVzIHR5cGU6ICVzJywgbG9jYXRpb24sIGVycm9yJDEubWVzc2FnZSk7XG5cbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGVsZW1lbnQpIHtcbiAge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcbiAgICAgIHZhciBzdGFjayA9IGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihlbGVtZW50LnR5cGUsIGVsZW1lbnQuX3NvdXJjZSwgb3duZXIgPyBvd25lci50eXBlIDogbnVsbCk7XG4gICAgICBzZXRFeHRyYVN0YWNrRnJhbWUoc3RhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRFeHRyYVN0YWNrRnJhbWUobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbnZhciBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bjtcblxue1xuICBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKSB7XG4gIGlmIChSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50KSB7XG4gICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSk7XG5cbiAgICBpZiAobmFtZSkge1xuICAgICAgcmV0dXJuICdcXG5cXG5DaGVjayB0aGUgcmVuZGVyIG1ldGhvZCBvZiBgJyArIG5hbWUgKyAnYC4nO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAnJztcbn1cblxuZnVuY3Rpb24gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oc291cmNlKSB7XG4gIGlmIChzb3VyY2UgIT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBmaWxlTmFtZSA9IHNvdXJjZS5maWxlTmFtZS5yZXBsYWNlKC9eLipbXFxcXFxcL10vLCAnJyk7XG4gICAgdmFyIGxpbmVOdW1iZXIgPSBzb3VyY2UubGluZU51bWJlcjtcbiAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHlvdXIgY29kZSBhdCAnICsgZmlsZU5hbWUgKyAnOicgKyBsaW5lTnVtYmVyICsgJy4nO1xuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuXG5mdW5jdGlvbiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bUZvclByb3BzKGVsZW1lbnRQcm9wcykge1xuICBpZiAoZWxlbWVudFByb3BzICE9PSBudWxsICYmIGVsZW1lbnRQcm9wcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKGVsZW1lbnRQcm9wcy5fX3NvdXJjZSk7XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG4vKipcbiAqIFdhcm4gaWYgdGhlcmUncyBubyBrZXkgZXhwbGljaXRseSBzZXQgb24gZHluYW1pYyBhcnJheXMgb2YgY2hpbGRyZW4gb3JcbiAqIG9iamVjdCBrZXlzIGFyZSBub3QgdmFsaWQuIFRoaXMgYWxsb3dzIHVzIHRvIGtlZXAgdHJhY2sgb2YgY2hpbGRyZW4gYmV0d2VlblxuICogdXBkYXRlcy5cbiAqL1xuXG5cbnZhciBvd25lckhhc0tleVVzZVdhcm5pbmcgPSB7fTtcblxuZnVuY3Rpb24gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKSB7XG4gIHZhciBpbmZvID0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG5cbiAgaWYgKCFpbmZvKSB7XG4gICAgdmFyIHBhcmVudE5hbWUgPSB0eXBlb2YgcGFyZW50VHlwZSA9PT0gJ3N0cmluZycgPyBwYXJlbnRUeXBlIDogcGFyZW50VHlwZS5kaXNwbGF5TmFtZSB8fCBwYXJlbnRUeXBlLm5hbWU7XG5cbiAgICBpZiAocGFyZW50TmFtZSkge1xuICAgICAgaW5mbyA9IFwiXFxuXFxuQ2hlY2sgdGhlIHRvcC1sZXZlbCByZW5kZXIgY2FsbCB1c2luZyA8XCIgKyBwYXJlbnROYW1lICsgXCI+LlwiO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpbmZvO1xufVxuLyoqXG4gKiBXYXJuIGlmIHRoZSBlbGVtZW50IGRvZXNuJ3QgaGF2ZSBhbiBleHBsaWNpdCBrZXkgYXNzaWduZWQgdG8gaXQuXG4gKiBUaGlzIGVsZW1lbnQgaXMgaW4gYW4gYXJyYXkuIFRoZSBhcnJheSBjb3VsZCBncm93IGFuZCBzaHJpbmsgb3IgYmVcbiAqIHJlb3JkZXJlZC4gQWxsIGNoaWxkcmVuIHRoYXQgaGF2ZW4ndCBhbHJlYWR5IGJlZW4gdmFsaWRhdGVkIGFyZSByZXF1aXJlZCB0b1xuICogaGF2ZSBhIFwia2V5XCIgcHJvcGVydHkgYXNzaWduZWQgdG8gaXQuIEVycm9yIHN0YXR1c2VzIGFyZSBjYWNoZWQgc28gYSB3YXJuaW5nXG4gKiB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50IEVsZW1lbnQgdGhhdCByZXF1aXJlcyBhIGtleS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBlbGVtZW50J3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRXhwbGljaXRLZXkoZWxlbWVudCwgcGFyZW50VHlwZSkge1xuICBpZiAoIWVsZW1lbnQuX3N0b3JlIHx8IGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCB8fCBlbGVtZW50LmtleSAhPSBudWxsKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcbiAgdmFyIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8gPSBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpO1xuXG4gIGlmIChvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10pIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10gPSB0cnVlOyAvLyBVc3VhbGx5IHRoZSBjdXJyZW50IG93bmVyIGlzIHRoZSBvZmZlbmRlciwgYnV0IGlmIGl0IGFjY2VwdHMgY2hpbGRyZW4gYXMgYVxuICAvLyBwcm9wZXJ0eSwgaXQgbWF5IGJlIHRoZSBjcmVhdG9yIG9mIHRoZSBjaGlsZCB0aGF0J3MgcmVzcG9uc2libGUgZm9yXG4gIC8vIGFzc2lnbmluZyBpdCBhIGtleS5cblxuICB2YXIgY2hpbGRPd25lciA9ICcnO1xuXG4gIGlmIChlbGVtZW50ICYmIGVsZW1lbnQuX293bmVyICYmIGVsZW1lbnQuX293bmVyICE9PSBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50KSB7XG4gICAgLy8gR2l2ZSB0aGUgY29tcG9uZW50IHRoYXQgb3JpZ2luYWxseSBjcmVhdGVkIHRoaXMgY2hpbGQuXG4gICAgY2hpbGRPd25lciA9IFwiIEl0IHdhcyBwYXNzZWQgYSBjaGlsZCBmcm9tIFwiICsgZ2V0Q29tcG9uZW50TmFtZShlbGVtZW50Ll9vd25lci50eXBlKSArIFwiLlwiO1xuICB9XG5cbiAge1xuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZWxlbWVudCk7XG5cbiAgICBlcnJvcignRWFjaCBjaGlsZCBpbiBhIGxpc3Qgc2hvdWxkIGhhdmUgYSB1bmlxdWUgXCJrZXlcIiBwcm9wLicgKyAnJXMlcyBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3dhcm5pbmcta2V5cyBmb3IgbW9yZSBpbmZvcm1hdGlvbi4nLCBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvLCBjaGlsZE93bmVyKTtcblxuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gIH1cbn1cbi8qKlxuICogRW5zdXJlIHRoYXQgZXZlcnkgZWxlbWVudCBlaXRoZXIgaXMgcGFzc2VkIGluIGEgc3RhdGljIGxvY2F0aW9uLCBpbiBhblxuICogYXJyYXkgd2l0aCBhbiBleHBsaWNpdCBrZXlzIHByb3BlcnR5IGRlZmluZWQsIG9yIGluIGFuIG9iamVjdCBsaXRlcmFsXG4gKiB3aXRoIHZhbGlkIGtleSBwcm9wZXJ0eS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3ROb2RlfSBub2RlIFN0YXRpY2FsbHkgcGFzc2VkIGNoaWxkIG9mIGFueSB0eXBlLlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIG5vZGUncyBwYXJlbnQncyB0eXBlLlxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVDaGlsZEtleXMobm9kZSwgcGFyZW50VHlwZSkge1xuICBpZiAodHlwZW9mIG5vZGUgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkobm9kZSkpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGUubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjaGlsZCA9IG5vZGVbaV07XG5cbiAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShjaGlsZCwgcGFyZW50VHlwZSk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKGlzVmFsaWRFbGVtZW50KG5vZGUpKSB7XG4gICAgLy8gVGhpcyBlbGVtZW50IHdhcyBwYXNzZWQgaW4gYSB2YWxpZCBsb2NhdGlvbi5cbiAgICBpZiAobm9kZS5fc3RvcmUpIHtcbiAgICAgIG5vZGUuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gICAgfVxuICB9IGVsc2UgaWYgKG5vZGUpIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4obm9kZSk7XG5cbiAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIEVudHJ5IGl0ZXJhdG9ycyB1c2VkIHRvIHByb3ZpZGUgaW1wbGljaXQga2V5cyxcbiAgICAgIC8vIGJ1dCBub3cgd2UgcHJpbnQgYSBzZXBhcmF0ZSB3YXJuaW5nIGZvciB0aGVtIGxhdGVyLlxuICAgICAgaWYgKGl0ZXJhdG9yRm4gIT09IG5vZGUuZW50cmllcykge1xuICAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwobm9kZSk7XG4gICAgICAgIHZhciBzdGVwO1xuXG4gICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoc3RlcC52YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoc3RlcC52YWx1ZSwgcGFyZW50VHlwZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEdpdmVuIGFuIGVsZW1lbnQsIHZhbGlkYXRlIHRoYXQgaXRzIHByb3BzIGZvbGxvdyB0aGUgcHJvcFR5cGVzIGRlZmluaXRpb24sXG4gKiBwcm92aWRlZCBieSB0aGUgdHlwZS5cbiAqXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudFxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCkge1xuICB7XG4gICAgdmFyIHR5cGUgPSBlbGVtZW50LnR5cGU7XG5cbiAgICBpZiAodHlwZSA9PT0gbnVsbCB8fCB0eXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHByb3BUeXBlcztcblxuICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgLy8gTm90ZTogTWVtbyBvbmx5IGNoZWNrcyBvdXRlciBwcm9wcyBoZXJlLlxuICAgIC8vIElubmVyIHByb3BzIGFyZSBjaGVja2VkIGluIHRoZSByZWNvbmNpbGVyLlxuICAgIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSkpIHtcbiAgICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHByb3BUeXBlcykge1xuICAgICAgLy8gSW50ZW50aW9uYWxseSBpbnNpZGUgdG8gYXZvaWQgdHJpZ2dlcmluZyBsYXp5IGluaXRpYWxpemVyczpcbiAgICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKTtcbiAgICAgIGNoZWNrUHJvcFR5cGVzKHByb3BUeXBlcywgZWxlbWVudC5wcm9wcywgJ3Byb3AnLCBuYW1lLCBlbGVtZW50KTtcbiAgICB9IGVsc2UgaWYgKHR5cGUuUHJvcFR5cGVzICE9PSB1bmRlZmluZWQgJiYgIXByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duKSB7XG4gICAgICBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IHRydWU7IC8vIEludGVudGlvbmFsbHkgaW5zaWRlIHRvIGF2b2lkIHRyaWdnZXJpbmcgbGF6eSBpbml0aWFsaXplcnM6XG5cbiAgICAgIHZhciBfbmFtZSA9IGdldENvbXBvbmVudE5hbWUodHlwZSk7XG5cbiAgICAgIGVycm9yKCdDb21wb25lbnQgJXMgZGVjbGFyZWQgYFByb3BUeXBlc2AgaW5zdGVhZCBvZiBgcHJvcFR5cGVzYC4gRGlkIHlvdSBtaXNzcGVsbCB0aGUgcHJvcGVydHkgYXNzaWdubWVudD8nLCBfbmFtZSB8fCAnVW5rbm93bicpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdHlwZS5nZXREZWZhdWx0UHJvcHMgPT09ICdmdW5jdGlvbicgJiYgIXR5cGUuZ2V0RGVmYXVsdFByb3BzLmlzUmVhY3RDbGFzc0FwcHJvdmVkKSB7XG4gICAgICBlcnJvcignZ2V0RGVmYXVsdFByb3BzIGlzIG9ubHkgdXNlZCBvbiBjbGFzc2ljIFJlYWN0LmNyZWF0ZUNsYXNzICcgKyAnZGVmaW5pdGlvbnMuIFVzZSBhIHN0YXRpYyBwcm9wZXJ0eSBuYW1lZCBgZGVmYXVsdFByb3BzYCBpbnN0ZWFkLicpO1xuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhIGZyYWdtZW50LCB2YWxpZGF0ZSB0aGF0IGl0IGNhbiBvbmx5IGJlIHByb3ZpZGVkIHdpdGggZnJhZ21lbnQgcHJvcHNcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBmcmFnbWVudFxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVGcmFnbWVudFByb3BzKGZyYWdtZW50KSB7XG4gIHtcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGZyYWdtZW50LnByb3BzKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGtleSA9IGtleXNbaV07XG5cbiAgICAgIGlmIChrZXkgIT09ICdjaGlsZHJlbicgJiYga2V5ICE9PSAna2V5Jykge1xuICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGZyYWdtZW50KTtcblxuICAgICAgICBlcnJvcignSW52YWxpZCBwcm9wIGAlc2Agc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4gJyArICdSZWFjdC5GcmFnbWVudCBjYW4gb25seSBoYXZlIGBrZXlgIGFuZCBgY2hpbGRyZW5gIHByb3BzLicsIGtleSk7XG5cbiAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGZyYWdtZW50LnJlZiAhPT0gbnVsbCkge1xuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShmcmFnbWVudCk7XG5cbiAgICAgIGVycm9yKCdJbnZhbGlkIGF0dHJpYnV0ZSBgcmVmYCBzdXBwbGllZCB0byBgUmVhY3QuRnJhZ21lbnRgLicpO1xuXG4gICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudFdpdGhWYWxpZGF0aW9uKHR5cGUsIHByb3BzLCBjaGlsZHJlbikge1xuICB2YXIgdmFsaWRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpOyAvLyBXZSB3YXJuIGluIHRoaXMgY2FzZSBidXQgZG9uJ3QgdGhyb3cuIFdlIGV4cGVjdCB0aGUgZWxlbWVudCBjcmVhdGlvbiB0b1xuICAvLyBzdWNjZWVkIGFuZCB0aGVyZSB3aWxsIGxpa2VseSBiZSBlcnJvcnMgaW4gcmVuZGVyLlxuXG4gIGlmICghdmFsaWRUeXBlKSB7XG4gICAgdmFyIGluZm8gPSAnJztcblxuICAgIGlmICh0eXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgT2JqZWN0LmtleXModHlwZSkubGVuZ3RoID09PSAwKSB7XG4gICAgICBpbmZvICs9ICcgWW91IGxpa2VseSBmb3Jnb3QgdG8gZXhwb3J0IHlvdXIgY29tcG9uZW50IGZyb20gdGhlIGZpbGUgJyArIFwiaXQncyBkZWZpbmVkIGluLCBvciB5b3UgbWlnaHQgaGF2ZSBtaXhlZCB1cCBkZWZhdWx0IGFuZCBuYW1lZCBpbXBvcnRzLlwiO1xuICAgIH1cblxuICAgIHZhciBzb3VyY2VJbmZvID0gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW1Gb3JQcm9wcyhwcm9wcyk7XG5cbiAgICBpZiAoc291cmNlSW5mbykge1xuICAgICAgaW5mbyArPSBzb3VyY2VJbmZvO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbmZvICs9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuICAgIH1cblxuICAgIHZhciB0eXBlU3RyaW5nO1xuXG4gICAgaWYgKHR5cGUgPT09IG51bGwpIHtcbiAgICAgIHR5cGVTdHJpbmcgPSAnbnVsbCc7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHR5cGUpKSB7XG4gICAgICB0eXBlU3RyaW5nID0gJ2FycmF5JztcbiAgICB9IGVsc2UgaWYgKHR5cGUgIT09IHVuZGVmaW5lZCAmJiB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEUpIHtcbiAgICAgIHR5cGVTdHJpbmcgPSBcIjxcIiArIChnZXRDb21wb25lbnROYW1lKHR5cGUudHlwZSkgfHwgJ1Vua25vd24nKSArIFwiIC8+XCI7XG4gICAgICBpbmZvID0gJyBEaWQgeW91IGFjY2lkZW50YWxseSBleHBvcnQgYSBKU1ggbGl0ZXJhbCBpbnN0ZWFkIG9mIGEgY29tcG9uZW50Pyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHR5cGVTdHJpbmcgPSB0eXBlb2YgdHlwZTtcbiAgICB9XG5cbiAgICB7XG4gICAgICBlcnJvcignUmVhY3QuY3JlYXRlRWxlbWVudDogdHlwZSBpcyBpbnZhbGlkIC0tIGV4cGVjdGVkIGEgc3RyaW5nIChmb3IgJyArICdidWlsdC1pbiBjb21wb25lbnRzKSBvciBhIGNsYXNzL2Z1bmN0aW9uIChmb3IgY29tcG9zaXRlICcgKyAnY29tcG9uZW50cykgYnV0IGdvdDogJXMuJXMnLCB0eXBlU3RyaW5nLCBpbmZvKTtcbiAgICB9XG4gIH1cblxuICB2YXIgZWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgLy8gVGhlIHJlc3VsdCBjYW4gYmUgbnVsbGlzaCBpZiBhIG1vY2sgb3IgYSBjdXN0b20gZnVuY3Rpb24gaXMgdXNlZC5cbiAgLy8gVE9ETzogRHJvcCB0aGlzIHdoZW4gdGhlc2UgYXJlIG5vIGxvbmdlciBhbGxvd2VkIGFzIHRoZSB0eXBlIGFyZ3VtZW50LlxuXG4gIGlmIChlbGVtZW50ID09IG51bGwpIHtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfSAvLyBTa2lwIGtleSB3YXJuaW5nIGlmIHRoZSB0eXBlIGlzbid0IHZhbGlkIHNpbmNlIG91ciBrZXkgdmFsaWRhdGlvbiBsb2dpY1xuICAvLyBkb2Vzbid0IGV4cGVjdCBhIG5vbi1zdHJpbmcvZnVuY3Rpb24gdHlwZSBhbmQgY2FuIHRocm93IGNvbmZ1c2luZyBlcnJvcnMuXG4gIC8vIFdlIGRvbid0IHdhbnQgZXhjZXB0aW9uIGJlaGF2aW9yIHRvIGRpZmZlciBiZXR3ZWVuIGRldiBhbmQgcHJvZC5cbiAgLy8gKFJlbmRlcmluZyB3aWxsIHRocm93IHdpdGggYSBoZWxwZnVsIG1lc3NhZ2UgYW5kIGFzIHNvb24gYXMgdGhlIHR5cGUgaXNcbiAgLy8gZml4ZWQsIHRoZSBrZXkgd2FybmluZ3Mgd2lsbCBhcHBlYXIuKVxuXG5cbiAgaWYgKHZhbGlkVHlwZSkge1xuICAgIGZvciAodmFyIGkgPSAyOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YWxpZGF0ZUNoaWxkS2V5cyhhcmd1bWVudHNbaV0sIHR5cGUpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlID09PSBleHBvcnRzLkZyYWdtZW50KSB7XG4gICAgdmFsaWRhdGVGcmFnbWVudFByb3BzKGVsZW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG52YXIgZGlkV2FybkFib3V0RGVwcmVjYXRlZENyZWF0ZUZhY3RvcnkgPSBmYWxzZTtcbmZ1bmN0aW9uIGNyZWF0ZUZhY3RvcnlXaXRoVmFsaWRhdGlvbih0eXBlKSB7XG4gIHZhciB2YWxpZGF0ZWRGYWN0b3J5ID0gY3JlYXRlRWxlbWVudFdpdGhWYWxpZGF0aW9uLmJpbmQobnVsbCwgdHlwZSk7XG4gIHZhbGlkYXRlZEZhY3RvcnkudHlwZSA9IHR5cGU7XG5cbiAge1xuICAgIGlmICghZGlkV2FybkFib3V0RGVwcmVjYXRlZENyZWF0ZUZhY3RvcnkpIHtcbiAgICAgIGRpZFdhcm5BYm91dERlcHJlY2F0ZWRDcmVhdGVGYWN0b3J5ID0gdHJ1ZTtcblxuICAgICAgd2FybignUmVhY3QuY3JlYXRlRmFjdG9yeSgpIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiAnICsgJ2EgZnV0dXJlIG1ham9yIHJlbGVhc2UuIENvbnNpZGVyIHVzaW5nIEpTWCAnICsgJ29yIHVzZSBSZWFjdC5jcmVhdGVFbGVtZW50KCkgZGlyZWN0bHkgaW5zdGVhZC4nKTtcbiAgICB9IC8vIExlZ2FjeSBob29rOiByZW1vdmUgaXRcblxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHZhbGlkYXRlZEZhY3RvcnksICd0eXBlJywge1xuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2FybignRmFjdG9yeS50eXBlIGlzIGRlcHJlY2F0ZWQuIEFjY2VzcyB0aGUgY2xhc3MgZGlyZWN0bHkgJyArICdiZWZvcmUgcGFzc2luZyBpdCB0byBjcmVhdGVGYWN0b3J5LicpO1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAndHlwZScsIHtcbiAgICAgICAgICB2YWx1ZTogdHlwZVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gdmFsaWRhdGVkRmFjdG9yeTtcbn1cbmZ1bmN0aW9uIGNsb25lRWxlbWVudFdpdGhWYWxpZGF0aW9uKGVsZW1lbnQsIHByb3BzLCBjaGlsZHJlbikge1xuICB2YXIgbmV3RWxlbWVudCA9IGNsb25lRWxlbWVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gIGZvciAodmFyIGkgPSAyOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFsaWRhdGVDaGlsZEtleXMoYXJndW1lbnRzW2ldLCBuZXdFbGVtZW50LnR5cGUpO1xuICB9XG5cbiAgdmFsaWRhdGVQcm9wVHlwZXMobmV3RWxlbWVudCk7XG4gIHJldHVybiBuZXdFbGVtZW50O1xufVxuXG57XG5cbiAgdHJ5IHtcbiAgICB2YXIgZnJvemVuT2JqZWN0ID0gT2JqZWN0LmZyZWV6ZSh7fSk7XG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tbmV3ICovXG5cbiAgICBuZXcgTWFwKFtbZnJvemVuT2JqZWN0LCBudWxsXV0pO1xuICAgIG5ldyBTZXQoW2Zyb3plbk9iamVjdF0pO1xuICAgIC8qIGVzbGludC1lbmFibGUgbm8tbmV3ICovXG4gIH0gY2F0Y2ggKGUpIHtcbiAgfVxufVxuXG52YXIgY3JlYXRlRWxlbWVudCQxID0gIGNyZWF0ZUVsZW1lbnRXaXRoVmFsaWRhdGlvbiA7XG52YXIgY2xvbmVFbGVtZW50JDEgPSAgY2xvbmVFbGVtZW50V2l0aFZhbGlkYXRpb24gO1xudmFyIGNyZWF0ZUZhY3RvcnkgPSAgY3JlYXRlRmFjdG9yeVdpdGhWYWxpZGF0aW9uIDtcbnZhciBDaGlsZHJlbiA9IHtcbiAgbWFwOiBtYXBDaGlsZHJlbixcbiAgZm9yRWFjaDogZm9yRWFjaENoaWxkcmVuLFxuICBjb3VudDogY291bnRDaGlsZHJlbixcbiAgdG9BcnJheTogdG9BcnJheSxcbiAgb25seTogb25seUNoaWxkXG59O1xuXG5leHBvcnRzLkNoaWxkcmVuID0gQ2hpbGRyZW47XG5leHBvcnRzLkNvbXBvbmVudCA9IENvbXBvbmVudDtcbmV4cG9ydHMuUHVyZUNvbXBvbmVudCA9IFB1cmVDb21wb25lbnQ7XG5leHBvcnRzLl9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEID0gUmVhY3RTaGFyZWRJbnRlcm5hbHM7XG5leHBvcnRzLmNsb25lRWxlbWVudCA9IGNsb25lRWxlbWVudCQxO1xuZXhwb3J0cy5jcmVhdGVDb250ZXh0ID0gY3JlYXRlQ29udGV4dDtcbmV4cG9ydHMuY3JlYXRlRWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQkMTtcbmV4cG9ydHMuY3JlYXRlRmFjdG9yeSA9IGNyZWF0ZUZhY3Rvcnk7XG5leHBvcnRzLmNyZWF0ZVJlZiA9IGNyZWF0ZVJlZjtcbmV4cG9ydHMuZm9yd2FyZFJlZiA9IGZvcndhcmRSZWY7XG5leHBvcnRzLmlzVmFsaWRFbGVtZW50ID0gaXNWYWxpZEVsZW1lbnQ7XG5leHBvcnRzLmxhenkgPSBsYXp5O1xuZXhwb3J0cy5tZW1vID0gbWVtbztcbmV4cG9ydHMudXNlQ2FsbGJhY2sgPSB1c2VDYWxsYmFjaztcbmV4cG9ydHMudXNlQ29udGV4dCA9IHVzZUNvbnRleHQ7XG5leHBvcnRzLnVzZURlYnVnVmFsdWUgPSB1c2VEZWJ1Z1ZhbHVlO1xuZXhwb3J0cy51c2VFZmZlY3QgPSB1c2VFZmZlY3Q7XG5leHBvcnRzLnVzZUltcGVyYXRpdmVIYW5kbGUgPSB1c2VJbXBlcmF0aXZlSGFuZGxlO1xuZXhwb3J0cy51c2VMYXlvdXRFZmZlY3QgPSB1c2VMYXlvdXRFZmZlY3Q7XG5leHBvcnRzLnVzZU1lbW8gPSB1c2VNZW1vO1xuZXhwb3J0cy51c2VSZWR1Y2VyID0gdXNlUmVkdWNlcjtcbmV4cG9ydHMudXNlUmVmID0gdXNlUmVmO1xuZXhwb3J0cy51c2VTdGF0ZSA9IHVzZVN0YXRlO1xuZXhwb3J0cy52ZXJzaW9uID0gUmVhY3RWZXJzaW9uO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtanN4LWRldi1ydW50aW1lLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWpzeC1kZXYtcnVudGltZS5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9zcGxpZGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJzcGxpZGUtbmV4dGpzL3NwbGlkZVwiKSk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5cbnZhciBfZXZlbnRzID0gcmVxdWlyZShcIi4uL2NvbnN0YW50cy9ldmVudHNcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFJlZmxlY3QuY29uc3RydWN0KERhdGUsIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbi8qKlxuICogVGhlIGNsYXNzIGZvciB0aGUgU3BsaWRlIGNvbXBvbmVudC5cbiAqL1xudmFyIFNwbGlkZSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoU3BsaWRlLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKFNwbGlkZSk7XG5cbiAgLyoqXG4gICAqIFNwbGlkZSBjb25zdHJ1Y3Rvci5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9ICAgcHJvcHMgICAgICAgICAgICAgICAgICAgICAtIFByb3BzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gICBwcm9wcy5pZCAgICAgICAgICAgICAgICAgIC0gT3B0aW9uYWwuIElkIGF0dHJpYnV0ZSBmb3IgdGhlIHJvb3QgZWxlbWVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9ICAgcHJvcHMuY2xhc3NOYW1lICAgICAgICAgICAtIE9wdGlvbmFsLiBBZGRpdGlvbmFsIGNsYXNzIG5hbWUgZm9yIHRoZSByb290IGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gIHByb3BzLmhhc1NsaWRlcldyYXBwZXIgICAgLSBPcHRpb25hbC4gV2hldGhlciB0byB3cmFwIGEgdHJhY2sgYnkgYSBzbGlkZXIgZWxlbWVudC5cbiAgICogQHBhcmFtIHtib29sZWFufSAgcHJvcHMuaGFzQXV0b3BsYXlQcm9ncmVzcyAtIE9wdGlvbmFsLiBXaGV0aGVyIHRvIHJlbmRlciBwcm9ncmVzcyBiYXIgZm9yIGF1dG9wbGF5LlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59ICBwcm9wcy5oYXNBdXRvcGxheUNvbnRyb2xzIC0gT3B0aW9uYWwuIFdoZXRoZXIgdG8gcmVuZGVyIHBsYXkvcGF1c2UgYnV0dG9uIGZvciBhdXRvcGxheS5cbiAgICogQHBhcmFtIHtzdHJpbmd9ICAgcHJvcHMucGxheUJ1dHRvbkxhYmVsICAgICAtIE9wdGlvbmFsLiBUaGUgbGFiZWwgZm9yIHRoZSBwbGF5IGJ1dHRvbi5cbiAgICogQHBhcmFtIHtzdHJpbmd9ICAgcHJvcHMucGF1c2VCdXR0b25MYWJlbCAgICAtIE9wdGlvbmFsLiBUaGUgbGFiZWwgZm9yIHRoZSBwYXVzZSBidXR0b24uXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IHByb3BzLnJlbmRlckNvbnRyb2xzICAgICAgLSBPcHRpb25hbC4gQSBmdW5jdGlvbiB0byByZW5kZXIgY3VzdG9tIGNvbnRyb2xzLlxuICAgKi9cbiAgZnVuY3Rpb24gU3BsaWRlKHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNwbGlkZSk7XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHByb3BzKTtcbiAgICBfdGhpcy5zcGxpZGVSZWYgPSAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVSZWYoKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgU3BsaWRlIHJpZ2h0IGFmdGVyIHRoZSBjb21wb25lbnQgaXMgbW91bnRlZC5cbiAgICovXG5cblxuICBfY3JlYXRlQ2xhc3MoU3BsaWRlLCBbe1xuICAgIGtleTogXCJjb21wb25lbnREaWRNb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgX3RoaXMkcHJvcHMkb3B0aW9ucyA9IF90aGlzJHByb3BzLm9wdGlvbnMsXG4gICAgICAgICAgb3B0aW9ucyA9IF90aGlzJHByb3BzJG9wdGlvbnMgPT09IHZvaWQgMCA/IHt9IDogX3RoaXMkcHJvcHMkb3B0aW9ucyxcbiAgICAgICAgICBfdGhpcyRwcm9wcyRFeHRlbnNpb24gPSBfdGhpcyRwcm9wcy5FeHRlbnNpb25zLFxuICAgICAgICAgIEV4dGVuc2lvbnMgPSBfdGhpcyRwcm9wcyRFeHRlbnNpb24gPT09IHZvaWQgMCA/IHt9IDogX3RoaXMkcHJvcHMkRXh0ZW5zaW9uLFxuICAgICAgICAgIF90aGlzJHByb3BzJFRyYW5zaXRpbyA9IF90aGlzJHByb3BzLlRyYW5zaXRpb24sXG4gICAgICAgICAgVHJhbnNpdGlvbiA9IF90aGlzJHByb3BzJFRyYW5zaXRpbyA9PT0gdm9pZCAwID8gbnVsbCA6IF90aGlzJHByb3BzJFRyYW5zaXRpbztcbiAgICAgIHRoaXMuc3BsaWRlID0gbmV3IF9zcGxpZGVbXCJkZWZhdWx0XCJdKHRoaXMuc3BsaWRlUmVmLmN1cnJlbnQsIG9wdGlvbnMpO1xuICAgICAgdGhpcy5zcGxpZGUubW91bnQoRXh0ZW5zaW9ucywgVHJhbnNpdGlvbik7XG4gICAgICB0aGlzLmJpbmQoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRGVzdHJveSB0aGUgc3BsaWRlIGluc3RhbmNlIGp1c3QgYmVmb3JlIHRoZSBjb21wb25lbnQgaXMgdW5tb3VudGVkLlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50V2lsbFVubW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICBpZiAodGhpcy5zcGxpZGUpIHtcbiAgICAgICAgdGhpcy5zcGxpZGUuZGVzdHJveSgpO1xuICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZW1vdW50IHRoZSBzcGxpZGUgd2hlbiB0aGUgY29tcG9uZW50IGlzIHVwZGF0ZWQuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJjb21wb25lbnREaWRVcGRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgdGhpcy5zcGxpZGUucmVmcmVzaCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZWdpc3RlciBoYW5kbGVycyB0byBTcGxpZGUgZXZlbnRzLlxuICAgICAqIEFsbCBldmVudCBuYW1lcyBhcmUgY29udmVydGVkIHRvIFwib24gKyBjYW1lbGNhc2VcIiB3aXRob3V0IGNvbG9uLlxuICAgICAqIEZvciBleGFtcGxlLCBhcnJvd3M6bW91bnRlZCB3aWxsIGJlIG9uQXJyb3dzTW91bnRlZC5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImJpbmRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYmluZCgpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICBfZXZlbnRzLkVWRU5UUy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIgaGFuZGxlciA9ICdvbicgKyBldmVudC5zcGxpdCgnOicpLm1hcChmdW5jdGlvbiAoZnJhZ21lbnQpIHtcbiAgICAgICAgICByZXR1cm4gZnJhZ21lbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBmcmFnbWVudC5zbGljZSgxKTtcbiAgICAgICAgfSkuam9pbignJyk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBfdGhpczIucHJvcHNbaGFuZGxlcl0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBfdGhpczIuc3BsaWRlLm9uKGV2ZW50LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMyJHByb3BzO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgKF90aGlzMiRwcm9wcyA9IF90aGlzMi5wcm9wcylbaGFuZGxlcl0uYXBwbHkoX3RoaXMyJHByb3BzLCBbX3RoaXMyLnNwbGlkZV0uY29uY2F0KGFyZ3MpKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFN5bmMgdG8gdGhlIGdpdmVuIHNwbGlkZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3BsaWRlfSBzcGxpZGUgLSBTcGxpZGUgaW5zdGFuY2UuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJzeW5jXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN5bmMoc3BsaWRlKSB7XG4gICAgICBpZiAodGhpcy5zcGxpZGUpIHtcbiAgICAgICAgdGhpcy5zcGxpZGUuc3luYyhzcGxpZGUpO1xuICAgICAgICB0aGlzLnJlbW91bnQoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVtb3VudCB0aGUgc3BsaWRlLlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicmVtb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdW50KCkge1xuICAgICAgaWYgKHRoaXMuc3BsaWRlKSB7XG4gICAgICAgIHRoaXMuc3BsaWRlLmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy5zcGxpZGUubW91bnQoKTtcbiAgICAgICAgdGhpcy5iaW5kKCk7XG4gICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlbmRlciB0aGUgdHJhY2sgZWxlbWVudC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1JlYWN0Tm9kZX1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclRyYWNrXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlclRyYWNrKCkge1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9fcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBjbGFzc05hbWU6IFwic3BsaWRlX190cmFja1wiXG4gICAgICB9LCAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwidWxcIiwge1xuICAgICAgICBjbGFzc05hbWU6IFwic3BsaWRlX19saXN0XCJcbiAgICAgIH0sIHRoaXMucHJvcHMuY2hpbGRyZW4pKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVuZGVyIHRoZSBjb21wb25lbnQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtSZWFjdE5vZGV9IC0gUmVhY3QgY29tcG9uZW50LlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGlkID0gX3RoaXMkcHJvcHMyLmlkLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IF90aGlzJHByb3BzMi5jbGFzc05hbWUsXG4gICAgICAgICAgaGFzU2xpZGVyV3JhcHBlciA9IF90aGlzJHByb3BzMi5oYXNTbGlkZXJXcmFwcGVyLFxuICAgICAgICAgIGhhc0F1dG9wbGF5UHJvZ3Jlc3MgPSBfdGhpcyRwcm9wczIuaGFzQXV0b3BsYXlQcm9ncmVzcyxcbiAgICAgICAgICBoYXNBdXRvcGxheUNvbnRyb2xzID0gX3RoaXMkcHJvcHMyLmhhc0F1dG9wbGF5Q29udHJvbHMsXG4gICAgICAgICAgX3RoaXMkcHJvcHMyJHBsYXlCdXR0ID0gX3RoaXMkcHJvcHMyLnBsYXlCdXR0b25MYWJlbCxcbiAgICAgICAgICBwbGF5QnV0dG9uTGFiZWwgPSBfdGhpcyRwcm9wczIkcGxheUJ1dHQgPT09IHZvaWQgMCA/ICdQbGF5JyA6IF90aGlzJHByb3BzMiRwbGF5QnV0dCxcbiAgICAgICAgICBfdGhpcyRwcm9wczIkcGF1c2VCdXQgPSBfdGhpcyRwcm9wczIucGF1c2VCdXR0b25MYWJlbCxcbiAgICAgICAgICBwYXVzZUJ1dHRvbkxhYmVsID0gX3RoaXMkcHJvcHMyJHBhdXNlQnV0ID09PSB2b2lkIDAgPyAnUGF1c2UnIDogX3RoaXMkcHJvcHMyJHBhdXNlQnV0LFxuICAgICAgICAgIF90aGlzJHByb3BzMiRyZW5kZXJDbyA9IF90aGlzJHByb3BzMi5yZW5kZXJDb250cm9scyxcbiAgICAgICAgICByZW5kZXJDb250cm9scyA9IF90aGlzJHByb3BzMiRyZW5kZXJDbyA9PT0gdm9pZCAwID8gX3V0aWxzLm5vb3AgOiBfdGhpcyRwcm9wczIkcmVuZGVyQ287XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL19yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGlkOiBpZCxcbiAgICAgICAgY2xhc3NOYW1lOiAoMCwgX3V0aWxzLmNsYXNzTmFtZXMpKCdzcGxpZGUnLCBjbGFzc05hbWUpLFxuICAgICAgICByZWY6IHRoaXMuc3BsaWRlUmVmXG4gICAgICB9LCBoYXNTbGlkZXJXcmFwcGVyICYmIC8qI19fUFVSRV9fKi9fcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBjbGFzc05hbWU6IFwic3BsaWRlX19zbGlkZXJcIlxuICAgICAgfSwgdGhpcy5yZW5kZXJUcmFjaygpKSwgIWhhc1NsaWRlcldyYXBwZXIgJiYgdGhpcy5yZW5kZXJUcmFjaygpLCBoYXNBdXRvcGxheVByb2dyZXNzICYmIC8qI19fUFVSRV9fKi9fcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBjbGFzc05hbWU6IFwic3BsaWRlX19wcm9ncmVzc1wiXG4gICAgICB9LCAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBcInNwbGlkZV9fcHJvZ3Jlc3NfX2JhclwiXG4gICAgICB9KSksIGhhc0F1dG9wbGF5Q29udHJvbHMgJiYgLyojX19QVVJFX18qL19yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJzcGxpZGVfX2F1dG9wbGF5XCJcbiAgICAgIH0sIC8qI19fUFVSRV9fKi9fcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwge1xuICAgICAgICBjbGFzc05hbWU6IFwic3BsaWRlX19wbGF5XCJcbiAgICAgIH0sIHBsYXlCdXR0b25MYWJlbCksIC8qI19fUFVSRV9fKi9fcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwge1xuICAgICAgICBjbGFzc05hbWU6IFwic3BsaWRlX19wYXVzZVwiXG4gICAgICB9LCBwYXVzZUJ1dHRvbkxhYmVsKSksIHJlbmRlckNvbnRyb2xzKCkpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBTcGxpZGU7XG59KF9yZWFjdFtcImRlZmF1bHRcIl0uQ29tcG9uZW50KTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBTcGxpZGU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbi8qKlxyXG4gKiBUaGUgY29tcG9uZW50IGZvciBlYWNoIHNsaWRlLlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgIE5hb3Rvc2hpIEZ1aml0YVxyXG4gKiBAY29weXJpZ2h0IE5hb3Rvc2hpIEZ1aml0YS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICovXG5cbi8qKlxyXG4gKiBUaGUgY29tcG9uZW50IGZvciBlYWNoIHNsaWRlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHMgLSBQcm9wcy5cclxuICovXG52YXIgX2RlZmF1bHQgPSBmdW5jdGlvbiBfZGVmYXVsdChfcmVmKSB7XG4gIHZhciBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW4sXG4gICAgICBjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9fcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7XG4gICAgY2xhc3NOYW1lOiAoMCwgX3V0aWxzLmNsYXNzTmFtZXMpKCdzcGxpZGVfX3NsaWRlJywgY2xhc3NOYW1lKVxuICB9LCBjaGlsZHJlbik7XG59O1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5FVkVOVFMgPSB2b2lkIDA7XG5cbi8qKlxyXG4gKiBFeHBvcnQgZXZlbnQgbGlzdC5cclxuICpcclxuICogQGF1dGhvciAgICBOYW90b3NoaSBGdWppdGFcclxuICogQGNvcHlyaWdodCBOYW90b3NoaSBGdWppdGEuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqL1xudmFyIEVWRU5UUyA9IFsnbW91bnRlZCcsICd1cGRhdGVkJywgJ21vdmUnLCAnbW92ZWQnLCAnZHJhZycsICdkcmFnZ2VkJywgJ3Zpc2libGUnLCAnaGlkZGVuJywgJ2FjdGl2ZScsICdpbmFjdGl2ZScsICdjbGljaycsICdhcnJvd3M6bW91bnRlZCcsICdhcnJvd3M6dXBkYXRlZCcsICdwYWdpbmF0aW9uOm1vdW50ZWQnLCAncGFnaW5hdGlvbjp1cGRhdGVkJywgJ25hdmlnYXRpb246bW91bnRlZCcsICdhdXRvcGxheTpwbGF5JywgJ2F1dG9wbGF5OnBhdXNlJywgJ2F1dG9wbGF5OnBsYXlpbmcnLCAnbGF6eWxvYWQ6bG9hZGVkJ107XG5leHBvcnRzLkVWRU5UUyA9IEVWRU5UUzsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlNwbGlkZVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfU3BsaWRlW1wiZGVmYXVsdFwiXTtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJTcGxpZGVTbGlkZVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfU3BsaWRlU2xpZGVbXCJkZWZhdWx0XCJdO1xuICB9XG59KTtcblxudmFyIF9TcGxpZGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2NvbXBvbmVudHMvU3BsaWRlXCIpKTtcblxudmFyIF9TcGxpZGVTbGlkZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vY29tcG9uZW50cy9TcGxpZGVTbGlkZVwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5ub29wID0gbm9vcDtcbmV4cG9ydHMuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuLyoqXHJcbiAqIFV0aWxpdHkgZnVuY3Rpb25zLlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgIE5hb3Rvc2hpIEZ1aml0YVxyXG4gKiBAY29weXJpZ2h0IE5hb3Rvc2hpIEZ1aml0YS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICovXG5cbi8qKlxyXG4gKiBObyBvcGVyYXRpb24uXHJcbiAqL1xuZnVuY3Rpb24gbm9vcCgpIHt9XG4vKipcclxuICogSm9pbiBjbGFzcyBuYW1lcyB3aXRoL3dpdGhvdXQgY29uZGl0aW9uLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IGFyZ3MgLSBBIGNsYXNzIG5hbWUgaXRzZWxmIG9yIHsgY2xhc3NOYW1lOiBjb25kaXRpb24gfSBvYmplY3QuXHJcbiAqL1xuXG5cbmZ1bmN0aW9uIGNsYXNzTmFtZXMoKSB7XG4gIHZhciBuYW1lcyA9IFtdO1xuXG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICBhcmdzLmZvckVhY2goZnVuY3Rpb24gKGNsYXNzTmFtZSkge1xuICAgIGlmICghY2xhc3NOYW1lKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjbGFzc05hbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBuYW1lcy5wdXNoKGNsYXNzTmFtZSk7XG4gICAgfSBlbHNlIGlmIChfdHlwZW9mKGNsYXNzTmFtZSkgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyhjbGFzc05hbWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBpZiAoY2xhc3NOYW1lW2tleV0pIHtcbiAgICAgICAgICBuYW1lcy5wdXNoKGtleSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBuYW1lcy5qb2luKCcgJyk7XG59IiwiLyohXG4gKiBTcGxpZGUuanNcbiAqIFZlcnNpb24gIDogMi40LjIwXG4gKiBMaWNlbnNlICA6IE1JVFxuICogQ29weXJpZ2h0OiAyMDIwIE5hb3Rvc2hpIEZ1aml0YVxuICovXG4oZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJTcGxpZGVcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiU3BsaWRlXCJdID0gZmFjdG9yeSgpO1xufSkoc2VsZiwgZnVuY3Rpb24oKSB7XG5yZXR1cm4gLyoqKioqKi8gKCgpID0+IHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHRcInVzZSBzdHJpY3RcIjtcbi8qKioqKiovIFx0dmFyIF9fd2VicGFja19tb2R1bGVzX18gPSAoe1xuXG4vKioqLyAzMTE6XG4vKioqLyAoKF9fdW51c2VkX3dlYnBhY2tfbW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSA9PiB7XG5cbi8vIEVTTSBDT01QQVQgRkxBR1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuXG4vLyBFWFBPUlRTXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywge1xuICBcImRlZmF1bHRcIjogKCkgPT4gLyogYmluZGluZyAqLyBtb2R1bGVfU3BsaWRlXG59KTtcblxuLy8gTkFNRVNQQUNFIE9CSkVDVDogLi9zcmMvanMvY29uc3RhbnRzL3N0YXRlcy5qc1xudmFyIHN0YXRlc19uYW1lc3BhY2VPYmplY3QgPSB7fTtcbl9fd2VicGFja19yZXF1aXJlX18ucihzdGF0ZXNfbmFtZXNwYWNlT2JqZWN0KTtcbl9fd2VicGFja19yZXF1aXJlX18uZChzdGF0ZXNfbmFtZXNwYWNlT2JqZWN0LCB7XG4gIFwiQ1JFQVRFRFwiOiAoKSA9PiBDUkVBVEVELFxuICBcIkRFU1RST1lFRFwiOiAoKSA9PiBERVNUUk9ZRUQsXG4gIFwiSURMRVwiOiAoKSA9PiBJRExFLFxuICBcIk1PVU5URURcIjogKCkgPT4gTU9VTlRFRCxcbiAgXCJNT1ZJTkdcIjogKCkgPT4gTU9WSU5HXG59KTtcblxuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2pzL2NvcmUvZXZlbnQuanNcbi8qKlxyXG4gKiBUaGUgZnVuY3Rpb24gZm9yIHByb3ZpZGluZyBhbiBFdmVudCBvYmplY3Qgc2ltcGx5IG1hbmFnaW5nIGV2ZW50cy5cclxuICpcclxuICogQGF1dGhvciAgICBOYW90b3NoaSBGdWppdGFcclxuICogQGNvcHlyaWdodCBOYW90b3NoaSBGdWppdGEuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqL1xuXG4vKipcclxuICogVGhlIGZ1bmN0aW9uIGZvciBwcm92aWRpbmcgYW4gRXZlbnQgb2JqZWN0IHNpbXBseSBtYW5hZ2luZyBldmVudHMuXHJcbiAqL1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBjb25zdCBjb3JlX2V2ZW50ID0gKGZ1bmN0aW9uICgpIHtcbiAgLyoqXHJcbiAgICogU3RvcmUgYWxsIGV2ZW50IGRhdGEuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7QXJyYXl9XHJcbiAgICovXG4gIHZhciBkYXRhID0gW107XG4gIHZhciBFdmVudCA9IHtcbiAgICAvKipcclxuICAgICAqIFN1YnNjcmliZSB0aGUgZ2l2ZW4gZXZlbnQocykuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9ICAgZXZlbnRzICAtIEFuIGV2ZW50IG5hbWUuIFVzZSBzcGFjZSB0byBzZXBhcmF0ZSBtdWx0aXBsZSBldmVudHMuXHJcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWxzbywgbmFtZXNwYWNlIGlzIGFjY2VwdGVkIGJ5IGRvdCwgc3VjaCBhcyAncmVzaXplLntuYW1lc3BhY2V9Jy5cclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGhhbmRsZXIgLSBBIGNhbGxiYWNrIGZ1bmN0aW9uLlxyXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSAgZWxtICAgICAtIE9wdGlvbmFsLiBOYXRpdmUgZXZlbnQgd2lsbCBiZSBsaXN0ZW5lZCB0byB3aGVuIHRoaXMgYXJnIGlzIHByb3ZpZGVkLlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9ICAgb3B0aW9ucyAtIE9wdGlvbmFsLiBPcHRpb25zIGZvciBhZGRFdmVudExpc3RlbmVyLlxyXG4gICAgICovXG4gICAgb246IGZ1bmN0aW9uIG9uKGV2ZW50cywgaGFuZGxlciwgZWxtLCBvcHRpb25zKSB7XG4gICAgICBpZiAoZWxtID09PSB2b2lkIDApIHtcbiAgICAgICAgZWxtID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgICAgICBvcHRpb25zID0ge307XG4gICAgICB9XG5cbiAgICAgIGV2ZW50cy5zcGxpdCgnICcpLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGlmIChlbG0pIHtcbiAgICAgICAgICBlbG0uYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlciwgb3B0aW9ucyk7XG4gICAgICAgIH1cblxuICAgICAgICBkYXRhLnB1c2goe1xuICAgICAgICAgIGV2ZW50OiBldmVudCxcbiAgICAgICAgICBoYW5kbGVyOiBoYW5kbGVyLFxuICAgICAgICAgIGVsbTogZWxtLFxuICAgICAgICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBVbnN1YnNjcmliZSB0aGUgZ2l2ZW4gZXZlbnQocykuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9ICBldmVudHMgLSBBIGV2ZW50IG5hbWUgb3IgbmFtZXMgc3BsaXQgYnkgc3BhY2UuXHJcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsbSAgICAtIE9wdGlvbmFsLiByZW1vdmVFdmVudExpc3RlbmVyKCkgd2lsbCBiZSBjYWxsZWQgd2hlbiB0aGlzIGFyZyBpcyBwcm92aWRlZC5cclxuICAgICAqL1xuICAgIG9mZjogZnVuY3Rpb24gb2ZmKGV2ZW50cywgZWxtKSB7XG4gICAgICBpZiAoZWxtID09PSB2b2lkIDApIHtcbiAgICAgICAgZWxtID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgZXZlbnRzLnNwbGl0KCcgJykuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgZGF0YSA9IGRhdGEuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgaWYgKGl0ZW0gJiYgaXRlbS5ldmVudCA9PT0gZXZlbnQgJiYgaXRlbS5lbG0gPT09IGVsbSkge1xuICAgICAgICAgICAgdW5zdWJzY3JpYmUoaXRlbSk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogRW1pdCBhbiBldmVudC5cclxuICAgICAqIFRoaXMgbWV0aG9kIGlzIG9ubHkgZm9yIGN1c3RvbSBldmVudHMuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9ICBldmVudCAtIEFuIGV2ZW50IG5hbWUuXHJcbiAgICAgKiBAcGFyYW0geyp9ICAgICAgIGFyZ3MgIC0gQW55IG51bWJlciBvZiBhcmd1bWVudHMgcGFzc2VkIHRvIGhhbmRsZXJzLlxyXG4gICAgICovXG4gICAgZW1pdDogZnVuY3Rpb24gZW1pdChldmVudCkge1xuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgZGF0YS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIGlmICghaXRlbS5lbG0gJiYgaXRlbS5ldmVudC5zcGxpdCgnLicpWzBdID09PSBldmVudCkge1xuICAgICAgICAgIGl0ZW0uaGFuZGxlci5hcHBseShpdGVtLCBhcmdzKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogQ2xlYXIgZXZlbnQgZGF0YS5cclxuICAgICAqL1xuICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICBkYXRhLmZvckVhY2godW5zdWJzY3JpYmUpO1xuICAgICAgZGF0YSA9IFtdO1xuICAgIH1cbiAgfTtcbiAgLyoqXHJcbiAgICogUmVtb3ZlIHRoZSByZWdpc3RlcmVkIGV2ZW50IGxpc3RlbmVyLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGl0ZW0gLSBBbiBvYmplY3QgY29udGFpbmluZyBldmVudCBkYXRhLlxyXG4gICAqL1xuXG4gIGZ1bmN0aW9uIHVuc3Vic2NyaWJlKGl0ZW0pIHtcbiAgICBpZiAoaXRlbS5lbG0pIHtcbiAgICAgIGl0ZW0uZWxtLnJlbW92ZUV2ZW50TGlzdGVuZXIoaXRlbS5ldmVudCwgaXRlbS5oYW5kbGVyLCBpdGVtLm9wdGlvbnMpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBFdmVudDtcbn0pO1xuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2pzL2NvcmUvc3RhdGUuanNcbi8qKlxyXG4gKiBUaGUgZnVuY3Rpb24gcHJvdmlkaW5nIGEgc3VwZXIgc2ltcGxlIHN0YXRlIHN5c3RlbS5cclxuICpcclxuICogQGF1dGhvciAgICBOYW90b3NoaSBGdWppdGFcclxuICogQGNvcHlyaWdodCBOYW90b3NoaSBGdWppdGEuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqL1xuXG4vKipcclxuICogVGhlIGZ1bmN0aW9uIHByb3ZpZGluZyBhIHN1cGVyIHNpbXBsZSBzdGF0ZSBzeXN0ZW0uXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gaW5pdGlhbFN0YXRlIC0gUHJvdmlkZSB0aGUgaW5pdGlhbCBzdGF0ZSB2YWx1ZS5cclxuICovXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIGNvbnN0IHN0YXRlID0gKGZ1bmN0aW9uIChpbml0aWFsU3RhdGUpIHtcbiAgLyoqXHJcbiAgICogU3RvcmUgdGhlIGN1cnJlbnQgc3RhdGUuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7c3RyaW5nfG51bWJlcn1cclxuICAgKi9cbiAgdmFyIGN1cnIgPSBpbml0aWFsU3RhdGU7XG4gIHJldHVybiB7XG4gICAgLyoqXHJcbiAgICAgKiBDaGFuZ2Ugc3RhdGUuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBzdGF0ZSAtIEEgbmV3IHN0YXRlLlxyXG4gICAgICovXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQoc3RhdGUpIHtcbiAgICAgIGN1cnIgPSBzdGF0ZTtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBWZXJpZnkgaWYgdGhlIGN1cnJlbnQgc3RhdGUgaXMgZ2l2ZW4gb25lIG9yIG5vdC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IHN0YXRlIC0gQSBzdGF0ZSBuYW1lIHRvIGJlIHZlcmlmaWVkLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IC0gVHJ1ZSBpZiB0aGUgY3VycmVudCBzdGF0ZSBpcyB0aGUgZ2l2ZW4gb25lLlxyXG4gICAgICovXG4gICAgaXM6IGZ1bmN0aW9uIGlzKHN0YXRlKSB7XG4gICAgICByZXR1cm4gc3RhdGUgPT09IGN1cnI7XG4gICAgfVxuICB9O1xufSk7XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvanMvdXRpbHMvb2JqZWN0LmpzXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG4vKipcclxuICogU29tZSB1dGlsaXR5IGZ1bmN0aW9ucyByZWxhdGVkIHdpdGggT2JqZWN0LCBzdXBwb3J0aW5nIElFLlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgIE5hb3Rvc2hpIEZ1aml0YVxyXG4gKiBAY29weXJpZ2h0IE5hb3Rvc2hpIEZ1aml0YS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICovXG52YXIga2V5cyA9IE9iamVjdC5rZXlzO1xuLyoqXHJcbiAqIEl0ZXJhdGUgYW4gb2JqZWN0IGxpa2UgQXJyYXkuZm9yRWFjaC5cclxuICogSUUgZG9lc24ndCBzdXBwb3J0IGZvckVhY2ggb2YgSFRNTENvbGxlY3Rpb24uXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSAgICBvYmogICAgICAgLSBBbiBvYmplY3QuXHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb259ICBjYWxsYmFjayAgLSBBIGZ1bmN0aW9uIGhhbmRsaW5nIGVhY2ggdmFsdWUuIEFyZ3VtZW50cyBhcmUgdmFsdWUsIHByb3BlcnR5IGFuZCBpbmRleC5cclxuICovXG5cbmZ1bmN0aW9uIGVhY2gob2JqLCBjYWxsYmFjaykge1xuICBrZXlzKG9iaikuc29tZShmdW5jdGlvbiAoa2V5LCBpbmRleCkge1xuICAgIHJldHVybiBjYWxsYmFjayhvYmpba2V5XSwga2V5LCBpbmRleCk7XG4gIH0pO1xufVxuLyoqXHJcbiAqIFJldHVybiB2YWx1ZXMgb2YgdGhlIGdpdmVuIG9iamVjdCBhcyBhbiBhcnJheS5cclxuICogSUUgZG9lc24ndCBzdXBwb3J0IE9iamVjdC52YWx1ZXMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmogLSBBbiBvYmplY3QuXHJcbiAqXHJcbiAqIEByZXR1cm4ge0FycmF5fSAtIEFuIGFycmF5IGNvbnRhaW5pbmcgYWxsIHZhbHVlcyBvZiB0aGUgZ2l2ZW4gb2JqZWN0LlxyXG4gKi9cblxuZnVuY3Rpb24gdmFsdWVzKG9iaikge1xuICByZXR1cm4ga2V5cyhvYmopLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIG9ialtrZXldO1xuICB9KTtcbn1cbi8qKlxyXG4gKiBDaGVjayBpZiB0aGUgZ2l2ZW4gc3ViamVjdCBpcyBvYmplY3Qgb3Igbm90LlxyXG4gKlxyXG4gKiBAcGFyYW0geyp9IHN1YmplY3QgLSBBIHN1YmplY3QgdG8gYmUgdmVyaWZpZWQuXHJcbiAqXHJcbiAqIEByZXR1cm4ge2Jvb2xlYW59IC0gVHJ1ZSBpZiBvYmplY3QsIGZhbHNlIG90aGVyd2lzZS5cclxuICovXG5cbmZ1bmN0aW9uIGlzT2JqZWN0KHN1YmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBzdWJqZWN0ID09PSAnb2JqZWN0Jztcbn1cbi8qKlxyXG4gKiBNZXJnZSB0d28gb2JqZWN0cyBkZWVwbHkuXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSB0byAgIC0gQW4gb2JqZWN0IHdoZXJlIFwiZnJvbVwiIGlzIG1lcmdlZC5cclxuICogQHBhcmFtIHtPYmplY3R9IGZyb20gLSBBbiBvYmplY3QgbWVyZ2VkIHRvIFwidG9cIi5cclxuICpcclxuICogQHJldHVybiB7T2JqZWN0fSAtIEEgbWVyZ2VkIG9iamVjdC5cclxuICovXG5cbmZ1bmN0aW9uIG1lcmdlKF9yZWYsIGZyb20pIHtcbiAgdmFyIHRvID0gX2V4dGVuZHMoe30sIF9yZWYpO1xuXG4gIGVhY2goZnJvbSwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICBpZiAoIWlzT2JqZWN0KHRvW2tleV0pKSB7XG4gICAgICAgIHRvW2tleV0gPSB7fTtcbiAgICAgIH1cblxuICAgICAgdG9ba2V5XSA9IG1lcmdlKHRvW2tleV0sIHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdG9ba2V5XSA9IHZhbHVlO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiB0bztcbn1cbi8qKlxyXG4gKiBBc3NpZ24gYWxsIHByb3BlcnRpZXMgXCJmcm9tXCIgdG8gXCJ0b1wiIG9iamVjdC5cclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IHRvICAgLSBBbiBvYmplY3Qgd2hlcmUgcHJvcGVydGllcyBhcmUgYXNzaWduZWQuXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBmcm9tIC0gQW4gb2JqZWN0IHdob3NlIHByb3BlcnRpZXMgYXJlIGFzc2lnbmVkIHRvIFwidG9cIi5cclxuICpcclxuICogQHJldHVybiB7T2JqZWN0fSAtIEFuIGFzc2lnbmVkIG9iamVjdC5cclxuICovXG5cbmZ1bmN0aW9uIG9iamVjdF9hc3NpZ24odG8sIGZyb20pIHtcbiAga2V5cyhmcm9tKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAoIXRvW2tleV0pIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0bywga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGZyb20sIGtleSkpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiB0bztcbn1cbjsvLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9qcy91dGlscy91dGlscy5qc1xuLyoqXHJcbiAqIEEgcGFja2FnZSBvZiBzb21lIG1pc2NlbGxhbmVvdXMgdXRpbGl0eSBmdW5jdGlvbnMuXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgTmFvdG9zaGkgRnVqaXRhXHJcbiAqIEBjb3B5cmlnaHQgTmFvdG9zaGkgRnVqaXRhLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKi9cblxuLyoqXHJcbiAqIENvbnZlcnQgdGhlIGdpdmVuIHZhbHVlIHRvIGFycmF5LlxyXG4gKlxyXG4gKiBAcGFyYW0geyp9IHZhbHVlIC0gQW55IHZhbHVlLlxyXG4gKlxyXG4gKiBAcmV0dXJuIHsqW119IC0gQXJyYXkgY29udGFpbmluZyB0aGUgZ2l2ZW4gdmFsdWUuXHJcbiAqL1xuXG5mdW5jdGlvbiB0b0FycmF5KHZhbHVlKSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlIDogW3ZhbHVlXTtcbn1cbi8qKlxyXG4gKiBDaGVjayBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYmV0d2VlbiBtaW4gYW5kIG1heC5cclxuICogTWluIHdpbGwgYmUgcmV0dXJuZWQgd2hlbiB0aGUgdmFsdWUgaXMgbGVzcyB0aGFuIG1pbiBvciBtYXggd2lsbCBkbyB3aGVuIGdyZWF0ZXIgdGhhbiBtYXguXHJcbiAqXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSAtIEEgbnVtYmVyIHRvIGJlIGNoZWNrZWQuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBtMSAgICAtIE1pbmltdW0gb3IgbWF4aW11bSBudW1iZXIuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBtMiAgICAtIE1heGltdW0gb3IgbWluaW11bSBudW1iZXIuXHJcbiAqXHJcbiAqIEByZXR1cm4ge251bWJlcn0gLSBBIHZhbHVlIGl0c2VsZiwgbWluIG9yIG1heC5cclxuICovXG5cbmZ1bmN0aW9uIGJldHdlZW4odmFsdWUsIG0xLCBtMikge1xuICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgodmFsdWUsIG0xID4gbTIgPyBtMiA6IG0xKSwgbTEgPiBtMiA/IG0xIDogbTIpO1xufVxuLyoqXHJcbiAqIFRoZSBzcHJpbnRmIG1ldGhvZCB3aXRoIG1pbmltdW0gZnVuY3Rpb25hbGl0eS5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9ICAgICAgIGZvcm1hdCAgICAgICAtIFRoZSBzdHJpbmcgZm9ybWF0LlxyXG4gKiBAcGFyYW0ge3N0cmluZ3xBcnJheX0gcmVwbGFjZW1lbnRzIC0gUmVwbGFjZW1lbnRzIGFjY2VwdGluZyBtdWx0aXBsZSBhcmd1bWVudHMuXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9IC0gQ29udmVydGVkIHN0cmluZy5cclxuICovXG5cbmZ1bmN0aW9uIHNwcmludGYoZm9ybWF0LCByZXBsYWNlbWVudHMpIHtcbiAgdmFyIGkgPSAwO1xuICByZXR1cm4gZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdG9BcnJheShyZXBsYWNlbWVudHMpW2krK107XG4gIH0pO1xufVxuLyoqXHJcbiAqIEFwcGVuZCBweCB1bml0IHRvIHRoZSBnaXZlbiBzdWJqZWN0IGlmIG5lY2Vzc2FyeS5cclxuICpcclxuICogQHBhcmFtIHtudW1iZXJ8c3RyaW5nfSB2YWx1ZSAtIEEgdmFsdWUgdGhhdCBtYXkgbm90IGluY2x1ZGUgYW4gdW5pdC5cclxuICpcclxuICogQHJldHVybiB7c3RyaW5nfSAtIElmIHRoZSB2YWx1ZSBpcyBzdHJpbmcsIHJldHVybiBpdHNlbGYuXHJcbiAqICAgICAgICAgICAgICAgICAgICBJZiBudW1iZXIsIGRvIHZhbHVlICsgXCJweFwiLiBBbiBlbXB0eSBzdHJpbmcsIG90aGVyd2lzZS5cclxuICovXG5cbmZ1bmN0aW9uIHVuaXQodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG5cbiAgaWYgKHR5cGUgPT09ICdudW1iZXInICYmIHZhbHVlID4gMCkge1xuICAgIHJldHVybiBwYXJzZUZsb2F0KHZhbHVlKSArICdweCc7XG4gIH1cblxuICByZXR1cm4gdHlwZSA9PT0gJ3N0cmluZycgPyB2YWx1ZSA6ICcnO1xufVxuLyoqXHJcbiAqIFBhZCBzdGFydCB3aXRoIDAuXHJcbiAqXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBudW1iZXIgLSBBIG51bWJlciB0byBiZSBmaWxsZWQgd2l0aCAwLlxyXG4gKlxyXG4gKiBAcmV0dXJuIHtzdHJpbmd8bnVtYmVyfSAtIFBhZGRlZCBudW1iZXIuXHJcbiAqL1xuXG5mdW5jdGlvbiBwYWQobnVtYmVyKSB7XG4gIHJldHVybiBudW1iZXIgPCAxMCA/ICcwJyArIG51bWJlciA6IG51bWJlcjtcbn1cbi8qKlxyXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiB2YWx1ZSB0byBwaXhlbC5cclxuICpcclxuICogQHBhcmFtIHtFbGVtZW50fSAgICAgICByb290ICAtIFJvb3QgZWxlbWVudCB3aGVyZSBhIGR1bW15IGRpdiBpcyBhcHBlbmRlZC5cclxuICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSB2YWx1ZSAtIENTUyB2YWx1ZSB0byBiZSBjb252ZXJ0ZWQsIHN1Y2ggYXMgMTByZW0uXHJcbiAqXHJcbiAqIEByZXR1cm4ge251bWJlcn0gLSBQaXhlbC5cclxuICovXG5cbmZ1bmN0aW9uIHRvUGl4ZWwocm9vdCwgdmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICB2YXIgZGl2ID0gY3JlYXRlKCdkaXYnLCB7fSk7XG4gICAgYXBwbHlTdHlsZShkaXYsIHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgd2lkdGg6IHZhbHVlXG4gICAgfSk7XG4gICAgYXBwZW5kKHJvb3QsIGRpdik7XG4gICAgdmFsdWUgPSBkaXYuY2xpZW50V2lkdGg7XG4gICAgZG9tX3JlbW92ZShkaXYpO1xuICB9XG5cbiAgcmV0dXJuICt2YWx1ZSB8fCAwO1xufVxuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2pzL3V0aWxzL2RvbS5qc1xuLyoqXHJcbiAqIFNvbWUgdXRpbGl0eSBmdW5jdGlvbnMgcmVsYXRlZCB3aXRoIERPTS5cclxuICpcclxuICogQGF1dGhvciAgICBOYW90b3NoaSBGdWppdGFcclxuICogQGNvcHlyaWdodCBOYW90b3NoaSBGdWppdGEuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqL1xuXG5cbi8qKlxyXG4gKiBGaW5kIHRoZSBmaXJzdCBlbGVtZW50IG1hdGNoaW5nIHRoZSBnaXZlbiBzZWxlY3Rvci5cclxuICogQmUgYXdhcmUgdGhhdCBhbGwgc2VsZWN0b3JzIGFmdGVyIGEgc3BhY2UgYXJlIGlnbm9yZWQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7RWxlbWVudHxOb2RlfSAgZWxtICAgICAgIC0gQW4gYW5jZXN0b3IgZWxlbWVudC5cclxuICogQHBhcmFtIHtzdHJpbmd9ICAgICAgICBzZWxlY3RvciAgLSBET01TdHJpbmcuXHJcbiAqXHJcbiAqIEByZXR1cm4ge0VsZW1lbnR8bnVsbH0gLSBBIGZvdW5kIGVsZW1lbnQgb3IgbnVsbC5cclxuICovXG5cbmZ1bmN0aW9uIGZpbmQoZWxtLCBzZWxlY3Rvcikge1xuICByZXR1cm4gZWxtID8gZWxtLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3Iuc3BsaXQoJyAnKVswXSkgOiBudWxsO1xufVxuLyoqXHJcbiAqIEZpbmQgYSBmaXJzdCBjaGlsZCBoYXZpbmcgdGhlIGdpdmVuIHRhZyBvciBjbGFzcyBuYW1lLlxyXG4gKlxyXG4gKiBAcGFyYW0ge0VsZW1lbnR9IHBhcmVudCAgICAgICAgIC0gQSBwYXJlbnQgZWxlbWVudC5cclxuICogQHBhcmFtIHtzdHJpbmd9ICB0YWdPckNsYXNzTmFtZSAtIEEgdGFnIG9yIGNsYXNzIG5hbWUuXHJcbiAqXHJcbiAqIEByZXR1cm4ge0VsZW1lbnR8dW5kZWZpbmVkfSAtIEEgZm91bmQgZWxlbWVudCBvbiBzdWNjZXNzIG9yIHVuZGVmaW5lZCBvbiBmYWlsdXJlLlxyXG4gKi9cblxuZnVuY3Rpb24gY2hpbGQocGFyZW50LCB0YWdPckNsYXNzTmFtZSkge1xuICByZXR1cm4gY2hpbGRyZW4ocGFyZW50LCB0YWdPckNsYXNzTmFtZSlbMF07XG59XG4vKipcclxuICogUmV0dXJuIGNoaWxlIGVsZW1lbnRzIHRoYXQgbWF0Y2hlcyB0aGUgcHJvdmlkZWQgdGFnIG9yIGNsYXNzIG5hbWUuXHJcbiAqXHJcbiAqIEBwYXJhbSB7RWxlbWVudH0gcGFyZW50ICAgICAgICAgLSBBIHBhcmVudCBlbGVtZW50LlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gIHRhZ09yQ2xhc3NOYW1lIC0gQSB0YWcgb3IgY2xhc3MgbmFtZS5cclxuICpcclxuICogQHJldHVybiB7RWxlbWVudFtdfSAtIEZvdW5kIGVsZW1lbnRzLlxyXG4gKi9cblxuZnVuY3Rpb24gY2hpbGRyZW4ocGFyZW50LCB0YWdPckNsYXNzTmFtZSkge1xuICBpZiAocGFyZW50KSB7XG4gICAgcmV0dXJuIHZhbHVlcyhwYXJlbnQuY2hpbGRyZW4pLmZpbHRlcihmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgIHJldHVybiBoYXNDbGFzcyhjaGlsZCwgdGFnT3JDbGFzc05hbWUuc3BsaXQoJyAnKVswXSkgfHwgY2hpbGQudGFnTmFtZSA9PT0gdGFnT3JDbGFzc05hbWU7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gW107XG59XG4vKipcclxuICogQ3JlYXRlIGFuIGVsZW1lbnQgd2l0aCBzb21lIG9wdGlvbmFsIGF0dHJpYnV0ZXMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSB0YWcgICAtIEEgdGFnIG5hbWUuXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBhdHRycyAtIEFuIG9iamVjdCBhbnkgYXR0cmlidXRlIHBhaXJzIG9mIG5hbWUgYW5kIHZhbHVlLlxyXG4gKlxyXG4gKiBAcmV0dXJuIHtFbGVtZW50fSAtIEEgY3JlYXRlZCBlbGVtZW50LlxyXG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlKHRhZywgYXR0cnMpIHtcbiAgdmFyIGVsbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgZWFjaChhdHRycywgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICByZXR1cm4gc2V0QXR0cmlidXRlKGVsbSwga2V5LCB2YWx1ZSk7XG4gIH0pO1xuICByZXR1cm4gZWxtO1xufVxuLyoqXHJcbiAqIENvbnZlcnQgSFRNTCBzdHJpbmcgdG8gRE9NIG5vZGUuXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBodG1sIC0gSFRNTCBzdHJpbmcuXHJcbiAqXHJcbiAqIEByZXR1cm4ge05vZGV9IC0gQSBjcmVhdGVkIG5vZGUuXHJcbiAqL1xuXG5mdW5jdGlvbiBkb21pZnkoaHRtbCkge1xuICB2YXIgZGl2ID0gY3JlYXRlKCdkaXYnLCB7fSk7XG4gIGRpdi5pbm5lckhUTUwgPSBodG1sO1xuICByZXR1cm4gZGl2LmZpcnN0Q2hpbGQ7XG59XG4vKipcclxuICogUmVtb3ZlIGEgZ2l2ZW4gZWxlbWVudCBmcm9tIGEgRE9NIHRyZWUuXHJcbiAqXHJcbiAqIEBwYXJhbSB7RWxlbWVudHxFbGVtZW50W119IGVsbXMgLSBFbGVtZW50KHMpIHRvIGJlIHJlbW92ZWQuXHJcbiAqL1xuXG5mdW5jdGlvbiBkb21fcmVtb3ZlKGVsbXMpIHtcbiAgdG9BcnJheShlbG1zKS5mb3JFYWNoKGZ1bmN0aW9uIChlbG0pIHtcbiAgICBpZiAoZWxtKSB7XG4gICAgICB2YXIgcGFyZW50ID0gZWxtLnBhcmVudEVsZW1lbnQ7XG4gICAgICBwYXJlbnQgJiYgcGFyZW50LnJlbW92ZUNoaWxkKGVsbSk7XG4gICAgfVxuICB9KTtcbn1cbi8qKlxyXG4gKiBBcHBlbmQgYSBjaGlsZCB0byBhIGdpdmVuIGVsZW1lbnQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7RWxlbWVudH0gcGFyZW50IC0gQSBwYXJlbnQgZWxlbWVudC5cclxuICogQHBhcmFtIHtFbGVtZW50fSBjaGlsZCAgLSBBbiBlbGVtZW50IHRvIGJlIGFwcGVuZGVkLlxyXG4gKi9cblxuZnVuY3Rpb24gYXBwZW5kKHBhcmVudCwgY2hpbGQpIHtcbiAgaWYgKHBhcmVudCkge1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChjaGlsZCk7XG4gIH1cbn1cbi8qKlxyXG4gKiBJbnNlcnQgYW4gZWxlbWVudCBiZWZvcmUgdGhlIHJlZmVyZW5jZSBlbGVtZW50LlxyXG4gKlxyXG4gKiBAcGFyYW0ge0VsZW1lbnR8Tm9kZX0gcmVmIC0gQSByZWZlcmVuY2UgZWxlbWVudC5cclxuICogQHBhcmFtIHtFbGVtZW50fSAgICAgIGVsbSAtIEFuIGVsZW1lbnQgdG8gYmUgaW5zZXJ0ZWQuXHJcbiAqL1xuXG5mdW5jdGlvbiBiZWZvcmUoZWxtLCByZWYpIHtcbiAgaWYgKGVsbSAmJiByZWYpIHtcbiAgICB2YXIgcGFyZW50ID0gcmVmLnBhcmVudEVsZW1lbnQ7XG4gICAgcGFyZW50ICYmIHBhcmVudC5pbnNlcnRCZWZvcmUoZWxtLCByZWYpO1xuICB9XG59XG4vKipcclxuICogQXBwbHkgc3R5bGVzIHRvIHRoZSBnaXZlbiBlbGVtZW50LlxyXG4gKlxyXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsbSAgICAgLSBBbiBlbGVtZW50IHdoZXJlIHN0eWxlcyBhcmUgYXBwbGllZC5cclxuICogQHBhcmFtIHtPYmplY3R9ICBzdHlsZXMgIC0gT2JqZWN0IGNvbnRhaW5pbmcgc3R5bGVzLlxyXG4gKi9cblxuZnVuY3Rpb24gYXBwbHlTdHlsZShlbG0sIHN0eWxlcykge1xuICBpZiAoZWxtKSB7XG4gICAgZWFjaChzdHlsZXMsIGZ1bmN0aW9uICh2YWx1ZSwgcHJvcCkge1xuICAgICAgaWYgKHZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgIGVsbS5zdHlsZVtwcm9wXSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4vKipcclxuICogQWRkIG9yIHJlbW92ZSBjbGFzc2VzIHRvL2Zyb20gdGhlIGVsZW1lbnQuXHJcbiAqIFRoaXMgZnVuY3Rpb24gaXMgZm9yIGludGVybmFsIHVzYWdlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge0VsZW1lbnR9ICAgICAgICAgZWxtICAgICAtIEFuIGVsZW1lbnQgd2hlcmUgY2xhc3NlcyBhcmUgYWRkZWQuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSBjbGFzc2VzIC0gQ2xhc3MgbmFtZXMgYmVpbmcgYWRkZWQuXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gICAgICAgICByZW1vdmUgIC0gV2hldGhlciB0byByZW1vdmUgb3IgYWRkIGNsYXNzZXMuXHJcbiAqL1xuXG5mdW5jdGlvbiBhZGRPclJlbW92ZUNsYXNzZXMoZWxtLCBjbGFzc2VzLCByZW1vdmUpIHtcbiAgaWYgKGVsbSkge1xuICAgIHRvQXJyYXkoY2xhc3NlcykuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgZWxtLmNsYXNzTGlzdFtyZW1vdmUgPyAncmVtb3ZlJyA6ICdhZGQnXShuYW1lKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuLyoqXHJcbiAqIEFkZCBjbGFzc2VzIHRvIHRoZSBlbGVtZW50LlxyXG4gKlxyXG4gKiBAcGFyYW0ge0VsZW1lbnR9ICAgICAgICAgIGVsbSAgICAgLSBBbiBlbGVtZW50IHdoZXJlIGNsYXNzZXMgYXJlIGFkZGVkLlxyXG4gKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0gIGNsYXNzZXMgLSBDbGFzcyBuYW1lcyBiZWluZyBhZGRlZC5cclxuICovXG5cblxuZnVuY3Rpb24gYWRkQ2xhc3MoZWxtLCBjbGFzc2VzKSB7XG4gIGFkZE9yUmVtb3ZlQ2xhc3NlcyhlbG0sIGNsYXNzZXMsIGZhbHNlKTtcbn1cbi8qKlxyXG4gKiBSZW1vdmUgYSBjbGFzcyBmcm9tIHRoZSBlbGVtZW50LlxyXG4gKlxyXG4gKiBAcGFyYW0ge0VsZW1lbnR9ICAgICAgICAgZWxtICAgICAtIEFuIGVsZW1lbnQgd2hlcmUgY2xhc3NlcyBhcmUgcmVtb3ZlZC5cclxuICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IGNsYXNzZXMgLSBBIGNsYXNzIG5hbWUgYmVpbmcgcmVtb3ZlZC5cclxuICovXG5cbmZ1bmN0aW9uIHJlbW92ZUNsYXNzKGVsbSwgY2xhc3Nlcykge1xuICBhZGRPclJlbW92ZUNsYXNzZXMoZWxtLCBjbGFzc2VzLCB0cnVlKTtcbn1cbi8qKlxyXG4gKiBWZXJpZnkgaWYgdGhlIHByb3ZpZGVkIGVsZW1lbnQgaGFzIHRoZSBjbGFzcyBvciBub3QuXHJcbiAqXHJcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxtICAgICAgIC0gQW4gZWxlbWVudC5cclxuICogQHBhcmFtIHtzdHJpbmd9ICBjbGFzc05hbWUgLSBBIGNsYXNzIG5hbWUuXHJcbiAqXHJcbiAqIEByZXR1cm4ge2Jvb2xlYW59IC0gVHJ1ZSBpZiB0aGUgZWxlbWVudCBoYXMgdGhlIGNsYXNzIG9yIGZhbHNlIGlmIG5vdC5cclxuICovXG5cbmZ1bmN0aW9uIGhhc0NsYXNzKGVsbSwgY2xhc3NOYW1lKSB7XG4gIHJldHVybiAhIWVsbSAmJiBlbG0uY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7XG59XG4vKipcclxuICogU2V0IGF0dHJpYnV0ZSB0byB0aGUgZ2l2ZW4gZWxlbWVudC5cclxuICpcclxuICogQHBhcmFtIHtFbGVtZW50fSAgICAgICAgICAgICAgICAgZWxtICAgLSBBbiBlbGVtZW50IHdoZXJlIGFuIGF0dHJpYnV0ZSBpcyBhc3NpZ25lZC5cclxuICogQHBhcmFtIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgbmFtZSAgLSBBdHRyaWJ1dGUgbmFtZS5cclxuICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfGJvb2xlYW59ICAgdmFsdWUgLSBBdHRyaWJ1dGUgdmFsdWUuXHJcbiAqL1xuXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGUoZWxtLCBuYW1lLCB2YWx1ZSkge1xuICBpZiAoZWxtKSB7XG4gICAgZWxtLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gIH1cbn1cbi8qKlxyXG4gKiBHZXQgYXR0cmlidXRlIGZyb20gdGhlIGdpdmVuIGVsZW1lbnQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxtICAtIEFuIGVsZW1lbnQgd2hlcmUgYW4gYXR0cmlidXRlIGlzIGFzc2lnbmVkLlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gIG5hbWUgLSBBdHRyaWJ1dGUgbmFtZS5cclxuICpcclxuICogQHJldHVybiB7c3RyaW5nfSAtIFRoZSB2YWx1ZSBvZiB0aGUgZ2l2ZW4gYXR0cmlidXRlIGlmIGF2YWlsYWJsZS4gQW4gZW1wdHkgc3RyaW5nIGlmIG5vdC5cclxuICovXG5cbmZ1bmN0aW9uIGdldEF0dHJpYnV0ZShlbG0sIG5hbWUpIHtcbiAgcmV0dXJuIGVsbSA/IGVsbS5nZXRBdHRyaWJ1dGUobmFtZSkgOiAnJztcbn1cbi8qKlxyXG4gKiBSZW1vdmUgYXR0cmlidXRlIGZyb20gdGhlIGdpdmVuIGVsZW1lbnQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7RWxlbWVudHxFbGVtZW50W119IGVsbXMgIC0gQW4gZWxlbWVudCB3aGVyZSBhbiBhdHRyaWJ1dGUgaXMgcmVtb3ZlZC5cclxuICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119ICAgICAgbmFtZXMgLSBBdHRyaWJ1dGUgbmFtZS5cclxuICovXG5cbmZ1bmN0aW9uIHJlbW92ZUF0dHJpYnV0ZShlbG1zLCBuYW1lcykge1xuICB0b0FycmF5KG5hbWVzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdG9BcnJheShlbG1zKS5mb3JFYWNoKGZ1bmN0aW9uIChlbG0pIHtcbiAgICAgIHJldHVybiBlbG0gJiYgZWxtLnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgICB9KTtcbiAgfSk7XG59XG4vKipcclxuICogUmV0dXJuIHRoZSBSZWN0IG9iamVjdCBvZiB0aGUgcHJvdmlkZWQgb2JqZWN0LlxyXG4gKlxyXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsbSAtIEFuIGVsZW1lbnQuXHJcbiAqXHJcbiAqIEByZXR1cm4ge0NsaWVudFJlY3R8RE9NUmVjdH0gLSBBIHJlY3Qgb2JqZWN0LlxyXG4gKi9cblxuZnVuY3Rpb24gZ2V0UmVjdChlbG0pIHtcbiAgcmV0dXJuIGVsbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbn1cbi8qKlxyXG4gKiBUcmlnZ2VyIHRoZSBnaXZlbiBjYWxsYmFjayBhZnRlciBhbGwgaW1hZ2VzIGNvbnRhaW5lZCBieSB0aGUgZWxlbWVudCBhcmUgbG9hZGVkLlxyXG4gKlxyXG4gKiBAcGFyYW0ge0VsZW1lbnR9ICBlbG0gICAgICAtIEVsZW1lbnQgdGhhdCBtYXkgY29udGFpbiBpbWFnZXMuXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIC0gQ2FsbGJhY2sgZnVuY3Rpb24gZmlyZWQgcmlnaHQgYWZ0ZXIgYWxsIGltYWdlcyBhcmUgbG9hZGVkLlxyXG4gKi9cblxuZnVuY3Rpb24gbG9hZGVkKGVsbSwgY2FsbGJhY2spIHtcbiAgdmFyIGltYWdlcyA9IGVsbS5xdWVyeVNlbGVjdG9yQWxsKCdpbWcnKTtcbiAgdmFyIGxlbmd0aCA9IGltYWdlcy5sZW5ndGg7XG5cbiAgaWYgKGxlbmd0aCkge1xuICAgIHZhciBjb3VudCA9IDA7XG4gICAgZWFjaChpbWFnZXMsIGZ1bmN0aW9uIChpbWcpIHtcbiAgICAgIGltZy5vbmxvYWQgPSBpbWcub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCsrY291bnQgPT09IGxlbmd0aCkge1xuICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgLy8gVHJpZ2dlciB0aGUgY2FsbGJhY2sgaW1tZWRpYXRlbHkgaWYgdGhlcmUgaXMgbm8gaW1hZ2UuXG4gICAgY2FsbGJhY2soKTtcbiAgfVxufVxuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2pzL2NvbnN0YW50cy90eXBlcy5qc1xuLyoqXHJcbiAqIEV4cG9ydCBzbGlkZXIgdHlwZXMuXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgTmFvdG9zaGkgRnVqaXRhXHJcbiAqIEBjb3B5cmlnaHQgTmFvdG9zaGkgRnVqaXRhLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKi9cblxuLyoqXHJcbiAqIE5vcm1hbCBzbGlkZXIuXHJcbiAqXHJcbiAqIEB0eXBlIHtzdHJpbmd9XHJcbiAqL1xudmFyIFNMSURFID0gJ3NsaWRlJztcbi8qKlxyXG4gKiBMb29wIGFmdGVyIHRoZSBsYXN0IHNsaWRlIGFuZCBiZWZvcmUgdGhlIGZpcnN0IG9uZS5cclxuICpcclxuICogQHR5cGUge3N0cmluZ31cclxuICovXG5cbnZhciBMT09QID0gJ2xvb3AnO1xuLyoqXHJcbiAqIFRoZSB0cmFjayBkb2Vzbid0IG1vdmUuXHJcbiAqXHJcbiAqIEB0eXBlIHtzdHJpbmd9XHJcbiAqL1xuXG52YXIgRkFERSA9ICdmYWRlJztcbjsvLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9qcy90cmFuc2l0aW9ucy9zbGlkZS9pbmRleC5qc1xuLyoqXHJcbiAqIFRoZSBjb21wb25lbnQgZm9yIGdlbmVyYWwgc2xpZGUgZWZmZWN0IHRyYW5zaXRpb24uXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgTmFvdG9zaGkgRnVqaXRhXHJcbiAqIEBjb3B5cmlnaHQgTmFvdG9zaGkgRnVqaXRhLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKi9cblxuXG4vKipcclxuICogVGhlIGNvbXBvbmVudCBmb3IgZ2VuZXJhbCBzbGlkZSBlZmZlY3QgdHJhbnNpdGlvbi5cclxuICpcclxuICogQHBhcmFtIHtTcGxpZGV9IFNwbGlkZSAgICAgLSBBIFNwbGlkZSBpbnN0YW5jZS5cclxuICogQHBhcmFtIHtPYmplY3R9IENvbXBvbmVudHMgLSBBbiBvYmplY3QgY29udGFpbmluZyBjb21wb25lbnRzLlxyXG4gKlxyXG4gKiBAcmV0dXJuIHtPYmplY3R9IC0gVGhlIGNvbXBvbmVudCBvYmplY3QuXHJcbiAqL1xuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIGNvbnN0IHNsaWRlID0gKGZ1bmN0aW9uIChTcGxpZGUsIENvbXBvbmVudHMpIHtcbiAgLyoqXHJcbiAgICogSG9sZCB0aGUgbGlzdCBlbGVtZW50LlxyXG4gICAqXHJcbiAgICogQHR5cGUge0VsZW1lbnR9XHJcbiAgICovXG4gIHZhciBsaXN0O1xuICAvKipcclxuICAgKiBIb2xkIHRoZSBvbkVuZCBjYWxsYmFjayBmdW5jdGlvbi5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtmdW5jdGlvbn1cclxuICAgKi9cblxuICB2YXIgZW5kQ2FsbGJhY2s7XG4gIHJldHVybiB7XG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWQuXHJcbiAgICAgKi9cbiAgICBtb3VudDogZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgICBsaXN0ID0gQ29tcG9uZW50cy5FbGVtZW50cy5saXN0O1xuICAgICAgU3BsaWRlLm9uKCd0cmFuc2l0aW9uZW5kJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKGUudGFyZ2V0ID09PSBsaXN0ICYmIGVuZENhbGxiYWNrKSB7XG4gICAgICAgICAgZW5kQ2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgICAgfSwgbGlzdCk7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogU3RhcnQgdHJhbnNpdGlvbi5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gICBkZXN0SW5kZXggLSBEZXN0aW5hdGlvbiBzbGlkZSBpbmRleCB0aGF0IG1pZ2h0IGJlIGNsb25lJ3MuXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gICBuZXdJbmRleCAgLSBOZXcgaW5kZXguXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gICBwcmV2SW5kZXggLSBQcmV2aW91cyBpbmRleC5cclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSAgIGNvb3JkICAgICAtIERlc3RpbmF0aW9uIGNvb3JkaW5hdGVzLlxyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gZG9uZSAgICAgIC0gQ2FsbGJhY2sgZnVuY3Rpb24gbXVzdCBiZSBpbnZva2VkIHdoZW4gdHJhbnNpdGlvbiBpcyBjb21wbGV0ZWQuXHJcbiAgICAgKi9cbiAgICBzdGFydDogZnVuY3Rpb24gc3RhcnQoZGVzdEluZGV4LCBuZXdJbmRleCwgcHJldkluZGV4LCBjb29yZCwgZG9uZSkge1xuICAgICAgdmFyIG9wdGlvbnMgPSBTcGxpZGUub3B0aW9ucztcbiAgICAgIHZhciBlZGdlSW5kZXggPSBDb21wb25lbnRzLkNvbnRyb2xsZXIuZWRnZUluZGV4O1xuICAgICAgdmFyIHNwZWVkID0gb3B0aW9ucy5zcGVlZDtcbiAgICAgIGVuZENhbGxiYWNrID0gZG9uZTtcblxuICAgICAgaWYgKFNwbGlkZS5pcyhTTElERSkpIHtcbiAgICAgICAgaWYgKHByZXZJbmRleCA9PT0gMCAmJiBuZXdJbmRleCA+PSBlZGdlSW5kZXggfHwgcHJldkluZGV4ID49IGVkZ2VJbmRleCAmJiBuZXdJbmRleCA9PT0gMCkge1xuICAgICAgICAgIHNwZWVkID0gb3B0aW9ucy5yZXdpbmRTcGVlZCB8fCBzcGVlZDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBhcHBseVN0eWxlKGxpc3QsIHtcbiAgICAgICAgdHJhbnNpdGlvbjogXCJ0cmFuc2Zvcm0gXCIgKyBzcGVlZCArIFwibXMgXCIgKyBvcHRpb25zLmVhc2luZyxcbiAgICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZShcIiArIGNvb3JkLnggKyBcInB4LFwiICsgY29vcmQueSArIFwicHgpXCJcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbn0pO1xuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2pzL3RyYW5zaXRpb25zL2ZhZGUvaW5kZXguanNcbi8qKlxyXG4gKiBUaGUgY29tcG9uZW50IGZvciBmYWRlIHRyYW5zaXRpb24uXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgTmFvdG9zaGkgRnVqaXRhXHJcbiAqIEBjb3B5cmlnaHQgTmFvdG9zaGkgRnVqaXRhLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKi9cblxuXG4vKipcclxuICogVGhlIGNvbXBvbmVudCBmb3IgZmFkZSB0cmFuc2l0aW9uLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1NwbGlkZX0gU3BsaWRlICAgICAtIEEgU3BsaWRlIGluc3RhbmNlLlxyXG4gKiBAcGFyYW0ge09iamVjdH0gQ29tcG9uZW50cyAtIEFuIG9iamVjdCBjb250YWluaW5nIGNvbXBvbmVudHMuXHJcbiAqXHJcbiAqIEByZXR1cm4ge09iamVjdH0gLSBUaGUgY29tcG9uZW50IG9iamVjdC5cclxuICovXG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gY29uc3QgZmFkZSA9IChmdW5jdGlvbiAoU3BsaWRlLCBDb21wb25lbnRzKSB7XG4gIHZhciBGYWRlID0ge1xuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkLlxyXG4gICAgICogQXBwbHkgdHJhbnNpdGlvbiBzdHlsZSB0byB0aGUgZmlyc3Qgc2xpZGUuXHJcbiAgICAgKi9cbiAgICBtb3VudDogZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgICBhcHBseShTcGxpZGUuaW5kZXgpO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIFN0YXJ0IHRyYW5zaXRpb24uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9ICAgIGRlc3RJbmRleCAtIERlc3RpbmF0aW9uIHNsaWRlIGluZGV4IHRoYXQgbWlnaHQgYmUgY2xvbmUncy5cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSAgICBuZXdJbmRleCAgLSBOZXcgaW5kZXguXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gICAgcHJldkluZGV4IC0gUHJldmlvdXMgaW5kZXguXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gICAgY29vcmQgICAgIC0gRGVzdGluYXRpb24gY29vcmRpbmF0ZXMuXHJcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSAgZG9uZSAgICAgIC0gQ2FsbGJhY2sgZnVuY3Rpb24gbXVzdCBiZSBpbnZva2VkIHdoZW4gdHJhbnNpdGlvbiBpcyBjb21wbGV0ZWQuXHJcbiAgICAgKi9cbiAgICBzdGFydDogZnVuY3Rpb24gc3RhcnQoZGVzdEluZGV4LCBuZXdJbmRleCwgcHJldkluZGV4LCBjb29yZCwgZG9uZSkge1xuICAgICAgdmFyIHRyYWNrID0gQ29tcG9uZW50cy5FbGVtZW50cy50cmFjaztcbiAgICAgIGFwcGx5U3R5bGUodHJhY2ssIHtcbiAgICAgICAgaGVpZ2h0OiB1bml0KHRyYWNrLmNsaWVudEhlaWdodClcbiAgICAgIH0pO1xuICAgICAgYXBwbHkobmV3SW5kZXgpO1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRvbmUoKTtcbiAgICAgICAgYXBwbHlTdHlsZSh0cmFjaywge1xuICAgICAgICAgIGhlaWdodDogJydcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG4gIC8qKlxyXG4gICAqIEFwcGx5IHRyYW5zaXRpb24gc3R5bGUgdG8gdGhlIHNsaWRlIHNwZWNpZmllZCBieSB0aGUgZ2l2ZW4gaW5kZXguXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggLSBBIHNsaWRlIGluZGV4LlxyXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGFwcGx5KGluZGV4KSB7XG4gICAgdmFyIG9wdGlvbnMgPSBTcGxpZGUub3B0aW9ucztcbiAgICBhcHBseVN0eWxlKENvbXBvbmVudHMuRWxlbWVudHMuc2xpZGVzW2luZGV4XSwge1xuICAgICAgdHJhbnNpdGlvbjogXCJvcGFjaXR5IFwiICsgb3B0aW9ucy5zcGVlZCArIFwibXMgXCIgKyBvcHRpb25zLmVhc2luZ1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIEZhZGU7XG59KTtcbjsvLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9qcy90cmFuc2l0aW9ucy9pbmRleC5qc1xuLyoqXHJcbiAqIEV4cG9ydCB0cmFuc2l0aW9uIGNvbXBvbmVudHMuXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgTmFvdG9zaGkgRnVqaXRhXHJcbiAqIEBjb3B5cmlnaHQgTmFvdG9zaGkgRnVqaXRhLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKi9cblxuXG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvanMvY29yZS9jb21wb3Nlci5qc1xuLyoqXHJcbiAqIFByb3ZpZGUgYSBmdW5jdGlvbiBmb3IgY29tcG9zaW5nIGNvbXBvbmVudHMuXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgTmFvdG9zaGkgRnVqaXRhXHJcbiAqIEBjb3B5cmlnaHQgTmFvdG9zaGkgRnVqaXRhLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKi9cblxuXG5cbi8qKlxyXG4gKiBDb21wb3NlIGNvbXBvbmVudHMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3BsaWRlfSAgIFNwbGlkZSAgICAgLSBTcGxpZGUgaW5zdGFuY2UuXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSAgIENvbXBvbmVudHMgLSBBZGRpdGlvbmFsIGNvbXBvbmVudHMuXHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IFRyYW5zaXRpb24gLSBDaGFuZ2UgY29tcG9uZW50IGZvciB0cmFuc2l0aW9uLlxyXG4gKlxyXG4gKiBAcmV0dXJuIHtPYmplY3R9IC0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgYWxsIGNvbXBvbmVudHMuXHJcbiAqL1xuXG5mdW5jdGlvbiBjb21wb3NlKFNwbGlkZSwgQ29tcG9uZW50cywgVHJhbnNpdGlvbikge1xuICB2YXIgY29tcG9uZW50cyA9IHt9O1xuICBlYWNoKENvbXBvbmVudHMsIGZ1bmN0aW9uIChDb21wb25lbnQsIG5hbWUpIHtcbiAgICBjb21wb25lbnRzW25hbWVdID0gQ29tcG9uZW50KFNwbGlkZSwgY29tcG9uZW50cywgbmFtZS50b0xvd2VyQ2FzZSgpKTtcbiAgfSk7XG5cbiAgaWYgKCFUcmFuc2l0aW9uKSB7XG4gICAgVHJhbnNpdGlvbiA9IFNwbGlkZS5pcyhGQURFKSA/IGZhZGUgOiBzbGlkZTtcbiAgfVxuXG4gIGNvbXBvbmVudHMuVHJhbnNpdGlvbiA9IFRyYW5zaXRpb24oU3BsaWRlLCBjb21wb25lbnRzKTtcbiAgcmV0dXJuIGNvbXBvbmVudHM7XG59XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvanMvdXRpbHMvZXJyb3IuanNcbi8qKlxyXG4gKiBVdGlsaXR5IGZ1bmN0aW9ucyBmb3Igb3V0cHV0dGluZyBsb2dzLlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgIE5hb3Rvc2hpIEZ1aml0YVxyXG4gKiBAY29weXJpZ2h0IE5hb3Rvc2hpIEZ1aml0YS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICovXG5cbi8qKlxyXG4gKiBQcmVmaXggb2YgYW4gZXJyb3IgbWFzc2FnZS5cclxuICpcclxuICogQHR5cGUge3N0cmluZ31cclxuICovXG52YXIgTUVTU0FHRV9QUkVGSVggPSAnW1NQTElERV0nO1xuLyoqXHJcbiAqIERpc3BsYXkgYW4gZXJyb3IgbWVzc2FnZSBvbiB0aGUgYnJvd3NlciBjb25zb2xlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSAtIEFuIGVycm9yIG1lc3NhZ2UuXHJcbiAqL1xuXG5mdW5jdGlvbiBlcnJvcihtZXNzYWdlKSB7XG4gIGNvbnNvbGUuZXJyb3IoTUVTU0FHRV9QUkVGSVggKyBcIiBcIiArIG1lc3NhZ2UpO1xufVxuLyoqXHJcbiAqIENoZWNrIGV4aXN0ZW5jZSBvZiB0aGUgZ2l2ZW4gb2JqZWN0IGFuZCB0aHJvdyBhbiBlcnJvciBpZiBpdCBkb2Vzbid0LlxyXG4gKlxyXG4gKiBAdGhyb3dzIHtFcnJvcn1cclxuICpcclxuICogQHBhcmFtIHsqfSAgICAgIHN1YmplY3QgLSBBIHN1YmplY3QgdG8gYmUgY29uZmlybWVkLlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSAtIEFuIGVycm9yIG1lc3NhZ2UuXHJcbiAqL1xuXG5mdW5jdGlvbiBleGlzdChzdWJqZWN0LCBtZXNzYWdlKSB7XG4gIGlmICghc3ViamVjdCkge1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgfVxufVxuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2pzL2NvbnN0YW50cy9jbGFzc2VzLmpzXG4vKipcclxuICogRXhwb3J0IGNsYXNzIG5hbWVzLlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgIE5hb3Rvc2hpIEZ1aml0YVxyXG4gKiBAY29weXJpZ2h0IE5hb3Rvc2hpIEZ1aml0YS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICovXG5cbi8qKlxyXG4gKiBBIHJvb3QgY2xhc3MgbmFtZS5cclxuICpcclxuICogQHR5cGUge3N0cmluZ31cclxuICovXG52YXIgUk9PVCA9ICdzcGxpZGUnO1xuLyoqXHJcbiAqIFRoZSBkZWZpbml0aW9uIHRhYmxlIG9mIGFsbCBjbGFzc2VzIGZvciBlbGVtZW50cy5cclxuICogVGhleSBtaWdodCBiZSBtb2RpZmllZCBieSBvcHRpb25zLlxyXG4gKlxyXG4gKiBAdHlwZSB7T2JqZWN0fVxyXG4gKi9cblxudmFyIEVMRU1FTlRfQ0xBU1NFUyA9IHtcbiAgcm9vdDogUk9PVCxcbiAgc2xpZGVyOiBST09UICsgXCJfX3NsaWRlclwiLFxuICB0cmFjazogUk9PVCArIFwiX190cmFja1wiLFxuICBsaXN0OiBST09UICsgXCJfX2xpc3RcIixcbiAgc2xpZGU6IFJPT1QgKyBcIl9fc2xpZGVcIixcbiAgY29udGFpbmVyOiBST09UICsgXCJfX3NsaWRlX19jb250YWluZXJcIixcbiAgYXJyb3dzOiBST09UICsgXCJfX2Fycm93c1wiLFxuICBhcnJvdzogUk9PVCArIFwiX19hcnJvd1wiLFxuICBwcmV2OiBST09UICsgXCJfX2Fycm93LS1wcmV2XCIsXG4gIG5leHQ6IFJPT1QgKyBcIl9fYXJyb3ctLW5leHRcIixcbiAgcGFnaW5hdGlvbjogUk9PVCArIFwiX19wYWdpbmF0aW9uXCIsXG4gIHBhZ2U6IFJPT1QgKyBcIl9fcGFnaW5hdGlvbl9fcGFnZVwiLFxuICBjbG9uZTogUk9PVCArIFwiX19zbGlkZS0tY2xvbmVcIixcbiAgcHJvZ3Jlc3M6IFJPT1QgKyBcIl9fcHJvZ3Jlc3NcIixcbiAgYmFyOiBST09UICsgXCJfX3Byb2dyZXNzX19iYXJcIixcbiAgYXV0b3BsYXk6IFJPT1QgKyBcIl9fYXV0b3BsYXlcIixcbiAgcGxheTogUk9PVCArIFwiX19wbGF5XCIsXG4gIHBhdXNlOiBST09UICsgXCJfX3BhdXNlXCIsXG4gIHNwaW5uZXI6IFJPT1QgKyBcIl9fc3Bpbm5lclwiLFxuICBzcjogUk9PVCArIFwiX19zclwiXG59O1xuLyoqXHJcbiAqIERlZmluaXRpb25zIG9mIHN0YXR1cyBjbGFzc2VzLlxyXG4gKlxyXG4gKiBAdHlwZSB7T2JqZWN0fVxyXG4gKi9cblxudmFyIFNUQVRVU19DTEFTU0VTID0ge1xuICBhY3RpdmU6ICdpcy1hY3RpdmUnLFxuICB2aXNpYmxlOiAnaXMtdmlzaWJsZScsXG4gIGxvYWRpbmc6ICdpcy1sb2FkaW5nJ1xufTtcbjsvLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9qcy9jb25zdGFudHMvaTE4bi5qc1xuLyoqXHJcbiAqIEV4cG9ydCBpMThuIHRleHRzIGFzIG9iamVjdC5cclxuICpcclxuICogQGF1dGhvciAgICBOYW90b3NoaSBGdWppdGFcclxuICogQGNvcHlyaWdodCBOYW90b3NoaSBGdWppdGEuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqL1xuXG4vKipcclxuICogVGV4dHMgZm9yIGkxOG4uXHJcbiAqXHJcbiAqIEB0eXBlIHtPYmplY3R9XHJcbiAqL1xudmFyIEkxOE4gPSB7XG4gIHByZXY6ICdQcmV2aW91cyBzbGlkZScsXG4gIG5leHQ6ICdOZXh0IHNsaWRlJyxcbiAgZmlyc3Q6ICdHbyB0byBmaXJzdCBzbGlkZScsXG4gIGxhc3Q6ICdHbyB0byBsYXN0IHNsaWRlJyxcbiAgc2xpZGVYOiAnR28gdG8gc2xpZGUgJXMnLFxuICBwYWdlWDogJ0dvIHRvIHBhZ2UgJXMnLFxuICBwbGF5OiAnU3RhcnQgYXV0b3BsYXknLFxuICBwYXVzZTogJ1BhdXNlIGF1dG9wbGF5J1xufTtcbjsvLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9qcy9jb25zdGFudHMvZGVmYXVsdHMuanNcbi8qKlxyXG4gKiBFeHBvcnQgZGVmYXVsdCBvcHRpb25zLlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgIE5hb3Rvc2hpIEZ1aml0YVxyXG4gKiBAY29weXJpZ2h0IE5hb3Rvc2hpIEZ1aml0YS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICovXG5cblxudmFyIERFRkFVTFRTID0ge1xuICAvKipcclxuICAgKiBEZXRlcm1pbmUgYSBzbGlkZXIgdHlwZS5cclxuICAgKiAtICdzbGlkZSc6IFJlZ3VsYXIgc2xpZGVyLlxyXG4gICAqIC0gJ2xvb3AnIDogQ2Fyb3VzZWwgc2xpZGVyLlxyXG4gICAqIC0gJ2ZhZGUnIDogQ2hhbmdlIHNsaWRlcyB3aXRoIGZhZGUgdHJhbnNpdGlvbi4gcGVyUGFnZSwgZHJhZyBvcHRpb25zIGFyZSBpZ25vcmVkLlxyXG4gICAqXHJcbiAgICogQHR5cGUge3N0cmluZ31cclxuICAgKi9cbiAgdHlwZTogJ3NsaWRlJyxcblxuICAvKipcclxuICAgKiBXaGV0aGVyIHRvIHJld2luZCBhIHNsaWRlciBiZWZvcmUgdGhlIGZpcnN0IHNsaWRlIG9yIGFmdGVyIHRoZSBsYXN0IG9uZS5cclxuICAgKiBJbiBcImxvb3BcIiBtb2RlLCB0aGlzIG9wdGlvbiBpcyBpZ25vcmVkLlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICovXG4gIHJld2luZDogZmFsc2UsXG5cbiAgLyoqXHJcbiAgICogVHJhbnNpdGlvbiBzcGVlZCBpbiBtaWxsaXNlY29uZHMuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAqL1xuICBzcGVlZDogNDAwLFxuXG4gIC8qKlxyXG4gICAqIFRyYW5zaXRpb24gc3BlZWQgb24gcmV3aW5kIGluIG1pbGxpc2Vjb25kcy5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICovXG4gIHJld2luZFNwZWVkOiAwLFxuXG4gIC8qKlxyXG4gICAqIFdoZXRoZXIgdG8gcHJldmVudCBhbnkgYWN0aW9ucyB3aGlsZSBhIHNsaWRlciBpcyB0cmFuc2l0aW9uaW5nLlxyXG4gICAqIElmIGZhbHNlLCBuYXZpZ2F0aW9uLCBkcmFnIGFuZCBzd2lwZSB3b3JrIHdoaWxlIHRoZSBzbGlkZXIgaXMgcnVubmluZy5cclxuICAgKiBFdmVuIHNvLCBpdCB3aWxsIGJlIGZvcmNlZCB0byB3YWl0IGZvciB0cmFuc2l0aW9uIGluIHNvbWUgY2FzZXMgaW4gdGhlIGxvb3AgbW9kZSB0byBzaGlmdCBhIHNsaWRlci5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqL1xuICB3YWl0Rm9yVHJhbnNpdGlvbjogdHJ1ZSxcblxuICAvKipcclxuICAgKiBEZWZpbmUgc2xpZGVyIG1heCB3aWR0aC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICovXG4gIHdpZHRoOiAwLFxuXG4gIC8qKlxyXG4gICAqIERlZmluZSBzbGlkZXIgaGVpZ2h0LlxyXG4gICAqXHJcbiAgICogQHR5cGUge251bWJlcn1cclxuICAgKi9cbiAgaGVpZ2h0OiAwLFxuXG4gIC8qKlxyXG4gICAqIEZpeCB3aWR0aCBvZiBzbGlkZXMuIENTUyBmb3JtYXQgaXMgYWxsb3dlZCBzdWNoIGFzIDEwZW0sIDgwJSBvciA4MHZ3LlxyXG4gICAqIHBlclBhZ2UgbnVtYmVyIHdpbGwgYmUgaWdub3JlZCB3aGVuIHRoaXMgb3B0aW9uIGlzIGZhbHN5LlxyXG4gICAqXHJcbiAgICogQHR5cGUge251bWJlcnxzdHJpbmd9XHJcbiAgICovXG4gIGZpeGVkV2lkdGg6IDAsXG5cbiAgLyoqXHJcbiAgICogRml4IGhlaWdodCBvZiBzbGlkZXMuIENTUyBmb3JtYXQgaXMgYWxsb3dlZCBzdWNoIGFzIDEwZW0sIDgwdmggYnV0ICUgdW5pdCBpcyBub3QgYWNjZXB0ZWQuXHJcbiAgICogaGVpZ2h0UmF0aW8gb3B0aW9uIHdpbGwgYmUgaWdub3JlZCB3aGVuIHRoaXMgb3B0aW9uIGlzIGZhbHN5LlxyXG4gICAqXHJcbiAgICogQHR5cGUge251bWJlcnxzdHJpbmd9XHJcbiAgICovXG4gIGZpeGVkSGVpZ2h0OiAwLFxuXG4gIC8qKlxyXG4gICAqIERldGVybWluZSBoZWlnaHQgb2Ygc2xpZGVzIGJ5IHJhdGlvIHRvIGEgc2xpZGVyIHdpZHRoLlxyXG4gICAqIFRoaXMgd2lsbCBiZSBpZ25vcmVkIHdoZW4gdGhlIGZpeGVkSGVpZ2h0IGlzIHByb3ZpZGVkLlxyXG4gICAqXHJcbiAgICogQHR5cGUge251bWJlcn1cclxuICAgKi9cbiAgaGVpZ2h0UmF0aW86IDAsXG5cbiAgLyoqXHJcbiAgICogSWYgdHJ1ZSwgc2xpZGUgd2lkdGggd2lsbCBiZSBkZXRlcm1pbmVkIGJ5IHRoZSBlbGVtZW50IHdpZHRoIGl0c2VsZi5cclxuICAgKiAtIHBlclBhZ2UvcGVyTW92ZSBzaG91bGQgYmUgMS5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqL1xuICBhdXRvV2lkdGg6IGZhbHNlLFxuXG4gIC8qKlxyXG4gICAqIElmIHRydWUsIHNsaWRlIGhlaWdodCB3aWxsIGJlIGRldGVybWluZWQgYnkgdGhlIGVsZW1lbnQgd2lkdGggaXRzZWxmLlxyXG4gICAqIC0gcGVyUGFnZS9wZXJNb3ZlIHNob3VsZCBiZSAxLlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICovXG4gIGF1dG9IZWlnaHQ6IGZhbHNlLFxuXG4gIC8qKlxyXG4gICAqIERldGVybWluZSBob3cgbWFueSBzbGlkZXMgc2hvdWxkIGJlIGRpc3BsYXllZCBwZXIgcGFnZS5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICovXG4gIHBlclBhZ2U6IDEsXG5cbiAgLyoqXHJcbiAgICogRGV0ZXJtaW5lIGhvdyBtYW55IHNsaWRlcyBzaG91bGQgYmUgbW92ZWQgd2hlbiBhIHNsaWRlciBnb2VzIHRvIG5leHQgb3IgcGVydi5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICovXG4gIHBlck1vdmU6IDAsXG5cbiAgLyoqXHJcbiAgICogRGV0ZXJtaW5lIG1hbnVhbGx5IGhvdyBtYW55IGNsb25lcyBzaG91bGQgYmUgZ2VuZXJhdGVkIG9uIHRoZSBsZWZ0IGFuZCByaWdodCBzaWRlLlxyXG4gICAqIFRoZSB0b3RhbCBudW1iZXIgb2YgY2xvbmVzIHdpbGwgYmUgdHdpY2Ugb2YgdGhpcyBudW1iZXIuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAqL1xuICBjbG9uZXM6IDAsXG5cbiAgLyoqXHJcbiAgICogU3RhcnQgaW5kZXguXHJcbiAgICpcclxuICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAqL1xuICBzdGFydDogMCxcblxuICAvKipcclxuICAgKiBEZXRlcm1pbmUgd2hpY2ggc2xpZGUgc2hvdWxkIGJlIGZvY3VzZWQgaWYgdGhlcmUgYXJlIG11bHRpcGxlIHNsaWRlcyBpbiBhIHBhZ2UuXHJcbiAgICogQSBzdHJpbmcgXCJjZW50ZXJcIiBpcyBhY2NlcHRhYmxlIGZvciBjZW50ZXJpbmcgc2xpZGVzLlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW58bnVtYmVyfHN0cmluZ31cclxuICAgKi9cbiAgZm9jdXM6IGZhbHNlLFxuXG4gIC8qKlxyXG4gICAqIEdhcCBiZXR3ZWVuIHNsaWRlcy4gQ1NTIGZvcm1hdCBpcyBhbGxvd2VkIHN1Y2ggYXMgMWVtLlxyXG4gICAqXHJcbiAgICogQHR5cGUge251bWJlcnxzdHJpbmd9XHJcbiAgICovXG4gIGdhcDogMCxcblxuICAvKipcclxuICAgKiBTZXQgcGFkZGluZy1sZWZ0L3JpZ2h0IGluIGhvcml6b250YWwgbW9kZSBvciBwYWRkaW5nLXRvcC9ib3R0b20gaW4gdmVydGljYWwgb25lLlxyXG4gICAqIEdpdmUgYSBzaW5nbGUgdmFsdWUgdG8gc2V0IGEgc2FtZSBzaXplIGZvciBib3RoIHNpZGVzIG9yXHJcbiAgICogZG8gYW4gb2JqZWN0IGZvciBkaWZmZXJlbnQgc2l6ZXMuXHJcbiAgICogQWxzbywgQ1NTIGZvcm1hdCBpcyBhbGxvd2VkIHN1Y2ggYXMgMWVtLlxyXG4gICAqXHJcbiAgICogQGV4YW1wbGVcclxuICAgKiAtIDEwOiBOdW1iZXJcclxuICAgKiAtICcxZW0nOiBDU1MgZm9ybWF0LlxyXG4gICAqIC0geyBsZWZ0OiAwLCByaWdodDogMjAgfTogT2JqZWN0IGZvciBkaWZmZXJlbnQgc2l6ZXMgaW4gaG9yaXpvbnRhbCBtb2RlLlxyXG4gICAqIC0geyB0b3A6IDAsIGJvdHRvbTogMjAgfTogT2JqZWN0IGZvciBkaWZmZXJlbnQgc2l6ZXMgaW4gdmVydGljYWwgbW9kZS5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtudW1iZXJ8c3RyaW5nfE9iamVjdH1cclxuICAgKi9cbiAgcGFkZGluZzogMCxcblxuICAvKipcclxuICAgKiBXaGV0aGVyIHRvIGFwcGVuZCBhcnJvd3MuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKi9cbiAgYXJyb3dzOiB0cnVlLFxuXG4gIC8qKlxyXG4gICAqIENoYW5nZSB0aGUgYXJyb3cgU1ZHIHBhdGggbGlrZSAnbTcuNjEgMC44MDctMi4xMi4uLicuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAqL1xuICBhcnJvd1BhdGg6ICcnLFxuXG4gIC8qKlxyXG4gICAqIFdoZXRoZXIgdG8gYXBwZW5kIHBhZ2luYXRpb24oaW5kaWNhdG9yIGRvdHMpIG9yIG5vdC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqL1xuICBwYWdpbmF0aW9uOiB0cnVlLFxuXG4gIC8qKlxyXG4gICAqIEFjdGl2YXRlIGF1dG9wbGF5LlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICovXG4gIGF1dG9wbGF5OiBmYWxzZSxcblxuICAvKipcclxuICAgKiBBdXRvcGxheSBpbnRlcnZhbCBpbiBtaWxsaXNlY29uZHMuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAqL1xuICBpbnRlcnZhbDogNTAwMCxcblxuICAvKipcclxuICAgKiBXaGV0aGVyIHRvIHN0b3AgYXV0b3BsYXkgd2hlbiBhIHNsaWRlciBpcyBob3ZlcmVkLlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICovXG4gIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcblxuICAvKipcclxuICAgKiBXaGV0aGVyIHRvIHN0b3AgYXV0b3BsYXkgd2hlbiBhIHNsaWRlciBlbGVtZW50cyBhcmUgZm9jdXNlZC5cclxuICAgKiBUcnVlIGlzIHJlY29tbWVuZGVkIGZvciBhY2Nlc3NpYmlsaXR5LlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICovXG4gIHBhdXNlT25Gb2N1czogdHJ1ZSxcblxuICAvKipcclxuICAgKiBXaGV0aGVyIHRvIHJlc2V0IHByb2dyZXNzIG9mIHRoZSBhdXRvcGxheSB0aW1lciB3aGVuIHJlc3VtZWQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKi9cbiAgcmVzZXRQcm9ncmVzczogdHJ1ZSxcblxuICAvKipcclxuICAgKiBMb2FkaW5nIGltYWdlcyBsYXppbHkuXHJcbiAgICogSW1hZ2Ugc3JjIG11c3QgYmUgcHJvdmlkZWQgYnkgYSBkYXRhLXNwbGlkZS1sYXp5IGF0dHJpYnV0ZS5cclxuICAgKlxyXG4gICAqIC0gZmFsc2U6IERvIG5vdGhpbmcuXHJcbiAgICogLSAnbmVhcmJ5JzogT25seSBpbWFnZXMgYXJvdW5kIGFuIGFjdGl2ZSBzbGlkZSB3aWxsIGJlIGxvYWRlZC5cclxuICAgKiAtICdzZXF1ZW50aWFsJzogQWxsIGltYWdlcyB3aWxsIGJlIHNlcXVlbnRpYWxseSBsb2FkZWQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbnxzdHJpbmd9XHJcbiAgICovXG4gIGxhenlMb2FkOiBmYWxzZSxcblxuICAvKipcclxuICAgKiBUaGlzIG9wdGlvbiB3b3JrcyBvbmx5IHdoZW4gYSBsYXp5TG9hZCBvcHRpb24gaXMgXCJuZWFyYnlcIi5cclxuICAgKiBEZXRlcm1pbmUgaG93IG1hbnkgcGFnZXMobm90IHNsaWRlcykgYXJvdW5kIGFuIGFjdGl2ZSBzbGlkZSBzaG91bGQgYmUgbG9hZGVkIGJlZm9yZWhhbmQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAqL1xuICBwcmVsb2FkUGFnZXM6IDEsXG5cbiAgLyoqXHJcbiAgICogRWFzaW5nIGZvciBDU1MgdHJhbnNpdGlvbi4gRm9yIGV4YW1wbGUsIGxpbmVhciwgZWFzZSBvciBjdWJpYy1iZXppZXIoKS5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICovXG4gIGVhc2luZzogJ2N1YmljLWJlemllciguNDIsLjY1LC4yNywuOTkpJyxcblxuICAvKipcclxuICAgKiBXaGV0aGVyIHRvIGVuYWJsZSBrZXlib2FyZCBzaG9ydGN1dHNcclxuICAgKiAtIHRydWUgb3IgJ2dsb2JhbCc6IExpc3RlbiB0byBrZXlkb3duIGV2ZW50IG9mIHRoZSBkb2N1bWVudC5cclxuICAgKiAtICdmb2N1c2VkJzogTGlzdGVuIHRvIHRoZSBrZXlkb3duIGV2ZW50IG9mIHRoZSBzbGlkZXIgcm9vdCBlbGVtZW50LiB0YWJpbmRleD1cIjBcIiB3aWxsIGJlIGFkZGVkIHRvIHRoZSBlbGVtZW50LlxyXG4gICAqIC0gZmFsc2U6IERpc2FibGUga2V5Ym9hcmQgc2hvcnRjdXRzLlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW58c3RyaW5nfVxyXG4gICAqL1xuICBrZXlib2FyZDogJ2dsb2JhbCcsXG5cbiAgLyoqXHJcbiAgICogV2hldGhlciB0byBhbGxvdyBtb3VzZSBkcmFnIGFuZCB0b3VjaCBzd2lwZS5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqL1xuICBkcmFnOiB0cnVlLFxuXG4gIC8qKlxyXG4gICAqIFRoZSBhbmdsZSB0aHJlc2hvbGQgZm9yIGRyYWcuXHJcbiAgICogVGhlIHNsaWRlciBzdGFydHMgbW92aW5nIG9ubHkgd2hlbiB0aGUgZHJhZyBhbmdsZSBpcyBsZXNzIHRoYW4gdGhpcyB0aHJlc2hvbGQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAqL1xuICBkcmFnQW5nbGVUaHJlc2hvbGQ6IDMwLFxuXG4gIC8qKlxyXG4gICAqIERpc3RhbmNlIHRocmVzaG9sZCBmb3IgZGV0ZXJtaW5pbmcgaWYgdGhlIGFjdGlvbiBpcyBcImZsaWNrXCIgb3IgXCJzd2lwZVwiLlxyXG4gICAqIFdoZW4gYSBkcmFnIGRpc3RhbmNlIGlzIG92ZXIgdGhpcyB2YWx1ZSwgdGhlIGFjdGlvbiB3aWxsIGJlIHRyZWF0ZWQgYXMgXCJzd2lwZVwiLCBub3QgXCJmbGlja1wiLlxyXG4gICAqXHJcbiAgICogQHR5cGUge251bWJlcn1cclxuICAgKi9cbiAgc3dpcGVEaXN0YW5jZVRocmVzaG9sZDogMTUwLFxuXG4gIC8qKlxyXG4gICAqIFZlbG9jaXR5IHRocmVzaG9sZCBmb3IgZGV0ZXJtaW5pbmcgaWYgdGhlIGFjdGlvbiBpcyBcImZsaWNrXCIgb3IgXCJzd2lwZVwiLlxyXG4gICAqIEFyb3VuZCAwLjUgaXMgcmVjb21tZW5kZWQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAqL1xuICBmbGlja1ZlbG9jaXR5VGhyZXNob2xkOiAuNixcblxuICAvKipcclxuICAgKiBEZXRlcm1pbmUgcG93ZXIgb2YgZmxpY2suIFRoZSBsYXJnZXIgbnVtYmVyIHRoaXMgaXMsIHRoZSBmYXJ0aGVyIGEgc2xpZGVyIHJ1bnMgYnkgZmxpY2suXHJcbiAgICogQXJvdW5kIDUwMCBpcyByZWNvbW1lbmRlZC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICovXG4gIGZsaWNrUG93ZXI6IDYwMCxcblxuICAvKipcclxuICAgKiBMaW1pdCBhIG51bWJlciBvZiBwYWdlcyB0byBtb3ZlIGJ5IGZsaWNrLlxyXG4gICAqXHJcbiAgICogQHR5cGUge251bWJlcn1cclxuICAgKi9cbiAgZmxpY2tNYXhQYWdlczogMSxcblxuICAvKipcclxuICAgKiBTbGlkZXIgZGlyZWN0aW9uLlxyXG4gICAqIC0gJ2x0cic6IExlZnQgdG8gcmlnaHQuXHJcbiAgICogLSAncnRsJzogUmlnaHQgdG8gbGVmdC5cclxuICAgKiAtICd0dGInOiBUb3AgdG8gYm90dG9tLlxyXG4gICAqXHJcbiAgICogQHR5cGUge3N0cmluZ31cclxuICAgKi9cbiAgZGlyZWN0aW9uOiAnbHRyJyxcblxuICAvKipcclxuICAgKiBTZXQgaW1nIHNyYyB0byBiYWNrZ3JvdW5kLWltYWdlIG9mIGl0cyBwYXJlbnQgZWxlbWVudC5cclxuICAgKiBJbWFnZXMgd2l0aCB2YXJpb3VzIHNpemVzIGNhbiBiZSBkaXNwbGF5ZWQgYXMgc2FtZSBkaW1lbnNpb24gd2l0aG91dCBjcm9wcGluZyB3b3JrLlxyXG4gICAqIGZpeGVkSGVpZ2h0IG9yIGhlaWdodFJhdGlvIGlzIHJlcXVpcmVkLlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICovXG4gIGNvdmVyOiBmYWxzZSxcblxuICAvKipcclxuICAgKiBXaGV0aGVyIHRvIGVuYWJsZSBhY2Nlc3NpYmlsaXR5KGFyaWEgYW5kIHNjcmVlbiByZWFkZXIgdGV4dHMpIG9yIG5vdC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqL1xuICBhY2Nlc3NpYmlsaXR5OiB0cnVlLFxuXG4gIC8qKlxyXG4gICAqIFdoZXRoZXIgdG8gYWRkIHRhYmluZGV4PVwiMFwiIHRvIHZpc2libGUgc2xpZGVzIG9yIG5vdC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqL1xuICBzbGlkZUZvY3VzOiB0cnVlLFxuXG4gIC8qKlxyXG4gICAqIERldGVybWluZSBpZiBhIHNsaWRlciBpcyBuYXZpZ2F0aW9uIGZvciBhbm90aGVyLlxyXG4gICAqIFVzZSBcInN5bmNcIiBBUEkgdG8gc3luY2hyb25pemUgdHdvIHNsaWRlcnMuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKi9cbiAgaXNOYXZpZ2F0aW9uOiBmYWxzZSxcblxuICAvKipcclxuICAgKiBXaGV0aGVyIHRvIHRyaW0gc3BhY2VzIGJlZm9yZSB0aGUgZmlzdCBzbGlkZSBvciBhZnRlciB0aGUgbGFzdCBvbmUgd2hlbiBcImZvY3VzXCIgaXMgbm90IDAuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKi9cbiAgdHJpbVNwYWNlOiB0cnVlLFxuXG4gIC8qKlxyXG4gICAqIFRoZSBcImlzLWFjdGl2ZVwiIGNsYXNzIGlzIGFkZGVkIGFmdGVyIHRyYW5zaXRpb24gYXMgZGVmYXVsdC5cclxuICAgKiBJZiB0cnVlLCBpdCB3aWxsIGJlIGFkZGVkIGJlZm9yZSBtb3ZlLlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICovXG4gIHVwZGF0ZU9uTW92ZTogZmFsc2UsXG5cbiAgLyoqXHJcbiAgICogVGhyb3R0bGUgZHVyYXRpb24gaW4gbWlsbGlzZWNvbmRzIGZvciB0aGUgcmVzaXplIGV2ZW50LlxyXG4gICAqXHJcbiAgICogQHR5cGUge251bWJlcn1cclxuICAgKi9cbiAgdGhyb3R0bGU6IDEwMCxcblxuICAvKipcclxuICAgKiBXaGV0aGVyIHRvIGRlc3Ryb3kgYSBzbGlkZXIgb3Igbm90LlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICovXG4gIGRlc3Ryb3k6IGZhbHNlLFxuXG4gIC8qKlxyXG4gICAqIE9wdGlvbnMgZm9yIHNwZWNpZmljIGJyZWFrcG9pbnRzLlxyXG4gICAqXHJcbiAgICogQGV4YW1wbGVcclxuICAgKiB7XHJcbiAgICogICAxMDAwOiB7XHJcbiAgICogICAgIHBlclBhZ2U6IDMsXHJcbiAgICogICAgIGdhcDogMjBcclxuICAgKiAgIH0sXHJcbiAgICogICA2MDA6IHtcclxuICAgKiAgICAgcGVyUGFnZTogMSxcclxuICAgKiAgICAgZ2FwOiA1LFxyXG4gICAqICAgfVxyXG4gICAqIH1cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufE9iamVjdH1cclxuICAgKi9cbiAgYnJlYWtwb2ludHM6IGZhbHNlLFxuXG4gIC8qKlxyXG4gICAqIENvbGxlY3Rpb24gb2YgY2xhc3MgbmFtZXMuXHJcbiAgICpcclxuICAgKiBAc2VlIC4vY2xhc3Nlcy5qc1xyXG4gICAqXHJcbiAgICogQHR5cGUge09iamVjdH1cclxuICAgKi9cbiAgY2xhc3NlczogRUxFTUVOVF9DTEFTU0VTLFxuXG4gIC8qKlxyXG4gICAqIENvbGxlY3Rpb24gb2YgaTE4biB0ZXh0cy5cclxuICAgKlxyXG4gICAqIEBzZWUgLi9pMThuLmpzXHJcbiAgICpcclxuICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAqL1xuICBpMThuOiBJMThOXG59O1xuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2pzL2NvbnN0YW50cy9zdGF0ZXMuanNcbi8qKlxyXG4gKiBFeHBvcnQgc3RhdGUgY29uc3RhbnRzLlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgIE5hb3Rvc2hpIEZ1aml0YVxyXG4gKiBAY29weXJpZ2h0IE5hb3Rvc2hpIEZ1aml0YS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICovXG5cbi8qKlxyXG4gKiBTcGxpZGUgaGFzIGJlZW4ganVzdCBjcmVhdGVkLlxyXG4gKlxyXG4gKiBAdHlwZSB7bnVtYmVyfVxyXG4gKi9cbnZhciBDUkVBVEVEID0gMTtcbi8qKlxyXG4gKiBBbGwgY29tcG9uZW50cyBoYXZlIGJlZW4gbW91bnRlZCBhbmQgaW5pdGlhbGl6ZWQuXHJcbiAqXHJcbiAqIEB0eXBlIHtudW1iZXJ9XHJcbiAqL1xuXG52YXIgTU9VTlRFRCA9IDI7XG4vKipcclxuICogU3BsaWRlIGlzIHJlYWR5IGZvciB0cmFuc2l0aW9uLlxyXG4gKlxyXG4gKiBAdHlwZSB7bnVtYmVyfVxyXG4gKi9cblxudmFyIElETEUgPSAzO1xuLyoqXHJcbiAqIFNwbGlkZSBpcyBtb3ZpbmcuXHJcbiAqXHJcbiAqIEB0eXBlIHtudW1iZXJ9XHJcbiAqL1xuXG52YXIgTU9WSU5HID0gNDtcbi8qKlxyXG4gKiBTcGxpZGUgaXMgbW92aW5nLlxyXG4gKlxyXG4gKiBAdHlwZSB7bnVtYmVyfVxyXG4gKi9cblxudmFyIERFU1RST1lFRCA9IDU7XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvanMvc3BsaWRlLmpzXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbi8qKlxyXG4gKiBUaGUgbWFpbiBjbGFzcyBmb3IgYXBwbHlpbmcgU3BsaWRlIHRvIGFuIGVsZW1lbnQuXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgTmFvdG9zaGkgRnVqaXRhXHJcbiAqIEBjb3B5cmlnaHQgTmFvdG9zaGkgRnVqaXRhLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKi9cblxuXG5cblxuXG5cblxuXG4vKipcclxuICogVGhlIG1haW4gY2xhc3MgZm9yIGFwcGx5aW5nIFNwbGlkZSB0byBhbiBlbGVtZW50LFxyXG4gKiBwcm92aWRpbmcgc29tZSBBUElzIHRvIGNvbnRyb2wgdGhlIGJlaGF2aW9yLlxyXG4gKi9cblxudmFyIFNwbGlkZSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIC8qKlxyXG4gICAqIFNwbGlkZSBjb25zdHJ1Y3Rvci5cclxuICAgKlxyXG4gICAqIEB0aHJvd3Mge0Vycm9yfSBXaGVuIHRoZSBnaXZlbiByb290IGVsZW1lbnQgb3Igc2VsZWN0b3IgaXMgaW52YWxpZC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7RWxlbWVudHxzdHJpbmd9ICByb290ICAgICAgIC0gQSBzZWxlY3RvciBmb3IgYSByb290IGVsZW1lbnQgb3IgYW4gZWxlbWVudCBpdHNlbGYuXHJcbiAgICogQHBhcmFtIHtPYmplY3R9ICAgICAgICAgIG9wdGlvbnMgICAgLSBPcHRpb25hbC4gT3B0aW9ucyB0byBjaGFuZ2UgZGVmYXVsdCBiZWhhdmlvdXIuXHJcbiAgICogQHBhcmFtIHtPYmplY3R9ICAgICAgICAgIENvbXBvbmVudHMgLSBPcHRpb25hbC4gQ29tcG9uZW50cy5cclxuICAgKi9cbiAgZnVuY3Rpb24gU3BsaWRlKHJvb3QsIG9wdGlvbnMsIENvbXBvbmVudHMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRpb25zID0ge307XG4gICAgfVxuXG4gICAgaWYgKENvbXBvbmVudHMgPT09IHZvaWQgMCkge1xuICAgICAgQ29tcG9uZW50cyA9IHt9O1xuICAgIH1cblxuICAgIHRoaXMucm9vdCA9IHJvb3QgaW5zdGFuY2VvZiBFbGVtZW50ID8gcm9vdCA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iocm9vdCk7XG4gICAgZXhpc3QodGhpcy5yb290LCAnQW4gaW52YWxpZCBlbGVtZW50L3NlbGVjdG9yIHdhcyBnaXZlbi4nKTtcbiAgICB0aGlzLkNvbXBvbmVudHMgPSBudWxsO1xuICAgIHRoaXMuRXZlbnQgPSBjb3JlX2V2ZW50KCk7XG4gICAgdGhpcy5TdGF0ZSA9IHN0YXRlKENSRUFURUQpO1xuICAgIHRoaXMuU1RBVEVTID0gc3RhdGVzX25hbWVzcGFjZU9iamVjdDtcbiAgICB0aGlzLl9vID0gbWVyZ2UoREVGQVVMVFMsIG9wdGlvbnMpO1xuICAgIHRoaXMuX2kgPSAwO1xuICAgIHRoaXMuX2MgPSBDb21wb25lbnRzO1xuICAgIHRoaXMuX2UgPSB7fTsgLy8gRXh0ZW5zaW9uc1xuXG4gICAgdGhpcy5fdCA9IG51bGw7IC8vIFRyYW5zaXRpb25cbiAgfVxuICAvKipcclxuICAgKiBDb21wb3NlIGFuZCBtb3VudCBjb21wb25lbnRzLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtPYmplY3R9ICAgRXh0ZW5zaW9ucyAtIE9wdGlvbmFsLiBBZGRpdGlvbmFsIGNvbXBvbmVudHMuXHJcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gVHJhbnNpdGlvbiAtIE9wdGlvbmFsLiBTZXQgYSBjdXN0b20gdHJhbnNpdGlvbiBjb21wb25lbnQuXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHtTcGxpZGV8dW5kZWZpbmVkfSAtIFRoaXMgaW5zdGFuY2Ugb3IgdW5kZWZpbmVkIGlmIGFuIGV4Y2VwdGlvbiBvY2N1cnJlZC5cclxuICAgKi9cblxuXG4gIHZhciBfcHJvdG8gPSBTcGxpZGUucHJvdG90eXBlO1xuXG4gIF9wcm90by5tb3VudCA9IGZ1bmN0aW9uIG1vdW50KEV4dGVuc2lvbnMsIFRyYW5zaXRpb24pIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgaWYgKEV4dGVuc2lvbnMgPT09IHZvaWQgMCkge1xuICAgICAgRXh0ZW5zaW9ucyA9IHRoaXMuX2U7XG4gICAgfVxuXG4gICAgaWYgKFRyYW5zaXRpb24gPT09IHZvaWQgMCkge1xuICAgICAgVHJhbnNpdGlvbiA9IHRoaXMuX3Q7XG4gICAgfVxuXG4gICAgLy8gUmVzZXQgdGhlIHN0YXRlLlxuICAgIHRoaXMuU3RhdGUuc2V0KENSRUFURUQpO1xuICAgIHRoaXMuX2UgPSBFeHRlbnNpb25zO1xuICAgIHRoaXMuX3QgPSBUcmFuc2l0aW9uO1xuICAgIHRoaXMuQ29tcG9uZW50cyA9IGNvbXBvc2UodGhpcywgbWVyZ2UodGhpcy5fYywgRXh0ZW5zaW9ucyksIFRyYW5zaXRpb24pO1xuXG4gICAgdHJ5IHtcbiAgICAgIGVhY2godGhpcy5Db21wb25lbnRzLCBmdW5jdGlvbiAoY29tcG9uZW50LCBrZXkpIHtcbiAgICAgICAgdmFyIHJlcXVpcmVkID0gY29tcG9uZW50LnJlcXVpcmVkO1xuXG4gICAgICAgIGlmIChyZXF1aXJlZCA9PT0gdW5kZWZpbmVkIHx8IHJlcXVpcmVkKSB7XG4gICAgICAgICAgY29tcG9uZW50Lm1vdW50ICYmIGNvbXBvbmVudC5tb3VudCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRlbGV0ZSBfdGhpcy5Db21wb25lbnRzW2tleV07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGVycm9yKGUubWVzc2FnZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIFN0YXRlID0gdGhpcy5TdGF0ZTtcbiAgICBTdGF0ZS5zZXQoTU9VTlRFRCk7XG4gICAgZWFjaCh0aGlzLkNvbXBvbmVudHMsIGZ1bmN0aW9uIChjb21wb25lbnQpIHtcbiAgICAgIGNvbXBvbmVudC5tb3VudGVkICYmIGNvbXBvbmVudC5tb3VudGVkKCk7XG4gICAgfSk7XG4gICAgdGhpcy5lbWl0KCdtb3VudGVkJyk7XG4gICAgU3RhdGUuc2V0KElETEUpO1xuICAgIHRoaXMuZW1pdCgncmVhZHknKTtcbiAgICBhcHBseVN0eWxlKHRoaXMucm9vdCwge1xuICAgICAgdmlzaWJpbGl0eTogJ3Zpc2libGUnXG4gICAgfSk7XG4gICAgdGhpcy5vbignbW92ZSBkcmFnJywgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIFN0YXRlLnNldChNT1ZJTkcpO1xuICAgIH0pLm9uKCdtb3ZlZCBkcmFnZ2VkJywgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIFN0YXRlLnNldChJRExFKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICAvKipcclxuICAgKiBTZXQgc3luYyB0YXJnZXQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge1NwbGlkZX0gc3BsaWRlIC0gQSBTcGxpZGUgaW5zdGFuY2UuXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHtTcGxpZGV9IC0gVGhpcyBpbnN0YW5jZS5cclxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5zeW5jID0gZnVuY3Rpb24gc3luYyhzcGxpZGUpIHtcbiAgICB0aGlzLnNpYmxpbmcgPSBzcGxpZGU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgLyoqXHJcbiAgICogUmVnaXN0ZXIgY2FsbGJhY2sgZmlyZWQgb24gdGhlIGdpdmVuIGV2ZW50KHMpLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9ICAgZXZlbnRzICAtIEFuIGV2ZW50IG5hbWUuIFVzZSBzcGFjZSB0byBzZXBhcmF0ZSBtdWx0aXBsZSBldmVudHMuXHJcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFsc28sIG5hbWVzcGFjZSBpcyBhY2NlcHRlZCBieSBkb3QsIHN1Y2ggYXMgJ3Jlc2l6ZS57bmFtZXNwYWNlfScuXHJcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gaGFuZGxlciAtIEEgY2FsbGJhY2sgZnVuY3Rpb24uXHJcbiAgICogQHBhcmFtIHtFbGVtZW50fSAgZWxtICAgICAtIE9wdGlvbmFsLiBOYXRpdmUgZXZlbnQgd2lsbCBiZSBsaXN0ZW5lZCB0byB3aGVuIHRoaXMgYXJnIGlzIHByb3ZpZGVkLlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAgIG9wdGlvbnMgLSBPcHRpb25hbC4gT3B0aW9ucyBmb3IgYWRkRXZlbnRMaXN0ZW5lci5cclxuICAgKlxyXG4gICAqIEByZXR1cm4ge1NwbGlkZX0gLSBUaGlzIGluc3RhbmNlLlxyXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLm9uID0gZnVuY3Rpb24gb24oZXZlbnRzLCBoYW5kbGVyLCBlbG0sIG9wdGlvbnMpIHtcbiAgICBpZiAoZWxtID09PSB2b2lkIDApIHtcbiAgICAgIGVsbSA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH1cblxuICAgIHRoaXMuRXZlbnQub24oZXZlbnRzLCBoYW5kbGVyLCBlbG0sIG9wdGlvbnMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIC8qKlxyXG4gICAqIFVuc3Vic2NyaWJlIHRoZSBnaXZlbiBldmVudC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSAgZXZlbnRzIC0gQSBldmVudCBuYW1lLlxyXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWxtICAgIC0gT3B0aW9uYWwuIHJlbW92ZUV2ZW50TGlzdGVuZXIoKSB3aWxsIGJlIGNhbGxlZCB3aGVuIHRoaXMgYXJnIGlzIHByb3ZpZGVkLlxyXG4gICAqXHJcbiAgICogQHJldHVybiB7U3BsaWRlfSAtIFRoaXMgaW5zdGFuY2UuXHJcbiAgICovXG4gIDtcblxuICBfcHJvdG8ub2ZmID0gZnVuY3Rpb24gb2ZmKGV2ZW50cywgZWxtKSB7XG4gICAgaWYgKGVsbSA9PT0gdm9pZCAwKSB7XG4gICAgICBlbG0gPSBudWxsO1xuICAgIH1cblxuICAgIHRoaXMuRXZlbnQub2ZmKGV2ZW50cywgZWxtKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICAvKipcclxuICAgKiBFbWl0IGFuIGV2ZW50LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50IC0gQW4gZXZlbnQgbmFtZS5cclxuICAgKiBAcGFyYW0geyp9ICAgICAgYXJncyAgLSBBbnkgbnVtYmVyIG9mIGFyZ3VtZW50cyBwYXNzZWQgdG8gaGFuZGxlcnMuXHJcbiAgICovXG4gIDtcblxuICBfcHJvdG8uZW1pdCA9IGZ1bmN0aW9uIGVtaXQoZXZlbnQpIHtcbiAgICB2YXIgX3RoaXMkRXZlbnQ7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICAoX3RoaXMkRXZlbnQgPSB0aGlzLkV2ZW50KS5lbWl0LmFwcGx5KF90aGlzJEV2ZW50LCBbZXZlbnRdLmNvbmNhdChhcmdzKSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICAvKipcclxuICAgKiBHbyB0byB0aGUgc2xpZGUgc3BlY2lmaWVkIGJ5IHRoZSBnaXZlbiBjb250cm9sLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBjb250cm9sIC0gQSBjb250cm9sIHBhdHRlcm4uXHJcbiAgICogQHBhcmFtIHtib29sZWFufSAgICAgICB3YWl0ICAgIC0gT3B0aW9uYWwuIFdoZXRoZXIgdG8gd2FpdCBmb3IgdHJhbnNpdGlvbi5cclxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5nbyA9IGZ1bmN0aW9uIGdvKGNvbnRyb2wsIHdhaXQpIHtcbiAgICBpZiAod2FpdCA9PT0gdm9pZCAwKSB7XG4gICAgICB3YWl0ID0gdGhpcy5vcHRpb25zLndhaXRGb3JUcmFuc2l0aW9uO1xuICAgIH1cblxuICAgIGlmICh0aGlzLlN0YXRlLmlzKElETEUpIHx8IHRoaXMuU3RhdGUuaXMoTU9WSU5HKSAmJiAhd2FpdCkge1xuICAgICAgdGhpcy5Db21wb25lbnRzLkNvbnRyb2xsZXIuZ28oY29udHJvbCwgZmFsc2UpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIC8qKlxyXG4gICAqIFZlcmlmeSB3aGV0aGVyIHRoZSBzbGlkZXIgdHlwZSBpcyB0aGUgZ2l2ZW4gb25lIG9yIG5vdC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIC0gQSBzbGlkZXIgdHlwZS5cclxuICAgKlxyXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IC0gVHJ1ZSBpZiB0aGUgc2xpZGVyIHR5cGUgaXMgdGhlIHByb3ZpZGVkIHR5cGUgb3IgZmFsc2UgaWYgbm90LlxyXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmlzID0gZnVuY3Rpb24gaXModHlwZSkge1xuICAgIHJldHVybiB0eXBlID09PSB0aGlzLl9vLnR5cGU7XG4gIH1cbiAgLyoqXHJcbiAgICogSW5zZXJ0IGEgc2xpZGUuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0VsZW1lbnR8c3RyaW5nfSBzbGlkZSAtIEEgc2xpZGUgZWxlbWVudCB0byBiZSBhZGRlZC5cclxuICAgKiBAcGFyYW0ge251bWJlcn0gICAgICAgICBpbmRleCAtIEEgc2xpZGUgd2lsbCBiZSBhZGRlZCBhdCB0aGUgcG9zaXRpb24uXHJcbiAgICovXG4gIDtcblxuICBfcHJvdG8uYWRkID0gZnVuY3Rpb24gYWRkKHNsaWRlLCBpbmRleCkge1xuICAgIGlmIChpbmRleCA9PT0gdm9pZCAwKSB7XG4gICAgICBpbmRleCA9IC0xO1xuICAgIH1cblxuICAgIHRoaXMuQ29tcG9uZW50cy5FbGVtZW50cy5hZGQoc2xpZGUsIGluZGV4LCB0aGlzLnJlZnJlc2guYmluZCh0aGlzKSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgLyoqXHJcbiAgICogUmVtb3ZlIHRoZSBzbGlkZSBkZXNpZ25hdGVkIGJ5IHRoZSBpbmRleC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCAtIEEgc2xpZGUgaW5kZXguXHJcbiAgICovXG4gIDtcblxuICBfcHJvdG8ucmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKGluZGV4KSB7XG4gICAgdGhpcy5Db21wb25lbnRzLkVsZW1lbnRzLnJlbW92ZShpbmRleCk7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgLyoqXHJcbiAgICogRGVzdHJveSBhbGwgU2xpZGUgb2JqZWN0cyBhbmQgY2xvbmVzIGFuZCByZWNyZWF0ZSB0aGVtIGFnYWluLlxyXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnJlZnJlc2ggPSBmdW5jdGlvbiByZWZyZXNoKCkge1xuICAgIHRoaXMuZW1pdCgncmVmcmVzaDpiZWZvcmUnKS5lbWl0KCdyZWZyZXNoJykuZW1pdCgncmVzaXplJyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgLyoqXHJcbiAgICogRGVzdHJveSB0aGUgU3BsaWRlLlxyXG4gICAqIFwiQ29tcGxldGVseVwiIGJvb2xlYW4gaXMgbWFpbmx5IGZvciBicmVha3BvaW50cy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gY29tcGxldGVseSAtIERlc3Ryb3kgY29tcGxldGVseS5cclxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5kZXN0cm95ID0gZnVuY3Rpb24gZGVzdHJveShjb21wbGV0ZWx5KSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICBpZiAoY29tcGxldGVseSA9PT0gdm9pZCAwKSB7XG4gICAgICBjb21wbGV0ZWx5ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBQb3N0cG9uZSBkZXN0cm95IGJlY2F1c2UgaXQgc2hvdWxkIGJlIGRvbmUgYWZ0ZXIgbW91bnQuXG4gICAgaWYgKHRoaXMuU3RhdGUuaXMoQ1JFQVRFRCkpIHtcbiAgICAgIHRoaXMub24oJ3JlYWR5JywgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMyLmRlc3Ryb3koY29tcGxldGVseSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YWx1ZXModGhpcy5Db21wb25lbnRzKS5yZXZlcnNlKCkuZm9yRWFjaChmdW5jdGlvbiAoY29tcG9uZW50KSB7XG4gICAgICBjb21wb25lbnQuZGVzdHJveSAmJiBjb21wb25lbnQuZGVzdHJveShjb21wbGV0ZWx5KTtcbiAgICB9KTtcbiAgICB0aGlzLmVtaXQoJ2Rlc3Ryb3knLCBjb21wbGV0ZWx5KTsgLy8gRGVzdHJveSBhbGwgZXZlbnQgaGFuZGxlcnMsIGluY2x1ZGluZyBvbmVzIGZvciBuYXRpdmUgZXZlbnRzLlxuXG4gICAgdGhpcy5FdmVudC5kZXN0cm95KCk7XG4gICAgdGhpcy5TdGF0ZS5zZXQoREVTVFJPWUVEKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICAvKipcclxuICAgKiBSZXR1cm4gdGhlIGN1cnJlbnQgc2xpZGUgaW5kZXguXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHtudW1iZXJ9IC0gVGhlIGN1cnJlbnQgc2xpZGUgaW5kZXguXHJcbiAgIC8vICovXG4gIDtcblxuICBfY3JlYXRlQ2xhc3MoU3BsaWRlLCBbe1xuICAgIGtleTogXCJpbmRleFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2k7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogU2V0IHRoZSBjdXJyZW50IHNsaWRlIGluZGV4LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ30gaW5kZXggLSBBIG5ldyBpbmRleC5cclxuICAgICAqL1xuICAgICxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChpbmRleCkge1xuICAgICAgdGhpcy5faSA9IHBhcnNlSW50KGluZGV4KTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm4gbGVuZ3RoIG9mIHNsaWRlcy5cclxuICAgICAqIFRoaXMgaXMgYW4gYWxpYXMgb2YgRWxlbWVudHMubGVuZ3RoLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge251bWJlcn0gLSBBIG51bWJlciBvZiBzbGlkZXMuXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImxlbmd0aFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuQ29tcG9uZW50cy5FbGVtZW50cy5sZW5ndGg7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIG9wdGlvbnMuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7T2JqZWN0fSAtIE9wdGlvbnMgb2JqZWN0LlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJvcHRpb25zXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbztcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBTZXQgb3B0aW9ucyB3aXRoIG1lcmdpbmcgdGhlIGdpdmVuIG9iamVjdCB0byB0aGUgY3VycmVudCBvbmUuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBOZXcgb3B0aW9ucy5cclxuICAgICAqL1xuICAgICxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChvcHRpb25zKSB7XG4gICAgICB2YXIgY3JlYXRlZCA9IHRoaXMuU3RhdGUuaXMoQ1JFQVRFRCk7XG5cbiAgICAgIGlmICghY3JlYXRlZCkge1xuICAgICAgICB0aGlzLmVtaXQoJ3VwZGF0ZScpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9vID0gbWVyZ2UodGhpcy5fbywgb3B0aW9ucyk7XG5cbiAgICAgIGlmICghY3JlYXRlZCkge1xuICAgICAgICB0aGlzLmVtaXQoJ3VwZGF0ZWQnLCB0aGlzLl9vKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm4gdGhlIGNsYXNzIGxpc3QuXHJcbiAgICAgKiBUaGlzIGlzIGFuIGFsaWFzIG9mIFNwbGlkZS5vcHRpb25zLmNsYXNzTGlzdC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IC0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgYWxsIGNsYXNzIGxpc3QuXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImNsYXNzZXNcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9vLmNsYXNzZXM7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIHRoZSBpMThuIHN0cmluZ3MuXHJcbiAgICAgKiBUaGlzIGlzIGFuIGFsaWFzIG9mIFNwbGlkZS5vcHRpb25zLmkxOG4uXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7T2JqZWN0fSAtIEFuIG9iamVjdCBjb250YWluaW5nIGFsbCBpMThuIHN0cmluZ3MuXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImkxOG5cIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9vLmkxOG47XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFNwbGlkZTtcbn0oKTtcblxuXG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvanMvY29tcG9uZW50cy9vcHRpb25zL2luZGV4LmpzXG4vKipcclxuICogVGhlIGNvbXBvbmVudCBmb3IgaW5pdGlhbGl6aW5nIG9wdGlvbnMuXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgTmFvdG9zaGkgRnVqaXRhXHJcbiAqIEBjb3B5cmlnaHQgTmFvdG9zaGkgRnVqaXRhLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKi9cblxuXG5cbi8qKlxyXG4gKiBUaGUgY29tcG9uZW50IGZvciBpbml0aWFsaXppbmcgb3B0aW9ucy5cclxuICpcclxuICogQHBhcmFtIHtTcGxpZGV9IFNwbGlkZSAtIEEgU3BsaWRlIGluc3RhbmNlLlxyXG4gKlxyXG4gKiBAcmV0dXJuIHtPYmplY3R9IC0gVGhlIGNvbXBvbmVudCBvYmplY3QuXHJcbiAqL1xuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIGNvbnN0IG9wdGlvbnMgPSAoZnVuY3Rpb24gKFNwbGlkZSkge1xuICAvKipcclxuICAgKiBSZXRyaWV2ZSBvcHRpb25zIGZyb20gdGhlIGRhdGEgYXR0cmlidXRlLlxyXG4gICAqIE5vdGUgdGhhdCBJRTEwIGRvZXNuJ3Qgc3VwcG9ydCBkYXRhc2V0IHByb3BlcnR5LlxyXG4gICAqXHJcbiAgICogQHR5cGUge3N0cmluZ31cclxuICAgKi9cbiAgdmFyIG9wdGlvbnMgPSBnZXRBdHRyaWJ1dGUoU3BsaWRlLnJvb3QsICdkYXRhLXNwbGlkZScpO1xuXG4gIGlmIChvcHRpb25zKSB7XG4gICAgdHJ5IHtcbiAgICAgIFNwbGlkZS5vcHRpb25zID0gSlNPTi5wYXJzZShvcHRpb25zKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBlcnJvcihlLm1lc3NhZ2UpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWQuXHJcbiAgICAgKi9cbiAgICBtb3VudDogZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgICBpZiAoU3BsaWRlLlN0YXRlLmlzKENSRUFURUQpKSB7XG4gICAgICAgIFNwbGlkZS5pbmRleCA9IFNwbGlkZS5vcHRpb25zLnN0YXJ0O1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn0pO1xuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2pzL2NvbnN0YW50cy9kaXJlY3Rpb25zLmpzXG4vKipcclxuICogRXhwb3J0IGxheW91dCBtb2Rlcy5cclxuICpcclxuICogQGF1dGhvciAgICBOYW90b3NoaSBGdWppdGFcclxuICogQGNvcHlyaWdodCBOYW90b3NoaSBGdWppdGEuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqL1xuXG4vKipcclxuICogRW51bWVyYXRlIHNsaWRlcyBmcm9tIGxlZnQgdG8gcmlnaHQuXHJcbiAqXHJcbiAqIEB0eXBlIHtzdHJpbmd9XHJcbiAqL1xudmFyIExUUiA9ICdsdHInO1xuLyoqXHJcbiAqIEVudW1lcmF0ZSBzbGlkZXMgZnJvbSByaWdodCB0byBsZWZ0LlxyXG4gKlxyXG4gKiBAdHlwZSB7c3RyaW5nfVxyXG4gKi9cblxudmFyIFJUTCA9ICdydGwnO1xuLyoqXHJcbiAqIEVudW1lcmF0ZSBzbGlkZXMgaW4gYSBjb2wuXHJcbiAqXHJcbiAqIEB0eXBlIHtzdHJpbmd9XHJcbiAqL1xuXG52YXIgVFRCID0gJ3R0Yic7XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvanMvY29tcG9uZW50cy9lbGVtZW50cy9zbGlkZS5qc1xuLyoqXHJcbiAqIFRoZSBzdWIgY29tcG9uZW50IGZvciBoYW5kbGluZyBlYWNoIHNsaWRlLlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgIE5hb3Rvc2hpIEZ1aml0YVxyXG4gKiBAY29weXJpZ2h0IE5hb3Rvc2hpIEZ1aml0YS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICovXG5cblxuXG5cblxuXG4vKipcclxuICogRXZlbnRzIGZvciByZXN0b3Jpbmcgb3JpZ2luYWwgc3R5bGVzLlxyXG4gKlxyXG4gKiBAdHlwZSB7c3RyaW5nfVxyXG4gKi9cblxudmFyIFNUWUxFX1JFU1RPUkVfRVZFTlRTID0gJ3VwZGF0ZS5zbGlkZSc7XG4vKipcclxuICogVGhlIHN1YiBjb21wb25lbnQgZm9yIGhhbmRsaW5nIGVhY2ggc2xpZGUuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3BsaWRlfSAgU3BsaWRlICAgIC0gQSBTcGxpZGUgaW5zdGFuY2UuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSAgaW5kZXggICAgIC0gQW4gdW5pcXVlIHNsaWRlIGluZGV4LlxyXG4gKiBAcGFyYW0ge251bWJlcn0gIHJlYWxJbmRleCAtIENsb25lcyBzaG91bGQgcGFzcyBhIHJlYWwgc2xpZGUgaW5kZXguXHJcbiAqIEBwYXJhbSB7RWxlbWVudH0gc2xpZGUgICAgIC0gQSBzbGlkZSBlbGVtZW50LlxyXG4gKlxyXG4gKiBAcmV0dXJuIHtPYmplY3R9IC0gVGhlIHN1YiBjb21wb25lbnQgb2JqZWN0LlxyXG4gKi9cblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBjb25zdCBlbGVtZW50c19zbGlkZSA9IChmdW5jdGlvbiAoU3BsaWRlLCBpbmRleCwgcmVhbEluZGV4LCBzbGlkZSkge1xuICAvKipcclxuICAgKiBXaGV0aGVyIHRvIHVwZGF0ZSBcImlzLWFjdGl2ZVwiIGNsYXNzIGJlZm9yZSBvciBhZnRlciB0cmFuc2l0aW9uLlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICovXG4gIHZhciB1cGRhdGVPbk1vdmUgPSBTcGxpZGUub3B0aW9ucy51cGRhdGVPbk1vdmU7XG4gIC8qKlxyXG4gICAqIEV2ZW50cyB3aGVuIHRoZSBzbGlkZSBzdGF0dXMgaXMgdXBkYXRlZC5cclxuICAgKiBBcHBlbmQgYSBuYW1lc3BhY2UgdG8gcmVtb3ZlIGxpc3RlbmVycyBsYXRlci5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICovXG5cbiAgdmFyIFNUQVRVU19VUERBVEVfRVZFTlRTID0gJ3JlYWR5LnNsaWRlIHVwZGF0ZWQuc2xpZGUgcmVzaXplZC5zbGlkZSBtb3ZlZC5zbGlkZScgKyAodXBkYXRlT25Nb3ZlID8gJyBtb3ZlLnNsaWRlJyA6ICcnKTtcbiAgLyoqXHJcbiAgICogU2xpZGUgc3ViIGNvbXBvbmVudCBvYmplY3QuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAqL1xuXG4gIHZhciBTbGlkZSA9IHtcbiAgICAvKipcclxuICAgICAqIFNsaWRlIGVsZW1lbnQuXHJcbiAgICAgKlxyXG4gICAgICogQHR5cGUge0VsZW1lbnR9XHJcbiAgICAgKi9cbiAgICBzbGlkZTogc2xpZGUsXG5cbiAgICAvKipcclxuICAgICAqIFNsaWRlIGluZGV4LlxyXG4gICAgICpcclxuICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgKi9cbiAgICBpbmRleDogaW5kZXgsXG5cbiAgICAvKipcclxuICAgICAqIFJlYWwgaW5kZXggZm9yIGNsb25lcy5cclxuICAgICAqXHJcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICovXG4gICAgcmVhbEluZGV4OiByZWFsSW5kZXgsXG5cbiAgICAvKipcclxuICAgICAqIENvbnRhaW5lciBlbGVtZW50IGlmIGF2YWlsYWJsZS5cclxuICAgICAqXHJcbiAgICAgKiBAdHlwZSB7RWxlbWVudHx1bmRlZmluZWR9XHJcbiAgICAgKi9cbiAgICBjb250YWluZXI6IGNoaWxkKHNsaWRlLCBTcGxpZGUuY2xhc3Nlcy5jb250YWluZXIpLFxuXG4gICAgLyoqXHJcbiAgICAgKiBXaGV0aGVyIHRoaXMgaXMgYSBjbG9uZWQgc2xpZGUgb3Igbm90LlxyXG4gICAgICpcclxuICAgICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAgICovXG4gICAgaXNDbG9uZTogcmVhbEluZGV4ID4gLTEsXG5cbiAgICAvKipcclxuICAgICAqIENhbGxlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgbW91bnRlZC5cclxuICAgICAqL1xuICAgIG1vdW50OiBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIGlmICghdGhpcy5pc0Nsb25lKSB7XG4gICAgICAgIHNsaWRlLmlkID0gU3BsaWRlLnJvb3QuaWQgKyBcIi1zbGlkZVwiICsgcGFkKGluZGV4ICsgMSk7XG4gICAgICB9XG5cbiAgICAgIFNwbGlkZS5vbihTVEFUVVNfVVBEQVRFX0VWRU5UUywgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMudXBkYXRlKCk7XG4gICAgICB9KS5vbihTVFlMRV9SRVNUT1JFX0VWRU5UUywgcmVzdG9yZVN0eWxlcykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gU3BsaWRlLmVtaXQoJ2NsaWNrJywgX3RoaXMpO1xuICAgICAgfSwgc2xpZGUpO1xuICAgICAgLypcclxuICAgICAgICogQWRkIFwiaXMtYWN0aXZlXCIgY2xhc3MgdG8gYSBjbG9uZSBlbGVtZW50IHRlbXBvcmFyaWx5XHJcbiAgICAgICAqIGFuZCBpdCB3aWxsIGJlIHJlbW92ZWQgb24gXCJtb3ZlZFwiIGV2ZW50LlxyXG4gICAgICAgKi9cblxuICAgICAgaWYgKHVwZGF0ZU9uTW92ZSkge1xuICAgICAgICBTcGxpZGUub24oJ21vdmUuc2xpZGUnLCBmdW5jdGlvbiAobmV3SW5kZXgpIHtcbiAgICAgICAgICBpZiAobmV3SW5kZXggPT09IHJlYWxJbmRleCkge1xuICAgICAgICAgICAgX3VwZGF0ZSh0cnVlLCBmYWxzZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gLy8gTWFrZSBzdXJlIHRoZSBzbGlkZSBpcyBzaG93bi5cblxuXG4gICAgICBhcHBseVN0eWxlKHNsaWRlLCB7XG4gICAgICAgIGRpc3BsYXk6ICcnXG4gICAgICB9KTsgLy8gSG9sZCB0aGUgb3JpZ2luYWwgc3R5bGVzLlxuXG4gICAgICB0aGlzLnN0eWxlcyA9IGdldEF0dHJpYnV0ZShzbGlkZSwgJ3N0eWxlJykgfHwgJyc7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogRGVzdHJveS5cclxuICAgICAqL1xuICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICBTcGxpZGUub2ZmKFNUQVRVU19VUERBVEVfRVZFTlRTKS5vZmYoU1RZTEVfUkVTVE9SRV9FVkVOVFMpLm9mZignY2xpY2snLCBzbGlkZSk7XG4gICAgICByZW1vdmVDbGFzcyhzbGlkZSwgdmFsdWVzKFNUQVRVU19DTEFTU0VTKSk7XG4gICAgICByZXN0b3JlU3R5bGVzKCk7XG4gICAgICByZW1vdmVBdHRyaWJ1dGUodGhpcy5jb250YWluZXIsICdzdHlsZScpO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIFVwZGF0ZSBhY3RpdmUgYW5kIHZpc2libGUgc3RhdHVzLlxyXG4gICAgICovXG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgICBfdXBkYXRlKHRoaXMuaXNBY3RpdmUoKSwgZmFsc2UpO1xuXG4gICAgICBfdXBkYXRlKHRoaXMuaXNWaXNpYmxlKCksIHRydWUpO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIENoZWNrIHdoZXRoZXIgdGhpcyBzbGlkZSBpcyBhY3RpdmUgb3Igbm90LlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IC0gVHJ1ZSBpZiB0aGUgc2xpZGUgaXMgYWN0aXZlIG9yIGZhbHNlIGlmIG5vdC5cclxuICAgICAqL1xuICAgIGlzQWN0aXZlOiBmdW5jdGlvbiBpc0FjdGl2ZSgpIHtcbiAgICAgIHJldHVybiBTcGxpZGUuaW5kZXggPT09IGluZGV4O1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIENoZWNrIHdoZXRoZXIgdGhpcyBzbGlkZSBpcyB2aXNpYmxlIGluIHRoZSB2aWV3cG9ydCBvciBub3QuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gLSBUcnVlIGlmIHRoZSBzbGlkZSBpcyB2aXNpYmxlIG9yIGZhbHNlIGlmIG5vdC5cclxuICAgICAqL1xuICAgIGlzVmlzaWJsZTogZnVuY3Rpb24gaXNWaXNpYmxlKCkge1xuICAgICAgdmFyIGFjdGl2ZSA9IHRoaXMuaXNBY3RpdmUoKTtcblxuICAgICAgaWYgKFNwbGlkZS5pcyhGQURFKSB8fCBhY3RpdmUpIHtcbiAgICAgICAgcmV0dXJuIGFjdGl2ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIGNlaWwgPSBNYXRoLmNlaWw7XG4gICAgICB2YXIgdHJhY2tSZWN0ID0gZ2V0UmVjdChTcGxpZGUuQ29tcG9uZW50cy5FbGVtZW50cy50cmFjayk7XG4gICAgICB2YXIgc2xpZGVSZWN0ID0gZ2V0UmVjdChzbGlkZSk7XG5cbiAgICAgIGlmIChTcGxpZGUub3B0aW9ucy5kaXJlY3Rpb24gPT09IFRUQikge1xuICAgICAgICByZXR1cm4gdHJhY2tSZWN0LnRvcCA8PSBzbGlkZVJlY3QudG9wICYmIHNsaWRlUmVjdC5ib3R0b20gPD0gY2VpbCh0cmFja1JlY3QuYm90dG9tKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRyYWNrUmVjdC5sZWZ0IDw9IHNsaWRlUmVjdC5sZWZ0ICYmIHNsaWRlUmVjdC5yaWdodCA8PSBjZWlsKHRyYWNrUmVjdC5yaWdodCk7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogQ2FsY3VsYXRlIGhvdyBmYXIgdGhpcyBzbGlkZSBpcyBmcm9tIGFub3RoZXIgc2xpZGUgYW5kXHJcbiAgICAgKiByZXR1cm4gdHJ1ZSBpZiB0aGUgZGlzdGFuY2UgaXMgd2l0aGluIHRoZSBnaXZlbiBudW1iZXIuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGZyb20gICAtIEluZGV4IG9mIGEgdGFyZ2V0IHNsaWRlLlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHdpdGhpbiAtIFRydWUgaWYgdGhlIHNsaWRlIGlzIHdpdGhpbiB0aGlzIG51bWJlci5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSAtIFRydWUgaWYgdGhlIHNsaWRlIGlzIHdpdGhpbiB0aGUgbnVtYmVyIG9yIGZhbHNlIG90aGVyd2lzZS5cclxuICAgICAqL1xuICAgIGlzV2l0aGluOiBmdW5jdGlvbiBpc1dpdGhpbihmcm9tLCB3aXRoaW4pIHtcbiAgICAgIHZhciBkaWZmID0gTWF0aC5hYnMoZnJvbSAtIGluZGV4KTtcblxuICAgICAgaWYgKCFTcGxpZGUuaXMoU0xJREUpICYmICF0aGlzLmlzQ2xvbmUpIHtcbiAgICAgICAgZGlmZiA9IE1hdGgubWluKGRpZmYsIFNwbGlkZS5sZW5ndGggLSBkaWZmKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRpZmYgPCB3aXRoaW47XG4gICAgfVxuICB9O1xuICAvKipcclxuICAgKiBVcGRhdGUgY2xhc3NlcyBmb3IgYWN0aXZpdHkgb3IgdmlzaWJpbGl0eS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gYWN0aXZlICAgICAgICAtIElzIGFjdGl2ZS92aXNpYmxlIG9yIG5vdC5cclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGZvclZpc2liaWxpdHkgLSBUb2dnbGUgY2xhc3NlcyBmb3IgYWN0aXZpdHkgb3IgdmlzaWJpbGl0eS5cclxuICAgKi9cblxuICBmdW5jdGlvbiBfdXBkYXRlKGFjdGl2ZSwgZm9yVmlzaWJpbGl0eSkge1xuICAgIHZhciB0eXBlID0gZm9yVmlzaWJpbGl0eSA/ICd2aXNpYmxlJyA6ICdhY3RpdmUnO1xuICAgIHZhciBjbGFzc05hbWUgPSBTVEFUVVNfQ0xBU1NFU1t0eXBlXTtcblxuICAgIGlmIChhY3RpdmUpIHtcbiAgICAgIGFkZENsYXNzKHNsaWRlLCBjbGFzc05hbWUpO1xuICAgICAgU3BsaWRlLmVtaXQoXCJcIiArIHR5cGUsIFNsaWRlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGhhc0NsYXNzKHNsaWRlLCBjbGFzc05hbWUpKSB7XG4gICAgICAgIHJlbW92ZUNsYXNzKHNsaWRlLCBjbGFzc05hbWUpO1xuICAgICAgICBTcGxpZGUuZW1pdChcIlwiICsgKGZvclZpc2liaWxpdHkgPyAnaGlkZGVuJyA6ICdpbmFjdGl2ZScpLCBTbGlkZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8qKlxyXG4gICAqIFJlc3RvcmUgdGhlIG9yaWdpbmFsIHN0eWxlcy5cclxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIHJlc3RvcmVTdHlsZXMoKSB7XG4gICAgc2V0QXR0cmlidXRlKHNsaWRlLCAnc3R5bGUnLCBTbGlkZS5zdHlsZXMpO1xuICB9XG5cbiAgcmV0dXJuIFNsaWRlO1xufSk7XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvanMvY29tcG9uZW50cy9lbGVtZW50cy9pbmRleC5qc1xuLyoqXHJcbiAqIFRoZSBjb21wb25lbnQgZm9yIG1haW4gZWxlbWVudHMuXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgTmFvdG9zaGkgRnVqaXRhXHJcbiAqIEBjb3B5cmlnaHQgTmFvdG9zaGkgRnVqaXRhLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKi9cblxuXG5cblxuXG4vKipcclxuICogVGhlIHByb3BlcnR5IG5hbWUgZm9yIFVJRCBzdG9yZWQgaW4gYSB3aW5kb3cgb2JqZWN0LlxyXG4gKlxyXG4gKiBAdHlwZSB7c3RyaW5nfVxyXG4gKi9cblxudmFyIFVJRF9OQU1FID0gJ3VpZCc7XG4vKipcclxuICogVGhlIGNvbXBvbmVudCBmb3IgbWFpbiBlbGVtZW50cy5cclxuICpcclxuICogQHBhcmFtIHtTcGxpZGV9IFNwbGlkZSAgICAgLSBBIFNwbGlkZSBpbnN0YW5jZS5cclxuICogQHBhcmFtIHtPYmplY3R9IENvbXBvbmVudHMgLSBBbiBvYmplY3QgY29udGFpbmluZyBjb21wb25lbnRzLlxyXG4gKlxyXG4gKiBAcmV0dXJuIHtPYmplY3R9IC0gVGhlIGNvbXBvbmVudCBvYmplY3QuXHJcbiAqL1xuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIGNvbnN0IGNvbXBvbmVudHNfZWxlbWVudHMgPSAoZnVuY3Rpb24gKFNwbGlkZSwgQ29tcG9uZW50cykge1xuICAvKipcclxuICAgKiBIb2xkIHRoZSByb290IGVsZW1lbnQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7RWxlbWVudH1cclxuICAgKi9cbiAgdmFyIHJvb3QgPSBTcGxpZGUucm9vdDtcbiAgLyoqXHJcbiAgICogSG9sZCB0aGUgY2xhc3MgbGlzdC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICovXG5cbiAgdmFyIGNsYXNzZXMgPSBTcGxpZGUuY2xhc3NlcztcbiAgLyoqXHJcbiAgICogU3RvcmUgU2xpZGUgb2JqZWN0cy5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtBcnJheX1cclxuICAgKi9cblxuICB2YXIgU2xpZGVzID0gW107XG4gIC8qXHJcbiAgICogQXNzaWduIHVuaXF1ZSBJRCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGl0IGRvZXNuJ3QgaGF2ZSB0aGUgb25lLlxyXG4gICAqIE5vdGUgdGhhdCBJRSBkb2Vzbid0IHN1cHBvcnQgcGFkU3RhcnQoKSB0byBmaWxsIHRoZSB1aWQgYnkgMC5cclxuICAgKi9cblxuICBpZiAoIXJvb3QuaWQpIHtcbiAgICB3aW5kb3cuc3BsaWRlID0gd2luZG93LnNwbGlkZSB8fCB7fTtcbiAgICB2YXIgdWlkID0gd2luZG93LnNwbGlkZVtVSURfTkFNRV0gfHwgMDtcbiAgICB3aW5kb3cuc3BsaWRlW1VJRF9OQU1FXSA9ICsrdWlkO1xuICAgIHJvb3QuaWQgPSBcInNwbGlkZVwiICsgcGFkKHVpZCk7XG4gIH1cbiAgLyoqXHJcbiAgICogRWxlbWVudHMgY29tcG9uZW50IG9iamVjdC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICovXG5cblxuICB2YXIgRWxlbWVudHMgPSB7XG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWQuXHJcbiAgICAgKiBDb2xsZWN0IG1haW4gZWxlbWVudHMgYW5kIHN0b3JlIHRoZW0gYXMgbWVtYmVyIHByb3BlcnRpZXMuXHJcbiAgICAgKi9cbiAgICBtb3VudDogZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICB0aGlzLmluaXQoKTtcbiAgICAgIFNwbGlkZS5vbigncmVmcmVzaCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMuZGVzdHJveSgpO1xuXG4gICAgICAgIF90aGlzLmluaXQoKTtcbiAgICAgIH0pLm9uKCd1cGRhdGVkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICByZW1vdmVDbGFzcyhyb290LCBnZXRDbGFzc2VzKCkpO1xuICAgICAgICBhZGRDbGFzcyhyb290LCBnZXRDbGFzc2VzKCkpO1xuICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogRGVzdHJveS5cclxuICAgICAqL1xuICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICBTbGlkZXMuZm9yRWFjaChmdW5jdGlvbiAoU2xpZGUpIHtcbiAgICAgICAgU2xpZGUuZGVzdHJveSgpO1xuICAgICAgfSk7XG4gICAgICBTbGlkZXMgPSBbXTtcbiAgICAgIHJlbW92ZUNsYXNzKHJvb3QsIGdldENsYXNzZXMoKSk7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6YXRpb24uXHJcbiAgICAgKi9cbiAgICBpbml0OiBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIGNvbGxlY3QoKTtcbiAgICAgIGFkZENsYXNzKHJvb3QsIGdldENsYXNzZXMoKSk7XG4gICAgICB0aGlzLnNsaWRlcy5mb3JFYWNoKGZ1bmN0aW9uIChzbGlkZSwgaW5kZXgpIHtcbiAgICAgICAgX3RoaXMyLnJlZ2lzdGVyKHNsaWRlLCBpbmRleCwgLTEpO1xuICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogUmVnaXN0ZXIgYSBzbGlkZSB0byBjcmVhdGUgYSBTbGlkZSBvYmplY3QgYW5kIGhhbmRsZSBpdHMgYmVoYXZpb3IuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBzbGlkZSAgICAgLSBBIHNsaWRlIGVsZW1lbnQuXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gIGluZGV4ICAgICAtIEEgdW5pcXVlIGluZGV4LiBUaGlzIGNhbiBiZSBuZWdhdGl2ZS5cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSAgcmVhbEluZGV4IC0gQSByZWFsIGluZGV4IGZvciBjbG9uZXMuIFNldCAtMSBmb3IgcmVhbCBzbGlkZXMuXHJcbiAgICAgKi9cbiAgICByZWdpc3RlcjogZnVuY3Rpb24gcmVnaXN0ZXIoc2xpZGUsIGluZGV4LCByZWFsSW5kZXgpIHtcbiAgICAgIHZhciBTbGlkZU9iamVjdCA9IGVsZW1lbnRzX3NsaWRlKFNwbGlkZSwgaW5kZXgsIHJlYWxJbmRleCwgc2xpZGUpO1xuICAgICAgU2xpZGVPYmplY3QubW91bnQoKTtcbiAgICAgIFNsaWRlcy5wdXNoKFNsaWRlT2JqZWN0KTtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm4gdGhlIFNsaWRlIG9iamVjdCBkZXNpZ25hdGVkIGJ5IHRoZSBpbmRleC5cclxuICAgICAqIE5vdGUgdGhhdCBcImZpbmRcIiBpcyBub3Qgc3VwcG9ydGVkIGJ5IElFLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge09iamVjdHx1bmRlZmluZWR9IC0gQSBTbGlkZSBvYmplY3QgaWYgYXZhaWxhYmxlLiBVbmRlZmluZWQgaWYgbm90LlxyXG4gICAgICovXG4gICAgZ2V0U2xpZGU6IGZ1bmN0aW9uIGdldFNsaWRlKGluZGV4KSB7XG4gICAgICByZXR1cm4gU2xpZGVzLmZpbHRlcihmdW5jdGlvbiAoU2xpZGUpIHtcbiAgICAgICAgcmV0dXJuIFNsaWRlLmluZGV4ID09PSBpbmRleDtcbiAgICAgIH0pWzBdO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIFJldHVybiBhbGwgU2xpZGUgb2JqZWN0cy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGluY2x1ZGVDbG9uZXMgLSBXaGV0aGVyIHRvIGluY2x1ZGUgY2xvbmVkIHNsaWRlcyBvciBub3QuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7T2JqZWN0W119IC0gU2xpZGUgb2JqZWN0cy5cclxuICAgICAqL1xuICAgIGdldFNsaWRlczogZnVuY3Rpb24gZ2V0U2xpZGVzKGluY2x1ZGVDbG9uZXMpIHtcbiAgICAgIHJldHVybiBpbmNsdWRlQ2xvbmVzID8gU2xpZGVzIDogU2xpZGVzLmZpbHRlcihmdW5jdGlvbiAoU2xpZGUpIHtcbiAgICAgICAgcmV0dXJuICFTbGlkZS5pc0Nsb25lO1xuICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIFNsaWRlIG9iamVjdHMgYmVsb25naW5nIHRvIHRoZSBnaXZlbiBwYWdlLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwYWdlIC0gQSBwYWdlIG51bWJlci5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtPYmplY3RbXX0gLSBBbiBhcnJheSBjb250YWluaW5nIFNsaWRlIG9iamVjdHMuXHJcbiAgICAgKi9cbiAgICBnZXRTbGlkZXNCeVBhZ2U6IGZ1bmN0aW9uIGdldFNsaWRlc0J5UGFnZShwYWdlKSB7XG4gICAgICB2YXIgaWR4ID0gQ29tcG9uZW50cy5Db250cm9sbGVyLnRvSW5kZXgocGFnZSk7XG4gICAgICB2YXIgb3B0aW9ucyA9IFNwbGlkZS5vcHRpb25zO1xuICAgICAgdmFyIG1heCA9IG9wdGlvbnMuZm9jdXMgIT09IGZhbHNlID8gMSA6IG9wdGlvbnMucGVyUGFnZTtcbiAgICAgIHJldHVybiBTbGlkZXMuZmlsdGVyKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICAgIHZhciBpbmRleCA9IF9yZWYuaW5kZXg7XG4gICAgICAgIHJldHVybiBpZHggPD0gaW5kZXggJiYgaW5kZXggPCBpZHggKyBtYXg7XG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBJbnNlcnQgYSBzbGlkZSB0byBhIHNsaWRlci5cclxuICAgICAqIE5lZWQgdG8gcmVmcmVzaCBTcGxpZGUgYWZ0ZXIgYWRkaW5nIGEgc2xpZGUuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtOb2RlfHN0cmluZ30gc2xpZGUgICAgLSBBIHNsaWRlIGVsZW1lbnQgdG8gYmUgYWRkZWQuXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gICAgICBpbmRleCAgICAtIEEgc2xpZGUgd2lsbCBiZSBhZGRlZCBhdCB0aGUgcG9zaXRpb24uXHJcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSAgICBjYWxsYmFjayAtIENhbGxlZCByaWdodCBhZnRlciB0aGUgc2xpZGUgaXMgYWRkZWQgdG8gdGhlIERPTSB0cmVlLlxyXG4gICAgICovXG4gICAgYWRkOiBmdW5jdGlvbiBhZGQoc2xpZGUsIGluZGV4LCBjYWxsYmFjaykge1xuICAgICAgaWYgKHR5cGVvZiBzbGlkZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgc2xpZGUgPSBkb21pZnkoc2xpZGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc2xpZGUgaW5zdGFuY2VvZiBFbGVtZW50KSB7XG4gICAgICAgIHZhciByZWYgPSB0aGlzLnNsaWRlc1tpbmRleF07IC8vIFRoaXMgd2lsbCBiZSByZW1vdmVkIGluIG1vdW50KCkgb2YgYSBTbGlkZSBjb21wb25lbnQuXG5cbiAgICAgICAgYXBwbHlTdHlsZShzbGlkZSwge1xuICAgICAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAocmVmKSB7XG4gICAgICAgICAgYmVmb3JlKHNsaWRlLCByZWYpO1xuICAgICAgICAgIHRoaXMuc2xpZGVzLnNwbGljZShpbmRleCwgMCwgc2xpZGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFwcGVuZCh0aGlzLmxpc3QsIHNsaWRlKTtcbiAgICAgICAgICB0aGlzLnNsaWRlcy5wdXNoKHNsaWRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxvYWRlZChzbGlkZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKHNsaWRlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlIGEgc2xpZGUgZnJvbSBhIHNsaWRlci5cclxuICAgICAqIE5lZWQgdG8gcmVmcmVzaCBTcGxpZGUgYWZ0ZXIgcmVtb3ZpbmcgYSBzbGlkZS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gaW5kZXggLSBTbGlkZSBpbmRleC5cclxuICAgICAqL1xuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKGluZGV4KSB7XG4gICAgICBkb21fcmVtb3ZlKHRoaXMuc2xpZGVzLnNwbGljZShpbmRleCwgMSlbMF0pO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIFRyaWdnZXIgdGhlIHByb3ZpZGVkIGNhbGxiYWNrIGZvciBlYWNoIFNsaWRlIG9iamVjdC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayAtIEEgY2FsbGJhY2sgZnVuY3Rpb24uIFRoZSBmaXJzdCBhcmd1bWVudCB3aWxsIGJlIHRoZSBTbGlkZSBvYmplY3QuXHJcbiAgICAgKi9cbiAgICBlYWNoOiBmdW5jdGlvbiBlYWNoKGNhbGxiYWNrKSB7XG4gICAgICBTbGlkZXMuZm9yRWFjaChjYWxsYmFjayk7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIHNsaWRlcyBsZW5ndGggd2l0aG91dCBjbG9uZXMuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7bnVtYmVyfSAtIFNsaWRlIGxlbmd0aC5cclxuICAgICAqL1xuICAgIGdldCBsZW5ndGgoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zbGlkZXMubGVuZ3RoO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIFJldHVybiBcIlNsaWRlT2JqZWN0c1wiIGxlbmd0aCBpbmNsdWRpbmcgY2xvbmVzLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge251bWJlcn0gLSBTbGlkZSBsZW5ndGggaW5jbHVkaW5nIGNsb25lcy5cclxuICAgICAqL1xuICAgIGdldCB0b3RhbCgpIHtcbiAgICAgIHJldHVybiBTbGlkZXMubGVuZ3RoO1xuICAgIH1cblxuICB9O1xuICAvKipcclxuICAgKiBDb2xsZWN0IGVsZW1lbnRzLlxyXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGNvbGxlY3QoKSB7XG4gICAgRWxlbWVudHMuc2xpZGVyID0gY2hpbGQocm9vdCwgY2xhc3Nlcy5zbGlkZXIpO1xuICAgIEVsZW1lbnRzLnRyYWNrID0gZmluZChyb290LCBcIi5cIiArIGNsYXNzZXMudHJhY2spO1xuICAgIEVsZW1lbnRzLmxpc3QgPSBjaGlsZChFbGVtZW50cy50cmFjaywgY2xhc3Nlcy5saXN0KTtcbiAgICBleGlzdChFbGVtZW50cy50cmFjayAmJiBFbGVtZW50cy5saXN0LCAnVHJhY2sgb3IgbGlzdCB3YXMgbm90IGZvdW5kLicpO1xuICAgIEVsZW1lbnRzLnNsaWRlcyA9IGNoaWxkcmVuKEVsZW1lbnRzLmxpc3QsIGNsYXNzZXMuc2xpZGUpO1xuICAgIHZhciBhcnJvd3MgPSBmaW5kUGFydHMoY2xhc3Nlcy5hcnJvd3MpO1xuICAgIEVsZW1lbnRzLmFycm93cyA9IHtcbiAgICAgIHByZXY6IGZpbmQoYXJyb3dzLCBcIi5cIiArIGNsYXNzZXMucHJldiksXG4gICAgICBuZXh0OiBmaW5kKGFycm93cywgXCIuXCIgKyBjbGFzc2VzLm5leHQpXG4gICAgfTtcbiAgICB2YXIgYXV0b3BsYXkgPSBmaW5kUGFydHMoY2xhc3Nlcy5hdXRvcGxheSk7XG4gICAgRWxlbWVudHMuYmFyID0gZmluZChmaW5kUGFydHMoY2xhc3Nlcy5wcm9ncmVzcyksIFwiLlwiICsgY2xhc3Nlcy5iYXIpO1xuICAgIEVsZW1lbnRzLnBsYXkgPSBmaW5kKGF1dG9wbGF5LCBcIi5cIiArIGNsYXNzZXMucGxheSk7XG4gICAgRWxlbWVudHMucGF1c2UgPSBmaW5kKGF1dG9wbGF5LCBcIi5cIiArIGNsYXNzZXMucGF1c2UpO1xuICAgIEVsZW1lbnRzLnRyYWNrLmlkID0gRWxlbWVudHMudHJhY2suaWQgfHwgcm9vdC5pZCArIFwiLXRyYWNrXCI7XG4gICAgRWxlbWVudHMubGlzdC5pZCA9IEVsZW1lbnRzLmxpc3QuaWQgfHwgcm9vdC5pZCArIFwiLWxpc3RcIjtcbiAgfVxuICAvKipcclxuICAgKiBSZXR1cm4gY2xhc3MgbmFtZXMgZm9yIHRoZSByb290IGVsZW1lbnQuXHJcbiAgICovXG5cblxuICBmdW5jdGlvbiBnZXRDbGFzc2VzKCkge1xuICAgIHZhciByb290Q2xhc3MgPSBjbGFzc2VzLnJvb3Q7XG4gICAgdmFyIG9wdGlvbnMgPSBTcGxpZGUub3B0aW9ucztcbiAgICByZXR1cm4gW3Jvb3RDbGFzcyArIFwiLS1cIiArIG9wdGlvbnMudHlwZSwgcm9vdENsYXNzICsgXCItLVwiICsgb3B0aW9ucy5kaXJlY3Rpb24sIG9wdGlvbnMuZHJhZyA/IHJvb3RDbGFzcyArIFwiLS1kcmFnZ2FibGVcIiA6ICcnLCBvcHRpb25zLmlzTmF2aWdhdGlvbiA/IHJvb3RDbGFzcyArIFwiLS1uYXZcIiA6ICcnLCBTVEFUVVNfQ0xBU1NFUy5hY3RpdmVdO1xuICB9XG4gIC8qKlxyXG4gICAqIEZpbmQgcGFydHMgb25seSBmcm9tIGNoaWxkcmVuIG9mIHRoZSByb290IG9yIHRyYWNrLlxyXG4gICAqXHJcbiAgICogQHJldHVybiB7RWxlbWVudH0gLSBBIGZvdW5kIGVsZW1lbnQgb3IgdW5kZWZpbmVkLlxyXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gZmluZFBhcnRzKGNsYXNzTmFtZSkge1xuICAgIHJldHVybiBjaGlsZChyb290LCBjbGFzc05hbWUpIHx8IGNoaWxkKEVsZW1lbnRzLnNsaWRlciwgY2xhc3NOYW1lKTtcbiAgfVxuXG4gIHJldHVybiBFbGVtZW50cztcbn0pO1xuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2pzL2NvbXBvbmVudHMvY29udHJvbGxlci9pbmRleC5qc1xuLyoqXHJcbiAqIFRoZSBjb21wb25lbnQgZm9yIGNvbnRyb2xsaW5nIHRoZSB0cmFjay5cclxuICpcclxuICogQGF1dGhvciAgICBOYW90b3NoaSBGdWppdGFcclxuICogQGNvcHlyaWdodCBOYW90b3NoaSBGdWppdGEuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqL1xuXG5cblxudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcbi8qKlxyXG4gKiBUaGUgY29tcG9uZW50IGZvciBjb250cm9sbGluZyB0aGUgdHJhY2suXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3BsaWRlfSBTcGxpZGUgICAgIC0gQSBTcGxpZGUgaW5zdGFuY2UuXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBDb21wb25lbnRzIC0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgY29tcG9uZW50cy5cclxuICpcclxuICogQHJldHVybiB7T2JqZWN0fSAtIFRoZSBjb21wb25lbnQgb2JqZWN0LlxyXG4gKi9cblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBjb25zdCBjb250cm9sbGVyID0gKGZ1bmN0aW9uIChTcGxpZGUsIENvbXBvbmVudHMpIHtcbiAgLyoqXHJcbiAgICogU3RvcmUgY3VycmVudCBvcHRpb25zLlxyXG4gICAqXHJcbiAgICogQHR5cGUge09iamVjdH1cclxuICAgKi9cbiAgdmFyIG9wdGlvbnM7XG4gIC8qKlxyXG4gICAqIFRydWUgaWYgdGhlIHNsaWRlIGlzIExPT1AgbW9kZS5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqL1xuXG4gIHZhciBpc0xvb3A7XG4gIC8qKlxyXG4gICAqIENvbnRyb2xsZXIgY29tcG9uZW50IG9iamVjdC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICovXG5cbiAgdmFyIENvbnRyb2xsZXIgPSB7XG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWQuXHJcbiAgICAgKi9cbiAgICBtb3VudDogZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgICBvcHRpb25zID0gU3BsaWRlLm9wdGlvbnM7XG4gICAgICBpc0xvb3AgPSBTcGxpZGUuaXMoTE9PUCk7XG4gICAgICBiaW5kKCk7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogTWFrZSB0cmFjayBydW4gYnkgdGhlIGdpdmVuIGNvbnRyb2wuXHJcbiAgICAgKiAtIFwiK3tpfVwiIDogSW5jcmVtZW50IHRoZSBzbGlkZSBpbmRleCBieSBpLlxyXG4gICAgICogLSBcIi17aX1cIiA6IERlY3JlbWVudCB0aGUgc2xpZGUgaW5kZXggYnkgaS5cclxuICAgICAqIC0gXCJ7aX1cIiAgOiBHbyB0byB0aGUgc2xpZGUgd2hvc2UgaW5kZXggaXMgaS5cclxuICAgICAqIC0gXCI+XCIgICAgOiBHbyB0byBuZXh0IHBhZ2UuXHJcbiAgICAgKiAtIFwiPFwiICAgIDogR28gdG8gcHJldiBwYWdlLlxyXG4gICAgICogLSBcIj57aX1cIiA6IEdvIHRvIHBhZ2UgaS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IGNvbnRyb2wgIC0gQSBjb250cm9sIHBhdHRlcm4uXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59ICAgICAgIHNpbGVudGx5IC0gR28gdG8gdGhlIGRlc3RpbmF0aW9uIHdpdGhvdXQgZXZlbnQgZW1pc3Npb24uXHJcbiAgICAgKi9cbiAgICBnbzogZnVuY3Rpb24gZ28oY29udHJvbCwgc2lsZW50bHkpIHtcbiAgICAgIHZhciBkZXN0SW5kZXggPSB0aGlzLnRyaW0odGhpcy5wYXJzZShjb250cm9sKSk7XG4gICAgICBDb21wb25lbnRzLlRyYWNrLmdvKGRlc3RJbmRleCwgdGhpcy5yZXdpbmQoZGVzdEluZGV4KSwgc2lsZW50bHkpO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIFBhcnNlIHRoZSBnaXZlbiBjb250cm9sIGFuZCByZXR1cm4gdGhlIGRlc3RpbmF0aW9uIGluZGV4IGZvciB0aGUgdHJhY2suXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGNvbnRyb2wgLSBBIGNvbnRyb2wgdGFyZ2V0IHBhdHRlcm4uXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7bnVtYmVyfSAtIEEgcGFyc2VkIHRhcmdldC5cclxuICAgICAqL1xuICAgIHBhcnNlOiBmdW5jdGlvbiBwYXJzZShjb250cm9sKSB7XG4gICAgICB2YXIgaW5kZXggPSBTcGxpZGUuaW5kZXg7XG4gICAgICB2YXIgbWF0Y2hlcyA9IFN0cmluZyhjb250cm9sKS5tYXRjaCgvKFsrXFwtPD5dKykoXFxkKyk/Lyk7XG4gICAgICB2YXIgaW5kaWNhdG9yID0gbWF0Y2hlcyA/IG1hdGNoZXNbMV0gOiAnJztcbiAgICAgIHZhciBudW1iZXIgPSBtYXRjaGVzID8gcGFyc2VJbnQobWF0Y2hlc1syXSkgOiAwO1xuXG4gICAgICBzd2l0Y2ggKGluZGljYXRvcikge1xuICAgICAgICBjYXNlICcrJzpcbiAgICAgICAgICBpbmRleCArPSBudW1iZXIgfHwgMTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICctJzpcbiAgICAgICAgICBpbmRleCAtPSBudW1iZXIgfHwgMTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICc+JzpcbiAgICAgICAgY2FzZSAnPCc6XG4gICAgICAgICAgaW5kZXggPSBwYXJzZVBhZ2UobnVtYmVyLCBpbmRleCwgaW5kaWNhdG9yID09PSAnPCcpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgaW5kZXggPSBwYXJzZUludChjb250cm9sKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIENvbXB1dGUgaW5kZXggZnJvbSB0aGUgZ2l2ZW4gcGFnZSBudW1iZXIuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHBhZ2UgLSBQYWdlIG51bWJlci5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IC0gQSBjb21wdXRlZCBwYWdlIG51bWJlci5cclxuICAgICAqL1xuICAgIHRvSW5kZXg6IGZ1bmN0aW9uIHRvSW5kZXgocGFnZSkge1xuICAgICAgaWYgKGhhc0ZvY3VzKCkpIHtcbiAgICAgICAgcmV0dXJuIHBhZ2U7XG4gICAgICB9XG5cbiAgICAgIHZhciBsZW5ndGggPSBTcGxpZGUubGVuZ3RoO1xuICAgICAgdmFyIHBlclBhZ2UgPSBvcHRpb25zLnBlclBhZ2U7XG4gICAgICB2YXIgaW5kZXggPSBwYWdlICogcGVyUGFnZTtcbiAgICAgIGluZGV4ID0gaW5kZXggLSAodGhpcy5wYWdlTGVuZ3RoICogcGVyUGFnZSAtIGxlbmd0aCkgKiBmbG9vcihpbmRleCAvIGxlbmd0aCk7IC8vIEFkanVzdG1lbnQgZm9yIHRoZSBsYXN0IHBhZ2UuXG5cbiAgICAgIGlmIChsZW5ndGggLSBwZXJQYWdlIDw9IGluZGV4ICYmIGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgICAgIGluZGV4ID0gbGVuZ3RoIC0gcGVyUGFnZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIENvbXB1dGUgcGFnZSBudW1iZXIgZnJvbSB0aGUgZ2l2ZW4gc2xpZGUgaW5kZXguXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IC0gU2xpZGUgaW5kZXguXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7bnVtYmVyfSAtIEEgY29tcHV0ZWQgcGFnZSBudW1iZXIuXHJcbiAgICAgKi9cbiAgICB0b1BhZ2U6IGZ1bmN0aW9uIHRvUGFnZShpbmRleCkge1xuICAgICAgaWYgKGhhc0ZvY3VzKCkpIHtcbiAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgICAgfVxuXG4gICAgICB2YXIgbGVuZ3RoID0gU3BsaWRlLmxlbmd0aDtcbiAgICAgIHZhciBwZXJQYWdlID0gb3B0aW9ucy5wZXJQYWdlOyAvLyBNYWtlIHRoZSBsYXN0IFwicGVyUGFnZVwiIG51bWJlciBvZiBzbGlkZXMgYmVsb25nIHRvIHRoZSBsYXN0IHBhZ2UuXG5cbiAgICAgIGlmIChsZW5ndGggLSBwZXJQYWdlIDw9IGluZGV4ICYmIGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBmbG9vcigobGVuZ3RoIC0gMSkgLyBwZXJQYWdlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZsb29yKGluZGV4IC8gcGVyUGFnZSk7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogVHJpbSB0aGUgZ2l2ZW4gaW5kZXggYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IG1vZGUuXHJcbiAgICAgKiBJbmRleCBiZWluZyByZXR1cm5lZCBjb3VsZCBiZSBsZXNzIHRoYW4gMCBvciBncmVhdGVyIHRoYW4gdGhlIGxlbmd0aCBpbiBMb29wIG1vZGUuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IC0gQW4gaW5kZXggYmVpbmcgdHJpbW1lZC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IC0gQSB0cmltbWVkIGluZGV4LlxyXG4gICAgICovXG4gICAgdHJpbTogZnVuY3Rpb24gdHJpbShpbmRleCkge1xuICAgICAgaWYgKCFpc0xvb3ApIHtcbiAgICAgICAgaW5kZXggPSBvcHRpb25zLnJld2luZCA/IHRoaXMucmV3aW5kKGluZGV4KSA6IGJldHdlZW4oaW5kZXgsIDAsIHRoaXMuZWRnZUluZGV4KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIFJld2luZCB0aGUgZ2l2ZW4gaW5kZXggaWYgaXQncyBvdXQgb2YgcmFuZ2UuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IC0gQW4gaW5kZXguXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7bnVtYmVyfSAtIEEgcmV3b3VuZCBpbmRleC5cclxuICAgICAqL1xuICAgIHJld2luZDogZnVuY3Rpb24gcmV3aW5kKGluZGV4KSB7XG4gICAgICB2YXIgZWRnZSA9IHRoaXMuZWRnZUluZGV4O1xuXG4gICAgICBpZiAoaXNMb29wKSB7XG4gICAgICAgIHdoaWxlIChpbmRleCA+IGVkZ2UpIHtcbiAgICAgICAgICBpbmRleCAtPSBlZGdlICsgMTtcbiAgICAgICAgfVxuXG4gICAgICAgIHdoaWxlIChpbmRleCA8IDApIHtcbiAgICAgICAgICBpbmRleCArPSBlZGdlICsgMTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGluZGV4ID4gZWRnZSkge1xuICAgICAgICAgIGluZGV4ID0gMDtcbiAgICAgICAgfSBlbHNlIGlmIChpbmRleCA8IDApIHtcbiAgICAgICAgICBpbmRleCA9IGVkZ2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIENoZWNrIGlmIHRoZSBkaXJlY3Rpb24gaXMgXCJydGxcIiBvciBub3QuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gLSBUcnVlIGlmIFwicnRsXCIgb3IgZmFsc2UgaWYgbm90LlxyXG4gICAgICovXG4gICAgaXNSdGw6IGZ1bmN0aW9uIGlzUnRsKCkge1xuICAgICAgcmV0dXJuIG9wdGlvbnMuZGlyZWN0aW9uID09PSBSVEw7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIHRoZSBwYWdlIGxlbmd0aC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IC0gTWF4IHBhZ2UgbnVtYmVyLlxyXG4gICAgICovXG4gICAgZ2V0IHBhZ2VMZW5ndGgoKSB7XG4gICAgICB2YXIgbGVuZ3RoID0gU3BsaWRlLmxlbmd0aDtcbiAgICAgIHJldHVybiBoYXNGb2N1cygpID8gbGVuZ3RoIDogTWF0aC5jZWlsKGxlbmd0aCAvIG9wdGlvbnMucGVyUGFnZSk7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIHRoZSBlZGdlIGluZGV4LlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge251bWJlcn0gLSBFZGdlIGluZGV4LlxyXG4gICAgICovXG4gICAgZ2V0IGVkZ2VJbmRleCgpIHtcbiAgICAgIHZhciBsZW5ndGggPSBTcGxpZGUubGVuZ3RoO1xuXG4gICAgICBpZiAoIWxlbmd0aCkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1cblxuICAgICAgaWYgKGhhc0ZvY3VzKCkgfHwgb3B0aW9ucy5pc05hdmlnYXRpb24gfHwgaXNMb29wKSB7XG4gICAgICAgIHJldHVybiBsZW5ndGggLSAxO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbGVuZ3RoIC0gb3B0aW9ucy5wZXJQYWdlO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIFJldHVybiB0aGUgaW5kZXggb2YgdGhlIHByZXZpb3VzIHNsaWRlLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge251bWJlcn0gLSBUaGUgaW5kZXggb2YgdGhlIHByZXZpb3VzIHNsaWRlIGlmIGF2YWlsYWJsZS4gLTEgb3RoZXJ3aXNlLlxyXG4gICAgICovXG4gICAgZ2V0IHByZXZJbmRleCgpIHtcbiAgICAgIHZhciBwcmV2ID0gU3BsaWRlLmluZGV4IC0gMTtcblxuICAgICAgaWYgKGlzTG9vcCB8fCBvcHRpb25zLnJld2luZCkge1xuICAgICAgICBwcmV2ID0gdGhpcy5yZXdpbmQocHJldik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2ID4gLTEgPyBwcmV2IDogLTE7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIHRoZSBpbmRleCBvZiB0aGUgbmV4dCBzbGlkZS5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IC0gVGhlIGluZGV4IG9mIHRoZSBuZXh0IHNsaWRlIGlmIGF2YWlsYWJsZS4gLTEgb3RoZXJ3aXNlLlxyXG4gICAgICovXG4gICAgZ2V0IG5leHRJbmRleCgpIHtcbiAgICAgIHZhciBuZXh0ID0gU3BsaWRlLmluZGV4ICsgMTtcblxuICAgICAgaWYgKGlzTG9vcCB8fCBvcHRpb25zLnJld2luZCkge1xuICAgICAgICBuZXh0ID0gdGhpcy5yZXdpbmQobmV4dCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBTcGxpZGUuaW5kZXggPCBuZXh0ICYmIG5leHQgPD0gdGhpcy5lZGdlSW5kZXggfHwgbmV4dCA9PT0gMCA/IG5leHQgOiAtMTtcbiAgICB9XG5cbiAgfTtcbiAgLyoqXHJcbiAgICogTGlzdGVuIHRvIHNvbWUgZXZlbnRzLlxyXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGJpbmQoKSB7XG4gICAgU3BsaWRlLm9uKCdtb3ZlJywgZnVuY3Rpb24gKG5ld0luZGV4KSB7XG4gICAgICBTcGxpZGUuaW5kZXggPSBuZXdJbmRleDtcbiAgICB9KS5vbigndXBkYXRlZCByZWZyZXNoJywgZnVuY3Rpb24gKG5ld09wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMgPSBuZXdPcHRpb25zIHx8IG9wdGlvbnM7XG4gICAgICBTcGxpZGUuaW5kZXggPSBiZXR3ZWVuKFNwbGlkZS5pbmRleCwgMCwgQ29udHJvbGxlci5lZGdlSW5kZXgpO1xuICAgIH0pO1xuICB9XG4gIC8qKlxyXG4gICAqIFZlcmlmeSBpZiB0aGUgZm9jdXMgb3B0aW9uIGlzIGF2YWlsYWJsZSBvciBub3QuXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHtib29sZWFufSAtIFRydWUgaWYgYSBzbGlkZXIgaGFzIHRoZSBmb2N1cyBvcHRpb24uXHJcbiAgICovXG5cblxuICBmdW5jdGlvbiBoYXNGb2N1cygpIHtcbiAgICByZXR1cm4gb3B0aW9ucy5mb2N1cyAhPT0gZmFsc2U7XG4gIH1cbiAgLyoqXHJcbiAgICogUmV0dXJuIHRoZSBuZXh0IG9yIHByZXZpb3VzIHBhZ2UgaW5kZXggY29tcHV0ZWQgYnkgdGhlIHBhZ2UgbnVtYmVyIGFuZCBjdXJyZW50IGluZGV4LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9ICBudW1iZXIgLSBTcGVjaWZ5IHRoZSBwYWdlIG51bWJlci5cclxuICAgKiBAcGFyYW0ge251bWJlcn0gIGluZGV4ICAtIEN1cnJlbnQgaW5kZXguXHJcbiAgICogQHBhcmFtIHtib29sZWFufSBwcmV2ICAgLSBQcmV2IG9yIG5leHQuXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHtudW1iZXJ9IC0gU2xpZGUgaW5kZXguXHJcbiAgICovXG5cblxuICBmdW5jdGlvbiBwYXJzZVBhZ2UobnVtYmVyLCBpbmRleCwgcHJldikge1xuICAgIGlmIChudW1iZXIgPiAtMSkge1xuICAgICAgcmV0dXJuIENvbnRyb2xsZXIudG9JbmRleChudW1iZXIpO1xuICAgIH1cblxuICAgIHZhciBwZXJNb3ZlID0gb3B0aW9ucy5wZXJNb3ZlO1xuICAgIHZhciBzaWduID0gcHJldiA/IC0xIDogMTtcblxuICAgIGlmIChwZXJNb3ZlKSB7XG4gICAgICByZXR1cm4gaW5kZXggKyBwZXJNb3ZlICogc2lnbjtcbiAgICB9XG5cbiAgICByZXR1cm4gQ29udHJvbGxlci50b0luZGV4KENvbnRyb2xsZXIudG9QYWdlKGluZGV4KSArIHNpZ24pO1xuICB9XG5cbiAgcmV0dXJuIENvbnRyb2xsZXI7XG59KTtcbjsvLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9qcy9jb21wb25lbnRzL3RyYWNrL2luZGV4LmpzXG4vKipcclxuICogVGhlIGNvbXBvbmVudCBmb3IgbW92aW5nIGxpc3QgaW4gdGhlIHRyYWNrLlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgIE5hb3Rvc2hpIEZ1aml0YVxyXG4gKiBAY29weXJpZ2h0IE5hb3Rvc2hpIEZ1aml0YS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICovXG5cblxuXG5cblxudmFyIGFicyA9IE1hdGguYWJzO1xuLyoqXHJcbiAqIFRoZSBjb21wb25lbnQgZm9yIG1vdmluZyBsaXN0IGluIHRoZSB0cmFjay5cclxuICpcclxuICogQHBhcmFtIHtTcGxpZGV9IFNwbGlkZSAgICAgLSBBIFNwbGlkZSBpbnN0YW5jZS5cclxuICogQHBhcmFtIHtPYmplY3R9IENvbXBvbmVudHMgLSBBbiBvYmplY3QgY29udGFpbmluZyBjb21wb25lbnRzLlxyXG4gKlxyXG4gKiBAcmV0dXJuIHtPYmplY3R9IC0gVGhlIGNvbXBvbmVudCBvYmplY3QuXHJcbiAqL1xuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIGNvbnN0IHRyYWNrID0gKGZ1bmN0aW9uIChTcGxpZGUsIENvbXBvbmVudHMpIHtcbiAgLyoqXHJcbiAgICogSG9sZCB0aGUgTGF5b3V0IGNvbXBvbmVudC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICovXG4gIHZhciBMYXlvdXQ7XG4gIC8qKlxyXG4gICAqIEhvbGQgdGhlIExheW91dCBjb21wb25lbnQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAqL1xuXG4gIHZhciBFbGVtZW50cztcbiAgLyoqXHJcbiAgICogU3RvcmUgdGhlIGxpc3QgZWxlbWVudC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtFbGVtZW50fVxyXG4gICAqL1xuXG4gIHZhciBsaXN0O1xuICAvKipcclxuICAgKiBXaGV0aGVyIHRoZSBjdXJyZW50IGRpcmVjdGlvbiBpcyB2ZXJ0aWNhbCBvciBub3QuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKi9cblxuICB2YXIgaXNWZXJ0aWNhbCA9IFNwbGlkZS5vcHRpb25zLmRpcmVjdGlvbiA9PT0gVFRCO1xuICAvKipcclxuICAgKiBXaGV0aGVyIHRoZSBzbGlkZXIgdHlwZSBpcyBGQURFIG9yIG5vdC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqL1xuXG4gIHZhciBpc0ZhZGUgPSBTcGxpZGUuaXMoRkFERSk7XG4gIC8qKlxyXG4gICAqIFdoZXRoZXIgdGhlIHNsaWRlciBkaXJlY3Rpb24gaXMgUlRMIG9yIG5vdC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqL1xuXG4gIHZhciBpc1JUTCA9IFNwbGlkZS5vcHRpb25zLmRpcmVjdGlvbiA9PT0gUlRMO1xuICAvKipcclxuICAgKiBUaGlzIHdpbGwgYmUgdHJ1ZSB3aGlsZSB0cmFuc2l0aW9uaW5nIGZyb20gdGhlIGxhc3QgaW5kZXggdG8gdGhlIGZpcnN0IG9uZS5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqL1xuXG4gIHZhciBpc0xvb3BQZW5kaW5nID0gZmFsc2U7XG4gIC8qKlxyXG4gICAqIFNpZ24gZm9yIHRoZSBkaXJlY3Rpb24uIE9ubHkgUlRMIG1vZGUgdXNlcyB0aGUgcG9zaXRpdmUgc2lnbi5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICovXG5cbiAgdmFyIHNpZ24gPSBpc1JUTCA/IDEgOiAtMTtcbiAgLyoqXHJcbiAgICogVHJhY2sgY29tcG9uZW50IG9iamVjdC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICovXG5cbiAgdmFyIFRyYWNrID0ge1xuICAgIC8qKlxyXG4gICAgICogTWFrZSBwdWJsaWMgdGhlIHNpZ24gZGVmaW5lZCBsb2NhbGx5LlxyXG4gICAgICpcclxuICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgKi9cbiAgICBzaWduOiBzaWduLFxuXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWQuXHJcbiAgICAgKi9cbiAgICBtb3VudDogZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgICBFbGVtZW50cyA9IENvbXBvbmVudHMuRWxlbWVudHM7XG4gICAgICBMYXlvdXQgPSBDb21wb25lbnRzLkxheW91dDtcbiAgICAgIGxpc3QgPSBFbGVtZW50cy5saXN0O1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIENhbGxlZCBhZnRlciB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWQuXHJcbiAgICAgKiBUaGUgcmVzaXplIGV2ZW50IG11c3QgYmUgcmVnaXN0ZXJlZCBhZnRlciB0aGUgTGF5b3V0J3Mgb25lIGlzIGRvbmUuXHJcbiAgICAgKi9cbiAgICBtb3VudGVkOiBmdW5jdGlvbiBtb3VudGVkKCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgaWYgKCFpc0ZhZGUpIHtcbiAgICAgICAgdGhpcy5qdW1wKDApO1xuICAgICAgICBTcGxpZGUub24oJ21vdW50ZWQgcmVzaXplIHVwZGF0ZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMuanVtcChTcGxpZGUuaW5kZXgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBHbyB0byB0aGUgZ2l2ZW4gZGVzdGluYXRpb24gaW5kZXguXHJcbiAgICAgKiBBZnRlciBhcnJpdmluZyB0aGVyZSwgdGhlIHRyYWNrIGlzIGp1bXAgdG8gdGhlIG5ldyBpbmRleCB3aXRob3V0IGFuaW1hdGlvbiwgbWFpbmx5IGZvciBsb29wIG1vZGUuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9ICBkZXN0SW5kZXggLSBBIGRlc3RpbmF0aW9uIGluZGV4LlxyXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGlzIGNhbiBiZSBuZWdhdGl2ZSBvciBncmVhdGVyIHRoYW4gc2xpZGVzIGxlbmd0aCBmb3IgcmVhY2hpbmcgY2xvbmVzLlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9ICBuZXdJbmRleCAgLSBBbiBhY3R1YWwgbmV3IGluZGV4LiBUaGV5IGFyZSBhbHdheXMgc2FtZSBpbiBTbGlkZSBhbmQgUmV3aW5kIG1vZGUuXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHNpbGVudGx5ICAtIElmIHRydWUsIHN1cHByZXNzIGVtaXR0aW5nIGV2ZW50cy5cclxuICAgICAqL1xuICAgIGdvOiBmdW5jdGlvbiBnbyhkZXN0SW5kZXgsIG5ld0luZGV4LCBzaWxlbnRseSkge1xuICAgICAgdmFyIG5ld1Bvc2l0aW9uID0gZ2V0VHJpbW1lZFBvc2l0aW9uKGRlc3RJbmRleCk7XG4gICAgICB2YXIgcHJldkluZGV4ID0gU3BsaWRlLmluZGV4OyAvLyBQcmV2ZW50IGFueSBhY3Rpb25zIHdoaWxlIHRyYW5zaXRpb25pbmcgZnJvbSB0aGUgbGFzdCBpbmRleCB0byB0aGUgZmlyc3Qgb25lIGZvciBqdW1wLlxuXG4gICAgICBpZiAoU3BsaWRlLlN0YXRlLmlzKE1PVklORykgJiYgaXNMb29wUGVuZGluZykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlzTG9vcFBlbmRpbmcgPSBkZXN0SW5kZXggIT09IG5ld0luZGV4O1xuXG4gICAgICBpZiAoIXNpbGVudGx5KSB7XG4gICAgICAgIFNwbGlkZS5lbWl0KCdtb3ZlJywgbmV3SW5kZXgsIHByZXZJbmRleCwgZGVzdEluZGV4KTtcbiAgICAgIH1cblxuICAgICAgaWYgKE1hdGguYWJzKG5ld1Bvc2l0aW9uIC0gdGhpcy5wb3NpdGlvbikgPj0gMSB8fCBpc0ZhZGUpIHtcbiAgICAgICAgQ29tcG9uZW50cy5UcmFuc2l0aW9uLnN0YXJ0KGRlc3RJbmRleCwgbmV3SW5kZXgsIHByZXZJbmRleCwgdGhpcy50b0Nvb3JkKG5ld1Bvc2l0aW9uKSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIG9uVHJhbnNpdGlvbkVuZChkZXN0SW5kZXgsIG5ld0luZGV4LCBwcmV2SW5kZXgsIHNpbGVudGx5KTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZGVzdEluZGV4ICE9PSBwcmV2SW5kZXggJiYgU3BsaWRlLm9wdGlvbnMudHJpbVNwYWNlID09PSAnbW92ZScpIHtcbiAgICAgICAgICBDb21wb25lbnRzLkNvbnRyb2xsZXIuZ28oZGVzdEluZGV4ICsgZGVzdEluZGV4IC0gcHJldkluZGV4LCBzaWxlbnRseSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb25UcmFuc2l0aW9uRW5kKGRlc3RJbmRleCwgbmV3SW5kZXgsIHByZXZJbmRleCwgc2lsZW50bHkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogTW92ZSB0aGUgdHJhY2sgdG8gdGhlIHNwZWNpZmllZCBpbmRleC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggLSBBIGRlc3RpbmF0aW9uIGluZGV4IHdoZXJlIHRoZSB0cmFjayBqdW1wcy5cclxuICAgICAqL1xuICAgIGp1bXA6IGZ1bmN0aW9uIGp1bXAoaW5kZXgpIHtcbiAgICAgIHRoaXMudHJhbnNsYXRlKGdldFRyaW1tZWRQb3NpdGlvbihpbmRleCkpO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIFNldCB0aGUgbGlzdCBwb3NpdGlvbiBieSBDU1MgdHJhbnNsYXRlIHByb3BlcnR5LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwb3NpdGlvbiAtIEEgbmV3IHBvc2l0aW9uIHZhbHVlLlxyXG4gICAgICovXG4gICAgdHJhbnNsYXRlOiBmdW5jdGlvbiB0cmFuc2xhdGUocG9zaXRpb24pIHtcbiAgICAgIGFwcGx5U3R5bGUobGlzdCwge1xuICAgICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlXCIgKyAoaXNWZXJ0aWNhbCA/ICdZJyA6ICdYJykgKyBcIihcIiArIHBvc2l0aW9uICsgXCJweClcIlxuICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogQ2FuY2VsIHRoZSB0cmFuc2l0aW9uIGFuZCBzZXQgdGhlIGxpc3QgcG9zaXRpb24uXHJcbiAgICAgKiBBbHNvLCBsb29wIHRoZSBzbGlkZXIgaWYgbmVjZXNzYXJ5LlxyXG4gICAgICovXG4gICAgY2FuY2VsOiBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gICAgICBpZiAoU3BsaWRlLmlzKExPT1ApKSB7XG4gICAgICAgIHRoaXMuc2hpZnQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEVuc3VyZSB0aGUgY3VycmVudCBwb3NpdGlvbi5cbiAgICAgICAgdGhpcy50cmFuc2xhdGUodGhpcy5wb3NpdGlvbik7XG4gICAgICB9XG5cbiAgICAgIGFwcGx5U3R5bGUobGlzdCwge1xuICAgICAgICB0cmFuc2l0aW9uOiAnJ1xuICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogU2hpZnQgdGhlIHNsaWRlciBpZiBpdCBleGNlZWRzIGJvcmRlcnMgb24gdGhlIGVkZ2UuXHJcbiAgICAgKi9cbiAgICBzaGlmdDogZnVuY3Rpb24gc2hpZnQoKSB7XG4gICAgICB2YXIgcG9zaXRpb24gPSBhYnModGhpcy5wb3NpdGlvbik7XG4gICAgICB2YXIgbGVmdCA9IGFicyh0aGlzLnRvUG9zaXRpb24oMCkpO1xuICAgICAgdmFyIHJpZ2h0ID0gYWJzKHRoaXMudG9Qb3NpdGlvbihTcGxpZGUubGVuZ3RoKSk7XG4gICAgICB2YXIgaW5uZXJTaXplID0gcmlnaHQgLSBsZWZ0O1xuXG4gICAgICBpZiAocG9zaXRpb24gPCBsZWZ0KSB7XG4gICAgICAgIHBvc2l0aW9uICs9IGlubmVyU2l6ZTtcbiAgICAgIH0gZWxzZSBpZiAocG9zaXRpb24gPiByaWdodCkge1xuICAgICAgICBwb3NpdGlvbiAtPSBpbm5lclNpemU7XG4gICAgICB9XG5cbiAgICAgIHRoaXMudHJhbnNsYXRlKHNpZ24gKiBwb3NpdGlvbik7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogVHJpbSByZWR1bmRhbnQgc3BhY2VzIG9uIHRoZSBsZWZ0IG9yIHJpZ2h0IGVkZ2UgaWYgbmVjZXNzYXJ5LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwb3NpdGlvbiAtIFBvc2l0aW9uIHZhbHVlIHRvIGJlIHRyaW1tZWQuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7bnVtYmVyfSAtIFRyaW1tZWQgcG9zaXRpb24uXHJcbiAgICAgKi9cbiAgICB0cmltOiBmdW5jdGlvbiB0cmltKHBvc2l0aW9uKSB7XG4gICAgICBpZiAoIVNwbGlkZS5vcHRpb25zLnRyaW1TcGFjZSB8fCBTcGxpZGUuaXMoTE9PUCkpIHtcbiAgICAgICAgcmV0dXJuIHBvc2l0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgZWRnZSA9IHNpZ24gKiAoTGF5b3V0LnRvdGFsU2l6ZSgpIC0gTGF5b3V0LnNpemUgLSBMYXlvdXQuZ2FwKTtcbiAgICAgIHJldHVybiBiZXR3ZWVuKHBvc2l0aW9uLCBlZGdlLCAwKTtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBDYWxjdWxhdGUgdGhlIGNsb3Nlc3Qgc2xpZGUgaW5kZXggZnJvbSB0aGUgZ2l2ZW4gcG9zaXRpb24uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHBvc2l0aW9uIC0gQSBwb3NpdGlvbiBjb252ZXJ0ZWQgdG8gYW4gc2xpZGUgaW5kZXguXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7bnVtYmVyfSAtIFRoZSBjbG9zZXN0IHNsaWRlIGluZGV4LlxyXG4gICAgICovXG4gICAgdG9JbmRleDogZnVuY3Rpb24gdG9JbmRleChwb3NpdGlvbikge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBpbmRleCA9IDA7XG4gICAgICB2YXIgbWluRGlzdGFuY2UgPSBJbmZpbml0eTtcbiAgICAgIEVsZW1lbnRzLmdldFNsaWRlcyh0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChTbGlkZSkge1xuICAgICAgICB2YXIgc2xpZGVJbmRleCA9IFNsaWRlLmluZGV4O1xuICAgICAgICB2YXIgZGlzdGFuY2UgPSBhYnMoX3RoaXMyLnRvUG9zaXRpb24oc2xpZGVJbmRleCkgLSBwb3NpdGlvbik7XG5cbiAgICAgICAgaWYgKGRpc3RhbmNlIDwgbWluRGlzdGFuY2UpIHtcbiAgICAgICAgICBtaW5EaXN0YW5jZSA9IGRpc3RhbmNlO1xuICAgICAgICAgIGluZGV4ID0gc2xpZGVJbmRleDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gaW5kZXg7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIGNvb3JkaW5hdGVzIG9iamVjdCBieSB0aGUgZ2l2ZW4gcG9zaXRpb24uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHBvc2l0aW9uIC0gQSBwb3NpdGlvbiB2YWx1ZS5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IC0gQSBjb29yZGluYXRlcyBvYmplY3QuXHJcbiAgICAgKi9cbiAgICB0b0Nvb3JkOiBmdW5jdGlvbiB0b0Nvb3JkKHBvc2l0aW9uKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB4OiBpc1ZlcnRpY2FsID8gMCA6IHBvc2l0aW9uLFxuICAgICAgICB5OiBpc1ZlcnRpY2FsID8gcG9zaXRpb24gOiAwXG4gICAgICB9O1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIENhbGN1bGF0ZSB0aGUgdHJhY2sgcG9zaXRpb24gYnkgYSBzbGlkZSBpbmRleC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggLSBTbGlkZSBpbmRleC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IC0gQ2FsY3VsYXRlZCBwb3NpdGlvbi5cclxuICAgICAqL1xuICAgIHRvUG9zaXRpb246IGZ1bmN0aW9uIHRvUG9zaXRpb24oaW5kZXgpIHtcbiAgICAgIHZhciBwb3NpdGlvbiA9IExheW91dC50b3RhbFNpemUoaW5kZXgpIC0gTGF5b3V0LnNsaWRlU2l6ZShpbmRleCkgLSBMYXlvdXQuZ2FwO1xuICAgICAgcmV0dXJuIHNpZ24gKiAocG9zaXRpb24gKyB0aGlzLm9mZnNldChpbmRleCkpO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIFJldHVybiB0aGUgY3VycmVudCBvZmZzZXQgdmFsdWUsIGNvbnNpZGVyaW5nIGRpcmVjdGlvbi5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IC0gT2Zmc2V0IGFtb3VudC5cclxuICAgICAqL1xuICAgIG9mZnNldDogZnVuY3Rpb24gb2Zmc2V0KGluZGV4KSB7XG4gICAgICB2YXIgZm9jdXMgPSBTcGxpZGUub3B0aW9ucy5mb2N1cztcbiAgICAgIHZhciBzbGlkZVNpemUgPSBMYXlvdXQuc2xpZGVTaXplKGluZGV4KTtcblxuICAgICAgaWYgKGZvY3VzID09PSAnY2VudGVyJykge1xuICAgICAgICByZXR1cm4gLShMYXlvdXQuc2l6ZSAtIHNsaWRlU2l6ZSkgLyAyO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gLShwYXJzZUludChmb2N1cykgfHwgMCkgKiAoc2xpZGVTaXplICsgTGF5b3V0LmdhcCk7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIHRoZSBjdXJyZW50IHBvc2l0aW9uLlxyXG4gICAgICogVGhpcyByZXR1cm5zIHRoZSBjb3JyZWN0IHBvc2l0aW9uIGV2ZW4gd2hpbGUgdHJhbnNpdGlvbmluZyBieSBDU1MuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7bnVtYmVyfSAtIEN1cnJlbnQgcG9zaXRpb24uXHJcbiAgICAgKi9cbiAgICBnZXQgcG9zaXRpb24oKSB7XG4gICAgICB2YXIgcHJvcCA9IGlzVmVydGljYWwgPyAndG9wJyA6IGlzUlRMID8gJ3JpZ2h0JyA6ICdsZWZ0JztcbiAgICAgIHJldHVybiBnZXRSZWN0KGxpc3QpW3Byb3BdIC0gKGdldFJlY3QoRWxlbWVudHMudHJhY2spW3Byb3BdIC0gTGF5b3V0LnBhZGRpbmdbcHJvcF0gKiBzaWduKTtcbiAgICB9XG5cbiAgfTtcbiAgLyoqXHJcbiAgICogQ2FsbGVkIHdoZW5ldmVyIHNsaWRlcyBhcnJpdmUgYXQgYSBkZXN0aW5hdGlvbi5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSAgZGVzdEluZGV4IC0gQSBkZXN0aW5hdGlvbiBpbmRleC5cclxuICAgKiBAcGFyYW0ge251bWJlcn0gIG5ld0luZGV4ICAtIEEgbmV3IGluZGV4LlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSAgcHJldkluZGV4IC0gQSBwcmV2aW91cyBpbmRleC5cclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHNpbGVudGx5ICAtIElmIHRydWUsIHN1cHByZXNzIGVtaXR0aW5nIGV2ZW50cy5cclxuICAgKi9cblxuICBmdW5jdGlvbiBvblRyYW5zaXRpb25FbmQoZGVzdEluZGV4LCBuZXdJbmRleCwgcHJldkluZGV4LCBzaWxlbnRseSkge1xuICAgIGFwcGx5U3R5bGUobGlzdCwge1xuICAgICAgdHJhbnNpdGlvbjogJydcbiAgICB9KTtcbiAgICBpc0xvb3BQZW5kaW5nID0gZmFsc2U7XG5cbiAgICBpZiAoIWlzRmFkZSkge1xuICAgICAgVHJhY2suanVtcChuZXdJbmRleCk7XG4gICAgfVxuXG4gICAgaWYgKCFzaWxlbnRseSkge1xuICAgICAgU3BsaWRlLmVtaXQoJ21vdmVkJywgbmV3SW5kZXgsIHByZXZJbmRleCwgZGVzdEluZGV4KTtcbiAgICB9XG4gIH1cbiAgLyoqXHJcbiAgICogQ29udmVydCBpbmRleCB0byB0aGUgdHJpbW1lZCBwb3NpdGlvbi5cclxuICAgKlxyXG4gICAqIEByZXR1cm4ge251bWJlcn0gLSBUcmltbWVkIHBvc2l0aW9uLlxyXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gZ2V0VHJpbW1lZFBvc2l0aW9uKGluZGV4KSB7XG4gICAgcmV0dXJuIFRyYWNrLnRyaW0oVHJhY2sudG9Qb3NpdGlvbihpbmRleCkpO1xuICB9XG5cbiAgcmV0dXJuIFRyYWNrO1xufSk7XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvanMvY29tcG9uZW50cy9jbG9uZXMvaW5kZXguanNcbi8qKlxyXG4gKiBUaGUgY29tcG9uZW50IGZvciBjbG9uaW5nIHNvbWUgc2xpZGVzIGZvciBcImxvb3BcIiBtb2RlIG9mIHRoZSB0cmFjay5cclxuICpcclxuICogQGF1dGhvciAgICBOYW90b3NoaSBGdWppdGFcclxuICogQGNvcHlyaWdodCBOYW90b3NoaSBGdWppdGEuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqL1xuXG5cblxuXG4vKipcclxuICogVGhlIGNvbXBvbmVudCBmb3IgY2xvbmluZyBzb21lIHNsaWRlcyBmb3IgXCJsb29wXCIgbW9kZSBvZiB0aGUgdHJhY2suXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3BsaWRlfSBTcGxpZGUgICAgIC0gQSBTcGxpZGUgaW5zdGFuY2UuXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBDb21wb25lbnRzIC0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgY29tcG9uZW50cy5cclxuICpcclxuICogQHJldHVybiB7T2JqZWN0fSAtIFRoZSBjb21wb25lbnQgb2JqZWN0LlxyXG4gKi9cblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBjb25zdCBjbG9uZXMgPSAoZnVuY3Rpb24gKFNwbGlkZSwgQ29tcG9uZW50cykge1xuICAvKipcclxuICAgKiBTdG9yZSBpbmZvcm1hdGlvbiBvZiBhbGwgY2xvbmVzLlxyXG4gICAqXHJcbiAgICogQHR5cGUge0FycmF5fVxyXG4gICAqL1xuICB2YXIgY2xvbmVzID0gW107XG4gIC8qKlxyXG4gICAqIFN0b3JlIHRoZSBjdXJyZW50IGNsb25lIGNvdW50IG9uIG9uZSBzaWRlLlxyXG4gICAqXHJcbiAgICogQHR5cGUge251bWJlcn1cclxuICAgKi9cblxuICB2YXIgY2xvbmVDb3VudCA9IDA7XG4gIC8qKlxyXG4gICAqIEtlZXAgRWxlbWVudHMgY29tcG9uZW50LlxyXG4gICAqXHJcbiAgICogQHR5cGUge09iamVjdH1cclxuICAgKi9cblxuICB2YXIgRWxlbWVudHMgPSBDb21wb25lbnRzLkVsZW1lbnRzO1xuICAvKipcclxuICAgKiBDbG9uZXMgY29tcG9uZW50IG9iamVjdC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICovXG5cbiAgdmFyIENsb25lcyA9IHtcbiAgICAvKipcclxuICAgICAqIENhbGxlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgbW91bnRlZC5cclxuICAgICAqL1xuICAgIG1vdW50OiBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIGlmIChTcGxpZGUuaXMoTE9PUCkpIHtcbiAgICAgICAgaW5pdCgpO1xuICAgICAgICBTcGxpZGUub24oJ3JlZnJlc2g6YmVmb3JlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzLmRlc3Ryb3koKTtcbiAgICAgICAgfSkub24oJ3JlZnJlc2gnLCBpbml0KS5vbigncmVzaXplJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmIChjbG9uZUNvdW50ICE9PSBnZXRDbG9uZUNvdW50KCkpIHtcbiAgICAgICAgICAgIC8vIERlc3Ryb3kgYmVmb3JlIHJlZnJlc2ggbm90IHRvIGNvbGxlY3QgY2xvbmVzIGJ5IHRoZSBFbGVtZW50cyBjb21wb25lbnQuXG4gICAgICAgICAgICBfdGhpcy5kZXN0cm95KCk7XG5cbiAgICAgICAgICAgIFNwbGlkZS5yZWZyZXNoKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBEZXN0cm95LlxyXG4gICAgICovXG4gICAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgIGRvbV9yZW1vdmUoY2xvbmVzKTtcbiAgICAgIGNsb25lcyA9IFtdO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIFJldHVybiBhbGwgY2xvbmVzLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge0VsZW1lbnRbXX0gLSBDbG9uZWQgZWxlbWVudHMuXHJcbiAgICAgKi9cbiAgICBnZXQgY2xvbmVzKCkge1xuICAgICAgcmV0dXJuIGNsb25lcztcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm4gY2xvbmUgbGVuZ3RoLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge251bWJlcn0gLSBBIGxlbmd0aCBvZiBjbG9uZXMuXHJcbiAgICAgKi9cbiAgICBnZXQgbGVuZ3RoKCkge1xuICAgICAgcmV0dXJuIGNsb25lcy5sZW5ndGg7XG4gICAgfVxuXG4gIH07XG4gIC8qKlxyXG4gICAqIEluaXRpYWxpemF0aW9uLlxyXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgQ2xvbmVzLmRlc3Ryb3koKTtcbiAgICBjbG9uZUNvdW50ID0gZ2V0Q2xvbmVDb3VudCgpO1xuICAgIGdlbmVyYXRlQ2xvbmVzKGNsb25lQ291bnQpO1xuICB9XG4gIC8qKlxyXG4gICAqIEdlbmVyYXRlIGFuZCBhcHBlbmQvcHJlcGVuZCBjbG9uZXMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcn0gY291bnQgLSBUaGUgaGFsZiBudW1iZXIgb2YgY2xvbmVzLlxyXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gZ2VuZXJhdGVDbG9uZXMoY291bnQpIHtcbiAgICB2YXIgbGVuZ3RoID0gRWxlbWVudHMubGVuZ3RoLFxuICAgICAgICByZWdpc3RlciA9IEVsZW1lbnRzLnJlZ2lzdGVyO1xuXG4gICAgaWYgKGxlbmd0aCkge1xuICAgICAgdmFyIHNsaWRlcyA9IEVsZW1lbnRzLnNsaWRlcztcblxuICAgICAgd2hpbGUgKHNsaWRlcy5sZW5ndGggPCBjb3VudCkge1xuICAgICAgICBzbGlkZXMgPSBzbGlkZXMuY29uY2F0KHNsaWRlcyk7XG4gICAgICB9IC8vIENsb25lcyBhZnRlciB0aGUgbGFzdCBlbGVtZW50LlxuXG5cbiAgICAgIHNsaWRlcy5zbGljZSgwLCBjb3VudCkuZm9yRWFjaChmdW5jdGlvbiAoZWxtLCBpbmRleCkge1xuICAgICAgICB2YXIgY2xvbmUgPSBjbG9uZURlZXBseShlbG0pO1xuICAgICAgICBhcHBlbmQoRWxlbWVudHMubGlzdCwgY2xvbmUpO1xuICAgICAgICBjbG9uZXMucHVzaChjbG9uZSk7XG4gICAgICAgIHJlZ2lzdGVyKGNsb25lLCBpbmRleCArIGxlbmd0aCwgaW5kZXggJSBsZW5ndGgpO1xuICAgICAgfSk7IC8vIENsb25lcyBiZWZvcmUgdGhlIGZpcnN0IGVsZW1lbnQuXG5cbiAgICAgIHNsaWRlcy5zbGljZSgtY291bnQpLmZvckVhY2goZnVuY3Rpb24gKGVsbSwgaW5kZXgpIHtcbiAgICAgICAgdmFyIGNsb25lID0gY2xvbmVEZWVwbHkoZWxtKTtcbiAgICAgICAgYmVmb3JlKGNsb25lLCBzbGlkZXNbMF0pO1xuICAgICAgICBjbG9uZXMucHVzaChjbG9uZSk7XG4gICAgICAgIHJlZ2lzdGVyKGNsb25lLCBpbmRleCAtIGNvdW50LCAobGVuZ3RoICsgaW5kZXggLSBjb3VudCAlIGxlbmd0aCkgJSBsZW5ndGgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIC8qKlxyXG4gICAqIFJldHVybiBoYWxmIGNvdW50IG9mIGNsb25lcyB0byBiZSBnZW5lcmF0ZWQuXHJcbiAgICogQ2xvbmUgY291bnQgaXMgZGV0ZXJtaW5lZCBieTpcclxuICAgKiAtIFwiY2xvbmVzXCIgdmFsdWUgaW4gdGhlIG9wdGlvbnMuXHJcbiAgICogLSBOdW1iZXIgb2Ygc2xpZGVzIHRoYXQgY2FuIGJlIHBsYWNlZCBpbiBhIHZpZXcgaW4gXCJmaXhlZFwiIG1vZGUuXHJcbiAgICogLSBNYXggcGFnZXMgYSBmbGljayBhY3Rpb24gY2FuIG1vdmUuXHJcbiAgICogLSBXaGV0aGVyIHRoZSBzbGlkZSBsZW5ndGggaXMgZW5vdWdoIGZvciBwZXJQYWdlLlxyXG4gICAqXHJcbiAgICogQHJldHVybiB7bnVtYmVyfSAtIENvdW50IGZvciBjbG9uZXMuXHJcbiAgICovXG5cblxuICBmdW5jdGlvbiBnZXRDbG9uZUNvdW50KCkge1xuICAgIHZhciBvcHRpb25zID0gU3BsaWRlLm9wdGlvbnM7XG5cbiAgICBpZiAob3B0aW9ucy5jbG9uZXMpIHtcbiAgICAgIHJldHVybiBvcHRpb25zLmNsb25lcztcbiAgICB9IC8vIFVzZSB0aGUgc2xpZGUgbGVuZ3RoIGluIGF1dG9XaWR0aCBtb2RlIGJlY2F1c2UgdGhlIG51bWJlciBjYW5ub3QgYmUgY2FsY3VsYXRlZC5cblxuXG4gICAgdmFyIGJhc2VDb3VudCA9IG9wdGlvbnMuYXV0b1dpZHRoIHx8IG9wdGlvbnMuYXV0b0hlaWdodCA/IEVsZW1lbnRzLmxlbmd0aCA6IG9wdGlvbnMucGVyUGFnZTtcbiAgICB2YXIgZGltZW5zaW9uID0gb3B0aW9ucy5kaXJlY3Rpb24gPT09IFRUQiA/ICdIZWlnaHQnIDogJ1dpZHRoJztcbiAgICB2YXIgZml4ZWRTaXplID0gdG9QaXhlbChTcGxpZGUucm9vdCwgb3B0aW9uc1tcImZpeGVkXCIgKyBkaW1lbnNpb25dKTtcblxuICAgIGlmIChmaXhlZFNpemUpIHtcbiAgICAgIC8vIFJvdWdobHkgY2FsY3VsYXRlIHRoZSBjb3VudC4gVGhpcyBuZWVkcyBub3QgdG8gYmUgc3RyaWN0LlxuICAgICAgYmFzZUNvdW50ID0gTWF0aC5jZWlsKEVsZW1lbnRzLnRyYWNrW1wiY2xpZW50XCIgKyBkaW1lbnNpb25dIC8gZml4ZWRTaXplKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYmFzZUNvdW50ICogKG9wdGlvbnMuZHJhZyA/IG9wdGlvbnMuZmxpY2tNYXhQYWdlcyArIDEgOiAxKTtcbiAgfVxuICAvKipcclxuICAgKiBDbG9uZSBkZWVwbHkgdGhlIGdpdmVuIGVsZW1lbnQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsbSAtIEFuIGVsZW1lbnQgYmVpbmcgZHVwbGljYXRlZC5cclxuICAgKlxyXG4gICAqIEByZXR1cm4ge05vZGV9IC0gQSBjbG9uZWQgbm9kZShlbGVtZW50KS5cclxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIGNsb25lRGVlcGx5KGVsbSkge1xuICAgIHZhciBjbG9uZSA9IGVsbS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgYWRkQ2xhc3MoY2xvbmUsIFNwbGlkZS5jbGFzc2VzLmNsb25lKTsgLy8gSUQgc2hvdWxkIG5vdCBiZSBkdXBsaWNhdGVkLlxuXG4gICAgcmVtb3ZlQXR0cmlidXRlKGNsb25lLCAnaWQnKTtcbiAgICByZXR1cm4gY2xvbmU7XG4gIH1cblxuICByZXR1cm4gQ2xvbmVzO1xufSk7XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvanMvY29tcG9uZW50cy9sYXlvdXQvZGlyZWN0aW9ucy9ob3Jpem9udGFsLmpzXG4vKipcclxuICogVGhlIHJlc29sdmVyIGNvbXBvbmVudCBmb3IgaG9yaXpvbnRhbCBsYXlvdXQuXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgTmFvdG9zaGkgRnVqaXRhXHJcbiAqIEBjb3B5cmlnaHQgTmFvdG9zaGkgRnVqaXRhLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKi9cblxuXG5cbi8qKlxyXG4gKiBUaGUgcmVzb2x2ZXIgY29tcG9uZW50IGZvciBob3Jpem9udGFsIGxheW91dC5cclxuICpcclxuICogQHBhcmFtIHtTcGxpZGV9IFNwbGlkZSAgICAgLSBBIFNwbGlkZSBpbnN0YW5jZS5cclxuICogQHBhcmFtIHtPYmplY3R9IENvbXBvbmVudHMgLSBBbiBvYmplY3QgY29udGFpbmluZyBjb21wb25lbnRzLlxyXG4gKlxyXG4gKiBAcmV0dXJuIHtPYmplY3R9IC0gVGhlIHJlc29sdmVyIG9iamVjdC5cclxuICovXG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gY29uc3QgaG9yaXpvbnRhbCA9IChmdW5jdGlvbiAoU3BsaWRlLCBDb21wb25lbnRzKSB7XG4gIC8qKlxyXG4gICAqIEtlZXAgdGhlIEVsZW1lbnRzIGNvbXBvbmVudC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICovXG4gIHZhciBFbGVtZW50cyA9IENvbXBvbmVudHMuRWxlbWVudHM7XG4gIC8qKlxyXG4gICAqIEtlZXAgdGhlIHJvb3QgZWxlbWVudC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtFbGVtZW50fVxyXG4gICAqL1xuXG4gIHZhciByb290ID0gU3BsaWRlLnJvb3Q7XG4gIC8qKlxyXG4gICAqIEtlZXAgdGhlIHRyYWNrIGVsZW1lbnQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7RWxlbWVudH1cclxuICAgKi9cblxuICB2YXIgdHJhY2s7XG4gIC8qKlxyXG4gICAqIEtlZXAgdGhlIGxhdGVzdCBvcHRpb25zLlxyXG4gICAqXHJcbiAgICogQHR5cGUge0VsZW1lbnR9XHJcbiAgICovXG5cbiAgdmFyIG9wdGlvbnMgPSBTcGxpZGUub3B0aW9ucztcbiAgcmV0dXJuIHtcbiAgICAvKipcclxuICAgICAqIE1hcmdpbiBwcm9wZXJ0eSBuYW1lLlxyXG4gICAgICpcclxuICAgICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICAgKi9cbiAgICBtYXJnaW46ICdtYXJnaW4nICsgKG9wdGlvbnMuZGlyZWN0aW9uID09PSBSVEwgPyAnTGVmdCcgOiAnUmlnaHQnKSxcblxuICAgIC8qKlxyXG4gICAgICogQWx3YXlzIDAgYmVjYXVzZSB0aGUgaGVpZ2h0IHdpbGwgYmUgZGV0ZXJtaW5lZCBieSBpbm5lciBjb250ZW50cy5cclxuICAgICAqXHJcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICovXG4gICAgaGVpZ2h0OiAwLFxuXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXphdGlvbi5cclxuICAgICAqL1xuICAgIGluaXQ6IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICB0aGlzLnJlc2l6ZSgpO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIFJlc2l6ZSBnYXAgYW5kIHBhZGRpbmcuXHJcbiAgICAgKiBUaGlzIG11c3QgYmUgY2FsbGVkIG9uIGluaXQuXHJcbiAgICAgKi9cbiAgICByZXNpemU6IGZ1bmN0aW9uIHJlc2l6ZSgpIHtcbiAgICAgIG9wdGlvbnMgPSBTcGxpZGUub3B0aW9ucztcbiAgICAgIHRyYWNrID0gRWxlbWVudHMudHJhY2s7XG4gICAgICB0aGlzLmdhcCA9IHRvUGl4ZWwocm9vdCwgb3B0aW9ucy5nYXApO1xuICAgICAgdmFyIHBhZGRpbmcgPSBvcHRpb25zLnBhZGRpbmc7XG4gICAgICB2YXIgbGVmdCA9IHRvUGl4ZWwocm9vdCwgcGFkZGluZy5sZWZ0IHx8IHBhZGRpbmcpO1xuICAgICAgdmFyIHJpZ2h0ID0gdG9QaXhlbChyb290LCBwYWRkaW5nLnJpZ2h0IHx8IHBhZGRpbmcpO1xuICAgICAgdGhpcy5wYWRkaW5nID0ge1xuICAgICAgICBsZWZ0OiBsZWZ0LFxuICAgICAgICByaWdodDogcmlnaHRcbiAgICAgIH07XG4gICAgICBhcHBseVN0eWxlKHRyYWNrLCB7XG4gICAgICAgIHBhZGRpbmdMZWZ0OiB1bml0KGxlZnQpLFxuICAgICAgICBwYWRkaW5nUmlnaHQ6IHVuaXQocmlnaHQpXG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm4gdG90YWwgd2lkdGggZnJvbSB0aGUgbGVmdCBvZiB0aGUgbGlzdCB0byB0aGUgcmlnaHQgb2YgdGhlIHNsaWRlIHNwZWNpZmllZCBieSB0aGUgcHJvdmlkZWQgaW5kZXguXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IC0gT3B0aW9uYWwuIEEgc2xpZGUgaW5kZXguIElmIHVuZGVmaW5lZCwgdG90YWwgd2lkdGggb2YgdGhlIHNsaWRlciB3aWxsIGJlIHJldHVybmVkLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge251bWJlcn0gLSBUb3RhbCB3aWR0aCB0byB0aGUgcmlnaHQgc2lkZSBvZiB0aGUgc3BlY2lmaWVkIHNsaWRlLCBvciAwIGZvciBhbiBpbnZhbGlkIGluZGV4LlxyXG4gICAgICovXG4gICAgdG90YWxXaWR0aDogZnVuY3Rpb24gdG90YWxXaWR0aChpbmRleCkge1xuICAgICAgaWYgKGluZGV4ID09PSB2b2lkIDApIHtcbiAgICAgICAgaW5kZXggPSBTcGxpZGUubGVuZ3RoIC0gMTtcbiAgICAgIH1cblxuICAgICAgdmFyIFNsaWRlID0gRWxlbWVudHMuZ2V0U2xpZGUoaW5kZXgpO1xuICAgICAgdmFyIHdpZHRoID0gMDtcblxuICAgICAgaWYgKFNsaWRlKSB7XG4gICAgICAgIHZhciBzbGlkZVJlY3QgPSBnZXRSZWN0KFNsaWRlLnNsaWRlKTtcbiAgICAgICAgdmFyIGxpc3RSZWN0ID0gZ2V0UmVjdChFbGVtZW50cy5saXN0KTtcblxuICAgICAgICBpZiAob3B0aW9ucy5kaXJlY3Rpb24gPT09IFJUTCkge1xuICAgICAgICAgIHdpZHRoID0gbGlzdFJlY3QucmlnaHQgLSBzbGlkZVJlY3QubGVmdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3aWR0aCA9IHNsaWRlUmVjdC5yaWdodCAtIGxpc3RSZWN0LmxlZnQ7XG4gICAgICAgIH1cblxuICAgICAgICB3aWR0aCArPSB0aGlzLmdhcDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHdpZHRoO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIFJldHVybiB0aGUgc2xpZGUgd2lkdGggaW4gcHguXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IC0gU2xpZGUgaW5kZXguXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7bnVtYmVyfSAtIFRoZSBzbGlkZSB3aWR0aC5cclxuICAgICAqL1xuICAgIHNsaWRlV2lkdGg6IGZ1bmN0aW9uIHNsaWRlV2lkdGgoaW5kZXgpIHtcbiAgICAgIGlmIChvcHRpb25zLmF1dG9XaWR0aCkge1xuICAgICAgICB2YXIgU2xpZGUgPSBFbGVtZW50cy5nZXRTbGlkZShpbmRleCk7XG4gICAgICAgIHJldHVybiBTbGlkZSA/IFNsaWRlLnNsaWRlLm9mZnNldFdpZHRoIDogMDtcbiAgICAgIH1cblxuICAgICAgdmFyIHdpZHRoID0gb3B0aW9ucy5maXhlZFdpZHRoIHx8ICh0aGlzLndpZHRoICsgdGhpcy5nYXApIC8gb3B0aW9ucy5wZXJQYWdlIC0gdGhpcy5nYXA7XG4gICAgICByZXR1cm4gdG9QaXhlbChyb290LCB3aWR0aCk7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIHRoZSBzbGlkZSBoZWlnaHQgaW4gcHguXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7bnVtYmVyfSAtIFRoZSBzbGlkZSBoZWlnaHQuXHJcbiAgICAgKi9cbiAgICBzbGlkZUhlaWdodDogZnVuY3Rpb24gc2xpZGVIZWlnaHQoKSB7XG4gICAgICB2YXIgaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQgfHwgb3B0aW9ucy5maXhlZEhlaWdodCB8fCB0aGlzLndpZHRoICogb3B0aW9ucy5oZWlnaHRSYXRpbztcbiAgICAgIHJldHVybiB0b1BpeGVsKHJvb3QsIGhlaWdodCk7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIHNsaWRlciB3aWR0aCB3aXRob3V0IHBhZGRpbmcuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7bnVtYmVyfSAtIEN1cnJlbnQgc2xpZGVyIHdpZHRoLlxyXG4gICAgICovXG4gICAgZ2V0IHdpZHRoKCkge1xuICAgICAgcmV0dXJuIHRyYWNrLmNsaWVudFdpZHRoIC0gdGhpcy5wYWRkaW5nLmxlZnQgLSB0aGlzLnBhZGRpbmcucmlnaHQ7XG4gICAgfVxuXG4gIH07XG59KTtcbjsvLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9qcy9jb21wb25lbnRzL2xheW91dC9kaXJlY3Rpb25zL3ZlcnRpY2FsLmpzXG4vKipcclxuICogVGhlIHJlc29sdmVyIGNvbXBvbmVudCBmb3IgdmVydGljYWwgbGF5b3V0LlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgIE5hb3Rvc2hpIEZ1aml0YVxyXG4gKiBAY29weXJpZ2h0IE5hb3Rvc2hpIEZ1aml0YS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICovXG5cblxuXG4vKipcclxuICogVGhlIHJlc29sdmVyIGNvbXBvbmVudCBmb3IgdmVydGljYWwgbGF5b3V0LlxyXG4gKlxyXG4gKiBAcGFyYW0ge1NwbGlkZX0gU3BsaWRlICAgICAtIEEgU3BsaWRlIGluc3RhbmNlLlxyXG4gKiBAcGFyYW0ge09iamVjdH0gQ29tcG9uZW50cyAtIEFuIG9iamVjdCBjb250YWluaW5nIGNvbXBvbmVudHMuXHJcbiAqXHJcbiAqIEByZXR1cm4ge09iamVjdH0gLSBUaGUgcmVzb2x2ZXIgb2JqZWN0LlxyXG4gKi9cblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBjb25zdCB2ZXJ0aWNhbCA9IChmdW5jdGlvbiAoU3BsaWRlLCBDb21wb25lbnRzKSB7XG4gIC8qKlxyXG4gICAqIEtlZXAgdGhlIEVsZW1lbnRzIGNvbXBvbmVudC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICovXG4gIHZhciBFbGVtZW50cyA9IENvbXBvbmVudHMuRWxlbWVudHM7XG4gIC8qKlxyXG4gICAqIEtlZXAgdGhlIHJvb3QgZWxlbWVudC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtFbGVtZW50fVxyXG4gICAqL1xuXG4gIHZhciByb290ID0gU3BsaWRlLnJvb3Q7XG4gIC8qKlxyXG4gICAqIEtlZXAgdGhlIHRyYWNrIGVsZW1lbnQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7RWxlbWVudH1cclxuICAgKi9cblxuICB2YXIgdHJhY2s7XG4gIC8qKlxyXG4gICAqIEtlZXAgdGhlIGxhdGVzdCBvcHRpb25zLlxyXG4gICAqXHJcbiAgICogQHR5cGUge0VsZW1lbnR9XHJcbiAgICovXG5cbiAgdmFyIG9wdGlvbnM7XG4gIHJldHVybiB7XG4gICAgLyoqXHJcbiAgICAgKiBNYXJnaW4gcHJvcGVydHkgbmFtZS5cclxuICAgICAqXHJcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAgICovXG4gICAgbWFyZ2luOiAnbWFyZ2luQm90dG9tJyxcblxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6YXRpb24uXHJcbiAgICAgKi9cbiAgICBpbml0OiBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgdGhpcy5yZXNpemUoKTtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBSZXNpemUgZ2FwIGFuZCBwYWRkaW5nLlxyXG4gICAgICogVGhpcyBtdXN0IGJlIGNhbGxlZCBvbiBpbml0LlxyXG4gICAgICovXG4gICAgcmVzaXplOiBmdW5jdGlvbiByZXNpemUoKSB7XG4gICAgICBvcHRpb25zID0gU3BsaWRlLm9wdGlvbnM7XG4gICAgICB0cmFjayA9IEVsZW1lbnRzLnRyYWNrO1xuICAgICAgdGhpcy5nYXAgPSB0b1BpeGVsKHJvb3QsIG9wdGlvbnMuZ2FwKTtcbiAgICAgIHZhciBwYWRkaW5nID0gb3B0aW9ucy5wYWRkaW5nO1xuICAgICAgdmFyIHRvcCA9IHRvUGl4ZWwocm9vdCwgcGFkZGluZy50b3AgfHwgcGFkZGluZyk7XG4gICAgICB2YXIgYm90dG9tID0gdG9QaXhlbChyb290LCBwYWRkaW5nLmJvdHRvbSB8fCBwYWRkaW5nKTtcbiAgICAgIHRoaXMucGFkZGluZyA9IHtcbiAgICAgICAgdG9wOiB0b3AsXG4gICAgICAgIGJvdHRvbTogYm90dG9tXG4gICAgICB9O1xuICAgICAgYXBwbHlTdHlsZSh0cmFjaywge1xuICAgICAgICBwYWRkaW5nVG9wOiB1bml0KHRvcCksXG4gICAgICAgIHBhZGRpbmdCb3R0b206IHVuaXQoYm90dG9tKVxuICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIHRvdGFsIGhlaWdodCBmcm9tIHRoZSB0b3Agb2YgdGhlIGxpc3QgdG8gdGhlIGJvdHRvbSBvZiB0aGUgc2xpZGUgc3BlY2lmaWVkIGJ5IHRoZSBwcm92aWRlZCBpbmRleC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggLSBPcHRpb25hbC4gQSBzbGlkZSBpbmRleC4gSWYgdW5kZWZpbmVkLCB0b3RhbCBoZWlnaHQgb2YgdGhlIHNsaWRlciB3aWxsIGJlIHJldHVybmVkLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge251bWJlcn0gLSBUb3RhbCBoZWlnaHQgdG8gdGhlIGJvdHRvbSBvZiB0aGUgc3BlY2lmaWVkIHNsaWRlLCBvciAwIGZvciBhbiBpbnZhbGlkIGluZGV4LlxyXG4gICAgICovXG4gICAgdG90YWxIZWlnaHQ6IGZ1bmN0aW9uIHRvdGFsSGVpZ2h0KGluZGV4KSB7XG4gICAgICBpZiAoaW5kZXggPT09IHZvaWQgMCkge1xuICAgICAgICBpbmRleCA9IFNwbGlkZS5sZW5ndGggLSAxO1xuICAgICAgfVxuXG4gICAgICB2YXIgU2xpZGUgPSBFbGVtZW50cy5nZXRTbGlkZShpbmRleCk7XG5cbiAgICAgIGlmIChTbGlkZSkge1xuICAgICAgICByZXR1cm4gZ2V0UmVjdChTbGlkZS5zbGlkZSkuYm90dG9tIC0gZ2V0UmVjdChFbGVtZW50cy5saXN0KS50b3AgKyB0aGlzLmdhcDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIDA7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIHRoZSBzbGlkZSB3aWR0aCBpbiBweC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IC0gVGhlIHNsaWRlIHdpZHRoLlxyXG4gICAgICovXG4gICAgc2xpZGVXaWR0aDogZnVuY3Rpb24gc2xpZGVXaWR0aCgpIHtcbiAgICAgIHJldHVybiB0b1BpeGVsKHJvb3QsIG9wdGlvbnMuZml4ZWRXaWR0aCB8fCB0aGlzLndpZHRoKTtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm4gdGhlIHNsaWRlIGhlaWdodCBpbiBweC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggLSBTbGlkZSBpbmRleC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IC0gVGhlIHNsaWRlIGhlaWdodC5cclxuICAgICAqL1xuICAgIHNsaWRlSGVpZ2h0OiBmdW5jdGlvbiBzbGlkZUhlaWdodChpbmRleCkge1xuICAgICAgaWYgKG9wdGlvbnMuYXV0b0hlaWdodCkge1xuICAgICAgICB2YXIgU2xpZGUgPSBFbGVtZW50cy5nZXRTbGlkZShpbmRleCk7XG4gICAgICAgIHJldHVybiBTbGlkZSA/IFNsaWRlLnNsaWRlLm9mZnNldEhlaWdodCA6IDA7XG4gICAgICB9XG5cbiAgICAgIHZhciBoZWlnaHQgPSBvcHRpb25zLmZpeGVkSGVpZ2h0IHx8ICh0aGlzLmhlaWdodCArIHRoaXMuZ2FwKSAvIG9wdGlvbnMucGVyUGFnZSAtIHRoaXMuZ2FwO1xuICAgICAgcmV0dXJuIHRvUGl4ZWwocm9vdCwgaGVpZ2h0KTtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm4gc2xpZGVyIHdpZHRoIHdpdGhvdXQgcGFkZGluZy5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IC0gQ3VycmVudCBzbGlkZXIgd2lkdGguXHJcbiAgICAgKi9cbiAgICBnZXQgd2lkdGgoKSB7XG4gICAgICByZXR1cm4gdHJhY2suY2xpZW50V2lkdGg7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIHNsaWRlIGhlaWdodCB3aXRob3V0IHBhZGRpbmcuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7bnVtYmVyfSAtIFNsaWRlciBoZWlnaHQuXHJcbiAgICAgKi9cbiAgICBnZXQgaGVpZ2h0KCkge1xuICAgICAgdmFyIGhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0IHx8IHRoaXMud2lkdGggKiBvcHRpb25zLmhlaWdodFJhdGlvO1xuICAgICAgZXhpc3QoaGVpZ2h0LCAnXCJoZWlnaHRcIiBvciBcImhlaWdodFJhdGlvXCIgaXMgbWlzc2luZy4nKTtcbiAgICAgIHJldHVybiB0b1BpeGVsKHJvb3QsIGhlaWdodCkgLSB0aGlzLnBhZGRpbmcudG9wIC0gdGhpcy5wYWRkaW5nLmJvdHRvbTtcbiAgICB9XG5cbiAgfTtcbn0pO1xuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2pzL3V0aWxzL3RpbWUuanNcbi8qKlxyXG4gKiBBIHBhY2thZ2Ugb2YgdXRpbGl0eSBmdW5jdGlvbnMgcmVsYXRlZCB3aXRoIHRpbWUuXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgTmFvdG9zaGkgRnVqaXRhXHJcbiAqIEBjb3B5cmlnaHQgTmFvdG9zaGkgRnVqaXRhLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKi9cblxuLyoqXHJcbiAqIFNpbXBsZSB0aHJvdHRsZSBmdW5jdGlvbiB0aGF0IGNvbnRyb2xzIGhvdyBvZnRlbiB0aGUgZ2l2ZW4gZnVuY3Rpb24gaXMgZXhlY3V0ZWQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZ1bmMgLSBBIGZ1bmN0aW9uIHRvIGJlIHRocm90dGxlZC5cclxuICogQHBhcmFtIHtudW1iZXJ9ICAgd2FpdCAtIFRpbWUgaW4gbWlsbGlzZWNvbmQgZm9yIGludGVydmFsIG9mIGV4ZWN1dGlvbi5cclxuICpcclxuICogQHJldHVybiB7RnVuY3Rpb259IC0gQSBkZWJvdW5jZWQgZnVuY3Rpb24uXHJcbiAqL1xuZnVuY3Rpb24gdGhyb3R0bGUoZnVuYywgd2FpdCkge1xuICB2YXIgdGltZW91dDsgLy8gRGVjbGFyZSBmdW5jdGlvbiBieSB0aGUgXCJmdW5jdGlvblwiIGtleXdvcmQgdG8gcHJldmVudCBcInRoaXNcIiBmcm9tIGJlaW5nIGluaGVyaXRlZC5cblxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGlmICghdGltZW91dCkge1xuICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jKCk7XG4gICAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgfSwgd2FpdCk7XG4gICAgfVxuICB9O1xufVxuLyoqXHJcbiAqIEN1c3RvbSBzZXRJbnRlcnZhbCBmdW5jdGlvbiB0aGF0IHByb3ZpZGVzIHByb2dyZXNzIHJhdGUgYXMgY2FsbGJhY2suXHJcbiAqXHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIC0gQSBjYWxsYmFjayBmdW5jdGlvbiBmaXJlZCBldmVyeSB0aW1lIHRoZSBpbnRlcnZhbCB0aW1lIHBhc3Nlcy5cclxuICogQHBhcmFtIHtudW1iZXJ9ICAgaW50ZXJ2YWwgLSBJbnRlcnZhbCBkdXJhdGlvbiBpbiBtaWxsaXNlY29uZHMuXHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IHByb2dyZXNzIC0gQSBjYWxsYmFjayBmdW5jdGlvbiBmaXJlZCB3aGVuZXZlciB0aGUgcHJvZ3Jlc3MgZ29lcy5cclxuICpcclxuICogQHJldHVybiB7T2JqZWN0fSAtIEFuIG9iamVjdCBjb250YWluaW5nIHBsYXkoKSBhbmQgcGF1c2UoKSBmdW5jdGlvbnMuXHJcbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVJbnRlcnZhbChjYWxsYmFjaywgaW50ZXJ2YWwsIHByb2dyZXNzKSB7XG4gIHZhciBfd2luZG93ID0gd2luZG93LFxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gX3dpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU7XG4gIHZhciBzdGFydCxcbiAgICAgIGVsYXBzZSxcbiAgICAgIHJhdGUsXG4gICAgICBfcGF1c2UgPSB0cnVlO1xuXG4gIHZhciBzdGVwID0gZnVuY3Rpb24gc3RlcCh0aW1lc3RhbXApIHtcbiAgICBpZiAoIV9wYXVzZSkge1xuICAgICAgaWYgKCFzdGFydCkge1xuICAgICAgICBzdGFydCA9IHRpbWVzdGFtcDtcblxuICAgICAgICBpZiAocmF0ZSAmJiByYXRlIDwgMSkge1xuICAgICAgICAgIHN0YXJ0IC09IHJhdGUgKiBpbnRlcnZhbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBlbGFwc2UgPSB0aW1lc3RhbXAgLSBzdGFydDtcbiAgICAgIHJhdGUgPSBlbGFwc2UgLyBpbnRlcnZhbDtcblxuICAgICAgaWYgKGVsYXBzZSA+PSBpbnRlcnZhbCkge1xuICAgICAgICBzdGFydCA9IDA7XG4gICAgICAgIHJhdGUgPSAxO1xuICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgcHJvZ3Jlc3MocmF0ZSk7XG4gICAgICB9XG5cbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBwYXVzZTogZnVuY3Rpb24gcGF1c2UoKSB7XG4gICAgICBfcGF1c2UgPSB0cnVlO1xuICAgICAgc3RhcnQgPSAwO1xuICAgIH0sXG4gICAgcGxheTogZnVuY3Rpb24gcGxheShyZXNldCkge1xuICAgICAgc3RhcnQgPSAwO1xuXG4gICAgICBpZiAocmVzZXQpIHtcbiAgICAgICAgcmF0ZSA9IDA7XG4gICAgICB9XG5cbiAgICAgIGlmIChfcGF1c2UpIHtcbiAgICAgICAgX3BhdXNlID0gZmFsc2U7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvanMvY29tcG9uZW50cy9sYXlvdXQvaW5kZXguanNcbi8qKlxyXG4gKiBUaGUgY29tcG9uZW50IGZvciBoYW5kaW5nIHNsaWRlIGxheW91dHMgYW5kIHRoZWlyIHNpemVzLlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgIE5hb3Rvc2hpIEZ1aml0YVxyXG4gKiBAY29weXJpZ2h0IE5hb3Rvc2hpIEZ1aml0YS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICovXG5cblxuXG5cblxuXG5cbi8qKlxyXG4gKiBUaGUgY29tcG9uZW50IGZvciBoYW5kaW5nIHNsaWRlIGxheW91dHMgYW5kIHRoZWlyIHNpemVzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1NwbGlkZX0gU3BsaWRlICAgICAtIEEgU3BsaWRlIGluc3RhbmNlLlxyXG4gKiBAcGFyYW0ge09iamVjdH0gQ29tcG9uZW50cyAtIEFuIG9iamVjdCBjb250YWluaW5nIGNvbXBvbmVudHMuXHJcbiAqXHJcbiAqIEByZXR1cm4ge09iamVjdH0gLSBUaGUgY29tcG9uZW50IG9iamVjdC5cclxuICovXG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gY29uc3QgbGF5b3V0ID0gKGZ1bmN0aW9uIChTcGxpZGUsIENvbXBvbmVudHMpIHtcbiAgLyoqXHJcbiAgICogS2VlcCB0aGUgRWxlbWVudHMgY29tcG9uZW50LlxyXG4gICAqXHJcbiAgICogQHR5cGUge3N0cmluZ31cclxuICAgKi9cbiAgdmFyIEVsZW1lbnRzID0gQ29tcG9uZW50cy5FbGVtZW50cztcbiAgLyoqXHJcbiAgICogV2hldGhlciB0aGUgc2xpZGVyIGlzIHZlcnRpY2FsIG9yIG5vdC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqL1xuXG4gIHZhciBpc1ZlcnRpY2FsID0gU3BsaWRlLm9wdGlvbnMuZGlyZWN0aW9uID09PSBUVEI7XG4gIC8qKlxyXG4gICAqIExheW91dCBjb21wb25lbnQgb2JqZWN0LlxyXG4gICAqXHJcbiAgICogQHR5cGUge09iamVjdH1cclxuICAgKi9cblxuICB2YXIgTGF5b3V0ID0gb2JqZWN0X2Fzc2lnbih7XG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWQuXHJcbiAgICAgKi9cbiAgICBtb3VudDogZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgICBiaW5kKCk7XG4gICAgICBpbml0KCk7IC8vIFRoZSB3b3JkIFwic2l6ZVwiIG1lYW5zIHdpZHRoIGZvciBhIGhvcml6b250YWwgc2xpZGVyIGFuZCBoZWlnaHQgZm9yIGEgdmVydGljYWwgc2xpZGVyLlxuXG4gICAgICB0aGlzLnRvdGFsU2l6ZSA9IGlzVmVydGljYWwgPyB0aGlzLnRvdGFsSGVpZ2h0IDogdGhpcy50b3RhbFdpZHRoO1xuICAgICAgdGhpcy5zbGlkZVNpemUgPSBpc1ZlcnRpY2FsID8gdGhpcy5zbGlkZUhlaWdodCA6IHRoaXMuc2xpZGVXaWR0aDtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBEZXN0cm95IHRoZSBjb21wb25lbnQuXHJcbiAgICAgKi9cbiAgICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgcmVtb3ZlQXR0cmlidXRlKFtFbGVtZW50cy5saXN0LCBFbGVtZW50cy50cmFja10sICdzdHlsZScpO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIFJldHVybiB0aGUgc2xpZGVyIGhlaWdodCBvbiB0aGUgdmVydGljYWwgbW9kZSBvciB3aWR0aCBvbiB0aGUgaG9yaXpvbnRhbCBtb2RlLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge251bWJlcn1cclxuICAgICAqL1xuICAgIGdldCBzaXplKCkge1xuICAgICAgcmV0dXJuIGlzVmVydGljYWwgPyB0aGlzLmhlaWdodCA6IHRoaXMud2lkdGg7XG4gICAgfVxuXG4gIH0sIGlzVmVydGljYWwgPyB2ZXJ0aWNhbChTcGxpZGUsIENvbXBvbmVudHMpIDogaG9yaXpvbnRhbChTcGxpZGUsIENvbXBvbmVudHMpKTtcbiAgLyoqXHJcbiAgICogSW5pdCBzbGlkZXIgc3R5bGVzIGFjY29yZGluZyB0byBvcHRpb25zLlxyXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgTGF5b3V0LmluaXQoKTtcbiAgICBhcHBseVN0eWxlKFNwbGlkZS5yb290LCB7XG4gICAgICBtYXhXaWR0aDogdW5pdChTcGxpZGUub3B0aW9ucy53aWR0aClcbiAgICB9KTtcbiAgICBFbGVtZW50cy5lYWNoKGZ1bmN0aW9uIChTbGlkZSkge1xuICAgICAgU2xpZGUuc2xpZGUuc3R5bGVbTGF5b3V0Lm1hcmdpbl0gPSB1bml0KExheW91dC5nYXApO1xuICAgIH0pO1xuICAgIHJlc2l6ZSgpO1xuICB9XG4gIC8qKlxyXG4gICAqIExpc3RlbiB0aGUgcmVzaXplIG5hdGl2ZSBldmVudCB3aXRoIHRocm90dGxlLlxyXG4gICAqIEluaXRpYWxpemUgd2hlbiB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWQgb3Igb3B0aW9ucyBhcmUgdXBkYXRlZC5cclxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIGJpbmQoKSB7XG4gICAgU3BsaWRlLm9uKCdyZXNpemUgbG9hZCcsIHRocm90dGxlKGZ1bmN0aW9uICgpIHtcbiAgICAgIFNwbGlkZS5lbWl0KCdyZXNpemUnKTtcbiAgICB9LCBTcGxpZGUub3B0aW9ucy50aHJvdHRsZSksIHdpbmRvdykub24oJ3Jlc2l6ZScsIHJlc2l6ZSkub24oJ3VwZGF0ZWQgcmVmcmVzaCcsIGluaXQpO1xuICB9XG4gIC8qKlxyXG4gICAqIFJlc2l6ZSB0aGUgdHJhY2sgYW5kIHNsaWRlIGVsZW1lbnRzLlxyXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gcmVzaXplKCkge1xuICAgIHZhciBvcHRpb25zID0gU3BsaWRlLm9wdGlvbnM7XG4gICAgTGF5b3V0LnJlc2l6ZSgpO1xuICAgIGFwcGx5U3R5bGUoRWxlbWVudHMudHJhY2ssIHtcbiAgICAgIGhlaWdodDogdW5pdChMYXlvdXQuaGVpZ2h0KVxuICAgIH0pO1xuICAgIHZhciBzbGlkZUhlaWdodCA9IG9wdGlvbnMuYXV0b0hlaWdodCA/IG51bGwgOiB1bml0KExheW91dC5zbGlkZUhlaWdodCgpKTtcbiAgICBFbGVtZW50cy5lYWNoKGZ1bmN0aW9uIChTbGlkZSkge1xuICAgICAgYXBwbHlTdHlsZShTbGlkZS5jb250YWluZXIsIHtcbiAgICAgICAgaGVpZ2h0OiBzbGlkZUhlaWdodFxuICAgICAgfSk7XG4gICAgICBhcHBseVN0eWxlKFNsaWRlLnNsaWRlLCB7XG4gICAgICAgIHdpZHRoOiBvcHRpb25zLmF1dG9XaWR0aCA/IG51bGwgOiB1bml0KExheW91dC5zbGlkZVdpZHRoKFNsaWRlLmluZGV4KSksXG4gICAgICAgIGhlaWdodDogU2xpZGUuY29udGFpbmVyID8gbnVsbCA6IHNsaWRlSGVpZ2h0XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBTcGxpZGUuZW1pdCgncmVzaXplZCcpO1xuICB9XG5cbiAgcmV0dXJuIExheW91dDtcbn0pO1xuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2pzL2NvbXBvbmVudHMvZHJhZy9pbmRleC5qc1xuLyoqXHJcbiAqIFRoZSBjb21wb25lbnQgZm9yIHN1cHBvcnRpbmcgbW91c2UgZHJhZyBhbmQgc3dpcGUuXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgTmFvdG9zaGkgRnVqaXRhXHJcbiAqIEBjb3B5cmlnaHQgTmFvdG9zaGkgRnVqaXRhLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKi9cblxuXG5cblxuXG52YXIgZHJhZ19hYnMgPSBNYXRoLmFicztcbi8qKlxyXG4gKiBJZiB0aGUgYWJzb2x1dGUgdmVsb2NpdHkgaXMgZ3JlYXRlciB0aGFudCB0aGlzIHZhbHVlLFxyXG4gKiBhIHNsaWRlciBhbHdheXMgZ29lcyB0byBhIGRpZmZlcmVudCBzbGlkZSBhZnRlciBkcmFnLCBub3QgYWxsb3dlZCB0byBzdGF5IG9uIGEgY3VycmVudCBzbGlkZS5cclxuICovXG5cbnZhciBNSU5fVkVMT0NJVFkgPSAwLjE7XG4vKipcclxuICogQWRqdXN0IGhvdyBtdWNoIHRoZSB0cmFjayBjYW4gYmUgcHVsbGVkIG9uIHRoZSBmaXJzdCBvciBsYXN0IHBhZ2UuXHJcbiAqIFRoZSBsYXJnZXIgbnVtYmVyIHRoaXMgaXMsIHRoZSBmYXJ0aGVyIHRoZSB0cmFjayBtb3Zlcy5cclxuICogVGhpcyBzaG91bGQgYmUgYXJvdW5kIDUgLSA5LlxyXG4gKlxyXG4gKiBAdHlwZSB7bnVtYmVyfVxyXG4gKi9cblxudmFyIEZSSUNUSU9OX1JFRFVDRVIgPSA3O1xuLyoqXHJcbiAqIFRoZSBjb21wb25lbnQgc3VwcG9ydGluZyBtb3VzZSBkcmFnIGFuZCBzd2lwZS5cclxuICpcclxuICogQHBhcmFtIHtTcGxpZGV9IFNwbGlkZSAgICAgLSBBIFNwbGlkZSBpbnN0YW5jZS5cclxuICogQHBhcmFtIHtPYmplY3R9IENvbXBvbmVudHMgLSBBbiBvYmplY3QgY29udGFpbmluZyBjb21wb25lbnRzLlxyXG4gKlxyXG4gKiBAcmV0dXJuIHtPYmplY3R9IC0gVGhlIGNvbXBvbmVudCBvYmplY3QuXHJcbiAqL1xuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIGNvbnN0IGRyYWcgPSAoZnVuY3Rpb24gKFNwbGlkZSwgQ29tcG9uZW50cykge1xuICAvKipcclxuICAgKiBTdG9yZSB0aGUgTW92ZSBjb21wb25lbnQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAqL1xuICB2YXIgVHJhY2sgPSBDb21wb25lbnRzLlRyYWNrO1xuICAvKipcclxuICAgKiBTdG9yZSB0aGUgQ29udHJvbGxlciBjb21wb25lbnQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAqL1xuXG4gIHZhciBDb250cm9sbGVyID0gQ29tcG9uZW50cy5Db250cm9sbGVyO1xuICAvKipcclxuICAgKiBDb29yZGluYXRlIG9mIHRoZSB0cmFjayBvbiBzdGFydGluZyBkcmFnLlxyXG4gICAqXHJcbiAgICogQHR5cGUge09iamVjdH1cclxuICAgKi9cblxuICB2YXIgc3RhcnRDb29yZDtcbiAgLyoqXHJcbiAgICogQW5hbHl6ZWQgaW5mbyBvbiBzdGFydGluZyBkcmFnLlxyXG4gICAqXHJcbiAgICogQHR5cGUge09iamVjdHxudWxsfVxyXG4gICAqL1xuXG4gIHZhciBzdGFydEluZm87XG4gIC8qKlxyXG4gICAqIEFuYWx5emVkIGluZm8gYmVpbmcgdXBkYXRlZCB3aGlsZSBkcmFnZ2luZy9zd2lwaW5nLlxyXG4gICAqXHJcbiAgICogQHR5cGUge09iamVjdH1cclxuICAgKi9cblxuICB2YXIgY3VycmVudEluZm87XG4gIC8qKlxyXG4gICAqIERldGVybWluZSB3aGV0aGVyIHNsaWRlcyBhcmUgYmVpbmcgZHJhZ2dlZCBvciBub3QuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKi9cblxuICB2YXIgaXNEcmFnZ2luZztcbiAgLyoqXHJcbiAgICogV2hldGhlciB0aGUgc2xpZGVyIGRpcmVjdGlvbiBpcyB2ZXJ0aWNhbCBvciBub3QuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKi9cblxuICB2YXIgaXNWZXJ0aWNhbCA9IFNwbGlkZS5vcHRpb25zLmRpcmVjdGlvbiA9PT0gVFRCO1xuICAvKipcclxuICAgKiBBeGlzIGZvciB0aGUgZGlyZWN0aW9uLlxyXG4gICAqXHJcbiAgICogQHR5cGUge3N0cmluZ31cclxuICAgKi9cblxuICB2YXIgYXhpcyA9IGlzVmVydGljYWwgPyAneScgOiAneCc7XG4gIC8qKlxyXG4gICAqIERyYWcgY29tcG9uZW50IG9iamVjdC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICovXG5cbiAgdmFyIERyYWcgPSB7XG4gICAgLyoqXHJcbiAgICAgKiBXaGV0aGVyIGRyYWdnaW5nIGlzIGRpc2FibGVkIG9yIG5vdC5cclxuICAgICAqXHJcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgICAqL1xuICAgIGRpc2FibGVkOiBmYWxzZSxcblxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkLlxyXG4gICAgICovXG4gICAgbW91bnQ6IGZ1bmN0aW9uIG1vdW50KCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgdmFyIEVsZW1lbnRzID0gQ29tcG9uZW50cy5FbGVtZW50cztcbiAgICAgIHZhciB0cmFjayA9IEVsZW1lbnRzLnRyYWNrO1xuICAgICAgU3BsaWRlLm9uKCd0b3VjaHN0YXJ0IG1vdXNlZG93bicsIHN0YXJ0LCB0cmFjaykub24oJ3RvdWNobW92ZSBtb3VzZW1vdmUnLCBtb3ZlLCB0cmFjaywge1xuICAgICAgICBwYXNzaXZlOiBmYWxzZVxuICAgICAgfSkub24oJ3RvdWNoZW5kIHRvdWNoY2FuY2VsIG1vdXNlbGVhdmUgbW91c2V1cCBkcmFnZW5kJywgZW5kLCB0cmFjaykub24oJ21vdW50ZWQgcmVmcmVzaCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gUHJldmVudCBkcmFnZ2luZyBhbiBpbWFnZSBvciBhbmNob3IgaXRzZWxmLlxuICAgICAgICBlYWNoKEVsZW1lbnRzLmxpc3QucXVlcnlTZWxlY3RvckFsbCgnaW1nLCBhJyksIGZ1bmN0aW9uIChlbG0pIHtcbiAgICAgICAgICBTcGxpZGUub2ZmKCdkcmFnc3RhcnQnLCBlbG0pLm9uKCdkcmFnc3RhcnQnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH0sIGVsbSwge1xuICAgICAgICAgICAgcGFzc2l2ZTogZmFsc2VcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9KS5vbignbW91bnRlZCB1cGRhdGVkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpcy5kaXNhYmxlZCA9ICFTcGxpZGUub3B0aW9ucy5kcmFnO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuICAvKipcclxuICAgKiBDYWxsZWQgd2hlbiB0aGUgdHJhY2sgc3RhcnRzIHRvIGJlIGRyYWdnZWQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge1RvdWNoRXZlbnR8TW91c2VFdmVudH0gZSAtIFRvdWNoRXZlbnQgb3IgTW91c2VFdmVudCBvYmplY3QuXHJcbiAgICovXG5cbiAgZnVuY3Rpb24gc3RhcnQoZSkge1xuICAgIGlmICghRHJhZy5kaXNhYmxlZCAmJiAhaXNEcmFnZ2luZykge1xuICAgICAgLy8gVGhlc2UgcHJhbXMgYXJlIHVzZWQgdG8gZXZhbHVhdGUgd2hldGhlciB0aGUgc2xpZGVyIHNob3VsZCBzdGFydCBtb3ZpbmcuXG4gICAgICBpbml0KGUpO1xuICAgIH1cbiAgfVxuICAvKipcclxuICAgKiBJbml0aWFsaXplIHBhcmFtZXRlcnMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge1RvdWNoRXZlbnR8TW91c2VFdmVudH0gZSAtIFRvdWNoRXZlbnQgb3IgTW91c2VFdmVudCBvYmplY3QuXHJcbiAgICovXG5cblxuICBmdW5jdGlvbiBpbml0KGUpIHtcbiAgICBzdGFydENvb3JkID0gVHJhY2sudG9Db29yZChUcmFjay5wb3NpdGlvbik7XG4gICAgc3RhcnRJbmZvID0gYW5hbHl6ZShlLCB7fSk7XG4gICAgY3VycmVudEluZm8gPSBzdGFydEluZm87XG4gIH1cbiAgLyoqXHJcbiAgICogQ2FsbGVkIHdoaWxlIHRoZSB0cmFjayBiZWluZyBkcmFnZ2VkLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtUb3VjaEV2ZW50fE1vdXNlRXZlbnR9IGUgLSBUb3VjaEV2ZW50IG9yIE1vdXNlRXZlbnQgb2JqZWN0LlxyXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gbW92ZShlKSB7XG4gICAgaWYgKHN0YXJ0SW5mbykge1xuICAgICAgY3VycmVudEluZm8gPSBhbmFseXplKGUsIHN0YXJ0SW5mbyk7XG5cbiAgICAgIGlmIChpc0RyYWdnaW5nKSB7XG4gICAgICAgIGlmIChlLmNhbmNlbGFibGUpIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIVNwbGlkZS5pcyhGQURFKSkge1xuICAgICAgICAgIHZhciBwb3NpdGlvbiA9IHN0YXJ0Q29vcmRbYXhpc10gKyBjdXJyZW50SW5mby5vZmZzZXRbYXhpc107XG4gICAgICAgICAgVHJhY2sudHJhbnNsYXRlKHJlc2lzdChwb3NpdGlvbikpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoc2hvdWxkTW92ZShjdXJyZW50SW5mbykpIHtcbiAgICAgICAgICBTcGxpZGUuZW1pdCgnZHJhZycsIHN0YXJ0SW5mbyk7XG4gICAgICAgICAgaXNEcmFnZ2luZyA9IHRydWU7XG4gICAgICAgICAgVHJhY2suY2FuY2VsKCk7IC8vIFRoZXNlIHBhcmFtcyBhcmUgYWN0dWFsIGRyYWcgZGF0YS5cblxuICAgICAgICAgIGluaXQoZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLyoqXHJcbiAgICogRGV0ZXJtaW5lIHdoZXRoZXIgdG8gc3RhcnQgbW92aW5nIHRoZSB0cmFjayBvciBub3QgYnkgZHJhZyBhbmdsZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBpbmZvIC0gQW4gaW5mb3JtYXRpb24gb2JqZWN0LlxyXG4gICAqXHJcbiAgICogQHJldHVybiB7Ym9vbGVhbn0gLSBUcnVlIGlmIHRoZSB0cmFjayBzaG91bGQgYmUgbW92ZWQgb3IgZmFsc2UgaWYgbm90LlxyXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gc2hvdWxkTW92ZShfcmVmKSB7XG4gICAgdmFyIG9mZnNldCA9IF9yZWYub2Zmc2V0O1xuXG4gICAgaWYgKFNwbGlkZS5TdGF0ZS5pcyhNT1ZJTkcpICYmIFNwbGlkZS5vcHRpb25zLndhaXRGb3JUcmFuc2l0aW9uKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIGFuZ2xlID0gTWF0aC5hdGFuKGRyYWdfYWJzKG9mZnNldC55KSAvIGRyYWdfYWJzKG9mZnNldC54KSkgKiAxODAgLyBNYXRoLlBJO1xuXG4gICAgaWYgKGlzVmVydGljYWwpIHtcbiAgICAgIGFuZ2xlID0gOTAgLSBhbmdsZTtcbiAgICB9XG5cbiAgICByZXR1cm4gYW5nbGUgPCBTcGxpZGUub3B0aW9ucy5kcmFnQW5nbGVUaHJlc2hvbGQ7XG4gIH1cbiAgLyoqXHJcbiAgICogUmVzaXN0IGRyYWdnaW5nIHRoZSB0cmFjayBvbiB0aGUgZmlyc3QvbGFzdCBwYWdlIGJlY2F1c2UgdGhlcmUgaXMgbm8gbW9yZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBwb3NpdGlvbiAtIEEgcG9zaXRpb24gYmVpbmcgYXBwbGllZCB0byB0aGUgdHJhY2suXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHtPYmplY3R9IC0gQWRqdXN0ZWQgcG9zaXRpb24uXHJcbiAgICovXG5cblxuICBmdW5jdGlvbiByZXNpc3QocG9zaXRpb24pIHtcbiAgICBpZiAoU3BsaWRlLmlzKFNMSURFKSkge1xuICAgICAgdmFyIHNpZ24gPSBUcmFjay5zaWduO1xuXG4gICAgICB2YXIgX3N0YXJ0ID0gc2lnbiAqIFRyYWNrLnRyaW0oVHJhY2sudG9Qb3NpdGlvbigwKSk7XG5cbiAgICAgIHZhciBfZW5kID0gc2lnbiAqIFRyYWNrLnRyaW0oVHJhY2sudG9Qb3NpdGlvbihDb250cm9sbGVyLmVkZ2VJbmRleCkpO1xuXG4gICAgICBwb3NpdGlvbiAqPSBzaWduO1xuXG4gICAgICBpZiAocG9zaXRpb24gPCBfc3RhcnQpIHtcbiAgICAgICAgcG9zaXRpb24gPSBfc3RhcnQgLSBGUklDVElPTl9SRURVQ0VSICogTWF0aC5sb2coX3N0YXJ0IC0gcG9zaXRpb24pO1xuICAgICAgfSBlbHNlIGlmIChwb3NpdGlvbiA+IF9lbmQpIHtcbiAgICAgICAgcG9zaXRpb24gPSBfZW5kICsgRlJJQ1RJT05fUkVEVUNFUiAqIE1hdGgubG9nKHBvc2l0aW9uIC0gX2VuZCk7XG4gICAgICB9XG5cbiAgICAgIHBvc2l0aW9uICo9IHNpZ247XG4gICAgfVxuXG4gICAgcmV0dXJuIHBvc2l0aW9uO1xuICB9XG4gIC8qKlxyXG4gICAqIENhbGxlZCB3aGVuIGRyYWdnaW5nIGVuZHMuXHJcbiAgICovXG5cblxuICBmdW5jdGlvbiBlbmQoKSB7XG4gICAgc3RhcnRJbmZvID0gbnVsbDtcblxuICAgIGlmIChpc0RyYWdnaW5nKSB7XG4gICAgICBTcGxpZGUuZW1pdCgnZHJhZ2dlZCcsIGN1cnJlbnRJbmZvKTtcbiAgICAgIGdvKGN1cnJlbnRJbmZvKTtcbiAgICAgIGlzRHJhZ2dpbmcgPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgLyoqXHJcbiAgICogR28gdG8gdGhlIHNsaWRlIGRldGVybWluZWQgYnkgdGhlIGFuYWx5emVkIGRhdGEuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge09iamVjdH0gaW5mbyAtIEFuIGluZm8gb2JqZWN0LlxyXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gZ28oaW5mbykge1xuICAgIHZhciB2ZWxvY2l0eSA9IGluZm8udmVsb2NpdHlbYXhpc107XG4gICAgdmFyIGFic1YgPSBkcmFnX2Ficyh2ZWxvY2l0eSk7XG5cbiAgICBpZiAoYWJzViA+IDApIHtcbiAgICAgIHZhciBvcHRpb25zID0gU3BsaWRlLm9wdGlvbnM7XG4gICAgICB2YXIgaW5kZXggPSBTcGxpZGUuaW5kZXg7XG4gICAgICB2YXIgc2lnbiA9IHZlbG9jaXR5IDwgMCA/IC0xIDogMTtcbiAgICAgIHZhciBkZXN0SW5kZXggPSBpbmRleDtcblxuICAgICAgaWYgKCFTcGxpZGUuaXMoRkFERSkpIHtcbiAgICAgICAgdmFyIGRlc3RpbmF0aW9uID0gVHJhY2sucG9zaXRpb247XG5cbiAgICAgICAgaWYgKGFic1YgPiBvcHRpb25zLmZsaWNrVmVsb2NpdHlUaHJlc2hvbGQgJiYgZHJhZ19hYnMoaW5mby5vZmZzZXRbYXhpc10pIDwgb3B0aW9ucy5zd2lwZURpc3RhbmNlVGhyZXNob2xkKSB7XG4gICAgICAgICAgZGVzdGluYXRpb24gKz0gc2lnbiAqIE1hdGgubWluKGFic1YgKiBvcHRpb25zLmZsaWNrUG93ZXIsIENvbXBvbmVudHMuTGF5b3V0LnNpemUgKiAob3B0aW9ucy5mbGlja01heFBhZ2VzIHx8IDEpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlc3RJbmRleCA9IFRyYWNrLnRvSW5kZXgoZGVzdGluYXRpb24pO1xuICAgICAgfVxuICAgICAgLypcclxuICAgICAgICogRG8gbm90IGFsbG93IHRoZSB0cmFjayB0byBnbyB0byBhIHByZXZpb3VzIHBvc2l0aW9uIGlmIHRoZXJlIGlzIGVub3VnaCB2ZWxvY2l0eS5cclxuICAgICAgICogQWx3YXlzIHVzZSB0aGUgYWRqYWNlbnQgaW5kZXggZm9yIHRoZSBmYWRlIG1vZGUuXHJcbiAgICAgICAqL1xuXG5cbiAgICAgIGlmIChkZXN0SW5kZXggPT09IGluZGV4ICYmIGFic1YgPiBNSU5fVkVMT0NJVFkpIHtcbiAgICAgICAgZGVzdEluZGV4ID0gaW5kZXggKyBzaWduICogVHJhY2suc2lnbjtcbiAgICAgIH1cblxuICAgICAgaWYgKFNwbGlkZS5pcyhTTElERSkpIHtcbiAgICAgICAgZGVzdEluZGV4ID0gYmV0d2VlbihkZXN0SW5kZXgsIDAsIENvbnRyb2xsZXIuZWRnZUluZGV4KTtcbiAgICAgIH1cblxuICAgICAgQ29udHJvbGxlci5nbyhkZXN0SW5kZXgsIG9wdGlvbnMuaXNOYXZpZ2F0aW9uKTtcbiAgICB9XG4gIH1cbiAgLyoqXHJcbiAgICogQW5hbHl6ZSB0aGUgZ2l2ZW4gZXZlbnQgb2JqZWN0IGFuZCByZXR1cm4gaW1wb3J0YW50IGluZm9ybWF0aW9uIGZvciBoYW5kbGluZyBzd2lwZSBiZWhhdmlvci5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7RXZlbnR9ICAgZSAgICAgICAgICAtIFRvdWNoIG9yIE1vdXNlIGV2ZW50IG9iamVjdC5cclxuICAgKiBAcGFyYW0ge09iamVjdH0gIHN0YXJ0SW5mbyAgLSBJbmZvcm1hdGlvbiBhbmFseXplZCBvbiBzdGFydCBmb3IgY2FsY3VsYXRpbmcgZGlmZmVyZW5jZSBmcm9tIHRoZSBjdXJyZW50IG9uZS5cclxuICAgKlxyXG4gICAqIEByZXR1cm4ge09iamVjdH0gLSBBbiBvYmplY3QgY29udGFpbmluZyBhbmFseXplZCBpbmZvcm1hdGlvbiwgc3VjaCBhcyBvZmZzZXQsIHZlbG9jaXR5LCBldGMuXHJcbiAgICovXG5cblxuICBmdW5jdGlvbiBhbmFseXplKGUsIHN0YXJ0SW5mbykge1xuICAgIHZhciB0aW1lU3RhbXAgPSBlLnRpbWVTdGFtcCxcbiAgICAgICAgdG91Y2hlcyA9IGUudG91Y2hlcztcblxuICAgIHZhciBfcmVmMiA9IHRvdWNoZXMgPyB0b3VjaGVzWzBdIDogZSxcbiAgICAgICAgY2xpZW50WCA9IF9yZWYyLmNsaWVudFgsXG4gICAgICAgIGNsaWVudFkgPSBfcmVmMi5jbGllbnRZO1xuXG4gICAgdmFyIF9yZWYzID0gc3RhcnRJbmZvLnRvIHx8IHt9LFxuICAgICAgICBfcmVmMyR4ID0gX3JlZjMueCxcbiAgICAgICAgZnJvbVggPSBfcmVmMyR4ID09PSB2b2lkIDAgPyBjbGllbnRYIDogX3JlZjMkeCxcbiAgICAgICAgX3JlZjMkeSA9IF9yZWYzLnksXG4gICAgICAgIGZyb21ZID0gX3JlZjMkeSA9PT0gdm9pZCAwID8gY2xpZW50WSA6IF9yZWYzJHk7XG5cbiAgICB2YXIgc3RhcnRUaW1lID0gc3RhcnRJbmZvLnRpbWUgfHwgMDtcbiAgICB2YXIgb2Zmc2V0ID0ge1xuICAgICAgeDogY2xpZW50WCAtIGZyb21YLFxuICAgICAgeTogY2xpZW50WSAtIGZyb21ZXG4gICAgfTtcbiAgICB2YXIgZHVyYXRpb24gPSB0aW1lU3RhbXAgLSBzdGFydFRpbWU7XG4gICAgdmFyIHZlbG9jaXR5ID0ge1xuICAgICAgeDogb2Zmc2V0LnggLyBkdXJhdGlvbixcbiAgICAgIHk6IG9mZnNldC55IC8gZHVyYXRpb25cbiAgICB9O1xuICAgIHJldHVybiB7XG4gICAgICB0bzoge1xuICAgICAgICB4OiBjbGllbnRYLFxuICAgICAgICB5OiBjbGllbnRZXG4gICAgICB9LFxuICAgICAgb2Zmc2V0OiBvZmZzZXQsXG4gICAgICB0aW1lOiB0aW1lU3RhbXAsXG4gICAgICB2ZWxvY2l0eTogdmVsb2NpdHlcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIERyYWc7XG59KTtcbjsvLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9qcy9jb21wb25lbnRzL2NsaWNrL2luZGV4LmpzXG4vKipcclxuICogVGhlIGNvbXBvbmVudCBmb3IgaGFuZGxpbmcgYSBjbGljayBldmVudC5cclxuICpcclxuICogQGF1dGhvciAgICBOYW90b3NoaSBGdWppdGFcclxuICogQGNvcHlyaWdodCBOYW90b3NoaSBGdWppdGEuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqL1xuXG4vKipcclxuICogVGhlIGNvbXBvbmVudCBmb3IgaGFuZGxpbmcgYSBjbGljayBldmVudC5cclxuICogQ2xpY2sgc2hvdWxkIGJlIGRpc2FibGVkIGR1cmluZyBkcmFnL3N3aXBlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1NwbGlkZX0gU3BsaWRlICAgICAtIEEgU3BsaWRlIGluc3RhbmNlLlxyXG4gKiBAcGFyYW0ge09iamVjdH0gQ29tcG9uZW50cyAtIEFuIG9iamVjdCBjb250YWluaW5nIGNvbXBvbmVudHMuXHJcbiAqXHJcbiAqIEByZXR1cm4ge09iamVjdH0gLSBUaGUgY29tcG9uZW50IG9iamVjdC5cclxuICovXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIGNvbnN0IGNsaWNrID0gKGZ1bmN0aW9uIChTcGxpZGUsIENvbXBvbmVudHMpIHtcbiAgLyoqXHJcbiAgICogV2hldGhlciBjbGljayBpcyBkaXNhYmxlZCBvciBub3QuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKi9cbiAgdmFyIGRpc2FibGVkID0gZmFsc2U7XG4gIC8qKlxyXG4gICAqIENsaWNrIGNvbXBvbmVudCBvYmplY3QuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAqL1xuXG4gIHZhciBDbGljayA9IHtcbiAgICAvKipcclxuICAgICAqIE1vdW50IG9ubHkgd2hlbiB0aGUgZHJhZyBpcyBhY3RpdmF0ZWQgYW5kIHRoZSBzbGlkZSB0eXBlIGlzIG5vdCBcImZhZGVcIi5cclxuICAgICAqXHJcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgICAqL1xuICAgIHJlcXVpcmVkOiBTcGxpZGUub3B0aW9ucy5kcmFnLFxuXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWQuXHJcbiAgICAgKi9cbiAgICBtb3VudDogZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgICBTcGxpZGUub24oJ2NsaWNrJywgb25DbGljaywgQ29tcG9uZW50cy5FbGVtZW50cy50cmFjaywge1xuICAgICAgICBjYXB0dXJlOiB0cnVlXG4gICAgICB9KS5vbignZHJhZycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgfSkub24oJ2RyYWdnZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIE1ha2Ugc3VyZSB0aGUgZmxhZyBpcyByZWxlYXNlZCBhZnRlciB0aGUgY2xpY2sgZXZlbnQgaXMgZmlyZWQuXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuICAvKipcclxuICAgKiBDYWxsZWQgd2hlbiBhIHRyYWNrIGVsZW1lbnQgaXMgY2xpY2tlZC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7RXZlbnR9IGUgLSBBIGNsaWNrIGV2ZW50LlxyXG4gICAqL1xuXG4gIGZ1bmN0aW9uIG9uQ2xpY2soZSkge1xuICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIENsaWNrO1xufSk7XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvanMvY29tcG9uZW50cy9hdXRvcGxheS9pbmRleC5qc1xuLyoqXHJcbiAqIFRoZSBjb21wb25lbnQgZm9yIHBsYXlpbmcgc2xpZGVzIGF1dG9tYXRpY2FsbHkuXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgTmFvdG9zaGkgRnVqaXRhXHJcbiAqIEBjb3B5cmlnaHQgTmFvdG9zaGkgRnVqaXRhLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKi9cblxuXG4vKipcclxuICogU2V0IG9mIHBhdXNlIGZsYWdzLlxyXG4gKi9cblxudmFyIFBBVVNFX0ZMQUdTID0ge1xuICBIT1ZFUjogMSxcbiAgRk9DVVM6IDIsXG4gIE1BTlVBTDogM1xufTtcbi8qKlxyXG4gKiBUaGUgY29tcG9uZW50IGZvciBwbGF5aW5nIHNsaWRlcyBhdXRvbWF0aWNhbGx5LlxyXG4gKlxyXG4gKiBAcGFyYW0ge1NwbGlkZX0gU3BsaWRlICAgICAtIEEgU3BsaWRlIGluc3RhbmNlLlxyXG4gKiBAcGFyYW0ge09iamVjdH0gQ29tcG9uZW50cyAtIEFuIG9iamVjdCBjb250YWluaW5nIGNvbXBvbmVudHMuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lICAgICAgIC0gQSBjb21wb25lbnQgbmFtZSBhcyBhIGxvd2VyY2FzZSBzdHJpbmcuXHJcbiAqXHJcbiAqIEByZXR1cm4ge09iamVjdH0gLSBUaGUgY29tcG9uZW50IG9iamVjdC5cclxuICovXG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gY29uc3QgYXV0b3BsYXkgPSAoZnVuY3Rpb24gKFNwbGlkZSwgQ29tcG9uZW50cywgbmFtZSkge1xuICAvKipcclxuICAgKiBTdG9yZSBwYXVzZSBmbGFncy5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtBcnJheX1cclxuICAgKi9cbiAgdmFyIGZsYWdzID0gW107XG4gIC8qKlxyXG4gICAqIFN0b3JlIGFuIGludGVydmFsIG9iamVjdC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtPYmplY3R9O1xyXG4gICAqL1xuXG4gIHZhciBpbnRlcnZhbDtcbiAgLyoqXHJcbiAgICogS2VlcCB0aGUgRWxlbWVudHMgY29tcG9uZW50LlxyXG4gICAqXHJcbiAgICogQHR5cGUge3N0cmluZ31cclxuICAgKi9cblxuICB2YXIgRWxlbWVudHMgPSBDb21wb25lbnRzLkVsZW1lbnRzO1xuICAvKipcclxuICAgKiBBdXRvcGxheSBjb21wb25lbnQgb2JqZWN0LlxyXG4gICAqXHJcbiAgICogQHR5cGUge09iamVjdH1cclxuICAgKi9cblxuICB2YXIgQXV0b3BsYXkgPSB7XG4gICAgLyoqXHJcbiAgICAgKiBSZXF1aXJlZCBvbmx5IHdoZW4gdGhlIGF1dG9wbGF5IG9wdGlvbiBpcyB0cnVlLlxyXG4gICAgICpcclxuICAgICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAgICovXG4gICAgcmVxdWlyZWQ6IFNwbGlkZS5vcHRpb25zLmF1dG9wbGF5LFxuXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWQuXHJcbiAgICAgKiBOb3RlIHRoYXQgYXV0b3BsYXkgc3RhcnRzIG9ubHkgaWYgdGhlcmUgYXJlIHNsaWRlcyBvdmVyIHBlclBhZ2UgbnVtYmVyLlxyXG4gICAgICovXG4gICAgbW91bnQ6IGZ1bmN0aW9uIG1vdW50KCkge1xuICAgICAgdmFyIG9wdGlvbnMgPSBTcGxpZGUub3B0aW9ucztcblxuICAgICAgaWYgKEVsZW1lbnRzLnNsaWRlcy5sZW5ndGggPiBvcHRpb25zLnBlclBhZ2UpIHtcbiAgICAgICAgaW50ZXJ2YWwgPSBjcmVhdGVJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgU3BsaWRlLmdvKCc+Jyk7XG4gICAgICAgIH0sIG9wdGlvbnMuaW50ZXJ2YWwsIGZ1bmN0aW9uIChyYXRlKSB7XG4gICAgICAgICAgU3BsaWRlLmVtaXQobmFtZSArIFwiOnBsYXlpbmdcIiwgcmF0ZSk7XG5cbiAgICAgICAgICBpZiAoRWxlbWVudHMuYmFyKSB7XG4gICAgICAgICAgICBhcHBseVN0eWxlKEVsZW1lbnRzLmJhciwge1xuICAgICAgICAgICAgICB3aWR0aDogcmF0ZSAqIDEwMCArIFwiJVwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBiaW5kKCk7XG4gICAgICAgIHRoaXMucGxheSgpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIFN0YXJ0IGF1dG9wbGF5LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBmbGFnIC0gQSBwYXVzZSBmbGFnIHRvIGJlIHJlbW92ZWQuXHJcbiAgICAgKi9cbiAgICBwbGF5OiBmdW5jdGlvbiBwbGF5KGZsYWcpIHtcbiAgICAgIGlmIChmbGFnID09PSB2b2lkIDApIHtcbiAgICAgICAgZmxhZyA9IDA7XG4gICAgICB9XG5cbiAgICAgIGZsYWdzID0gZmxhZ3MuZmlsdGVyKGZ1bmN0aW9uIChmKSB7XG4gICAgICAgIHJldHVybiBmICE9PSBmbGFnO1xuICAgICAgfSk7XG5cbiAgICAgIGlmICghZmxhZ3MubGVuZ3RoKSB7XG4gICAgICAgIFNwbGlkZS5lbWl0KG5hbWUgKyBcIjpwbGF5XCIpO1xuICAgICAgICBpbnRlcnZhbC5wbGF5KFNwbGlkZS5vcHRpb25zLnJlc2V0UHJvZ3Jlc3MpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIFBhdXNlIGF1dG9wbGF5LlxyXG4gICAgICogTm90ZSB0aGF0IEFycmF5LmluY2x1ZGVzIGlzIG5vdCBzdXBwb3J0ZWQgYnkgSUUuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGZsYWcgLSBBIHBhdXNlIGZsYWcgdG8gYmUgYWRkZWQuXHJcbiAgICAgKi9cbiAgICBwYXVzZTogZnVuY3Rpb24gcGF1c2UoZmxhZykge1xuICAgICAgaWYgKGZsYWcgPT09IHZvaWQgMCkge1xuICAgICAgICBmbGFnID0gMDtcbiAgICAgIH1cblxuICAgICAgaW50ZXJ2YWwucGF1c2UoKTtcblxuICAgICAgaWYgKGZsYWdzLmluZGV4T2YoZmxhZykgPT09IC0xKSB7XG4gICAgICAgIGZsYWdzLnB1c2goZmxhZyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChmbGFncy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgU3BsaWRlLmVtaXQobmFtZSArIFwiOnBhdXNlXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgLyoqXHJcbiAgICogTGlzdGVuIHNvbWUgZXZlbnRzLlxyXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGJpbmQoKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBTcGxpZGUub3B0aW9ucztcbiAgICB2YXIgc2libGluZyA9IFNwbGlkZS5zaWJsaW5nO1xuICAgIHZhciBlbG1zID0gW1NwbGlkZS5yb290LCBzaWJsaW5nID8gc2libGluZy5yb290IDogbnVsbF07XG5cbiAgICBpZiAob3B0aW9ucy5wYXVzZU9uSG92ZXIpIHtcbiAgICAgIHN3aXRjaE9uKGVsbXMsICdtb3VzZWxlYXZlJywgUEFVU0VfRkxBR1MuSE9WRVIsIHRydWUpO1xuICAgICAgc3dpdGNoT24oZWxtcywgJ21vdXNlZW50ZXInLCBQQVVTRV9GTEFHUy5IT1ZFUiwgZmFsc2UpO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLnBhdXNlT25Gb2N1cykge1xuICAgICAgc3dpdGNoT24oZWxtcywgJ2ZvY3Vzb3V0JywgUEFVU0VfRkxBR1MuRk9DVVMsIHRydWUpO1xuICAgICAgc3dpdGNoT24oZWxtcywgJ2ZvY3VzaW4nLCBQQVVTRV9GTEFHUy5GT0NVUywgZmFsc2UpO1xuICAgIH1cblxuICAgIGlmIChFbGVtZW50cy5wbGF5KSB7XG4gICAgICBTcGxpZGUub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBOZWVkIHRvIGJlIHJlbW92ZWQgYSBmb2N1cyBmbGFnIGF0IGZpcnN0LlxuICAgICAgICBBdXRvcGxheS5wbGF5KFBBVVNFX0ZMQUdTLkZPQ1VTKTtcbiAgICAgICAgQXV0b3BsYXkucGxheShQQVVTRV9GTEFHUy5NQU5VQUwpO1xuICAgICAgfSwgRWxlbWVudHMucGxheSk7XG4gICAgfVxuXG4gICAgaWYgKEVsZW1lbnRzLnBhdXNlKSB7XG4gICAgICBzd2l0Y2hPbihbRWxlbWVudHMucGF1c2VdLCAnY2xpY2snLCBQQVVTRV9GTEFHUy5NQU5VQUwsIGZhbHNlKTtcbiAgICB9XG5cbiAgICBTcGxpZGUub24oJ21vdmUgcmVmcmVzaCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIEF1dG9wbGF5LnBsYXkoKTtcbiAgICB9KSAvLyBSZXdpbmQgdGhlIHRpbWVyLlxuICAgIC5vbignZGVzdHJveScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIEF1dG9wbGF5LnBhdXNlKCk7XG4gICAgfSk7XG4gIH1cbiAgLyoqXHJcbiAgICogUGxheSBvciBwYXVzZSBvbiB0aGUgZ2l2ZW4gZXZlbnQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0VsZW1lbnRbXX0gZWxtcyAgLSBFbGVtZW50cy5cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gICAgZXZlbnQgLSBBbiBldmVudCBuYW1lIG9yIG5hbWVzLlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSAgICBmbGFnICAtIEEgcGF1c2UgZmxhZyBkZWZpbmVkIG9uIHRoZSB0b3AuXHJcbiAgICogQHBhcmFtIHtib29sZWFufSAgIHBsYXkgIC0gRGV0ZXJtaW5lIHdoZXRoZXIgdG8gcGxheSBvciBwYXVzZS5cclxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIHN3aXRjaE9uKGVsbXMsIGV2ZW50LCBmbGFnLCBwbGF5KSB7XG4gICAgZWxtcy5mb3JFYWNoKGZ1bmN0aW9uIChlbG0pIHtcbiAgICAgIFNwbGlkZS5vbihldmVudCwgZnVuY3Rpb24gKCkge1xuICAgICAgICBBdXRvcGxheVtwbGF5ID8gJ3BsYXknIDogJ3BhdXNlJ10oZmxhZyk7XG4gICAgICB9LCBlbG0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIEF1dG9wbGF5O1xufSk7XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvanMvY29tcG9uZW50cy9jb3Zlci9pbmRleC5qc1xuLyoqXHJcbiAqIFRoZSBjb21wb25lbnQgZm9yIGNoYW5nZSBhbiBpbWcgZWxlbWVudCB0byBiYWNrZ3JvdW5kIGltYWdlIG9mIGl0cyB3cmFwcGVyLlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgIE5hb3Rvc2hpIEZ1aml0YVxyXG4gKiBAY29weXJpZ2h0IE5hb3Rvc2hpIEZ1aml0YS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICovXG5cbi8qKlxyXG4gKiBUaGUgY29tcG9uZW50IGZvciBjaGFuZ2UgYW4gaW1nIGVsZW1lbnQgdG8gYmFja2dyb3VuZCBpbWFnZSBvZiBpdHMgd3JhcHBlci5cclxuICpcclxuICogQHBhcmFtIHtTcGxpZGV9IFNwbGlkZSAgICAgLSBBIFNwbGlkZSBpbnN0YW5jZS5cclxuICogQHBhcmFtIHtPYmplY3R9IENvbXBvbmVudHMgLSBBbiBvYmplY3QgY29udGFpbmluZyBjb21wb25lbnRzLlxyXG4gKlxyXG4gKiBAcmV0dXJuIHtPYmplY3R9IC0gVGhlIGNvbXBvbmVudCBvYmplY3QuXHJcbiAqL1xuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIGNvbnN0IGNvdmVyID0gKGZ1bmN0aW9uIChTcGxpZGUsIENvbXBvbmVudHMpIHtcbiAgLyoqXHJcbiAgICogSG9sZCBvcHRpb25zLlxyXG4gICAqXHJcbiAgICogQHR5cGUge09iamVjdH1cclxuICAgKi9cbiAgdmFyIG9wdGlvbnMgPSBTcGxpZGUub3B0aW9ucztcbiAgLyoqXHJcbiAgICogQ292ZXIgY29tcG9uZW50IG9iamVjdC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICovXG5cbiAgdmFyIENvdmVyID0ge1xuICAgIC8qKlxyXG4gICAgICogUmVxdWlyZWQgb25seSB3aGVuIFwiY292ZXJcIiBvcHRpb24gaXMgdHJ1ZS5cclxuICAgICAqXHJcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgICAqL1xuICAgIHJlcXVpcmVkOiBvcHRpb25zLmNvdmVyLFxuXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWQuXHJcbiAgICAgKi9cbiAgICBtb3VudDogZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgICBTcGxpZGUub24oJ2xhenlsb2FkOmxvYWRlZCcsIGZ1bmN0aW9uIChpbWcpIHtcbiAgICAgICAgY292ZXIoaW1nLCBmYWxzZSk7XG4gICAgICB9KTtcbiAgICAgIFNwbGlkZS5vbignbW91bnRlZCB1cGRhdGVkIHJlZnJlc2gnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBhcHBseShmYWxzZSk7XG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBEZXN0cm95LlxyXG4gICAgICovXG4gICAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgIGFwcGx5KHRydWUpO1xuICAgIH1cbiAgfTtcbiAgLyoqXHJcbiAgICogQXBwbHkgXCJjb3ZlclwiIHRvIGFsbCBzbGlkZXMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHVuY292ZXIgLSBJZiB0cnVlLCBcImNvdmVyXCIgd2lsbCBiZSBjbGVhci5cclxuICAgKi9cblxuICBmdW5jdGlvbiBhcHBseSh1bmNvdmVyKSB7XG4gICAgQ29tcG9uZW50cy5FbGVtZW50cy5lYWNoKGZ1bmN0aW9uIChTbGlkZSkge1xuICAgICAgdmFyIGltZyA9IGNoaWxkKFNsaWRlLnNsaWRlLCAnSU1HJykgfHwgY2hpbGQoU2xpZGUuY29udGFpbmVyLCAnSU1HJyk7XG5cbiAgICAgIGlmIChpbWcgJiYgaW1nLnNyYykge1xuICAgICAgICBjb3ZlcihpbWcsIHVuY292ZXIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIC8qKlxyXG4gICAqIFNldCBiYWNrZ3JvdW5kIGltYWdlIG9mIHRoZSBwYXJlbnQgZWxlbWVudCwgdXNpbmcgc291cmNlIG9mIHRoZSBnaXZlbiBpbWFnZSBlbGVtZW50LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtFbGVtZW50fSBpbWcgICAgIC0gQW4gaW1hZ2UgZWxlbWVudC5cclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHVuY292ZXIgLSBSZXNldCBcImNvdmVyXCIuXHJcbiAgICovXG5cblxuICBmdW5jdGlvbiBjb3ZlcihpbWcsIHVuY292ZXIpIHtcbiAgICBhcHBseVN0eWxlKGltZy5wYXJlbnRFbGVtZW50LCB7XG4gICAgICBiYWNrZ3JvdW5kOiB1bmNvdmVyID8gJycgOiBcImNlbnRlci9jb3ZlciBuby1yZXBlYXQgdXJsKFxcXCJcIiArIGltZy5zcmMgKyBcIlxcXCIpXCJcbiAgICB9KTtcbiAgICBhcHBseVN0eWxlKGltZywge1xuICAgICAgZGlzcGxheTogdW5jb3ZlciA/ICcnIDogJ25vbmUnXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gQ292ZXI7XG59KTtcbjsvLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9qcy9jb21wb25lbnRzL2Fycm93cy9wYXRoLmpzXG4vKipcclxuICogRXhwb3J0IHZlY3RvciBwYXRoIGZvciBhbiBhcnJvdy5cclxuICpcclxuICogQGF1dGhvciAgICBOYW90b3NoaSBGdWppdGFcclxuICogQGNvcHlyaWdodCBOYW90b3NoaSBGdWppdGEuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqL1xuXG4vKipcclxuICogTmFtZXNwYWNlIGRlZmluaXRpb24gZm9yIFNWRyBlbGVtZW50LlxyXG4gKlxyXG4gKiBAdHlwZSB7c3RyaW5nfVxyXG4gKi9cbnZhciBYTUxfTkFNRV9TUEFDRSA9ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc7XG4vKipcclxuICogVGhlIGFycm93IHZlY3RvciBwYXRoLlxyXG4gKlxyXG4gKiBAdHlwZSB7bnVtYmVyfVxyXG4gKi9cblxudmFyIFBBVEggPSAnbTE1LjUgMC45MzItNC4zIDQuMzggMTQuNSAxNC42LTE0LjUgMTQuNSA0LjMgNC40IDE0LjYtMTQuNiA0LjQtNC4zLTQuNC00LjQtMTQuNi0xNC42eic7XG4vKipcclxuICogU1ZHIHdpZHRoIGFuZCBoZWlnaHQuXHJcbiAqXHJcbiAqIEB0eXBlIHtudW1iZXJ9XHJcbiAqL1xuXG52YXIgU0laRSA9IDQwO1xuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2pzL2NvbXBvbmVudHMvYXJyb3dzL2luZGV4LmpzXG4vKipcclxuICogVGhlIGNvbXBvbmVudCBmb3IgYXBwZW5kaW5nIHByZXYvbmV4dCBhcnJvd3MuXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgTmFvdG9zaGkgRnVqaXRhXHJcbiAqIEBjb3B5cmlnaHQgTmFvdG9zaGkgRnVqaXRhLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKi9cblxuXG5cbi8qKlxyXG4gKiBUaGUgY29tcG9uZW50IGZvciBhcHBlbmRpbmcgcHJldi9uZXh0IGFycm93cy5cclxuICpcclxuICogQHBhcmFtIHtTcGxpZGV9IFNwbGlkZSAgICAgLSBBIFNwbGlkZSBpbnN0YW5jZS5cclxuICogQHBhcmFtIHtPYmplY3R9IENvbXBvbmVudHMgLSBBbiBvYmplY3QgY29udGFpbmluZyBjb21wb25lbnRzLlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAgICAgICAtIEEgY29tcG9uZW50IG5hbWUgYXMgYSBsb3dlcmNhc2Ugc3RyaW5nLlxyXG4gKlxyXG4gKiBAcmV0dXJuIHtPYmplY3R9IC0gVGhlIGNvbXBvbmVudCBvYmplY3QuXHJcbiAqL1xuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIGNvbnN0IGFycm93cyA9IChmdW5jdGlvbiAoU3BsaWRlLCBDb21wb25lbnRzLCBuYW1lKSB7XG4gIC8qKlxyXG4gICAqIFByZXZpb3VzIGFycm93IGVsZW1lbnQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7RWxlbWVudHx1bmRlZmluZWR9XHJcbiAgICovXG4gIHZhciBwcmV2O1xuICAvKipcclxuICAgKiBOZXh0IGFycm93IGVsZW1lbnQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7RWxlbWVudHx1bmRlZmluZWR9XHJcbiAgICovXG5cbiAgdmFyIG5leHQ7XG4gIC8qKlxyXG4gICAqIFN0b3JlIHRoZSBjbGFzcyBsaXN0LlxyXG4gICAqXHJcbiAgICogQHR5cGUge09iamVjdH1cclxuICAgKi9cblxuICB2YXIgY2xhc3NlcyA9IFNwbGlkZS5jbGFzc2VzO1xuICAvKipcclxuICAgKiBIb2xkIHRoZSByb290IGVsZW1lbnQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7RWxlbWVudH1cclxuICAgKi9cblxuICB2YXIgcm9vdCA9IFNwbGlkZS5yb290O1xuICAvKipcclxuICAgKiBXaGV0aGVyIGFycm93cyBhcmUgY3JlYXRlZCBwcm9ncmFtbWF0aWNhbGx5IG9yIG5vdC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqL1xuXG4gIHZhciBjcmVhdGVkO1xuICAvKipcclxuICAgKiBIb2xkIHRoZSBFbGVtZW50cyBjb21wb25lbnQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAqL1xuXG4gIHZhciBFbGVtZW50cyA9IENvbXBvbmVudHMuRWxlbWVudHM7XG4gIC8qKlxyXG4gICAqIEFycm93cyBjb21wb25lbnQgb2JqZWN0LlxyXG4gICAqXHJcbiAgICogQHR5cGUge09iamVjdH1cclxuICAgKi9cblxuICB2YXIgQXJyb3dzID0ge1xuICAgIC8qKlxyXG4gICAgICogUmVxdWlyZWQgd2hlbiB0aGUgYXJyb3dzIG9wdGlvbiBpcyB0cnVlLlxyXG4gICAgICpcclxuICAgICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAgICovXG4gICAgcmVxdWlyZWQ6IFNwbGlkZS5vcHRpb25zLmFycm93cyxcblxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkLlxyXG4gICAgICovXG4gICAgbW91bnQ6IGZ1bmN0aW9uIG1vdW50KCkge1xuICAgICAgLy8gQXR0ZW1wdCB0byBnZXQgYXJyb3dzIGZyb20gSFRNTCBzb3VyY2UuXG4gICAgICBwcmV2ID0gRWxlbWVudHMuYXJyb3dzLnByZXY7XG4gICAgICBuZXh0ID0gRWxlbWVudHMuYXJyb3dzLm5leHQ7IC8vIElmIGFycm93cyB3ZXJlIG5vdCBmb3VuZCBpbiBIVE1MLCBsZXQncyBnZW5lcmF0ZSB0aGVtLlxuXG4gICAgICBpZiAoKCFwcmV2IHx8ICFuZXh0KSAmJiBTcGxpZGUub3B0aW9ucy5hcnJvd3MpIHtcbiAgICAgICAgcHJldiA9IGNyZWF0ZUFycm93KHRydWUpO1xuICAgICAgICBuZXh0ID0gY3JlYXRlQXJyb3coZmFsc2UpO1xuICAgICAgICBjcmVhdGVkID0gdHJ1ZTtcbiAgICAgICAgYXBwZW5kQXJyb3dzKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwcmV2ICYmIG5leHQpIHtcbiAgICAgICAgYmluZCgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmFycm93cyA9IHtcbiAgICAgICAgcHJldjogcHJldixcbiAgICAgICAgbmV4dDogbmV4dFxuICAgICAgfTtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgYWZ0ZXIgYWxsIGNvbXBvbmVudHMgYXJlIG1vdW50ZWQuXHJcbiAgICAgKi9cbiAgICBtb3VudGVkOiBmdW5jdGlvbiBtb3VudGVkKCkge1xuICAgICAgU3BsaWRlLmVtaXQobmFtZSArIFwiOm1vdW50ZWRcIiwgcHJldiwgbmV4dCk7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogRGVzdHJveS5cclxuICAgICAqL1xuICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICByZW1vdmVBdHRyaWJ1dGUoW3ByZXYsIG5leHRdLCAnZGlzYWJsZWQnKTtcblxuICAgICAgaWYgKGNyZWF0ZWQpIHtcbiAgICAgICAgZG9tX3JlbW92ZShwcmV2LnBhcmVudEVsZW1lbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgLyoqXHJcbiAgICogTGlzdGVuIHRvIG5hdGl2ZSBhbmQgY3VzdG9tIGV2ZW50cy5cclxuICAgKi9cblxuICBmdW5jdGlvbiBiaW5kKCkge1xuICAgIFNwbGlkZS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICBTcGxpZGUuZ28oJzwnKTtcbiAgICB9LCBwcmV2KS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICBTcGxpZGUuZ28oJz4nKTtcbiAgICB9LCBuZXh0KS5vbignbW91bnRlZCBtb3ZlIHVwZGF0ZWQgcmVmcmVzaCcsIHVwZGF0ZURpc2FibGVkKTtcbiAgfVxuICAvKipcclxuICAgKiBVcGRhdGUgYSBkaXNhYmxlZCBhdHRyaWJ1dGUuXHJcbiAgICovXG5cblxuICBmdW5jdGlvbiB1cGRhdGVEaXNhYmxlZCgpIHtcbiAgICB2YXIgX0NvbXBvbmVudHMkQ29udHJvbGxlID0gQ29tcG9uZW50cy5Db250cm9sbGVyLFxuICAgICAgICBwcmV2SW5kZXggPSBfQ29tcG9uZW50cyRDb250cm9sbGUucHJldkluZGV4LFxuICAgICAgICBuZXh0SW5kZXggPSBfQ29tcG9uZW50cyRDb250cm9sbGUubmV4dEluZGV4O1xuICAgIHZhciBpc0Vub3VnaCA9IFNwbGlkZS5sZW5ndGggPiBTcGxpZGUub3B0aW9ucy5wZXJQYWdlIHx8IFNwbGlkZS5pcyhMT09QKTtcbiAgICBwcmV2LmRpc2FibGVkID0gcHJldkluZGV4IDwgMCB8fCAhaXNFbm91Z2g7XG4gICAgbmV4dC5kaXNhYmxlZCA9IG5leHRJbmRleCA8IDAgfHwgIWlzRW5vdWdoO1xuICAgIFNwbGlkZS5lbWl0KG5hbWUgKyBcIjp1cGRhdGVkXCIsIHByZXYsIG5leHQsIHByZXZJbmRleCwgbmV4dEluZGV4KTtcbiAgfVxuICAvKipcclxuICAgKiBDcmVhdGUgYSB3cmFwcGVyIGVsZW1lbnQgYW5kIGFwcGVuZCBhcnJvd3MuXHJcbiAgICovXG5cblxuICBmdW5jdGlvbiBhcHBlbmRBcnJvd3MoKSB7XG4gICAgdmFyIHdyYXBwZXIgPSBjcmVhdGUoJ2RpdicsIHtcbiAgICAgIFwiY2xhc3NcIjogY2xhc3Nlcy5hcnJvd3NcbiAgICB9KTtcbiAgICBhcHBlbmQod3JhcHBlciwgcHJldik7XG4gICAgYXBwZW5kKHdyYXBwZXIsIG5leHQpO1xuICAgIHZhciBzbGlkZXIgPSBFbGVtZW50cy5zbGlkZXI7XG4gICAgdmFyIHBhcmVudCA9IFNwbGlkZS5vcHRpb25zLmFycm93cyA9PT0gJ3NsaWRlcicgJiYgc2xpZGVyID8gc2xpZGVyIDogcm9vdDtcbiAgICBiZWZvcmUod3JhcHBlciwgcGFyZW50LmZpcnN0RWxlbWVudENoaWxkKTtcbiAgfVxuICAvKipcclxuICAgKiBDcmVhdGUgYW4gYXJyb3cgZWxlbWVudC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gcHJldiAtIERldGVybWluZSB0byBjcmVhdGUgYSBwcmV2IGFycm93IG9yIG5leHQgYXJyb3cuXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHtFbGVtZW50fSAtIEEgY3JlYXRlZCBhcnJvdyBlbGVtZW50LlxyXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gY3JlYXRlQXJyb3cocHJldikge1xuICAgIHZhciBhcnJvdyA9IFwiPGJ1dHRvbiBjbGFzcz1cXFwiXCIgKyBjbGFzc2VzLmFycm93ICsgXCIgXCIgKyAocHJldiA/IGNsYXNzZXMucHJldiA6IGNsYXNzZXMubmV4dCkgKyBcIlxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj5cIiArIChcIjxzdmcgeG1sbnM9XFxcIlwiICsgWE1MX05BTUVfU1BBQ0UgKyBcIlxcXCJcXHR2aWV3Qm94PVxcXCIwIDAgXCIgKyBTSVpFICsgXCIgXCIgKyBTSVpFICsgXCJcXFwiXFx0d2lkdGg9XFxcIlwiICsgU0laRSArIFwiXFxcIlxcdGhlaWdodD1cXFwiXCIgKyBTSVpFICsgXCJcXFwiPlwiKSArIChcIjxwYXRoIGQ9XFxcIlwiICsgKFNwbGlkZS5vcHRpb25zLmFycm93UGF0aCB8fCBQQVRIKSArIFwiXFxcIiAvPlwiKTtcbiAgICByZXR1cm4gZG9taWZ5KGFycm93KTtcbiAgfVxuXG4gIHJldHVybiBBcnJvd3M7XG59KTtcbjsvLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9qcy9jb21wb25lbnRzL3BhZ2luYXRpb24vaW5kZXguanNcbi8qKlxyXG4gKiBUaGUgY29tcG9uZW50IGZvciBoYW5kbGluZyBwYWdpbmF0aW9uXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgTmFvdG9zaGkgRnVqaXRhXHJcbiAqIEBjb3B5cmlnaHQgTmFvdG9zaGkgRnVqaXRhLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKi9cblxuXG4vKipcclxuICogVGhlIGV2ZW50IG5hbWUgZm9yIHVwZGF0aW5nIHNvbWUgYXR0cmlidXRlcyBvZiBwYWdpbmF0aW9uIG5vZGVzLlxyXG4gKlxyXG4gKiBAdHlwZSB7c3RyaW5nfVxyXG4gKi9cblxudmFyIEFUVFJJQlVURVNfVVBEQVRFX0VWRU5UID0gJ21vdmUucGFnZSc7XG4vKipcclxuICogVGhlIGV2ZW50IG5hbWUgZm9yIHJlY3JlYXRpbmcgcGFnaW5hdGlvbi5cclxuICpcclxuICogQHR5cGUge3N0cmluZ31cclxuICovXG5cbnZhciBVUERBVEVfRVZFTlQgPSAndXBkYXRlZC5wYWdlIHJlZnJlc2gucGFnZSc7XG4vKipcclxuICogVGhlIGNvbXBvbmVudCBmb3IgaGFuZGxpbmcgcGFnaW5hdGlvblxyXG4gKlxyXG4gKiBAcGFyYW0ge1NwbGlkZX0gU3BsaWRlICAgICAtIEEgU3BsaWRlIGluc3RhbmNlLlxyXG4gKiBAcGFyYW0ge09iamVjdH0gQ29tcG9uZW50cyAtIEFuIG9iamVjdCBjb250YWluaW5nIGNvbXBvbmVudHMuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lICAgICAgIC0gQSBjb21wb25lbnQgbmFtZSBhcyBhIGxvd2VyY2FzZSBzdHJpbmcuXHJcbiAqXHJcbiAqIEByZXR1cm4ge09iamVjdH0gLSBUaGUgY29tcG9uZW50IG9iamVjdC5cclxuICovXG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gY29uc3QgcGFnaW5hdGlvbiA9IChmdW5jdGlvbiAoU3BsaWRlLCBDb21wb25lbnRzLCBuYW1lKSB7XG4gIC8qKlxyXG4gICAqIFN0b3JlIGFsbCBkYXRhIGZvciBwYWdpbmF0aW9uLlxyXG4gICAqIC0gbGlzdDogQSBsaXN0IGVsZW1lbnQuXHJcbiAgICogLSBpdGVtczogQW4gYXJyYXkgdGhhdCBjb250YWlucyBvYmplY3RzKGxpLCBidXR0b24sIGluZGV4LCBwYWdlKS5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICovXG4gIHZhciBkYXRhID0ge307XG4gIC8qKlxyXG4gICAqIEhvbGQgdGhlIEVsZW1lbnRzIGNvbXBvbmVudC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICovXG5cbiAgdmFyIEVsZW1lbnRzID0gQ29tcG9uZW50cy5FbGVtZW50cztcbiAgLyoqXHJcbiAgICogUGFnaW5hdGlvbiBjb21wb25lbnQgb2JqZWN0LlxyXG4gICAqXHJcbiAgICogQHR5cGUge09iamVjdH1cclxuICAgKi9cblxuICB2YXIgUGFnaW5hdGlvbiA9IHtcbiAgICAvKipcclxuICAgICAqIENhbGxlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgbW91bnRlZC5cclxuICAgICAqL1xuICAgIG1vdW50OiBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICAgIHZhciBwYWdpbmF0aW9uID0gU3BsaWRlLm9wdGlvbnMucGFnaW5hdGlvbjtcblxuICAgICAgaWYgKHBhZ2luYXRpb24pIHtcbiAgICAgICAgZGF0YSA9IGNyZWF0ZVBhZ2luYXRpb24oKTtcbiAgICAgICAgdmFyIHNsaWRlciA9IEVsZW1lbnRzLnNsaWRlcjtcbiAgICAgICAgdmFyIHBhcmVudCA9IHBhZ2luYXRpb24gPT09ICdzbGlkZXInICYmIHNsaWRlciA/IHNsaWRlciA6IFNwbGlkZS5yb290O1xuICAgICAgICBhcHBlbmQocGFyZW50LCBkYXRhLmxpc3QpO1xuICAgICAgICBTcGxpZGUub24oQVRUUklCVVRFU19VUERBVEVfRVZFTlQsIHVwZGF0ZUF0dHJpYnV0ZXMpO1xuICAgICAgfVxuXG4gICAgICBTcGxpZGUub2ZmKFVQREFURV9FVkVOVCkub24oVVBEQVRFX0VWRU5ULCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIFBhZ2luYXRpb24uZGVzdHJveSgpO1xuXG4gICAgICAgIGlmIChTcGxpZGUub3B0aW9ucy5wYWdpbmF0aW9uKSB7XG4gICAgICAgICAgUGFnaW5hdGlvbi5tb3VudCgpO1xuICAgICAgICAgIFBhZ2luYXRpb24ubW91bnRlZCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgYWZ0ZXIgYWxsIGNvbXBvbmVudHMgYXJlIG1vdW50ZWQuXHJcbiAgICAgKi9cbiAgICBtb3VudGVkOiBmdW5jdGlvbiBtb3VudGVkKCkge1xuICAgICAgaWYgKFNwbGlkZS5vcHRpb25zLnBhZ2luYXRpb24pIHtcbiAgICAgICAgdmFyIGluZGV4ID0gU3BsaWRlLmluZGV4O1xuICAgICAgICBTcGxpZGUuZW1pdChuYW1lICsgXCI6bW91bnRlZFwiLCBkYXRhLCB0aGlzLmdldEl0ZW0oaW5kZXgpKTtcbiAgICAgICAgdXBkYXRlQXR0cmlidXRlcyhpbmRleCwgLTEpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIERlc3Ryb3kgdGhlIHBhZ2luYXRpb24uXHJcbiAgICAgKiBCZSBhd2FyZSB0aGF0IG5vZGUucmVtb3ZlKCkgaXMgbm90IHN1cHBvcnRlZCBieSBJRS5cclxuICAgICAqL1xuICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICBkb21fcmVtb3ZlKGRhdGEubGlzdCk7XG5cbiAgICAgIGlmIChkYXRhLml0ZW1zKSB7XG4gICAgICAgIGRhdGEuaXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgIFNwbGlkZS5vZmYoJ2NsaWNrJywgaXRlbS5idXR0b24pO1xuICAgICAgICB9KTtcbiAgICAgIH0gLy8gRG8gbm90IHJlbW92ZSBVUERBVEVfRVZFTlQgdG8gcmVjcmVhdGUgcGFnaW5hdGlvbiBpZiBuZWVkZWQuXG5cblxuICAgICAgU3BsaWRlLm9mZihBVFRSSUJVVEVTX1VQREFURV9FVkVOVCk7XG4gICAgICBkYXRhID0ge307XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIGFuIGl0ZW0gYnkgaW5kZXguXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IC0gQSBzbGlkZSBpbmRleC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R8dW5kZWZpbmVkfSAtIEFuIGl0ZW0gb2JqZWN0IG9uIHN1Y2Nlc3Mgb3IgdW5kZWZpbmVkIG9uIGZhaWx1cmUuXHJcbiAgICAgKi9cbiAgICBnZXRJdGVtOiBmdW5jdGlvbiBnZXRJdGVtKGluZGV4KSB7XG4gICAgICByZXR1cm4gZGF0YS5pdGVtc1tDb21wb25lbnRzLkNvbnRyb2xsZXIudG9QYWdlKGluZGV4KV07XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIG9iamVjdCBjb250YWluaW5nIHBhZ2luYXRpb24gZGF0YS5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IC0gUGFnaW5hdGlvbiBkYXRhIGluY2x1ZGluZyBsaXN0IGFuZCBpdGVtcy5cclxuICAgICAqL1xuICAgIGdldCBkYXRhKCkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gIH07XG4gIC8qKlxyXG4gICAqIFVwZGF0ZSBhdHRyaWJ1dGVzLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4ICAgICAtIEFjdGl2ZSBpbmRleC5cclxuICAgKiBAcGFyYW0ge251bWJlcn0gcHJldkluZGV4IC0gUHJldiBpbmRleC5cclxuICAgKi9cblxuICBmdW5jdGlvbiB1cGRhdGVBdHRyaWJ1dGVzKGluZGV4LCBwcmV2SW5kZXgpIHtcbiAgICB2YXIgcHJldiA9IFBhZ2luYXRpb24uZ2V0SXRlbShwcmV2SW5kZXgpO1xuICAgIHZhciBjdXJyID0gUGFnaW5hdGlvbi5nZXRJdGVtKGluZGV4KTtcbiAgICB2YXIgYWN0aXZlID0gU1RBVFVTX0NMQVNTRVMuYWN0aXZlO1xuXG4gICAgaWYgKHByZXYpIHtcbiAgICAgIHJlbW92ZUNsYXNzKHByZXYuYnV0dG9uLCBhY3RpdmUpO1xuICAgIH1cblxuICAgIGlmIChjdXJyKSB7XG4gICAgICBhZGRDbGFzcyhjdXJyLmJ1dHRvbiwgYWN0aXZlKTtcbiAgICB9XG5cbiAgICBTcGxpZGUuZW1pdChuYW1lICsgXCI6dXBkYXRlZFwiLCBkYXRhLCBwcmV2LCBjdXJyKTtcbiAgfVxuICAvKipcclxuICAgKiBDcmVhdGUgYSB3cmFwcGVyIGFuZCBidXR0b24gZWxlbWVudHMuXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHtPYmplY3R9IC0gQW4gb2JqZWN0IGNvbnRhaW5zIGFsbCBkYXRhLlxyXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gY3JlYXRlUGFnaW5hdGlvbigpIHtcbiAgICB2YXIgb3B0aW9ucyA9IFNwbGlkZS5vcHRpb25zO1xuICAgIHZhciBjbGFzc2VzID0gU3BsaWRlLmNsYXNzZXM7XG4gICAgdmFyIGxpc3QgPSBjcmVhdGUoJ3VsJywge1xuICAgICAgXCJjbGFzc1wiOiBjbGFzc2VzLnBhZ2luYXRpb25cbiAgICB9KTtcbiAgICB2YXIgaXRlbXMgPSBFbGVtZW50cy5nZXRTbGlkZXMoZmFsc2UpLmZpbHRlcihmdW5jdGlvbiAoU2xpZGUpIHtcbiAgICAgIHJldHVybiBvcHRpb25zLmZvY3VzICE9PSBmYWxzZSB8fCBTbGlkZS5pbmRleCAlIG9wdGlvbnMucGVyUGFnZSA9PT0gMDtcbiAgICB9KS5tYXAoZnVuY3Rpb24gKFNsaWRlLCBwYWdlKSB7XG4gICAgICB2YXIgbGkgPSBjcmVhdGUoJ2xpJywge30pO1xuICAgICAgdmFyIGJ1dHRvbiA9IGNyZWF0ZSgnYnV0dG9uJywge1xuICAgICAgICBcImNsYXNzXCI6IGNsYXNzZXMucGFnZSxcbiAgICAgICAgdHlwZTogJ2J1dHRvbidcbiAgICAgIH0pO1xuICAgICAgYXBwZW5kKGxpLCBidXR0b24pO1xuICAgICAgYXBwZW5kKGxpc3QsIGxpKTtcbiAgICAgIFNwbGlkZS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIFNwbGlkZS5nbyhcIj5cIiArIHBhZ2UpO1xuICAgICAgfSwgYnV0dG9uKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxpOiBsaSxcbiAgICAgICAgYnV0dG9uOiBidXR0b24sXG4gICAgICAgIHBhZ2U6IHBhZ2UsXG4gICAgICAgIFNsaWRlczogRWxlbWVudHMuZ2V0U2xpZGVzQnlQYWdlKHBhZ2UpXG4gICAgICB9O1xuICAgIH0pO1xuICAgIHJldHVybiB7XG4gICAgICBsaXN0OiBsaXN0LFxuICAgICAgaXRlbXM6IGl0ZW1zXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBQYWdpbmF0aW9uO1xufSk7XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvanMvY29tcG9uZW50cy9sYXp5bG9hZC9pbmRleC5qc1xuLyoqXHJcbiAqIFRoZSBjb21wb25lbnQgZm9yIGxvYWRpbmcgc2xpZGVyIGltYWdlcyBsYXppbHkuXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgTmFvdG9zaGkgRnVqaXRhXHJcbiAqIEBjb3B5cmlnaHQgTmFvdG9zaGkgRnVqaXRhLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKi9cblxuXG5cbi8qKlxyXG4gKiBUaGUgbmFtZSBmb3IgYSBkYXRhIGF0dHJpYnV0ZSBvZiBzcmMuXHJcbiAqXHJcbiAqIEB0eXBlIHtzdHJpbmd9XHJcbiAqL1xuXG52YXIgU1JDX0RBVEFfTkFNRSA9ICdkYXRhLXNwbGlkZS1sYXp5Jztcbi8qKlxyXG4gKiBUaGUgbmFtZSBmb3IgYSBkYXRhIGF0dHJpYnV0ZSBvZiBzcmNzZXQuXHJcbiAqXHJcbiAqIEB0eXBlIHtzdHJpbmd9XHJcbiAqL1xuXG52YXIgU1JDU0VUX0RBVEFfTkFNRSA9ICdkYXRhLXNwbGlkZS1sYXp5LXNyY3NldCc7XG4vKipcclxuICogVGhlIGNvbXBvbmVudCBmb3IgbG9hZGluZyBzbGlkZXIgaW1hZ2VzIGxhemlseS5cclxuICpcclxuICogQHBhcmFtIHtTcGxpZGV9IFNwbGlkZSAgICAgLSBBIFNwbGlkZSBpbnN0YW5jZS5cclxuICogQHBhcmFtIHtPYmplY3R9IENvbXBvbmVudHMgLSBBbiBvYmplY3QgY29udGFpbmluZyBjb21wb25lbnRzLlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAgICAgICAtIEEgY29tcG9uZW50IG5hbWUgYXMgYSBsb3dlcmNhc2Ugc3RyaW5nLlxyXG4gKlxyXG4gKiBAcmV0dXJuIHtPYmplY3R9IC0gVGhlIGNvbXBvbmVudCBvYmplY3QuXHJcbiAqL1xuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIGNvbnN0IGxhenlsb2FkID0gKGZ1bmN0aW9uIChTcGxpZGUsIENvbXBvbmVudHMsIG5hbWUpIHtcbiAgLyoqXHJcbiAgICogTmV4dCBpbmRleCBmb3Igc2VxdWVudGlhbCBsb2FkaW5nLlxyXG4gICAqXHJcbiAgICogQHR5cGUge251bWJlcn1cclxuICAgKi9cbiAgdmFyIG5leHRJbmRleDtcbiAgLyoqXHJcbiAgICogU3RvcmUgb2JqZWN0cyBjb250YWluaW5nIGFuIGltZyBlbGVtZW50IGFuZCBhIFNsaWRlIG9iamVjdC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtPYmplY3RbXX1cclxuICAgKi9cblxuICB2YXIgaW1hZ2VzO1xuICAvKipcclxuICAgKiBTdG9yZSB0aGUgb3B0aW9ucy5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICovXG5cbiAgdmFyIG9wdGlvbnMgPSBTcGxpZGUub3B0aW9ucztcbiAgLyoqXHJcbiAgICogV2hldGhlciB0byBsb2FkIGltYWdlcyBzZXF1ZW50aWFsbHkgb3Igbm90LlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICovXG5cbiAgdmFyIGlzU2VxdWVudGlhbCA9IG9wdGlvbnMubGF6eUxvYWQgPT09ICdzZXF1ZW50aWFsJztcbiAgLyoqXHJcbiAgICogTGF6eWxvYWQgY29tcG9uZW50IG9iamVjdC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICovXG5cbiAgdmFyIExhenlsb2FkID0ge1xuICAgIC8qKlxyXG4gICAgICogTW91bnQgb25seSB3aGVuIHRoZSBsYXp5bG9hZCBvcHRpb24gaXMgcHJvdmlkZWQuXHJcbiAgICAgKlxyXG4gICAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICAgKi9cbiAgICByZXF1aXJlZDogb3B0aW9ucy5sYXp5TG9hZCxcblxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkLlxyXG4gICAgICovXG4gICAgbW91bnQ6IGZ1bmN0aW9uIG1vdW50KCkge1xuICAgICAgU3BsaWRlLm9uKCdtb3VudGVkIHJlZnJlc2gnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGluaXQoKTtcbiAgICAgICAgQ29tcG9uZW50cy5FbGVtZW50cy5lYWNoKGZ1bmN0aW9uIChTbGlkZSkge1xuICAgICAgICAgIGVhY2goU2xpZGUuc2xpZGUucXVlcnlTZWxlY3RvckFsbChcIltcIiArIFNSQ19EQVRBX05BTUUgKyBcIl0sIFtcIiArIFNSQ1NFVF9EQVRBX05BTUUgKyBcIl1cIiksIGZ1bmN0aW9uIChpbWcpIHtcbiAgICAgICAgICAgIGlmICghaW1nLnNyYyAmJiAhaW1nLnNyY3NldCkge1xuICAgICAgICAgICAgICBpbWFnZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgaW1nOiBpbWcsXG4gICAgICAgICAgICAgICAgU2xpZGU6IFNsaWRlXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICBhcHBseVN0eWxlKGltZywge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGlzU2VxdWVudGlhbCkge1xuICAgICAgICAgIGxvYWROZXh0KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIWlzU2VxdWVudGlhbCkge1xuICAgICAgICBTcGxpZGUub24oXCJtb3VudGVkIHJlZnJlc2ggbW92ZWQuXCIgKyBuYW1lLCBjaGVjayk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogRGVzdHJveS5cclxuICAgICAqL1xuICAgIGRlc3Ryb3k6IGluaXRcbiAgfTtcbiAgLyoqXHJcbiAgICogSW5pdGlhbGl6ZSBwYXJhbWV0ZXJzLlxyXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgaW1hZ2VzID0gW107XG4gICAgbmV4dEluZGV4ID0gMDtcbiAgfVxuICAvKipcclxuICAgKiBDaGVjayBob3cgY2xvc2UgZWFjaCBpbWFnZSBpcyBmcm9tIHRoZSBhY3RpdmUgc2xpZGUgYW5kXHJcbiAgICogZGV0ZXJtaW5lIHdoZXRoZXIgdG8gc3RhcnQgbG9hZGluZyBvciBub3QsIGFjY29yZGluZyB0byB0aGUgZGlzdGFuY2UuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggLSBDdXJyZW50IGluZGV4LlxyXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gY2hlY2soaW5kZXgpIHtcbiAgICBpbmRleCA9IGlzTmFOKGluZGV4KSA/IFNwbGlkZS5pbmRleCA6IGluZGV4O1xuICAgIGltYWdlcyA9IGltYWdlcy5maWx0ZXIoZnVuY3Rpb24gKGltYWdlKSB7XG4gICAgICBpZiAoaW1hZ2UuU2xpZGUuaXNXaXRoaW4oaW5kZXgsIG9wdGlvbnMucGVyUGFnZSAqIChvcHRpb25zLnByZWxvYWRQYWdlcyArIDEpKSkge1xuICAgICAgICBsb2FkKGltYWdlLmltZywgaW1hZ2UuU2xpZGUpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pOyAvLyBVbmJpbmQgaWYgYWxsIGltYWdlcyBhcmUgbG9hZGVkLlxuXG4gICAgaWYgKCFpbWFnZXNbMF0pIHtcbiAgICAgIFNwbGlkZS5vZmYoXCJtb3ZlZC5cIiArIG5hbWUpO1xuICAgIH1cbiAgfVxuICAvKipcclxuICAgKiBTdGFydCBsb2FkaW5nIGFuIGltYWdlLlxyXG4gICAqIENyZWF0aW5nIGEgY2xvbmUgb2YgdGhlIGltYWdlIGVsZW1lbnQgc2luY2Ugc2V0dGluZyBzcmMgYXR0cmlidXRlIGRpcmVjdGx5IHRvIGl0XHJcbiAgICogb2Z0ZW4gb2NjdXJzICdoaXRjaCcsIGJsb2NraW5nIHNvbWUgb3RoZXIgcHJvY2Vzc2VzIG9mIGEgYnJvd3Nlci5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gaW1nICAgLSBBbiBpbWFnZSBlbGVtZW50LlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAgU2xpZGUgLSBBIFNsaWRlIG9iamVjdC5cclxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIGxvYWQoaW1nLCBTbGlkZSkge1xuICAgIGFkZENsYXNzKFNsaWRlLnNsaWRlLCBTVEFUVVNfQ0xBU1NFUy5sb2FkaW5nKTtcbiAgICB2YXIgc3Bpbm5lciA9IGNyZWF0ZSgnc3BhbicsIHtcbiAgICAgIFwiY2xhc3NcIjogU3BsaWRlLmNsYXNzZXMuc3Bpbm5lclxuICAgIH0pO1xuICAgIGFwcGVuZChpbWcucGFyZW50RWxlbWVudCwgc3Bpbm5lcik7XG5cbiAgICBpbWcub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgbG9hZGVkKGltZywgc3Bpbm5lciwgU2xpZGUsIGZhbHNlKTtcbiAgICB9O1xuXG4gICAgaW1nLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBsb2FkZWQoaW1nLCBzcGlubmVyLCBTbGlkZSwgdHJ1ZSk7XG4gICAgfTtcblxuICAgIHNldEF0dHJpYnV0ZShpbWcsICdzcmNzZXQnLCBnZXRBdHRyaWJ1dGUoaW1nLCBTUkNTRVRfREFUQV9OQU1FKSB8fCAnJyk7XG4gICAgc2V0QXR0cmlidXRlKGltZywgJ3NyYycsIGdldEF0dHJpYnV0ZShpbWcsIFNSQ19EQVRBX05BTUUpIHx8ICcnKTtcbiAgfVxuICAvKipcclxuICAgKiBTdGFydCBsb2FkaW5nIGEgbmV4dCBpbWFnZSBpbiBpbWFnZXMgYXJyYXkuXHJcbiAgICovXG5cblxuICBmdW5jdGlvbiBsb2FkTmV4dCgpIHtcbiAgICBpZiAobmV4dEluZGV4IDwgaW1hZ2VzLmxlbmd0aCkge1xuICAgICAgdmFyIGltYWdlID0gaW1hZ2VzW25leHRJbmRleF07XG4gICAgICBsb2FkKGltYWdlLmltZywgaW1hZ2UuU2xpZGUpO1xuICAgIH1cblxuICAgIG5leHRJbmRleCsrO1xuICB9XG4gIC8qKlxyXG4gICAqIENhbGxlZCBqdXN0IGFmdGVyIHRoZSBpbWFnZSB3YXMgbG9hZGVkIG9yIGxvYWRpbmcgd2FzIGFib3J0ZWQgYnkgc29tZSBlcnJvci5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gaW1nICAgICAtIEFuIGltYWdlIGVsZW1lbnQuXHJcbiAgICogQHBhcmFtIHtFbGVtZW50fSBzcGlubmVyIC0gQSBzcGlubmVyIGVsZW1lbnQuXHJcbiAgICogQHBhcmFtIHtPYmplY3R9ICBTbGlkZSAgIC0gQSBTbGlkZSBvYmplY3QuXHJcbiAgICogQHBhcmFtIHtib29sZWFufSBlcnJvciAgIC0gVHJ1ZSBpZiB0aGUgaW1hZ2Ugd2FzIGxvYWRlZCBzdWNjZXNzZnVsbHkgb3IgZmFsc2Ugb24gZXJyb3IuXHJcbiAgICovXG5cblxuICBmdW5jdGlvbiBsb2FkZWQoaW1nLCBzcGlubmVyLCBTbGlkZSwgZXJyb3IpIHtcbiAgICByZW1vdmVDbGFzcyhTbGlkZS5zbGlkZSwgU1RBVFVTX0NMQVNTRVMubG9hZGluZyk7XG5cbiAgICBpZiAoIWVycm9yKSB7XG4gICAgICBkb21fcmVtb3ZlKHNwaW5uZXIpO1xuICAgICAgYXBwbHlTdHlsZShpbWcsIHtcbiAgICAgICAgZGlzcGxheTogJydcbiAgICAgIH0pO1xuICAgICAgU3BsaWRlLmVtaXQobmFtZSArIFwiOmxvYWRlZFwiLCBpbWcpLmVtaXQoJ3Jlc2l6ZScpO1xuICAgIH1cblxuICAgIGlmIChpc1NlcXVlbnRpYWwpIHtcbiAgICAgIGxvYWROZXh0KCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIExhenlsb2FkO1xufSk7XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvanMvY29uc3RhbnRzL2ExMXkuanNcbi8qKlxyXG4gKiBFeHBvcnQgYXJpYSBhdHRyaWJ1dGUgbmFtZXMuXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgTmFvdG9zaGkgRnVqaXRhXHJcbiAqIEBjb3B5cmlnaHQgTmFvdG9zaGkgRnVqaXRhLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKi9cblxuLyoqXHJcbiAqIEF0dHJpYnV0ZSBuYW1lIGZvciBhcmlhLWN1cnJlbnQuXHJcbiAqXHJcbiAqIEB0eXBlIHtzdHJpbmd9XHJcbiAqL1xudmFyIEFSSUFfQ1VSUkVOUlQgPSAnYXJpYS1jdXJyZW50Jztcbi8qKlxyXG4gKiBBdHRyaWJ1dGUgbmFtZSBmb3IgYXJpYS1jb250cm9sLlxyXG4gKlxyXG4gKiBAdHlwZSB7c3RyaW5nfVxyXG4gKi9cblxudmFyIEFSSUFfQ09OVFJPTFMgPSAnYXJpYS1jb250cm9scyc7XG4vKipcclxuICogQXR0cmlidXRlIG5hbWUgZm9yIGFyaWEtY29udHJvbC5cclxuICpcclxuICogQHR5cGUge3N0cmluZ31cclxuICovXG5cbnZhciBBUklBX0xBQkVMID0gJ2FyaWEtbGFiZWwnO1xuLyoqXHJcbiAqIEF0dHJpYnV0ZSBuYW1lIGZvciBhcmlhLWxhYmVsbGVkYnkuXHJcbiAqXHJcbiAqIEB0eXBlIHtzdHJpbmd9XHJcbiAqL1xuXG52YXIgQVJJQV9MQUJFTExFREJZID0gJ2FyaWEtbGFiZWxsZWRieSc7XG4vKipcclxuICogQXR0cmlidXRlIG5hbWUgZm9yIGFyaWEtaGlkZGVuLlxyXG4gKlxyXG4gKiBAdHlwZSB7c3RyaW5nfVxyXG4gKi9cblxudmFyIEFSSUFfSElEREVOID0gJ2FyaWEtaGlkZGVuJztcbi8qKlxyXG4gKiBBdHRyaWJ1dGUgbmFtZSBmb3IgdGFiLWluZGV4LlxyXG4gKlxyXG4gKiBAdHlwZSB7c3RyaW5nfVxyXG4gKi9cblxudmFyIFRBQl9JTkRFWCA9ICd0YWJpbmRleCc7XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvanMvY29tcG9uZW50cy9rZXlib2FyZC9pbmRleC5qc1xuLyoqXHJcbiAqIFRoZSBjb21wb25lbnQgZm9yIGNvbnRyb2xsaW5nIHNsaWRlcyB2aWEga2V5Ym9hcmQuXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgTmFvdG9zaGkgRnVqaXRhXHJcbiAqIEBjb3B5cmlnaHQgTmFvdG9zaGkgRnVqaXRhLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKi9cblxuXG4vKipcclxuICogTWFwIGEga2V5IHRvIGEgc2xpZGUgY29udHJvbC5cclxuICpcclxuICogQHR5cGUge09iamVjdH1cclxuICovXG5cbnZhciBLRVlfTUFQID0ge1xuICBsdHI6IHtcbiAgICBBcnJvd0xlZnQ6ICc8JyxcbiAgICBBcnJvd1JpZ2h0OiAnPicsXG4gICAgLy8gRm9yIElFLlxuICAgIExlZnQ6ICc8JyxcbiAgICBSaWdodDogJz4nXG4gIH0sXG4gIHJ0bDoge1xuICAgIEFycm93TGVmdDogJz4nLFxuICAgIEFycm93UmlnaHQ6ICc8JyxcbiAgICAvLyBGb3IgSUUuXG4gICAgTGVmdDogJz4nLFxuICAgIFJpZ2h0OiAnPCdcbiAgfSxcbiAgdHRiOiB7XG4gICAgQXJyb3dVcDogJzwnLFxuICAgIEFycm93RG93bjogJz4nLFxuICAgIC8vIEZvciBJRS5cbiAgICBVcDogJzwnLFxuICAgIERvd246ICc+J1xuICB9XG59O1xuLyoqXHJcbiAqIFRoZSBjb21wb25lbnQgZm9yIGNvbnRyb2xsaW5nIHNsaWRlcyB2aWEga2V5Ym9hcmQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3BsaWRlfSBTcGxpZGUgLSBBIFNwbGlkZSBpbnN0YW5jZS5cclxuICpcclxuICogQHJldHVybiB7T2JqZWN0fSAtIFRoZSBjb21wb25lbnQgb2JqZWN0LlxyXG4gKi9cblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBjb25zdCBrZXlib2FyZCA9IChmdW5jdGlvbiAoU3BsaWRlKSB7XG4gIC8qKlxyXG4gICAqIEhvbGQgdGhlIHRhcmdldCBlbGVtZW50LlxyXG4gICAqXHJcbiAgICogQHR5cGUge0VsZW1lbnR8RG9jdW1lbnR8dW5kZWZpbmVkfVxyXG4gICAqL1xuICB2YXIgdGFyZ2V0O1xuICByZXR1cm4ge1xuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkLlxyXG4gICAgICovXG4gICAgbW91bnQ6IGZ1bmN0aW9uIG1vdW50KCkge1xuICAgICAgU3BsaWRlLm9uKCdtb3VudGVkIHVwZGF0ZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBvcHRpb25zID0gU3BsaWRlLm9wdGlvbnM7XG4gICAgICAgIHZhciByb290ID0gU3BsaWRlLnJvb3Q7XG4gICAgICAgIHZhciBtYXAgPSBLRVlfTUFQW29wdGlvbnMuZGlyZWN0aW9uXTtcbiAgICAgICAgdmFyIGtleWJvYXJkID0gb3B0aW9ucy5rZXlib2FyZDtcblxuICAgICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgICAgU3BsaWRlLm9mZigna2V5ZG93bicsIHRhcmdldCk7XG4gICAgICAgICAgcmVtb3ZlQXR0cmlidXRlKHJvb3QsIFRBQl9JTkRFWCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoa2V5Ym9hcmQpIHtcbiAgICAgICAgICBpZiAoa2V5Ym9hcmQgPT09ICdmb2N1c2VkJykge1xuICAgICAgICAgICAgdGFyZ2V0ID0gcm9vdDtcbiAgICAgICAgICAgIHNldEF0dHJpYnV0ZShyb290LCBUQUJfSU5ERVgsIDApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXQgPSBkb2N1bWVudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBTcGxpZGUub24oJ2tleWRvd24nLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgaWYgKG1hcFtlLmtleV0pIHtcbiAgICAgICAgICAgICAgU3BsaWRlLmdvKG1hcFtlLmtleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIHRhcmdldCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbn0pO1xuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2pzL2NvbXBvbmVudHMvYTExeS9pbmRleC5qc1xuLyoqXHJcbiAqIFRoZSBjb21wb25lbnQgZm9yIGVuaGFuY2luZyBhY2Nlc3NpYmlsaXR5LlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgIE5hb3Rvc2hpIEZ1aml0YVxyXG4gKiBAY29weXJpZ2h0IE5hb3Rvc2hpIEZ1aml0YS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICovXG5cblxuXG4vKipcclxuICogVGhlIGNvbXBvbmVudCBmb3IgZW5oYW5jaW5nIGFjY2Vzc2liaWxpdHkuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3BsaWRlfSBTcGxpZGUgICAgIC0gQSBTcGxpZGUgaW5zdGFuY2UuXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBDb21wb25lbnRzIC0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgY29tcG9uZW50cy5cclxuICpcclxuICogQHJldHVybiB7T2JqZWN0fSAtIFRoZSBjb21wb25lbnQgb2JqZWN0LlxyXG4gKi9cblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBjb25zdCBhMTF5ID0gKGZ1bmN0aW9uIChTcGxpZGUsIENvbXBvbmVudHMpIHtcbiAgLyoqXHJcbiAgICogSG9sZCBhIGkxOG4gb2JqZWN0LlxyXG4gICAqXHJcbiAgICogQHR5cGUge09iamVjdH1cclxuICAgKi9cbiAgdmFyIGkxOG4gPSBTcGxpZGUuaTE4bjtcbiAgLyoqXHJcbiAgICogSG9sZCB0aGUgRWxlbWVudHMgY29tcG9uZW50LlxyXG4gICAqXHJcbiAgICogQHR5cGUge09iamVjdH1cclxuICAgKi9cblxuICB2YXIgRWxlbWVudHMgPSBDb21wb25lbnRzLkVsZW1lbnRzO1xuICAvKipcclxuICAgKiBBbGwgYXR0cmlidXRlcyByZWxhdGVkIHdpdGggQTExeS5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtzdHJpbmdbXX1cclxuICAgKi9cblxuICB2YXIgYWxsQXR0cmlidXRlcyA9IFtBUklBX0hJRERFTiwgVEFCX0lOREVYLCBBUklBX0NPTlRST0xTLCBBUklBX0xBQkVMLCBBUklBX0NVUlJFTlJULCAncm9sZSddO1xuICAvKipcclxuICAgKiBBMTF5IGNvbXBvbmVudCBvYmplY3QuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAqL1xuXG4gIHZhciBBMTF5ID0ge1xuICAgIC8qKlxyXG4gICAgICogUmVxdWlyZWQgb25seSB3aGVuIHRoZSBhY2Nlc3NpYmlsaXR5IG9wdGlvbiBpcyB0cnVlLlxyXG4gICAgICpcclxuICAgICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAgICovXG4gICAgcmVxdWlyZWQ6IFNwbGlkZS5vcHRpb25zLmFjY2Vzc2liaWxpdHksXG5cbiAgICAvKipcclxuICAgICAqIENhbGxlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgbW91bnRlZC5cclxuICAgICAqL1xuICAgIG1vdW50OiBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICAgIFNwbGlkZS5vbigndmlzaWJsZScsIGZ1bmN0aW9uIChTbGlkZSkge1xuICAgICAgICB1cGRhdGVTbGlkZShTbGlkZS5zbGlkZSwgdHJ1ZSk7XG4gICAgICB9KS5vbignaGlkZGVuJywgZnVuY3Rpb24gKFNsaWRlKSB7XG4gICAgICAgIHVwZGF0ZVNsaWRlKFNsaWRlLnNsaWRlLCBmYWxzZSk7XG4gICAgICB9KS5vbignYXJyb3dzOm1vdW50ZWQnLCBpbml0QXJyb3dzKS5vbignYXJyb3dzOnVwZGF0ZWQnLCB1cGRhdGVBcnJvd3MpLm9uKCdwYWdpbmF0aW9uOm1vdW50ZWQnLCBpbml0UGFnaW5hdGlvbikub24oJ3BhZ2luYXRpb246dXBkYXRlZCcsIHVwZGF0ZVBhZ2luYXRpb24pLm9uKCdyZWZyZXNoJywgZnVuY3Rpb24gKCkge1xuICAgICAgICByZW1vdmVBdHRyaWJ1dGUoQ29tcG9uZW50cy5DbG9uZXMuY2xvbmVzLCBhbGxBdHRyaWJ1dGVzKTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoU3BsaWRlLm9wdGlvbnMuaXNOYXZpZ2F0aW9uKSB7XG4gICAgICAgIFNwbGlkZS5vbignbmF2aWdhdGlvbjptb3VudGVkIG5hdmlnYXRpb246dXBkYXRlZCcsIGluaXROYXZpZ2F0aW9uKS5vbignYWN0aXZlJywgZnVuY3Rpb24gKFNsaWRlKSB7XG4gICAgICAgICAgdXBkYXRlTmF2aWdhdGlvbihTbGlkZSwgdHJ1ZSk7XG4gICAgICAgIH0pLm9uKCdpbmFjdGl2ZScsIGZ1bmN0aW9uIChTbGlkZSkge1xuICAgICAgICAgIHVwZGF0ZU5hdmlnYXRpb24oU2xpZGUsIGZhbHNlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGluaXRBdXRvcGxheSgpO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIERlc3Ryb3kuXHJcbiAgICAgKi9cbiAgICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgdmFyIEFycm93cyA9IENvbXBvbmVudHMuQXJyb3dzO1xuICAgICAgdmFyIGFycm93cyA9IEFycm93cyA/IEFycm93cy5hcnJvd3MgOiB7fTtcbiAgICAgIHJlbW92ZUF0dHJpYnV0ZShFbGVtZW50cy5zbGlkZXMuY29uY2F0KFthcnJvd3MucHJldiwgYXJyb3dzLm5leHQsIEVsZW1lbnRzLnBsYXksIEVsZW1lbnRzLnBhdXNlXSksIGFsbEF0dHJpYnV0ZXMpO1xuICAgIH1cbiAgfTtcbiAgLyoqXHJcbiAgICogVXBkYXRlIHNsaWRlIGF0dHJpYnV0ZXMgd2hlbiBpdCBnZXRzIHZpc2libGUgb3IgaGlkZGVuLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtFbGVtZW50fSBzbGlkZSAgIC0gQSBzbGlkZSBlbGVtZW50LlxyXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmlzaWJsZSAtIFRydWUgd2hlbiB0aGUgc2xpZGUgZ2V0cyB2aXNpYmxlLCBvciBmYWxzZSB3aGVuIGhpZGRlbi5cclxuICAgKi9cblxuICBmdW5jdGlvbiB1cGRhdGVTbGlkZShzbGlkZSwgdmlzaWJsZSkge1xuICAgIHNldEF0dHJpYnV0ZShzbGlkZSwgQVJJQV9ISURERU4sICF2aXNpYmxlKTtcblxuICAgIGlmIChTcGxpZGUub3B0aW9ucy5zbGlkZUZvY3VzKSB7XG4gICAgICBzZXRBdHRyaWJ1dGUoc2xpZGUsIFRBQl9JTkRFWCwgdmlzaWJsZSA/IDAgOiAtMSk7XG4gICAgfVxuICB9XG4gIC8qKlxyXG4gICAqIEluaXRpYWxpemUgYXJyb3dzIGlmIHRoZXkgYXJlIGF2YWlsYWJsZS5cclxuICAgKiBBcHBlbmQgc2NyZWVuIHJlYWRlciBlbGVtZW50cyBhbmQgYWRkIGFyaWEtY29udHJvbHMgYXR0cmlidXRlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtFbGVtZW50fSBwcmV2IC0gUHJldmlvdXMgYXJyb3cgZWxlbWVudC5cclxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IG5leHQgLSBOZXh0IGFycm93IGVsZW1lbnQuXHJcbiAgICovXG5cblxuICBmdW5jdGlvbiBpbml0QXJyb3dzKHByZXYsIG5leHQpIHtcbiAgICB2YXIgY29udHJvbHMgPSBFbGVtZW50cy50cmFjay5pZDtcbiAgICBzZXRBdHRyaWJ1dGUocHJldiwgQVJJQV9DT05UUk9MUywgY29udHJvbHMpO1xuICAgIHNldEF0dHJpYnV0ZShuZXh0LCBBUklBX0NPTlRST0xTLCBjb250cm9scyk7XG4gIH1cbiAgLyoqXHJcbiAgICogVXBkYXRlIGFycm93IGF0dHJpYnV0ZXMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IHByZXYgICAgICAtIFByZXZpb3VzIGFycm93IGVsZW1lbnQuXHJcbiAgICogQHBhcmFtIHtFbGVtZW50fSBuZXh0ICAgICAgLSBOZXh0IGFycm93IGVsZW1lbnQuXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9ICBwcmV2SW5kZXggLSBQcmV2aW91cyBzbGlkZSBpbmRleCBvciAtMSB3aGVuIHRoZXJlIGlzIG5vIHByZWNlZGUgc2xpZGUuXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9ICBuZXh0SW5kZXggLSBOZXh0IHNsaWRlIGluZGV4IG9yIC0xIHdoZW4gdGhlcmUgaXMgbm8gbmV4dCBzbGlkZS5cclxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIHVwZGF0ZUFycm93cyhwcmV2LCBuZXh0LCBwcmV2SW5kZXgsIG5leHRJbmRleCkge1xuICAgIHZhciBpbmRleCA9IFNwbGlkZS5pbmRleDtcbiAgICB2YXIgcHJldkxhYmVsID0gcHJldkluZGV4ID4gLTEgJiYgaW5kZXggPCBwcmV2SW5kZXggPyBpMThuLmxhc3QgOiBpMThuLnByZXY7XG4gICAgdmFyIG5leHRMYWJlbCA9IG5leHRJbmRleCA+IC0xICYmIGluZGV4ID4gbmV4dEluZGV4ID8gaTE4bi5maXJzdCA6IGkxOG4ubmV4dDtcbiAgICBzZXRBdHRyaWJ1dGUocHJldiwgQVJJQV9MQUJFTCwgcHJldkxhYmVsKTtcbiAgICBzZXRBdHRyaWJ1dGUobmV4dCwgQVJJQV9MQUJFTCwgbmV4dExhYmVsKTtcbiAgfVxuICAvKipcclxuICAgKiBJbml0aWFsaXplIHBhZ2luYXRpb24gaWYgaXQncyBhdmFpbGFibGUuXHJcbiAgICogQXBwZW5kIGEgc2NyZWVuIHJlYWRlciBlbGVtZW50IGFuZCBhZGQgYXJpYS1jb250cm9scy9sYWJlbCBhdHRyaWJ1dGUgdG8gZWFjaCBpdGVtLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEgICAgICAgLSBEYXRhIG9iamVjdCBjb250YWluaW5nIGFsbCBpdGVtcy5cclxuICAgKiBAcGFyYW0ge09iamVjdH0gYWN0aXZlSXRlbSAtIEFuIGluaXRpYWwgYWN0aXZlIGl0ZW0uXHJcbiAgICovXG5cblxuICBmdW5jdGlvbiBpbml0UGFnaW5hdGlvbihkYXRhLCBhY3RpdmVJdGVtKSB7XG4gICAgaWYgKGFjdGl2ZUl0ZW0pIHtcbiAgICAgIHNldEF0dHJpYnV0ZShhY3RpdmVJdGVtLmJ1dHRvbiwgQVJJQV9DVVJSRU5SVCwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgZGF0YS5pdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IFNwbGlkZS5vcHRpb25zO1xuICAgICAgdmFyIHRleHQgPSBvcHRpb25zLmZvY3VzID09PSBmYWxzZSAmJiBvcHRpb25zLnBlclBhZ2UgPiAxID8gaTE4bi5wYWdlWCA6IGkxOG4uc2xpZGVYO1xuICAgICAgdmFyIGxhYmVsID0gc3ByaW50Zih0ZXh0LCBpdGVtLnBhZ2UgKyAxKTtcbiAgICAgIHZhciBidXR0b24gPSBpdGVtLmJ1dHRvbjtcbiAgICAgIHZhciBjb250cm9scyA9IGl0ZW0uU2xpZGVzLm1hcChmdW5jdGlvbiAoU2xpZGUpIHtcbiAgICAgICAgcmV0dXJuIFNsaWRlLnNsaWRlLmlkO1xuICAgICAgfSk7XG4gICAgICBzZXRBdHRyaWJ1dGUoYnV0dG9uLCBBUklBX0NPTlRST0xTLCBjb250cm9scy5qb2luKCcgJykpO1xuICAgICAgc2V0QXR0cmlidXRlKGJ1dHRvbiwgQVJJQV9MQUJFTCwgbGFiZWwpO1xuICAgIH0pO1xuICB9XG4gIC8qKlxyXG4gICAqIFVwZGF0ZSBwYWdpbmF0aW9uIGF0dHJpYnV0ZXMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge09iamVjdH0gIGRhdGEgLSBEYXRhIG9iamVjdCBjb250YWluaW5nIGFsbCBpdGVtcy5cclxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IHByZXYgLSBBIHByZXZpb3VzIGFjdGl2ZSBlbGVtZW50LlxyXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gY3VyciAtIEEgY3VycmVudCBhY3RpdmUgZWxlbWVudC5cclxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIHVwZGF0ZVBhZ2luYXRpb24oZGF0YSwgcHJldiwgY3Vycikge1xuICAgIGlmIChwcmV2KSB7XG4gICAgICByZW1vdmVBdHRyaWJ1dGUocHJldi5idXR0b24sIEFSSUFfQ1VSUkVOUlQpO1xuICAgIH1cblxuICAgIGlmIChjdXJyKSB7XG4gICAgICBzZXRBdHRyaWJ1dGUoY3Vyci5idXR0b24sIEFSSUFfQ1VSUkVOUlQsIHRydWUpO1xuICAgIH1cbiAgfVxuICAvKipcclxuICAgKiBJbml0aWFsaXplIGF1dG9wbGF5IGJ1dHRvbnMuXHJcbiAgICovXG5cblxuICBmdW5jdGlvbiBpbml0QXV0b3BsYXkoKSB7XG4gICAgWydwbGF5JywgJ3BhdXNlJ10uZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgdmFyIGVsbSA9IEVsZW1lbnRzW25hbWVdO1xuXG4gICAgICBpZiAoZWxtKSB7XG4gICAgICAgIGlmICghaXNCdXR0b24oZWxtKSkge1xuICAgICAgICAgIHNldEF0dHJpYnV0ZShlbG0sICdyb2xlJywgJ2J1dHRvbicpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0QXR0cmlidXRlKGVsbSwgQVJJQV9DT05UUk9MUywgRWxlbWVudHMudHJhY2suaWQpO1xuICAgICAgICBzZXRBdHRyaWJ1dGUoZWxtLCBBUklBX0xBQkVMLCBpMThuW25hbWVdKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICAvKipcclxuICAgKiBJbml0aWFsaXplIG5hdmlnYXRpb24gc2xpZGVyLlxyXG4gICAqIEFkZCBidXR0b24gcm9sZSwgYXJpYS1sYWJlbCwgYXJpYS1jb250cm9scyB0byBzbGlkZSBlbGVtZW50cyBhbmQgYXBwZW5kIHNjcmVlbiByZWFkZXIgdGV4dCB0byB0aGVtLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtTcGxpZGV9IG1haW4gLSBBIG1haW4gU3BsaWRlIGluc3RhbmNlLlxyXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gaW5pdE5hdmlnYXRpb24obWFpbikge1xuICAgIEVsZW1lbnRzLmVhY2goZnVuY3Rpb24gKFNsaWRlKSB7XG4gICAgICB2YXIgc2xpZGUgPSBTbGlkZS5zbGlkZTtcbiAgICAgIHZhciByZWFsSW5kZXggPSBTbGlkZS5yZWFsSW5kZXg7XG5cbiAgICAgIGlmICghaXNCdXR0b24oc2xpZGUpKSB7XG4gICAgICAgIHNldEF0dHJpYnV0ZShzbGlkZSwgJ3JvbGUnLCAnYnV0dG9uJyk7XG4gICAgICB9XG5cbiAgICAgIHZhciBzbGlkZUluZGV4ID0gcmVhbEluZGV4ID4gLTEgPyByZWFsSW5kZXggOiBTbGlkZS5pbmRleDtcbiAgICAgIHZhciBsYWJlbCA9IHNwcmludGYoaTE4bi5zbGlkZVgsIHNsaWRlSW5kZXggKyAxKTtcbiAgICAgIHZhciBtYWluU2xpZGUgPSBtYWluLkNvbXBvbmVudHMuRWxlbWVudHMuZ2V0U2xpZGUoc2xpZGVJbmRleCk7XG4gICAgICBzZXRBdHRyaWJ1dGUoc2xpZGUsIEFSSUFfTEFCRUwsIGxhYmVsKTtcblxuICAgICAgaWYgKG1haW5TbGlkZSkge1xuICAgICAgICBzZXRBdHRyaWJ1dGUoc2xpZGUsIEFSSUFfQ09OVFJPTFMsIG1haW5TbGlkZS5zbGlkZS5pZCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgLyoqXHJcbiAgICogVXBkYXRlIG5hdmlnYXRpb24gYXR0cmlidXRlcy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAgU2xpZGUgIC0gQSB0YXJnZXQgU2xpZGUgb2JqZWN0LlxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gYWN0aXZlIC0gVHJ1ZSBpZiB0aGUgc2xpZGUgaXMgYWN0aXZlIG9yIGZhbHNlIGlmIGluYWN0aXZlLlxyXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gdXBkYXRlTmF2aWdhdGlvbihfcmVmLCBhY3RpdmUpIHtcbiAgICB2YXIgc2xpZGUgPSBfcmVmLnNsaWRlO1xuXG4gICAgaWYgKGFjdGl2ZSkge1xuICAgICAgc2V0QXR0cmlidXRlKHNsaWRlLCBBUklBX0NVUlJFTlJULCB0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlQXR0cmlidXRlKHNsaWRlLCBBUklBX0NVUlJFTlJUKTtcbiAgICB9XG4gIH1cbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgdGhlIGdpdmVuIGVsZW1lbnQgaXMgYnV0dG9uIG9yIG5vdC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWxtIC0gQW4gZWxlbWVudCB0byBiZSBjaGVja2VkLlxyXG4gICAqXHJcbiAgICogQHJldHVybiB7Ym9vbGVhbn0gLSBUcnVlIGlmIHRoZSBnaXZlbiBlbGVtZW50IGlzIGJ1dHRvbi5cclxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIGlzQnV0dG9uKGVsbSkge1xuICAgIHJldHVybiBlbG0udGFnTmFtZSA9PT0gJ0JVVFRPTic7XG4gIH1cblxuICByZXR1cm4gQTExeTtcbn0pO1xuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2pzL2NvbXBvbmVudHMvc3luYy9pbmRleC5qc1xuLyoqXHJcbiAqIFRoZSBjb21wb25lbnQgZm9yIHN5bmNocm9uaXppbmcgYSBzbGlkZXIgd2l0aCBhbm90aGVyLlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgIE5hb3Rvc2hpIEZ1aml0YVxyXG4gKiBAY29weXJpZ2h0IE5hb3Rvc2hpIEZ1aml0YS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICovXG5cblxuLyoqXHJcbiAqIFRoZSBldmVudCBuYW1lIGZvciBzeW5jLlxyXG4gKlxyXG4gKiBAdHlwZSB7c3RyaW5nfVxyXG4gKi9cblxudmFyIFNZTkNfRVZFTlQgPSAnbW92ZS5zeW5jJztcbi8qKlxyXG4gKiBUaGUgZXZlbnQgbmFtZXMgZm9yIGNsaWNrIG5hdmlnYXRpb24uXHJcbiAqIEB0eXBlIHtzdHJpbmd9XHJcbiAqL1xuXG52YXIgQ0xJQ0tfRVZFTlRTID0gJ21vdXNldXAgdG91Y2hlbmQnO1xuLyoqXHJcbiAqIFRoZSBrZXlzIGZvciB0cmlnZ2VyaW5nIHRoZSBuYXZpZ2F0aW9uIGJ1dHRvbi5cclxuICpcclxuICogQHR5cGUge1N0cmluZ1tdfVxyXG4gKi9cblxudmFyIFRSSUdHRVJfS0VZUyA9IFsnICcsICdFbnRlcicsICdTcGFjZWJhciddO1xuLyoqXHJcbiAqIFRoZSBjb21wb25lbnQgZm9yIHN5bmNocm9uaXppbmcgYSBzbGlkZXIgd2l0aCBhbm90aGVyLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1NwbGlkZX0gU3BsaWRlIC0gQSBTcGxpZGUgaW5zdGFuY2UuXHJcbiAqXHJcbiAqIEByZXR1cm4ge09iamVjdH0gLSBUaGUgY29tcG9uZW50IG9iamVjdC5cclxuICovXG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gY29uc3Qgc3luYyA9IChmdW5jdGlvbiAoU3BsaWRlKSB7XG4gIC8qKlxyXG4gICAqIEtlZXAgdGhlIHNpYmxpbmcgU3BsaWRlIGluc3RhbmNlLlxyXG4gICAqXHJcbiAgICogQHR5cGUge1NwbGlkZX1cclxuICAgKi9cbiAgdmFyIHNpYmxpbmcgPSBTcGxpZGUuc2libGluZztcbiAgLyoqXHJcbiAgICogV2hldGhlciB0aGUgc2libGluZyBzbGlkZXIgaXMgbmF2aWdhdGlvbiBvciBub3QuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7U3BsaWRlfGJvb2xlYW59XHJcbiAgICovXG5cbiAgdmFyIGlzTmF2aWdhdGlvbiA9IHNpYmxpbmcgJiYgc2libGluZy5vcHRpb25zLmlzTmF2aWdhdGlvbjtcbiAgLyoqXHJcbiAgICogTGF5b3V0IGNvbXBvbmVudCBvYmplY3QuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAqL1xuXG4gIHZhciBTeW5jID0ge1xuICAgIC8qKlxyXG4gICAgICogUmVxdWlyZWQgb25seSB3aGVuIHRoZSBzdWIgc2xpZGVyIGlzIGF2YWlsYWJsZS5cclxuICAgICAqXHJcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgICAqL1xuICAgIHJlcXVpcmVkOiAhIXNpYmxpbmcsXG5cbiAgICAvKipcclxuICAgICAqIENhbGxlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgbW91bnRlZC5cclxuICAgICAqL1xuICAgIG1vdW50OiBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICAgIHN5bmNNYWluKCk7XG4gICAgICBzeW5jU2libGluZygpO1xuXG4gICAgICBpZiAoaXNOYXZpZ2F0aW9uKSB7XG4gICAgICAgIGJpbmQoKTtcbiAgICAgICAgU3BsaWRlLm9uKCdyZWZyZXNoJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgYmluZCgpO1xuICAgICAgICAgICAgc2libGluZy5lbWl0KCduYXZpZ2F0aW9uOnVwZGF0ZWQnLCBTcGxpZGUpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgYWZ0ZXIgYWxsIGNvbXBvbmVudHMgYXJlIG1vdW50ZWQuXHJcbiAgICAgKi9cbiAgICBtb3VudGVkOiBmdW5jdGlvbiBtb3VudGVkKCkge1xuICAgICAgaWYgKGlzTmF2aWdhdGlvbikge1xuICAgICAgICBzaWJsaW5nLmVtaXQoJ25hdmlnYXRpb246bW91bnRlZCcsIFNwbGlkZSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICAvKipcclxuICAgKiBMaXN0ZW4gdGhlIHByaW1hcnkgc2xpZGVyIGV2ZW50IHRvIG1vdmUgc2Vjb25kYXJ5IG9uZS5cclxuICAgKiBNdXN0IHVuYmluZCBhIGhhbmRsZXIgYXQgZmlyc3QgdG8gYXZvaWQgaW5maW5pdGUgbG9vcC5cclxuICAgKi9cblxuICBmdW5jdGlvbiBzeW5jTWFpbigpIHtcbiAgICBTcGxpZGUub24oU1lOQ19FVkVOVCwgZnVuY3Rpb24gKG5ld0luZGV4LCBwcmV2SW5kZXgsIGRlc3RJbmRleCkge1xuICAgICAgc2libGluZy5vZmYoU1lOQ19FVkVOVCkuZ28oc2libGluZy5pcyhMT09QKSA/IGRlc3RJbmRleCA6IG5ld0luZGV4LCBmYWxzZSk7XG4gICAgICBzeW5jU2libGluZygpO1xuICAgIH0pO1xuICB9XG4gIC8qKlxyXG4gICAqIExpc3RlbiB0aGUgc2Vjb25kYXJ5IHNsaWRlciBldmVudCB0byBtb3ZlIHByaW1hcnkgb25lLlxyXG4gICAqIE11c3QgdW5iaW5kIGEgaGFuZGxlciBhdCBmaXJzdCB0byBhdm9pZCBpbmZpbml0ZSBsb29wLlxyXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gc3luY1NpYmxpbmcoKSB7XG4gICAgc2libGluZy5vbihTWU5DX0VWRU5ULCBmdW5jdGlvbiAobmV3SW5kZXgsIHByZXZJbmRleCwgZGVzdEluZGV4KSB7XG4gICAgICBTcGxpZGUub2ZmKFNZTkNfRVZFTlQpLmdvKFNwbGlkZS5pcyhMT09QKSA/IGRlc3RJbmRleCA6IG5ld0luZGV4LCBmYWxzZSk7XG4gICAgICBzeW5jTWFpbigpO1xuICAgIH0pO1xuICB9XG4gIC8qKlxyXG4gICAqIExpc3RlbiBzb21lIGV2ZW50cyBvbiBlYWNoIHNsaWRlLlxyXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gYmluZCgpIHtcbiAgICBzaWJsaW5nLkNvbXBvbmVudHMuRWxlbWVudHMuZWFjaChmdW5jdGlvbiAoX3JlZikge1xuICAgICAgdmFyIHNsaWRlID0gX3JlZi5zbGlkZSxcbiAgICAgICAgICBpbmRleCA9IF9yZWYuaW5kZXg7XG5cbiAgICAgIC8qXHJcbiAgICAgICAqIExpc3RlbiBtb3VzZXVwIGFuZCB0b3VjaGVuZCBldmVudHMgdG8gaGFuZGxlIGNsaWNrLlxyXG4gICAgICAgKi9cbiAgICAgIFNwbGlkZS5vZmYoQ0xJQ0tfRVZFTlRTLCBzbGlkZSkub24oQ0xJQ0tfRVZFTlRTLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAvLyBJZ25vcmUgYSBtaWRkbGUgb3IgcmlnaHQgY2xpY2suXG4gICAgICAgIGlmICghZS5idXR0b24gfHwgZS5idXR0b24gPT09IDApIHtcbiAgICAgICAgICBtb3ZlU2libGluZyhpbmRleCk7XG4gICAgICAgIH1cbiAgICAgIH0sIHNsaWRlKTtcbiAgICAgIC8qXHJcbiAgICAgICAqIFN1YnNjcmliZSBrZXl1cCB0byBoYW5kbGUgRW50ZXIgYW5kIFNwYWNlIGtleS5cclxuICAgICAgICogTm90ZSB0aGF0IEFycmF5LmluY2x1ZGVzIGlzIG5vdCBzdXBwb3J0ZWQgYnkgSUUuXHJcbiAgICAgICAqL1xuXG4gICAgICBTcGxpZGUub2ZmKCdrZXl1cCcsIHNsaWRlKS5vbigna2V5dXAnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoVFJJR0dFUl9LRVlTLmluZGV4T2YoZS5rZXkpID4gLTEpIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgbW92ZVNpYmxpbmcoaW5kZXgpO1xuICAgICAgICB9XG4gICAgICB9LCBzbGlkZSwge1xuICAgICAgICBwYXNzaXZlOiBmYWxzZVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgLyoqXHJcbiAgICogTW92ZSB0aGUgc2libGluZyB0byB0aGUgZ2l2ZW4gaW5kZXguXHJcbiAgICogTmVlZCB0byBjaGVjayBcIklETEVcIiBzdGF0dXMgYmVjYXVzZSBzbGlkZXMgY2FuIGJlIG1vdmluZyBieSBEcmFnIGNvbXBvbmVudC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCAtIFRhcmdldCBpbmRleC5cclxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIG1vdmVTaWJsaW5nKGluZGV4KSB7XG4gICAgaWYgKFNwbGlkZS5TdGF0ZS5pcyhJRExFKSkge1xuICAgICAgc2libGluZy5nbyhpbmRleCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIFN5bmM7XG59KTtcbjsvLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9qcy9jb21wb25lbnRzL2JyZWFrcG9pbnRzL2luZGV4LmpzXG4vKipcclxuICogVGhlIGNvbXBvbmVudCBmb3IgdXBkYXRpbmcgb3B0aW9ucyBhY2NvcmRpbmcgdG8gYSBjdXJyZW50IHdpbmRvdyB3aWR0aC5cclxuICpcclxuICogQGF1dGhvciAgICBOYW90b3NoaSBGdWppdGFcclxuICogQGNvcHlyaWdodCBOYW90b3NoaSBGdWppdGEuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqL1xuXG5cbi8qKlxyXG4gKiBJbnRlcnZhbCB0aW1lIGZvciB0aHJvdHRsZS5cclxuICpcclxuICogQHR5cGUge251bWJlcn1cclxuICovXG5cbnZhciBUSFJPVFRMRSA9IDUwO1xuLyoqXHJcbiAqIFRoZSBjb21wb25lbnQgZm9yIHVwZGF0aW5nIG9wdGlvbnMgYWNjb3JkaW5nIHRvIGEgY3VycmVudCB3aW5kb3cgd2lkdGguXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3BsaWRlfSBTcGxpZGUgLSBBIFNwbGlkZSBpbnN0YW5jZS5cclxuICpcclxuICogQHJldHVybiB7T2JqZWN0fSAtIFRoZSBjb21wb25lbnQgb2JqZWN0LlxyXG4gKi9cblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBjb25zdCBicmVha3BvaW50cyA9IChmdW5jdGlvbiAoU3BsaWRlKSB7XG4gIC8qKlxyXG4gICAqIFN0b3JlIGJyZWFrcG9pbnRzLlxyXG4gICAqXHJcbiAgICogQHR5cGUge09iamVjdHxib29sZWFufVxyXG4gICAqL1xuICB2YXIgYnJlYWtwb2ludHMgPSBTcGxpZGUub3B0aW9ucy5icmVha3BvaW50cztcbiAgLyoqXHJcbiAgICogVGhlIGNoZWNrIGZ1bmN0aW9uIHdob3NlIGZyZXF1ZW5jeSBvZiBjYWxsIGlzIHJlZHVjZWQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7RnVuY3Rpb259XHJcbiAgICovXG5cbiAgdmFyIHRocm90dGxlZENoZWNrID0gdGhyb3R0bGUoY2hlY2ssIFRIUk9UVExFKTtcbiAgLyoqXHJcbiAgICogS2VlcCBpbml0aWFsIG9wdGlvbnMuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAqL1xuXG4gIHZhciBpbml0aWFsT3B0aW9ucztcbiAgLyoqXHJcbiAgICogQW4gYXJyYXkgY29udGFpbmluZyBvYmplY3RzIG9mIHBvaW50IGFuZCBNZWRpYVF1ZXJ5TGlzdC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtPYmplY3RbXX1cclxuICAgKi9cblxuICB2YXIgbWFwID0gW107XG4gIC8qKlxyXG4gICAqIEhvbGQgdGhlIHByZXZpb3VzIGJyZWFrcG9pbnQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7bnVtYmVyfHVuZGVmaW5lZH1cclxuICAgKi9cblxuICB2YXIgcHJldlBvaW50O1xuICAvKipcclxuICAgKiBCcmVha3BvaW50cyBjb21wb25lbnQgb2JqZWN0LlxyXG4gICAqXHJcbiAgICogQHR5cGUge09iamVjdH1cclxuICAgKi9cblxuICB2YXIgQnJlYWtwb2ludHMgPSB7XG4gICAgLyoqXHJcbiAgICAgKiBSZXF1aXJlZCBvbmx5IHdoZW4gdGhlIGJyZWFrcG9pbnRzIGRlZmluaXRpb24gaXMgcHJvdmlkZWQgYW5kIGJyb3dzZXIgc3VwcG9ydHMgbWF0Y2hNZWRpYS5cclxuICAgICAqXHJcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgICAqL1xuICAgIHJlcXVpcmVkOiBicmVha3BvaW50cyAmJiBtYXRjaE1lZGlhLFxuXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWQuXHJcbiAgICAgKi9cbiAgICBtb3VudDogZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgICBtYXAgPSBPYmplY3Qua2V5cyhicmVha3BvaW50cykuc29ydChmdW5jdGlvbiAobiwgbSkge1xuICAgICAgICByZXR1cm4gK24gLSArbTtcbiAgICAgIH0pLm1hcChmdW5jdGlvbiAocG9pbnQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBwb2ludDogcG9pbnQsXG4gICAgICAgICAgbXFsOiBtYXRjaE1lZGlhKFwiKG1heC13aWR0aDpcIiArIHBvaW50ICsgXCJweClcIilcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgICAgLypcclxuICAgICAgICogVG8ga2VlcCBtb25pdG9yaW5nIHJlc2l6ZSBldmVudCBhZnRlciBkZXN0cnVjdGlvbiB3aXRob3V0IFwiY29tcGxldGVseVwiLFxyXG4gICAgICAgKiB1c2UgbmF0aXZlIGFkZEV2ZW50TGlzdGVuZXIgaW5zdGVhZCBvZiBTcGxpZGUub24uXHJcbiAgICAgICAqL1xuXG4gICAgICB0aGlzLmRlc3Ryb3kodHJ1ZSk7XG4gICAgICBhZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aHJvdHRsZWRDaGVjayk7IC8vIEtlZXAgaW5pdGlhbCBvcHRpb25zIHRvIGFwcGx5IHRoZW0gd2hlbiBubyBicmVha3BvaW50IG1hdGNoZXMuXG5cbiAgICAgIGluaXRpYWxPcHRpb25zID0gU3BsaWRlLm9wdGlvbnM7XG4gICAgICBjaGVjaygpO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIERlc3Ryb3kuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtib29sZWFufSBjb21wbGV0ZWx5IC0gV2hldGhlciB0byBkZXN0cm95IFNwbGlkZSBjb21wbGV0ZWx5LlxyXG4gICAgICovXG4gICAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveShjb21wbGV0ZWx5KSB7XG4gICAgICBpZiAoY29tcGxldGVseSkge1xuICAgICAgICByZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aHJvdHRsZWRDaGVjayk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICAvKipcclxuICAgKiBDaGVjayB0aGUgYnJlYWtwb2ludC5cclxuICAgKi9cblxuICBmdW5jdGlvbiBjaGVjaygpIHtcbiAgICB2YXIgcG9pbnQgPSBnZXRQb2ludCgpO1xuXG4gICAgaWYgKHBvaW50ICE9PSBwcmV2UG9pbnQpIHtcbiAgICAgIHByZXZQb2ludCA9IHBvaW50O1xuICAgICAgdmFyIFN0YXRlID0gU3BsaWRlLlN0YXRlO1xuICAgICAgdmFyIG9wdGlvbnMgPSBicmVha3BvaW50c1twb2ludF0gfHwgaW5pdGlhbE9wdGlvbnM7XG4gICAgICB2YXIgZGVzdHJveSA9IG9wdGlvbnMuZGVzdHJveTtcblxuICAgICAgaWYgKGRlc3Ryb3kpIHtcbiAgICAgICAgU3BsaWRlLm9wdGlvbnMgPSBpbml0aWFsT3B0aW9ucztcbiAgICAgICAgU3BsaWRlLmRlc3Ryb3koZGVzdHJveSA9PT0gJ2NvbXBsZXRlbHknKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChTdGF0ZS5pcyhERVNUUk9ZRUQpKSB7XG4gICAgICAgICAgU3BsaWRlLm1vdW50KCk7XG4gICAgICAgIH1cblxuICAgICAgICBTcGxpZGUub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8qKlxyXG4gICAqIFJldHVybiB0aGUgYnJlYWtwb2ludCBtYXRjaGluZyBjdXJyZW50IHdpbmRvdyB3aWR0aC5cclxuICAgKiBOb3RlIHRoYXQgQXJyYXkucHJvdG90eXBlLmZpbmQgaXMgbm90IHN1cHBvcnRlZCBieSBJRS5cclxuICAgKlxyXG4gICAqIEByZXR1cm4ge251bWJlcnxzdHJpbmd9IC0gQSBicmVha3BvaW50IGFzIG51bWJlciBvciBzdHJpbmcuIC0xIGlmIG5vIHBvaW50IG1hdGNoZXMuXHJcbiAgICovXG5cblxuICBmdW5jdGlvbiBnZXRQb2ludCgpIHtcbiAgICB2YXIgaXRlbSA9IG1hcC5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiBpdGVtLm1xbC5tYXRjaGVzO1xuICAgIH0pWzBdO1xuICAgIHJldHVybiBpdGVtID8gaXRlbS5wb2ludCA6IC0xO1xuICB9XG5cbiAgcmV0dXJuIEJyZWFrcG9pbnRzO1xufSk7XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvanMvY29tcG9uZW50cy9pbmRleC5qc1xuLyoqXHJcbiAqIEV4cG9ydCBjb21wb25lbnRzLlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgIE5hb3Rvc2hpIEZ1aml0YVxyXG4gKiBAY29weXJpZ2h0IE5hb3Rvc2hpIEZ1aml0YS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICovXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxudmFyIENPTVBMRVRFID0ge1xuICBPcHRpb25zOiBvcHRpb25zLFxuICBCcmVha3BvaW50czogYnJlYWtwb2ludHMsXG4gIENvbnRyb2xsZXI6IGNvbnRyb2xsZXIsXG4gIEVsZW1lbnRzOiBjb21wb25lbnRzX2VsZW1lbnRzLFxuICBUcmFjazogdHJhY2ssXG4gIENsb25lczogY2xvbmVzLFxuICBMYXlvdXQ6IGxheW91dCxcbiAgRHJhZzogZHJhZyxcbiAgQ2xpY2s6IGNsaWNrLFxuICBBdXRvcGxheTogYXV0b3BsYXksXG4gIENvdmVyOiBjb3ZlcixcbiAgQXJyb3dzOiBhcnJvd3MsXG4gIFBhZ2luYXRpb246IHBhZ2luYXRpb24sXG4gIExhenlMb2FkOiBsYXp5bG9hZCxcbiAgS2V5Ym9hcmQ6IGtleWJvYXJkLFxuICBTeW5jOiBzeW5jLFxuICBBMTF5OiBhMTF5XG59O1xudmFyIExJR0hUID0ge1xuICBPcHRpb25zOiBvcHRpb25zLFxuICBDb250cm9sbGVyOiBjb250cm9sbGVyLFxuICBFbGVtZW50czogY29tcG9uZW50c19lbGVtZW50cyxcbiAgVHJhY2s6IHRyYWNrLFxuICBDbG9uZXM6IGNsb25lcyxcbiAgTGF5b3V0OiBsYXlvdXQsXG4gIERyYWc6IGRyYWcsXG4gIENsaWNrOiBjbGljayxcbiAgQXJyb3dzOiBhcnJvd3MsXG4gIFBhZ2luYXRpb246IHBhZ2luYXRpb24sXG4gIEExMXk6IGExMXlcbn07XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9idWlsZC9tb2R1bGUvbW9kdWxlLmpzXG5mdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTsgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuLyoqXHJcbiAqIEV4cG9ydCBTcGxpZGUgY2xhc3MgZm9yIGltcG9ydC5cclxuICpcclxuICogQGF1dGhvciAgICBOYW90b3NoaSBGdWppdGFcclxuICogQGNvcHlyaWdodCBOYW90b3NoaSBGdWppdGEuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqL1xuXG5cbi8qKlxyXG4gKiBFeHBvcnQgU3BsaWRlIGNsYXNzIGZvciBpbXBvcnQgZnJvbSBvdGhlciBwcm9qZWN0cy5cclxuICovXG5cbnZhciBtb2R1bGVfU3BsaWRlID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfQ29yZSkge1xuICBfaW5oZXJpdHNMb29zZShTcGxpZGUsIF9Db3JlKTtcblxuICBmdW5jdGlvbiBTcGxpZGUocm9vdCwgb3B0aW9ucykge1xuICAgIHJldHVybiBfQ29yZS5jYWxsKHRoaXMsIHJvb3QsIG9wdGlvbnMsIENPTVBMRVRFKSB8fCB0aGlzO1xuICB9XG5cbiAgcmV0dXJuIFNwbGlkZTtcbn0oU3BsaWRlKTtcblxuXG5cbi8qKiovIH0pXG5cbi8qKioqKiovIFx0fSk7XG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcbi8qKioqKiovIFx0XG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuLyoqKioqKi8gXHRcdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovIFx0XG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqLyBcdFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIFx0Lyogd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzICovXG4vKioqKioqLyBcdCgoKSA9PiB7XG4vKioqKioqLyBcdFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG4vKioqKioqLyBcdFx0XHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG4vKioqKioqLyBcdFx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuLyoqKioqKi8gXHRcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG4vKioqKioqLyBcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdH1cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi8gXHR9KSgpO1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0Lyogd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCAqL1xuLyoqKioqKi8gXHQoKCkgPT4ge1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApXG4vKioqKioqLyBcdH0pKCk7XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHQvKiB3ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0ICovXG4vKioqKioqLyBcdCgoKSA9PiB7XG4vKioqKioqLyBcdFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG4vKioqKioqLyBcdFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbi8qKioqKiovIFx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4vKioqKioqLyBcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqKioqKi8gXHRcdH07XG4vKioqKioqLyBcdH0pKCk7XG4vKioqKioqLyBcdFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIFx0Ly8gbW9kdWxlIGV4cG9ydHMgbXVzdCBiZSByZXR1cm5lZCBmcm9tIHJ1bnRpbWUgc28gZW50cnkgaW5saW5pbmcgaXMgZGlzYWJsZWRcbi8qKioqKiovIFx0Ly8gc3RhcnR1cFxuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMzExKTtcbi8qKioqKiovIH0pKClcbjtcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=