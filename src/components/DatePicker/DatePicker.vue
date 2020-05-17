<template>
  <div class="date-picker">
    <div class="date-picker-bg"></div>
    <div class="date-picker-area">
      <div class="title">选择日期</div>
      <div class="close" @click="close"></div>
      <div ref="picker" class="picker" :style="{height:`${itemHeight*3}rem`}">
        <ul class="picker-list">
          <li ref="yearArea" class="area-list year">
            <ul class="time-list" :style="{transform: `translate3d(0, ${yearMove}px, 0)`}">
              <li v-for="y in yearList" :key="y" :class="['time-item', {active:y===selectedYear}]">{{ y }}</li>
            </ul>
          </li>
          <li ref="monthArea" class="area-list month">
            <ul class="time-list" :style="{transform: `translate3d(0, ${monthMove}px, 0)`}">
              <li v-for="m in monthList" :key="m" :class="['time-item', {active:m===selectedMonth}]">{{ m }}</li>
            </ul>
          </li>
          <li ref="dayArea" class="area-list day">
            <ul class="time-list" :style="{transform: `translate3d(0, ${dayMove}px, 0)`}">
              <li v-for="d in dayList" :key="d" :class="['time-item', {active:d===selectedDay}]">{{ d }}</li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="sure" @click="confirm">确定</div>
    </div>
  </div>
</template>
<script>
  // rem转化为实际尺寸px
  const rem2px = rem => rem * parseFloat(document.documentElement.style.fontSize)
  // 实际尺寸px转化为rem
  const px2rem = px => px / parseFloat(document.documentElement.style.fontSize)
  // 设计尺寸px转化为rem
  const designed2rem = px => px / 100
  // 日期相关
  let now = new Date()
  let yearNow = now.getFullYear()
  let monthNow = now.getMonth() + 1
  let startYear = now.getFullYear() - 6
  let maxMonth = 12
  // 滑动相关
  let draggingTarget = null
  let itemHeightPx = 0  // 时间表滑动单元的高度
  let minMove = 0 // 时间表最小的移动距离
  let maxMove = 0 // 时间表最大的移动距离
  let moved = 0 // 时间表移动之前已经移动的距离
  let willMoved = 0 // 时间表即将移动的距离
  let pageY = 0
  let startY = 0
  let movedY = 0 // 从触摸到松开的y轴位移(px)
  let selectIndex = 0
  export default {
    name: 'DatePicker',
    props: {
      defaultDate: {
        required: false,
        type: Date,
        default: () => {
          return null
        }
      },
      yearStart: {
        required: false,
        type: Number,
        default: () => new Date().getFullYear() - 12,
      }
    },
    data() {
      if (this.defaultDate) {
        startYear = new Date(this.defaultDate).getFullYear() - 4
      } else {
        startYear = this.yearStart
      }
      const yearList = new Array(yearNow - startYear + 1).fill(startYear).map((v, i) => v + i)
      const selectedYear = this.defaultDate ? this.defaultDate.getFullYear() : yearList[1]
      maxMonth = selectedYear === yearNow ? monthNow : 12
      const monthList = new Array(maxMonth).fill(1).map((v, i) => v + i)
      const selectedMonth = this.defaultDate ? this.defaultDate.getMonth() + 1 : monthList[1]
      const dayList = new Array(this.getMonthEndDay(selectedYear, selectedMonth)).fill(1).map((v, i) => v + i)
      const selectedDay = this.defaultDate ? this.defaultDate.getDate() : dayList[1]
      return {
        selectedYear, // 当前选中的年份
        selectedMonth, // 当前选中的月粉
        selectedDay, // 当前选中的日子
        yearList, // 可选年份列表
        monthList, // 可选月份列表
        dayList,  // 可选日子列表
        itemHeight: designed2rem(80), // 日期元素高度
        $picker: null,  // 日期滑动选择整体
        $yearArea: null,  // 年份滑动选择
        $monthArea: null, // 月份滑动选择
        $dayArea: null, // 日子滑动选择
        yearMove: 0,  // 年份滑动距离
        monthMove: 0, // 月份滑动距离
        dayMove: 0, // 日子滑动距离
      }
    },
    created() {
      // 滑动单元实际尺寸px大小(初始滑动距离)
      itemHeightPx = rem2px(this.itemHeight)
      minMove = itemHeightPx
      //  日期初始位置（index=1为初始位置）
      this.yearMove = -((this.yearList.indexOf(this.selectedYear) - 1) * itemHeightPx)
      this.monthMove = -((this.monthList.indexOf(this.selectedMonth) - 1) * itemHeightPx)
      this.dayMove = -((this.dayList.indexOf(this.selectedDay) - 1) * itemHeightPx)
    },
    mounted() {
      this.$picker = this.$refs.picker
      this.$yearArea = this.$refs.yearArea
      this.$monthArea = this.$refs.monthArea
      this.$dayArea = this.$refs.dayArea

      this.$picker.addEventListener('touchstart', this.onDragStart)
      this.$picker.addEventListener('touchmove', this.onDragging)
      this.$picker.addEventListener('touchend', this.onDragStop)
    },
    methods: {
      // 闰年判断
      isLeapYear(year) {
        return (year % 400 === 0) || (year % 100 !== 0 && year % 4 === 0);
      },
      // 大小月判断
      isShortMonth(month) {
        return [4, 6, 9, 11].indexOf(month) > -1;
      },
      // 获取月份天数
      getMonthEndDay(year, month) {
        if (this.isShortMonth(month)) {
          return 30;
        } else if (month === 2) {
          return this.isLeapYear(year) ? 29 : 28;
        } else {
          return 31;
        }
      },
      onDragStart(e) {
        e.preventDefault()
        draggingTarget = this.getDraggingTarget(e.target)
        if(!draggingTarget) { return false }
        switch(draggingTarget) {
          case 'year':
            moved = this.yearMove
            maxMove = rem2px(this.yearList.length > 3 ? (this.yearList.length - 3) * this.itemHeight : 0) + itemHeightPx
            break
          case 'month':
            moved = this.monthMove
            maxMove = rem2px(this.monthList.length > 3 ? (this.monthList.length - 3) * this.itemHeight : 0) + itemHeightPx
            break
          case 'day':
            moved = this.dayMove
            maxMove = rem2px(this.dayList.length > 3 ? (this.dayList.length - 3) * this.itemHeight : 0) + itemHeightPx
            break
          default:
            break
        }
        pageY = e.touches[0].pageY
        startY = pageY
        movedY = 0
      },
      onDragging(e) {
        e.preventDefault()
        if (!draggingTarget) { return false }
        pageY = e.touches[0].pageY
        movedY = pageY - startY
        // 滑动距离下滑为正，上滑为负
        willMoved = moved + movedY
        // 设置弹性滑动
        if(willMoved > minMove) { // 下滑极限
          willMoved = minMove + (willMoved - moved) * 0.12
        } else if (-willMoved > maxMove) {  // 上滑极限
          willMoved = -maxMove + (willMoved - moved) * 0.12
        }
        selectIndex = Math.round(-willMoved / itemHeightPx) + 1
        selectIndex = selectIndex <= 0 ? 0 : selectIndex
        switch (draggingTarget) {
          case 'year':
            this.yearMove = willMoved
            this.selectedYear = selectIndex >= this.yearList.length ? this.yearList[this.yearList.length-1] : this.yearList[selectIndex]
            break
          case 'month':
            this.monthMove = willMoved
            this.selectedMonth = selectIndex >= this.monthList.length ? this.monthList[this.monthList.length-1] : this.monthList[selectIndex]
            break
          case 'day':
            this.dayMove = willMoved
            this.selectedDay = selectIndex >= this.dayList.length ? this.dayList[this.dayList.length-1] : this.dayList[selectIndex]
            break
        }
      },
      onDragStop(e) {
        e.preventDefault()
        if (!draggingTarget) return false
        pageY = e.changedTouches[0].pageY
        movedY = pageY - startY
        willMoved = moved + movedY
        if (willMoved > minMove) {
          willMoved = minMove
        } else if (willMoved < -maxMove) {
          willMoved = -maxMove
        }
        willMoved = Math.round(willMoved / itemHeightPx) * itemHeightPx
        selectIndex = Math.round(-willMoved / itemHeightPx) + 1
        selectIndex = selectIndex <= 0 ? 0 : selectIndex
        switch (draggingTarget) {
          case 'year':
            this.yearMove = willMoved
            this.selectedYear = selectIndex >= this.yearList.length ? this.yearList[this.yearList.length-1] : this.yearList[selectIndex]
            break
          case 'month':
            this.monthMove = willMoved
            this.selectedMonth = selectIndex >= this.monthList.length ? this.monthList[this.monthList.length-1] : this.monthList[selectIndex]
            break
          case 'day':
            this.dayMove = willMoved
            this.selectedDay = selectIndex >= this.dayList.length ? this.dayList[this.dayList.length-1] : this.dayList[selectIndex]
            break
        }
      },
      getDraggingTarget(ele) {
        if(!ele) { return '' }
        if(ele === this.$yearArea) {
          return 'year'
        } else if(ele === this.$monthArea) {
          return 'month'
        } else if(ele === this.$dayArea) {
          return 'day'
        } else {
          return this.getDraggingTarget(ele.parentElement)
        }
      },
      confirm () {
        console.log('选择的生日是' + this.selectedYear + '.' + this.selectedMonth+ '.' + this.selectedDay)
        this.$emit('on-picked', { year: this.selectedYear, month: this.selectedMonth, day: this.selectedDay })
        this.close()
      },
      close() {
        console.log('关闭生日选择窗')
        this.$emit('on-close')
      }
    }
  }
</script>
<style lang="less" scoped>
  .date-picker{
    &-bg{
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, .75);
      z-index: 11;
    }
    &-area{
      width: 6rem;
      height: 4.8rem;
      background-color: #fff;
      border-radius: 0.42rem;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate3d(-50%, -50%, 0);
      z-index: 12;
      box-sizing: border-box;
      padding: 0.3rem;
    }
    .close{
      width: 0.96rem;
      height: 0.96rem;
      position: absolute;
      top: -0.18rem;
      right: -0.18rem;
      z-index: 21;
      background: url("./close.png") no-repeat center/cover;
    }
    .title{
      font-size: 0.42rem;
      font-weight: bolder;
      text-align: center;
      margin-bottom: 0.3rem;
    }
    .sure{
      font-size: 0.42rem;
      color: #fff;
      line-height: 0.72rem;
      text-align: center;
      background-color: #fe534b;
      border-radius: 0.72rem;
      width: 3.6rem;
      height: 0.72rem;
      position: absolute;
      bottom: 0.3rem;
      left: 50%;
      transform: translate3d(-50%, 0, 0);
    }
    .picker{
      width: 100%;
      height: 2.4rem;
      background-color: #ccc;
      overflow: hidden;
    }
    .picker-list{
      width: 100%;
      height: 100%;
      overflow: hidden;
      .area-list{
        width: 33.33%;
        height: 100%;
        float: left;
      }
      /*.time-list{*/
        /*transition: transform 150ms linear 0s;*/
      /*}*/
      .time-item{
        font-size: 0.48rem;
        text-align: center;
        height: 0.8rem;
        line-height: 0.8rem;
        color: #444;
        transform: scale3d(.83, .83, 1);
        &.active{
          color: #fd7107;
          transform: scale3d(1, 1, 1);
        }
      }
    }
  }
</style>