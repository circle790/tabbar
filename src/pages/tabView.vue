<template>
    <div class="tabView">
        <ul class="tabs">
            <li class="tab" @click="toggle(index ,tab.view)" v-for="(tab,index) in tabConfig.tabs" :class="{isActive:tabConfig.isActive==index}">
                <em class="icon">{{tab.icon}}</em>
                <em class="iconActive">{{tab.iconActive}}</em>
                <span>{{tab.label}}</span>
            </li>
        </ul>
        <component :is="tabConfig.currentView"></component>
    </div>
</template>

<style scoped>
    .tabs{
        width: 100%;
        border-bottom:solid 1px #f3f3f3;
        display: flex;
        justify-content:space-between;
        align-items:center;
        position: relative;
    }
    .tab{
        height: 40px;
        background-color: #fff;
        display: flex;
        flex-grow:1;
        justify-content:center;
        align-items:center;
        color: blue;
    }
    .tab.isActive{
        background-color: #f3f3f3;
    }
    .icon{
        color: blue;
        border:1px solid blue;
        width: 20px;
        height: 20px;
        margin-right:5px;
        border-radius:50%;
        text-align: center;
        line-height: 20px;
        font-style: normal;
    }
    .iconActive{
        color: #fff;
        border:1px solid blue;
        background-color: blue;
        width: 20px;
        height: 20px;
        margin-right:5px;
        border-radius:50%;
        text-align: center;
        line-height: 20px;
        font-style: normal;
        display: none;
    }
    .tab.isActive .icon{
        display: none;
    }
    .tab.isActive .iconActive{
        display: block;
    }
    .viewcont{
        text-align: center;
        font-size: 24px;
        padding-top:20px;
    }
</style>

<script>
    export default ({
        data(){
            return {
                tabConfig:{
                    isActive: 0,
                    currentView: 'tab01',
                    tabs: [
                        {
                            label: '你的',
                            icon: '01',
                            iconActive: 'a1',
                            view: "tab01"
                        },
                        {
                            label: '我的',
                            icon: '02',
                            iconActive: 'a2',
                            view: "tab02"
                        },
                        {
                            label: '他的',
                            icon: '03',
                            iconActive: 'a3',
                            view: "tab03"
                        }
                    ]
                }
            }
        },
        components:{
            tab01: {
                template:`
                    <div class="viewcont">
                        <p>你的内容</p>
                    </div>`
            },
            tab02: {
                template:`
                    <div class="viewcont">
                        <p>我的关于</p>
                    </div>`
            },
            tab03: {
                template:`
                    <div class="viewcont">
                        <p>他的资料</p>
                    </div>`
            }
        },
        methods: {
            toggle: function(i, v){
                this.tabConfig.isActive = i;
                this.tabConfig.currentView = v;
            } 
        }
    })
</script>