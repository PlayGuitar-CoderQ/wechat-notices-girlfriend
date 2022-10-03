import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError
} from 'axios';

import type { HttpOptions } from './index';

import axios from 'axios';
import { transformRequestHook } from './index';

export class HttpAxios {
  private instance: AxiosInstance;
  private readonly initAxiosConfig: AxiosRequestConfig
  private readonly options: HttpOptions

  constructor(initAxiosConfig: AxiosRequestConfig, opt?: HttpOptions) {
    this.initAxiosConfig = initAxiosConfig;
    this.instance = axios.create(initAxiosConfig);
    this.options = opt;
  }

  get<T = any>(config: AxiosRequestConfig, opt?: HttpOptions): Promise<T> {
    return this.request({ ...config, method: 'GET' }, opt);
  }

  post<T = any>(config: AxiosRequestConfig, opt?: HttpOptions): Promise<T> {
    return this.request({ ...config, method: 'POST' }, opt);
  }

  request<T = any>(config: AxiosRequestConfig, opt?: HttpOptions): Promise<T> {
    let conf = {...config};
    let options = {...this.options, ...opt};

    conf = Object.assign(this.initAxiosConfig, conf);

    return new Promise((resolve, reject) => {
      this.instance
        .request<any, AxiosResponse<any>>(conf)
        .then((res: AxiosResponse<any>) => {

          try {
            const ret = transformRequestHook(res, options);
            resolve(ret);
          } catch(err) {
            reject(err);
          }
          resolve(res as unknown as Promise<T>);

        })
        .catch((e: Error | AxiosError) => {
          reject(e);
        })
    })
  }
}

export default HttpAxios;