/*
路由器对象模块
* */

import Vue from 'vue'
import VueRouter from 'vue-router'

import Msite from '../pages/Msite/msite.vue'
import Order from '../pages/Order/order.vue'
import Profile from '../pages/Profile/profile.vue'
import Search from '../pages/Search/search.vue'
import Login from '../pages/Login/Login.vue'
//声明使用  VueRouter 这个库是构造函数   在下面暴露的时候 new
Vue.use(VueRouter)
export default new VueRouter({
  /*  传一个配置对象  配置啥？？  配置 所有的路由  以数组的形式  里面 每一个对象都是一个 路由
  *  在路由对象里面有两个属性 一个是 path：
  *     一个是 component： 组件的意思  里面的值 就是某一个组件 所以现在有4个组件 需要配置。
  *      要配置谁 就要 先引入谁  引入的时候 要引入 Vue文件  而不是文件夹
  *       在routers 里面 每一个对象是一个 路由  path是 相应的路径 填谁就会跳转到谁（路由）
  *       Ctrl + shift x   是转变大小写  再填路由 路径的时候 一般都 小写
  *       redirect  重定向 使改 方向 后面指向一个 要重定向的路由  / 的意思是 跟目录
  *       然后这边的路由设置好就 去用  在 入口 js 里面 注册路由
  *       路由组件不能加 引号 直接写
  * */
  routes:[          //z这是真的坑（我之间写惯了一直写的是routers） 我的天 一字之差 天差地别  routes routes routes routes routes
    {
      path:'/msite',
      component:Msite,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/order',
      component:Order,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/profile',
      component:Profile,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/search',
      component:Search,
      meta:{
        showFooter:true
      }
    },

    {
      path:'/login',
      component:Login
    },
    {
      path:'/',
      redirect:'/msite'
    }
  ]
})
