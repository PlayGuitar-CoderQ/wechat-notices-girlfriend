import { TaskBase } from "../base";

class WebChat extends TaskBase {
  timed: string;

  constructor(timed: string) {
    super();
    this.timed = timed;
  }

  start() {
    console.log("我是微信");
  }
}

export default WebChat;