interface WechatTemplate {
  value: string,
  color: string
}

const wechatTemplate: Record<string, WechatTemplate> = {
  test: {
    value: '测试',
    color: "#173177"
  },
  user: {
    value: 'coderQ',
    color: "#191"
  }
}

export {
  wechatTemplate
}