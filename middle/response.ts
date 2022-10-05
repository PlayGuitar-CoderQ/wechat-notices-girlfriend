import type { SendTemplateRes } from '@api/wechatApi/type';
import { sendEmail } from '@utils/sendEmail';

export interface SendEmailParam {
  isErr: boolean;
  msg: string;
}

interface InitDataType {
  taskName: string;
}

class ResponseMiddle {
  private taskName: string;
  private isErr: boolean = true;
  private msg: string = "暂无 msg 返回"

  constructor(initData: InitDataType) {
      const { taskName } = initData;

      this.taskName = taskName;
  }

  sendResEmail(sendEmailParam?: SendEmailParam) {
    if (sendEmailParam) {
      this.isErr = sendEmailParam.isErr;
      this.msg = sendEmailParam.msg;
    }

    sendEmail({
      subject: this.taskName,
      text: this.msg
    }, this.isErr);
  }
}

export {
  ResponseMiddle
}