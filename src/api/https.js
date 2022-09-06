import axios from 'axios'
import router from '../router/index';

var instance = axios.create({
  // baseURL: process.env.VUE_APP_API_URL
  baseURL: 'http://10.59.100.50/SFAPI/api'
})

export default function (method, url, data = null) {
  return instance({
    method: method,
    url: url,
    data: data,
    headers: {
      "Access-Control-Allow-Origin": '*',
      "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, OPTIONS",
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Max-Age": "86400"
    }
  })
}

// export default function (method, url, data = null) {
//   method = method.toLowerCase();
//   switch (method) {
//     case 'get':
//       return instance.get(url, { params: data })
//       break;
//     case 'post':
//       return instance.post(url, data)
//       break;
//     case 'put':
//       return instance.put(url, data)
//       break;
//     case 'delete':
//       return instance.delete(url, { params: data })
//       break;
//     default:  //default -> get
//       return instance.get(url, { params: data })
//       break;
//   }
// }

// request攔截器
// instance.interceptors.request.use((config) => {
//   config.data = JSON.stringify(config.data);
//   config.headers = { // 如果沒有cors的問題則可以都不加
//     "Access-Control-Allow-Origin": '*',
//     "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, OPTIONS",
//     "Content-Type": "application/json; charset=utf-8",
//     "Access-Control-Max-Age": "86400"
//   };
//   return config;
// }, (error) => {
//   return Promise.reject(error);
// });

instance.interceptors.response.use(
  response => {
    return response;
  },
  err => {
    if (err && err.response) {
      errorHandle(err.response.status, err.response.data.error);
      // window.navigator.onLine : 確認網路連線
    } else {
      //cros跨域或程式
      console.log("連接到服務器失敗");
    }
    return Promise.resolve(err.response);
  }
);


function errorHandle(status, msg) {
  switch (status) {
    case 400:
      console.log("http code 400");
      break;
    case 401:
      console.log("http code 401 unauth");
      // router.replace({
      //   name: 'login'
      // })
      break;
    case 404:
      console.log("http code 404 not found");
      break;
    default:
      console.log(" undefinite err : ");
      console.log(msg);
  }
}




