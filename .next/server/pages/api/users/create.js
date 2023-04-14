"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/users/create";
exports.ids = ["pages/api/users/create"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./libs/server/db.ts":
/*!***************************!*\
  !*** ./libs/server/db.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst db = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) global.db = db;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (db);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWJzL3NlcnZlci9kYi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBOEM7QUFNOUMsTUFBTUMsRUFBRSxHQUFHLElBQUlELHdEQUFZLEVBQUU7QUFFN0IsSUFBSUUsSUFBc0MsRUFBRUMsTUFBTSxDQUFDRixFQUFFLEdBQUdBLEVBQUUsQ0FBQztBQUUzRCxpRUFBZUEsRUFBRSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLXByaXNtYS10eXBlc2NyaXB0LXRhaWx3aW5kLWJsdWVwcmludC8uL2xpYnMvc2VydmVyL2RiLnRzP2NiYTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgdmFyIGRiOiBQcmlzbWFDbGllbnQgfCB1bmRlZmluZWQ7XG59XG5cbmNvbnN0IGRiID0gbmV3IFByaXNtYUNsaWVudCgpO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikgZ2xvYmFsLmRiID0gZGI7XG5cbmV4cG9ydCBkZWZhdWx0IGRiO1xuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsImRiIiwicHJvY2VzcyIsImdsb2JhbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./libs/server/db.ts\n");

/***/ }),

/***/ "(api)/./libs/server/withHandler.ts":
/*!************************************!*\
  !*** ./libs/server/withHandler.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ withHandler)\n/* harmony export */ });\nfunction withHandler({ methods , handler , isPrivate =false  }) {\n    // nextJS가 실행해야 할 것을 return 해야 한다.\n    return async function(req, res) {\n        // (이 withHandler를 export defualt하는) function을 bad request로부터 보호함\n        if (req.method && !methods.includes(req.method)) {\n            return res.status(405).end();\n        }\n        if (isPrivate && !req.session.user) {\n            return res.status(401).json({\n                ok: false,\n                error: \"\\uB85C\\uADF8\\uC778\\uC774 \\uD544\\uC694\\uD569\\uB2C8\\uB2E4.\"\n            });\n        }\n        try {\n            await handler(req, res);\n        } catch (error) {\n            // server error 발생\n            console.log(error);\n            return res.status(500).json({\n                error\n            });\n        }\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWJzL3NlcnZlci93aXRoSGFuZGxlci50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBZWUsU0FBU0EsV0FBVyxDQUFDLEVBQ2xDQyxPQUFPLEdBQ1BDLE9BQU8sR0FDUEMsU0FBUyxFQUFHLEtBQUssR0FDTixFQUFFO0lBQ2I7SUFDd0IsT0FBakIsZUFBZ0JDLEdBQW1CLEVBQUVDLEdBQW9CLEVBQUU7UUFDaEU7UUFDc0IsSUFBbEJELEdBQUcsQ0FBQ0UsTUFBTSxJQUFLLENBQUNMLE9BQU8sQ0FBQ00sUUFBUSxDQUFDSCxHQUFHLENBQUNFLE1BQU0sQ0FBUSxFQUFFO1lBQ3ZELE9BQU9ELEdBQUcsQ0FBQ0csTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxHQUFHLEVBQUUsQ0FBQztTQUM5QjtRQUVELElBQUlOLFNBQVMsSUFBSSxDQUFDQyxHQUFHLENBQUNNLE9BQU8sQ0FBQ0MsSUFBSSxFQUFFO1lBQ2xDLE9BQU9OLEdBQUcsQ0FBQ0csTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDSSxJQUFJLENBQUM7Z0JBQUVDLEVBQUUsRUFBRSxLQUFLO2dCQUFFQyxLQUFLLEVBQUUsMERBQWE7YUFBb0IsQ0FBQyxDQUFDO1NBQ2xFO1FBRW5CLElBQUk7WUFDRixNQUFNWixPQUFPLENBQUNFLEdBQUcsRUFBRUMsR0FBRyxDQUFDLENBQUM7U0FDekIsQ0FBQyxPQUFPUyxLQUFLLEVBQUU7WUFDZDtZQUNBQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsS0FBSyxDQUFDLENBQUM7WUFDbkIsT0FBT1QsR0FBRyxDQUFDRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNJLElBQUksQ0FBQztnQkFBRUUsS0FBSzthQUFFLENBQUMsQ0FBQztTQUN4QztLQUNGLENBQUM7Q0FDSCIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1wcmlzbWEtdHlwZXNjcmlwdC10YWlsd2luZC1ibHVlcHJpbnQvLi9saWJzL3NlcnZlci93aXRoSGFuZGxlci50cz84ZWY1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJlc3BvbnNlVHlwZSB7XG4gIG9rOiBib29sZWFuO1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbnR5cGUgbWV0aG9kID0gIFwiR0VUXCIgfCBcIlBPU1RcIiB8IFwiREVMRVRFXCI7XG5cbmludGVyZmFjZSBDb25maWdUeXBlIHtcbiAgbWV0aG9kczogbWV0aG9kW107XG4gIGhhbmRsZXI6IChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4gdm9pZDtcbiAgaXNQcml2YXRlPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aEhhbmRsZXIoe1xuICBtZXRob2RzLFxuICBoYW5kbGVyLFxuICBpc1ByaXZhdGUgPSBmYWxzZSxcbn06IENvbmZpZ1R5cGUpIHtcbiAgLy8gbmV4dEpT6rCAIOyLpO2Wie2VtOyVvCDtlaAg6rKD7J2EIHJldHVybiDtlbTslbwg7ZWc64ukLlxuICByZXR1cm4gYXN5bmMgZnVuY3Rpb24gKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSB7XG4gICAgLy8gKOydtCB3aXRoSGFuZGxlcuulvCBleHBvcnQgZGVmdWFsdO2VmOuKlCkgZnVuY3Rpb27snYQgYmFkIHJlcXVlc3TroZzrtoDthLAg67O07Zi47ZWoXG4gICAgaWYgKHJlcS5tZXRob2QgJiYgICFtZXRob2RzLmluY2x1ZGVzKHJlcS5tZXRob2QgYXMgYW55KSkge1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA1KS5lbmQoKTtcbiAgICB9XG5cbiAgICBpZiAoaXNQcml2YXRlICYmICFyZXEuc2Vzc2lvbi51c2VyKSB7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDEpLmpzb24oeyBvazogZmFsc2UsIGVycm9yOiBcIuuhnOq3uOyduOydtCDtlYTsmpTtlanri4jri6QuXCIgfSk7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGhhbmRsZXIocmVxLCByZXMpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvLyBzZXJ2ZXIgZXJyb3Ig67Cc7IOdXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvciB9KTtcbiAgICB9XG4gIH07XG59XG4iXSwibmFtZXMiOlsid2l0aEhhbmRsZXIiLCJtZXRob2RzIiwiaGFuZGxlciIsImlzUHJpdmF0ZSIsInJlcSIsInJlcyIsIm1ldGhvZCIsImluY2x1ZGVzIiwic3RhdHVzIiwiZW5kIiwic2Vzc2lvbiIsInVzZXIiLCJqc29uIiwib2siLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./libs/server/withHandler.ts\n");

/***/ }),

/***/ "(api)/./pages/api/users/create.tsx":
/*!************************************!*\
  !*** ./pages/api/users/create.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _libs_server_withHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../libs/server/withHandler */ \"(api)/./libs/server/withHandler.ts\");\n/* harmony import */ var _libs_server_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../libs/server/db */ \"(api)/./libs/server/db.ts\");\n\n\nasync function handler(req, res) {\n    let ok = true;\n    const { email , name  } = req.body;\n    if (!email) return res.status(400).json({\n        ok: false\n    });\n    // check user\n    const checkUser = await _libs_server_db__WEBPACK_IMPORTED_MODULE_1__[\"default\"].user.findUnique({\n        where: {\n            email\n        }\n    });\n    if (checkUser == null || checkUser.email !== email) {\n        // create user\n        await _libs_server_db__WEBPACK_IMPORTED_MODULE_1__[\"default\"].user.create({\n            data: {\n                email: email,\n                name: Boolean(name) ? name : \"Anonymous\"\n            }\n        });\n        return res.status(200).json({\n            ok: ok\n        });\n    }\n    return res.status(202).json({\n        ok: false,\n        error: \"\\uC874\\uC7AC\\uD558\\uB294 \\uC774\\uBA54\\uC77C\\uC785\\uB2C8\\uB2E4.\"\n    });\n}\n// nextjs에서 api route를 만들 때는 그 function을 return해야 한다.\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_libs_server_withHandler__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    methods: [\n        \"POST\"\n    ],\n    handler\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlcnMvY3JlYXRlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDNkU7QUFDaEM7QUFFN0MsZUFBZUUsT0FBTyxDQUNwQkMsR0FBbUIsRUFDbkJDLEdBQWtDLEVBQ2xDO0lBQ0EsSUFBSUMsRUFBRSxHQUFHLElBQUk7SUFDYixNQUFNLEVBQUVDLEtBQUssR0FBRUMsSUFBSSxHQUFFLEdBQUdKLEdBQUcsQ0FBQ0ssSUFBSTtJQUVoQyxJQUFJLENBQUNGLEtBQUssRUFBRSxPQUFPRixHQUFHLENBQUNLLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1FBQUVMLEVBQUUsRUFBRSxLQUFLO0tBQUUsQ0FBQyxDQUFDO0lBRXZELGFBQWE7SUFDYixNQUFNTSxTQUFTLEdBQUcsTUFBTVYsdUVBQXNCLENBQUM7UUFDN0NhLEtBQUssRUFBRTtZQUNMUixLQUFLO1NBQ047S0FDRixDQUFDO0lBRUYsSUFBSUssU0FBUyxJQUFJLElBQUksSUFBSUEsU0FBUyxDQUFDTCxLQUFLLEtBQUtBLEtBQUssRUFBRTtRQUNsRCxjQUFjO1FBQ2QsTUFBTUwsbUVBQWtCLENBQUM7WUFDdkJlLElBQUksRUFBRTtnQkFDSlYsS0FBSyxFQUFFQSxLQUFLO2dCQUNaQyxJQUFJLEVBQUVVLE9BQU8sQ0FBQ1YsSUFBSSxDQUFDLEdBQUdBLElBQUksR0FBRSxXQUFXO2FBQ3hDO1NBQ0YsQ0FBQyxDQUFDO1FBRUgsT0FBT0gsR0FBRyxDQUFDSyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUMxQkwsRUFBRSxFQUFFQSxFQUFFO1NBQ1AsQ0FBQyxDQUFDO0tBQ0o7SUFDRCxPQUFPRCxHQUFHLENBQUNLLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1FBQzFCTCxFQUFFLEVBQUUsS0FBSztRQUNUYSxLQUFLLEVBQUUsZ0VBQWM7S0FDRixDQUFuQjtDQUNIO0FBRUQ7QUFDQSxpRUFBZWxCLG9FQUFXLENBQUM7SUFDekJtQixPQUFPLEVBQUU7UUFBQyxNQUFNO0tBQUM7SUFDakJqQixPQUFPO0NBQ1IsQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLXByaXNtYS10eXBlc2NyaXB0LXRhaWx3aW5kLWJsdWVwcmludC8uL3BhZ2VzL2FwaS91c2Vycy9jcmVhdGUudHN4PzVjYjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgd2l0aEhhbmRsZXIsIHsgUmVzcG9uc2VUeXBlIH0gZnJvbSBcIi4uLy4uLy4uL2xpYnMvc2VydmVyL3dpdGhIYW5kbGVyXCI7XG5pbXBvcnQgY2xpZW50IGZyb20gXCIuLi8uLi8uLi9saWJzL3NlcnZlci9kYlwiO1xuXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVyKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxSZXNwb25zZVR5cGU+XG4pIHtcbiAgbGV0IG9rID0gdHJ1ZTtcbiAgY29uc3QgeyBlbWFpbCwgbmFtZSB9ID0gcmVxLmJvZHk7XG5cbiAgaWYgKCFlbWFpbCkgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgb2s6IGZhbHNlIH0pO1xuXG4gIC8vIGNoZWNrIHVzZXJcbiAgY29uc3QgY2hlY2tVc2VyID0gYXdhaXQgY2xpZW50LnVzZXIuZmluZFVuaXF1ZSh7XG4gICAgd2hlcmU6IHtcbiAgICAgIGVtYWlsLFxuICAgIH0sXG4gIH0pO1xuXG4gIGlmIChjaGVja1VzZXIgPT0gbnVsbCB8fCBjaGVja1VzZXIuZW1haWwgIT09IGVtYWlsKSB7XG4gICAgLy8gY3JlYXRlIHVzZXJcbiAgICBhd2FpdCBjbGllbnQudXNlci5jcmVhdGUoe1xuICAgICAgZGF0YToge1xuICAgICAgICBlbWFpbDogZW1haWwsXG4gICAgICAgIG5hbWU6IEJvb2xlYW4obmFtZSkgPyBuYW1lIDpcIkFub255bW91c1wiLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgICBvazogb2ssXG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHJlcy5zdGF0dXMoMjAyKS5qc29uKHtcbiAgICBvazogZmFsc2UsXG4gICAgZXJyb3I6IFwi7KG07J6s7ZWY64qUIOydtOuplOydvOyeheuLiOuLpC5cIlxuICB9KVxufVxuXG4vLyBuZXh0anPsl5DshJwgYXBpIHJvdXRl66W8IOunjOuTpCDrlYzripQg6re4IGZ1bmN0aW9u7J2EIHJldHVybu2VtOyVvCDtlZzri6QuXG5leHBvcnQgZGVmYXVsdCB3aXRoSGFuZGxlcih7XG4gIG1ldGhvZHM6IFtcIlBPU1RcIl0sXG4gIGhhbmRsZXIsXG59KTtcbiJdLCJuYW1lcyI6WyJ3aXRoSGFuZGxlciIsImNsaWVudCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJvayIsImVtYWlsIiwibmFtZSIsImJvZHkiLCJzdGF0dXMiLCJqc29uIiwiY2hlY2tVc2VyIiwidXNlciIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsImNyZWF0ZSIsImRhdGEiLCJCb29sZWFuIiwiZXJyb3IiLCJtZXRob2RzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/users/create.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/users/create.tsx"));
module.exports = __webpack_exports__;

})();