<template>
  <div class="detail">
    <!-- 头部 -->
    <div class="header">
      <div class="information">
        <i @click="toTwo" class="iconfont back">&#xe604;</i>
        <div class="head_portrait">
          <img src="../assets/touxiang2.jpg" alt class="touxiang">
          <p class="portrait_right">
            <strong class="username">樱花雨梦</strong>
            <span class="past_time">13分钟前</span>
          </p>
        </div>
        <i @click="hideshow" class="iconfont colon">&#xe632;</i>
      </div>
    </div>
    <!-- 右上角三小点功能 -->
    <div v-show="bool" @click="hideActionsheet" class="colon_gn">
      <div class="colon_box">
        <ul class="colon_nav">
          <li>
            <p class="nav_text">匿名举报</p>
          </li>
          <li>
            <p class="nav_text">清空聊天记录</p>
          </li>
          <li>
            <p class="nav_text">解除匹配</p>
          </li>
        </ul>
      </div>
    </div>
    <!-- 聊天内容 -->
    <div @click="hideActionsheet" class="record">
      <img src="../assets/liaotianbeijing.jpg" alt class="backdrop">
    </div>

    <!-- 底部输入框 -->
    <div class="foot">
      <div class="foot_gn">
        <i class="iconfont add">&#xe69f;</i>
        <i class="iconfont smiling">&#xe63a;</i>
        <input v-focus ref="importInput" v-model="importInput" type="text" placeholder="输入聊天内容..." class="input_box">
        <i class="iconfont voice">&#xe6cb;</i>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      bool: false,
      importInput: "",
    };
  },
  methods: {
    toTwo() {
      this.$router.push({ name: "two" });
      this.importInput = "";
    },
    hideActionsheet() {
      this.bool = false;
    },
    hideshow() {
      this.bool = this.bool ? false : true;
    }
  },
  mounted(){
    this.$refs.importInput.focus();
  },
  directives: {
    focus(el) {
      el.focus();
    }
  }
};
</script>
<style scoped>
.detail {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.header {
  height: 2.24rem;
  background: #fff;
  box-shadow: 0 1px 1px #d0d4d5;
}
.information {
  height: 1.546667rem;
  margin: 0.346667rem 0.8rem 0.4rem;
  display: flex;
  align-items: center;
}
.record {
  flex: 1;
  overflow: auto;
}
.backdrop {
  width: 100%;
  height: 100%;
}
.foot {
  height: 1.92rem;
  background: #fff;
  box-shadow: 0 -1px 1px #d0d4d5;
}
.foot_gn {
  margin: 0.48rem 0.56rem;
  height: 0.96rem;
  display: flex;
  align-items: center;
  color: #d84a34;
}
.add {
  font-size: 0.64rem;
  margin-right: 0.646667rem;
}
.smiling {
  font-size: 0.8rem;
  margin-right: 0.633333rem;
}
.voice {
  font-size: 0.96rem;
}
.input_box {
  border: none;
  margin-right: 0.333333rem;
}
.back {
  font-size: 0.64rem;
  color: #d6402f;
  padding-right: 1.046667rem;
}
.head_portrait {
  flex: 1;
  display: flex;
  align-items: center;
}
.touxiang {
  width: 1.546667rem;
  height: 1.546667rem;
  border-radius: 50%;
}
.colon {
  float: right;
  font-size: 0.866667rem;
  color: #d6402f;
  position: relative;
}
.portrait_right {
  display: flex;
  flex-direction: column;
  margin-left: 0.246667rem;
}
.username {
  width: 1.933333rem;
  font-size: 0.466667rem;
  color: #d6402f;
  padding-bottom: 0.16rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.past_time {
  font-size: 0.353333rem;
  color: #afafaf;
}
.colon_gn {
  width: 4.366667rem;
  height: 3.4rem;
  background: #fff;
  box-shadow: 2px 2px 4px 0px #b3b3b3;
  position: absolute;
  top: 2.28rem;
  right: 0px;
}
.colon_box {
  margin: 0.386667rem 0 0 0.52rem;
}
.colon_nav {
  display: flex;
  flex-direction: column;
}
.nav_text {
  font-size: 0.56rem;
  color: #252525;
  margin-bottom: 0.233333rem;
}
</style>
