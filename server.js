const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const morgan = require("morgan");

app.use(morgan("dev"));
app.use(express.json());


mongoose.connect(process.env.DB);
mongoose.connection.on("connected", () =>
{
    console.log("Connected to DB");
})


const trackRoutes = require("./routes/trackRoutes");
app.use("/tracks", trackRoutes);


app.listen(process.env.PORT, () =>
{
    console.log("Listening to Port");
})