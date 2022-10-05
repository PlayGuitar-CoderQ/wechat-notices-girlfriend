import type { SendEmailParam } from '@middle/response';
import { JueJingResult } from '@api/signInApi/type';

const getIsHasErrInfo = (res: JueJingResult<any>): SendEmailParam => {
  const { err_no, err_msg } = res;

  return {
    isErr: err_no !== 0,
    msg: err_msg
  }
}

export {
  getIsHasErrInfo
}