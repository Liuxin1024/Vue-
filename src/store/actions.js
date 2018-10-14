/*
* 包含N 个用于间接更新状态数据方法的对象
* */

import {
  reqAddress,
  reqFootTypeList,
  reqShops
} from '../api'
import {
  RECEIVE_SHOPS,
  RECEIVE_CATEGORYS,
  RECEIVE_ADDRESS
} from './mutations-types'
export default {
  //异步获取 地址信息 address
  async getAddress({commit,state}){
    //获取经纬度
    const {latitude,longitude} = state
    //发送ajax请求
    const result = await reqAddress(latitude+','+longitude)
    //  我们要得到 result 但是不能直接得到  需要用await  得到的数据是 {code:0 , data:address}
    if (result.code ===0) {
        const address = result.data
      // 把 要传的值从result里面 取出来
      //commit 给mutation  直接调用 commit  指定一个 告诉它
      // 接着传一个 对象address 因为 mutations 里面接受的是一个包装对象
      commit(RECEIVE_ADDRESS,{address})
    }
  },
  //异步获取categorys 分类列表
  async getCategorys({commit}){
    //发送ajax请求
    const result = await reqFootTypeList()
    if (result.code ===0) {
      const categorys = result.data
      commit(RECEIVE_CATEGORYS,{categorys})
    }
  },
      // 异步获取 商店 shops
  async getShops({commit,state}){
    //发送ajax请求
    const {latitude,longitude} = state
    const result = await reqShops(longitude,latitude)
    if (result.code ===0) {
      const shops = result.data
      commit(RECEIVE_SHOPS,{shops})
    }
  },


}
