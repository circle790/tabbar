<template>
      <div class="maskLayer">
          <transition name='fade' appear>
              <div class="toast" :class="customClass">
                  <em v-if="iconClass" :class="iconClass" class="toast-icon"></em>
                  <span>{{message}}</span>
              </div>
          </transition>
      </div>
</template>

<script>
  export default {
    props: ['isShow', 'iconClass','customClass', 'message', 'duration', 'over'],
    data() {
      return {};
    },
    methods:{
      crash: function(){
        this.$parent.isShow = false;
        this.$parent.message = '';
        this.$parent.iconClass = '';
        this.$parent.customClass = '';
        this.$parent.duration = 1200;
        this.$parent.over = null;
      }
    },
    mounted(){
      let _this = this;
      setTimeout(function(){
        _this.over && _this.over();
        _this.crash();
      },_this.duration)
    }
  }
</script>


<style scoped>
  .maskLayer{
    width: 100%;
    height: 100%;
    position: absolute;
    top:0;
    left:0;
    background-color:rgba(255,255,255,0.5);
    z-index: 9998;
    display: block;
  }
  .toast {
    position: fixed;
    left:50%;
    transform:translate(-50%,-50%) scale(1);
    word-wrap:break-word;
    padding:0.2rem;
    text-align: center;
    z-index:9999;
    font-size:.28rem;
    max-width:80%;
    color: #fff;
    border-radius: 0.05rem;
    background: rgba(0,0,0,0.7);
    overflow: hidden;
    top:50%;
    text-align: center;
  }
  .toast-icon{
    display: block;
    vertical-align:top;
    margin:0 auto 0.1rem;
  }
  .fade-enter-active, .fade-leave-active {
    transition: transform .3s
  }
  .fade-enter, .fade-leave-active {
    transform:translate(-50%,-50%) scale(0);
  }
</style>
