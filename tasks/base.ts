import { scheduleTask as onScheduleTask } from '../utils/scheduleTask';

abstract class TaskBase {
  abstract timed: string;

  abstract start(): void;

  scheduleTask() {
    onScheduleTask(this.start, this.timed);
  }
}

export {
  TaskBase
}