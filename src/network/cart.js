import { request } from "./request";

//添加购物车
export function addCart(data){
    return request({
        url:'/api/carts',
        method:'post',
        data
    })
}

//修改购物车
export function modifyCart(id, data){
    return request({
        url:`/api/carts/${id}`,   // 模板字符串``可以包含特定语法（${expression}）的占位符
        method:'put',
        data
    })
}

//选择商品的状态
export function checkedCart(data) {
    return request({
        url:'/api/carts/checked',
        method:'patch',
        data
    })
}

//获取购物车列表
export function getCart(data=''){
    return request({
        url:'/api/carts?'+data,
    })
}

//移出购物车
export function deleteCartItem(id){
    return request({
        url:`/api/carts/${id}`,
        method:'delete'
    })
}