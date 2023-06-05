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

var projects = [{
  title: "Movie App",
  description: "Using Angular, and that features you'll learn how to build a Full Stack MEAN Application - from start to finish. The App is called MoviesLand and it is a simple movies app with an Authentication.",
  image: "/images/MoviesLand.png",
  tags: ["Angular", "BootStrap", "RestFull APIs"],
  source: "https://github.com/ramezgamel/movieApp",
  visit: "https://ramezgamel.github.io/movieApp/",
  id: 0
}, (_ref = {
  title: "Recipe Book",
  description: "Using Angular, Reactive Forms, BootStrap, FireBase for Apis and Authentication to build an recipe book for get recipes and create it or buy it.",
  image: "/images/RecipeBook.png",
  tags: ["Angular", "TypeScript", "Firebase"],
  source: "https://github.com/ramezgamel/recipe-Book"
}, (0,C_Users_ramez_Desktop_portfolio_website_main_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_ref, "source", "https://ramezgamel.github.io/recipe-Book/auth"), (0,C_Users_ramez_Desktop_portfolio_website_main_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_ref, "id", 1), _ref), {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29uc3RhbnRzL2NvbnN0YW50cy5qcyJdLCJuYW1lcyI6WyJwcm9qZWN0cyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsInRhZ3MiLCJzb3VyY2UiLCJ2aXNpdCIsImlkIiwiVGltZUxpbmVEYXRhIiwieWVhciIsInRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiTyxJQUFNQSxRQUFRLEdBQUcsQ0FDdEI7QUFDRUMsT0FBSyxFQUFFLFdBRFQ7QUFFRUMsYUFBVyxFQUNULHFNQUhKO0FBSUVDLE9BQUssRUFBRSx3QkFKVDtBQUtFQyxNQUFJLEVBQUUsQ0FBQyxTQUFELEVBQVksV0FBWixFQUF5QixlQUF6QixDQUxSO0FBTUVDLFFBQU0sRUFBRSx3Q0FOVjtBQU9FQyxPQUFLLEVBQUUsd0NBUFQ7QUFRRUMsSUFBRSxFQUFFO0FBUk4sQ0FEc0I7QUFZcEJOLE9BQUssRUFBRSxhQVphO0FBYXBCQyxhQUFXLEVBQ1QsaUpBZGtCO0FBZXBCQyxPQUFLLEVBQUUsd0JBZmE7QUFnQnBCQyxNQUFJLEVBQUUsQ0FBQyxTQUFELEVBQVksWUFBWixFQUEwQixVQUExQixDQWhCYztBQWlCcEJDLFFBQU0sRUFBRTtBQWpCWSwrSkFrQlosK0NBbEJZLDJKQW1CaEIsQ0FuQmdCLFVBcUJ0QjtBQUNFSixPQUFLLEVBQUUsWUFEVDtBQUVFQyxhQUFXLEVBQ1QsK0pBSEo7QUFJRUMsT0FBSyxFQUFFLGVBSlQ7QUFLRUMsTUFBSSxFQUFFLENBQUMsT0FBRCxFQUFVLFFBQVYsQ0FMUjtBQU1FQyxRQUFNLEVBQUUsb0JBTlY7QUFPRUMsT0FBSyxFQUFFLG9CQVBUO0FBUUVDLElBQUUsRUFBRTtBQVJOLENBckJzQixFQStCdEI7QUFDRU4sT0FBSyxFQUFFLFNBRFQ7QUFFRUMsYUFBVyxFQUNULGdJQUhKO0FBSUVDLE9BQUssRUFBRSxlQUpUO0FBS0VDLE1BQUksRUFBRSxDQUFDLE9BQUQsRUFBVSxZQUFWLEVBQXdCLFVBQXhCLENBTFI7QUFNRUMsUUFBTSxFQUFFLG9CQU5WO0FBT0VDLE9BQUssRUFBRSxvQkFQVDtBQVFFQyxJQUFFLEVBQUU7QUFSTixDQS9Cc0IsQ0FBakI7QUEyQ0EsSUFBTUMsWUFBWSxHQUFHLENBQzFCO0FBQUVDLE1BQUksRUFBRSxJQUFSO0FBQWNDLE1BQUksRUFBRTtBQUFwQixDQUQwQixFQUUxQjtBQUFFRCxNQUFJLEVBQUUsSUFBUjtBQUFjQyxNQUFJLEVBQUU7QUFBcEIsQ0FGMEIsRUFHMUI7QUFBRUQsTUFBSSxFQUFFLElBQVI7QUFBY0MsTUFBSSxFQUFFO0FBQXBCLENBSDBCLEVBSTFCO0FBQUVELE1BQUksRUFBRSxJQUFSO0FBQWNDLE1BQUksRUFBRTtBQUFwQixDQUowQixFQUsxQjtBQUFFRCxNQUFJLEVBQUUsSUFBUjtBQUFjQyxNQUFJLEVBQUU7QUFBcEIsQ0FMMEIsQ0FBckIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjdhZTlkZTkwM2U2MThjNDQ3ZDEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufSIsImV4cG9ydCBjb25zdCBwcm9qZWN0cyA9IFtcbiAge1xuICAgIHRpdGxlOiBcIk1vdmllIEFwcFwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJVc2luZyBBbmd1bGFyLCBhbmQgdGhhdCBmZWF0dXJlcyB5b3UnbGwgbGVhcm4gaG93IHRvIGJ1aWxkIGEgRnVsbCBTdGFjayBNRUFOIEFwcGxpY2F0aW9uIC0gZnJvbSBzdGFydCB0byBmaW5pc2guIFRoZSBBcHAgaXMgY2FsbGVkIE1vdmllc0xhbmQgYW5kIGl0IGlzIGEgc2ltcGxlIG1vdmllcyBhcHAgd2l0aCBhbiBBdXRoZW50aWNhdGlvbi5cIixcbiAgICBpbWFnZTogXCIvaW1hZ2VzL01vdmllc0xhbmQucG5nXCIsXG4gICAgdGFnczogW1wiQW5ndWxhclwiLCBcIkJvb3RTdHJhcFwiLCBcIlJlc3RGdWxsIEFQSXNcIl0sXG4gICAgc291cmNlOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9yYW1lemdhbWVsL21vdmllQXBwXCIsXG4gICAgdmlzaXQ6IFwiaHR0cHM6Ly9yYW1lemdhbWVsLmdpdGh1Yi5pby9tb3ZpZUFwcC9cIixcbiAgICBpZDogMCxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIlJlY2lwZSBCb29rXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIlVzaW5nIEFuZ3VsYXIsIFJlYWN0aXZlIEZvcm1zLCBCb290U3RyYXAsIEZpcmVCYXNlIGZvciBBcGlzIGFuZCBBdXRoZW50aWNhdGlvbiB0byBidWlsZCBhbiByZWNpcGUgYm9vayBmb3IgZ2V0IHJlY2lwZXMgYW5kIGNyZWF0ZSBpdCBvciBidXkgaXQuXCIsXG4gICAgaW1hZ2U6IFwiL2ltYWdlcy9SZWNpcGVCb29rLnBuZ1wiLFxuICAgIHRhZ3M6IFtcIkFuZ3VsYXJcIiwgXCJUeXBlU2NyaXB0XCIsIFwiRmlyZWJhc2VcIl0sXG4gICAgc291cmNlOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9yYW1lemdhbWVsL3JlY2lwZS1Cb29rXCIsXG4gICAgc291cmNlOiBcImh0dHBzOi8vcmFtZXpnYW1lbC5naXRodWIuaW8vcmVjaXBlLUJvb2svYXV0aFwiLFxuICAgIGlkOiAxLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiV2ViUlRDIEFwcFwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJUaGlzIGlzIGEgY29kZSByZXBvc2l0b3J5IGZvciB0aGUgY29ycmVzcG9uZGluZyBZb3VUdWJlIHZpZGVvLiBJbiB0aGlzIHR1dG9yaWFsLCB3ZSdyZSBnb2luZyB0byBidWlsZCBhbmQgZGVwbG95IGEgUmVhY3QgVmlkZW8gQ2hhdCBBcHBsaWNhdGlvbiB1c2luZyBXZWJSVEMuXCIsXG4gICAgaW1hZ2U6IFwiL2ltYWdlcy8zLmpwZ1wiLFxuICAgIHRhZ3M6IFtcIlJlYWN0XCIsIFwiV2ViUlRDXCJdLFxuICAgIHNvdXJjZTogXCJodHRwczovL2dvb2dsZS5jb21cIixcbiAgICB2aXNpdDogXCJodHRwczovL2dvb2dsZS5jb21cIixcbiAgICBpZDogMixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIlVuaWNoYXRcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiVGhpcyBpcyBhIGNvZGUgcmVwb3NpdG9yeSBmb3IgdGhlIGNvcnJlc3BvbmRpbmcgdmlkZW8gdHV0b3JpYWwuIEluIHRoaXMgdmlkZW8sIHdlIHdpbGwgY3JlYXRlIGEgZnVsbCBSZWFsdGltZSBDaGF0IEFwcGxpY2F0aW9uXCIsXG4gICAgaW1hZ2U6IFwiL2ltYWdlcy80LmpwZ1wiLFxuICAgIHRhZ3M6IFtcIlJlYWN0XCIsIFwiQ2hhdEVuZ2luZVwiLCBcIkZpcmViYXNlXCJdLFxuICAgIHNvdXJjZTogXCJodHRwczovL2dvb2dsZS5jb21cIixcbiAgICB2aXNpdDogXCJodHRwczovL2dvb2dsZS5jb21cIixcbiAgICBpZDogMyxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBUaW1lTGluZURhdGEgPSBbXG4gIHsgeWVhcjogMjAxNywgdGV4dDogXCJTdGFydGVkIG15IGpvdXJuZXlcIiB9LFxuICB7IHllYXI6IDIwMTgsIHRleHQ6IFwiV29ya2VkIGFzIGEgZnJlZWxhbmNlIGRldmVsb3BlclwiIH0sXG4gIHsgeWVhcjogMjAxOSwgdGV4dDogXCJGb3VuZGVkIEphdmFTY3JpcHQgTWFzdGVyeVwiIH0sXG4gIHsgeWVhcjogMjAyMCwgdGV4dDogXCJTaGFyZWQgbXkgcHJvamVjdHMgd2l0aCB0aGUgd29ybGRcIiB9LFxuICB7IHllYXI6IDIwMjEsIHRleHQ6IFwiU3RhcnRlZCBteSBvd24gcGxhdGZvcm1cIiB9LFxuXTtcbiJdLCJzb3VyY2VSb290IjoiIn0=