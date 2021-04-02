/*! For license information please see server.js.LICENSE.txt */
(()=>{var __webpack_modules__={"./server/devBundle.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webpack */ "webpack");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webpack-dev-middleware */ "webpack-dev-middleware");\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! webpack-hot-middleware */ "webpack-hot-middleware");\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _webpack_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../webpack.client */ "./webpack.client.js");\n/* harmony import */ var _webpack_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_webpack_client__WEBPACK_IMPORTED_MODULE_3__);\n\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (app) {\r\n    var compiler = webpack__WEBPACK_IMPORTED_MODULE_0___default()((_webpack_client__WEBPACK_IMPORTED_MODULE_3___default()));\r\n    var middleware = webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_1___default()(compiler, {\r\n        publicPath: (_webpack_client__WEBPACK_IMPORTED_MODULE_3___default().output.publicPath),\r\n    });\r\n    app.use(middleware);\r\n    app.use(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_2___default()(compiler));\r\n});\r\n\n\n//# sourceURL=webpack://zadanie-loty/./server/devBundle.ts?')},"./server/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ "fs");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ "path");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./template */ "./server/template.ts");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError("Generator is already executing.");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\n\r\n\r\n\r\n\r\nvar cwd = process.cwd();\r\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\r\nvar src = \'<script src="/build/bundle.js"><\/script>\';\r\nif (process.env.NODE_ENB === "production") {\r\n    src = "";\r\n    (function () { return __awaiter(void 0, void 0, void 0, function () {\r\n        var dir;\r\n        return __generator(this, function (_a) {\r\n            switch (_a.label) {\r\n                case 0: return [4 /*yield*/, fs__WEBPACK_IMPORTED_MODULE_1__.promises.readdir(path__WEBPACK_IMPORTED_MODULE_2___default().join(cwd, "build"))];\r\n                case 1:\r\n                    dir = _a.sent();\r\n                    dir.forEach(function (filename) {\r\n                        if (filename.includes("bundle")) {\r\n                            src += "\\n\\t<script src=\\"/build/" + filename + "\\"><\/script>";\r\n                        }\r\n                    });\r\n                    return [2 /*return*/];\r\n            }\r\n        });\r\n    }); })();\r\n}\r\nelse {\r\n    __webpack_require__(/*! ./devBundle */ "./server/devBundle.ts").default(app);\r\n}\r\napp.use("/build/", express__WEBPACK_IMPORTED_MODULE_0___default().static(path__WEBPACK_IMPORTED_MODULE_2___default().join(cwd, "build")));\r\napp.get("*", function (_, res) {\r\n    return res.send((0,_template__WEBPACK_IMPORTED_MODULE_3__.default)(src));\r\n});\r\nvar PORT = process.env.PORT || 3000;\r\napp.listen(PORT, function () { return console.log("Server listening at PORT " + PORT); });\r\n\n\n//# sourceURL=webpack://zadanie-loty/./server/index.ts?')},"./server/template.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (src) { return ("\\n  <!DOCTYPE HTML>\\n  <html lang=\\"eng\\">\\n    <head>\\n      <meta charset=\\"utf-8\\">\\n      <title>Paraglider Flights</title>\\n    </head>\\n    <body>\\n      <div id=\\"root\\"></div>\\n      " + src + "\\n    </body>\\n  </html>\\n"); });\r\n\n\n//# sourceURL=webpack://zadanie-loty/./server/template.ts?')},"./webpack.client.js":(module,__unused_webpack_exports,__webpack_require__)=>{eval('const path = __webpack_require__(/*! path */ "path");\r\nconst webpack = __webpack_require__(/*! webpack */ "webpack");\r\nconst cwd = process.cwd();\r\nconst TerserPlugin = __webpack_require__(/*! terser-webpack-plugin */ "terser-webpack-plugin");\r\n\r\nmodule.exports = {\r\n  name: "browser",\r\n  devtool: "eval-source-map",\r\n  mode: "development",\r\n  entry: [\r\n    "webpack-hot-middleware/client?reload=true",\r\n    path.join(cwd, "client", "index.tsx"),\r\n  ],\r\n  output: {\r\n    path: path.join(cwd, "build"),\r\n    filename: "bundle.js",\r\n    publicPath: "/build/",\r\n  },\r\n  module: {\r\n    rules: [\r\n      {\r\n        test: /\\.tsx?$/,\r\n        use: "ts-loader",\r\n        include: path.join(cwd, "client"),\r\n      },\r\n      {\r\n        test: /\\.css$/,\r\n        use: ["style-loader", "css-loader"],\r\n        include: path.join(cwd, "client"),\r\n      },\r\n    ],\r\n  },\r\n  optimization: {\r\n    emitOnErrors: false,\r\n    minimize: true,\r\n    minimizer: [new TerserPlugin()],\r\n  },\r\n  plugins: [new webpack.HotModuleReplacementPlugin()],\r\n  resolve: {\r\n    extensions: [".ts", ".tsx",".js"],\r\n    alias: {\r\n      "react-dom": "@hot-loader/react-dom",\r\n    },\r\n  },\r\n};\r\n\n\n//# sourceURL=webpack://zadanie-loty/./webpack.client.js?')},express:e=>{"use strict";e.exports=require("express")},fs:e=>{"use strict";e.exports=require("fs")},path:e=>{"use strict";e.exports=require("path")},"terser-webpack-plugin":e=>{"use strict";e.exports=require("terser-webpack-plugin")},webpack:e=>{"use strict";e.exports=require("webpack")},"webpack-dev-middleware":e=>{"use strict";e.exports=require("webpack-dev-middleware")},"webpack-hot-middleware":e=>{"use strict";e.exports=require("webpack-hot-middleware")}},__webpack_module_cache__={};function __webpack_require__(e){var _=__webpack_module_cache__[e];if(void 0!==_)return _.exports;var r=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](r,r.exports,__webpack_require__),r.exports}__webpack_require__.n=e=>{var _=e&&e.__esModule?()=>e.default:()=>e;return __webpack_require__.d(_,{a:_}),_},__webpack_require__.d=(e,_)=>{for(var r in _)__webpack_require__.o(_,r)&&!__webpack_require__.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:_[r]})},__webpack_require__.o=(e,_)=>Object.prototype.hasOwnProperty.call(e,_),__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var __webpack_exports__=__webpack_require__("./server/index.ts")})();