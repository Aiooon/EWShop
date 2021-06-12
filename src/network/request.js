// 通用内容
// 网络请求 axios 插件
import axios from 'axios'

export function request(config) {
    const instance = axios.create({
        baseURL: 'https://api.shop.eduwork.cn',
        timeout: 5000
    })

    // 请求拦截
    instance.interceptors.request.use(config=>{
        // 如果有一个接口需要认证才可以访问，就这里统一设置

        // 直接放行
        return config;
    }, err=>{

    })

    // 响应拦截
    instance.interceptors.response.use(res=>{
        // console.log(res.data);
        return res.data ? res.data : res;
    }, err=>{
        // 如果有需要授权才可以访问的接口，统一去login授权

        // 如果有错误，这里会处理并显示错误信息

    })

    return instance(config);
}