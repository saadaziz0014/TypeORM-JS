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
  relations: {
    profile: {
      target: "Profile",
      type: "one-to-one",
      cascade: true,
      joinColumn: { name: "profile_id", referencedColumnName: "id" },
      onDelete: "CASCADE",
      eager: true,
    },
  },
});

module.exports = User;
