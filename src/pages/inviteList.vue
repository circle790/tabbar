

<template>
    <section id="inviteList" class="page">
        <article class="viewport">
            <load-data :callback="loadData" :current-page="currentPage" :total-page="totalPage"
                       :total-count="totalCount" :is-loading="isLoading" @update:is-loading="val => isLoading = val" no-data-tips="暂无成功推荐的好友哦">
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
        </article>
    </section>
</template>
<style lang="less">
    input::-webkit-input-placeholder{
        color:#ccc
    }
    #inviteList {
        .viewport {
            background-color: #f6f6f6;
        }
        .ui-table{
            margin-top: .2rem;
            .tit{
                width:6.4rem;
                padding-left:.3rem;
                div{
                    float:left;
                    font-size:0.28rem;
                }
            }
            .cont{
                padding-left:.3rem;
                li{
                    width: 6.1rem;
                    margin:0;
                    div{
                        float:left;
                        line-height: .95rem;
                        height:.95rem;
                        font-size:0.28rem;
                    }
                }
            }
        }

    }
</style>
<script>
    import base from '../assets/script/base';
    import loadData from '../components/loadData/index.vue';
    export default{
        data(){
            return {
                currentPage:1,
                totalPage:4,
                totalCount:1,
                isLoading: false,
                list: [{
                    regTime:"2017-05-12",
                    phone:15822546846,
                    tenantCount:1,
                    inviteCount:"SADKJD"
                    },
                    {
                        regTime:"2017-05-22",
                        phone:15822265465,
                        tenantCount:2,
                        inviteCount:"FSDAFF"
                    },
                    {
                        regTime:"2017-05-12",
                        phone:15822546846,
                        tenantCount:3,
                        inviteCount:"FSAFDA"
                    },
                    {
                        regTime:"2017-05-22",
                        phone:15822265465,
                        tenantCount:4,
                        inviteCount:"MKONIJ"
                    },
                    {
                        regTime:"2017-05-12",
                        phone:15822546846,
                        tenantCount:5,
                        inviteCount:"FDSADF"
                    },
                    {
                        regTime:"2017-05-22",
                        phone:15822265465,
                        tenantCount:6,
                        inviteCount:"FSDAFG"
                    },
                    {
                        regTime:"2017-05-12",
                        phone:15822546846,
                        tenantCount:1,
                        inviteCount:"SADKJD"
                    },
                    {
                        regTime:"2017-05-22",
                        phone:15822265465,
                        tenantCount:2,
                        inviteCount:"FSDAFF"
                    },
                    {
                        regTime:"2017-05-12",
                        phone:15822546846,
                        tenantCount:3,
                        inviteCount:"FSAFDA"
                    },
                    {
                        regTime:"2017-05-22",
                        phone:15822265465,
                        tenantCount:4,
                        inviteCount:"MKONIJ"
                    },
                    {
                        regTime:"2017-05-12",
                        phone:15822546846,
                        tenantCount:5,
                        inviteCount:"FDSADF"
                    },
                    {
                        regTime:"2017-05-22",
                        phone:15822265465,
                        tenantCount:6,
                        inviteCount:"FSDAFG"
                    },
                    {
                        regTime:"2017-05-12",
                        phone:15822546846,
                        tenantCount:1,
                        inviteCount:"SADKJD"
                    },
                    {
                        regTime:"2017-05-22",
                        phone:15822265465,
                        tenantCount:2,
                        inviteCount:"FSDAFF"
                    },
                    {
                        regTime:"2017-05-12",
                        phone:15822546846,
                        tenantCount:3,
                        inviteCount:"FSAFDA"
                    },
                    {
                        regTime:"2017-05-22",
                        phone:15822265465,
                        tenantCount:4,
                        inviteCount:"MKONIJ"
                    },
                    {
                        regTime:"2017-05-12",
                        phone:15822546846,
                        tenantCount:5,
                        inviteCount:"FDSADF"
                    },
                    {
                        regTime:"2017-05-22",
                        phone:15822265465,
                        tenantCount:6,
                        inviteCount:"FSDAFG"
                    },
                    {
                        regTime:"2017-05-12",
                        phone:15822546846,
                        tenantCount:1,
                        inviteCount:"SADKJD"
                    },
                    {
                        regTime:"2017-05-22",
                        phone:15822265465,
                        tenantCount:2,
                        inviteCount:"FSDAFF"
                    },
                    {
                        regTime:"2017-05-12",
                        phone:15822546846,
                        tenantCount:3,
                        inviteCount:"FSAFDA"
                    },
                    {
                        regTime:"2017-05-22",
                        phone:15822265465,
                        tenantCount:4,
                        inviteCount:"MKONIJ"
                    },
                    {
                        regTime:"2017-05-12",
                        phone:15822546846,
                        tenantCount:5,
                        inviteCount:"FDSADF"
                    },
                    {
                        regTime:"2017-05-22",
                        phone:15822265465,
                        tenantCount:6,
                        inviteCount:"FSDAFG"
                    },
                    {
                        regTime:"2017-05-12",
                        phone:15822546846,
                        tenantCount:1,
                        inviteCount:"SADKJD"
                    },
                    {
                        regTime:"2017-05-22",
                        phone:15822265465,
                        tenantCount:2,
                        inviteCount:"FSDAFF"
                    },
                    {
                        regTime:"2017-05-12",
                        phone:15822546846,
                        tenantCount:3,
                        inviteCount:"FSAFDA"
                    },
                    {
                        regTime:"2017-05-22",
                        phone:15822265465,
                        tenantCount:4,
                        inviteCount:"MKONIJ"
                    },
                    {
                        regTime:"2017-05-12",
                        phone:15822546846,
                        tenantCount:5,
                        inviteCount:"FDSADF"
                    },
                    {
                        regTime:"2017-05-22",
                        phone:15822265465,
                        tenantCount:10,
                        inviteCount:"FSDAFG"
                    }]
            }
        },
        components: {
          loadData
        },
        methods: {
//            loadData(currentPage){
//                let _this = this;
//                base.ajax({
//                    url: "",
//                    type: "get",
//                    data: {
//                        currentPage: currentPage,
//                        pageSize: 20,
//                        service: base.urlMap.inviteList.service
//                    },
//                    dataType: "json",
//                    success: function (data) {
//                        _this.list = _this.list.concat(data.data.list);
//                        _this.currentPage = data.data.currentPage;
//                        _this.totalPage = data.data.pages;
//                        _this.totalCount = data.data.total;
//                        _this.isLoading = false;
//                    }
//                })
//            }
        },
        created() {
            $('#pageLoading').hide();
        }
    }
</script>
