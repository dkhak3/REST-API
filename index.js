// import MongoStore from "connect-mongo";
const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");

const port = process.env.PORT || 8888; // port
const hostname = process.env.HOST_NAME;

app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());
app.use(morgan("common"));

dotenv.config();
// CONNECT DATABASE
mongoose.connect(process.env.MONGODB_URL, () =>
  console.log("Connected to MongoDB")
);

app.get("/api", (req, res) => {
  res.status(200).json("Hello");
});

app.listen(port, hostname, () => {
  console.log("Server is running...");
});
