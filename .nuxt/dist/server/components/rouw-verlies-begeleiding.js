exports.ids = [9];
exports.modules = {

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(124);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("74a90b4f", content, true, context)
};

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Begeleiding_vue_vue_type_style_index_0_id_4a088538_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(105);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Begeleiding_vue_vue_type_style_index_0_id_4a088538_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Begeleiding_vue_vue_type_style_index_0_id_4a088538_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Begeleiding_vue_vue_type_style_index_0_id_4a088538_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Begeleiding_vue_vue_type_style_index_0_id_4a088538_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".rouw-container-three[data-v-4a088538]{display:block;width:100%}.rouw-content[data-v-4a088538]{text-align:center;margin-top:20px}.hoewerkik-image[data-v-4a088538]{width:90%}.rouw-content-three[data-v-4a088538]{width:90%;margin:0 auto}@media (min-width:1100px){.rouw-container-three[data-v-4a088538]{display:grid;grid-template-columns:1fr 1fr;width:1160px;margin:0 auto;grid-column-gap:100px;-moz-column-gap:100px;column-gap:100px}.rouw-content-three[data-v-4a088538]{margin:0}.hoewerkik-image[data-v-4a088538]{width:530px;height:454px;margin-top:70px}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/RouwVerlies/Begeleiding.vue?vue&type=template&id=4a088538&scoped=true&lang=html&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_vm._ssrNode("<article class=\"rouw-container-three\" data-v-4a088538><div class=\"rouw-content\" data-v-4a088538><figure data-v-4a088538><img"+(_vm._ssrAttr("src",_vm.blok.image_two))+" alt=\"meisje met bloem in hand\" class=\"hoewerkik-image second\" data-v-4a088538></figure></div> <div class=\"rouw-content-three\" data-v-4a088538><section class=\"aanpak-listitems second\" data-v-4a088538>"+(_vm._s(_vm.$options.filters.markdown(_vm.blok.content_three)))+"</section></div></article>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/RouwVerlies/Begeleiding.vue?vue&type=template&id=4a088538&scoped=true&lang=html&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/RouwVerlies/Begeleiding.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Begeleidingvue_type_script_lang_js_ = ({
  props: {
    blok: {
      type: Object,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./components/RouwVerlies/Begeleiding.vue?vue&type=script&lang=js&
 /* harmony default export */ var RouwVerlies_Begeleidingvue_type_script_lang_js_ = (Begeleidingvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/RouwVerlies/Begeleiding.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(123)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  RouwVerlies_Begeleidingvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4a088538",
  "6a7322f1"
  
)

/* harmony default export */ var Begeleiding = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=rouw-verlies-begeleiding.js.map