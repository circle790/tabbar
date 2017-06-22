<template>
    <pull-refresh :on-refresh="onRefresh" :config="config">
        <div class="content">
            <p>下拉试试</p>
        </div>
    </pull-refresh>
</template>
<script>
    import pullRefresh from "../components/pullRefresh/pullRefresh";
    export default {
        data(){
            return {
                onRefresh:function(){
                    return new Promise((resolve, reject) => {
                        setTimeout(() => {
                            Math.random() > 0.5? resolve():reject();
                        }, 1000);
                    });
                },
                config:{
                    errorLabel: '数据出错',
                    startLabel: '下拉刷新页面',
                    readyLabel: '松开刷新页面',
                    loadingLabel: '数据加载中'
                }
            }
        },
        components: {
            pullRefresh
        }
    }
</script>
<style lang="less" scoped>
    .content {
        height: 200px;
        background-color: green;
        display:flex;
        justify-content: center;
        align-items: center;
        color:#fff;
        font-size:0.48rem;
    }
</style>