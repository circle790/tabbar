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
    mounted() {
      let mask = document.querySelector('.ui-pop-frame')
      mask.addEventListener('touchmove', function (e) {
        e.preventDefault()
      })
    },
    methods: {
      close() {
        this.$parent.content = ''
        this.$parent.isShow = false
      },
      no() {
        this.cancelCallback && this.cancelCallback()
        this.close()
        return false
      },
      yes() {
        this.confirmCallback && this.confirmCallback()
        this.close()
        return true
      }
    }
  }
</script>
<style lang='less'>
  @import './layerTips.less';
</style>