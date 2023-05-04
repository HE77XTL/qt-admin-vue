import axios from 'axios';
import {ElMessage} from 'element-plus';

const instance = axios.create({
  // baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});



instance.interceptors.request.use(config => {
  return config;
});


instance.interceptors.response.use(res => {
  if (res.status === 200) {
    return res.data;
  }
  return res;
}, error => {

  console.log('error');
  console.log(error);
  console.log(axios.isCancel(error));

  const response = error.response;
  let errorMessage = error.message;
  switch (response.status) {
    case 401:
      errorMessage = "无权限";
      break;
    case 403:
      errorMessage = "登录过期";
      break;
    case 500:
      errorMessage = "服务器出错";
      break;
  }
  ElMessage.error(errorMessage);
  return Promise.reject(response);
});

const vAxios = instance;
export default vAxios;
