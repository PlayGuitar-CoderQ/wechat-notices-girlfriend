import { getCheckSignInStatus, getJueJingRecommend } from '../lib/api/SignIn';

test("测试检查掘金签到接口是否正常", async () => {
  const signInStatuRes = await getCheckSignInStatus();
  let isCorrectKey = signInStatuRes.hasOwnProperty("data");
  expect(isCorrectKey).toBe(true);
})

test("测试掘金请求推荐接口是否正常", async () => {
  const recommendRes = await getJueJingRecommend();
  expect(recommendRes.err_msg).toBe("success");
})