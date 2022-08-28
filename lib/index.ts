require('module-alias/register'); // 解决构建后的包找不到配置别名
import server from './server';

server.run();

