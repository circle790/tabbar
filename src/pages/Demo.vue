<template>
    <div class="main">
        <div class="top">
            <div class="content">顶部元素</div>
        </div>
        <div class="center">
            <div class="content">
                <input type="text" placeholder="输入文字...">
            </div>
        </div>
        <div class="bot">
            <div class="bot-wrap">
                <div class="content">底部元素</div>
            </div>
        </div>
    </div>
</template>
<script>
  export default {
    data() {
      return {

      }
    }
  }
</script>
<style lang="less" scoped>
  .main{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #ccc;
    display: flex;
    flex-wrap: wrap;
    justify-items: center;
    align-content: space-between;
    overflow: auto;
  }
  .top{
    width: 100%;
    height: 5rem;
    background-color: yellow;
    text-align: center;
  }
  .bot{
    width: 100%;
    background-color: green;
    text-align: center;
    .bot-wrap{
      width: 6rem;
      height: 3rem;
      margin: 0 auto;
      background-color: #fff;
    }
  }
  .center{
    width: 100%;
    padding: 0.2rem;
    background-color: red;
    text-align: center;
  }
  .content{
    font-size: 0.6rem;
    line-height: 2;
  }
  input{
    display: block;
    margin: 0 auto;
    width: 6rem;
    height: 0.8rem;
    -webkit-appearance: none;
    appearance: none;
    outline: none;
    border: 0;
    padding: 0 0.2rem;
    border-radius: 0;
    text-align: center;
  }
</style>