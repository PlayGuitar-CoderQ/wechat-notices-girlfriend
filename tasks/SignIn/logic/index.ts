import { getCheckSignInStatus, getJueJingRecommend, postJueJingSignIn } from '@api/signInApi';

const juejinSignIn = async () => {
  try {
    const signInStatuRes = await getCheckSignInStatus();
    if (signInStatuRes.data) return;

    const recommendRes = await getJueJingRecommend();
    const isGetRecommend = recommendRes.err_msg === "success";

    if (!isGetRecommend) return;
    const res = await postJueJingSignIn();

    console.log(`成功执行！时间：${new Date()}`, res);
  } catch(err) {
    console.log("err", err);
  }
}

export {
  juejinSignIn
}


