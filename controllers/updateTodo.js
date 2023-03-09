const TodoModel = require("../models/todoModel");

const updateTodo = async (req, res) => {
	const uuid = req.params.uuid;

	const taskId = req.body.taskId;
	const completed = req.body.completed;

	// find all todos by uuid -> returns single todo with todos array
	// find todo by taskId -> returns single todo
	// update todo by taskId -> returns single todo

	// find todo by uuid
	try {
		const findRes = await TodoModel.findOne({
			_id: uuid,
		});

		if (findRes) {
			// update subtodo under uuid
			const updateRes = await TodoModel.updateOne(
				{ _id: uuid },
				{
					$set: {
						"todos.$[elem].completed": completed,
					},
				},
				{
					arrayFilters: [
						{
							"elem.taskId": taskId,
						},
					],
				}
			);

			if (updateRes) {
				return res.status(200).send({
					message: "Todo updated",
				});
			}
		}
	} catch (error) {
		console.log("error updating -->", error.message);
	}

	return res.status(500).send({ message: "updating todo caused fatal error" });
};

module.exports = updateTodo;
