<template>
  <div>
    <Ftop/>
    <Flike/>
    <Fpanel/>
  </div>
</template>
<script>
import Ftop from "../../components/Ftop.vue";
import Flike from "../../components/Flike.vue";
import Fpanel from "../../components/Fpanel.vue";
export default {
  name: "App",
  components: {
    Ftop,
    Flike,
    Fpanel
  }
};
</script>
<style scoped>
</style>
