exports.ids = [8];
exports.modules = {

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(120);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("66467cf8", content, true, context)
};

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RouwVerlies_vue_vue_type_style_index_0_id_2df83fe4_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(103);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RouwVerlies_vue_vue_type_style_index_0_id_2df83fe4_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RouwVerlies_vue_vue_type_style_index_0_id_2df83fe4_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RouwVerlies_vue_vue_type_style_index_0_id_2df83fe4_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RouwVerlies_vue_vue_type_style_index_0_id_2df83fe4_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".rouw-container-one[data-v-2df83fe4]{display:block;width:100%}.rouw-content-one[data-v-2df83fe4]{width:90%;margin:0 auto}.rouw-title[data-v-2df83fe4]{font-size:20px;text-align:center;padding-top:50px;color:#043652;font-weight:700;margin-bottom:10px}.rouw-underline[data-v-2df83fe4]{width:110px;height:2px;color:#043652;background-color:#043652;border:none;margin:0 auto 20px}.rouw-sub-title[data-v-2df83fe4]{font-size:14px;font-weight:700;margin-top:40px;margin-bottom:10px}.rouw-content-p[data-v-2df83fe4],.rouw-sub-title[data-v-2df83fe4]{line-height:133.31%;letter-spacing:.13em}.rouw-content-p[data-v-2df83fe4]{font-size:12px;width:100%;white-space:pre-line}.line[data-v-2df83fe4]{height:2px;width:90%;border:none;background-color:#9490a7;margin:30px auto}@media (min-width:1100px){.rouw-container-one[data-v-2df83fe4]{display:grid;grid-template-columns:1fr 1fr;width:1160px;margin:0 auto;grid-column-gap:100px;-moz-column-gap:100px;column-gap:100px}.rouw-content-one[data-v-2df83fe4]{grid-column:2/span 1;grid-row:span 1;margin:0}.title-container[data-v-2df83fe4]{width:230px}.rouw-title[data-v-2df83fe4]{font-size:36px;width:530px;text-align:left}.rouw-underline[data-v-2df83fe4]{width:200px}.rouw-sub-title[data-v-2df83fe4]{font-size:18px}.rouw-content-p[data-v-2df83fe4]{font-size:14px;width:530px}.first[data-v-2df83fe4]{margin-bottom:110px}.line[data-v-2df83fe4]{width:60%}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/RouwVerlies/RouwVerlies.vue?vue&type=template&id=2df83fe4&scoped=true&lang=html&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_vm._ssrNode("<article class=\"rouw-container-one\" data-v-2df83fe4><div class=\"rouw-content-one\" data-v-2df83fe4><div class=\"title-container\" data-v-2df83fe4><h2 class=\"rouw-title\" data-v-2df83fe4>"+_vm._ssrEscape(_vm._s(_vm.blok.title))+"</h2> <hr class=\"rouw-underline\" data-v-2df83fe4></div> <section class=\"rouw-content-p first\" data-v-2df83fe4>"+(_vm._s(_vm.$options.filters.markdown(_vm.blok.content_one)))+"</section></div></article> <hr class=\"line\" data-v-2df83fe4>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/RouwVerlies/RouwVerlies.vue?vue&type=template&id=2df83fe4&scoped=true&lang=html&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/RouwVerlies/RouwVerlies.vue?vue&type=script&lang=js&
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
/* harmony default export */ var RouwVerliesvue_type_script_lang_js_ = ({
  props: {
    blok: {
      type: Object,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./components/RouwVerlies/RouwVerlies.vue?vue&type=script&lang=js&
 /* harmony default export */ var RouwVerlies_RouwVerliesvue_type_script_lang_js_ = (RouwVerliesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/RouwVerlies/RouwVerlies.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(119)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  RouwVerlies_RouwVerliesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2df83fe4",
  "0b9310d3"
  
)

/* harmony default export */ var RouwVerlies = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=rouw-verlies.js.map