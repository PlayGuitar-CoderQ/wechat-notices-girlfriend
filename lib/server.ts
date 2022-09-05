import type { TaskBase } from './core/base';

import { Wechat, SignIn } from './core';
import { LOCAL_CONFIG } from '@config/global';

abstract class ServerBase {
  taskInstanceList: TaskBase[] = [];
  abstract install(tasks: TaskBase[]): void;

  run() {
    this.taskInstanceList.forEach(task => task.scheduleTask());
  }
}

class Server extends ServerBase {
  constructor(...tasks: TaskBase[]) {
    super();
    this.install(tasks)
  }

  install(tasks: TaskBase[]): void {
    this.taskInstanceList = [...this.taskInstanceList, ...tasks];
  }
}

const server = new Server(
  new Wechat(LOCAL_CONFIG.wechat_timed),
  new SignIn(LOCAL_CONFIG.signIn_timed)
);

export default server;