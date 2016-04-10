"use strict";

//import mysql from "mysql-orm";
const mysql = require("./mysql-orm");
const ADAPTERS = ["MYSQL"];
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

/*export default {
	connect
};*/

module.exports = {
	connect
		
}
	
