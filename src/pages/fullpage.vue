<template>
  <div class="fullpage">
    <swiper id="vertical" direction="vertical" loop width="100%" :height="screenH + 'px'">
      <swiper-item class="swiper-box swiper-box-one">
        <img width="100%" height="100%" src="https://via.placeholder.com/750x1334/93c47d/FFFFFF?text=page_one">
      </swiper-item>
      <swiper-item class="swiper-box swiper-box-two">
        <img width="100%" height="100%" src="https://via.placeholder.com/750x1334/ffe599/FFFFFF?text=page_two">
      </swiper-item>
      <swiper-item class="swiper-box swiper-box-thr">
        <img width="100%" height="100%" src="https://via.placeholder.com/750x1334/9fc5e8/FFFFFF?text=page_thr">
      </swiper-item>
      <swiper-item class="swiper-box swiper-box-four">
        <img width="100%" height="100%" src="https://via.placeholder.com/750x1334/ffe599/FFFFFF?text=page_four">
      </swiper-item>
    </swiper>
  </div>
</template>
<script>
  import swiper from '../components/swiper/swiper.vue'
  import swiperItem from '../components/swiper/swiper-item'
  export default {
    components: {
      swiper,
      swiperItem
    },
    data() {
      return {
        screenH: 0
      }
    },
    created() {
      this.setPageHeight()
      window.addEventListener('resize', this.setPageHeight, false)
    },
    destroyed() {
      window.removeEventListener('resize', this.setPageHeight)
    },
    methods: {
      setPageHeight() {
        this.screenH = window.innerHeight
      }
    }
  }
</script>
<style lang="less">
</style>