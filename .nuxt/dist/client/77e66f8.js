(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{351:function(t,n,o){var content=o(384);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(11).default)("1b7833da",content,!0,{sourceMap:!1})},383:function(t,n,o){"use strict";o(351)},384:function(t,n,o){var e=o(10)(!1);e.push([t.i,".review-title{font-size:36px;text-align:center;padding-top:50px;color:#043652;font-weight:700;margin-bottom:10px}.review{margin-bottom:50px}",""]),t.exports=e},393:function(t,n,o){"use strict";o.r(n);var e=o(181),r=o(182),c={components:{LandingComponent:e.default,HulpIdeaalComponent:r.default},data:function(){return{story:{content:{}}}},mounted:function(){var t=this;this.$storybridge((function(){var n=new StoryblokBridge;n.on("input",(function(n){console.log(t.story.content),n.story.id===t.story.id&&(t.story.content=n.story.content)})),n.on(["published","change"],(function(n){t.$nuxt.$router.go({path:t.$nuxt.$router.currentRoute,force:!0})}))}))},asyncData:function(t){return t.app.$storyapi.get("cdn/stories/landingpage",{version:"draft"}).then((function(t){return t.data})).catch((function(n){n.response?(console.error(n.response.data),t.error({statusCode:n.response.status,message:n.response.data})):(console.error(n),t.error({statusCode:404,message:"Failed to receive content form api"}))}))}},l=(o(383),o(3)),component=Object(l.a)(c,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"Home"},[o("div",{staticClass:"white-background"},[o("LandingComponent",{key:t.story.content._id,attrs:{blok:t.story.content}})],1),t._v(" "),o("HulpIdeaalComponent",{key:t.story.content._id,attrs:{blok:t.story.content}}),t._v(" "),o("div",{staticClass:"review"},[t.story.content.component?o(t.story.content.component,{key:t.story.content._uid,tag:"component",attrs:{blok:t.story.content}}):t._e()],1)],1)}),[],!1,null,null,null);n.default=component.exports}}]);