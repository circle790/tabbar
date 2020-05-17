<template>
  <div class="popTest">
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
    <p>
      <button @click="showToast1">弹出toast</button>
    </p>
    <p><br></p>
    <p>
      <button @click="showToast2">弹出toast</button>
    </p>
    <p><br></p>
    <p>
      <a href="javascript:;" @click="displayDatePicker">选择生日{{ birthday }}</a>
    </p>
    <p><br></p>
    <p>
      <router-link to="/formVerify">进入表单验证页面</router-link>
    </p>
    <p><br></p>
    <p>
      <router-link to="/pagination">进入分页页面</router-link>
    </p>
    <date-picker v-if="showDatePicker" @on-close="closeHandler" @on-picked="pickerHandler"></date-picker>
  </div>
</template>

<script>
  import DatePicker from '../components/DatePicker/DatePicker'
  export default {
    name: 'popTest',
    components: {
      DatePicker
    },
    data () {
      return {
        showDatePicker: false,
        birthday: ''
      }
    },
    methods: {
      showConfirm() {
        this.$confirm({
          content: '密码不正确，找回或重置密码？',
          confirmText: `<a href="#" style="display: block;">找回密码</a>`,
          confirmCallback: function () {
            console.log('确定')
          },
          cancelCallback: function () {
            console.log('取消')
          }
        })
      },
      showNotice() {
        this.$notice({
          title: '账号已锁定',
          content: `
                        如何解锁？
                        <br>
                        1、账号3小时后自动解锁<br>
                        2、拨打客服热线400-880-8820
                        进行解锁<br>
                        3、找回密码解锁，<a href="#" style="display: inline;color:#007aff">马上找回</a>
                      `,
          isShow: true
        })
      },
      showAlert() {
        this.$alert("这是字符串弹出")
      },
      showToast1() {
        this.$toast('toast插件')
      },
      showToast2() {
        this.$toast({
          iconClass: "success",
          className: "yy-set-class",
          message: "toast...",
          duration: 2000,
          over() {
            console.log("完成了")
          }
        })
      },
      displayDatePicker() {
        this.showDatePicker = true
      },
      closeHandler() {
        this.showDatePicker = false
      },
      pickerHandler(date) {
        this.birthday = `${date.year}/${date.month}/${date.day}`
      }
    }
  }
</script>

<style lang="less">
  .popTest button {
    width: 140px;
    height: 36px;
    font-size: 0.28rem;
  }

  .popTest p {
    text-align: center;
  }

</style>
