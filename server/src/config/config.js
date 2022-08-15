/**
 * 默认配置
 * @author yupi
 */
module.exports = {
  redisConfig: {
    host: "localhost",
    port: "6379",
    password: "",
    db: 2,
  },
  // MySQL 配置
  dbConfig: {
    database: "myindex",
    username: "root",
    password: "114514",
    host: "localhost",
    port: 3306,
  },
  // 百度翻译配置，自行申请免费版即可（https://fanyi-api.baidu.com/）
  baiduFanYiConfig: {
    appid: "8888",
    key: "",
  },
};
