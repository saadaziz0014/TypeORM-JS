const typeorm = require("typeorm");

const MyDataSource = new typeorm.DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "password",
  database: "typeorm",
  logging: true,
  synchronize: true,
  entities: [
    require("./entities/user.entity"),
    require("./entities/profile.entity"),
  ],
});

module.exports = MyDataSource;
