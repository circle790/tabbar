import download from './download.js'
const downloadPlugin = {
  install (Vue, options) {
    const downloadVue = Vue.extend(download)
    // 实例化vue实例
    let downloadInstance = new downloadVue()
    let downloadEl = downloadInstance.$mount().$el
    document.body.appendChild(downloadEl)
    // 在Vue的原型上添加实例方法，以全局调用
    Vue.prototype.$download = (opts) => {
      downloadInstance.config = Object.assign(downloadInstance.config, opts, {isShow: true})
    }
  }
}
export default downloadPlugin;