"use strict"

const db = require("node-mysql");
const DB = db.DB;
const BaseRow = db.Row;
const BaseTable = db.Table;

const SCHEMA_QUERY = "desc ?";
const SELECT_QUERY = "SELECT * FROM ?? WHERE ?? = ?";

var connection, instance;

const connect = options => {
	instance = new DB({
		host: options.host,
		user: options.user,
		password: options.password,
		database: options.database
	});
	return new Promise((resolve, reject) => {
		instance.connect(function(conn){	
			connection = conn;
			resolve();
		});
	});
};

const schema = (tableName) => {
	return new Promise((resolve, reject) => {
		var table = instance._schema[tableName];
		if(!table)
			reject("Table Not Found");
		else
			resolve(table);
	});
};

const parse = results => {
	if(results instanceof Array)
		return parseArray(results);
	else
		return parseObject(results);
};

const parseObject = result => Object.assign({}, result);

const parseArray = results => {	
	return results.map(result => Object.assign({}, result));
}

const find = (obj) => {	
	return new Promise((resolve,reject) => {
		connection.query("Select * from parichay where id = 101000", function(err,results){
			if(err)
				reject(err);
			else
				resolve(parse(results));
		})
	});
}

/*export default {
	connect
};*/


module.exports = {
	connect,
	schema,
	find
}
	