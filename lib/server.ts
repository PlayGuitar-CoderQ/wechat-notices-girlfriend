import { Wechat } from './core';
import type { TaskBase } from './core/base';

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
  new Wechat('0 0 20 * * *'),
);

export default server;