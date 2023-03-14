const express = require("express");
const mongoose = require("mongoose");
const { User } = require("./models");
const { DB_URL } = require("./env");

const app = express();
const port = process.env.APP_PORT || 3000;

app.use(express.json());

app.get("/", async (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${process.env.APP_PORT}`);
});

mongoose
  .connect(DB_URL, { useUnifiedTopology: true })
  .then(() => console.log("Connected"))
  .catch((err) => console.error(err));

// const start = async () => {
//   try {
//     await mongoose.connect(DB_URL, {
//       // useCreateIndex:true,
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       directConnection: true,
//     });
//     const checkUser = await User.find();
//     console.log(checkUser);
//   } catch (err) {
//     console.error(err);
//   }

// };

// start();
