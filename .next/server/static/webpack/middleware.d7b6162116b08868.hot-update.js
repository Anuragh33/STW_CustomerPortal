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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST),\n/* harmony export */   auth: () => (/* binding */ auth)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(middleware)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"(middleware)/./node_modules/next-auth/providers/google.js\");\n\n\nconst authConfig = {\n    providers: [\n        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            cliendId: process.env.AUTH_GOOGLE_ID,\n            clientSecret: process.env.AUTH_GOOGLE_SECRET\n        })\n    ],\n    callbacks: {\n        authorized ({ auth, request }) {\n            return !!auth?.user;\n        }\n    },\n    pages: {\n        signIn: \"/login\"\n    }\n};\nconst { auth, handlers: { GET, POST } } = (0,next_auth__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(authConfig);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vYXBwL19saWIvYXV0aC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFnQztBQUNlO0FBRS9DLE1BQU1FLGFBQWE7SUFDakJDLFdBQVc7UUFDVEYsc0VBQU1BLENBQUM7WUFDTEcsVUFBVUMsUUFBUUMsR0FBRyxDQUFDQyxjQUFjO1lBQ3BDQyxjQUFjSCxRQUFRQyxHQUFHLENBQUNHLGtCQUFrQjtRQUM5QztLQUNEO0lBQ0RDLFdBQVc7UUFDVEMsWUFBVyxFQUFFQyxJQUFJLEVBQUVDLE9BQU8sRUFBRTtZQUMxQixPQUFPLENBQUMsQ0FBQ0QsTUFBTUU7UUFDakI7SUFDRjtJQUNBQyxPQUFPO1FBQ0xDLFFBQVE7SUFDVjtBQUNGO0FBRU8sTUFBTSxFQUNYSixJQUFJLEVBQ0pLLFVBQVUsRUFBRUMsR0FBRyxFQUFFQyxJQUFJLEVBQUUsRUFDeEIsR0FBR25CLHFEQUFRQSxDQUFDRSxZQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9fbGliL2F1dGguanM/ZDU4NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSAnbmV4dC1hdXRoJ1xuaW1wb3J0IEdvb2dsZSBmcm9tICduZXh0LWF1dGgvcHJvdmlkZXJzL2dvb2dsZSdcblxuY29uc3QgYXV0aENvbmZpZyA9IHtcbiAgcHJvdmlkZXJzOiBbXG4gICAgR29vZ2xlKHtcbiAgICAgIGNsaWVuZElkOiBwcm9jZXNzLmVudi5BVVRIX0dPT0dMRV9JRCxcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuQVVUSF9HT09HTEVfU0VDUkVULFxuICAgIH0pLFxuICBdLFxuICBjYWxsYmFja3M6IHtcbiAgICBhdXRob3JpemVkKHsgYXV0aCwgcmVxdWVzdCB9KSB7XG4gICAgICByZXR1cm4gISFhdXRoPy51c2VyXG4gICAgfSxcbiAgfSxcbiAgcGFnZXM6IHtcbiAgICBzaWduSW46ICcvbG9naW4nLFxuICB9LFxufVxuXG5leHBvcnQgY29uc3Qge1xuICBhdXRoLFxuICBoYW5kbGVyczogeyBHRVQsIFBPU1QgfSxcbn0gPSBOZXh0QXV0aChhdXRoQ29uZmlnKVxuIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwiR29vZ2xlIiwiYXV0aENvbmZpZyIsInByb3ZpZGVycyIsImNsaWVuZElkIiwicHJvY2VzcyIsImVudiIsIkFVVEhfR09PR0xFX0lEIiwiY2xpZW50U2VjcmV0IiwiQVVUSF9HT09HTEVfU0VDUkVUIiwiY2FsbGJhY2tzIiwiYXV0aG9yaXplZCIsImF1dGgiLCJyZXF1ZXN0IiwidXNlciIsInBhZ2VzIiwic2lnbkluIiwiaGFuZGxlcnMiLCJHRVQiLCJQT1NUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./app/_lib/auth.js\n");

/***/ })

});