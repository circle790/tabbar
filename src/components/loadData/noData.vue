<template>
    <div class="ui-noData">
        <div class="tips">
            <template v-if="noDataTips">
                {{noDataTips}}
            </template>
            <template v-else>
                暂无数据
            </template>
        </div>
    </div>
</template>
<style lang="less">

    .ui-noData {
        position: relative;
        width: 100%;
        height: 100%;
        .tips {
            font-size: .26rem;
            color: #999;
        }
    }
</style>
<script>

    export default{
        props: ['noDataTips'],
        data(){
            return {}
        },
        components: {}
    }
</script>
