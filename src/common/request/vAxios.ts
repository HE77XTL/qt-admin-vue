import axios from 'axios';
import {AxiosRequestConfig} from 'axios';
import {ElMessage} from 'element-plus';

import {axiosCancel} from '@/pinia/axiosCancel';
const axiosCancelStore = axiosCancel();

const instance = axios.create({
  // baseURL: 'https://some-domain.com/api/',
  timeout: 9000,
  headers: {'X-Custom-Header': 'foobar'}
});

interface RequestConfig extends AxiosRequestConfig {
  isCancel?: boolean
}

instance.interceptors.request.use((config: RequestConfig) => {
  if (config.isCancel) {
    const CancelToken = axios.CancelToken;
    let cancel;
    config.cancelToken = new CancelToken(function executor(c) {
      cancel = c;
    });
    axiosCancelStore.handleRequest({
      key: config.url || new Date().getTime().toString(),
      cancel: cancel
    });
  }
  return config;
});


instance.interceptors.response.use(res => {
  if (res.status === 200) {
    return res.data;
  }
  return res;
}, error => {
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

export default instance;
