const TodoModel = require("../models/todoModel");

// this creates a new todo entry in the database
const readAllTodos = async (req, res) => {
	const findResult = await TodoModel.find();

	return res.json({
		msg: `found todos`,
		data: findResult,
	});
};

module.exports = readAllTodos;
