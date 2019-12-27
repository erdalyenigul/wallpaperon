import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4368a947 = () => interopDefault(import('../pages/categories/_category.vue' /* webpackChunkName: "pages/categories/_category" */))
const _100741c1 = () => interopDefault(import('../pages/photoDetail/_id.vue' /* webpackChunkName: "pages/photoDetail/_id" */))
const _354d2b9e = () => interopDefault(import('../pages/search/_results.vue' /* webpackChunkName: "pages/search/_results" */))
const _4f815385 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/categories/:category?",
    component: _4368a947,
    name: "categories-category"
  }, {
    path: "/photoDetail/:id?",
    component: _100741c1,
    name: "photoDetail-id"
  }, {
    path: "/search/:results?",
    component: _354d2b9e,
    name: "search-results"
  }, {
    path: "/",
    component: _4f815385,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
