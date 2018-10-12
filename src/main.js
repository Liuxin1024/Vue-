
/*  入口 js */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import TopHeader from './components/TopHeader/TopHeader.vue'

import 'swiper/dist/css/swiper.min.css'

/*   注册全局路由组件*/
Vue.component('TopHeader',TopHeader)

new Vue({
  el: '#app',               // 这个是元素选择器  要跟HTML里面的 div 的id 所对应
  router,                    //在这要 注意的点是 import引入router的时候 router 的名字 要跟注册的名字一致
  store,
  // 比如 import Router from  在这注册的时候也要写 Router
 // components: { App },     // 这个是注册组件
  //template: '<App/>',       // 写组件标签
  render: h => h(App)
  /*render: h => h(App)
  * 这句话 啥意思 ？？
  * 意思就是 这行代码等于上面两行代码  render 的意思就是渲染
  * 是一个 函数  并且是回调函数  接受一个函数 参数是函数 第一个 h  是这个回调函数
  * 接受的参数 这个函数执行的时候接受一个组件 app
  * 里面的这个箭头的作用 有两个 一个是 定义函数 还有一个是 return  返回的作用
  *  所有 这个函数执行的结果 会被返回
  *  相当于
  *  render ：function (createElement) {  // 函数返回的标签会被渲染到 el 中
  *         return createElement(App)
  *  }
  * 意思就是往el 里面渲染 <App/> 这个标签  但是要渲染之前要
  * 先 注册成标签
  * 箭头函数左边的值 是 这个函数要接受的参数
  *
  * */
})
