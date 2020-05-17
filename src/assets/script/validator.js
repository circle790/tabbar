class Validator {
  constructor(formData, rules) {
    this.formData = formData
    this.rules = rules
  }

  checkData(givenKey) {
    let flag = true
    if (givenKey && this.rules.hasOwnProperty(givenKey) && this.formData.hasOwnProperty(givenKey)) {
      flag = this.matchRule(givenKey)
    } else {
      Object.keys(this.rules).map((givenKey) => {
        flag = this.matchRule(givenKey)
      })
    }
    return flag
  }

  matchRule(givenKey) {
    let flag = true
    for (let key in this.rules[givenKey]) {
      switch (key) {
        case 'required':
          if (this.rules[givenKey].required && this.formData[givenKey].length === 0) {
            console.log(`${givenKey}为必填项`)
            flag = false
          }
          break
        case 'min':
          if (this.rules[givenKey].min && this.formData[givenKey] < this.rules[givenKey].min) {
            console.log(`${givenKey}最小值不小于${this.rules[givenKey].min}`)
            flag = false
          }
          break
        case 'max':
          if (this.rules[givenKey].max && this.formData[givenKey] > this.rules[givenKey].max) {
            console.log(`${givenKey}最大值不大于${this.rules[givenKey].max}`)
            flag = false
          }
          break
        case 'minLength':
          if (this.rules[givenKey].minLength && this.formData[givenKey].length < this.rules[givenKey].minLength) {
            console.log(`${givenKey}长度不小于${this.rules[givenKey].minLength}`)
            flag = false
          }
          break
        case 'maxLength':
          if (this.rules[givenKey].maxLength && this.formData[givenKey].length > this.rules[givenKey].maxLength) {
            console.log(`${givenKey}长度不大于${this.rules[givenKey].maxLength}`)
            flag = false
          }
          break
        case 'regExp':
          if (this.rules[givenKey].regExp && !this.rules[givenKey].regExp.test(this.formData[givenKey])) {
            console.log(`${givenKey}需遵循规则${this.rules[givenKey].regExp}`)
            flag = false
          }
          break
        default:
          flag = true
      }
    }
    return flag
  }
}
export default Validator