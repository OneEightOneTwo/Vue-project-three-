<template>
  <div>
    <router-view></router-view>
    <Xfooter/>
  </div>
</template>
<script>
import Xfooter from '../components/Xfooter.vue'
export default {
  name: "app",
  components: {
    Xfooter
  }
};
</script>
<style scoped>
</style>
