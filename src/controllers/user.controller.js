const MyDataSource = require("../db/dbconfig");
const userRepo = MyDataSource.getRepository("User");

const addUser = async (req, res) => {
  const { email, married, picture } = req.body;
  const data = await userRepo.findOne({ where: { email } });
  if (data) {
    res.status(403).json({ error: "Already Present" });
  } else {
    if (email && married) {
      const myObj = { email, married };
      const dataInserted = await userRepo.save(myObj);
      res.status(201).json(dataInserted);
    } else {
      res.status(401).json({ error: "Fill All Field" });
    }
  }
};

const allUser = async (req, res) => {
  const data = await userRepo.find();
  res.status(201).json(data);
};

const delUser = async (req, res) => {
  const id = req.params.id;
  await userRepo.delete(id);
  res.status(201).send("User Delete");
};

module.exports = [addUser, allUser, delUser];
