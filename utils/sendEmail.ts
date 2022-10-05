import nodemailer from 'nodemailer';
import { SMTP_EMAIL, SMTP_AUTH_KEY, FROM_EMAIL, TO_EMAIL } from '@config/global';

type SendDataType = Partial<typeof sendDefaultData>;

const sendDefaultData = {
  subject: '默认无标题',
  from: FROM_EMAIL,
  to: TO_EMAIL,
  html: '',
  text: '无内容'
}

const transporter = nodemailer.createTransport({
  host: "smtp.qq.com",
  port: 465,
  secure: true,
  auth: {
    user: SMTP_EMAIL, // SMTP 邮箱名称
    pass: SMTP_AUTH_KEY, // SMTP 授权码
  },
});

const subjectTransform = (subject: SendDataType['subject'], isErr: boolean) => {
  return isErr ? `【⛔️ 执行失败】执行逻辑: ${subject}` : `【✅ 执行成功】执行逻辑: ${subject}`;
}

const sendEmail = (data: SendDataType, isErr: boolean) => {
  const subject = subjectTransform(data.subject, isErr);

  const newSendData = { ...sendDefaultData, ...data, subject };
  transporter.sendMail(newSendData);
}

export default transporter;

export {
  sendEmail
}