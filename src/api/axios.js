import axios from "axios";
import config from "@/config";

//1. 对当前环境变量进行判断
const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro

//2.class类
class HttpRequest {
    //4.
    constructor(baseUrl) {
        this.baseUrl = baseUrl
    }

    getInsideConfig() {
        const config = {
            baseUrl: this.baseUrl,
            header: {}
        }
        return config
    }
    // interceptor是拦截器
    interceptor(instance) {
        // 请求拦截器
        instance.interceptors.request.use(function(config){
            return config;
        },function(error){
            return Promise.reject(error);

        });
        // 响应拦截器
        instance.interceptors.response.use(function(response){
            console.log(response,'嗷嗷');
            return response;
        },function(error){
            console.log(error,'不对');
            return Promise.reject(error);

        });
    }
    request(options){
        const instance = axios.create()
        options = {...this.getInsideConfig(), ...options}
        this.interceptor(instance)
        return instance(options)

    }
}
//3.对外暴露类实例
export default new HttpRequest(baseUrl)