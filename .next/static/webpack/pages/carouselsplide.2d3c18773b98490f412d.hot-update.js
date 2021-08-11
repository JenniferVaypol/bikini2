self["webpackHotUpdate_N_E"]("pages/carouselsplide",{

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
/* harmony import */ var _assets_img_1_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/img_1.png */ "./pages/assets/img_1.png");
/* harmony import */ var _assets_img_2_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/img_2.png */ "./pages/assets/img_2.png");
/* harmony import */ var _splidejs_splide_dist_css_themes_splide_default_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @splidejs/splide/dist/css/themes/splide-default.min.css */ "./node_modules/@splidejs/splide/dist/css/themes/splide-default.min.css");
/* harmony import */ var _splidejs_splide_dist_css_themes_splide_default_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_splidejs_splide_dist_css_themes_splide_default_min_css__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Vaypol\\Documents\\BIKINI\\bikini\\pages\\carouselsplide\\index.js",
    _this = undefined;







var CarouselSplide = function CarouselSplide() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(splide_nextjs_react_splide__WEBPACK_IMPORTED_MODULE_1__.Splide, {
    options: {
      rewind: true,
      perPage: 1,
      perMove: 1,
      gap: "1rem"
    },
    onMoved: function onMoved(splide, newIndex) {
      console.log("moved", newIndex);
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(splide_nextjs_react_splide__WEBPACK_IMPORTED_MODULE_1__.SplideSlide, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
        src: _assets_img_1_png__WEBPACK_IMPORTED_MODULE_3__.default,
        alt: "Picture of the author"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(splide_nextjs_react_splide__WEBPACK_IMPORTED_MODULE_1__.SplideSlide, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
        src: _assets_img_2_png__WEBPACK_IMPORTED_MODULE_4__.default,
        alt: "Picture of the author"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2Fyb3VzZWxzcGxpZGUvaW5kZXguanMiXSwibmFtZXMiOlsiQ2Fyb3VzZWxTcGxpZGUiLCJyZXdpbmQiLCJwZXJQYWdlIiwicGVyTW92ZSIsImdhcCIsInNwbGlkZSIsIm5ld0luZGV4IiwiY29uc29sZSIsImxvZyIsIkltZzEiLCJJbWcyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFDM0Isc0JBQ0UsOERBQUMsOERBQUQ7QUFDRSxXQUFPLEVBQUU7QUFDUEMsWUFBTSxFQUFFLElBREQ7QUFFUEMsYUFBTyxFQUFFLENBRkY7QUFHUEMsYUFBTyxFQUFFLENBSEY7QUFJUEMsU0FBRyxFQUFFO0FBSkUsS0FEWDtBQU9FLFdBQU8sRUFBRSxpQkFBQ0MsTUFBRCxFQUFTQyxRQUFULEVBQXNCO0FBQzdCQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaLEVBQXFCRixRQUFyQjtBQUNELEtBVEg7QUFBQSw0QkFXRSw4REFBQyxtRUFBRDtBQUFBLDZCQUNFLDhEQUFDLG1EQUFEO0FBQU8sV0FBRyxFQUFFRyxzREFBWjtBQUFrQixXQUFHLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFYRixlQWNFLDhEQUFDLG1FQUFEO0FBQUEsNkJBQ0UsOERBQUMsbURBQUQ7QUFBTyxXQUFHLEVBQUVDLHNEQUFaO0FBQWtCLFdBQUcsRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBb0JELENBckJEOztLQUFNVixjO0FBdUJOLCtEQUFlQSxjQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Nhcm91c2Vsc3BsaWRlLjJkM2MxODc3M2I5ODQ5MGY0MTJkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTcGxpZGUsIFNwbGlkZVNsaWRlIH0gZnJvbSBcInNwbGlkZS1uZXh0anMvcmVhY3Qtc3BsaWRlXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgSW1nMSBmcm9tIFwiLi4vYXNzZXRzL2ltZ18xLnBuZ1wiO1xyXG5pbXBvcnQgSW1nMiBmcm9tIFwiLi4vYXNzZXRzL2ltZ18yLnBuZ1wiO1xyXG5pbXBvcnQgXCJAc3BsaWRlanMvc3BsaWRlL2Rpc3QvY3NzL3RoZW1lcy9zcGxpZGUtZGVmYXVsdC5taW4uY3NzXCI7XHJcblxyXG5jb25zdCBDYXJvdXNlbFNwbGlkZSA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFNwbGlkZVxyXG4gICAgICBvcHRpb25zPXt7XHJcbiAgICAgICAgcmV3aW5kOiB0cnVlLFxyXG4gICAgICAgIHBlclBhZ2U6IDEsXHJcbiAgICAgICAgcGVyTW92ZTogMSxcclxuICAgICAgICBnYXA6IFwiMXJlbVwiLFxyXG4gICAgICB9fVxyXG4gICAgICBvbk1vdmVkPXsoc3BsaWRlLCBuZXdJbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibW92ZWRcIiwgbmV3SW5kZXgpO1xyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8U3BsaWRlU2xpZGU+XHJcbiAgICAgICAgPEltYWdlIHNyYz17SW1nMX0gYWx0PVwiUGljdHVyZSBvZiB0aGUgYXV0aG9yXCIgLz5cclxuICAgICAgPC9TcGxpZGVTbGlkZT5cclxuICAgICAgPFNwbGlkZVNsaWRlPlxyXG4gICAgICAgIDxJbWFnZSBzcmM9e0ltZzJ9IGFsdD1cIlBpY3R1cmUgb2YgdGhlIGF1dGhvclwiIC8+XHJcbiAgICAgIDwvU3BsaWRlU2xpZGU+XHJcbiAgICA8L1NwbGlkZT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2Fyb3VzZWxTcGxpZGU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=