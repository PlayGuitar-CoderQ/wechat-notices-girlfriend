
import { TaskBase } from "../base";

class SignIn extends TaskBase {
  timed: string;

  constructor(timed: string) {
    super();
    this.timed = timed;
  }

  start() {
    console.log("我是签到");
  }
}

export default SignIn;