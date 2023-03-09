const TodoModel = require("../models/todoModel");

const readTodo = async (req, res) => {
	const uuid = req.params?.uuid;

	if (!uuid) {
		return res.status(400).send({ message: "uuid not provided" });
	}

	try {
		const readResult = await TodoModel.findOne({ _id: uuid });

		if (readResult) {
			return res.status(200).send({
				message: "Todo read",
				data: {
					todos: readResult.todos,
				},
			});
		}

		return res.status(400).send({ message: "could not read todo" });
	} catch (error) {
		console.log("error reading -->", error.message);
		return res
			.status(500)
			.send({ message: "reading todo caused fatal error" });
	}
};

module.exports = readTodo;
