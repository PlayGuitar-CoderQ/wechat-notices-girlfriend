import type { WechatTemplate } from '@api/wechatApi/type';
import type { SendTemplateRes } from '@api/wechatApi/type';
import type { SendEmailParam } from '@middle/response';

const wechatTemplate: Record<string, WechatTemplate> = {
  love: {
    value: '今天没有土味情话了 哈哈！',
    color: "#FFC0CB"
  }
}

const getIsHasErrInfo = (res: SendTemplateRes): SendEmailParam => {
  const { errcode, errmsg } = res;

  return {
    isErr: errcode !== 0,
    msg: errmsg
  }
}

export {
  wechatTemplate,
  getIsHasErrInfo
}