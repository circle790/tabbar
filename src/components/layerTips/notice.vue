<template>
    <div class="ui-pop-frame">
        <div class="ui-pop-main">
            <div class="ui-pop-tit">{{title}}</div>
            <div class="ui-pop-cont" v-html="content"></div>
            <div class="ui-pop-operation">
                <a href="javascript:;" @click="confirm">确定</a>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        props: ['title', 'content'],
        data() {
            return {}
        },
        methods: {
            confirm() {
                let _this = this

                _this.$parent.title = ''
                _this.$parent.content = ''
                _this.$parent.isShow = false
            }
        },
        components: {}
    }
</script>
<style lang='less'>
@import './layerTips.less';
</style>