import { IS_START_INTERVAL_DATE_LOG } from '@config/global';
const intervalSecond = 1 * 1000;

const dateLog = () => {
  const DateMain = new Date();
  const hours = DateMain.getHours();
  const min = DateMain.getMinutes();
  const second = DateMain.getSeconds();

  console.log(`当前时间: ${hours}:${min}:${second}`);
  setInterval
}

const intervalLog = () => {
  if (!IS_START_INTERVAL_DATE_LOG) return;

  setInterval(() => {
    dateLog();
  }, intervalSecond)
}

export {
  dateLog,
  intervalLog
}