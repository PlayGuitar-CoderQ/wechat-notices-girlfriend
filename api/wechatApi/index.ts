import type {
  AccessTokenParam,
  AccessTokenRes,
  SendTemplateData,
  SendTemplateParam,
  SendTemplateRes,
  LoveTalkRes
} from './type';

import { wechatHttp } from '../../utils/http/index';
import fetch from 'node-fetch';
import { TIANAPI_KEY } from '@config/global';

enum Api {
  Token = '/cgi-bin/token',
  Send = '/cgi-bin/message/template/send'
}

export function getAccessToken(params: AccessTokenParam) {
  return wechatHttp.get<AccessTokenRes>({
    url: Api.Token,
    params
  })
}

export function postSendTemplate(data: SendTemplateData, params: SendTemplateParam) {
  return wechatHttp.post<SendTemplateRes>({
    headers: {
      "Content-Type": "application/json"
    },
    url: Api.Send,
    data,
    params
  })
}

export const getLoveTalk = async (): Promise<LoveTalkRes> => {
  try {
    const loveTalkRes = await fetch(`http://api.tianapi.com/saylove/index?key=${TIANAPI_KEY}`, {
      method: 'GET',
    });
    return loveTalkRes.json() as unknown as Promise<LoveTalkRes>;
  } catch (err) {
    console.log("土味情话请求失败", err);
  }
}

