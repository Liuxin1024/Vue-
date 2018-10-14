<template>
  <section class="msite">
    <!--首页头部-->
    <TopHeader :title="address.name">
      <span class="header_search" slot="left">
          <i class="iconfont icon-sousuo"></i>
       </span>
      <span class="header_login" slot="right">
        <span class="header_login_text">登录|注册</span>
      </span>
    </TopHeader>
    <!--首页导航-->
    <nav class="msite_nav">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(categorys ,index) in categorysArr" :key="index">
            <a href="javascript:" class="link_to_food" v-for="(category,index) in categorys" :key="index">
              <div class="food_container">
                <img :src="baseImgUrl+category.image_url">
              </div>
              <span>{{category.title}}</span>
            </a>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </nav>
    <!--首页附近商家-->
    <div class="msite_shop_list">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <ShopList/>
    </div>
  </section>
</template>

<script>
import ShopList from '../../components/ShopList/ShopList.vue'
import {mapState} from 'vuex'
import Swiper from 'swiper'
  export default {

    data(){
      return {      // 在这的语法还是不熟练 data里面的数据要return 一个大括号
        baseImgUrl: 'https://fuss10.elemecdn.com'
      }

    },
    mounted (){
      this.$store.dispatch('getShops')
    },
    components:{
      ShopList
    },
    computed:{
      ...mapState(['address','categorys']) , //取值
      /*
      * 在计算属性里面写 二维数组
      * 先取值 大数组的产生是由categorys 组成的 先得到categorys 从this中取出
      * 要遍历categorys 拿出每一个 分类 就把分类定义成 c
      * 将当前 遍历出来的 分类对象保存到小数组当中
      * 如果小数组的长度等于8 那就在创建一个小数组
      * 注意const 和 let的用法  小数组 是个变量 要用let
      * 这样就写好了
      * 然后在上面相应的 标签里 循环遍历数组
      * 在返回的数据里面找 对应的 数据结构 用表达式在对应的地方显示数据就好
      * 还有图片的路径显示 要用 拼串 看情况
      * 完成之后有一个问题就是 轮播图不出来是因为 列表的数据还渲染完
      * 解决问题就是等数据渲染完 轮播图在监听数据显示
      * 所以要监视categorys 的值什么时候渲染完然后进行响应的操作
      *  这时候要有两个办法就是定一个定时器等一下就好了但是你不知道
      *  什么时候渲染完 又要调多少时间 所以要用到一个Vue的新语法了
      *  $nextTick 这是回调函数 回调一个箭头函数
      * */
      //产生一个二维数组 每个小数组的个数 为8
      categorysArr(){
        const {categorys} = this
        const arr = []    // 这个就是二维数组
        let smallArr = []  // 这个就是小数组

        categorys.forEach(e => {
          //当小数组为空数组时 才把
          if (smallArr.length ===0) {
            arr.push(smallArr)
          }
          //将当前 遍历出来的 分类对象保存到小数组当中
          smallArr.push(e)
          if (smallArr.length ===8) {
              smallArr =[]
          }
        })
        return arr  //最后要把 大数组暴露出去
      }
    },
    watch:{
      categorys(value){      //注意状态数据变化后， 更新对应的界面是一步执行的

        this.$nextTick(()=>{
          //  轮播图 为什么写在这呢 因为 写在外面的话 列表还没有
          // 挂载上 也就是没有显示出来  所有要写在 列表后面
          new Swiper('.swiper-container',{
            loop: true, // 循环模式选项
            //direction: 'vertical', // 垂直切换选项
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
          })
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/misins.styl'
  .msite  //首页
    width 100%
    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #fff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            .link_to_food
              width 25%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
        .swiper-pagination
          >span.swiper-pagination-bullet-active
            background #02a774
    .msite_shop_list
      top-border-1px(#e4e4e4)
      margin-top 10px
      background #fff
      .shop_header
        padding 10px 10px 0
        .shop_icon
          margin-left 5px
          color #999
        .shop_header_title
          color #999
          font-size 14px
          line-height 20px
      /*.shop_container
        margin-bottom 50px
        .shop_list
          .shop_li
            bottom-border-1px(#f1f1f1)
            width 100%
            >a
              clearFix()
              display block
              box-sizing border-box
              padding 15px 8px
              width 100%
              .shop_left
                float left
                box-sizing border-box
                width 23%
                height 75px
                padding-right 10px
                .shop_img
                  display block
                  width 100%
                  height 100%
              .shop_right
                float right
                width 77%
                .shop_detail_header
                  clearFix()
                  width 100%
                  .shop_title
                    float left
                    width 200px
                    color #333
                    font-size 16px
                    line-height 16px
                    font-weight 700
                    &::before
                      content '品牌'
                      display inline-block
                      font-size 11px
                      line-height 11px
                      color #333
                      background-color #ffd930
                      padding 2px 2px
                      border-radius 2px
                      margin-right 5px
                  .shop_detail_ul
                    float right
                    margin-top 3px
                    .supports
                      float left
                      font-size 10px
                      color #999
                      border 1px solid #f1f1f1
                      padding 0 2px
                      border-radius 2px
                .shop_rating_order
                  clearFix()
                  width 100%
                  margin-top 18px
                  margin-bottom 8px
                  .shop_rating_order_left
                    float left
                    color #ff9a0d
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
                            bg-image('./images/stars/star48_on')
                          &.half
                            bg-image('./images/stars/star48_half')
                          &.off
                            bg-image('./images/stars/star48_off')
                      &.star-36
                        .star-item
                          width 15px
                          height 15px
                          margin-right 6px
                          background-size 15px 15px
                          &:last-child
                            margin-right 0
                          &.on
                            bg-image('./images/stars/star36_half')
                          &.half
                            bg-image('./images/stars/star36_half')
                          &.off
                            bg-image('./images/stars/star36_off')
                      &.star-24
                        .star-item
                          width 10px
                          height 10px
                          margin-right 3px
                          background-size 10px 10px
                          &:last-child
                            margin-right 0
                          &.on
                            bg-image('./images/stars/star24_on')
                          &.half
                            bg-image('./images/stars/star24_half')
                          &.off
                            bg-image('./images/stars/star24_off')
                    .rating_section
                      float left
                      font-size 10px
                      color #ff6000
                      margin-left 4px
                    .order_section
                      float left
                      font-size 10px
                      color #666
                      transform scale(.8)
                  .shop_rating_order_right
                    float right
                    font-size 0
                    .delivery_style
                      transform-origin 35px 0
                      transform scale(.7)
                      display inline-block
                      font-size 12px
                      padding 1px
                      border-radius 2px
                    .delivery_left
                      color #fff
                      margin-right -10px
                      background-color #02a774
                      border 1px solid #02a774
                    .delivery_right
                      color #02a774
                      border 1px solid #02a774
                .shop_distance
                  clearFix()
                  width 100%
                  font-size 12px
                  .shop_delivery_msg
                    float left
                    transform-origin 0
                    transform scale(.9)
                    color #666
                  .segmentation
                    color #ccc*/
</style>
