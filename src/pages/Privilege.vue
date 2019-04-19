<template>
  <div id="warp">
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
    <main>
      <ul class="nav">
        <li class="tab_title"
         v-for="(tab,index) in tabsName" 
         :key="index" 
         :class="{'on':t===index}" 
         @click="totab(index)">
          <a
            class="tab-link"
            @click="tabsSwitch(index)"
            :class="{active:tab.isActive,'on':t===index}"
            href="javascript:;"
          >{{tab.name}}</a>
        </li>
      </ul>
      <div class="cards">
        <div class="tab-card" style="display: block;">
          <ul class="sect_nav">
            <li>
              <i class="iconfont">&#xe619;</i>
              <a href="javascript:;">
                <p class="iname">
                  会员身份标识
                  <em>VIP</em>
                </p>
                <p class="itext">昵称升级红色，专属身份标识！</p>
              </a>
            </li>
            <li>
              <i class="iconfont">&#xe606;</i>
              <a href="javascript:;">
                <p class="iname">每天5个"超级喜欢"</p>
                <p class="itext">喜欢更有分量，配对飙升5倍！</p>
              </a>
            </li>
            <li>
              <i class="iconfont">&#xe628;</i>
              <a href="javascript:;">
                <p class="iname">划错无限反悔</p>
                <p class="itext">强力反悔，瞬间找回错过缘分！</p>
              </a>
            </li>
            <li>
              <i class="iconfont">&#xe605;</i>
              <a href="javascript:;">
                <p class="iname">任意更改定位</p>
                <p class="itext">位置漫游，与全球朋友say嗨</p>
              </a>
            </li>
            <li>
              <i class="iconfont">&#xe694;</i>
              <a href="javascript:;">
                <p class="iname">无限喜欢次数</p>
                <p class="itext">突破限制，放肆喜欢不在顾虑</p>
              </a>
            </li>
          </ul>
        </div>
        <div class="tab-card">
          <ul class="sect_nav">
            <li>
              <i>
                <img src="../assets/four2.png" alt>
              </i>
              <a href="javascript:;">
                <p class="iname">查看谁喜欢我</p>
                <p class="itext">TA喜欢了我？右划立即配对!</p>
              </a>
            </li>
          </ul>
        </div>
        <div class="tab-card">
          <ul class="sect_nav">
            <li>
              <i class="iconfont shandian">&#xe794;</i>
              <a href="javascript:;">
                <p class="iname">超级曝光</p>
                <p class="itext">配对利器！30分钟内10倍的人优先看到你！</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </main>
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
      t: 0,
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
    },
    totab(t) {
      this.t = t;
    }
  }
};
</script>
<style scoped>
#warp {
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
}
#warp .header {
  height: 5.185185rem;
  background: orange;
}
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
.on {
  color: #fc7f6d !important;
  border-bottom: 0.046296rem solid #eb6e5c !important;
}
#warp main {
  width: 100%;
  flex: 1;
}
.nav .tab_title >a{
  border: none !important;
}
.cards .tab-card {
  display: none;
  font-family: "微软雅黑";
  width: 100%;
}
.cards .tab-card .conent {
  overflow: auto;
  flex: 1;
  height: 7.907407rem;
}
.cards .tab-card .sect_nav {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.cards .tab-card .sect_nav li {
  display: flex;
  align-items: center;
  width: 100%;
  height: 2.25rem;
}
.cards .tab-card .sect_nav li i {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.407407rem;
  height: 1.407407rem;
  border-radius: 50%;
  background: #f8d73c;
  font-size: 0.740741rem;
  color: #ffffff;
  margin-left: 0.5rem;
  margin-right: 0.462963rem;
}
.cards .tab-card .sect_nav li i img {
  width: 1.444444rem;
  height: 1.388889rem;
}
.cards .tab-card .sect_nav li:nth-child(2) i {
  background: #6cccff !important;
}
.cards .tab-card .sect_nav li:nth-child(3) i {
  background: #fea36a;
}
.cards .tab-card .sect_nav li:nth-child(4) i {
  background: #76d495;
}
.cards .tab-card .sect_nav li:nth-child(5) i {
  background: #f06d4f;
}
.cards .tab-card .sect_nav li .shandian {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.407407rem;
  height: 1.407407rem;
  border-radius: 50%;
  background: #e069c5;
  font-size: 0.740741rem;
  color: #ffffff;
  margin-left: 0.5rem;
  margin-right: 0.462963rem;
}
.cards .tab-card .sect_nav li a {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  display: inline-block;
  text-decoration: none;
}
.cards .tab-card .sect_nav li a .iname {
  font-size: 0.425926rem;
  color: #000000;
  font-family: "微软雅黑";
}
.cards .tab-card .sect_nav li a .iname em {
  width: 0.962963rem;
  height: 0.462963rem;
  background: #fcba49;
  color: #ffffff;
  border-radius: 0.092593rem;
  font-size: 0.240741rem;
  font-family: "微软雅黑";
}
.cards .tab-card .sect_nav li a .itext {
  font-size: 0.333333rem;
  color: #838383;
  font-family: "微软雅黑";
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
.cards {
  float: left;
}
#warp .footer {
  height: 1.574074rem;
  background: #ff5846;
  justify-content: center;
}
.footer p {
  text-align: center;
  height: 1.574074rem;
  line-height: 1.574074rem;
  color: #ffffff;
  font-size: 0.462963rem;
}
</style>
