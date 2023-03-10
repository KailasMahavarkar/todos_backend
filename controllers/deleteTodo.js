const TodoModel = require("../models/todoModel");

const deleteTodo = async (req, res) => {
	// when all todos are deleted, delete the top level todo entry
	// find todo by uuid

	// delete todo by uuid
	const uuid = req.params.uuid;
	const taskId = req.params.taskId;

	// find todo by uuid
	const findRes = await TodoModel.findOne({
		_id: uuid,
	});

	try {
		if (findRes) {
			// delete subtodo under uuid
			const deleteRes = await TodoModel.updateOne(
				{ _id: uuid },
				{
					$pull: {
						todos: {
							taskId: taskId,
						},
					},
				}
			);

			if (deleteRes) {
				return res.status(200).send({
					message: "Todo deleted",
				});
			}
		}

        return res.status(400).send({ msg: "could not delete todo" });
	} catch (error) {
		console.log("error deleting -->", error.message);
        return res.status(500).send({ message: "todo deleted caused fatal error" });
	}

};

module.exports = deleteTodo;
