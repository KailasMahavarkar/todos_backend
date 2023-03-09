const TodoModel = require("../models/todoModel");
const { v4: uuidv4 } = require("uuid");

// this creates a new todo entry in the database
const createTodo = async (req, res) => {
	// this is public uuid for a todo list
	const uuid = req.body.uuid;

	const message = req.body.message;
	const completed = req.body.completed;

    const newTaskId = uuidv4();
	const todo = {
		taskId: newTaskId,
		message: message,
		completed: completed,
	};


	// check if public uuid is in database
	try {
		const uuidCheck = await TodoModel.findOne({
			_id: uuid,
		});

		if (uuidCheck) {
			// add a new todo to the existing todo entry
			const updateResult = await TodoModel.updateOne(
				{ _id: uuid },
				{
					$push: {
						todos: [todo],
					},
				}
			);
			if (updateResult) {
				return res.status(200).send({
					msg: "Todo created",
					data: {
						taskId: newTaskId,
					},
				});
			}
		} else {
			// generate a new todo entry in the database
			const newTodo = new TodoModel({
				_id: uuidv4(),
				todos: [todo],
			});

			const saveResult = await newTodo.save();

			if (saveResult) {
				return res.status(200).send({
					msg: "Todo created",
					data: {
						uuid: saveResult._id,
						taskId: saveResult.todos[0]._id,
					},
				});
			}
		}
	} catch (error) {
		return res.status(500).send({ msg: "Todo not created" });
	}
};

module.exports = createTodo;
