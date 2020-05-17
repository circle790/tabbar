<template>
  <div class="tab-wrap">
    <m-tabbar v-model="select" :which="select">
      <m-tabbar-item id='popTest'>
        <img src="../assets/images/ic_tab_home_normal.png" alt="" slot="icon-normal">
        <img src="../assets/images/ic_tab_home_active.png" alt="" slot="icon-active">
        弹窗
      </m-tabbar-item>
      <m-tabbar-item id='inviteList'>
        <img src="../assets/images/ic_tab_subject_normal.png" alt="" slot="icon-normal">
        <img src="../assets/images/ic_tab_subject_active.png" alt="" slot="icon-active">
        列表
      </m-tabbar-item>
      <m-tabbar-item id='tabView'>
        <img src="../assets/images/ic_tab_status_normal.png" alt="" slot="icon-normal">
        <img src="../assets/images/ic_tab_status_active.png" alt="" slot="icon-active">
        选项卡
      </m-tabbar-item>
      <m-tabbar-item id='pullRefresh'>
        <img src="../assets/images/ic_tab_group_normal.png" alt="" slot="icon-normal">
        <img src="../assets/images/ic_tab_group_active.png" alt="" slot="icon-active">
        下拉刷新
      </m-tabbar-item>
      <m-tabbar-item id='banner'>
        <img src="../assets/images/ic_tab_profile_normal.png" alt="" slot="icon-normal">
        <img src="../assets/images/ic_tab_profile_active.png" alt="" slot="icon-active">
        banner
      </m-tabbar-item>
    </m-tabbar>
    <div class="content">
      <component :is="select"></component>
    </div>
  </div>
</template>

<script>
  import mTabbar from '../components/tabbar/tabbar'
  import mTabbarItem from '../components/tabbar/tabbar-item'
  import tabView from './tabView'
  import inviteList from './inviteList'
  import popTest from './popTest'
  import pullRefresh from './pullRefresh'
  import banner from './banner.vue'
  import fullpage from './fullpage.vue'

  export default {
    name: 'index',
    components: {
      mTabbar,
      mTabbarItem,
      popTest,
      inviteList,
      tabView,
      pullRefresh,
      banner,
      fullpage
    },
    data() {
      return {
        select: "popTest"
      }
    }
  }
</script>


<style lang="less" scoped>
  .content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-bottom: 1rem #fff solid;
    box-sizing: border-box;
  }

  .viewcont {
    text-align: center;
    font-size: 0.28rem;
    padding-top: 0.3rem;
  }
</style>