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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST),\n/* harmony export */   auth: () => (/* binding */ auth),\n/* harmony export */   signIn: () => (/* binding */ signIn),\n/* harmony export */   signOut: () => (/* binding */ signOut)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(middleware)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"(middleware)/./node_modules/next-auth/providers/google.js\");\n\n\nconst authConfig = {\n    providers: [\n        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            cliendId: process.env.AUTH_GOOGLE_ID,\n            clientSecret: process.env.AUTH_GOOGLE_SECRET\n        })\n    ],\n    callbacks: {\n        authorized ({ auth, request }) {\n            return !!auth?.user;\n        },\n        async signIn ({ user, account, profile }) {\n            try {} catch  {}\n        }\n    },\n    pages: {\n        signIn: \"/login\"\n    }\n};\nconst { auth, signIn, signOut, handlers: { GET, POST } } = (0,next_auth__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(authConfig);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vYXBwL19saWIvYXV0aC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWdDO0FBQ2U7QUFFL0MsTUFBTUUsYUFBYTtJQUNqQkMsV0FBVztRQUNURixzRUFBTUEsQ0FBQztZQUNMRyxVQUFVQyxRQUFRQyxHQUFHLENBQUNDLGNBQWM7WUFDcENDLGNBQWNILFFBQVFDLEdBQUcsQ0FBQ0csa0JBQWtCO1FBQzlDO0tBQ0Q7SUFDREMsV0FBVztRQUNUQyxZQUFXLEVBQUVDLElBQUksRUFBRUMsT0FBTyxFQUFFO1lBQzFCLE9BQU8sQ0FBQyxDQUFDRCxNQUFNRTtRQUNqQjtRQUNBLE1BQU1DLFFBQU8sRUFBRUQsSUFBSSxFQUFFRSxPQUFPLEVBQUVDLE9BQU8sRUFBRTtZQUNyQyxJQUFJLENBQ0osRUFBRSxPQUFNLENBQUM7UUFDWDtJQUNGO0lBQ0FDLE9BQU87UUFDTEgsUUFBUTtJQUNWO0FBQ0Y7QUFFTyxNQUFNLEVBQ1hILElBQUksRUFDSkcsTUFBTSxFQUNOSSxPQUFPLEVBQ1BDLFVBQVUsRUFBRUMsR0FBRyxFQUFFQyxJQUFJLEVBQUUsRUFDeEIsR0FBR3RCLHFEQUFRQSxDQUFDRSxZQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9fbGliL2F1dGguanM/ZDU4NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSAnbmV4dC1hdXRoJ1xuaW1wb3J0IEdvb2dsZSBmcm9tICduZXh0LWF1dGgvcHJvdmlkZXJzL2dvb2dsZSdcblxuY29uc3QgYXV0aENvbmZpZyA9IHtcbiAgcHJvdmlkZXJzOiBbXG4gICAgR29vZ2xlKHtcbiAgICAgIGNsaWVuZElkOiBwcm9jZXNzLmVudi5BVVRIX0dPT0dMRV9JRCxcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuQVVUSF9HT09HTEVfU0VDUkVULFxuICAgIH0pLFxuICBdLFxuICBjYWxsYmFja3M6IHtcbiAgICBhdXRob3JpemVkKHsgYXV0aCwgcmVxdWVzdCB9KSB7XG4gICAgICByZXR1cm4gISFhdXRoPy51c2VyXG4gICAgfSxcbiAgICBhc3luYyBzaWduSW4oeyB1c2VyLCBhY2NvdW50LCBwcm9maWxlIH0pIHtcbiAgICAgIHRyeSB7XG4gICAgICB9IGNhdGNoIHt9XG4gICAgfSxcbiAgfSxcbiAgcGFnZXM6IHtcbiAgICBzaWduSW46ICcvbG9naW4nLFxuICB9LFxufVxuXG5leHBvcnQgY29uc3Qge1xuICBhdXRoLFxuICBzaWduSW4sXG4gIHNpZ25PdXQsXG4gIGhhbmRsZXJzOiB7IEdFVCwgUE9TVCB9LFxufSA9IE5leHRBdXRoKGF1dGhDb25maWcpXG4iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJHb29nbGUiLCJhdXRoQ29uZmlnIiwicHJvdmlkZXJzIiwiY2xpZW5kSWQiLCJwcm9jZXNzIiwiZW52IiwiQVVUSF9HT09HTEVfSUQiLCJjbGllbnRTZWNyZXQiLCJBVVRIX0dPT0dMRV9TRUNSRVQiLCJjYWxsYmFja3MiLCJhdXRob3JpemVkIiwiYXV0aCIsInJlcXVlc3QiLCJ1c2VyIiwic2lnbkluIiwiYWNjb3VudCIsInByb2ZpbGUiLCJwYWdlcyIsInNpZ25PdXQiLCJoYW5kbGVycyIsIkdFVCIsIlBPU1QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./app/_lib/auth.js\n");

/***/ })

});