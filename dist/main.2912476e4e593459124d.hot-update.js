webpackHotUpdate("main",{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./components/Computed.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./components/Computed.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"Computed\",\n  data: function data() {\n    return {\n      message: \"hello World\",\n      tasks: [{\n        description: 'go to the store',\n        completed: false\n      }, {\n        description: 'Marketing Pro',\n        completed: false\n      }, {\n        description: 'Make a Donation',\n        completed: false\n      }, {\n        description: 'Clear the market line',\n        completed: false\n      }, {\n        description: 'Make everything available',\n        completed: false\n      }]\n    };\n  },\n  computed: {\n    reversedMessage: function reversedMessage() {\n      return this.message.split('').reverse().join('');\n    }\n  }\n});\n\n//# sourceURL=webpack:///./components/Computed.vue?./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./components/Computed.vue?vue&type=template&id=382d78e8&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Computed.vue?vue&type=template&id=382d78e8&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { staticClass: \"computed\" },\n    [\n      _c(\"h1\", [_vm._v(\"Example 1\")]),\n      _vm._v(\" \"),\n      _c(\"h3\", [_vm._v(_vm._s(_vm.reversedMessage))]),\n      _vm._v(\" \"),\n      _c(\"h1\", [_vm._v(\"Example 2\")]),\n      _vm._v(\" \"),\n      _vm._m(0),\n      _vm._v(\" \"),\n      _vm._l(_vm.tasks, function(task) {\n        return _c(\"ul\", [_c(\"li\", [_vm._v(_vm._s(task.description))])])\n      })\n    ],\n    2\n  )\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"h5\", [_c(\"b\", [_vm._v(\"All Tasks\")])])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./components/Computed.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

})