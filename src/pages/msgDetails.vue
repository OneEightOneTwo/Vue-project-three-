<template>
  <div>
    <wc-swiper :autoplay="false" class="swiper">
      <wc-slide v-for="(slide, key) in stkImg" :key="key">
          <img :src="slide" alt srcset class='imgs'>
      </wc-slide>
    </wc-swiper>
    <div id="nameBox">
        <h1 v-text="stkName" class="bigName"></h1>
        <div id="msgBox">
          <div class="msgSex" :style="{background:sexColor()[0]}">{{sexColor()[1]}} {{stkAge}}</div>
          <div class="msgStella" v-text="stkStella"></div>
          <div class="mgsLenth"><i class="iconfont icon-shuben"></i> {{stkImg.length}}</div>
          <div class="mgsStu"><i class="iconfont icon-huangguan"></i> 学生</div>
        </div>
        <div id="sch" v-text="stkSchool"></div>
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
      stkName: this.$route.query.stkName,
      stkSex: this.$route.query.stkSex,
      stkStella: this.$route.query.stkStella,
      stkAge: this.$route.query.stkAge,
      stkSchool: this.$route.query.stkSchool,
    };
  },
  methods: {
    sexColor(){
      if(this.stkSex=='男'){
        return ['#86b8f3','♂']
      }else{
        return ['#f0cbf7','♀']
      }
    },
  },
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
#nameBox{
  height: 2.981481rem;
  padding: .677778rem .462963rem 0;
  box-sizing: border-box;
  border-bottom: 1px solid #eaeaea;
}
.bigName{
  font-size: .509259rem;
  font-weight: 600;
}
#msgBox{
  padding-top: .185185rem;
  padding-bottom: .277778rem;
  height: .462963rem;
}
#msgBox div{
  float: left;
  height: 100%;
  background-color: #000;
  color: #fff;
  line-height: .462963rem;
  padding: 0 .166667rem;
  margin-right: .111111rem;
  border-radius: .092593rem;
  font-size: .259259rem;
}
#msgBox .msgStella{
  background-color: #299d7a;
}
#msgBox .mgsLenth{
  background-color: #9692ad;
}
#msgBox .mgsLenth i,
#msgBox .mgsStu i{
  font-size: .260185rem;
}
#msgBox .mgsStu{
  background-color: #5ccce0;
}
#sch{
  font-size: .333333rem;
  color: #b6b6b6
}
</style>
