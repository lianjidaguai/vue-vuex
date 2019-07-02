<template>
  <div class="mz-banner swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide"
      v-for="item in list"
      :key="item.bannerId" >
          <img :src="item.imgUrl"/>
      </div>

    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination" v-if="pagination"></div>

    <!-- 如果需要导航按钮 -->
    <template v-if="navigation">
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </template>
    <!-- 如果需要滚动条 -->
    <div class="swiper-scrollbar" v-if="scrollbar"></div>
  </div>
</template>

<script>
import Swiper from 'swiper';

export default {
  name: 'Banner',

  props: {
    // 轮播图片
    list: {
      type: Array,
      default() {
        return [];
      },
    },
    // 是否需要分页器
    pagination: {
      type: Boolean,
      default: false,
    },
    // 是否需要上下箭头
    navigation: {
      type: Boolean,
      default: false,
    },
    // 是否需要滚动条
    scrollbar: {
      type: Boolean,
      default: false,
    },
    loop: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    list(newVal, oldVal) {
      if (this.mySwiper) {
        this.mySwiper.destroy();
      }
      this.$nextTick(() => {
        this.initSwiper();
      });
    },
  },
  methods: {
    initSwiper() {
      this.mySwiper = new Swiper('.swiper-container', {
        autoplay: {
          delay: 1000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        loop: this.loop,
        pagination: this.pagination
          ? {
            el: '.swiper-pagination',

          } : {},

        navigation: this.navigation
          ? {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }
          : {},

        scrollbar: this.scrollbar
          ? {
            el: 'swiper-scrollbar',
          }
          : {},

      });
    },
  },


  //  updated(){
  //      //判断是否是list有变化，如果是初始化swiper
  //       //  if(this.list.length&&!this.mySwiper) {

  //       //    this.initSwiper();
  //       //  }

  //       if(this.mySwiper) {
  //         this.mySwiper.destroy();
  //       }
  //       this.initSwiper()
  //   },

};
</script>

<style lang="scss">
@import "~swiper/dist/css/swiper.css";
@import "~@/assets/styles/common/px2rem.scss";
.mz-banner {
  height: px2rem(210);
}
</style>
