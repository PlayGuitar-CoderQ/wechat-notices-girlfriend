export interface AccessTokenParam {
  grant_type: 'client_credential';
  appid: string;
  secret: string;
}

export interface AccessTokenRes {
  access_token: string;
  expires_in: number
}

export interface WechatTemplate {
  value: string,
  color: string
}

export interface SendTemplateData {
  touser: string,
  template_id: string,
  url: 'http://weixin.qq.com/download',
  data: Record<string, WechatTemplate>
}

export interface SendTemplateParam {
  access_token: string;
}

export interface SendTemplateRes {
  errcode: number;
  errmsg: string;
  msgid: number;
}