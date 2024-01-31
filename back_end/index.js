const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const router  = require("./routes");
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use(router)

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`server running in localhost:${PORT}`);
  });
});
