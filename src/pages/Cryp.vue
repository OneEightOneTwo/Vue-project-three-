<template>
  <div>
    <div class="f_top">
      <i class="iconfont" @click="tofriend">&#xe604;</i>
      <span id="gaobai" ref="gaobai"  class="niname" >匿名暗恋告白</span>
      <em class="iconfont" @click="tosearch">&#xe618;</em>
      <div class="search" :class="{'se':bool}">
        <input ref="sear" v-focus type="text" id="sear" placeholder="搜索...">
      </div>
    </div>
  </div>
</template>
<script>
export default {
    data () {
        return {
            bool : true      
        }
    },
  methods: {
    tofriend() {
      this.$router.push({ path: "home/three" });
    },
    tosearch(){
        this.bool=!this.bool
    }
  },
  mounted(){
    this.$refs.sear.focus(),
    this.$refs.gaobai.blur()
  },
  directives: {
    focus(el){
      el.focus();
    },
     blur(el){
      el.blur();
    }
  }
};
</script>
<style scoped>
.f_top {
  position: relative;
  width: 100%;
  height: 1.574074rem;
   background: -webkit-gradient(
    linear,
    100% 0,
    0 100%,
    from(#d56815),
    to(#c32d15)
  );
}
.f_top .niname {
  display: inline-block;
  color: #ffffff;
  font-size: 0.588148rem;
  line-height: 1.574074rem;
}
.f_top i {
  float: left;
  display: inline-block;
  color: #ffffff;
  font-size: 0.555556rem;
  height: 1.574074rem;
  line-height: 1.574074rem;
  margin-left: 0.740741rem;
  margin-right: 0.925926rem;
}
.f_top em {
  float: right;
  display: inline-block;
  font-size: 0.685185rem;
  color: #ffffff;
  margin-right: 0.740741rem;
  height: 1.574074rem;
  line-height: 1.574074rem;
}
.f_top .search {
  position: absolute;
  width: 80%;
  height: 1.574074rem;
  line-height: 1.574074rem;
  background: #d46514;
  right: 0;
  top: 0;
}
.se {
  display: none;
}
.f_top .search input {
  width: 100%;
  height: 1.296296rem;
  font-size: 0.462963rem;
  background: #d46514;
  color: #ffffff;
  border: none;
  padding-left: 0.277778rem;
}
input::-webkit-input-placeholder{
  color: #ffffff;
}
</style>


