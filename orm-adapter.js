"use strict";

//import mysql from "mysql-orm";
const mysql = require("./mysql-orm");
const ADAPTERS = ["MYSQL"];


const connect = options => {
	if(!options.adapter)
		throw new Error("Adapter Not mentioned");		
	return mysql.connect(options);		
};

const schema = options => {	
	return mysql.schema(options);
};


const find = options => {
	return mysql.find(options)
};

module.exports = {
	connect,
	schema,
	find	
}
	
