//对于axios进行二次封装
import axios from "axios";
import nprogress from 'nprogress'
import "nprogress/nprogress.css"
// console.log(nprogress);
let requests = axios.create({
    //基础路径,发请求URL携带api【发现:真实服务器接口都携带/api】
    baseURL: "/api",
    //超时的设置
    timeout: 5000
});

requests.interceptors.request.use(config => {
    nprogress.start()
    return config;
});

requests.interceptors.response.use((res) => {
    //res:实质就是项目中发请求、服务器返回的数据
    
    nprogress.done()
    return res.data;
}, (err) => {
   
    //终止Promise链
    return new Promise();
});
export default requests