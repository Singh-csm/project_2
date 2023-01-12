const express = require("express");
const route = require("./routes/route");
const multer = require("multer");

const { default: mongoose } = require("mongoose");
const app = express();
 
app.use(express.json());
app.use(multer().any());

mongoose.set("strictQuery", false);
mongoose
  .connect(
    "mongodb+srv://nishant55:1234@nishant99.et97kst.mongodb.net/group24Database",
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB is Connected"))
  .catch((err) => console.log(err));


app.use("/", route);


app.listen(3001, function () {
  console.log("Express App of Intern Project is running on port " + 3001);
});
