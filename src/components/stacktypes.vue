<template>
    <ul class="stack">
      <li class="stack-item" v-for="(item, index) in pages" v-bind:key='index'
      :style="[transformIndex(index),transform(index)]"
      @touchmove.stop.prevent="touchmove"
      @touchstart.stop.prevent="touchstart"
      @touchend.stop.prevent="touchend"
      @touchcancel.stop.prevent="touchend"
      @mousedown.stop.prevent="touchstart"
      @mouseup.stop.prevent="touchend"
      @mousemove.stop.prevent="touchmove"
      @mouseout.stop.prevent="touchend"
      @webkit-transition-end="onTransitionEnd(index)"
      @transitionend="onTransitionEnd(index)">
        <div>
          <img :src="item.srcs[0]" :alt="index+1" class="bigImg">
          <div class="msgBox">
            <h3 class="msgName ageclass" v-text="item.name"></h3>，<span v-text="item.age" :style="{color:sexColor(item.sex)}"></span>
            <p class="msgSchool" >{{item.school}} <span class="trueclass">√</span></p>
          </div>
          <i 
          class="bigAttention"
          @touchstart.stop.prevent="starStart"
          @mousedown.stop.prevent="starStart"
          @touchend.stop.prevent="starEnd"
          @mouseup.stop.prevent="starEnd"
          @touchcancel.stop.prevent="starEnd"
          @mouseout.stop.prevent="starEnd"
          >★</i>
        </div>
      </li>
    </ul>
</template>
<script>
import detectPrefixes from './detect-prefixes.js'
export default {
  props: {
    stackinit: {
      type: Object,
      default: ()=>{[]}
    },
    pages: {
      // type: Array,
      default: ()=>{}
    }
  },
  data () {
    return {
      basicdata: {
        start: {},
        end: {}
      },
      temporaryData: {
        prefixes: detectPrefixes(),
        offsetY: '',
        poswidth: 0,
        posheight: 0,
        lastPosWidth: '',
        lastPosHeight: '',
        rotate: 0,
        lastRotate: 0,
        visible: this.stackinit.visible || 3,
        tracking: false,
        animation: false,
        currentPage: this.stackinit.currentPage || 0,
        opacity: 1,
        lastOpacity: 0,
        swipe: false,
        zIndex: 10
      },
      flag :false//判断当前鼠标是否点击超级关注的开关
    }
  },
  computed: {
    // 划出面积比例
    offsetRatio () {
      let width = this.$el.offsetWidth
      let height = this.$el.offsetHeight
      let offsetWidth = width - Math.abs(this.temporaryData.poswidth)
      let offsetHeight = height - Math.abs(this.temporaryData.posheight)
      let ratio = 1 - (offsetWidth * offsetHeight) / (width * height) || 0
      return ratio > 1 ? 1 : ratio
    },
    // 划出宽度比例
    offsetWidthRatio () {
      let width = this.$el.offsetWidth
      let offsetWidth = width - Math.abs(this.temporaryData.poswidth)
      let ratio = 1 - offsetWidth / width || 0
      return ratio
    }
  },
  created() {
    // console.log(this.transformIndex)
  },
  mounted () {
    
    // 绑定事件
    this.$on('next', () => {
      this.next()
    })
    this.$on('prev', () => {
      this.prev()
    })
    
  },
  watch:{
    pages:function(){
    },
  },
  methods: {
    touchstart (e) {
      if (this.temporaryData.tracking) {
        return
      }
      // 是否为touch
      if (e.type === 'touchstart') {
        if (e.touches.length > 1) {
          this.temporaryData.tracking = false
          return
        } else {
          // 记录起始位置
          this.basicdata.start.t = new Date().getTime()
          this.basicdata.start.x = e.targetTouches[0].clientX
          this.basicdata.start.y = e.targetTouches[0].clientY
          this.basicdata.end.x = e.targetTouches[0].clientX
          this.basicdata.end.y = e.targetTouches[0].clientY
          this.temporaryData.offsetY = e.targetTouches[0].offsetY
        }
      // pc操作
      } else {
        this.basicdata.start.t = new Date().getTime()
        this.basicdata.start.x = e.clientX
        this.basicdata.start.y = e.clientY
        this.basicdata.end.x = e.clientX
        this.basicdata.end.y = e.clientY
        this.temporaryData.offsetY = e.offsetY
      }
      this.temporaryData.tracking = true
      this.temporaryData.animation = false
    },
    touchmove (e) {
      // 记录滑动位置
      
      if (this.temporaryData.tracking && !this.temporaryData.animation) {
        if (e.type === 'touchmove') {
          this.basicdata.end.x = e.targetTouches[0].clientX
          this.basicdata.end.y = e.targetTouches[0].clientY
          
        } else {
          this.basicdata.end.x = e.clientX
          this.basicdata.end.y = e.clientY
        }
        

        // 计算滑动值
        this.temporaryData.poswidth = this.basicdata.end.x - this.basicdata.start.x
        this.temporaryData.posheight = this.basicdata.end.y - this.basicdata.start.y
        let rotateDirection = this.rotateDirection()
        // let angleRatio = this.angleRatio()
        // this.temporaryData.rotate = rotateDirection * this.offsetWidthRatio * 15 * angleRatio

        // console.log(angleRatio);
      }
    },
    touchend (e) {
      this.temporaryData.tracking = false
      this.temporaryData.animation = true
      // 滑动结束，触发判断
      if(this.offsetRatio==0){//判断是否应该跳转(点击无拖拽)
        if (e.type != 'mouseout'){//清除BUG（滑出也触发事件）
          if(this.flag==false){//若鼠标没有点击超级关注则执行
          this.$router.push(  { path: '/msgdetails',query:{//用router来跳转到详情页并通过query参数传递数据
            stkImgs:this.pages[this.temporaryData.currentPage].srcs,
            stkName:this.pages[this.temporaryData.currentPage].name,
            stkSex:this.pages[this.temporaryData.currentPage].sex,
            stkStella:this.pages[this.temporaryData.currentPage].stella,
            stkAge:this.pages[this.temporaryData.currentPage].age,
            stkSchool:this.pages[this.temporaryData.currentPage].school,
            }},)
          }
        }
      }
      // 判断划出面积是否大于0.5
      else if (this.offsetRatio >= 0.5) {
        // 计算划出后最终位置
        let ratio = Math.abs(this.temporaryData.posheight / this.temporaryData.poswidth)
        this.temporaryData.poswidth = this.temporaryData.poswidth >= 0 ? this.temporaryData.poswidth + 200 : this.temporaryData.poswidth - 200
        this.temporaryData.posheight = this.temporaryData.posheight >= 0 ? Math.abs(this.temporaryData.poswidth * ratio) : -Math.abs(this.temporaryData.poswidth * ratio)
        this.temporaryData.opacity = 0
        this.temporaryData.swipe = true
        this.nextTick()
      // 不满足条件则滑入
      } else {
        this.temporaryData.poswidth = 0
        this.temporaryData.posheight = 0
        this.temporaryData.swipe = false
        this.temporaryData.rotate = 0
      }
    },
    nextTick () {
      // 记录最终滑动距离
      this.temporaryData.lastPosWidth = this.temporaryData.poswidth
      this.temporaryData.lastPosHeight = this.temporaryData.posheight
      this.temporaryData.lastRotate = this.temporaryData.rotate
      // 循环currentPage
      this.temporaryData.currentPage = this.temporaryData.currentPage === this.pages.length - 1 ? 0 : this.temporaryData.currentPage + 1
      // currentPage切换，整体dom进行变化，把第一层滑动置最低
      this.$nextTick(() => {
        this.temporaryData.poswidth = 0
        this.temporaryData.posheight = 0
        this.temporaryData.opacity = 1
        this.temporaryData.rotate = 0
      })
    },
    onTransitionEnd (index) {
      let lastPage = this.temporaryData.currentPage === 0 ? this.pages.length - 1 : this.temporaryData.currentPage - 1
      // dom发生变化正在执行的动画滑动序列已经变为上一层
      if (this.temporaryData.swipe && index === lastPage) {
        this.temporaryData.animation = true
        this.temporaryData.lastPosWidth = 0
        this.temporaryData.lastPosHeight = 0
        this.temporaryData.lastOpacity = 0
        this.temporaryData.lastRotate = 0
        this.temporaryData.swipe = false
      }
    },
    prev () {
      this.temporaryData.tracking = false
      this.temporaryData.animation = true
      // 计算划出后最终位置
      let width = this.$el.offsetWidth
      this.temporaryData.poswidth = -width
      this.temporaryData.posheight = 0
      this.temporaryData.opacity = 0
      this.temporaryData.rotate = '-3'
      this.temporaryData.swipe = true
      this.nextTick()
    },
    next () {
      this.temporaryData.tracking = false
      this.temporaryData.animation = true
      // 计算划出后最终位置
      let width = this.$el.offsetWidth
      this.temporaryData.poswidth = width
      this.temporaryData.posheight = 0
      this.temporaryData.opacity = 0
      this.temporaryData.rotate = '3'
      this.temporaryData.swipe = true
      this.nextTick()
    },
    rotateDirection () {
      if (this.temporaryData.poswidth <= 0) {
        return -1
      } else {
        return 1
      }
    },
    angleRatio () {
      // let height = this.$el.offsetHeight
      // let offsetY = this.temporaryData.offsetY
      // let ratio = -1 * (2 * offsetY / height - 1)
      return 0
    },
    inStack (index, currentPage) {
      let stack = []
      let visible = this.temporaryData.visible
      let length = this.pages.length
      for (let i = 0; i < visible; i++) {
        if (currentPage + i < length) {
          stack.push(currentPage + i)
        } else {
          stack.push(currentPage + i - length)
        }
      }
      return stack.indexOf(index) >= 0
    },
    // 非首页样式切换
    transform (index) {
      let currentPage = this.temporaryData.currentPage
      let length = this.pages.length
      let lastPage = currentPage === 0 ? this.pages.length - 1 : currentPage - 1
      let style = {}
      let visible = this.temporaryData.visible
      if (index === this.temporaryData.currentPage) {
        return
      }
      if (this.inStack(index, currentPage)) {
        let perIndex = index - currentPage > 0 ? index - currentPage : index - currentPage + length
        style['opacity'] = '1'
        style['transform'] = 'translate3D(0,0,' + -1 * 60 * (perIndex - this.offsetRatio) + 'px' + ')'
        style['zIndex'] = visible - perIndex
        if (!this.temporaryData.tracking) {
          style[this.temporaryData.prefixes.transition + 'TimingFunction'] = 'ease'
          style[this.temporaryData.prefixes.transition + 'Duration'] = 300 + 'ms'
        }
      } else if (index === lastPage) {
        style['transform'] = 'translate3D(' + this.temporaryData.lastPosWidth + 'px' + ',' + this.temporaryData.lastPosHeight + 'px' + ',0px) ' + 'rotate(' + this.temporaryData.lastRotate + 'deg)'
        style['opacity'] = this.temporaryData.lastOpacity
        style['zIndex'] = -1
        style[this.temporaryData.prefixes.transition + 'TimingFunction'] = 'ease'
        style[this.temporaryData.prefixes.transition + 'Duration'] = 300 + 'ms'
      } else {
        style['zIndex'] = '-1'
        style['transform'] = 'translate3D(0,0,' + -1 * visible * 60 + 'px' + ')'
      }
      return style
    },
    // 首页样式切换
    
    transformIndex (index) {
      if (index === this.temporaryData.currentPage) {
        let style = {}
        style['transform'] = 'translate3D(' + this.temporaryData.poswidth + 'px' + ',' + this.temporaryData.posheight + 'px' + ',0px) ' + 'rotate(' + this.temporaryData.rotate + 'deg)'
        style['opacity'] = this.temporaryData.opacity
        style['zIndex'] = 10
        if (this.temporaryData.animation) {
          style[this.temporaryData.prefixes.transition + 'TimingFunction'] = 'ease'
          style[this.temporaryData.prefixes.transition + 'Duration'] = (this.temporaryData.animation ? 300 : 0) + 'ms'
        }
        // console.log(index)
        return style
      }
    },
    sexColor(val){
      if(val=='男'){
        return '#64abf9'
      }else{
        return '#e680e4'
      }
    },
    starStart(){//蓝色超级关注的点击事件
      this.flag=true;
      alert('超级关注请先充值！')
    },
    starEnd(){
      this.flag=false;
    },
  }
}
</script>
<style>
  .stack {
    width: 100%;
    height: 100%;
    position: relative;
    perspective: 9.259259rem;
    perspective-origin: 50% 150%;
    -webkit-perspective: 35.259259rem;
    -webkit-perspective-origin: 50% 150%;
    margin: 0;
    padding: 0;
  }
  .stack-item{
    background: #fff;
    height: 100%;
    width: 100%;
    /* border-radius: 4px; */
    text-align: center;
    overflow: hidden;
    position: absolute;
    opacity: 0;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: column;
    flex-direction: column;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    pointer-events: auto;
    border-radius: .37037rem;
    box-shadow: 0 .018519rem .118519rem #aaa;
    overflow: hidden;
  }
  .stack-item img {
    width: 100%;
    display: block;
    pointer-events: none;
  }
  .stack-container li.move-back {
    /* http://matthewlein.com/ceaser/ */
    -webkit-transition-timing-function: cubic-bezier(0.175, 0.885, 0.470, 1); /* older webkit */
    -webkit-transition-timing-function: cubic-bezier(0.175, 0.885, 0.470, 1.515);
    transition-timing-function: cubic-bezier(0.175, 0.885, 0.470, 1.515);
  }
  .bigImg{
    height: 10.240741rem;
  }
  .msgBox{
    height: 2.222222rem;
    font-size: .41rem;
    text-align: left;
    padding-left: .416667rem;
    padding-top: .497037rem;
    box-sizing: border-box;
    font-family: '微软雅黑';
  }
  .msgName{
    display: inline-block;
  }
  .msgSchool{
    padding-top: .30037rem;
    font-size: .351852rem;
    color: #9d9d9d;
  }
  .bigAttention{
    position: absolute;
    color: #fff;
    bottom: 1.422963rem;
    right: .62963rem;
    width: 1.666667rem;
    height: 1.666667rem;
    font-size: 1.324815rem;
    line-height: 1.566667rem;
    display: block;
    background: linear-gradient(45deg, #26aff7, #80d8fc);
    border-radius: 50%;
    font-style: normal;
  }
  .trueclass{
    font-size: .205185rem;
    font-weight: 900;
    display: inline-block;
    width: .305556rem;
    height: .305556rem;
    background-color: #48aeee;
    color: #fff;
    border-radius: 50%;
    line-height: .325185rem;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    padding-left: .026296rem;
    box-sizing: border-box;
  }
</style>
