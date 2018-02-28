import download from './download'
const downloadPlugin = {
  install (Vue, options) {
    const downloadVue = Vue.extend(download)
    const initInstance = () => {
      // 实例化vue实例
      let downloadInstance = new downloadVue()
      let downloadEl = downloadInstance.$mount().$el
      document.body.appendChild(downloadEl)
    }
    // 在Vue的原型上添加实例方法，以全局调用
    Vue.prototype.$download = (options) => {
      console.log(options)
      if(document.getElementsByClassName('vue-download').length){
        // 如果vue-download还在，则不再执行
        return;
      }
      initInstance()
    }
  }
}
export default downloadPlugin;