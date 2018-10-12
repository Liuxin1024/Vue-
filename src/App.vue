
<!--
这个是总组件
-->
<template>
  <div>
    <router-view/>
    <FooterGuide v-if="$route.meta.showFooter"/>
  </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'
  import {reqAddress} from './api'


  export default {
    components:{                // 在 响应的路由组件里 写完之后 要在这个组件里面使用
      FooterGuide               // 先把需要用的路由组件 引入过来 然后在component 里面映射成路由就可以在页面中使用了
    },
    async mounted(){   // 看要不要传值 要传参就 传 要直接得到就写await 但是写 await 就得写 async
      const result = await reqAddress('40.10038,116.36867')
      console.log(result);
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>
