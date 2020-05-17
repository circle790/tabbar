<template>
  <div id="inviteList" class="viewport">
    <load-data :callback="loadData" :current-page="currentPage" :total-page="totalPage"
               :total-count="totalCount" :is-loading.sync="isLoading" no-data-tips="暂无成功推荐的好友哦">
      <div class="ui-table">
        <div class="tit">
          <div style="width:1.8rem;text-align:left;">注册时间</div>
          <div style="width:1.9rem">手机号</div>
          <div style="width:1.2rem;text-align:center;">承租数</div>
          <div style="width:1.2rem;text-align:center;">邀请码</div>
        </div>
        <ul class="cont">
          <li v-for="(user,index) in list">
            <div style="width:1.8rem;text-align:left;">{{user.regTime}}</div>
            <div style="width:1.9rem">{{user.phone}}</div>
            <div style="width:1.2rem;text-align:center;">{{user.tenantCount}}</div>
            <div style="width:1.2rem;text-align:center;">{{user.inviteCount}}</div>
          </li>
        </ul>
      </div>
    </load-data>
  </div>
</template>

<script>
  import base from '../assets/script/base';
  import loadData from '../components/loadData/index.vue';
  export default{
    components: {
      loadData
    },
    data(){
      return {
        list: [],
        currentPage: 1,
        totalPage: 4,
        totalCount: 1,
        isLoading: false
      }
    },
    methods: {
      loadData(currentPage){
        let _this = this;
        base.ajax({
          url: base.urlMap.inviteList.url,
          type: "get",
          data: {
            currentPage: currentPage,
            pageSize: 20,
          },
          dataType: "json",
          success: function (data) {
            _this.list = _this.list.concat(data.data.list);
            _this.currentPage = data.data.currentPage;
            _this.totalPage = data.data.pages;
            _this.totalCount = data.data.total;
            _this.isLoading = false;
          }
        })
      }
    }
  }
</script>


<style lang="less">
  #inviteList {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #f6f6f6;
    .list {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      overflow-y: scroll;
      height: auto;
      -webkit-overflow-scrolling: touch;
      overflow-scrolling: touch;
      max-width: 720px;
      margin: 0 auto;
      font-size: .32rem;
    }
  }

  .ui-table {
    margin-top: .2rem;
    .tit {
      width: 6.4rem;
      padding-left: .3rem;
      div {
        float: left;
        font-size: 0.28rem;
      }
    }
    .cont {
      padding-left: .3rem;
      li {
        width: 6.1rem;
        margin: 0;
        div {
          float: left;
          line-height: .95rem;
          height: .95rem;
          font-size: 0.28rem;
        }
      }
    }
  }

</style>
