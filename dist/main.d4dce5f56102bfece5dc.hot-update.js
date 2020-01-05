webpackHotUpdate("main",{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./components/Components.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./components/Components.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _task_TaskList_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task/TaskList.vue */ \"./components/task/TaskList.vue\");\n/* harmony import */ var _message_Message_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message/Message.vue */ \"./components/message/Message.vue\");\n/* harmony import */ var _modal_Modal_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal/Modal.vue */ \"./components/modal/Modal.vue\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"Components\",\n  components: {\n    Modal: _modal_Modal_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    TaskList: _task_TaskList_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    Message: _message_Message_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  },\n  data: function data() {\n    return {\n      showModal: false\n    };\n  }\n});\n\n//# sourceURL=webpack:///./components/Components.vue?./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./components/Components.vue?vue&type=template&id=3786ebb1&scoped=true&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Components.vue?vue&type=template&id=3786ebb1&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { staticClass: \"components\" },\n    [\n      _c(\"TaskList\"),\n      _vm._v(\" \"),\n      _c(\"Message\", {\n        attrs: {\n          title: \"Hello World\",\n          body:\n            \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus mi, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum felis venenatis efficitur. Aenean ac eleifend lacus, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.\"\n        }\n      }),\n      _vm._v(\" \"),\n      _vm.showModal ? _c(\"Modal\") : _vm._e(),\n      _vm._v(\" \"),\n      _c(\n        \"button\",\n        {\n          staticClass: \"button\",\n          on: {\n            click: function($event) {\n              _vm.showModal = true\n            }\n          }\n        },\n        [_vm._v(\"Show modal\")]\n      )\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./components/Components.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

})