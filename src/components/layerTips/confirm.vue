<template>
    <div class="ui-pop-frame">
        <div class="ui-pop-main">
            <div class="ui-pop-cont" v-html="content"></div>
            <div class="ui-pop-operation">
                <a href="javascript:;" @click="no" v-html="cancel"></a>
                <a href="javascript:;" @click="yes" v-html="confirm"></a>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        props: ['content', 'confirm', 'cancel', 'confirmCallback', 'cancelCallback'],
        data() {
            return {}
        },
        methods: {
            close: function() {
                let _this = this
                _this.$parent.content = ''
                _this.$parent.isShow = false
            },
            no: function() {
                this.cancelCallback && this.cancelCallback()
                this.close()
                return false
            },
            yes: function() {
                this.confirmCallback && this.confirmCallback()
                this.close()
                return true
            }
        },
        components: {}
    }
</script>
<style lang='less'>
@import './layerTips.less';
</style>