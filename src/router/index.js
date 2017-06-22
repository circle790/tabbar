import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/Index'
import tabView from '../pages/tabView'
import popTest from '../pages/popTest'
import inviteList from '../pages/inviteList'
import pullRefresh from '../pages/pullRefresh'
import banner from '../pages/banner.vue'
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
          path: '/',
          name: 'Index',
          component: Index
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
        }
    ]
})
