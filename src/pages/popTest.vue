<template>
    <div style="text-align:center;">
        <p><br><br></p>
        <p>
            <button @click="showConfirm">弹出confirm</button>
        </p>
        <p><br></p>
        <p>
            <button @click="showNotice">弹出notice</button>
        </p>
        <p><br></p>
        <p>
            <button @click="showAlert">弹出alert</button>
        </p>
        <p><br></p>
        <p><button @click="showToast1">弹出toast</button></p>
        <p><br></p>
        <p><button @click="showToast2">弹出toast</button></p>
    </div>
</template>

<script>
    import base from '../assets/script/base';
    export default {
        name: 'popTest',
        data () {
            return {}
        },
        methods: {
            showConfirm: function () {
                base.confirm({
                    content: '密码不正确，找回或重置密码？',
                    cancelText: '取消',
                    confirmText: `<a href="/test/inviteList" style="display: block;">找回密码</a>`
                })
            },
            showNotice: function () {
                base.notice({
                    type: 'notice',
                    title: '账号已锁定',
                    content: `
                        如何解锁？
                        <br>
                        1、账号3小时后自动解锁<br>
                        2、拨打钱庄客服400-0455-360
                        进行解锁<br>
                        3、找回密码解锁，<a href="/inviteList" style="display: inline;color:#007aff">马上找回</a>
                      `,
                    isShow: true
                })
            },
            showAlert: function () {
                base.alert("这是字符串弹出")
            },
            showToast1: function(){
                base.toast("加载中...")
            },
            showToast2: function(){
                base.toast({
                    iconClass: "yy-icon",
                    customClass: "yy-set",
                    message : "请稍后...",
                    duration : 1800,
                    over: function(){
                    	  console.log("完成了")
                    }
                })
            }
        },
        created(){
            $('#pageLoading').hide();
        }
    }
</script>

<style lang="less">
    button {
        width: 120px;
        height: 36px;
        font-size: 0.28rem;
    }
    .yy-set{
        top:35%;
    }
    .yy-icon{
        width: 0.32rem;
        height: 0.32rem;
        padding: 0.1rem;
        background: url("../assets/images/loading01.gif") no-repeat center;
        background-size:0.32rem 0.32rem;
    }
</style>
