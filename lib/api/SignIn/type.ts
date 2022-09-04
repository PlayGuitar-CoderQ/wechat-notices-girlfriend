export interface JueJingResult<T> {
  err_no: number;
  err_msg: string;
  data: T;
}

export type CheckSignInRes = JueJingResult<boolean>;

export type SignInRes = JueJingResult<{
  incr_point: number;
  sum_point: number;
}>

export interface RecommendAllFeedRes extends JueJingResult<any> {
  cursor: string;
  count: number;
  has_more: boolean;
}