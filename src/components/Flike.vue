<template>
    <div>
        <div class="like">
            <div class="l_left">
                <span class="num" v-text="num"></span>
                <i class="iconfont" v-html="icon"></i>
                <p class="preson" v-text="person"></p>
            </div>
            <div class="w_like" v-text="w_like"></div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            num : "213",
            icon : "&#xe694;",
            person : "人喜欢了你",
            w_like : "谁喜欢我？"
        }
    }
}
</script>
<style scoped>
.like{
    width: 100%;
    height: 2.240741rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.l_left{
    margin-left: .462963rem;
}
.l_left .num{
    font-size: .518519rem;
    margin-right: .212963rem;
}
.l_left i{
    font-size: .518519rem;
    color: #cf4e17;
}
.l_left .preson{
    color: #cbcbcb;
    font-size: .37037rem;
    margin-top: .17037rem;
}
.w_like{
    margin-right: .462963rem;
    font-size: .37037rem;
    color: #bd5b5c;
}

</style>


