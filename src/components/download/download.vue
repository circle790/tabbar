<template>
  <div class="vue-download download" @click="hide" v-if="show">
    <div class="content">
      <div class="text">我是download组件内容</div>
      <input class="btn" type="button" value="确定"  @click="fun">
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        show: true,
        name: 'baba'
      }
    },
    methods: {
      hide() {
        this.show = false
      },
      fun() {
        console.log(this.name)
      }
    }
  }
</script>
<style lang="less">
  .download{
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 998;
    background-color: rgba(0,0,0,0.5);
    .content{
      width: 80%;
      padding: .48rem;
      position: absolute;
      top:50%;
      left:50%;
      transform: translate(-50%,-50%);
      z-index: 999;
      background-color: #fff;
      border-radius: 0.1rem;
      text-align: center;
      .text{
        font-size: 0.48rem;
        margin-bottom: 0.4rem;
      }
      .btn{
        background-color: deepskyblue;
        color: #fff;
        font-size: .36rem;
        border: none;
        border-radius: 0.05rem;
        width: 2rem;
        height: 0.75rem;
      }
    }

  }
</style>