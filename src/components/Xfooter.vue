<template>
  <div>
    <div class="box2">
      <ul class="foots">
        <li
          v-for="(t,index) in tabbar"
          :key="index"
          @click="toTab(index)"
          :class="{'active':tab===index}"
        >
          <a class="iconfont" :class="{'on':tab===index}" href="javascript:;" v-html="t.title"></a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tabbar: [
        { title: "&#xe607;", name: "one" },
        { title: "&#xe802;", name: "two" },
        { title: "&#xe621;", name: "three" },
        { title: "&#xe64a;", name: "four" }
      ],
      //默认的下标值
      tab: 0
    };
  },
  methods: {
    toTab(tab) {
      this.tab = tab;
      //获取当前tab的name值
      let name = this.tabbar[tab].name;
      //跳路由
      this.$router.push({ name });
    }
  }
};
</script>
<style scoped>
.box2 {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
.foots {
  width: 100%;
  height: 1.388889rem;
  background: burlywood;
  display: flex;
  justify-content: space-between;
}
.foots li {
  list-style: none;
  display: flex;
  float: left;
  align-items: center;
  justify-content: space-around;
  flex: 1;
}
.foots li a {
  font-size: 0.703704rem;
  color: black;
  text-decoration: none;
}
.active {
  border-top: 3px solid #c14d4d;
}
.on {
  color: #ffffff !important;
}
</style>

