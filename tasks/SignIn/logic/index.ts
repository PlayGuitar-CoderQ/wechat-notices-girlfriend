import { getCheckSignInStatus, getJueJingRecommend, postJueJingSignIn } from '@api/signInApi';
import { ResponseMiddle } from '@middle/response';
import { getIsHasErrInfo } from './dataConsumption';

const juejinSignIn = async () => {
  const responseMiddle = new ResponseMiddle({
    taskName: "掘金签到任务"
  })

  try {
    const signInStatuRes = await getCheckSignInStatus();
    if (signInStatuRes.data) return;

    const recommendRes = await getJueJingRecommend();
    const isGetRecommend = recommendRes.err_msg === "success";

    if (!isGetRecommend) return;
    const res = await postJueJingSignIn();

    console.log(`成功执行！时间：${new Date()}`, res);
    responseMiddle.sendResEmail(getIsHasErrInfo(res));
  } catch(err) {
    responseMiddle.sendResEmail();
    console.log("err", err);
  }
}

export {
  juejinSignIn
}


