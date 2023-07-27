const typeorm = require("typeorm");

const User = new typeorm.EntitySchema({
  name: "User",
  columns: {
    id: {
      type: "int",
      primary: true,
      generated: true,
    },
    email: {
      type: "varchar",
      unique: true,
    },
    married: {
      type: "boolean",
      default: false,
    },
  },
});

module.exports = User;
