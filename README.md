# 项目架构

wechat-notices-girlfriend
├─ lib
│  ├─ api 请求接口
│  │  ├─ SignIn
│  │  └─ wechat
│  ├─ config 全局配置
│  ├─ core 任务核心
│  │  ├─ tasks 任务
│  │  │  ├─ SignIn
│  │  │  └─ Wechat
│  │  │     ├─ logic
│  │  │     └─ index.ts
│  │  ├─ base.ts
│  │  └─ index.ts
│  ├─ http 请求封装
│  │  ├─ axios.ts
│  │  └─ index.ts
│  ├─ index.ts
│  ├─ is.ts 判断工具
│  ├─ scheduleTask.ts 定时任务核心逻辑
│  └─ server.ts 注册服务入口
├─ test 测试用例
│  ├─ signIn.test.ts
│  └─ wechat.test.ts
├─ jest.config.ts jest 配置
