import axios from 'axios';

const send = () => {
  axios.post("https://api.weixin.qq.com/cgi-bin/message/template/send?access_token=123").then(res => {
  console.log("res", res.data);
  }).catch(err => {
    console.log("err", err);
  })
}

interface ExchangeInstance {
  send: () => void;
}

abstract class WebChatBase {
  Exchange: ExchangeInstance
}

class WebChat implements WebChatBase {
  Exchange: ExchangeInstance = {
    send
  };
}

export default new WebChat();