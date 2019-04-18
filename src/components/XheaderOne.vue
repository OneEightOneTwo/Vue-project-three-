<template>
    <div class="title" v-text="message"></div>
</template>
<script>
export default {
    data () {
        return {
            message : "探探"
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
    background: #c9431d;
    text-align: center;
}
</style>