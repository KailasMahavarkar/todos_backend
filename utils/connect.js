// connection to database
const mongoose = require("mongoose");
let conn;

const connect = async () => {
	// connection url
	const dbUrl = process.env.DB_URL;

	// set connection options
	const mongoOptions = {
		serverSelectionTimeoutMS: 5000,
		retryWrites: true,
	};

	// create connection if not already created
	// this save connection to local conn variable
	// upon subsequent calls, it will return the same connection
	try {
		conn = mongoose.connect(dbUrl, mongoOptions);
		console.log({
			message: `Connected to MongoDB`,
			url: dbUrl,
		});
	} catch (error) {
		console.log({
			message: `Error connecting to MongoDB`,
			error: error.message,
		});
	}
	return conn;
};

module.exports = connect;
