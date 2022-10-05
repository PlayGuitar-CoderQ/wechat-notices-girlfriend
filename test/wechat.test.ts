import type { AccessTokenRes } from '../api/wechatApi/type';

import { scheduleTask } from '../utils/scheduleTask'
import { getAccessToken, postSendTemplate } from '../api/wechatApi';
import { wechatTemplate } from '../tasks/Wechat/logic/dataConsumption';
import {
  WECHAT_APPID,
  WECHAT_SECRET,
  WECHAT_TOUSER,
  WECHAT_TEMPLATE_ID,
} from '../config/global';

const TEST_MAX_TIME = 8 * 10000; // 测试最大执行时间

test("测试定时任务是否被正常执行", async () => {
  const MOCK_TIME = 7.5 * 10000; // 模拟执行任务的最高花费时间
  let mockTaskFn = jest.fn();
  // 先同步执行
  scheduleTask(mockTaskFn, "10 * * * * *");
  // 异步经过70s后预期情况肯定有一次第10s的调用所以，如果期间还没有被调用过 mockTaskFn 证明当前定时任务调用失败，反之肯定是成功的
  const mockSchedule = () => {
    return new Promise((resolve) => {
      const timer = setTimeout(() => {
        resolve("执行");
        clearTimeout(timer);
      }, MOCK_TIME)
    })
  }
  const res = await mockSchedule();

  expect(res).toBe("执行");
  expect(mockTaskFn).toBeCalled();
}, TEST_MAX_TIME);

test("测试获取 token 是否成功并且根据当前token发送消息体", async () => {
  const isCheckHasType = (targetObj: AccessTokenRes) => {
    if (targetObj?.access_token) {
      return true;
    }
    return false;
  }

  const accessTokenRes = await getAccessToken({
    grant_type: 'client_credential',
    appid: WECHAT_APPID,
    secret: WECHAT_SECRET
  });

  const sendTemplateRes = await postSendTemplate({
    touser: WECHAT_TOUSER,
    template_id: WECHAT_TEMPLATE_ID,
    url: 'http://weixin.qq.com/download',
    data: wechatTemplate
  }, {
    access_token: accessTokenRes?.access_token
  })

  expect(isCheckHasType(accessTokenRes)).toBe(true);
  expect(sendTemplateRes.errcode).toBe(0);
})