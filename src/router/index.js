import Vue from 'vue'
import Router from 'vue-router'

import index from '../pages/index'
import tabView from '../pages/tabView'
import popTest from '../pages/popTest'
import inviteList from '../pages/inviteList'
import pullRefresh from '../pages/pullRefresh'
import banner from '../pages/banner'
import formVerify from '../pages/formVerify'
import demo from '../pages/demo'
import pagination from '../pages/pagination'
import fullpage from '../pages/fullpage'
import echarts from '../pages/echarts'
import picker from '../pages/smoothPicker'

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/tabView',
      name: 'tabView',
      component: tabView
    },
    {
      path: '/popTest',
      name: 'popTest',
      component: popTest
    },
    {
      path: '/inviteList',
      name: 'inviteList',
      component: inviteList
    },
    {
      path: '/pullRefresh',
      name: 'pullRefresh',
      component: pullRefresh
    },
    {
      path: '/banner',
      name: 'banner',
      component: banner
    },
    {
      path: '/formVerify',
      name: 'formVerify',
      component: formVerify
    },
    {
      path: '/demo',
      name: 'demo',
      component: demo
    },
    {
      path: '/pagination',
      name: 'pagination',
      component: pagination
    },
    {
      path: '/fullpage',
      name: 'fullpage',
      component: fullpage
    },
    {
      path: '/echarts',
      name: 'echarts',
      component: echarts
    },
    {
      path: '/picker',
      name: 'picker',
      component: picker
    }
  ]
})
