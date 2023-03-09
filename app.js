// express boilerplate
const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const connect = require("./utils/connect");
const cors = require("cors");
// const todoRouter = require("./router");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors("*"));

// app.use("/tasks", todoRouter);

app.get("/", (req, res)=>{
    return res.json({
        message: "Welcome to the todo api",
        status: "live ✨"
    })
})

// listen
const port = process.env.PORT || 2000;
app.listen(port, async () => {
	await connect();
	console.log(`Server is running on port ${port}`);
});
