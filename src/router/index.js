import Vue from 'vue'
import Router from 'vue-router'
import cv from '@/pages/cv'
import aaa from '@/pages/aaa'
import bbb from '@/pages/bbb'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'cv',
      component: cv
    },
    {
      path: '/aaa',
      name: 'aaa',
      component: aaa
    },
    {
      path: '/bbb',
      name: 'bbb',
      component: bbb
    }
  ]
})
