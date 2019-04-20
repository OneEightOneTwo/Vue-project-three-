<template>
    <div v-text="stk">
        
    </div>

</template>
<script>
export default {
    data(){
        return {
            stk:this.$route.query.stkData//
        }
        
    }
}
</script>