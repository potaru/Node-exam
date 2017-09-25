interface Config_db {
	host:string;
	user:string;
	password:string;
	port:number;
	database:string;
}

var config_db : Config_db = {
	host:"localhost",
	user:"root",
	password:"skek1009",
	port:3306,
	database:"loginout_db"
} 

export default config_db;