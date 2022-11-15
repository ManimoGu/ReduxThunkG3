const express = require("express");
const cors = require("cors");
const mongoose  = require("mongoose");
const  UserRouter = require("./Routes/user")
const TaskRouter = require("./Routes/Taks")

const app = express();

app.use(express.json())
app.use(cors());



mongoose.connect("mongodb://localhost/Todos")

app.listen(9000, () => console.log("server is running on port 9000..."));


app.use("auth", UserRouter)

app.use("/Tasks",TaskRouter)