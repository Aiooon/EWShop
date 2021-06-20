import { request } from "./request";

//添加购物车
export function addCart(data){
    return request({
        url:'/api/carts',
        method:'post',
        data
    })
}