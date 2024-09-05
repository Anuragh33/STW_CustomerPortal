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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST),\n/* harmony export */   auth: () => (/* binding */ auth),\n/* harmony export */   signIn: () => (/* binding */ signIn),\n/* harmony export */   signOut: () => (/* binding */ signOut)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(middleware)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"(middleware)/./node_modules/next-auth/providers/google.js\");\n/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data-service */ \"(middleware)/./app/_lib/data-service.js\");\n\n\n\nconst authConfig = {\n    providers: [\n        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            cliendId: process.env.AUTH_GOOGLE_ID,\n            clientSecret: process.env.AUTH_GOOGLE_SECRET\n        })\n    ],\n    callbacks: {\n        authorized ({ auth, request }) {\n            return !!auth?.user;\n        },\n        async signIn ({ user, account, profile }) {\n            try {\n                const existingUser = await (0,_data_service__WEBPACK_IMPORTED_MODULE_2__.getGuest)(user.email);\n                !existingUser ? await (0,_data_service__WEBPACK_IMPORTED_MODULE_2__.createGuest)({\n                    email: user.email,\n                    fullName: user.name\n                }) : null;\n                return true;\n            } catch  {\n                return false;\n            }\n        },\n        async session ({ session, user }) {\n            const guest = session.user.email;\n        }\n    },\n    pages: {\n        signIn: \"/login\"\n    }\n};\nconst { auth, signIn, signOut, handlers: { GET, POST } } = (0,next_auth__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(authConfig);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vYXBwL19saWIvYXV0aC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFnQztBQUNlO0FBQ087QUFFdEQsTUFBTUksYUFBYTtJQUNqQkMsV0FBVztRQUNUSixzRUFBTUEsQ0FBQztZQUNMSyxVQUFVQyxRQUFRQyxHQUFHLENBQUNDLGNBQWM7WUFDcENDLGNBQWNILFFBQVFDLEdBQUcsQ0FBQ0csa0JBQWtCO1FBQzlDO0tBQ0Q7SUFDREMsV0FBVztRQUNUQyxZQUFXLEVBQUVDLElBQUksRUFBRUMsT0FBTyxFQUFFO1lBQzFCLE9BQU8sQ0FBQyxDQUFDRCxNQUFNRTtRQUNqQjtRQUNBLE1BQU1DLFFBQU8sRUFBRUQsSUFBSSxFQUFFRSxPQUFPLEVBQUVDLE9BQU8sRUFBRTtZQUNyQyxJQUFJO2dCQUNGLE1BQU1DLGVBQWUsTUFBTWpCLHVEQUFRQSxDQUFDYSxLQUFLSyxLQUFLO2dCQUU5QyxDQUFDRCxlQUNHLE1BQU1sQiwwREFBV0EsQ0FBQztvQkFBRW1CLE9BQU9MLEtBQUtLLEtBQUs7b0JBQUVDLFVBQVVOLEtBQUtPLElBQUk7Z0JBQUMsS0FDM0Q7Z0JBRUosT0FBTztZQUNULEVBQUUsT0FBTTtnQkFDTixPQUFPO1lBQ1Q7UUFDRjtRQUNBLE1BQU1DLFNBQVEsRUFBRUEsT0FBTyxFQUFFUixJQUFJLEVBQUU7WUFDN0IsTUFBTVMsUUFBUUQsUUFBUVIsSUFBSSxDQUFDSyxLQUFLO1FBQ2xDO0lBQ0Y7SUFDQUssT0FBTztRQUNMVCxRQUFRO0lBQ1Y7QUFDRjtBQUVPLE1BQU0sRUFDWEgsSUFBSSxFQUNKRyxNQUFNLEVBQ05VLE9BQU8sRUFDUEMsVUFBVSxFQUFFQyxHQUFHLEVBQUVDLElBQUksRUFBRSxFQUN4QixHQUFHOUIscURBQVFBLENBQUNJLFlBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL19saWIvYXV0aC5qcz9kNTg2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tICduZXh0LWF1dGgnXG5pbXBvcnQgR29vZ2xlIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlJ1xuaW1wb3J0IHsgY3JlYXRlR3Vlc3QsIGdldEd1ZXN0IH0gZnJvbSAnLi9kYXRhLXNlcnZpY2UnXG5cbmNvbnN0IGF1dGhDb25maWcgPSB7XG4gIHByb3ZpZGVyczogW1xuICAgIEdvb2dsZSh7XG4gICAgICBjbGllbmRJZDogcHJvY2Vzcy5lbnYuQVVUSF9HT09HTEVfSUQsXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkFVVEhfR09PR0xFX1NFQ1JFVCxcbiAgICB9KSxcbiAgXSxcbiAgY2FsbGJhY2tzOiB7XG4gICAgYXV0aG9yaXplZCh7IGF1dGgsIHJlcXVlc3QgfSkge1xuICAgICAgcmV0dXJuICEhYXV0aD8udXNlclxuICAgIH0sXG4gICAgYXN5bmMgc2lnbkluKHsgdXNlciwgYWNjb3VudCwgcHJvZmlsZSB9KSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBleGlzdGluZ1VzZXIgPSBhd2FpdCBnZXRHdWVzdCh1c2VyLmVtYWlsKVxuXG4gICAgICAgICFleGlzdGluZ1VzZXJcbiAgICAgICAgICA/IGF3YWl0IGNyZWF0ZUd1ZXN0KHsgZW1haWw6IHVzZXIuZW1haWwsIGZ1bGxOYW1lOiB1c2VyLm5hbWUgfSlcbiAgICAgICAgICA6IG51bGxcblxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH0sXG4gICAgYXN5bmMgc2Vzc2lvbih7IHNlc3Npb24sIHVzZXIgfSkge1xuICAgICAgY29uc3QgZ3Vlc3QgPSBzZXNzaW9uLnVzZXIuZW1haWxcbiAgICB9LFxuICB9LFxuICBwYWdlczoge1xuICAgIHNpZ25JbjogJy9sb2dpbicsXG4gIH0sXG59XG5cbmV4cG9ydCBjb25zdCB7XG4gIGF1dGgsXG4gIHNpZ25JbixcbiAgc2lnbk91dCxcbiAgaGFuZGxlcnM6IHsgR0VULCBQT1NUIH0sXG59ID0gTmV4dEF1dGgoYXV0aENvbmZpZylcbiJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIkdvb2dsZSIsImNyZWF0ZUd1ZXN0IiwiZ2V0R3Vlc3QiLCJhdXRoQ29uZmlnIiwicHJvdmlkZXJzIiwiY2xpZW5kSWQiLCJwcm9jZXNzIiwiZW52IiwiQVVUSF9HT09HTEVfSUQiLCJjbGllbnRTZWNyZXQiLCJBVVRIX0dPT0dMRV9TRUNSRVQiLCJjYWxsYmFja3MiLCJhdXRob3JpemVkIiwiYXV0aCIsInJlcXVlc3QiLCJ1c2VyIiwic2lnbkluIiwiYWNjb3VudCIsInByb2ZpbGUiLCJleGlzdGluZ1VzZXIiLCJlbWFpbCIsImZ1bGxOYW1lIiwibmFtZSIsInNlc3Npb24iLCJndWVzdCIsInBhZ2VzIiwic2lnbk91dCIsImhhbmRsZXJzIiwiR0VUIiwiUE9TVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./app/_lib/auth.js\n");

/***/ })

});