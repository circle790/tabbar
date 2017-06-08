<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'app'
    }
</script>

<style lang="less">
    //--------------------------------------------------------【弹出框】


    //公共样式变量
    .pop-main {
        position: absolute;
        left: 50%;
        top: 50%;
        border-radius: .1rem;
        overflow: hidden;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }

    //警告与确认提示框
    .ui-pop-frame {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        z-index: 99999;

        .ui-pop-main {
            position: absolute;
            left: 50%;
            top: 50%;
            border-radius: .1rem;
            overflow: hidden;
            -webkit-transform: translate(-50%, -50%);
            -ms-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
            width: 5.3rem;
            background-color: #fff;
        }

        .ui-pop-tit {
            margin-top: .45rem;
            font-size: .32rem;
            font-weight: bold;
            color: #333;
            text-align: center;

            & + .ui-pop-cont {
                font-size: .28rem;
                min-height: .1rem;
                padding: .3rem .35rem;
                text-align: left;
            }

        }
        .ui-pop-cont {
            padding: .7rem .35rem;
            font-size: .32rem;
            line-height: 1.5;
            text-align: center;
        }

        .ui-pop-operation {
            border-top: 1px solid #ccc;
            display: table;
            width: 100%;
            height: 100%;
            table-layout: fixed;
        }

        .ui-pop-operation a {
            display: table-cell;
            text-align: center;
            line-height: .9rem;
            font-size: .32rem;
            color: #f07e68;
        }

        .ui-pop-operation a:nth-child(n+2) {
            border-left: 1px solid #ccc;
        }

        .ui-pop-operation a:nth-last-child(n+2) {
            color: #999;
        }

    }

    .ui-pop-wait {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 99999;
        background-color: rgba(255, 255, 255, .3);

        .ui-pop-main {
            padding: .3rem;
            font-size: .28rem;
            color: #fff;
            background-color: rgba(0, 0, 0, .7);
        }

    }
</style>
