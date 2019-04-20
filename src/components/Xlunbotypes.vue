<template>
  <div id="stack">
  <div class="mid-center">
    <img src="../assets/timg (2).gif" alt="" class="loadingImg">
    <div class="stack-wrapper">
      <stack ref="stack" :pages="someList" :stackinit="stackinit"></stack>
      <!-- <img :src='require("./img/1.png")' alt='01'> -->
    </div>
    <div class="controls">
      <button @click="prev" class="button">
        <i class="prev"></i>
        <span class="text-hidden">prev</span>
      </button>
      <button @click="next" class="button">
        <i class="next"></i>
        <span class="text-0.12">next</span>
      </button>
    </div>
  </div>
  </div>
</template>

<script>
// pages: [
//         
//       ],
import stack from "./stacktypes.vue";
export default {
  // el: "#stack",
  data() {
    return {
      someList: [],
      stackinit: {
        visible: 3
      }
    };
  },
  mounted() {
    let that = this;
    setTimeout(function() {
      that.someList = [
        {
          // html: "<img :src='./assets/1.png' alt='01'>",
          srcs:require('../assets/1.png'),
          name:'东汉末年',
          school:'珠海职业艺术学院',
          age:17,
          sex:'男'
        },
        {
          // html: "<img :src=require('./img/1.png') alt='02'>",
          srcs:require('../assets/kksk.jpg'),
          name:'野兽',
          school:'珠海职业艺术学院',
          age:24,
          sex:'男'
        },
        {
          // html: "<img :src=require('./img/1.png') alt='03'>",
          srcs:require('../assets/3.png'),
          name:'嗯哼',
          school:'巴黎圣母院',
          age:20,
          sex:'女'
        },
        {
          // html: "<img :src=require('./img/1.png') alt='04'>",
          srcs:require('../assets/timg.jpg'),
          name:'坦克',
          school:'珠海职业艺术学院',
          age:30,
          sex:'女'
        },
        {
          // html: "<img :src=require('./img/1.png') alt='05'>",
          srcs:require('../assets/4.png'),
          name:'人烦得很',
          school:'巴黎圣母院',
          age:22,
          sex:'女'
        },
        {
          // html: "<img :src=require('./img/1.png') alt='06'>",
          srcs:require('../assets/5.png'),
          name:'一口价',
          school:'珠海职业艺术学院',
          age:19,
          sex:'男'
        },
        {
          // html: "<img :src=require('./img/1.png') alt='07'>",
          srcs:require('../assets/6.png'),
          name:'人烦得很',
          school:'巴黎圣母院',
          age:25,
          sex:'女'
        }
      ];
      document.getElementsByClassName('loadingImg')[0].style.display='none';
    }, 1100);
  },
  components: {
    stack
  },
  methods: {
    prev() {
      this.$refs.stack.$emit("prev");
    },
    next() {
      this.$refs.stack.$emit("next");
    }
  }
};
</script>
<style>
.mid-center{
  margin: auto;
  height: 14.74074rem;
  overflow: hidden;
}
.loadingImg{
  display: inline-block;
  width: 100%;
  margin-top: 2.362963rem;
}
.stack-wrapper {
  margin: 0 auto;
  position: relative;
  z-index: 1000;
  width: 9.166667rem;
  height: 12.481481rem;
  padding: 0;
  list-style: none;
  pointer-events: none;
  margin-top: .47037rem;
  margin-bottom: 1.888889rem;
}
.controls {
  position: relative;
  width: 1.851852rem;
  text-align: center;
  display: flex; /*Flex布局*/
  display: -webkit-flex; /* Safari */
  justify-content: space-around;
  margin: 0 auto;
  margin-top: .462963rem;
  display: none;
}
.controls .button {
  border: none;
  background: none;
  position: relative;
  display: inline-block;
  cursor: pointer;
  font-size: .148148rem;
  width: .462963rem;
  height: .462963rem;
  z-index: 100;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  border-radius: 50%;
  background: #fff;
}
.button .next {
  display: inline-block;
  width: .092593rem;
  height: .046296rem;
  background: rgb(129, 212, 125);
  line-height: 0;
  font-size: 0;
  vertical-align: middle;
  transform: rotate(45deg);
  left: -0.046296rem;
  top: .018519rem;;
  position: relative;
}
.button .next:after {
  content: "/";
  display: block;
  width: .185185rem;
  height: .046296rem;
  background: rgb(129, 212, 125);
  transform: rotate(-90deg) translateY(-50%) translateX(50%);
}
.button .prev {
  display: inline-block;
  width: .185185rem;
  height: .046296rem;
  background: rgb(230, 104, 104);
  line-height: 0;
  font-size: 0;
  vertical-align: middle;
  transform: rotate(45deg);
}
.button .prev:after {
  content: "/";
  display: block;
  width: .185185rem;
  height: .046296rem;
  background: rgb(230, 104, 104);
  transform: rotate(-90deg);
}
.controls .text-hidden {
  position: absolute;
  overflow: hidden;
  width: 0;
  height: 0;
  color: transparent;
  display: block;
}
</style>