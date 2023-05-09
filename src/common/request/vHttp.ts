import vAxios from './vAxios';
import {AxiosRequestConfig, AxiosResponse} from 'axios';

const vHttp = {
  get<T = any, R = AxiosResponse<T>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R> {

    return vAxios.get(url, config);
  },
  post<T = any, R = AxiosResponse<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R> {
    return vAxios.post(url, config);

  },
  put() {
    console.log('put');
  },
  delete() {
    console.log('delete');
  },
};

export default vHttp;
