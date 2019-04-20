<template>
  <div>
    <div class="f_top">
      <i class="iconfont" @click="tofriend">&#xe604;</i>
      <span>朋友圈</span>
    </div>
    <div class="prcture">
      <div class="tx">
        <span class="t_tx"></span>
        <span class="t_names">梅雨明时</span>
      </div>
      <a class="itlist" href="javascript:;">消息列表</a>
    </div>
    <div class="main">以下是内容区</div>
  </div>
</template>
<script>
export default {
  methods: {
    tofriend() {
      this.$router.push({ path: "home/three"});
    }
  }
};
</script>
<style scoped>
.f_top {
  width: 100%;
  height: 1.574074rem;
  background: -webkit-gradient(
    linear,
    100% 0,
    0 100%,
    from(#d56815),
    to(#c32d15)
  );
  font-size: 0.648148rem;
  line-height: 1.574074rem;
  color: #ffffff;
}
.f_top i {
  color: #ffffff;
  font-size: 0.555556rem;
  height: 1.574074rem;
  line-height: 1.574074rem;
  margin-left: 0.740741rem;
  margin-right: 1.351852rem;
}
.prcture {
  padding-top: 3.703704rem;
  box-sizing: border-box;
  width: 100%;
  height: 7.407407rem;
  background: url(../assets/touxiang.jpg) no-repeat center;
  background-size: cover;
}
.prcture .tx {
  width: 100%;
  height: 1.574074rem;
}
.prcture .tx .t_tx {
  display: inline-block;
  width: 1.481481rem;
  height: 1.481481rem;
  background: url(../assets/touxiang.jpg) no-repeat;
  background-size: contain;
  border-radius: 50%;
  margin-left: 0.592593rem;
  margin-right: 0.592593rem;
  float: left;
}
.prcture .tx .t_names {
  display: inline-block;
  height: 1.481481rem;
  font-size: 0.555556rem;
  color: #ffffff;
  line-height: 1.481481rem;
  float: left;
}
.prcture .itlist {
  display: inline-block;
  width: 5.675926rem;
  height: 1.259259rem;
  border: 0.037037rem solid #b2aca0;
  border-radius: 0.185185rem;
  text-align: center;
  line-height: 1.259259rem;
  color: #cec0b5;
  font-size: 0.407407rem;
  box-sizing: border-box;
  margin-top: 0.240741rem;
  margin-left: 1.657407rem;
  text-decoration: none;
}
.main {
  font-size: 0.648148rem;
  text-align: center;
  height: auto;
  background: seashell;
}
</style>

