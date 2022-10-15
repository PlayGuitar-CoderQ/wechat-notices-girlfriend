import { wechatTemplate, getIsHasErrInfo } from './dataConsumption'
import { ResponseMiddle } from '@middle/response';
import { getAccessToken, postSendTemplate, getLoveTalk } from '@api/wechatApi';
import {
  WECHAT_TOUSER,
  WECHAT_TEMPLATE_ID,
  WECHAT_APPID,
  WECHAT_SECRET
} from '@config/global';

const sendTemplate = async () => {
  const responseMiddle = new ResponseMiddle({
    taskName: "微信公众号消息发送"
  });

 try {

  const loveTalkRes = await getLoveTalk();
  const loveTalkContent = loveTalkRes.newslist[0].content;
  loveTalkContent && (wechatTemplate.love.value = loveTalkContent);

  const accessTokenRes = await getAccessToken({
    grant_type: 'client_credential',
    appid: WECHAT_APPID,
    secret: WECHAT_SECRET
  });

  const sendTemplateRes = await postSendTemplate({
    touser: WECHAT_TOUSER,
    template_id: WECHAT_TEMPLATE_ID,
    url: 'http://weixin.qq.com/download',
    data: wechatTemplate
  }, {
    access_token: accessTokenRes?.access_token
  })

  sendTemplateRes.errmsg = loveTalkContent ? loveTalkContent : sendTemplateRes.errmsg;

  responseMiddle.sendResEmail(getIsHasErrInfo(sendTemplateRes));
 } catch(err) {
  responseMiddle.sendResEmail();
 }
}

export {
  sendTemplate
}