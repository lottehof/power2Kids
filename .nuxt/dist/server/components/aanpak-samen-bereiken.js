exports.ids = [5];
exports.modules = {

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(118);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("7d31c195", content, true, context)
};

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SamenBereiken_vue_vue_type_style_index_0_id_1067d6ac_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(102);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SamenBereiken_vue_vue_type_style_index_0_id_1067d6ac_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SamenBereiken_vue_vue_type_style_index_0_id_1067d6ac_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SamenBereiken_vue_vue_type_style_index_0_id_1067d6ac_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SamenBereiken_vue_vue_type_style_index_0_id_1067d6ac_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".aanpak-container-three[data-v-1067d6ac]{display:block;width:100%}.aanpak-content-three[data-v-1067d6ac]{width:90%;margin:0 auto}.hoewerkik-image[data-v-1067d6ac]{width:90%}.aanpak-content[data-v-1067d6ac]{text-align:center;margin-top:20px}@media (min-width:1200px){.aanpak-container-three[data-v-1067d6ac]{display:grid;grid-template-columns:1fr 1fr;width:1160px;margin:0 auto;grid-column-gap:100px;-moz-column-gap:100px;column-gap:100px}.aanpak-content-three[data-v-1067d6ac]{margin:0}.hoewerkik-image[data-v-1067d6ac]{width:530px;height:454px;margin-top:70px}.aanpak-sub-title[data-v-1067d6ac]{font-size:18px;font-weight:700;line-height:133.31%;letter-spacing:.13em;margin-top:40px;margin-bottom:10px}.aanpak-content-p[data-v-1067d6ac]{font-size:14px;width:530px}.listitem[data-v-1067d6ac]{width:493px;font-size:14px}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Aanpak/SamenBereiken.vue?vue&type=template&id=1067d6ac&scoped=true&lang=html&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_vm._ssrNode("<article class=\"aanpak-container-three\" data-v-1067d6ac><div class=\"aanpak-content\" data-v-1067d6ac><figure data-v-1067d6ac><img"+(_vm._ssrAttr("src",_vm.blok.image_two))+" alt=\"twee kindjes hand in hand\" class=\"hoewerkik-image second\" data-v-1067d6ac></figure></div> <div class=\"aanpak-content-three\" data-v-1067d6ac><section class=\"aanpak-listitems second\" data-v-1067d6ac>"+(_vm._s(_vm.$options.filters.markdown(_vm.blok.content_three)))+"</section></div></article>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Aanpak/SamenBereiken.vue?vue&type=template&id=1067d6ac&scoped=true&lang=html&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Aanpak/SamenBereiken.vue?vue&type=script&lang=js&
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
/* harmony default export */ var SamenBereikenvue_type_script_lang_js_ = ({
  props: {
    blok: {
      type: Object,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./components/Aanpak/SamenBereiken.vue?vue&type=script&lang=js&
 /* harmony default export */ var Aanpak_SamenBereikenvue_type_script_lang_js_ = (SamenBereikenvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Aanpak/SamenBereiken.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(117)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Aanpak_SamenBereikenvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1067d6ac",
  "24bc9192"
  
)

/* harmony default export */ var SamenBereiken = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=aanpak-samen-bereiken.js.map