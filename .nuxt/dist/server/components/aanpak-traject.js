exports.ids = [6];
exports.modules = {

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(116);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("37d99e68", content, true, context)
};

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Traject_vue_vue_type_style_index_0_id_5c319ee4_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(101);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Traject_vue_vue_type_style_index_0_id_5c319ee4_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Traject_vue_vue_type_style_index_0_id_5c319ee4_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Traject_vue_vue_type_style_index_0_id_5c319ee4_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Traject_vue_vue_type_style_index_0_id_5c319ee4_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".aanpak-container-two[data-v-5c319ee4]{display:block;width:100%}.aanpak-content-two[data-v-5c319ee4]{width:90%;margin:0 auto}.aanpak-sub-title[data-v-5c319ee4]{font-size:16px;margin-top:20px}.aanpak-content-p[data-v-5c319ee4]{font-size:12px;width:100%;line-height:133.31%;letter-spacing:.13em;white-space:pre-line;margin-top:20px}.aanpak-content[data-v-5c319ee4]{width:100%;text-align:center;margin:20px auto 0}.hoewerkik-image[data-v-5c319ee4],.line[data-v-5c319ee4]{width:90%}.line[data-v-5c319ee4]{height:2px;margin:50px auto 0;border:none;background-color:#9490a7}@media (min-width:1200px){.aanpak-container-two[data-v-5c319ee4]{display:grid;grid-template-columns:1fr 1fr;width:1160px;margin:0 auto;grid-column-gap:100px;-moz-column-gap:100px;column-gap:100px}.aanpak-content-two[data-v-5c319ee4]{margin:0}.aanpak-sub-title[data-v-5c319ee4]{font-size:18px;font-weight:700;margin-top:40px;margin-bottom:10px}.aanpak-content-p[data-v-5c319ee4],.aanpak-sub-title[data-v-5c319ee4]{line-height:133.31%;letter-spacing:.13em}.aanpak-content-p[data-v-5c319ee4]{font-size:14px;width:530px;white-space:pre-line}.hoewerkik-image[data-v-5c319ee4]{width:530px;height:454px;margin-top:70px}.line[data-v-5c319ee4]{height:2px;width:60%;margin:50px auto 0;border:none;background-color:#9490a7}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Aanpak/Traject.vue?vue&type=template&id=5c319ee4&scoped=true&lang=html&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_vm._ssrNode("<article class=\"aanpak-container-two\" data-v-5c319ee4><div class=\"aanpak-content-two\" data-v-5c319ee4><section class=\"aanpak-listitems second\" data-v-5c319ee4>"+(_vm._s(_vm.$options.filters.markdown(_vm.blok.content_two)))+"</section></div> <div class=\"aanpak-content\" data-v-5c319ee4><figure data-v-5c319ee4><img"+(_vm._ssrAttr("src",_vm.blok.image_one))+" alt=\"werkplek\" class=\"hoewerkik-image\" data-v-5c319ee4></figure></div></article> <hr class=\"line\" data-v-5c319ee4>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Aanpak/Traject.vue?vue&type=template&id=5c319ee4&scoped=true&lang=html&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Aanpak/Traject.vue?vue&type=script&lang=js&
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
//
/* harmony default export */ var Trajectvue_type_script_lang_js_ = ({
  props: {
    blok: {
      type: Object,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./components/Aanpak/Traject.vue?vue&type=script&lang=js&
 /* harmony default export */ var Aanpak_Trajectvue_type_script_lang_js_ = (Trajectvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Aanpak/Traject.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(115)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Aanpak_Trajectvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5c319ee4",
  "16747178"
  
)

/* harmony default export */ var Traject = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=aanpak-traject.js.map