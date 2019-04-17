<template>
  <div>
    <Xheader/>
    <Xfriend/>
  </div>
</template>
<script>
import Xheader from "../../components/Xheader.vue";
import Xfriend from "../../components/Xfriend.vue";
export default {
  name: "app",
  components: {
    Xheader,
    Xfriend,
  }
};
</script>
<style scoped>
</style>
