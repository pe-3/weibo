## 启动前端

```bash
cd weibo-vue
pnpm i 
pnpm dev
```

## 启动后台

```bash
cd weibo-node
npm i
npm start
```

## 后台配置数据库

```js
// mysql/pool.js
const pool = require('mysql').createPool({
  host: 'localhost',
  user: 'root', // 数据库用户名
  password: 'root', // 数据库用户密码
  database: 'weibo', // weibo 数据库
  connectionLimit: 10
});
```

本地数据库创建 weibo 数据库

1. 登陆数据库，username 是你的数据库用户
```bash
mysql -u username -p

// 输入密码
```
2. 创建 weibo 数据库，进入数据库
```bash
create datebase weibo
use weibo
```

1. 创建 users 表
```bash
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'Primary Key',
  `create_time` datetime DEFAULT NULL COMMENT 'Create Time',
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `nickname` varchar(255) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `intro` varchar(255) DEFAULT NULL,
  `site` varchar(255) DEFAULT NULL,
  `backImage` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `fans` int(1) unsigned zerofill DEFAULT NULL,
  `follows` int(1) unsigned zerofill DEFAULT NULL,
  `is_del` int(1) unsigned zerofill DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `username_UNIQUE` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=56 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
```

4. 创建 weibo 表
```bash
CREATE TABLE `weibo` (
  `id` int NOT NULL AUTO_INCREMENT,
  `author_id` int NOT NULL,
  `publish_time` varchar(100) NOT NULL,
  `article` varchar(1000) NOT NULL,
  `imgs` varchar(1000) DEFAULT NULL,
  `device` varchar(50) NOT NULL,
  `share_num` int(10) unsigned zerofill DEFAULT NULL,
  `like_num` int(10) unsigned zerofill DEFAULT NULL,
  `star_num` int(10) unsigned zerofill DEFAULT NULL,
  `is_del` int(10) unsigned zerofill DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
```
