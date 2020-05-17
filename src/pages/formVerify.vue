<template>
  <div class="formData">
    <div class="row">
      <div class="top">
        <span class="label">姓名：</span>
        <input type="text" v-model="member.name" placeholder="请输入姓名" @input="validator.checkData('name')">
      </div>
      <div class="cover" v-show="!validator.results.name.passed">*{{validator.results.name.validMsg}}</div>
    </div>
    <div class="row">
      <div class="top">
        <span class="label">年龄：</span>
        <input type="number" v-model="member.age" placeholder="请输入年龄" @input="validator.checkData('age')">
      </div>
      <div class="cover" v-show="!validator.results.age.passed">*{{validator.results.age.validMsg}}</div>
    </div>
    <div class="row">
      <div class="top">
        <span class="label">性别：</span>
        <label><input type="radio" v-model="member.gender" value="男" @change="validator.checkData('gender')">男</label>
        <label><input type="radio" v-model="member.gender" value="女" @change="validator.checkData('gender')">女</label>
      </div>
      <div class="cover" v-show="!validator.results.gender.passed">*{{validator.results.gender.validMsg}}</div>
    </div>
    <div class="row">
      <div class="top">
        <span class="label">手机：</span>
        <input type="tel" v-model="member.phone" placeholder="请输入手机号" @input="validator.checkData('phone')">
      </div>
      <div class="cover" v-show="!validator.results.phone.passed">*{{validator.results.phone.validMsg}}</div>
    </div>
    <div class="row">
      <div class="top">
        <span class="label">职业：</span>
        <select v-model="member.job" @change="validator.checkData('job')">
          <option disabled value="">请选择</option>
          <option value="1">教师</option>
          <option value="2">学生</option>
          <option value="3">医生</option>
          <option value="4">护士</option>
          <option value="5">警察</option>
          <option value="6">工人</option>
        </select>
      </div>
      <div class="cover" v-show="!validator.results.job.passed">*{{validator.results.job.validMsg}}</div>
    </div>
    <div class="row">
      <div class="top">
        <span class="label">爱好：</span>
        <label><input type="checkbox" value="游泳" v-model="member.hobby"
                      @change="validator.checkData('hobby')">游泳</label>
        <label><input type="checkbox" value="跑步" v-model="member.hobby"
                      @change="validator.checkData('hobby')">跑步</label>
        <label><input type="checkbox" value="篮球" v-model="member.hobby"
                      @change="validator.checkData('hobby')">篮球</label>
        <label><input type="checkbox" value="阅读" v-model="member.hobby"
                      @change="validator.checkData('hobby')">阅读</label>
        <label><input type="checkbox" value="唱歌" v-model="member.hobby"
                      @change="validator.checkData('hobby')">唱歌</label>
        <label><input type="checkbox" value="上网" v-model="member.hobby"
                      @change="validator.checkData('hobby')">上网</label>
      </div>
      <div class="cover" v-show="!validator.results.hobby.passed">*{{validator.results.hobby.validMsg}}</div>
    </div>
    <div class="row">
      <p class="big-label">个人简介：</p>
      <textarea cols="30" rows="10" v-model="member.summary" placeholder="请输入内容"></textarea>
    </div>
    <div class="row">
      <button class="button" @click="validator.checkData()">确定提交</button>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'formVerify',
    data() {
      return {
        member: {
          name: '',
          age: '',
          gender: '',
          phone: '',
          job: '',
          hobby: [],
          summary: ''
        },
        rules: {
          name: {
            required: true
          },
          age: {
            required: true,
            min: 18,
            max: 50,
            minLength: 2,
            maxLength: 3,
            regExp: /^[\d]+$/,
          },
          gender: {
            required: true
          },
          phone: {
            required: true,
            regExp: /^((13[0-9]{9})|(14[0-9]{9})|(15[0-35-9][0-9]{8})|(17[0-9]{9})|(18[0-9]{9}))$/,
            maxLength: 11
          },
          job: {
            required: true
          },
          hobby: {
            required: true
          }
        },
        validator: null
      }
    },
    created() {
      this.validator = this.initValidator(this.member, this.rules)
    }
  }
</script>
<style lang="less" scoped>
  .formData {
    padding: 0.36rem;
    .row {
      margin-bottom: 0.32rem;
      .top {
        margin-bottom: 0.1rem;
      }
      .cover {
        font-size: 0.18rem;
        color: red;
      }
      .big-label {
        margin-bottom: 0.1rem;
      }
      input[type="text"], input[type="number"], input[type="tel"] {
        width: 180px;
        height: 32px;
        padding: 0 10px;
        border: solid 0.01rem #ccc;
        border-radius: 0.1rem;
      }
      select {
        width: 180px;
        height: 32px;
        padding: 0 10px;
        border: solid 0.01rem #ccc;
      }
      textarea {
        width: 320px;
        height: 120px;
        padding: 10px;
        box-sizing: border-box;
        border: solid 0.01rem #ccc;
        border-radius: 0.1rem;
      }
      button.button {
        width: 120px;
        height: 36px;
        font-size: 0.26rem;
        background-color: deepskyblue;
        border: none;
        border-radius: 0.1rem;
        color: #fff;
        &.disabled {
          background-color: #ccc;
        }
      }
    }
  }
</style>