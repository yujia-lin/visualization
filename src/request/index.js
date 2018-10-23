import axios from 'axios'
import qs from 'qs'
//baseURL会自动在请求地址前面添加  除非url为完整地址
axios.defaults.baseURL = 'https://api.example.com';
//axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.timeout = 20000;
// 请求时的拦截
axios.interceptors.request.use(function (config) {

    // 发送请求之前做一些处理
    return config;
}, function (error) {
    // 当请求异常时做一些处理
    return Promise.reject(error);
});

// 响应时拦截
axios.interceptors.response.use(function (response) {
	console.log(response);
	
// 返回响应时做一些处理
    return response;
}, function (error) {
    // 当响应异常时做一些处理
    return Promise.reject(error);
});

export default {
  post (url, data) {
    return axios({
      method: 'post',
      url,
      data: qs.stringify(data),
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    })
  },
  get (url, params) {
    return axios.get(url,{
      params:params
    }) 
    .then(response => {
      console.log(response.data);
    })
  }
}
export function gets(url,params={}){
  return new Promise((resolve,reject) => {
    axios.get(url,{
      params:params
    }) 
    .then(response => {
      resolve(response.data);
    })
    .catch(err => {
      reject(err)
    })
  })
}
