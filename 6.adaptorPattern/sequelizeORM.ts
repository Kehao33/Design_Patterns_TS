const { Sequelize, Model, DataType } = require("sequelize");
// https://www.sequelize.com.cn/core-concepts/getting-started
// sequelize 也是一个适配器，针对同一写法适配不同的数据库
const sequelize = new Sequelize("sqlite::memory:");

// 定义表的模型，他是一个关系型数据库的 ORM 映射工具

class User extends Model {}

User.init(
  {
    username: DataType.STRING,
  },
  { sequelize, modelName: "user" }
);

sequelize
  .sync()
  .then(() =>
    User.create({
      username: "zhufeng",
    })
  )
  .then((result) => {
    console.log(result.toJSON());
  });
