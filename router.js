const express = require("express");
const router = express.Router();

// import controllers
const readTodo = require("./controllers/readTodo");
const createTodo = require("./controllers/createTodo");
const deleteTodo = require("./controllers/deleteTodo");
const updateTodo = require("./controllers/updateTodo");

// read single todo by uuid
router.get("/:uuid", readTodo);

// create single todo by uuid
router.post("/", createTodo);

// // update single todo by uuid
router.patch("/:uuid", updateTodo);

// // delete single todo by uuid
router.delete("/:uuid/:taskId", deleteTodo);

module.exports = router;
