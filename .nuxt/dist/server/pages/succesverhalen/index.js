exports.ids = [18,11];
exports.modules = {

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(126);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("541eb9c5", content, true, context)
};

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Review_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(106);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Review_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Review_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Review_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Review_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".review-title{font-size:20px;text-align:center;padding-top:50px;color:#043652;font-weight:700;margin-bottom:10px}.review-title-underline{width:200px;height:2px;color:#043652;background-color:#043652;border:none;margin:0 auto 50px}.review-box{height:700px}.review-box,.review-box-container{display:flex;justify-content:center;align-items:center}.review-box-container{height:100%;width:90%;background-color:#9490a7;position:relative}.button-left{position:absolute;left:1%}.button-left,.fas{background-color:transparent;border:none}.fas{font-size:30px;color:#fff}.white-box{width:75%;height:90%;max-height:700px;border:4px solid #fff;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);text-align:center}.white-box:before{content:\"“\";height:55px;font-size:50px;background:#9490a7;color:#fff;top:70px;padding-top:10px;position:absolute;left:-3%}.hooper{width:70%;height:100%;margin:0 auto}li.slider{background-color:#9490a7;justify-content:center;color:#fff;font-family:\"Arial\",sans-serif;font-style:normal;font-weight:700;font-size:14px;line-height:21px;display:flex;align-items:center;text-align:center;padding-top:20px;padding-bottom:20px;position:relative}.button-right{position:absolute;right:1%;background-color:transparent;border:none}.review-image{width:528.59px;height:700px;display:none}@media (min-width:768px){.review-title{font-size:36px}.review-title-underline{width:300px}.review-container{display:grid;grid-template-columns:1fr;text-align:center;width:100%}.review-box{margin:0 auto}.review-box-container{height:500px;width:750px}.fas{font-size:60px}.white-box{width:610px;height:410px}.white-box:before{height:65px;font-size:100px;padding-top:0}.hooper{width:570px;height:400px}li.slider{font-size:18px}.slider-content{width:580px;padding:2rem}.person{position:absolute;bottom:7%}.review-image-box{width:530px;margin:0 auto}.review-image{display:block;display:flex;align-items:center;text-align:center}}@media (min-width:1200px){.review-container{grid-template-columns:1fr 1fr;margin:0 auto}.review-box-container{height:500px;width:750px;margin:0 auto 0 60px}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(166);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("265e7eee", content, true, context)
};

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Succesverhalen/Review.vue?vue&type=template&id=6c27e5bc&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{},[_vm._ssrNode("<div><h2 class=\"review-title\">Ervaringen van ouders</h2> <hr class=\"review-title-underline\"></div> "),_vm._ssrNode("<div class=\"review-container\">","</div>",[_vm._ssrNode("<div class=\"review-box\">","</div>",[_vm._ssrNode("<div class=\"review-box-container\">","</div>",[_vm._ssrNode("<button class=\"button-left\"><i class=\"fas fa-chevron-left\"></i></button> "),_vm._ssrNode("<div class=\"white-box\">","</div>",[_c('hooper',{ref:"carousel",on:{"slide":_vm.updateCarousel}},_vm._l((_vm.datas),function(data){return _c('slide',{key:data.id,staticClass:"slider",staticStyle:{"width":"100%"}},[_c('div',{staticClass:"slider-content"},[_c('p',{staticClass:"post"},[_vm._v(_vm._s(data.post))]),_vm._v(" "),_c('p',{staticClass:"person"},[_vm._v(_vm._s(data.person))])])])}),1)],1),_vm._ssrNode(" <button class=\"button-right\"><i class=\"fas fa-chevron-right\"></i></button>")],2)]),_vm._ssrNode(" <div class=\"review-image-box\"><img"+(_vm._ssrAttr("src",__webpack_require__(11)))+" alt=\"2 kindjes\" class=\"review-image\"></div>")],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Succesverhalen/Review.vue?vue&type=template&id=6c27e5bc&

// EXTERNAL MODULE: external "hooper"
var external_hooper_ = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/hooper/dist/hooper.css
var hooper = __webpack_require__(6);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Succesverhalen/Review.vue?vue&type=script&lang=js&
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


/* harmony default export */ var Reviewvue_type_script_lang_js_ = ({
  components: {
    Hooper: external_hooper_["Hooper"],
    Slide: external_hooper_["Slide"]
  },

  data() {
    return {
      datas: [{
        post: 'Hanne maakt gemakkelijk contact, is betrokken en boekt snel resultaat! Onze dochter was heel angstig. Hanne heeft onze dochter handvatten geboden door middel van oefeningen en gesprekken om met haar angsten om te gaan en deze te overwinnen. Ook als ouders ontvingen wij verschillende adviezen. Dit heeft ons enorm geholpen! Onze dochter kan nu beter met haar angst omgaan en zit weer goed in haar vel.',
        person: '-Alike, moeder van Anna (7 jaar)'
      }, {
        post: 'Hanne maakt gemakkelijk contact, is betrokken en boekt snel resultaat! Onze dochter was heel angstig. Hanne heeft onze dochter handvatten geboden door middel van oefeningen en gesprekken om met haar angsten om te gaan en deze te overwinnen. Ook als ouders ontvingen wij verschillende adviezen. Dit heeft ons enorm geholpen! Onze dochter kan nu beter met haar angst omgaan en zit weer goed in haar vel.',
        person: '-Alike, moeder van Anna (7 jaar)'
      }, {
        post: 'We hebben met ons 6-jarig zoontje een traject met Hanne gevolgd om hem te helpen met zijn boosheid en voor ons om beter te kunnen begrijpen waar zijn boosheid vandaan komt. Het vertrouwen in Hanne is zowel vanuit ons, maar ook vooral vanuit ons zoontje heel snel opgebouwd. Hanne heeft een hele prettige en fijne manier van praten, aanwezig zijn in een ruimte en verbinding maken. We merkten dit aan de openheid van ons zoontje naar haar toe. Hanne bespreekt de "moeilijke" onderwerpen met een kind op een speelse en visuele manier. We hebben het traject als prettig en hulpvol ervaren.',
        person: '-Vanessa, moeder van Teun (6 jaar)'
      }, {
        post: 'We hebben met ons 6-jarig zoontje een traject met Hanne gevolgd om hem te helpen met zijn boosheid en voor ons om beter te kunnen begrijpen waar zijn boosheid vandaan komt. Het vertrouwen in Hanne is zowel vanuit ons, maar ook vooral vanuit ons zoontje heel snel opgebouwd. Hanne heeft een hele prettige en fijne manier van praten, aanwezig zijn in een ruimte en verbinding maken. We merkten dit aan de openheid van ons zoontje naar haar toe. Hanne bespreekt de "moeilijke" onderwerpen met een kind op een speelse en visuele manier. We hebben het traject als prettig en hulpvol ervaren.',
        person: '-Vanessa, moeder van Teun (6 jaar)'
      }, {
        post: 'Hanne maakt gemakkelijk contact, is betrokken en boekt snel resultaat! Onze dochter was heel angstig. Hanne heeft onze dochter handvatten geboden door middel van oefeningen en gesprekken om met haar angsten om te gaan en deze te overwinnen. Ook als ouders ontvingen wij verschillende adviezen. Dit heeft ons enorm geholpen! Onze dochter kan nu beter met haar angst omgaan en zit weer goed in haar vel.',
        person: '-Alike, moeder van Anna (7 jaar)'
      }, {
        post: 'We hebben met ons 6-jarig zoontje een traject met Hanne gevolgd om hem te helpen met zijn boosheid en voor ons om beter te kunnen begrijpen waar zijn boosheid vandaan komt. Het vertrouwen in Hanne is zowel vanuit ons, maar ook vooral vanuit ons zoontje heel snel opgebouwd. Hanne heeft een hele prettige en fijne manier van praten, aanwezig zijn in een ruimte en verbinding maken. We merkten dit aan de openheid van ons zoontje naar haar toe. Hanne bespreekt de "moeilijke" onderwerpen met een kind op een speelse en visuele manier. We hebben het traject als prettig en hulpvol ervaren.',
        person: '-Vanessa, moeder van Teun (6 jaar)'
      }, {
        post: 'We hebben met ons 6-jarig zoontje een traject met Hanne gevolgd om hem te helpen met zijn boosheid en voor ons om beter te kunnen begrijpen waar zijn boosheid vandaan komt. Het vertrouwen in Hanne is zowel vanuit ons, maar ook vooral vanuit ons zoontje heel snel opgebouwd. Hanne heeft een hele prettige en fijne manier van praten, aanwezig zijn in een ruimte en verbinding maken. We merkten dit aan de openheid van ons zoontje naar haar toe. Hanne bespreekt de "moeilijke" onderwerpen met een kind op een speelse en visuele manier. We hebben het traject als prettig en hulpvol ervaren.',
        person: '-Vanessa, moeder van Teun (6 jaar)'
      }]
    };
  },

  watch: {
    carouselData() {
      this.$refs.carousel.slideTo(this.carouselData);
    }

  },
  methods: {
    slidePrev() {
      this.$refs.carousel.slidePrev();
    },

    slideNext() {
      this.$refs.carousel.slideNext();
    },

    updateCarousel(payload) {
      this.myCarouselData = payload.currentSlide;
    }

  }
});
// CONCATENATED MODULE: ./components/Succesverhalen/Review.vue?vue&type=script&lang=js&
 /* harmony default export */ var Succesverhalen_Reviewvue_type_script_lang_js_ = (Reviewvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Succesverhalen/Review.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(125)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Succesverhalen_Reviewvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "333fe2c2"
  
)

/* harmony default export */ var Review = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_cb8c7fd0_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(134);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_cb8c7fd0_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_cb8c7fd0_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_cb8c7fd0_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_cb8c7fd0_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".succesverhalen[data-v-cb8c7fd0]{height:100vh}.review-title[data-v-cb8c7fd0]{font-size:36px;text-align:center;padding-top:50px;color:#043652;font-weight:700;margin-bottom:10px}.review-box[data-v-cb8c7fd0]{display:flex;justify-content:center;align-items:center;height:700px}.review-title-underline[data-v-cb8c7fd0]{width:300px;height:2px;color:#043652;background-color:#043652;border:none;margin:0 auto 50px}.review-container[data-v-cb8c7fd0]{display:grid;grid-template-columns:1fr 1fr;text-align:center;width:90%;margin:0 auto}.review-image[data-v-cb8c7fd0]{width:528.59px;height:700px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/succesverhalen/index.vue?vue&type=template&id=cb8c7fd0&scoped=true&lang=html&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[(_vm.story.content.component)?_c(_vm.story.content.component,{key:_vm.story.content._uid,tag:"component",attrs:{"blok":_vm.story.content}}):_vm._e()],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/succesverhalen/index.vue?vue&type=template&id=cb8c7fd0&scoped=true&lang=html&

// EXTERNAL MODULE: ./components/Succesverhalen/Review.vue + 4 modules
var Review = __webpack_require__(144);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/succesverhalen/index.vue?vue&type=script&lang=js&
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

/* harmony default export */ var succesverhalenvue_type_script_lang_js_ = ({
  components: {
    Review: Review["default"]
  },

  data() {
    return {
      story: {
        content: {}
      }
    };
  },

  mounted() {
    this.$storybridge(() => {
      const storyblokInstance = new StoryblokBridge(); // Use the input event for instant update of content

      storyblokInstance.on('input', event => {
        console.log(this.story.content);

        if (event.story.id === this.story.id) {
          this.story.content = event.story.content;
        }
      }); // Use the bridge to listen the events

      storyblokInstance.on(['published', 'change'], event => {
        // window.location.reload()
        this.$nuxt.$router.go({
          path: this.$nuxt.$router.currentRoute,
          force: true
        });
      });
    });
  },

  asyncData(context) {
    // // This what would we do in real project
    // const version = context.query._storyblok || context.isDev ? 'draft' : 'published'
    // const fullSlug = (context.route.path == '/' || context.route.path == '') ? 'home' : context.route.path
    // Load the JSON from the API - loadig the home content (index page)
    return context.app.$storyapi.get('cdn/stories/review', {
      version: 'draft'
    }).then(res => {
      return res.data;
    }).catch(res => {
      if (!res.response) {
        console.error(res);
        context.error({
          statusCode: 404,
          message: 'Failed to receive content form api'
        });
      } else {
        console.error(res.response.data);
        context.error({
          statusCode: res.response.status,
          message: res.response.data
        });
      }
    });
  }

});
// CONCATENATED MODULE: ./pages/succesverhalen/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_succesverhalenvue_type_script_lang_js_ = (succesverhalenvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/succesverhalen/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(165)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_succesverhalenvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "cb8c7fd0",
  "3082ea94"
  
)

/* harmony default export */ var succesverhalen = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map