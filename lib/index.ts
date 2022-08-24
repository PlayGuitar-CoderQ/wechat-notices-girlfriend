import Koa from 'koa';
import schedule from 'node-schedule';
import webChat from './webchat';
const app = new Koa();

function scheduleLog() {
  schedule.scheduleJob('30 * * * * *', () => {
    webChat.Exchange.send();
  })
}


app.use(async (ctx, next) => {
  scheduleLog();
  ctx.body = "测试中";
  next();
});

app.listen(3020);