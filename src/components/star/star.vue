<template>
  <div class="star" :class="`star-${size}`">
    <span class="star-item" v-for="(sc, index) in starClasses" :key="index" :class="sc"></span>
  </div>
</template>
<script>
  const CLASS_ON = 'on'
  const CLASS_HALF = 'half'
  const CLASS_OFF = 'off'
  export default {
   props:{
     score:Number,   //评分
     size:Number     //星星的大小
   },
    computed:{
      starClasses(){
        const scs = []              // 定义一个 放星星的空数组
        const {score} = this          //把 评分这个值取出来
        const scoreIntager = Math.floor(score)

        //向scs 添加 N 个 CLASS_ON
        for (let i = 0; i <scoreIntager; i++) {
          scs.push(CLASS_ON)
        }
        //向scs 添加 N 个 CLASS_HALF
        if (score*10 - scoreIntager*10 >= 5) {   //乘10 是为了计算的时候不会出错 有可能算成4.9之类的
          scs.push(CLASS_HALF)
        }
        //向scs 添加 N 个 CLASS_OFF
        while(scs.length < 8){    //这出错了 我直接填成scs 了 应该是长度
          scs.push(CLASS_OFF)
        }
        return scs
      }
    },
  }
</script>
<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/misins.styl'
  .star //2x图 3x图
    float left
    font-size 0
    .star-item
      display inline-block
      background-repeat no-repeat
    &.star-48
      .star-item
        width 20px
        height 20px
        margin-right 22px
        background-size 20px 20px
        &:last-child
          margin-right: 0
        &.on
          bg-image('./images/star48_on')
        &.half
          bg-image('./images/star48_half')
        &.off
          bg-image('./images/star48_off')
    &.star-36
      .star-item
        width 15px
        height 15px
        margin-right 6px
        background-size 15px 15px
        &:last-child
          margin-right 0
        &.on
          bg-image('./images/star36_half')
        &.half
          bg-image('./images/star36_half')
        &.off
          bg-image('./images/star36_off')
    &.star-24
      .star-item
        width 10px
        height 10px
        margin-right 3px
        background-size 10px 10px
        &:last-child
          margin-right 0
        &.on
          bg-image('./images/star24_on')
        &.half
          bg-image('./images/star24_half')
        &.off
          bg-image('./images/star24_off')
</style>
