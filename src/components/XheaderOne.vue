<template>
    
    <div class="title" >
        <i class="iconfont icon-fanhui headerLeft" @click="lBack"></i>
        <span v-text="message"></span>
        <i class="iconfont icon-lightning headerRight" @click="rAttention"></i>
    </div>
</template>
<script>
export default {
    data () {
        return {
            message : "探探"
        }
    },

    methods: {
        lBack(){
            alert('回退到上一张请先充值！')
        },
        rAttention(){
            alert('超级关注请先充值！')
        }
        
    },
}
</script>
    
<style scoped>  
.title{
    width: 100%;
    height: 1.574074rem;
    font-size: .555556rem;
    line-height: 1.574074rem;
    color: #ffffff;
    background: linear-gradient(to right, #c42e16 , #d56813);
    /* text-align: center; */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    z-index: 3000;
    position: relative;
}
.headerLeft,.headerRight{
    font-size: .601852rem;
    text-align: left;
}
.headerLeft{
    padding-left: .527778rem;
}
.headerRight{
    padding-right: .527778rem;
}
</style>