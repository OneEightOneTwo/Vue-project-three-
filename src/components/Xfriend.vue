<template>
  <div class="main">
    <div class="friend" @click="tofriends">
      <i class="iconfont">&#xe601;</i>
      <p>{{message}}</p>
      <em class="iconfont">&#xe603;</em>
    </div>
    <div class="crypt" @click="tocryp">
      <i class="iconfont">&#xe607;</i>
      <p>{{message2}}</p>
      <em class="iconfont">&#xe603;</em>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "朋友圈",
      message2: "匿名暗恋告白"
    };
  },
  methods: {
    tofriends() {
      this.$router.push({ path: "/friends" });
    },
    tocryp() {
      this.$router.push({ path: "/cryp" });
    }
  }
};
</script>
<style scoped>
/* import  */
.main {
  width: 100%;
  height: 13.259259rem;
  background: #f7f7f7;
  overflow: hidden;
}
.friend {
  height: 2.240741rem;
  width: 100%;
  line-height: 2.240741rem;
  background: #ffffff;
  margin-top: 0.648148rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.crypt {
  height: 2.240741rem;
  width: 100%;
  line-height: 2.240741rem;
  background: #ffffff;
  margin-top: 0.648148rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.friend p {
  font-size: 0.388889rem;
  color: #747474;
}
.crypt p {
  font-size: 0.388889rem;
  color: #747474;
}
.friend i {
  font-size: 0.685185rem;
  line-height: 0.648148rem;
  margin-right: 0.481481rem;
  margin-left: 0.444444rem;
}
.crypt i {
  font-size: 0.685185rem;
  line-height: 0.648148rem;
  margin-right: 0.481481rem;
  margin-left: 0.444444rem;
}
.friend em {
  position: absolute;
  right: 0.666667rem;
  font-size: 0.988889rem;
  color: #d4d4d4;
}
.crypt em {
  position: absolute;
  right: 0.666667rem;
  font-size: 0.988889rem;
  color: #d4d4d4;
}
</style>

