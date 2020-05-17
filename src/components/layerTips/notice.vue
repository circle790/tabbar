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
    mounted() {
      let mask = document.querySelector('.ui-pop-frame')
      mask.addEventListener('touchmove', function (e) {
        e.preventDefault()
      })
    },
    methods: {
      confirm() {
        this.$parent.title = ''
        this.$parent.content = ''
        this.$parent.isShow = false
      }
    },
  }
</script>
<style lang='less'>
  @import './layerTips.less';
</style>