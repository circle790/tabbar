/**
 * vue-plugin编写练习
 */
import Vue from 'vue'
const $validator = class Validator {
  constructor(formData, rules) {
    this.formData = formData
    this.rules = rules
    this.results = {allPassed: false}
  }
  checkData(givenKey) {
    let flag = true
    if(givenKey && this.rules.hasOwnProperty(givenKey) && this.formData.hasOwnProperty(givenKey)) {
      flag = this.checkRule(givenKey)
    } else {
      Object.keys(this.rules).map((givenKey) => {
        if(!this.checkRule(givenKey)){
          flag = false
        }
      })
      this.results.allPassed = flag
    }
    return flag
  }
  checkRule(givenKey) {
    let flag = true
    Object.keys(this.rules[givenKey]).map((key) => {
      flag = flag? this.matchKey(key, givenKey): false;
    })
    return flag
  }
  matchKey(key, givenKey) {
    let flag = true
    let condition = false
    this.results[givenKey] = {passed: false, validMsg: ''}
    switch (key) {
        case 'required':
          condition = this.rules[givenKey].required && this.formData[givenKey].length === 0
          flag = !condition
          this.results[givenKey].passed = flag
          this.results[givenKey].validMsg = condition? `${givenKey}为必填项`: '';
          break
        case 'min': 
          condition = this.rules[givenKey].min && this.formData[givenKey] < this.rules[givenKey].min
          flag = !condition
          this.results[givenKey].passed = flag
          this.results[givenKey].validMsg = condition? `${givenKey}最小值不小于${this.rules[givenKey].min}`: '';
          break
        case 'max': 
          condition = this.rules[givenKey].max && this.formData[givenKey] > this.rules[givenKey].max
          flag = !condition
          this.results[givenKey].passed = flag
          this.results[givenKey].validMsg = condition? `${givenKey}最大值不大于${this.rules[givenKey].max}`: '';
          break
        case 'minLength': 
          condition = this.rules[givenKey].minLength && this.formData[givenKey].length < this.rules[givenKey].minLength
          flag = !condition
          this.results[givenKey].passed = flag
          this.results[givenKey].validMsg = condition? `${givenKey}长度不小于${this.rules[givenKey].minLength}`: '';
          break
        case 'maxLength': 
          condition = this.rules[givenKey].maxLength && this.formData[givenKey].length > this.rules[givenKey].maxLength
          flag = !condition
          this.results[givenKey].passed = flag
          this.results[givenKey].validMsg = condition? `${givenKey}长度不大于${this.rules[givenKey].maxLength}`: '';
          break
        case 'regExp': 
          condition = this.rules[givenKey].regExp && !this.rules[givenKey].regExp.test(this.formData[givenKey])
          flag = !condition
          this.results[givenKey].passed = flag
          this.results[givenKey].validMsg = condition? `${givenKey}格式不正确`: '';
          break
        default: 
          flag = true
          this.results[givenKey].passed = flag
          this.results[givenKey].validMsg = '此规则未定义'
    }
    return flag
  }
  initResults() {
    Object.keys(this.formData).map((key) => {
      this.results[key] = {
        passed: true,
        validMsg: ''
      }
    })
  }
}
const Validator = {
  install(Vue) {
    Vue.prototype.initValidator = function(formData, rules){
      let init = new $validator(formData, rules)
      init.initResults()
      return init
    }
  }
}
export default Validator