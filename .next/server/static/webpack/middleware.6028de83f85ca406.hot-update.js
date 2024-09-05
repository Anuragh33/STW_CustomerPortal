"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("middleware",{

/***/ "crypto":
/*!*************************************************************!*\
  !*** external " globalThis.__import_unsupported('crypto')" ***!
  \*************************************************************/
/***/ ((module) => {

module.exports =  globalThis.__import_unsupported('crypto');

/***/ }),

/***/ "(middleware)/./app/_lib/auth.js":
/*!**************************!*\
  !*** ./app/_lib/auth.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST),\n/* harmony export */   auth: () => (/* binding */ auth)\n/* harmony export */ });\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"(middleware)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/google */ \"(middleware)/./node_modules/next-auth/providers/google.js\");\n\n\n\nconst authConfig = {\n    providers: [\n        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n            cliendId: process.env.AUTH_GOOGLE_ID,\n            clientSecret: process.env.AUTH_GOOGLE_SECRET\n        })\n    ],\n    callbacks: {\n        authorized ({ auth, request }) {\n            return !!auth?.user;\n        }\n    },\n    pages: {\n        signIn: \"/login\"\n    }\n};\nconst { auth, handlers: { GET, POST } } = (0,next_auth__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(authConfig);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vYXBwL19saWIvYXV0aC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTZCO0FBQ0c7QUFDZTtBQUUvQyxNQUFNRyxhQUFhO0lBQ2pCQyxXQUFXO1FBQ1RGLHNFQUFNQSxDQUFDO1lBQ0xHLFVBQVVDLFFBQVFDLEdBQUcsQ0FBQ0MsY0FBYztZQUNwQ0MsY0FBY0gsUUFBUUMsR0FBRyxDQUFDRyxrQkFBa0I7UUFDOUM7S0FDRDtJQUNEQyxXQUFXO1FBQ1RDLFlBQVcsRUFBRUMsSUFBSSxFQUFFQyxPQUFPLEVBQUU7WUFDMUIsT0FBTyxDQUFDLENBQUNELE1BQU1FO1FBQ2pCO0lBQ0Y7SUFDQUMsT0FBTztRQUNMQyxRQUFRO0lBQ1Y7QUFDRjtBQUVPLE1BQU0sRUFDWEosSUFBSSxFQUNKSyxVQUFVLEVBQUVDLEdBQUcsRUFBRUMsSUFBSSxFQUFFLEVBQ3hCLEdBQUduQixxREFBUUEsQ0FBQ0UsWUFBVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvX2xpYi9hdXRoLmpzP2Q1ODYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2lnbiB9IGZyb20gJ2NyeXB0bydcbmltcG9ydCBOZXh0QXV0aCBmcm9tICduZXh0LWF1dGgnXG5pbXBvcnQgR29vZ2xlIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlJ1xuXG5jb25zdCBhdXRoQ29uZmlnID0ge1xuICBwcm92aWRlcnM6IFtcbiAgICBHb29nbGUoe1xuICAgICAgY2xpZW5kSWQ6IHByb2Nlc3MuZW52LkFVVEhfR09PR0xFX0lELFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5BVVRIX0dPT0dMRV9TRUNSRVQsXG4gICAgfSksXG4gIF0sXG4gIGNhbGxiYWNrczoge1xuICAgIGF1dGhvcml6ZWQoeyBhdXRoLCByZXF1ZXN0IH0pIHtcbiAgICAgIHJldHVybiAhIWF1dGg/LnVzZXJcbiAgICB9LFxuICB9LFxuICBwYWdlczoge1xuICAgIHNpZ25JbjogJy9sb2dpbicsXG4gIH0sXG59XG5cbmV4cG9ydCBjb25zdCB7XG4gIGF1dGgsXG4gIGhhbmRsZXJzOiB7IEdFVCwgUE9TVCB9LFxufSA9IE5leHRBdXRoKGF1dGhDb25maWcpXG4iXSwibmFtZXMiOlsic2lnbiIsIk5leHRBdXRoIiwiR29vZ2xlIiwiYXV0aENvbmZpZyIsInByb3ZpZGVycyIsImNsaWVuZElkIiwicHJvY2VzcyIsImVudiIsIkFVVEhfR09PR0xFX0lEIiwiY2xpZW50U2VjcmV0IiwiQVVUSF9HT09HTEVfU0VDUkVUIiwiY2FsbGJhY2tzIiwiYXV0aG9yaXplZCIsImF1dGgiLCJyZXF1ZXN0IiwidXNlciIsInBhZ2VzIiwic2lnbkluIiwiaGFuZGxlcnMiLCJHRVQiLCJQT1NUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./app/_lib/auth.js\n");

/***/ })

});