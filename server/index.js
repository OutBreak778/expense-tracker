const express = require("express");
const cors = require("cors");
const { readdirSync } = require("fs");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const PORT = process.env.PORT || 9000;

// middleware
app.use(express.json());
app.use(cors());

// routes
readdirSync("./routes").map((route) =>
  app.use("/api/v1", require("./routes/" + route))
);

app.get("/", (req, res) => {
  res.send("Nikhil Mishra");
});

const db = process.env.MONGO_URL;
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    app.listen(PORT, () => {
      console.log(`Server is running at ${PORT}`);
    })
  )
  .catch((error) => console.log(`${error} did not connect`));
