<template>
  <div>
    <div class="box">
      <div class="vip" @click="toprivilege">
        <div class="v_left">
          <i class="iconfont">&#xe619;</i>
          <div class="text">
            <p class="tt">探探VIP</p>
            <p class="huoqu">获取会员特权</p>
          </div>
        </div>
        <div class="v_right">
          <span>激活特权</span>
          <i class="iconfont">&#xe603;</i>
        </div>
      </div>
      <div class="set">
        <div class="s_left">
          <i class="iconfont">&#xe655;</i>
          <div class="text">
            <p class="tt">设置</p>
            <p class="huoqu">账号、个人信息与通知</p>
          </div>
        </div>
        <div class="s_right">
          <!-- <span>激活特权</span> -->
          <i class="iconfont">&#xe603;</i>
        </div>
      </div>
      <div class="hand">
        <div class="h_left">
          <i class="iconfont">&#xe65b;</i>
          <div class="text">
            <p class="tt">新手指导</p>
          </div>
        </div>
        <div class="h_right">
          <i class="iconfont">&#xe603;</i>
        </div>
      </div>
      <div class="share">
        <div class="sh_left">
          <i class="iconfont">&#xe694;</i>
          <div class="text">
            <p class="tt">分享</p>
            <p class="huoqu">让你的朋友发现更多有趣的人</p>
          </div>
        </div>
        <div class="sh_right">
          <i class="iconfont">&#xe603;</i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    toprivilege(){
      this.$router.push(  { path: '/privilege'},)
    }
  }
};
</script>
<style scoped>
.box {
  height: auto;
  padding-top: 0.648148rem;
  padding-bottom: 0.648148rem;
  box-sizing: border-box;
  width: 100%;
  background: #f7f7f7;
  margin-bottom: 1.388889rem;

}
/* vip */
.vip {
  width: 100%;
  height: 2.259259rem;
  background: #fff9ec;
  display: flex;
  border-bottom: 1px solid #f7f7f7;
  justify-content: space-between;
  align-items: center;
}
.v_left {
  margin-left: 0.444444rem;
  display: flex;
}
.v_left i {
  display: block;
  font-size: 0.444444rem;
  text-align: center;
  line-height: 0.696667rem;
  color: #ffffff;
  width: 0.666667rem;
  height: 0.666667rem;
  background: #fecc53;
  border-radius: 0.092593rem;
  margin-right: 0.462963rem;
  margin-top: 0.244444rem;
}
.v_left .text {
  display: flex;
  flex-direction: column;
}
.v_left .text .tt {
  font-size: 0.407407rem;
  color: #000000;
  margin-bottom: 0.14815rem;
  font-weight: bold;
}
.v_left .text .huoqu {
  font-size: 0.37037rem;
  color: #bab7b0;
}
.v_right {
  margin-right: 0.648148rem;
  display: flex;
  align-items: center;
}
.v_right span {
  font-size: 0.37037rem;
  color: #a6a296;
}
.v_right i {
  font-size: 0.925926rem;
  color: #cdcabb;
}
/* 设置 */
.set {
  width: 100%;
  height: 2.259259rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  border-bottom: 1px solid #f7f7f7;
}
.s_left {
  margin-left: 0.444444rem;
  display: flex;
}
.s_left i {
  display: block;
  font-size: 0.444444rem;
  text-align: center;
  line-height: 0.696667rem;
  color: #ffffff;
  width: 0.666667rem;
  height: 0.666667rem;
  background: #b2b2b2;
  border-radius: 0.092593rem;
  margin-right: 0.462963rem;
  margin-top: 0.244444rem;
}
.s_left .text {
  display: flex;
  flex-direction: column;
}
.s_left .text .tt {
  font-size: 0.407407rem;
  color: #000000;
  margin-bottom: 0.14815rem;
  font-weight: bold;
}
.s_left .text .huoqu {
  font-size: 0.37037rem;
  color: #bab7b0;
}
.s_right {
  margin-right: 0.648148rem;
  display: flex;
  align-items: center;
}
.s_right i {
  font-size: 0.925926rem;
  color: #cdcabb;
}
/* 新手指导 */
.hand {
  width: 100%;
  height: 2.259259rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  border-bottom: 1px solid #f7f7f7;
}
.h_left {
  margin-left: 0.444444rem;
  display: flex;
}
.h_left i {
  display: block;
  font-size: 0.444444rem;
  text-align: center;
  line-height: 0.696667rem;
  color: #ffffff;
  width: 0.666667rem;
  height: 0.666667rem;
  background: #f9a529;
  border-radius: 0.092593rem;
  margin-right: 0.462963rem;
}
.h_left .text .tt {
  font-size: 0.407407rem;
  color: #000000;
  font-weight: bold;
  margin-top: 0.074074rem;
}
.h_right {
  margin-right: 0.648148rem;
  display: flex;
  align-items: center;
}
.h_right i {
  font-size: 0.925926rem;
  color: #cdcabb;
}
/* 分享 */
.share {
  width: 100%;
  height: 2.259259rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  border-bottom: 1px solid #f7f7f7;
}
.sh_left {
  margin-left: 0.444444rem;
  display: flex;
}
.sh_left i {
  display: block;
  font-size: 0.444444rem;
  text-align: center;
  line-height: 0.696667rem;
  color: #ffffff;
  width: 0.666667rem;
  height: 0.666667rem;
  background: #d2491f;
  border-radius: 0.092593rem;
  margin-right: 0.462963rem;
  margin-top: 0.244444rem;
}
.sh_left .text {
  display: flex;
  flex-direction: column;
}
.sh_left .text .tt {
  font-size: 0.407407rem;
  color: #000000;
  margin-bottom: 0.14815rem;
  font-weight: bold;
}
.sh_left .text .huoqu {
  font-size: 0.37037rem;
  color: #bab7b0;
}
.sh_right {
  margin-right: 0.648148rem;
  display: flex;
  align-items: center;
}
.sh_right i {
  font-size: 0.925926rem;
  color: #cdcabb;
}
</style>
