webpackHotUpdate("main",{

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_sass_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/sass/styles.scss */ \"./src/sass/styles.scss\");\n/* harmony import */ var _src_sass_styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_sass_styles_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue */ \"./App.vue\");\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-router */ \"./node_modules/vue-router/dist/vue-router.esm.js\");\n/* harmony import */ var _components_Main_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Main.vue */ \"./components/Main.vue\");\n/* harmony import */ var _components_About_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/About.vue */ \"./components/About.vue\");\n/* harmony import */ var _components_ErrorPage_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/ErrorPage.vue */ \"./components/ErrorPage.vue\");\n/* harmony import */ var _components_Lists_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Lists.vue */ \"./components/Lists.vue\");\n/* harmony import */ var _components_ClassBinding_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/ClassBinding.vue */ \"./components/ClassBinding.vue\");\n/* harmony import */ var _components_Computed_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/Computed.vue */ \"./components/Computed.vue\");\n/* harmony import */ var _components_Components_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/Components.vue */ \"./components/Components.vue\");\n/* harmony import */ var _components_tabs_Tabs_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/tabs/Tabs.vue */ \"./components/tabs/Tabs.vue\");\n\n\n\n\n\n\n\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].use(vue_router__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\nvar router = new vue_router__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n  mode: 'history',\n  routes: [{\n    path: '/',\n    name: 'app',\n    component: _components_Main_vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n  }, {\n    path: '/about',\n    name: 'about',\n    component: _components_About_vue__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n  }, {\n    path: '/lists',\n    name: 'lists',\n    component: _components_Lists_vue__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n  }, {\n    path: '/class-binding',\n    name: 'class-binding',\n    component: _components_ClassBinding_vue__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n  }, {\n    path: '/computed',\n    name: 'computed',\n    component: _components_Computed_vue__WEBPACK_IMPORTED_MODULE_9__[\"default\"]\n  }, {\n    path: '/components',\n    name: 'components',\n    component: _components_Components_vue__WEBPACK_IMPORTED_MODULE_10__[\"default\"]\n  }, {\n    path: '/tabs',\n    name: 'tabs',\n    component: _components_tabs_Tabs_vue__WEBPACK_IMPORTED_MODULE_11__[\"default\"]\n  }, {\n    path: '*',\n    name: 'error',\n    component: _components_ErrorPage_vue__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n  }]\n});\nnew vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n  router: router,\n  render: function render(createEl) {\n    return createEl(_App_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n  }\n}).$mount('#app');\nconsole.log('Hi from my javascript');\n\n//# sourceURL=webpack:///./app.js?");

/***/ }),

/***/ "./components/tabs/Tab.vue":
false,

/***/ "./components/tabs/Tab.vue?vue&type=script&lang=js&":
false,

/***/ "./components/tabs/Tab.vue?vue&type=template&id=81eee8c2&scoped=true&":
false,

/***/ "./components/tabs/Tabs.vue":
/*!**********************************!*\
  !*** ./components/tabs/Tabs.vue ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Tabs_vue_vue_type_template_id_25b48964_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tabs.vue?vue&type=template&id=25b48964&scoped=true& */ \"./components/tabs/Tabs.vue?vue&type=template&id=25b48964&scoped=true&\");\n/* harmony import */ var _Tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tabs.vue?vue&type=script&lang=js& */ \"./components/tabs/Tabs.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _Tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Tabs_vue_vue_type_template_id_25b48964_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Tabs_vue_vue_type_template_id_25b48964_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"25b48964\",\n  null\n  \n)\n\n/* hot reload */\nif (true) {\n  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ \"./node_modules/vue-hot-reload-api/dist/index.js\")\n  api.install(__webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm.js\"))\n  if (api.compatible) {\n    module.hot.accept()\n    if (!api.isRecorded('25b48964')) {\n      api.createRecord('25b48964', component.options)\n    } else {\n      api.reload('25b48964', component.options)\n    }\n    module.hot.accept(/*! ./Tabs.vue?vue&type=template&id=25b48964&scoped=true& */ \"./components/tabs/Tabs.vue?vue&type=template&id=25b48964&scoped=true&\", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Tabs_vue_vue_type_template_id_25b48964_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tabs.vue?vue&type=template&id=25b48964&scoped=true& */ \"./components/tabs/Tabs.vue?vue&type=template&id=25b48964&scoped=true&\");\n(function () {\n      api.rerender('25b48964', {\n        render: _Tabs_vue_vue_type_template_id_25b48964_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n        staticRenderFns: _Tabs_vue_vue_type_template_id_25b48964_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]\n      })\n    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))\n  }\n}\ncomponent.options.__file = \"components/tabs/Tabs.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./components/tabs/Tabs.vue?");

/***/ }),

/***/ "./components/tabs/Tabs.vue?vue&type=script&lang=js&":
/*!***********************************************************!*\
  !*** ./components/tabs/Tabs.vue?vue&type=script&lang=js& ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--1!../../node_modules/vue-loader/lib??vue-loader-options!./Tabs.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./components/tabs/Tabs.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./components/tabs/Tabs.vue?");

/***/ }),

/***/ "./components/tabs/Tabs.vue?vue&type=template&id=25b48964&scoped=true&":
/*!*****************************************************************************!*\
  !*** ./components/tabs/Tabs.vue?vue&type=template&id=25b48964&scoped=true& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tabs_vue_vue_type_template_id_25b48964_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./Tabs.vue?vue&type=template&id=25b48964&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./components/tabs/Tabs.vue?vue&type=template&id=25b48964&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tabs_vue_vue_type_template_id_25b48964_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tabs_vue_vue_type_template_id_25b48964_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./components/tabs/Tabs.vue?");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./components/tabs/Tab.vue?vue&type=script&lang=js&":
false,

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./components/tabs/Tabs.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./components/tabs/Tabs.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"tabs\"\n});\n\n//# sourceURL=webpack:///./components/tabs/Tabs.vue?./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./components/tabs/Tab.vue?vue&type=template&id=81eee8c2&scoped=true&":
false,

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./components/tabs/Tabs.vue?vue&type=template&id=25b48964&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/tabs/Tabs.vue?vue&type=template&id=25b48964&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { staticClass: \"myTabs\" },\n    [\n      _vm._m(0),\n      _vm._v(\" \"),\n      _c(\n        \"tabs\",\n        [\n          _c(\"tab\", { attrs: { name: \"About Us\", selected: true } }, [\n            _c(\"h1\", [_vm._v(\"Here is the content for the about us tab\")])\n          ]),\n          _vm._v(\" \"),\n          _c(\"tab\", { attrs: { name: \"About Us\", selected: true } }, [\n            _c(\"h1\", [_vm._v(\"Here is the content for the about us tab\")])\n          ]),\n          _vm._v(\" \"),\n          _c(\"tab\", { attrs: { name: \"About Us\", selected: true } }, [\n            _c(\"h1\", [_vm._v(\"Here is the content for the about us tab\")])\n          ])\n        ],\n        1\n      )\n    ],\n    1\n  )\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"ul\", { attrs: { id: \"tabs\" } }, [\n      _c(\"li\", [_c(\"a\", { attrs: { href: \"#about\" } }, [_vm._v(\"About\")])]),\n      _vm._v(\" \"),\n      _c(\"li\", [_c(\"a\", { attrs: { href: \"#\" } })]),\n      _vm._v(\" \"),\n      _c(\"li\", [_c(\"a\", { attrs: { href: \"#\" } })])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./components/tabs/Tabs.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

})