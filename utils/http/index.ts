import type { AxiosResponse } from 'axios';
import HttpAxios from './axios';

export interface HttpOptions {
  isTransformResponse?: boolean
}

export function transformRequestHook(res: AxiosResponse<any>, opt?: HttpOptions) {
  if (opt?.isTransformResponse) {
    return res.data;
  }

  return res;
}

function createWechatAxios() {
  return new HttpAxios({
    baseURL: 'https://api.weixin.qq.com'
  },{
    isTransformResponse: true
  })
}

function createSignInAxios() {
  return new HttpAxios({
    baseURL: "https://api.juejin.cn"
  }, {
    isTransformResponse: true
  })
}

const wechatHttp = createWechatAxios();
const signInHttp = createSignInAxios();

export {
  wechatHttp,
  signInHttp
}