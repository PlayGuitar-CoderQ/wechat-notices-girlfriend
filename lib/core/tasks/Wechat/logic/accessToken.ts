import axios from 'axios';
import {
  WECHAT_APPID,
  WECHAT_SECRET
} from '@config/global';

const getAccessToken = async () => {
  try {
    const res = await axios.get("https://api.weixin.qq.com/cgi-bin/token", {
      params: {
        grant_type: "client_credential",
        appid: WECHAT_APPID,
        secret: WECHAT_SECRET
      }
    })

    return res.data
  } catch (err) {
    throw new Error(err);
  }
}

export default getAccessToken;