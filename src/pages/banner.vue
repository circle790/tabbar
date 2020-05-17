<template>
  <div class="home">
    <br>
    <br>
    <h2 style="text-align: center;">horizontal</h2>
    <br>
    <swiper id="horizontal" :list="bannerList" auto loop width="100%" height="180px" dots-position="center"></swiper>
    <br>
    <br>
    <h2 style="text-align: center;">vertical</h2>
    <br>
    <swiper id="vertical" direction="vertical" width="100%" :height="screenH + 'px'">
      <swiper-item class="swiper-img">
        <img width="100%" height="100%" src="https://iph.href.lu/750x1334?text=banner04">
      </swiper-item>
      <swiper-item class="swiper-desc">
        <div class="swiperScroll">
          <h2>swiper内部内容的滑动</h2>
          <br>
          <br>
          <p>长长的文字描述。。。</p>
          <p>就是很长的一段文字啦。。。</p>
          <p>有多长呢？</p>
          <p>很长很长的文字。。。</p>
          <p>非常长非常长的。。。</p>
          <p>好，这么长吧。。。</p>
          <p>哎呀，还是短了。。。</p>
          <p>再长一点。。。</p>
          <p>这样呢。。。？</p>
          <p>还是不够。。。</p>
          <p>那再加长。。。</p>
          <p>够了吧。。。</p>
          <p>啊 little more。。。</p>
          <p>还差的远啊。。。</p>
          <p>直接复制吧。。。</p>
          <p>长长的文字描述。。。</p>
          <p>就是很长的一段文字啦。。。</p>
          <p>有多长呢？</p>
          <p>很长很长的文字。。。</p>
          <p>非常长非常长的。。。</p>
          <p>好，这么长吧。。。</p>
          <p>哎呀，还是短了。。。</p>
          <p>再长一点。。。</p>
          <p>这样呢。。。？</p>
          <p>还是不够。。。</p>
          <p>那再加长。。。</p>
          <p>够了吧。。。</p>
          <p>啊 little more。。。</p>
          <p>还差的远啊。。。</p>
          <p>直接复制吧。。。</p>
          <p>长长的文字描述。。。</p>
          <p>就是很长的一段文字啦。。。</p>
          <p>有多长呢？</p>
          <p>很长很长的文字。。。</p>
          <p>非常长非常长的。。。</p>
          <p>好，这么长吧。。。</p>
          <p>哎呀，还是短了。。。</p>
          <p>再长一点。。。</p>
          <p>这样呢。。。？</p>
          <p>还是不够。。。</p>
          <p>那再加长。。。</p>
          <p>够了吧。。。</p>
          <p>啊 little more。。。</p>
          <p>还差的远啊。。。</p>
          <p>直接复制吧。。。</p>
          <p>长长的文字描述。。。</p>
          <p>就是很长的一段文字啦。。。</p>
          <p>有多长呢？</p>
          <p>很长很长的文字。。。</p>
          <p>非常长非常长的。。。</p>
          <p>好，这么长吧。。。</p>
          <p>哎呀，还是短了。。。</p>
          <p>再长一点。。。</p>
          <p>这样呢。。。？</p>
          <p>还是不够。。。</p>
          <p>那再加长。。。</p>
          <p>够了吧。。。</p>
          <p>啊 little more。。。</p>
          <p>还差的远啊。。。</p>
          <p>直接复制吧。。。</p>
          <p>长长的文字描述。。。</p>
          <p>就是很长的一段文字啦。。。</p>
          <p>有多长呢？</p>
          <p>很长很长的文字。。。</p>
          <p>非常长非常长的。。。</p>
          <p>好，这么长吧。。。</p>
          <p>哎呀，还是短了。。。</p>
          <p>再长一点。。。</p>
          <p>这样呢。。。？</p>
          <p>还是不够。。。</p>
          <p>那再加长。。。</p>
          <p>够了吧。。。</p>
          <p>啊 little more。。。</p>
          <p>还差的远啊。。。</p>
          <p>直接复制吧。。。</p>
          <p>长长的文字描述。。。</p>
          <p>就是很长的一段文字啦。。。</p>
          <p>有多长呢？</p>
          <p>很长很长的文字。。。</p>
          <p>非常长非常长的。。。</p>
          <p>好，这么长吧。。。</p>
          <p>哎呀，还是短了。。。</p>
          <p>再长一点。。。</p>
          <p>这样呢。。。？</p>
          <p>还是不够。。。</p>
          <p>那再加长。。。</p>
          <p>够了吧。。。</p>
          <p>啊 little more。。。</p>
          <p>还差的远啊。。。</p>
          <p>直接复制吧。。。</p>
          <p>长长的文字描述。。。</p>
          <p>就是很长的一段文字啦。。。</p>
          <p>有多长呢？</p>
          <p>很长很长的文字。。。</p>
          <p>非常长非常长的。。。</p>
          <p>好，这么长吧。。。</p>
          <p>哎呀，还是短了。。。</p>
          <p>再长一点。。。</p>
          <p>这样呢。。。？</p>
          <p>还是不够。。。</p>
          <p>那再加长。。。</p>
          <p>够了吧。。。</p>
          <p>啊 little more。。。</p>
          <p>还差的远啊。。。</p>
          <p>直接复制吧。。。</p>
        </div>
      </swiper-item>
    </swiper>
  </div>
</template>
<script>
  import swiper from '../components/swiper/swiper.vue'
  import swiperItem from '../components/swiper/swiper-item'
  export default {
    components: {
      swiper, swiperItem
    },
    data(){
      return {
        screenH: window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight,
        bannerList: [{
          url: 'javascript:',
          img: 'https://iph.href.lu/750x1334?text=banner01',
        }, {
          url: 'javascript:',
          img: 'https://iph.href.lu/750x1334?text=banner02'
        }, {
          url: 'javascript:',
          img: 'https://iph.href.lu/750x1334?text=banner03'
        }]
      }
    },
    mounted(){
      let _this = this;
      $(window).on("resize", function () {
        _this.screenH = window.innerHeight
          || document.documentElement.clientHeight
          || document.body.clientHeight;
      })

      let startScroll, touchStart, touchCurrent;
      let swiperSlides = $(".swiper-desc");
      swiperSlides.on('touchstart', function (e) {
        startScroll = this.scrollTop;
        touchStart = e.targetTouches[0].pageY;
      });
      swiperSlides.on('touchend', function (e) {
        touchCurrent = e.changedTouches[0].pageY;
        let touchesDiff = touchCurrent - touchStart;
        let slide = this;
        let onlyScrolling =
          ( slide.scrollHeight > slide.offsetHeight ) && //allow only when slide is scrollable
          (
            ( touchesDiff < 0 && startScroll === 0 ) || //start from top edge to scroll bottom
            ( touchesDiff > 0 && startScroll === ( slide.scrollHeight - slide.offsetHeight ) ) || //start from bottom edge to scroll top
            ( startScroll > 0 && startScroll < ( slide.scrollHeight - slide.offsetHeight ) ) //start from the middle
          );
        if (onlyScrolling) {
          e.stopPropagation();
        } else {
          return;
        }
      });
    }
  }
</script>
<style lang="less">
  #horizontal .vux-icon-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.7);
    &.active {
      background-color: #fff;
    }
  }

  #vertical .swiper-desc {
    overflow-y: auto;
  }

  #vertical .swiperScroll {
    padding: 0.4rem;
  }
</style>
