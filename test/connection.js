//import activeRecord from "active-orm";

const activeRecord = require("../active-orm");

console.log(activeRecord);

var result = activeRecord.establishConnection({
	adapter: "mysql",
	user: "root",
	password: "",
	host: "localhost",
	database: "parichay"
});

