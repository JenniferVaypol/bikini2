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
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(splide_nextjs_react_splide__WEBPACK_IMPORTED_MODULE_1__.SplideSlide, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
        src: _assets_img_1_png__WEBPACK_IMPORTED_MODULE_3__.default,
        alt: "Picture of the author"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(splide_nextjs_react_splide__WEBPACK_IMPORTED_MODULE_1__.SplideSlide, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
        src: _assets_img_2_png__WEBPACK_IMPORTED_MODULE_4__.default,
        alt: "Picture of the author"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
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

/***/ "./pages/assets/img_2.png":
/*!********************************!*\
  !*** ./pages/assets/img_2.png ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/pages/assets/img_2.9ccdb8a3dce6fedeeab5cb53c1bb40da.png","height":250,"width":250,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAS1BMVEX////+///+/v78/f38+/vu7Oru6unh3t3b0MzOvrvIt7KxpJ+rioP////+///+/v75+Pjw7+3w7u3u7Ovk393SyMTWxsPJura/sa3JOY/rAAAADXRSTlP+/v7+/v7+/v7+/v7+JG0F5gAAADlJREFUeNpjYGJgYuIHEgwgxAuhWVgFmRlAYpxc4hyMQGE+CW4xEQGQLDuPqDAvP0gZmxBEFxNYFwAzGQGQu0VDPQAAAABJRU5ErkJggg=="});

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2Fyb3VzZWxzcGxpZGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2Fzc2V0cy9pbWdfMi5wbmciXSwibmFtZXMiOlsiQ2Fyb3VzZWxTcGxpZGUiLCJJbWcxIiwiSW1nMiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQzNCLHNCQUNFLDhEQUFDLDhEQUFEO0FBQUEsNEJBQ0UsOERBQUMsbUVBQUQ7QUFBQSw2QkFDRSw4REFBQyxtREFBRDtBQUFPLFdBQUcsRUFBRUMsc0RBQVo7QUFBa0IsV0FBRyxFQUFDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFJRSw4REFBQyxtRUFBRDtBQUFBLDZCQUNFLDhEQUFDLG1EQUFEO0FBQU8sV0FBRyxFQUFFQyxzREFBWjtBQUFrQixXQUFHLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVVELENBWEQ7O0tBQU1GLGM7QUFhTiwrREFBZUEsY0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBLCtEQUFnQixDQUFDLDJJQUEySSx5VEFBeVQsRSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYXJvdXNlbHNwbGlkZS45ZjQ0NTI4MDk3YjBhZWVjZjdjMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3BsaWRlLCBTcGxpZGVTbGlkZSB9IGZyb20gXCJzcGxpZGUtbmV4dGpzL3JlYWN0LXNwbGlkZVwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IEltZzEgZnJvbSBcIi4uL2Fzc2V0cy9pbWdfMS5wbmdcIjtcclxuaW1wb3J0IEltZzIgZnJvbSBcIi4uL2Fzc2V0cy9pbWdfMi5wbmdcIjtcclxuXHJcbmltcG9ydCAnQHNwbGlkZWpzL3NwbGlkZS9kaXN0L2Nzcy90aGVtZXMvc3BsaWRlLWRlZmF1bHQubWluLmNzcyc7XHJcblxyXG5jb25zdCBDYXJvdXNlbFNwbGlkZSA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFNwbGlkZT5cclxuICAgICAgPFNwbGlkZVNsaWRlPlxyXG4gICAgICAgIDxJbWFnZSBzcmM9e0ltZzF9IGFsdD1cIlBpY3R1cmUgb2YgdGhlIGF1dGhvclwiIC8+XHJcbiAgICAgIDwvU3BsaWRlU2xpZGU+XHJcbiAgICAgIDxTcGxpZGVTbGlkZT5cclxuICAgICAgICA8SW1hZ2Ugc3JjPXtJbWcyfSBhbHQ9XCJQaWN0dXJlIG9mIHRoZSBhdXRob3JcIiAvPlxyXG4gICAgICA8L1NwbGlkZVNsaWRlPlxyXG4gICAgPC9TcGxpZGU+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsU3BsaWRlO1xyXG4iLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3BhZ2VzL2Fzc2V0cy9pbWdfMi45Y2NkYjhhM2RjZTZmZWRlZWFiNWNiNTNjMWJiNDBkYS5wbmdcIixcImhlaWdodFwiOjI1MCxcIndpZHRoXCI6MjUwLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBTUFBQUR6MFU2NUFBQUFTMUJNVkVYLy8vLysvLy8rL3Y3OC9mMzgrL3Z1N09ydTZ1bmgzdDNiME16T3Zydkl0N0t4cEorcmlvUC8vLy8rLy8vKy92NzUrUGp3Nyszdzd1M3U3T3ZrMzkzU3lNVFd4c1BKdXJhL3NhM0pPWS9yQUFBQURYUlNUbFArL3Y3Ky92NysvdjcrL3Y3K0pHMEY1Z0FBQURsSlJFRlVlTnBqWUdKZ1l1SUhFZ3dneEF1aFdWZ0ZtUmxBWXB4YzRoeU1RR0UrQ1c0eEVRR1FMRHVQcURBdlAwZ1pteEJFRnhOWUZ3QXpHUUdRdTBWRFBRQUFBQUJKUlU1RXJrSmdnZz09XCJ9OyJdLCJzb3VyY2VSb290IjoiIn0=