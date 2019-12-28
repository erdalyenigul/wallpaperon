import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4f69fc44 = () => interopDefault(import('../pages/categories/_category.vue' /* webpackChunkName: "pages/categories/_category" */))
const _689344a4 = () => interopDefault(import('../pages/photoDetail/_id.vue' /* webpackChunkName: "pages/photoDetail/_id" */))
const _3de56d14 = () => interopDefault(import('../pages/search/_results.vue' /* webpackChunkName: "pages/search/_results" */))
const _13260628 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/categories/:category?",
    component: _4f69fc44,
    name: "categories-category"
  }, {
    path: "/photoDetail/:id?",
    component: _689344a4,
    name: "photoDetail-id"
  }, {
    path: "/search/:results?",
    component: _3de56d14,
    name: "search-results"
  }, {
    path: "/",
    component: _13260628,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
