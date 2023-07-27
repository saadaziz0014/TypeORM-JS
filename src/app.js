const express = require("express");
const app = express();
const MyDataSource = require("./db/dbconfig");
const userRouter = require("./routes/user.route");
app.use(express.json());

app.use("/api", userRouter);

MyDataSource.initialize()
  .then(() => {
    app.listen(3001, () => {
      console.log("http://localhost:3001/");
      console.log("POSTGRES connected");
    });
  })
  .catch((err) => {
    console.log("Error Occured ", err);
  });
