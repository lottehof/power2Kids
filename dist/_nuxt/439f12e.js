(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{378:function(t,e,o){var content=o(410);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(8).default)("74bcaa6c",content,!0,{sourceMap:!1})},408:function(t,e,o){t.exports=o.p+"img/overmij.a536a2a.png"},409:function(t,e,o){"use strict";o(378)},410:function(t,e,o){var n=o(7)(!1);n.push([t.i,".overmij[data-v-22c0499f]{min-height:100%}.overmij-left[data-v-22c0499f]{margin:0 auto}.review[data-v-22c0499f]{margin-bottom:50px}.overmij-content[data-v-22c0499f]{margin:0 auto;width:95%}.overmij-title[data-v-22c0499f]{font-size:26px;white-space:pre-line;text-transform:uppercase;padding-top:20px}.overmij-sub-title[data-v-22c0499f],.overmij-title[data-v-22c0499f]{width:90%;text-align:center;font-family:Arial;font-style:normal;font-weight:400;color:#234a71}.overmij-sub-title[data-v-22c0499f]{font-size:18px;margin-top:20px}.overmij-underline[data-v-22c0499f]{width:80%;height:2px;color:#043652;background-color:#043652;border:none;margin:10px auto 0}.overmij-content-article[data-v-22c0499f]{width:90%;font-family:Arial;font-style:normal;font-weight:400;font-size:14px;color:#043652;white-space:pre-line;margin:20px auto 0}.socialmedia-icons[data-v-22c0499f]{display:flex;justify-content:center;align-items:center}.fab[data-v-22c0499f]{font-size:45px;margin:30px 29px}.socialmedia-icons-line[data-v-22c0499f]{width:90%;margin:0 auto;height:8px;color:#043652;background-color:#043652;border:none}.link[data-v-22c0499f]{color:#043652}.image-holder[data-v-22c0499f]{margin:0 auto;display:flex;justify-content:center}.overmij-image[data-v-22c0499f]{width:90%;height:500px;margin-top:20px;text-align:center;margin-bottom:20px}@media (min-width:768px){.overmij-image[data-v-22c0499f]{width:400px}.overmij-content-article[data-v-22c0499f]{font-size:16px;width:500px}.overmij-title[data-v-22c0499f]{font-size:30px;margin:0 auto}.overmij-sub-title[data-v-22c0499f]{font-size:24px;margin:15px auto 0}}@media (min-width:1300px){.overmij[data-v-22c0499f]{min-height:100vh}.overmij-container[data-v-22c0499f]{width:100vw;display:grid;grid-template-columns:1fr 1fr;height:950px}.overmij-content[data-v-22c0499f]{width:605px;height:100px;margin-top:50px}.overmij-title[data-v-22c0499f]{font-size:40px;width:605px}.overmij-sub-title[data-v-22c0499f]{font-size:24px;width:605px}.overmij-underline[data-v-22c0499f]{width:390px}.overmij-content-article[data-v-22c0499f]{width:601px;height:490px;left:50px;top:368px;font-size:18px}.socialmedia-icons-line[data-v-22c0499f]{width:235px}.image-holder[data-v-22c0499f]{width:100%;height:90vh}.overmij-image[data-v-22c0499f]{width:50vw;height:1024px;position:absolute;top:0;margin:0}}",""]),t.exports=n},431:function(t,e,o){"use strict";o.r(e);var n=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"socialmedia-icons"},[o("a",{staticClass:"link",attrs:{href:"https://www.instagram.com/praktijk_power2kids/",target:"_blank"}},[o("i",{staticClass:"fab fa-instagram"})]),t._v(" "),o("a",{staticClass:"link",attrs:{href:"https://www.linkedin.com/in/hannevanwilligenburg/",target:"_blank"}},[o("i",{staticClass:"fab fa-linkedin-in"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"overmij-right"},[e("div",{staticClass:"image-holder"},[e("img",{staticClass:"overmij-image",attrs:{src:o(408),alt:"Hanne van Willigenburg"}})])])}],r={layout:"overmijnav",data:function(){return{story:{content:{}}}},mounted:function(){var t=this;this.$storybridge((function(){var e=new StoryblokBridge;e.on("input",(function(e){console.log(t.story.content),e.story.id===t.story.id&&(t.story.content=e.story.content)})),e.on(["published","change"],(function(e){t.$nuxt.$router.go({path:t.$nuxt.$router.currentRoute,force:!0})}))}))},asyncData:function(t){return t.app.$storyapi.get("cdn/stories/over-mij",{version:t.isDev?"draft":"published"}).then((function(t){return t.data})).catch((function(e){e.response?(console.error(e.response.data),t.error({statusCode:e.response.status,message:e.response.data})):(console.error(e),t.error({statusCode:404,message:"Failed to receive content form api"}))}))}},c=(o(409),o(2)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"overmij"},[o("section",{staticClass:"overmij-container"},[o("div",{staticClass:"overmij-left"},[o("div",{staticClass:"overmij-content"},[o("h1",{staticClass:"overmij-title"},[t._v(" "+t._s(t.story.content.title))]),t._v(" "),o("hr",{staticClass:"overmij-underline"})]),t._v(" "),o("section",{staticClass:"overmij-content-article",domProps:{innerHTML:t._s(t.$options.filters.markdown(t.story.content.content))}}),t._v(" "),t._m(0),t._v(" "),o("hr",{staticClass:"socialmedia-icons-line"})]),t._v(" "),t._m(1)]),t._v(" "),o("div",{staticClass:"review"},[t.story.content.component?o(t.story.content.component,{key:t.story.content._uid,tag:"component",attrs:{blok:t.story.content}}):t._e()],1)])}),n,!1,null,"22c0499f",null);e.default=component.exports}}]);