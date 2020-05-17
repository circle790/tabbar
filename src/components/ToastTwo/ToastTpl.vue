<template>
  <transition name="toast-pop">
    <div v-show="visible" :class="['toast-box', customClass, className]">
      <span :class="['toast', {'has-icon': iconClass !== ''}]">
        <i class="toast-icon" :class="iconClass"></i>
        <span class="toast-text">{{ message }}</span>
      </span>
    </div>
  </transition>
</template>
<script>
  export default {
    props: {
      message: {
        type: String,
        default: '加载中...'
      },
      className: {
        type: String,
        default: ''
      },
      position: {
        type: String,
        default: 'middle'
      },
      iconClass: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        visible: false
      }
    },
    computed: {
      customClass() {
        let classes = '';
        switch (this.position) {
          case 'top':
            classes = 'top'
            break;
          case 'bottom':
            classes = 'bottom'
            break;
          default:
            classes = 'middle'
        }
        return classes
      }
    }
  }
</script>
<style lang="less" scoped>
  .toast-box{
    width: 100%;
    left: 50%;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
    text-align: center;
    position: absolute;
    z-index: 1000;
    transition: opacity .3s linear;
    &.top {
      top: 50px;
      bottom: auto;
      transform: translate3d(-50%, 0, 0);
    }
    &.middle {
      top: 50%;
      transform: translate3d(-50%, -50%, 0);
    }
    &.bottom {
      top: auto;
      bottom: 50px;
      transform: translate3d(-50%, 0, 0);
    }
  }
  .toast{
    border-radius: 10rem;
    padding: .24rem .3rem;
    background: rgba(0, 0, 0, .7);
    color: #fff;
    box-sizing: border-box;
    max-width: 80%;
    display: inline-block;
    position: relative;
    &-icon {
      display: none;
      width: .48rem;
      height: .48rem;
      position: absolute;
      top: 50%;
      left: .3rem;
      margin-top: -.24rem;
      &.success{
        background: url("./toast_success.png") no-repeat center/contain;
      }
      &.error{
        background: url("./toast_error.png") no-repeat center/contain;
      }
      &.info{
        background: url("./toast_info.png") no-repeat center/contain;
      }
      &.loading{
        background: url("./toast_loading.gif") no-repeat center/contain;
      }
    }
    &.has-icon{
      padding-left: 0.9rem;
      .toast-icon{
        display: block;
      }
    }
    &-text {
      font-size: .36rem;
    }

    &-pop-enter, &-pop-leave-active {
      opacity: 0;
    }
  }
</style>
