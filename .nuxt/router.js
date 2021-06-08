import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _392bd6fb = () => interopDefault(import('../pages/aanbod/index.vue' /* webpackChunkName: "pages/aanbod/index" */))
const _2a3febc4 = () => interopDefault(import('../pages/aanpak/index.vue' /* webpackChunkName: "pages/aanpak/index" */))
const _536efda4 = () => interopDefault(import('../pages/contact/index.vue' /* webpackChunkName: "pages/contact/index" */))
const _35614c04 = () => interopDefault(import('../pages/overmij/index.vue' /* webpackChunkName: "pages/overmij/index" */))
const _005d3b4e = () => interopDefault(import('../pages/rouw&verlies/index.vue' /* webpackChunkName: "pages/rouw&verlies/index" */))
const _3a33407b = () => interopDefault(import('../pages/succesverhalen/index.vue' /* webpackChunkName: "pages/succesverhalen/index" */))
const _3217945a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/aanbod",
    component: _392bd6fb,
    name: "aanbod"
  }, {
    path: "/aanpak",
    component: _2a3febc4,
    name: "aanpak"
  }, {
    path: "/contact",
    component: _536efda4,
    name: "contact"
  }, {
    path: "/overmij",
    component: _35614c04,
    name: "overmij"
  }, {
    path: "/rouw&verlies",
    component: _005d3b4e,
    name: "rouw&verlies"
  }, {
    path: "/succesverhalen",
    component: _3a33407b,
    name: "succesverhalen"
  }, {
    path: "/",
    component: _3217945a,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
