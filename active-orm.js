"use strict";

//import adapter from "adapter";

const ormAdapter = require("./orm-adapter");
const mysql = require("./mysql-orm");

var schemaModels = new Map();

const establishConnection = (options) => {
	let adapter = options.adapter || "mysql",
	user = options.user || "root",
	password = options.password || "",
	host = options.host || "localhost",
	database = options.database;	

	if(!database)
		throw new Error("Database not provided");

	return ormAdapter.connect(options);
};

const ormObject = function(tableName){
	var name = tableName;

	var find = options => {
		let model = schemaModels.get(name);
		let fields = model.fields;
		let queryObject = {};
		Object.keys(options)
			.filter(key => fields.has(key))
			.forEach(key => queryObject[key] = options[key]);

		return ormAdapter.find(queryObject);
	};

	return {
		find	
	}

}

const models =  (function(){
	var assignModel = (name) => {
		let model = ormObject(name);
		return model;
	};
	var set = (obj, table) => {
		if(!obj)
			throw new Error("Object Name Not Provided");
		table = table || obj;
		schemaModels.set(obj, {table: table});
		ormAdapter.schema(table)
			.then(fields => {
				let model = schemaModels.get(obj);
				model["fields"] = new Set(fields);
			})				
			.catch(err => console.log(err));
		return assignModel(obj);
	};
	return {
		set: set
	}
})();


module.exports = {
	establishConnection,
	models
};


