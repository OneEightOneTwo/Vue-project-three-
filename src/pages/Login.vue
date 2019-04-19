<template>
    <div id="warp">
      <div class="banner">
        <img src="../assets/lunbo.png" alt>
      </div>
      <div class="user">
        <a class="wenxin" href="javascript:;">
          <i class="iconfont">&#xe802;</i>微信登录
        </a>
        <a class="tel" href="javascript:;">手机号登录</a>
      </div>
    </div>
</template>
<script>
export default {};
</script>

<style scoped>
body,
html {
  height: 100%;
}
#warp {
  height: 100%;
  background: #f4f1ec;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.banner {
  width: 100%;
  height: 10.935185rem;
}
.banner img {
  width: 100%;
  height: 10.935185rem;
}
.user {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: .888889rem;
}
.user .wenxin i {
  font-size: 0.607407rem;
}
.user .wenxin {
  display: flex;
  width: 7.222222rem;
  height: 1.453704rem;
  background: #51b674;
  border-radius: 0.185185rem;
  color: #ffffff;
  justify-content: center;
  font-size: 0.388889rem;
  align-items: center;
  font-family: '微软雅黑';
  margin-bottom: 0.407407rem;
  margin-top: 1rem;
  text-decoration: none;
}
.user .tel {
  display: flex;
  width: 7.222222rem;
  height: 1.453704rem;
  color: #b8b5b0;
  justify-content: center;
  font-size: 0.388889rem;
  align-items: center;
  border: 0.046296rem solid #b8b5b0;
  border-radius: 0.185185rem;
  font-weight: bold;
  text-decoration: none;
  font-family: '微软雅黑';
  box-sizing: border-box;
}
</style>
