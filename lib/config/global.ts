interface GlobalEnv {
  WECHAT_APPID: string;
  WECHAT_SECRET: string;
  WECHAT_TEMPLATE_ID: string;
  WECHAT_TOUSER: string;
  SIGNIN_COOKIE: string;
  TIANAPI_KEY: string;
}

const LOCAL_CONFIG_ENV = {
  dev: {
    wechat_timed: '10 * * * * *',
    signIn_timed: '10 * * * * *'
  },
  prod: {
    wechat_timed: '0 0 20 * * *',
    signIn_timed: '0 0 11 * * *'
  }
}

const env = process.env.NODE_ENV as 'dev' | 'prod';
const LOCAL_CONFIG = LOCAL_CONFIG_ENV[env]

const {
  WECHAT_APPID,
  WECHAT_SECRET,
  WECHAT_TEMPLATE_ID,
  WECHAT_TOUSER,
  SIGNIN_COOKIE,
  TIANAPI_KEY
} = process.env as unknown as GlobalEnv;

export {
  WECHAT_APPID,
  WECHAT_TEMPLATE_ID,
  WECHAT_SECRET,
  WECHAT_TOUSER,
  SIGNIN_COOKIE,
  LOCAL_CONFIG,
  TIANAPI_KEY
}
