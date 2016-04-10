//import activeRecord from "active-orm";
const activeRecord = require("../active-orm");

activeRecord.establishConnection({
	adapter: "mysql",
	user: "root",
	password: "",
	host: "localhost",
	database: "parichay"
}).then(() => console.log("Connected"));

var parichay;

setTimeout(function(){
	const models = activeRecord.models;
	parichay = models.set("parichay");
	var socialIdentity = models.set("socialIdentity", "socialIdentity");	
},2000);


setTimeout(function(){
	parichay.find({id: 1}).then(res => console.log(res)).catch(err => console.log(err));
}, 3000);





