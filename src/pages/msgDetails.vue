<template>
  <div>
    <wc-swiper :autoplay="false" class="swiper">
      <wc-slide
        v-for="(slide, key) in stkImg" :key="key"
        >
          <img :src="slide" alt srcset class='imgs'>
      </wc-slide>
    </wc-swiper>
    <div id="nameBox">
        <h1></h1>
    </div>
    
  </div>
</template>
<script>
import Vue from "vue";
import wcSwiper from "wc-swiper";
// import "./wc-style.css";
Vue.use(wcSwiper);
export default {
  data() {
    return {
      stkImg: this.$route.query.stkImgs,
      
    };
  }
};
</script>
<style scoped>
@import "./wc-style.css";
.swiper{
    height: 12.25rem;
    /* height: .111111rem; */
}
.imgs{
    width: 100%;
    height: 100%;
}
</style>
