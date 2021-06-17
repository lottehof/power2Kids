const axios = require("axios");
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target: 'static',
  head: {
    title: 'Power2Kids',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
            { rel: 'stylesheet', href:'https://fonts.googleapis.com/icon?family=Material+Icons'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
      '@fortawesome/fontawesome-free/css/all.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/composition-api.js',
    '~/plugins/rich-text-renderer.js',
      '~/plugins/components',
      '~/plugins/filters',

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      "storyblok-nuxt",
      { accessToken: process.env.NODE_ENC == "production" ? "KB1U9yDLarflYhwAuT7r3gtt"
      : "FjJIgrsUQiACdiFKHWCkcQtt", cacheProvider: "memory" }
    ]
  ],
  generate: {
  routes: function (callback) {
    const token = `KB1U9yDLarflYhwAuT7r3gtt`
    const version = 'published'
    let cache_version = 0

    let toIgnore = ['home', 'en/settings']

     // other routes that are not in Storyblok with their slug.
    let routes = ['/'] // adds / directly

     // Load space and receive latest cache version key to improve performance
    axios.get(`https://api.storyblok.com/v1/cdn/spaces/me?token=${token}`).then((space_res) => {

       // timestamp of latest publish
      cache_version = space_res.data.space.version

       // Call for all Links using the Links API: https://www.storyblok.com/docs/Delivery-Api/Links
      axios.get(`https://api.storyblok.com/v1/cdn/links?token=${token}&version=${version}&cv=${cache_version}&per_page=100`).then((res) => {
        Object.keys(res.data.links).forEach((key) => {
          if (!toIgnore.includes(res.data.links[key].slug)) {
            routes.push('/' + res.data.links[key].slug)
          }
        })

        callback(null, routes)
      })
    })
  }
},
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
