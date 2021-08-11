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
/* harmony import */ var _splidejs_react_splide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @splidejs/react-splide */ "./node_modules/@splidejs/react-splide/dist/js/index.js");
/* harmony import */ var _utils_slide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/slide */ "./pages/utils/slide.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Vaypol\\Documents\\BIKINI\\bikini\\pages\\carouselsplide\\index.js",
    _this = undefined;

/**
 * Basic example.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */


/**
 * The function for the basic example.
 *
 * @return {FunctionComponent} - Function component.
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "wrapper",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
      children: "Basic Example"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 8
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      href: "https://github.com/Splidejs/react-splide/blob/master/examples/src/js/components/BasicExample.jsx",
      target: "_blank",
      rel: "noopener",
      children: "View Code"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 8
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_splidejs_react_splide__WEBPACK_IMPORTED_MODULE_1__.Splide, {
      options: {
        rewind: true,
        perPage: 2,
        perMove: 1,
        gap: '1rem'
      },
      onMoved: function onMoved(splide, newIndex) {
        console.log('moved', newIndex);
      },
      children: (0,_utils_slide__WEBPACK_IMPORTED_MODULE_2__.createSlides)().map(function (slide) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_splidejs_react_splide__WEBPACK_IMPORTED_MODULE_1__.SplideSlide, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: slide.src,
            alt: slide.alt
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 14
          }, _this)
        }, slide.src, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 12
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 8
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 6
  }, _this);
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2Fyb3VzZWxzcGxpZGUvaW5kZXguanMiXSwibmFtZXMiOlsicmV3aW5kIiwicGVyUGFnZSIsInBlck1vdmUiLCJnYXAiLCJzcGxpZGUiLCJuZXdJbmRleCIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGVTbGlkZXMiLCJtYXAiLCJzbGlkZSIsInNyYyIsImFsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQztBQUNBO0FBRUE7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7QUFDQywrREFBZSxZQUFNO0FBQ25CLHNCQUNFO0FBQUssYUFBUyxFQUFDLFNBQWY7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBR0U7QUFDRSxVQUFJLEVBQUMsa0dBRFA7QUFFRSxZQUFNLEVBQUMsUUFGVDtBQUdFLFNBQUcsRUFBQyxVQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEYsZUFXRSw4REFBQywwREFBRDtBQUNFLGFBQU8sRUFBRztBQUNSQSxjQUFNLEVBQUcsSUFERDtBQUVSQyxlQUFPLEVBQUUsQ0FGRDtBQUdSQyxlQUFPLEVBQUUsQ0FIRDtBQUlSQyxXQUFHLEVBQU07QUFKRCxPQURaO0FBT0UsYUFBTyxFQUFHLGlCQUFFQyxNQUFGLEVBQVVDLFFBQVYsRUFBd0I7QUFBRUMsZUFBTyxDQUFDQyxHQUFSLENBQWEsT0FBYixFQUFzQkYsUUFBdEI7QUFBa0MsT0FQeEU7QUFBQSxnQkFTSUcsMERBQVksR0FBR0MsR0FBZixDQUFvQixVQUFBQyxLQUFLO0FBQUEsNEJBQ3pCLDhEQUFDLCtEQUFEO0FBQUEsaUNBQ0U7QUFBSyxlQUFHLEVBQUdBLEtBQUssQ0FBQ0MsR0FBakI7QUFBdUIsZUFBRyxFQUFHRCxLQUFLLENBQUNFO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixXQUFtQkYsS0FBSyxDQUFDQyxHQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUR5QjtBQUFBLE9BQXpCO0FBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBNkJELENBOUJEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Nhcm91c2Vsc3BsaWRlLjQwNjYwMjc4OGFlMjg3OWQ3ODkwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQmFzaWMgZXhhbXBsZS5cclxuICpcclxuICogQGF1dGhvciAgICBOYW90b3NoaSBGdWppdGFcclxuICogQGNvcHlyaWdodCBOYW90b3NoaSBGdWppdGEuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqL1xyXG4gaW1wb3J0IHsgU3BsaWRlLCBTcGxpZGVTbGlkZSB9IGZyb20gJ0BzcGxpZGVqcy9yZWFjdC1zcGxpZGUnO1xyXG4gaW1wb3J0IHsgY3JlYXRlU2xpZGVzIH0gZnJvbSBcIi4uL3V0aWxzL3NsaWRlXCI7XHJcbiBcclxuIC8qKlxyXG4gICogVGhlIGZ1bmN0aW9uIGZvciB0aGUgYmFzaWMgZXhhbXBsZS5cclxuICAqXHJcbiAgKiBAcmV0dXJuIHtGdW5jdGlvbkNvbXBvbmVudH0gLSBGdW5jdGlvbiBjb21wb25lbnQuXHJcbiAgKi9cclxuIGV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICAgcmV0dXJuIChcclxuICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cclxuICAgICAgIDxoMj5CYXNpYyBFeGFtcGxlPC9oMj5cclxuIFxyXG4gICAgICAgPGFcclxuICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9TcGxpZGVqcy9yZWFjdC1zcGxpZGUvYmxvYi9tYXN0ZXIvZXhhbXBsZXMvc3JjL2pzL2NvbXBvbmVudHMvQmFzaWNFeGFtcGxlLmpzeFwiXHJcbiAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgIHJlbD1cIm5vb3BlbmVyXCJcclxuICAgICAgID5cclxuICAgICAgICAgVmlldyBDb2RlXHJcbiAgICAgICA8L2E+XHJcbiBcclxuICAgICAgIDxTcGxpZGVcclxuICAgICAgICAgb3B0aW9ucz17IHtcclxuICAgICAgICAgICByZXdpbmQgOiB0cnVlLFxyXG4gICAgICAgICAgIHBlclBhZ2U6IDIsXHJcbiAgICAgICAgICAgcGVyTW92ZTogMSxcclxuICAgICAgICAgICBnYXAgICAgOiAnMXJlbScsXHJcbiAgICAgICAgIH0gfVxyXG4gICAgICAgICBvbk1vdmVkPXsgKCBzcGxpZGUsIG5ld0luZGV4ICkgPT4geyBjb25zb2xlLmxvZyggJ21vdmVkJywgbmV3SW5kZXggKSB9IH1cclxuICAgICAgID5cclxuICAgICAgICAgeyBjcmVhdGVTbGlkZXMoKS5tYXAoIHNsaWRlID0+IChcclxuICAgICAgICAgICA8U3BsaWRlU2xpZGUga2V5PXsgc2xpZGUuc3JjIH0+XHJcbiAgICAgICAgICAgICA8aW1nIHNyYz17IHNsaWRlLnNyYyB9IGFsdD17IHNsaWRlLmFsdCB9IC8+XHJcbiAgICAgICAgICAgPC9TcGxpZGVTbGlkZT5cclxuICAgICAgICAgKSApIH1cclxuICAgICAgIDwvU3BsaWRlPlxyXG4gICAgIDwvZGl2PlxyXG4gICApO1xyXG4gfSJdLCJzb3VyY2VSb290IjoiIn0=