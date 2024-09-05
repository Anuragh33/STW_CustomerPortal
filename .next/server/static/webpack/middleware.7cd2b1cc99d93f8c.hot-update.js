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

/***/ "(middleware)/./app/_lib/auth.js":
/*!**************************!*\
  !*** ./app/_lib/auth.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST),\n/* harmony export */   auth: () => (/* binding */ auth),\n/* harmony export */   signIn: () => (/* binding */ signIn),\n/* harmony export */   signOut: () => (/* binding */ signOut)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(middleware)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"(middleware)/./node_modules/next-auth/providers/google.js\");\n\n\nconst authConfig = {\n    providers: [\n        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            cliendId: process.env.AUTH_GOOGLE_ID,\n            clientSecret: process.env.AUTH_GOOGLE_SECRET\n        })\n    ],\n    callbacks: {\n        authorized ({ auth, request }) {\n            return !!auth?.user;\n        },\n        signIn () {}\n    },\n    pages: {\n        signIn: \"/login\"\n    }\n};\nconst { auth, signIn, signOut, handlers: { GET, POST } } = (0,next_auth__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(authConfig);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vYXBwL19saWIvYXV0aC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWdDO0FBQ2U7QUFFL0MsTUFBTUUsYUFBYTtJQUNqQkMsV0FBVztRQUNURixzRUFBTUEsQ0FBQztZQUNMRyxVQUFVQyxRQUFRQyxHQUFHLENBQUNDLGNBQWM7WUFDcENDLGNBQWNILFFBQVFDLEdBQUcsQ0FBQ0csa0JBQWtCO1FBQzlDO0tBQ0Q7SUFDREMsV0FBVztRQUNUQyxZQUFXLEVBQUVDLElBQUksRUFBRUMsT0FBTyxFQUFFO1lBQzFCLE9BQU8sQ0FBQyxDQUFDRCxNQUFNRTtRQUNqQjtRQUNBQyxXQUFVO0lBQ1o7SUFDQUMsT0FBTztRQUNMRCxRQUFRO0lBQ1Y7QUFDRjtBQUVPLE1BQU0sRUFDWEgsSUFBSSxFQUNKRyxNQUFNLEVBQ05FLE9BQU8sRUFDUEMsVUFBVSxFQUFFQyxHQUFHLEVBQUVDLElBQUksRUFBRSxFQUN4QixHQUFHcEIscURBQVFBLENBQUNFLFlBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL19saWIvYXV0aC5qcz9kNTg2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tICduZXh0LWF1dGgnXG5pbXBvcnQgR29vZ2xlIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlJ1xuXG5jb25zdCBhdXRoQ29uZmlnID0ge1xuICBwcm92aWRlcnM6IFtcbiAgICBHb29nbGUoe1xuICAgICAgY2xpZW5kSWQ6IHByb2Nlc3MuZW52LkFVVEhfR09PR0xFX0lELFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5BVVRIX0dPT0dMRV9TRUNSRVQsXG4gICAgfSksXG4gIF0sXG4gIGNhbGxiYWNrczoge1xuICAgIGF1dGhvcml6ZWQoeyBhdXRoLCByZXF1ZXN0IH0pIHtcbiAgICAgIHJldHVybiAhIWF1dGg/LnVzZXJcbiAgICB9LFxuICAgIHNpZ25JbigpIHt9LFxuICB9LFxuICBwYWdlczoge1xuICAgIHNpZ25JbjogJy9sb2dpbicsXG4gIH0sXG59XG5cbmV4cG9ydCBjb25zdCB7XG4gIGF1dGgsXG4gIHNpZ25JbixcbiAgc2lnbk91dCxcbiAgaGFuZGxlcnM6IHsgR0VULCBQT1NUIH0sXG59ID0gTmV4dEF1dGgoYXV0aENvbmZpZylcbiJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIkdvb2dsZSIsImF1dGhDb25maWciLCJwcm92aWRlcnMiLCJjbGllbmRJZCIsInByb2Nlc3MiLCJlbnYiLCJBVVRIX0dPT0dMRV9JRCIsImNsaWVudFNlY3JldCIsIkFVVEhfR09PR0xFX1NFQ1JFVCIsImNhbGxiYWNrcyIsImF1dGhvcml6ZWQiLCJhdXRoIiwicmVxdWVzdCIsInVzZXIiLCJzaWduSW4iLCJwYWdlcyIsInNpZ25PdXQiLCJoYW5kbGVycyIsIkdFVCIsIlBPU1QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./app/_lib/auth.js\n");

/***/ })

});