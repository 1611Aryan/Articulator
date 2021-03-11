const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
if (process.env.NODE_ENV !== "production") require("dotenv").config();

const app = express();

const corsOptions = {
  exposedHeaders: "authToken",
};

app.use(cors(corsOptions));
app.use(express.json());

const PORT = process.env.PORT || 5000;
const URI = process.env.MONGO_URI;

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once("open", () => console.log("Database is Connected"));

const authenticationRouter = require("./Routes/authentication.route");
app.use("/user", authenticationRouter);

app.listen(PORT, () => console.log(`Server running on Port ${PORT}`));
