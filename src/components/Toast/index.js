import Vue from 'vue';
import toastTpl from './ToastTpl'
const ToastVue = Vue.extend(toastTpl);
let toastPool = [];

let getAnInstance = () => {
  if (toastPool.length > 0) {
    let instance = toastPool[0];
    toastPool.splice(0, 1);
    return instance;
  }
  return new ToastVue({
    el: document.createElement('div')
  });
};

let returnAnInstance = instance => {
  if (instance) {
    toastPool.push(instance);
  }
};

let removeDom = event => {
  if (event.target.parentNode) {
    event.target.parentNode.removeChild(event.target);
  }
};

ToastVue.prototype.close = function () {
  this.visible = false;
  this.$el.addEventListener('transitionend', removeDom);
  this.closed = true;
  returnAnInstance(this);
};

let toast = {
  install(Vue) {
    // 在Vue的原型上添加实例方法，以全局调用
    Vue.prototype.$toast = (options = {}) => {
      let duration = options.duration || 3000;

      let instance = getAnInstance();
      instance.closed = false;
      clearTimeout(instance.timer);
      instance.message = typeof options === 'string' ? options : options.message;
      instance.position = options.position || 'middle';
      instance.className = options.className || '';
      instance.iconClass = options.iconClass || '';
      instance.over = typeof options.over === 'function' ? options.over : () => {
      }

      document.body.appendChild(instance.$el);
      Vue.nextTick(function () {
        instance.visible = true;
        instance.$el.removeEventListener('transitionend', removeDom);
        duration && (instance.timer = setTimeout(function () {
          if (instance.closed) return;
          instance.close();
          instance.over();
        }, duration));
      });
    }
  }
};

export default toast;