import type { CheckSignInRes, RecommendAllFeedRes } from './type';

import { signInHttp } from '../../http';
import { SIGNIN_COOKIE } from '@config/global';

enum Api {
  SignInStatus = '/growth_api/v1/get_today_status',
  SignIn = '/growth_api/v1/check_in',
  Recommend = '/recommend_api/v1/article/recommend_all_feed'
}

export function getJueJingRecommend() {
  return signInHttp.post<RecommendAllFeedRes>({
    headers: {
      Cookie: SIGNIN_COOKIE
    },
    url: Api.Recommend,
    params: {
      aid: 2608,
      uuid: 7047763704691426850,
      spider: 0
    },
    data: JSON.stringify({
      "client_type": 2608,
      "cursor": "0",
      "id_type": 2,
      "limit": 20,
      "sort_type": 200
    })
  })
}

export function getCheckSignInStatus() {
  return signInHttp.get<CheckSignInRes>({
    headers: {
      "Cookie": SIGNIN_COOKIE
    },
    url: Api.SignInStatus
  })
}

export function postJueJingSignIn() {
  return signInHttp.post<RecommendAllFeedRes>({
    headers: {
      "Cookie": SIGNIN_COOKIE
    },
    url: Api.SignIn
  })
}