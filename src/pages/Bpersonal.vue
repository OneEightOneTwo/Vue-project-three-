<template>
  <div>
    <div class="p_top">
      <i class="iconfont" @click="topersonal" v-html="p_top.p_icon"></i>
      <span v-text="p_top.p_span"></span>
    </div>
    <div class="touxiang">
      <ul class="rank">
        <li class="frist">
          <a href="javascript:;"></a>
        </li>
        <li>
          <a href="javascript:;"></a>
        </li>
        <li>
          <a href="javascript:;"></a>
        </li>
        <li>
          <a href="javascript:;"></a>
        </li>
        <li>
          <a href="javascript:;"></a>
        </li>
        <li>
          <a href="javascript:;"></a>
        </li>
      </ul>
    </div>
    <div class="byline">
      <h2 class="names" v-text="names"></h2>
      <p class="tt">
        <span class="age" v-text="age"></span>
        <span class="conste" v-text="conste"></span>
      </p>
      <p class="mins"></p>
    </div>
    <div class="idiograph">
      <span v-text="idiograph.gexing"></span>
      <p v-text="idiograph.p">
        <i class="iconfont">&#xe696;</i>
      </p>
    </div>
    <div class="mine_mes"></div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      p_top : {p_icon : "&#xe604;" ,p_span:"编辑个人资料"},
      names : "梅雨明时",age : "22",conste : "双子座",mins : "0m,2分前活跃",
      idiograph : {gexing: "个性签名",p : "初听不知曲中意，再听已是曲中人"}
    }
  },
  methods: {
    topersonal() {
      this.$router.push({ path: "/personal" });
    }
  },
};
</script>
<style scoped>
.p_top {
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
.p_top i {
  color: #ffffff;
  font-size: 0.648148rem;
  height: 1.574074rem;
  line-height: 1.574074rem;
  margin-left: 0.740741rem;
  margin-right: 1.342593rem;
}
.touxiang {
  width: 100%;
  height: 9.416667rem;
}
.touxiang .rank .frist {
  width: 6.011111rem;
  height: 6.011111rem;
  background: burlywood;
  margin-right: 0.277778rem;
}
.touxiang .rank > li {
  margin: 0.046296rem;
  float: left;
  width: 3.066667rem;
  height: 3.066667rem;
  background: #f6f6f6;
}
.byline {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 2.981481rem;
  justify-content: center;
  padding-left: 0.398148rem;
  box-sizing: border-box;
}
.byline .names {
  font-size: 0.601852rem;
  color: #000000;
  margin-bottom: 0.305556rem;
}
.byline .tt {
  display: flex;
  margin-bottom: 0.351852rem;
}
.byline .age {
  display: inline-block;
  width: 1.425926rem;
  height: 0.601852rem;
  background: #85b9f2;
  border-radius: 0.092593rem;
  text-align: right;
  color: #ffffff;
  font-size: 0.296296rem;
  line-height: 0.601852rem;
  margin-right: 0.148148rem;
}
.byline .conste {
  width: 1.592593rem;
  display: inline-block;
  height: 0.592593rem;
  background: #d99e42;
  color: #ffffff;
  font-size: 0.296296rem;
  line-height: 0.592593rem;
  text-align: center;
  border-radius: 0.092593rem;
}
.byline .mins {
  color: #b9b9b9;
  font-size: 0.444444rem;
}
.idiograph {
  height: 3.722222rem;
  border-bottom: 0.027778rem solid #e3e3e3;
  display: flex;
  flex-direction: column;
  padding-left: 0.611111rem;
  box-sizing: border-box;
  justify-content: space-around;
}
.idiograph > span {
  font-size: 0.5rem;
  color: #d1462f;
}
.idiograph > p {
  font-size: 0.5rem;
  color: #000000;
}
.idiograph > p > i {
  font-size: 0.62963rem;
  margin-right: 0.55rem;
}
</style>
