import axios from 'axios';
import getAccessToken from './accessToken';
import { wechatTemplate } from './wechatTemplate'
import {
  WECHAT_TOUSER,
  WECHAT_TEMPLATE_ID
} from '@config/global';

const sendTemplate = async () => {
  const res = await getAccessToken();

  const data = {
    "touser": WECHAT_TOUSER,
    "template_id": WECHAT_TEMPLATE_ID,
    "url":"http://weixin.qq.com/download",
    "data": wechatTemplate
  };
  const sendRes = await axios({
    url: 'https://api.weixin.qq.com/cgi-bin/message/template/send',
    data,
    method: "post",
    headers: {
      'Content-Type': 'application/json'
   },
   params: {
      access_token: res.access_token
   }
  
  });
  console.log("sendRes", sendRes);
}

export {
  sendTemplate
}