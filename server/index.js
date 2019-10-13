const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/authentication", { useNewUrlParser: true });

const app = express();

app.use(cors());
app.use(bodyParser.json());


const users = require("./routes/api");
app.use("/api", users);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port: ${port}`));
