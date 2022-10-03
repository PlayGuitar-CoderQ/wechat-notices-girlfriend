# 💡 开发本项目的目的

- 起源一个技术群友的一个短视频，内容是一个利用微信公众号定时发送消息给女朋友的一个 python 脚本。然后我就建立了当前的项目，但是在准备开始编写的时候， 我觉得其实不一定只能做到定时微信公众号，我想设计成任何一个定时场景都能通过该脚本去实现。

# 📡 运行项目

1. 可以帮忙点一个 Start 之后克隆一下该项目到本地。
```shell
git clone https://github.com/PlayGuitar-CoderQ/wechat-notices-girlfriend.git
```
2. 推荐使用 pnpm 包管理工具管理整个项目的依赖
```shell
pnpm install
```
3. 启动项目，会在本地执行一个 node 进程，跑起一个 每分钟第10s的执行任务。
```shell
pnpm dev
```

# 🔧 如何改造成自己需要的任务

- 只需要清除 ./tasks 文件夹里面的任务模块，然后模仿着去实现自己想要被定时执行的逻辑即可，他们都会继承一个有定时能力的抽象类。

# 🧱 项目架构图

```md
wechat-notices-girlfriend
├─ README.md  # 项目描述文件
├─ api # 定时任务模块需要使用的请求接口
│  ├─ signInApi
│  │  ├─ index.ts
│  │  └─ type.ts
│  └─ wechatApi
│     ├─ index.ts
│     └─ type.ts
├─ config # 项目配置文件
│  └─ global.ts
├─ index.ts # 入口文件
├─ jest.config.ts # jest 配置文件
├─ package.json
├─ pnpm-lock.yaml
├─ tasks # 需要被定时执行的任务模块
│  ├─ SignIn
│  │  ├─ index.ts
│  │  └─ logic
│  │     └─ index.ts
│  ├─ Wechat
│  │  ├─ index.ts
│  │  └─ logic
│  │     ├─ index.ts
│  │     ├─ sendTemplate.ts
│  │     └─ wechatTemplate.ts
│  ├─ base.ts # 具有定时任务能力的抽象类
│  └─ index.ts
├─ test # 测试用例
│  ├─ signIn.test.ts
│  └─ wechat.test.ts
├─ tsconfig.json
└─ utils # 项目使用到的工具方法封装
   ├─ http
   │  ├─ axios.ts
   │  └─ index.ts
   ├─ is.ts
   ├─ scheduleTask.ts
   └─ server.ts

```