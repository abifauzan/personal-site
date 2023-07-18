"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "components_SocialShare_jsx";
exports.ids = ["components_SocialShare_jsx"];
exports.modules = {

/***/ "./components/SocialShare.jsx":
/*!************************************!*\
  !*** ./components/SocialShare.jsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"clsx\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_share__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-share */ \"next-share\");\n/* harmony import */ var next_share__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_share__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst SocialShare = (props)=>{\n    const { className , url , quote , round =false , size =32 , ...rest } = props;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(\"flex flex items-center space-x-2 pt-6 md:flex-col md:space-x-0 md:space-y-2\", className),\n        ...rest,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"hidden sm:block md:mb-4 md:-rotate-90\",\n                children: \"Sharing\"\n            }, void 0, false, {\n                fileName: \"/Users/baybay/Documents/Projects/my_portfolio/web/components/SocialShare.jsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"hidden h-px w-6 bg-white sm:block md:h-6 md:w-px\"\n            }, void 0, false, {\n                fileName: \"/Users/baybay/Documents/Projects/my_portfolio/web/components/SocialShare.jsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_share__WEBPACK_IMPORTED_MODULE_2__.FacebookShareButton, {\n                url: url,\n                quote: quote,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_share__WEBPACK_IMPORTED_MODULE_2__.FacebookIcon, {\n                    size: size,\n                    round: round\n                }, void 0, false, {\n                    fileName: \"/Users/baybay/Documents/Projects/my_portfolio/web/components/SocialShare.jsx\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/baybay/Documents/Projects/my_portfolio/web/components/SocialShare.jsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_share__WEBPACK_IMPORTED_MODULE_2__.TwitterShareButton, {\n                url: url,\n                title: quote,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_share__WEBPACK_IMPORTED_MODULE_2__.TwitterIcon, {\n                    size: size,\n                    round: round\n                }, void 0, false, {\n                    fileName: \"/Users/baybay/Documents/Projects/my_portfolio/web/components/SocialShare.jsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/baybay/Documents/Projects/my_portfolio/web/components/SocialShare.jsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_share__WEBPACK_IMPORTED_MODULE_2__.LinkedinShareButton, {\n                url: url,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_share__WEBPACK_IMPORTED_MODULE_2__.LinkedinIcon, {\n                    size: size,\n                    round: round\n                }, void 0, false, {\n                    fileName: \"/Users/baybay/Documents/Projects/my_portfolio/web/components/SocialShare.jsx\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/baybay/Documents/Projects/my_portfolio/web/components/SocialShare.jsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_share__WEBPACK_IMPORTED_MODULE_2__.WhatsappShareButton, {\n                url: url,\n                title: quote,\n                separator: \":: \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_share__WEBPACK_IMPORTED_MODULE_2__.WhatsappIcon, {\n                    size: size,\n                    round: round\n                }, void 0, false, {\n                    fileName: \"/Users/baybay/Documents/Projects/my_portfolio/web/components/SocialShare.jsx\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/baybay/Documents/Projects/my_portfolio/web/components/SocialShare.jsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_share__WEBPACK_IMPORTED_MODULE_2__.PocketShareButton, {\n                url: url,\n                title: \"Next Share\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_share__WEBPACK_IMPORTED_MODULE_2__.PocketIcon, {\n                    size: size,\n                    round: round\n                }, void 0, false, {\n                    fileName: \"/Users/baybay/Documents/Projects/my_portfolio/web/components/SocialShare.jsx\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/baybay/Documents/Projects/my_portfolio/web/components/SocialShare.jsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_share__WEBPACK_IMPORTED_MODULE_2__.EmailShareButton, {\n                url: url,\n                subject: quote,\n                body: \"body\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_share__WEBPACK_IMPORTED_MODULE_2__.EmailIcon, {\n                    size: size,\n                    round: round\n                }, void 0, false, {\n                    fileName: \"/Users/baybay/Documents/Projects/my_portfolio/web/components/SocialShare.jsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/baybay/Documents/Projects/my_portfolio/web/components/SocialShare.jsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/baybay/Documents/Projects/my_portfolio/web/components/SocialShare.jsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SocialShare);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NvY2lhbFNoYXJlLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE2QjtBQWNWO0FBRW5CLE1BQU1hLGNBQWMsQ0FBQ0MsUUFBVTtJQUM3QixNQUFNLEVBQUVDLFVBQVMsRUFBRUMsSUFBRyxFQUFFQyxNQUFLLEVBQUVDLE9BQVEsS0FBSyxHQUFFQyxNQUFPLEdBQUUsRUFBRSxHQUFHQyxNQUFNLEdBQUdOO0lBRXJFLHFCQUNFLDhEQUFDTztRQUNDTixXQUFXZiwyQ0FBVUEsQ0FDbkIsK0VBQ0FlO1FBRUQsR0FBR0ssSUFBSTs7MEJBRVIsOERBQUNDO2dCQUFJTixXQUFVOzBCQUF3Qzs7Ozs7OzBCQUN2RCw4REFBQ007Z0JBQUlOLFdBQVU7Ozs7OzswQkFDZiw4REFBQ2QsMkRBQW1CQTtnQkFBQ2UsS0FBS0E7Z0JBQUtDLE9BQU9BOzBCQUNwQyw0RUFBQ2Ysb0RBQVlBO29CQUFDaUIsTUFBTUE7b0JBQU1ELE9BQU9BOzs7Ozs7Ozs7OzswQkFFbkMsOERBQUNmLDBEQUFrQkE7Z0JBQUNhLEtBQUtBO2dCQUFLTSxPQUFPTDswQkFDbkMsNEVBQUNiLG1EQUFXQTtvQkFBQ2UsTUFBTUE7b0JBQU1ELE9BQU9BOzs7Ozs7Ozs7OzswQkFFbEMsOERBQUNiLDJEQUFtQkE7Z0JBQUNXLEtBQUtBOzBCQUN4Qiw0RUFBQ1Ysb0RBQVlBO29CQUFDYSxNQUFNQTtvQkFBTUQsT0FBT0E7Ozs7Ozs7Ozs7OzBCQUVuQyw4REFBQ1QsMkRBQW1CQTtnQkFBQ08sS0FBS0E7Z0JBQUtNLE9BQU9MO2dCQUFPTSxXQUFVOzBCQUNyRCw0RUFBQ2Isb0RBQVlBO29CQUFDUyxNQUFNQTtvQkFBTUQsT0FBT0E7Ozs7Ozs7Ozs7OzBCQUVuQyw4REFBQ1AseURBQWlCQTtnQkFBQ0ssS0FBS0E7Z0JBQUtNLE9BQU87MEJBQ2xDLDRFQUFDVixrREFBVUE7b0JBQUNPLE1BQU1BO29CQUFNRCxPQUFPQTs7Ozs7Ozs7Ozs7MEJBRWpDLDhEQUFDWCx3REFBZ0JBO2dCQUFDUyxLQUFLQTtnQkFBS1EsU0FBU1A7Z0JBQU9RLE1BQUs7MEJBQy9DLDRFQUFDakIsaURBQVNBO29CQUFDVyxNQUFNQTtvQkFBTUQsT0FBT0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXRDO0FBRUEsaUVBQWVMLFdBQVdBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXRoZW1lLWVkZ2Vmb2xpby8uL2NvbXBvbmVudHMvU29jaWFsU2hhcmUuanN4PzUwYTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xzeCdcclxuaW1wb3J0IHtcclxuICBGYWNlYm9va1NoYXJlQnV0dG9uLFxyXG4gIEZhY2Vib29rSWNvbixcclxuICBUd2l0dGVyU2hhcmVCdXR0b24sXHJcbiAgVHdpdHRlckljb24sXHJcbiAgTGlua2VkaW5TaGFyZUJ1dHRvbixcclxuICBMaW5rZWRpbkljb24sXHJcbiAgRW1haWxTaGFyZUJ1dHRvbixcclxuICBFbWFpbEljb24sXHJcbiAgV2hhdHNhcHBTaGFyZUJ1dHRvbixcclxuICBXaGF0c2FwcEljb24sXHJcbiAgUG9ja2V0U2hhcmVCdXR0b24sXHJcbiAgUG9ja2V0SWNvbixcclxufSBmcm9tICduZXh0LXNoYXJlJ1xyXG5cclxuY29uc3QgU29jaWFsU2hhcmUgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGNsYXNzTmFtZSwgdXJsLCBxdW90ZSwgcm91bmQgPSBmYWxzZSwgc2l6ZSA9IDMyLCAuLi5yZXN0IH0gPSBwcm9wc1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXHJcbiAgICAgICAgJ2ZsZXggZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0yIHB0LTYgbWQ6ZmxleC1jb2wgbWQ6c3BhY2UteC0wIG1kOnNwYWNlLXktMicsXHJcbiAgICAgICAgY2xhc3NOYW1lXHJcbiAgICAgICl9XHJcbiAgICAgIHsuLi5yZXN0fVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBzbTpibG9jayBtZDptYi00IG1kOi1yb3RhdGUtOTBcIj5TaGFyaW5nPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIGgtcHggdy02IGJnLXdoaXRlIHNtOmJsb2NrIG1kOmgtNiBtZDp3LXB4XCI+PC9kaXY+XHJcbiAgICAgIDxGYWNlYm9va1NoYXJlQnV0dG9uIHVybD17dXJsfSBxdW90ZT17cXVvdGV9PlxyXG4gICAgICAgIDxGYWNlYm9va0ljb24gc2l6ZT17c2l6ZX0gcm91bmQ9e3JvdW5kfSAvPlxyXG4gICAgICA8L0ZhY2Vib29rU2hhcmVCdXR0b24+XHJcbiAgICAgIDxUd2l0dGVyU2hhcmVCdXR0b24gdXJsPXt1cmx9IHRpdGxlPXtxdW90ZX0+XHJcbiAgICAgICAgPFR3aXR0ZXJJY29uIHNpemU9e3NpemV9IHJvdW5kPXtyb3VuZH0gLz5cclxuICAgICAgPC9Ud2l0dGVyU2hhcmVCdXR0b24+XHJcbiAgICAgIDxMaW5rZWRpblNoYXJlQnV0dG9uIHVybD17dXJsfT5cclxuICAgICAgICA8TGlua2VkaW5JY29uIHNpemU9e3NpemV9IHJvdW5kPXtyb3VuZH0gLz5cclxuICAgICAgPC9MaW5rZWRpblNoYXJlQnV0dG9uPlxyXG4gICAgICA8V2hhdHNhcHBTaGFyZUJ1dHRvbiB1cmw9e3VybH0gdGl0bGU9e3F1b3RlfSBzZXBhcmF0b3I9XCI6OiBcIj5cclxuICAgICAgICA8V2hhdHNhcHBJY29uIHNpemU9e3NpemV9IHJvdW5kPXtyb3VuZH0gLz5cclxuICAgICAgPC9XaGF0c2FwcFNoYXJlQnV0dG9uPlxyXG4gICAgICA8UG9ja2V0U2hhcmVCdXR0b24gdXJsPXt1cmx9IHRpdGxlPXsnTmV4dCBTaGFyZSd9PlxyXG4gICAgICAgIDxQb2NrZXRJY29uIHNpemU9e3NpemV9IHJvdW5kPXtyb3VuZH0gLz5cclxuICAgICAgPC9Qb2NrZXRTaGFyZUJ1dHRvbj5cclxuICAgICAgPEVtYWlsU2hhcmVCdXR0b24gdXJsPXt1cmx9IHN1YmplY3Q9e3F1b3RlfSBib2R5PVwiYm9keVwiPlxyXG4gICAgICAgIDxFbWFpbEljb24gc2l6ZT17c2l6ZX0gcm91bmQ9e3JvdW5kfSAvPlxyXG4gICAgICA8L0VtYWlsU2hhcmVCdXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNvY2lhbFNoYXJlXHJcbiJdLCJuYW1lcyI6WyJjbGFzc05hbWVzIiwiRmFjZWJvb2tTaGFyZUJ1dHRvbiIsIkZhY2Vib29rSWNvbiIsIlR3aXR0ZXJTaGFyZUJ1dHRvbiIsIlR3aXR0ZXJJY29uIiwiTGlua2VkaW5TaGFyZUJ1dHRvbiIsIkxpbmtlZGluSWNvbiIsIkVtYWlsU2hhcmVCdXR0b24iLCJFbWFpbEljb24iLCJXaGF0c2FwcFNoYXJlQnV0dG9uIiwiV2hhdHNhcHBJY29uIiwiUG9ja2V0U2hhcmVCdXR0b24iLCJQb2NrZXRJY29uIiwiU29jaWFsU2hhcmUiLCJwcm9wcyIsImNsYXNzTmFtZSIsInVybCIsInF1b3RlIiwicm91bmQiLCJzaXplIiwicmVzdCIsImRpdiIsInRpdGxlIiwic2VwYXJhdG9yIiwic3ViamVjdCIsImJvZHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/SocialShare.jsx\n");

/***/ })

};
;