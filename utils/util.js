const isEmpty = (arg) => {
	try {
		if (arg == null) {
			return true;
		} else if (typeof arg === "undefined") {
			return true;
		} else if (arg.length === 0) {
			return true;
		} else if (typeof arg === "object" && Object.keys(arg).length === 0) {
			return true;
		}
		return false;
	} catch (error) {
		return false;
	}
};

module.exports = {
	isEmpty,
};
