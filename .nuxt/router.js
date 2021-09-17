import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4f59910e = () => interopDefault(import('../pages/aanbod/index.vue' /* webpackChunkName: "pages/aanbod/index" */))
const _ebf12ac8 = () => interopDefault(import('../pages/aanpak/index.vue' /* webpackChunkName: "pages/aanpak/index" */))
const _cd98a634 = () => interopDefault(import('../pages/contact/index.vue' /* webpackChunkName: "pages/contact/index" */))
const _2b140940 = () => interopDefault(import('../pages/overmij/index.vue' /* webpackChunkName: "pages/overmij/index" */))
const _757c2752 = () => interopDefault(import('../pages/rouw&verlies/index.vue' /* webpackChunkName: "pages/rouw&verlies/index" */))
const _65a942f9 = () => interopDefault(import('../pages/succesverhalen/index.vue' /* webpackChunkName: "pages/succesverhalen/index" */))
const _8e9571d6 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _4f59910e,
    name: "aanbod"
  }, {
    path: "/aanpak",
    component: _ebf12ac8,
    name: "aanpak"
  }, {
    path: "/contact",
    component: _cd98a634,
    name: "contact"
  }, {
    path: "/overmij",
    component: _2b140940,
    name: "overmij"
  }, {
    path: "/rouw&verlies",
    component: _757c2752,
    name: "rouw&verlies"
  }, {
    path: "/succesverhalen",
    component: _65a942f9,
    name: "succesverhalen"
  }, {
    path: "/",
    component: _8e9571d6,
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
