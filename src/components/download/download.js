import toastTpl from './toastTpl.vue';

let toast = {
  data() {
    return {
      config: {
        isShow: false,
        iconClass: '',
        customClass: '',
        message: '加载中...',
        duration: 1200,
        over: null
      }
    }
  },
  components: {toastTpl},
  computed: {
    isShow: {
      get(){
        return this.config.isShow;
      },
      set(val){
        this.config.isShow = val;
      }
    },
    iconClass: {
      get(){
        return this.config.iconClass;
      },
      set(val){
        this.config.iconClass = val;
      }
    },
    customClass: {
      get(){
        return this.config.customClass;
      },
      set(val){
        this.config.customClass = val;
      }
    },
    message: {
      get(){
        return this.config.message;
      },
      set(val){
        this.config.message = val;
      }
    },
    duration: {
      get(){
        return this.config.duration;
      },
      set(val){
        this.config.duration = val;
      }
    },
    over: {
      get(){
        return this.config.over;
      },
      set(val){
        this.config.over = val;
      }
    }
  },
  template: `<toast-tpl v-if="config.isShow" :message="config.message"
            :icon-class="config.iconClass" :custom-class="config.customClass"
            :duration="config.duration" :over="config.over"></toast-tpl>`
}


export default toast;
