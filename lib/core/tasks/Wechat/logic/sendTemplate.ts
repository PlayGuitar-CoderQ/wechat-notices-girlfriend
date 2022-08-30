import { wechatTemplate } from './wechatTemplate'
import { getAccessToken, postSendTemplate } from '@api/wechat';
import {
  WECHAT_TOUSER,
  WECHAT_TEMPLATE_ID,
  WECHAT_APPID,
  WECHAT_SECRET
} from '@config/global';

const sendTemplate = async () => {
 try {
  const accessTokenRes = await getAccessToken({
    grant_type: 'client_credential',
    appid: WECHAT_APPID,
    secret: WECHAT_SECRET
  });

  await postSendTemplate({
    touser: WECHAT_TOUSER,
    template_id: WECHAT_TEMPLATE_ID,
    url: 'http://weixin.qq.com/download',
    data: wechatTemplate
  }, {
    access_token: accessTokenRes?.access_token
  })
 } catch(err) {
  console.log(err);
 }
}

export {
  sendTemplate
}