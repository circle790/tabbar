<template>
  <a class="m-tabbar-item" :class="{'is-active':isActive}" @click="$parent.$emit('input',id)">
    <span class="m-tabbar-item-icon" v-show="!isActive"><slot name="icon-normal"></slot></span>
    <span class="m-tabbar-item-icon" v-show="isActive"><slot name="icon-active"></slot></span>
    <span class="m-tabbar-item-text"><slot></slot></span>
  </a>
</template>
<script>
  /**
   * m-tab-item
   * @desc 搭配 tabbar使用
   * @param id - 选中后的返回值，任意类型
   * @param isActive - 根据父组件的value和当前组件的id判断是否为选中状态
   * @param $parent.$emit('input',id) - 触发父组件的自定义事件
   * @param {slot} [icon-normal] - icon-默认图标
   * @param {slot} [icon-active] - icon-选中图标
   * @param {slot} - 文字
   *
   * @example
   * <m-tabbar-item id='tab1'>
   *       <img src="../assets/images/ic_tab_home_normal.png" alt="" slot="icon-normal">
   *       <img src="../assets/images/ic_tab_home_active.png" alt="" slot="icon-active">
   *       首页
   * </m-tabbar-item>
   */
  export default{
    props: ['id'],
    computed: {
      isActive(){
        if (this.$parent.value === this.id) {
          return true;
        }
      }
    }
  }
</script>
<style lang="less">
  .m-tabbar-item {
    flex: 1;
    text-align: center;
    padding-top: 0.06rem;
    .m-tabbar-item-icon {
      display: block;
      padding-bottom: 0.06rem;
      img {
        width: 0.48rem;
        height: 0.48rem;
      }

    }
    .m-tabbar-item-text {
      display: block;
      font-size: 0.24rem;
      color: #949494;
    }
    &.is-active {
      .m-tabbar-item-text {
        color: #42bd56;
      }
    }
  }
</style>