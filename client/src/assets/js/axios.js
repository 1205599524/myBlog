import axios from "axios";
axios.defaults.baseURL='/blog'
axios.interceptors.request.use(config=>{
   
    return config
},err=>{})
axios.interceptors.response.use(res=>{
   
    return res
},err=>{})

export default axios