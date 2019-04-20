<template>
  <div class="two">
    <div class="header">
      <div class="title" v-text="message"></div>
      <i @click="toSearch" class="iconfont search">&#xe618;</i>
    </div>

    <div class="main clearfix">
      <!-- 新配对 -->
      <div class="new_pair">
        <div>
          <p class="text">新配对</p>
        </div>
        <div class="nav_ul">
          <ul class="nav">
            <li>
              <div class="big_circle">
                <div class="small_circle">
                  <img src="../assets/touxiang2.jpg" alt class="especially">
                </div>
              </div>
              <span class="idName">谁喜欢我</span>
            </li>
            <li>
              <div class="circle">
                <img src="../assets/touxiang2.jpg" alt class="especially_c">
              </div>
              <span class="idName">Q-min</span>
            </li>
            <li>
              <div class="circle">
                <img src="../assets/touxiang2.jpg" alt class="especially_c">
              </div>
              <span class="idName">taddy-bear</span>
            </li>
          </ul>
        </div>
      </div>
      <!-- 消息 -->
      <div class="message">
        <div>
          <p class="X_text">消息</p>
        </div>
        <div>
          <ul class="message_nav">
            <li @click="toDetail(t.id)" v-for="(t,index) in tabbar" :key="index">
              <div class="small_box clearfix">
                <div class="touxiang">
                  <img :src="t.photo" alt class="especially_b">
                </div>
                <div class="content">
                  <div class="up">
                    <p class="name" v-text="t.name"></p>
                    <span class="time" v-text="t.time"></span>
                  </div>
                  <div class="down">
                    <p class="record" v-text="t.record"></p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import img from "../assets/touxiang2.jpg";
export default {
  data() {
    return {
      message: "消息",
      tabbar: [
        {
          id: 1,
          name: "乔巴",
          time: "4小时前",
          record: "没想到这么快匹配到",
          photo: img
        },
        {
          id: 2,
          name: "探探小助手",
          time: "4小时前",
          record: "谢谢！您更新的个人信息已经通过...",
          photo: img
        },
        { id: 3, name: "X", time: "4小时前", record: "你好，帅哥", photo: img }
      ]
    };
  },
  methods: {
    toDetail(id) {
      this.$router.push({ name: "detail", params: { id } });
    },
    toSearch() {
      this.$router.push({ name: "search" });
    }
  }
};
</script>
<style scoped>
.clearfix::after {
  content: "";
  clear: both;
  display: block;
  overflow: hidden;
  font-size: 0;
  height: 0;
}
.two {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.header {
  height: 1.574074rem;
  background: linear-gradient(to right, #c52d16, #f78527);
  text-align: center;
  position: relative;
}
.title {
  font-size: 0.555556rem;
  line-height: 1.574074rem;
  color: #ffffff;
}
.search {
  float: right;
  color: #fff;
  font-size: 0.555556rem;
  font-weight: 600;
  position: absolute;
  top: 0.496667rem;
  right: 0.7rem;
}
.main {
  flex: 1;
  overflow: auto;
}
.new_pair {
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #f6f6f6;
  border-top: 2px solid #f6f6f6;
}
.text,
.X_text {
  font-size: 0.506667rem;
  color: #d94941;
  padding-left: 0.426667rem;
  padding-top: 0.666667rem;
}
.nav_ul {
  height: 4.333333rem;
  overflow: auto;
}
.nav {
  height: 100%;
  display: flex;
}
.nav li {
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
}
.big_circle {
  width: 2.666667rem;
  height: 2.666667rem;
  border: 2px solid #f4c551;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.small_circle,
.especially {
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 50%;
}
.circle,
.especially_c {
  width: 2.666667rem;
  height: 2.666667rem;
  border-radius: 50%;
}
.idName {
  width: 1.8rem;
  font-size: 0.4rem;
  color: #484848;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.message {
  height: 9rem;
}
.message_nav {
  display: flex;
  flex-direction: column;
}
.message_nav li {
  flex: 1;
  height: 2.013333rem;
  border-bottom: 1px solid #f7f7f7;
}
.small_box {
  height: 1.4rem;
  margin: 0.333333rem 0.32rem 0.333333rem 0.373333rem;
}
.touxiang,
.especially_b {
  float: left;
  width: 1.4rem;
  height: 1.4rem;
  border-radius: 50%;
}
.content {
  display: flex;
  flex-direction: column;
  height: 1.086667rem;
  margin: 0.093333rem 0 0.193333rem 1.633333rem;
}
.up {
  height: 100%;
}
.name {
  float: left;
  font-weight: 600;
}
.time {
  float: right;
  color: #a0a0a0;
  font-size: 0.12rem;
}
.record {
  width: 4.333333rem;
  color: #a0a0a0;
  font-size: 0.186667rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
