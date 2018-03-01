// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import './assets/less/app.less'

import Validator from './assets/script/plugin'
import toastPlugin from './components/toast'
import tipsPlugin from './components/layerTips'
Vue.use(Validator)
Vue.use(toastPlugin)
Vue.use(tipsPlugin)

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
