<template>
  <div class="telLogin">
    <div class="header">
      <div class="header_box">
        <i @click="tologin" class="iconfont left_arrow">&#xe604;</i>
        <span class="phone">手机号登录</span>
      </div>
    </div>
    <div class="main">
      <div class="main_tel">
        <div class="up">
          <select name id class="select">
            <option value="1">+86</option>
            <option value="2">+86</option>
            <option value="3">+86</option>
          </select>
          <input
            ref="telInput"
            v-focus
            v-model="telInput"
            type="tel"
            placeholder="请输入手机号码"
            class="tel_number"
          >
        </div>
        <div class="down">
          <input type="password" placeholder="请输入密码" class="tel_pwd">
        </div>
      </div>
    </div>
    <div @click="toPassword" class="continue">继续</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      telInput: ""
    };
  },
  methods: {
    tologin() {
      this.$router.push({ name: "login" });
      this.telInput = "";
    },
    toPassword() {
      this.$router.push({ name: "telpassword" });
    }
  },
  mounted() {
    this.$refs.telInput.focus();
  },
  directives: {
    focus(el) {
      el.focus();
    }
  }
};
</script>
<style scoped>
.telLogin {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.header {
  height: 2.24rem;
  background: #d34531;
  box-shadow: 0 1px 4px #d0d4d5;
}
.main {
  flex: 1;
}
.main_tel {
  margin: 1.52rem 0.64rem 0;
  display: flex;
  flex-direction: column;
}
.up{
    display: flex;
    align-items: center;
    justify-content: center;
}
.down{
    display: flex;
}
.header_box {
  height: 0.773333rem;
  margin: 0.746667rem 0 0.746667rem 0.8rem;
  line-height: 0.773333rem;
}
.left_arrow {
  font-size: 0.64rem;
  color: #fff;
  margin-right: 1.466667rem;
}
.phone {
  font-size: 0.773333rem;
  color: #fff;
}
.continue {
  height: 2.24rem;
  background: #d34531;
  color: #dd786e;
  font-size: 0.586667rem;
  text-align: center;
  line-height: 2.24rem;
}
.select {
  border: none;
  height: 1.466667rem;
  border-bottom: 2px solid #e1e1e1;
  flex: 1;
}
.tel_number {
  flex: 3;
  height: 1.466667rem;
  border: none;
  border-bottom: 0.08rem solid #d34531;
  margin-left: 0.48rem;
}
input::-webkit-input-placeholder {
  font-size: 0.586667rem;
  color: #bbbbbb;
}
.tel_pwd{
    flex: 1;
    border: none;
    height: 1.466667rem;
    border-bottom: 0.08rem solid #d34531;
    margin-top: 0.48rem;
    margin-left: 2.56rem;
}
</style>
