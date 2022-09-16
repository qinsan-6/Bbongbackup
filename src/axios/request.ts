import { service } from './index'

// 获取商品数据请求
export function GetCommoditData(){
    service({ 
        url: '/commoditData',
    })
}
// 登录请求
export function GetLogin(data:LoginData){
    service({
        url: '/login',
        data: data
    })
}