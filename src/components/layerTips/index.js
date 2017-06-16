import Vue from 'vue'
import alert from './alert.vue';
import notice from './notice.vue';
import confirm from './confirm.vue';

let layerTips = new Vue({
    el: 'layer-tips',
    data: {
        config: {
            isShow: false,
            type: 'alert',
            title: '',
            content: '',
            confirmText: '确认',
            cancelText: '取消',
            confirmCallback: function(){},
            cancelCallback: function(){}
        }
    },
    components: {
        alert, notice, confirm
    },
    computed: {
        isShow: {
            get(){
                return this.config.isShow;
            },
            set(val){
                this.config.isShow = val;
            }
        },
        type: {
            get(){
                return this.config.type;
            },
            set(val){
                this.config.type = val;
            }
        },
        title: {
            get(){
                return this.config.title;
            },
            set(val){
                this.config.title = val;
            }
        },
        content: {
            get(){
                return this.config.content;
            },
            set(val){
                this.config.content = val;
            }
        },
        confirmText: {
            get(){
                return this.config.confirmText;
            },
            set(val){
                this.config.confirmText = val;
            }
        },
        cancelText: {
            get(){
                return this.config.cancelText;
            },
            set(val){
                this.config.cancelText = val;
            }
        },
        confirmCallback: {
            get(){
                return this.config.confirmCallback;
            },
            set(val){
                this.config.confirmCallback = val;
            }
        },
        cancelCallback: {
            get(){
                return this.config.cancelCallback;
            },
            set(val){
                this.config.cancelCallback = val;
            }
        }
    },
    template: `<layer-tips v-if="config.isShow" :is="config.type" :title="config.title" :content="config.content"
                :cancel="config.cancelText" :confirm="config.confirmText" :confirm-callback="config.confirmCallback"
                :cancel-callback="config.cancelCallback"></layer-tips>`
});
export default layerTips;
