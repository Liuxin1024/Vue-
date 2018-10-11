
<!--
这个是总组件
-->
<template>
  <div>
    <router-view/>
    <FooterGuide/>
  </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'
  export default {
    components:{                // 在 响应的路由组件里 写完之后 要在这个组件里面使用
      FooterGuide               // 先把需要用的路由组件 引入过来 然后在component 里面映射成路由就可以在页面中使用了
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>
