const { Sequelize, Model, DataType } = require("sequelize");
// https://www.sequelize.com.cn/core-concepts/getting-started
// sequelize 也是一个适配器，针对同一写法适配不同的数据库

// 定义表的模型，他是一个关系型数据库的 ORM 映射工具

// 方法 3: 分别传递参数 (其它数据库)
const sequelize = new Sequelize("database", "username", "password", {
  host: "localhost",
  dialect: "mysql" /* 选择 'mysql' | 'mariadb' | 'postgres' | 'mssql' 其一 */,
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();
