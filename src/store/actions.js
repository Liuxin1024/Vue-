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
  //一步获取 地址信息 address
  async getAddress({commit,state}){
    //获取经纬度
    const {latitude,longitude} = state
    //发送ajax请求
    const result = await reqAddress(latitude+','+longitude)
    //  我们要得到 result 到时不能直接得到  需要用await  得到的数据是 {code:0 , data:address}
    if (result.code ===0) {
        const address = result.data
      //commit 给mutation  直接调用 commit  指定一个 告诉它
      // 接着传一个 对象address 因为 mutations 里面接受的是一个包装对象
      commit(RECEIVE_ADDRESS,{address})
    }
  }
}
