/*
*包含 n 个接口请求函数的模块
* */
/*
* const  后面是接口的名字 调用的是谁 是 ajax 所以要引入
*  ajax 里面有两个参数 第一个 是地址
*  geohash 没有这个值 传一下 后面拼串
* */
import ajax from './ajax'
// 1:根据经纬度获取位置详情
export const reqAddress = (geohash) => ajax ('/api/position/'+geohash)

// 2:获取食品分类列表
export const reqFootTypeList = () => ajax('/api/index_category')

// 3: 根据经纬度获取商铺列表  这个传参的时候可以用对象也可直接传但要注意顺序 还有单词不要写错
export const reqShops = ({latitude,longitude}) => ajax('/api/shops',{latitude,longitude})


