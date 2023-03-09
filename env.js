const dotenv = require("dotenv");
dotenv.config();

const env = {
	DB_URL: process.env.DB_URL,
};

module.exports = env;
