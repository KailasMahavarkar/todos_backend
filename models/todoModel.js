const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { v4: uuidv4 } = require("uuid");

const todoSchema = new Schema({
	// this is todo public uuid
	_id: {
		type: String,
		required: true,
		default: uuidv4(),
	},
	todos: [
		{
			taskId: {
				type: String,
				required: false,
                default: uuidv4(),
			},
			message: {
				type: String,
				required: false,
			},
			completed: {
				type: Boolean,
				required: false,
			},
		},
	],
});
// 64099a0bf23766c0e9992e37
const TodoModel = mongoose.model("todo", todoSchema);
module.exports = TodoModel;
