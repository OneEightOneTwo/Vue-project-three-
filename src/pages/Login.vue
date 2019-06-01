<template>
  <div id="warp">
    <div class="banner">
      <div class="slide" v-on:mouseover="stop()" v-on:mouseout="move()">
        <div class="slideshow">
          <transition-group tag="ul" name="image">
            <li v-for="(img, index) in imgArray" v-show="index===mark" :key="index">
              <a href="#">
                <img :src="img">
              </a>
            </li>
          </transition-group>
        </div>
        <div class="bullet">
          <span
            v-for="(item, index) in imgArray"
            :class="{ 'active':index===mark }"
            @click="change(index)"
            :key="index"
          ></span>
        </div>
      </div>
    </div>
    <div class="user">
      <a class="wenxin" href="javascript:;">
        <i class="iconfont">&#xe802;</i>微信登录
      </a>
      <a @click="toTel" class="tel" href="javascript:;">手机号登录</a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      timer: null, //定时器
      mark: 0, //比对图片索引的变量
      imgArray: [
        require("../assets/lunbo.png"),
        require("../assets/lunbo2.png"),
        require("../assets/lunbo3.png")
      ]
    };
  },
  methods: {
    autoPlay() {
      this.mark++;
      if (this.mark === 3) {
        this.mark = 0;
      }
    },
    play() {
      this.timer = setInterval(this.autoPlay, 4000);
    },
    change(i) {
      this.mark = i;
    },
    stop() {
      clearInterval(this.timer);
    },
    move() {
      this.timer = setInterval(this.autoPlay, 4000);
    },
    toTel() {
      this.$router.push({ name: "tellogin" });
    }
  },
  created() {
    this.play();
  }
};
</script>

<style scoped>
body,
html {
  height: 100%;
}
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
.slide {
  width: 100%;
  height: 10.935185rem;
  overflow: hidden;
  position: relative;
}
.slideshow {
  width: 1024px;
  height: 320px;
}
li {
  position: absolute;
}
img {
  width: 1024px;
  height: 320px;
}
.bar {
  position: absolute;
  width: 100%;
  bottom: 10px;
  margin: 0 auto;
  z-index: 10;
  text-align: center;
}
.bar span {
  width: 20px;
  height: 5px;
  border: 1px solid;
  background: white;
  display: inline-block;
  margin-right: 10px;
}
.active {
  background: red !important;
}

.image-enter-active {
  transform: translateX(0);
  transition: all 1.5s ease;
}
.image-leave-active {
  transform: translateX(-100%);
  transition: all 1.5s ease;
}
.image-enter {
  transform: translateX(100%);
}
.image-leave {
  transform: translateX(0);
}

#warp {
  height: 100%;
  background: #f4f1ec;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.banner {
  width: 100%;
  height: 10.935185rem;
}
.banner img {
  width: 100%;
  height: 10.935185rem;
}
.user {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 0.888889rem;
}
.user .wenxin i {
  font-size: 0.607407rem;
}
.user .wenxin {
  display: flex;
  width: 7.222222rem;
  height: 1.453704rem;
  background: #51b674;
  border-radius: 0.185185rem;
  color: #ffffff;
  justify-content: center;
  font-size: 0.388889rem;
  align-items: center;
  font-family: "微软雅黑";
  margin-bottom: 0.407407rem;
  margin-top: 1rem;
  text-decoration: none;
}
.user .tel {
  display: flex;
  width: 7.222222rem;
  height: 1.453704rem;
  color: #b8b5b0;
  justify-content: center;
  font-size: 0.388889rem;
  align-items: center;
  border: 0.046296rem solid #b8b5b0;
  border-radius: 0.185185rem;
  font-weight: bold;
  text-decoration: none;
  font-family: "微软雅黑";
  box-sizing: border-box;
}
</style>
