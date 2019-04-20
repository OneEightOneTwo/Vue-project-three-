<template>
    <div class="title" v-text="message"></div>
</template>
<script>
export default {
    data () {
        return {
            message : "发现"
        }
    }
}
</script>
    
<style scoped>  
.title{
    width: 100%;
    height: 1.574074rem;
    font-size: .555556rem;
    line-height: 1.574074rem;
    color: #ffffff;
   background: -webkit-gradient(
    linear,
    100% 0,
    0 100%,
    from(#d56815),
    to(#c32d15)
  );
    text-align: center;
}
</style>


