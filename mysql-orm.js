"use strict"

const db = require("node-mysql");
const DB = db.DB;
const BaseRow = db.Row;
const BaseTable = db.Table;


const connect = options => {
	return new DB({
		host: options.host,
		user: options.user,
		password: options.password,
		database: options.database
	})	
};


/*export default {
	connect
};*/


module.exports = {
	connect
}
	