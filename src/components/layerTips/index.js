import Vue from 'vue'
import alert from './alert.vue';
import notice from './notice.vue';
import confirm from './confirm.vue';

let layerTips = new Vue({
    el: 'layer-tips',
    data: {
        layerTipsConfig: {
            isShow: false,
            type: 'alert',
            title: '',
            content: '',
            confirmText: '',
            cancelText: ''
        }
    },
    components: {
        alert, notice, confirm
    },
    computed: {
        config: {
            get(){
                return this.layerTipsConfig;
            },
            set(val){
                this.layerTipsConfig = val;
            }
        },
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
        confirm: {
            get(){
                return this.config.confirmText;
            },
            set(val){
                this.config.confirmText = val;
            }
        },
        cancel: {
            get(){
                return this.config.cancelText;
            },
            set(val){
                this.config.cancelText = val;
            }
        }
    },
    template: `<layer-tips v-if="layerTipsConfig.isShow" :is="layerTipsConfig.type" :title="layerTipsConfig.title" :content="layerTipsConfig.content"
                :cancel="layerTipsConfig.cancelText" :confirm="layerTipsConfig.confirmText" :confirm-callback="layerTipsConfig.confirmCallback"
                :cancel-callback="layerTipsConfig.cancelCallback"></layer-tips>`
});
export default layerTips;
