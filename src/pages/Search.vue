<template>
  <div class="search">
    <div class="search_header">
      <i @click="toBack" class="iconfont back">&#xe628;</i>
      <div class="srk">
        <i class="iconfont icon_search">&#xe618;</i>
        <input
          v-model="searchInput"
          ref="searchInput"
          v-focus
          type="search"
          placeholder="搜索..."
          class="import"
        >
      </div>
      <span @click="toBack" class="cancel">取消</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchInput: ""
    };
  },
  methods: {
    toBack() {
      this.$router.push({ name: "two" });
      this.searchInput = "";
    }
  },
  mounted() {
    // 挂载完后进行聚焦
    this.$refs.searchInput.focus();
  },
  // 自定义指令
  directives: {
    focus(el) {
      el.focus();
    }
  }
};
</script>
<style scoped>
.search_header {
  height: 1.706667rem;
  background: linear-gradient(to right, #c52d16, #f78527);
  box-shadow: 0px 2px 4px 0px #b3b3b3;
  display: flex;
  align-items: center;
  justify-content: center;
}
.back {
  font-size: 0.613333rem;
  color: #fff;
}
.srk {
  height: 100%;
  margin-left: 0.4rem;
}
.import {
  height: 100%;
  font-size: 0.533333rem;
  color: #fff;
  border: none;
  background: linear-gradient(to right, #cf3b24, #ef791b);
}
.icon_search {
  font-size: 0.513333rem;
  color: #fff;
  font-weight: 600;
  padding-right: 0.163333rem;
}
input::-webkit-input-placeholder {
  color: #fff;
  font-size: 0.533333rem;
}
.cancel {
  text-align: center;
  font-size: 0.413333rem;
  color: #fff;
  margin-left: 0.333333rem;
  margin-right: 0.133333rem;
}
</style>
