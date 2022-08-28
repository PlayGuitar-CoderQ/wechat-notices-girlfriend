import type {
  AccessTokenParam,
  AccessTokenRes,
  SendTemplateData,
  SendTemplateParam,
  SendTemplateRes
} from './type';

import { wechatHttp } from '../../http';

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