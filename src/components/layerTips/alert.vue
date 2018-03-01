<template>
    <div class="ui-pop-frame">
        <div class="ui-pop-main">
            <div class="ui-pop-cont">{{content}}</div>
            <div class="ui-pop-operation">
                <a href="javascript:;" @click="confirm">确定</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        props: ['content', 'confirmCallback'],
        data() {
            return {}
        },
        methods: {
            confirm() {
                this.confirmCallback && this.confirmCallback()
                this.$parent.content = ''
                this.$parent.isShow = false
            }
        },
        mounted() {
            let mask = document.querySelector('.ui-pop-frame')
            mask.addEventListener('touchmove', function(e) {
                e.preventDefault()
            })
        }
    }
</script>
<style lang='less'>
@import './layerTips.less';
</style>
