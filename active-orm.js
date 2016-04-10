"use strict";

//import adapter from "adapter";

const adapter = require("./adapter");
const mysql = require("./mysql-orm");

console.log("Adapter" + JSON.stringify(adapter));

const establishConnection = (options) => {
	let adapter = options.adapter || "mysql",
	user = options.user || "root",
	password = options.password || "",
	host = options.host || "localhost",
	database = options.database;	

	if(!database)
		throw new Error("Database not provided");

	return connect(options);
};


//export default activeRecord;

module.exports = {
	establishConnection
};


const connect = function(options){
	if(!options.adapter)
		throw new Error("Adapter Not mentioned");
	
	switch(options.adapter){
		case "mysql":
			return mysql.connect(options);
		default:
			throw new Error("Adapter Implementation Not Available. Adapters Available For: " + ADAPTERS);
	}
};

