self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
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

/***/ }),

/***/ "./src/constants/constants.js":
/*!************************************!*\
  !*** ./src/constants/constants.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projects": function() { return /* binding */ projects; },
/* harmony export */   "TimeLineData": function() { return /* binding */ TimeLineData; }
/* harmony export */ });
/* harmony import */ var C_Users_ramez_Desktop_portfolio_website_main_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _ref;

var projects = [(_ref = {
  title: "Movie App",
  description: "Using Angular, and that features you'll learn how to build a Full Stack MEAN Application - from start to finish. The App is called MoviesLand and it is a simple movies app with an Authentication.",
  image: "/images/MoviesLand.png",
  tags: ["Angular", "BootStrap", "RestFull APIs"],
  source: "https://github.com/ramezgamel/movieApp"
}, (0,C_Users_ramez_Desktop_portfolio_website_main_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_ref, "source", "https://ramezgamel.github.io/movieApp/"), (0,C_Users_ramez_Desktop_portfolio_website_main_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_ref, "id", 0), _ref), {
  title: "Recipe Book",
  description: "Using Angular, Reactive Forms, BootStrap, FireBase for Apis and Authentication to build an recipe book for get recipes and create it or buy it.",
  image: "/images/RecipeBook.png",
  tags: ["Angular", "TypeScript", "Firebase"],
  visit: "https://github.com/ramezgamel/recipe-Book",
  source: "https://ramezgamel.github.io/recipe-Book/auth",
  id: 1
}, {
  title: "WebRTC App",
  description: "This is a code repository for the corresponding YouTube video. In this tutorial, we're going to build and deploy a React Video Chat Application using WebRTC.",
  image: "/images/3.jpg",
  tags: ["React", "WebRTC"],
  source: "https://google.com",
  visit: "https://google.com",
  id: 2
}, {
  title: "Unichat",
  description: "This is a code repository for the corresponding video tutorial. In this video, we will create a full Realtime Chat Application",
  image: "/images/4.jpg",
  tags: ["React", "ChatEngine", "Firebase"],
  source: "https://google.com",
  visit: "https://google.com",
  id: 3
}];
var TimeLineData = [{
  year: 2017,
  text: "Started my journey"
}, {
  year: 2018,
  text: "Worked as a freelance developer"
}, {
  year: 2019,
  text: "Founded JavaScript Mastery"
}, {
  year: 2020,
  text: "Shared my projects with the world"
}, {
  year: 2021,
  text: "Started my own platform"
}];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29uc3RhbnRzL2NvbnN0YW50cy5qcyJdLCJuYW1lcyI6WyJwcm9qZWN0cyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsInRhZ3MiLCJzb3VyY2UiLCJ2aXNpdCIsImlkIiwiVGltZUxpbmVEYXRhIiwieWVhciIsInRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiTyxJQUFNQSxRQUFRLEdBQUc7QUFFcEJDLE9BQUssRUFBRSxXQUZhO0FBR3BCQyxhQUFXLEVBQ1QscU1BSmtCO0FBS3BCQyxPQUFLLEVBQUUsd0JBTGE7QUFNcEJDLE1BQUksRUFBRSxDQUFDLFNBQUQsRUFBWSxXQUFaLEVBQXlCLGVBQXpCLENBTmM7QUFPcEJDLFFBQU0sRUFBRTtBQVBZLCtKQVFaLHdDQVJZLDJKQVNoQixDQVRnQixVQVd0QjtBQUNFSixPQUFLLEVBQUUsYUFEVDtBQUVFQyxhQUFXLEVBQ1QsaUpBSEo7QUFJRUMsT0FBSyxFQUFFLHdCQUpUO0FBS0VDLE1BQUksRUFBRSxDQUFDLFNBQUQsRUFBWSxZQUFaLEVBQTBCLFVBQTFCLENBTFI7QUFNRUUsT0FBSyxFQUFFLDJDQU5UO0FBT0VELFFBQU0sRUFBRSwrQ0FQVjtBQVFFRSxJQUFFLEVBQUU7QUFSTixDQVhzQixFQXFCdEI7QUFDRU4sT0FBSyxFQUFFLFlBRFQ7QUFFRUMsYUFBVyxFQUNULCtKQUhKO0FBSUVDLE9BQUssRUFBRSxlQUpUO0FBS0VDLE1BQUksRUFBRSxDQUFDLE9BQUQsRUFBVSxRQUFWLENBTFI7QUFNRUMsUUFBTSxFQUFFLG9CQU5WO0FBT0VDLE9BQUssRUFBRSxvQkFQVDtBQVFFQyxJQUFFLEVBQUU7QUFSTixDQXJCc0IsRUErQnRCO0FBQ0VOLE9BQUssRUFBRSxTQURUO0FBRUVDLGFBQVcsRUFDVCxnSUFISjtBQUlFQyxPQUFLLEVBQUUsZUFKVDtBQUtFQyxNQUFJLEVBQUUsQ0FBQyxPQUFELEVBQVUsWUFBVixFQUF3QixVQUF4QixDQUxSO0FBTUVDLFFBQU0sRUFBRSxvQkFOVjtBQU9FQyxPQUFLLEVBQUUsb0JBUFQ7QUFRRUMsSUFBRSxFQUFFO0FBUk4sQ0EvQnNCLENBQWpCO0FBMkNBLElBQU1DLFlBQVksR0FBRyxDQUMxQjtBQUFFQyxNQUFJLEVBQUUsSUFBUjtBQUFjQyxNQUFJLEVBQUU7QUFBcEIsQ0FEMEIsRUFFMUI7QUFBRUQsTUFBSSxFQUFFLElBQVI7QUFBY0MsTUFBSSxFQUFFO0FBQXBCLENBRjBCLEVBRzFCO0FBQUVELE1BQUksRUFBRSxJQUFSO0FBQWNDLE1BQUksRUFBRTtBQUFwQixDQUgwQixFQUkxQjtBQUFFRCxNQUFJLEVBQUUsSUFBUjtBQUFjQyxNQUFJLEVBQUU7QUFBcEIsQ0FKMEIsRUFLMUI7QUFBRUQsTUFBSSxFQUFFLElBQVI7QUFBY0MsTUFBSSxFQUFFO0FBQXBCLENBTDBCLENBQXJCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjM1NTZhN2U3MjFjZGFiZTdjMzU4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn0iLCJleHBvcnQgY29uc3QgcHJvamVjdHMgPSBbXG4gIHtcbiAgICB0aXRsZTogXCJNb3ZpZSBBcHBcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiVXNpbmcgQW5ndWxhciwgYW5kIHRoYXQgZmVhdHVyZXMgeW91J2xsIGxlYXJuIGhvdyB0byBidWlsZCBhIEZ1bGwgU3RhY2sgTUVBTiBBcHBsaWNhdGlvbiAtIGZyb20gc3RhcnQgdG8gZmluaXNoLiBUaGUgQXBwIGlzIGNhbGxlZCBNb3ZpZXNMYW5kIGFuZCBpdCBpcyBhIHNpbXBsZSBtb3ZpZXMgYXBwIHdpdGggYW4gQXV0aGVudGljYXRpb24uXCIsXG4gICAgaW1hZ2U6IFwiL2ltYWdlcy9Nb3ZpZXNMYW5kLnBuZ1wiLFxuICAgIHRhZ3M6IFtcIkFuZ3VsYXJcIiwgXCJCb290U3RyYXBcIiwgXCJSZXN0RnVsbCBBUElzXCJdLFxuICAgIHNvdXJjZTogXCJodHRwczovL2dpdGh1Yi5jb20vcmFtZXpnYW1lbC9tb3ZpZUFwcFwiLFxuICAgIHNvdXJjZTogXCJodHRwczovL3JhbWV6Z2FtZWwuZ2l0aHViLmlvL21vdmllQXBwL1wiLFxuICAgIGlkOiAwLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiUmVjaXBlIEJvb2tcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiVXNpbmcgQW5ndWxhciwgUmVhY3RpdmUgRm9ybXMsIEJvb3RTdHJhcCwgRmlyZUJhc2UgZm9yIEFwaXMgYW5kIEF1dGhlbnRpY2F0aW9uIHRvIGJ1aWxkIGFuIHJlY2lwZSBib29rIGZvciBnZXQgcmVjaXBlcyBhbmQgY3JlYXRlIGl0IG9yIGJ1eSBpdC5cIixcbiAgICBpbWFnZTogXCIvaW1hZ2VzL1JlY2lwZUJvb2sucG5nXCIsXG4gICAgdGFnczogW1wiQW5ndWxhclwiLCBcIlR5cGVTY3JpcHRcIiwgXCJGaXJlYmFzZVwiXSxcbiAgICB2aXNpdDogXCJodHRwczovL2dpdGh1Yi5jb20vcmFtZXpnYW1lbC9yZWNpcGUtQm9va1wiLFxuICAgIHNvdXJjZTogXCJodHRwczovL3JhbWV6Z2FtZWwuZ2l0aHViLmlvL3JlY2lwZS1Cb29rL2F1dGhcIixcbiAgICBpZDogMSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIldlYlJUQyBBcHBcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiVGhpcyBpcyBhIGNvZGUgcmVwb3NpdG9yeSBmb3IgdGhlIGNvcnJlc3BvbmRpbmcgWW91VHViZSB2aWRlby4gSW4gdGhpcyB0dXRvcmlhbCwgd2UncmUgZ29pbmcgdG8gYnVpbGQgYW5kIGRlcGxveSBhIFJlYWN0IFZpZGVvIENoYXQgQXBwbGljYXRpb24gdXNpbmcgV2ViUlRDLlwiLFxuICAgIGltYWdlOiBcIi9pbWFnZXMvMy5qcGdcIixcbiAgICB0YWdzOiBbXCJSZWFjdFwiLCBcIldlYlJUQ1wiXSxcbiAgICBzb3VyY2U6IFwiaHR0cHM6Ly9nb29nbGUuY29tXCIsXG4gICAgdmlzaXQ6IFwiaHR0cHM6Ly9nb29nbGUuY29tXCIsXG4gICAgaWQ6IDIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJVbmljaGF0XCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIlRoaXMgaXMgYSBjb2RlIHJlcG9zaXRvcnkgZm9yIHRoZSBjb3JyZXNwb25kaW5nIHZpZGVvIHR1dG9yaWFsLiBJbiB0aGlzIHZpZGVvLCB3ZSB3aWxsIGNyZWF0ZSBhIGZ1bGwgUmVhbHRpbWUgQ2hhdCBBcHBsaWNhdGlvblwiLFxuICAgIGltYWdlOiBcIi9pbWFnZXMvNC5qcGdcIixcbiAgICB0YWdzOiBbXCJSZWFjdFwiLCBcIkNoYXRFbmdpbmVcIiwgXCJGaXJlYmFzZVwiXSxcbiAgICBzb3VyY2U6IFwiaHR0cHM6Ly9nb29nbGUuY29tXCIsXG4gICAgdmlzaXQ6IFwiaHR0cHM6Ly9nb29nbGUuY29tXCIsXG4gICAgaWQ6IDMsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgVGltZUxpbmVEYXRhID0gW1xuICB7IHllYXI6IDIwMTcsIHRleHQ6IFwiU3RhcnRlZCBteSBqb3VybmV5XCIgfSxcbiAgeyB5ZWFyOiAyMDE4LCB0ZXh0OiBcIldvcmtlZCBhcyBhIGZyZWVsYW5jZSBkZXZlbG9wZXJcIiB9LFxuICB7IHllYXI6IDIwMTksIHRleHQ6IFwiRm91bmRlZCBKYXZhU2NyaXB0IE1hc3RlcnlcIiB9LFxuICB7IHllYXI6IDIwMjAsIHRleHQ6IFwiU2hhcmVkIG15IHByb2plY3RzIHdpdGggdGhlIHdvcmxkXCIgfSxcbiAgeyB5ZWFyOiAyMDIxLCB0ZXh0OiBcIlN0YXJ0ZWQgbXkgb3duIHBsYXRmb3JtXCIgfSxcbl07XG4iXSwic291cmNlUm9vdCI6IiJ9