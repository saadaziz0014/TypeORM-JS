const typeorm = require("typeorm");

const Profile = new typeorm.EntitySchema({
  name: "Profile",
  columns: {
    id: {
      type: "int",
      primary: true,
      generated: true,
    },
    picture: {
      type: "varchar",
    },
  },
});

module.exports = Profile;
