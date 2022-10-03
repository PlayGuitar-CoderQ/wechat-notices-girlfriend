import nodeSchedule from 'node-schedule';
import { isFunction } from './is';

export function scheduleTask(taskFn: Function, timed: string) {
  if (!isFunction(taskFn)) return;

  nodeSchedule.scheduleJob(timed, () => {
    taskFn();
  });
}
