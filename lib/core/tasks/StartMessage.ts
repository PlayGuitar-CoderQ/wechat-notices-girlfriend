import { TaskBase } from "../base";

class StartMessage extends TaskBase {
  timed: string;

  constructor(timed: string) {
    super();
    this.timed = timed;
  }

  start() {
    console.log("我是点赞消息");
  }
}

export default StartMessage;