<template>
    <div class="tab-wrap">
    <m-tabbar v-model="select" :which="select">
      <m-tabbar-item id='tab1'>
        <img src="../assets/images/ic_tab_home_normal.png" alt="" slot="icon-normal"> 
        <img src="../assets/images/ic_tab_home_active.png" alt="" slot="icon-active"> 
        首页
      </m-tabbar-item>
      <m-tabbar-item id='tab2'>
        <img src="../assets/images/ic_tab_subject_normal.png" alt="" slot="icon-normal"> 
        <img src="../assets/images/ic_tab_subject_active.png" alt="" slot="icon-active"> 
        书影音
      </m-tabbar-item>
      <m-tabbar-item id='tab3'>
        <img src="../assets/images/ic_tab_status_normal.png" alt="" slot="icon-normal"> 
        <img src="../assets/images/ic_tab_status_active.png" alt="" slot="icon-active"> 
        广播
      </m-tabbar-item>
      <m-tabbar-item id='tab4'>
        <img src="../assets/images/ic_tab_group_normal.png" alt="" slot="icon-normal"> 
        <img src="../assets/images/ic_tab_group_active.png" alt="" slot="icon-active"> 
        小组
      </m-tabbar-item>
       <m-tabbar-item id='tab5'>
        <img src="../assets/images/ic_tab_profile_normal.png" alt="" slot="icon-normal"> 
        <img src="../assets/images/ic_tab_profile_active.png" alt="" slot="icon-active"> 
        我的
      </m-tabbar-item>
    </m-tabbar>
    <component :is="select"></component>
    </div>
</template>

<script>
  import mTabbar from '../components/tabbar/tabbar'
  import mTabbarItem from '../components/tabbar/tabbar-item'
  export default {
    name: 'index',
    components: {
        mTabbar,
        mTabbarItem,
        tab1: {
            template:`
                <div class="viewcont">
                    <p>首页内容</p>
                </div>`
        },
        tab2: {
            template:`
                <div class="viewcont">
                    <p>这是关于</p>
                </div>`
        },
        tab3: {
            template:`
                <div class="viewcont">
                    <p>个人资料</p>
                </div>`
        },
        tab4: {
            template:`
                <div class="viewcont">
                    <p>后来添加</p>
                </div>`
        },
        tab5: {
            template:`
                <div class="viewcont">
                    <p>用于测试</p>
                </div>`
        }
    },
    data() {
        return {
          select:"tab1"
        }
    }
  }
</script>


<style lang="less">
.viewcont{
    text-align: center;
    font-size: 24px;
    padding-top:20px;
}
</style>