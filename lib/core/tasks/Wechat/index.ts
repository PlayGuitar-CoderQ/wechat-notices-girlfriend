import { TaskBase } from "../../base";
import { sendTemplate } from './logic';

class WebChat extends TaskBase {
  timed: string;

  constructor(timed: string) {
    super();
    this.timed = timed;
  }

  start() {
    console.log("我是微信");
    sendTemplate();
  }
}

export default WebChat;