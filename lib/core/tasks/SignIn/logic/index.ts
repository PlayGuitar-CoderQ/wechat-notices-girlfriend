import { getCheckSignInStatus, getJueJingRecommend, postJueJingSignIn } from '@api/SignIn';

const juejinSignIn = async () => {
  try {
    const signInStatuRes = await getCheckSignInStatus();
    if (signInStatuRes.data) return;

    const recommendRes = await getJueJingRecommend();
    const isGetRecommend = recommendRes.err_msg === "success";

    isGetRecommend && postJueJingSignIn();
  } catch(err) {
    console.log("err", err);
  }
}

export {
  juejinSignIn
}


