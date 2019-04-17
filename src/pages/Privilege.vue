<template>
  <div>
    <div class="header">
      <div class="p_top">
        <i class="iconfont" @click="tofour">&#xe604;</i>
        <p>激活特权</p>
        <em class="iconfont">&#xe632;</em>
      </div>
      <div class="heads">
        <p class="touxaing">
          <img src="../assets/touxiang3.jpg" alt>
        </p>
        <div class="names">
          <p class="n_names">梅雨明时</p>
          <p class="change">暂无激活会员</p>
        </div>
      </div>
    </div>
    <div class="main">
      <ul class="nav">
        <li v-for="(tab,index) in tabsName" :key="index">
          <a class="tab-link"
            @click="tabsSwitch(index)"
            :class="{active:tab.isActive}"
           href="javascript:;">{{tab.name}}</a>
        </li>
      </ul>
      <div class="cards">
        <div class="tab-card" style="display: block;">这里是HTML教程</div>
        <div class="tab-card">欢迎来到CSS模块</div>
        <div class="tab-card">嗨，这里是Vue</div>
      </div>
    </div>
    <div class="footer">
      <p>获取vip会员</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tabsName: [
        { name: "VIP特权", isActive: true },
        { name: "查看谁喜欢我", isActive: false },
        { name: "超级曝光", isActive: false }
      ],
      active: false
    };
  },
  methods: {
    tofour() {
      this.$router.push({ path: "home/four" });
    },
    tabsSwitch: function(tabIndex) {
      var tabCardCollection = document.querySelectorAll(".tab-card"),
        len = tabCardCollection.length;

      for (var i = 0; i < len; i++) {
        tabCardCollection[i].style.display = "none";
        this.tabsName[i].isActive = false;
      }
      this.tabsName[tabIndex].isActive = true;
      tabCardCollection[tabIndex].style.display = "block";
    }
  }
};
</script>
<style scoped>
/* .header {
  position: absolute;
} */
.p_top {
  width: 100%;
  height: 1.574074rem;
  background: #c42f17;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.p_top i {
  font-size: 0.555556rem;
  color: #ffffff;
  margin-left: 0.555556rem;
}
.p_top {
  font-size: 0.518519rem;
  color: #ffffff;
}
.p_top em {
  font-size: 0.925926rem;
  margin-left: 0.555556rem;
  color: #ffffff;
}
.heads {
  width: 100%;
  height: 3.703704rem;
  background: url(../assets/touxiang3.jpg) no-repeat center center;
  background-size: cover;
  display: flex;
  align-items: center;
}
.heads .touxaing {
  width: 1.851852rem;
  height: 1.851852rem;
  border-radius: 50%;
  margin-left: 0.740741rem;
  margin-right: 0.462963rem;
}
.heads .touxaing img {
  width: 1.851852rem;
  height: 1.851852rem;
  border-radius: 50%;
}
.heads .names .n_names {
  font-size: 0.5rem;
  color: #fff;
  margin-bottom: 0.185185rem;
}
.heads .names .change {
  font-size: 0.314815rem;
  color: #e1c6b1;
}
.nav {
  display: flex;
  width: 100%;
  height: 1.333333rem;
  align-items: center;
}
.nav li {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 1.333333rem;
  line-height: 1.333333rem;
  border-bottom: 0.027778rem solid #c8c8c8;
}
.nav li a {
  font-size: 0.416667rem;
  color: #a0a0a0;
  text-decoration: none;
}
.footer {
  height: 1.574074rem;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  background: #ff5846;
}
.footer p {
  height: 1.574074rem;
  line-height: 1.574074rem;
  color: #ffffff;
  font-size: 0.462963rem;
}
.cards {
  float: left;
}

.cards .tab-card {
  display: none;
}

.clearfix:after {
  content: "";
  display: block;
  height: 0;
  clear: both;
}

.clearfix {
  zoom: 1;
}
</style>
