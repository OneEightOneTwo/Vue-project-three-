<template>
  <div>
    <div class="heads" @click="toPersonal">
      <div class="pic"></div>
      <p class="names" v-text="names"></p>
      <p class="edit" v-text="edit"></p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      names: "梅雨明时",
      edit: "点击查看/编辑"
    }
  },
  methods: {
    toPersonal(){
      this.$router.push({path: '/personal'})
    }
  }
};
</script>
<style scoped>
.heads {
  width: 100%;
  height: 7.259259rem;
  background: #9e614e;
  opacity: 0.5;
  padding-top: 1.203704rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.heads .pic {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: #ffffff;
  text-align: center;
}
.heads .names {
  width: 4.074074rem;
  height: 0.537037rem;
  color: #ffffff;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 0.462963rem;
  text-align: center;
  margin-top: 0.648148rem;
}
.heads .edit {
  margin-top: 0.37037rem;
  font-size: 0.37037rem;
  text-align: center;
  color: #fbeccf;
}
</style>

