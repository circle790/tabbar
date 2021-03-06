import alert from './alert.vue'
import notice from './notice.vue'
import confirm from './confirm.vue'

let layerTips = {
  components: {
    alert, notice, confirm
  },
  data() {
    return {
      config: {
        isShow: false,
        type: 'alert',
        title: '',
        content: '',
        confirmText: '确认',
        cancelText: '取消',
        confirmCallback: function () {
        },
        cancelCallback: function () {
        }
      }
    }
  },
  computed: {
    isShow: { // 子组件中更新isShow时this.config.isShow也会更新
      get() {
        return this.config.isShow
      },
      set(val) {
        this.config.isShow = val
      }
    },
    title: { // 子组件中更新title时this.config.title也会更新
      get() {
        return this.config.title
      },
      set(val) {
        this.config.title = val
      }
    },
    content: { // 子组件中更新content时this.config.content也会更新
      get() {
        return this.config.content
      },
      set(val) {
        this.config.content = val
      }
    }
  },
  template: `<layer-tips v-if="config.isShow" :is="config.type" :title="config.title" :content="config.content"
                :cancel="config.cancelText" :confirm="config.confirmText" :confirm-callback="config.confirmCallback"
                :cancel-callback="config.cancelCallback"></layer-tips>`
}

const tipsPlugin = {
  install(Vue, options) {
    const TipsVue = Vue.extend(layerTips)
    // 实例化vue实例
    let tipsInstance = new TipsVue()
    let tipsEl = tipsInstance.$mount().$el
    document.body.appendChild(tipsEl)
    // 在Vue的原型上添加实例方法，以全局调用
    Vue.prototype.$alert = (opts, fn) => {
      if (typeof opts === 'string') {
        tipsInstance.config = Object.assign(tipsInstance.config, {
          type: 'alert',
          isShow: true,
          content: opts,
          confirmCallback() {
            fn && fn()
          }
        })
      } else {
        tipsInstance.config = Object.assign(tipsInstance.config, opts, {type: 'alert', isShow: true})
      }
    }
    Vue.prototype.$notice = (opts) => {
      tipsInstance.config = Object.assign(tipsInstance.config, opts, {
        type: 'notice',
        isShow: true
      })
    }
    Vue.prototype.$confirm = (opts) => {
      tipsInstance.config = Object.assign(tipsInstance.config, opts, {
        type: 'confirm',
        isShow: true
      })
    }
  }
}

export default tipsPlugin