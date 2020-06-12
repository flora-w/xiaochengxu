import JsonP from 'jsonp';
import axios from 'axios';
import { message } from 'antd';
import {baseURL} from "./baseURL";
import { LOGIN_LOGIN } from "../config/api";

var ajax = axios.create({
    baseURL: baseURL,
    withCredentials: true,
    timeout: 10000,
  })
export default class Axios{
    static jsonp(options){
        return new Promise((resolve,reject)=>{
            JsonP(options.url,{
                param:'callback'
            },function(err,response){
                if(response.status === 'success'){
                    resolve(response);
                }else{
                    reject(response.message);
                }
            })
        })
    }
    // 发送 GET 请求
    static get(options){
        return new Promise((resolve,reject)=>{
            ajax({
                url:options.url,
                method:'get',
                withCredentials:true,
                params:options.data || '',
                loading:options.loading
            }).then((response)=>{
                if(response.status === 200){
                        resolve(response.data);
                }else{
                    reject(response.data);
                }
            }).catch(err=>{
                message.error('error : 請求錯誤');
                // reject(err)
                console.log(err);
            })
        })
    }

    // 发送 POST 请求
    static post(options){
        return new Promise((resolve,reject)=>{
            ajax({
                method: 'post',
                url: options.url,
                withCredentials:false,
                data: formatPostData(options.data, options.format) || '',
                loading:options.loading,
                headers:{
                    'Content-Type':'application/x-www-form-urlencoded'
                }
            }).then((response)=>{
                if(response.status === 200){
                        resolve(response.data);
                }else{
                    reject(response.data);
                }
            })
            .catch(err=>{
                reject(err)
            });
        })
    }
}


// 添加请求拦截器
ajax.interceptors.request.use(function (config) {
    // console.log(unescape(hahaha()), 'color: green; font-weight: bold');  
    if(!new RegExp(`^(${LOGIN_LOGIN})$`).test(config.url)){      
        let user = sessionStorage.getItem('user');
        let userId = sessionStorage.getItem('userId');
        if(!(user && userId)){
            // window.location.hash = '/home';
            sessionStorage.removeItem('user');
        }
    }
    return config;
  }, function (error) {   
    return Promise.reject(error);
  });

// 添加响应拦截器
ajax.interceptors.response.use(function (response) {
    if(response.data.code === 2){
        sessionStorage.removeItem('userId');
        sessionStorage.removeItem('category');
        sessionStorage.removeItem('user');
        // window.location.hash = '/';
    }
    return response
    
  }, function (error) {
    return Promise.reject(error);
  });

/**
 * 格式化post提交數據
 * @param {object} data 
 */
const formatPostData = (data, format) => {
    let formData = new FormData();
    if(data instanceof FormData){
        return data;
    }
    if(typeof data === 'object' && !format){
        console.log(data)
        // data = JSON.stringify(data);
        var key;
        for (key in data) {
            formData.append(key, data[key]);
        }
        // formData.append('data', data);
    }else if(typeof data === 'object'){
        for (const v of Object.keys(data)) {
            if(typeof data[v] === 'object'){
                formData.append(v, JSON.stringify(data[v]));
            }else{
                formData.append(v, data[v]);
            } 
        }
    }
    return formData;
}







