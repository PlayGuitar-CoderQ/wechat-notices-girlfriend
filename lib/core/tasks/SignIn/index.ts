import { TaskBase} from '../../base';
import { juejinSignIn } from './logic';

class SignIn extends TaskBase {
  timed: string;

  constructor(timed: string) {
    super();
    this.timed = timed;
  }

  start(): void {
    juejinSignIn();
  }
}

export default SignIn