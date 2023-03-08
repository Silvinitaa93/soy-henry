/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./browser/app.js":
/*!************************!*\
  !*** ./browser/app.js ***!
  \************************/
/***/ (() => {

eval("(function () {\n\n  var whiteboard = window.whiteboard;\n  var socket = window.io(window.location.origin);\n\n  socket.on('connect', function () {\n    console.log('Connected!');\n  });\n\n  socket.on('load', function (strokes) {\n\n    strokes.forEach(function (stroke) {\n      var start = stroke.start;\n      var end = stroke.end;\n      var color = stroke.color;\n      whiteboard.draw(start, end, color, false);\n    });\n\n  });\n\n  socket.on('draw', function (start, end, color) {\n    whiteboard.draw(start, end, color, false);\n  });\n\n  whiteboard.on('draw', function (start, end, color) {\n    socket.emit('draw', start, end, color);\n  });\n\n})();\n\n\n//# sourceURL=webpack://05-bundlers/./browser/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./browser/app.js"]();
/******/ 	
/******/ })()
;