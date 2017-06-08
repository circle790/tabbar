import Vue from 'vue';
import toastTpl from './toastTpl.vue';

let toast = new Vue({
  el: 'toast',
  data: {
      toastConfig: {
          isShow: false,
          iconClass: '',
          customClass: '',
          message: '加载中...',
          duration: 1200,
          over: null
      }
  },
  components: { toastTpl },
  computed: {
    isShow: {
      get(){
        return this.toastConfig.isShow;
      },
      set(val){
        this.toastConfig.isShow = val;
      }
    },
    iconClass: {
      get(){
        return this.toastConfig.iconClass;
      },
      set(val){
        this.toastConfig.iconClass = val;
      }
    },
    message: {
      get(){
        return this.toastConfig.message;
      },
      set(val){
        this.toastConfig.message = val;
      }
    },
    duration: {
      get(){
        return this.toastConfig.duration;
      },
      set(val){
        this.toastConfig.duration = val;
      }
    },
    over: {
      get(){
        return this.toastConfig.over;
      },
      set(val){
        this.toastConfig.over = val;
      }
    }
  },
  template: `<toast v-if="toastConfig.isShow" is="toast-tpl" :message="toastConfig.message"
            :icon-class="toastConfig.iconClass" :custom-class="toastConfig.customClass"
            :duration="toastConfig.duration" :over="toastConfig.over"></toast>`
});


export default toast;
