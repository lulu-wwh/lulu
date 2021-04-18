import axios from "axios"
import { getToken } from "@/utils/auth"
import {Message} from "element-ui"
const service=axios.create({
    baseURL:"localhost:8080",
    timeout:5000,
})
//请求拦截
service.interceptors.request.use((config)=>{
    if(getToken()){
        config.headers["token"]=sessionStorage.getItem("token")
    }
    return config
},(error)=>{
    return Promise.reject(error)
})


//响应拦截
service.interceptors.response.use((response)=>{
    const res=response.data
    if(!res.success){
        Message({
            type:"error",
            message:res.message||"请求错误"
        });
        return Promise.reject(new Error(res.message||"请求错误"))
    }else{
        return response.data
    }
    
},function(error){
    Message({
        message:error.message,
        type:"error"
    })
    return Promise.reject(error);
})

export default service