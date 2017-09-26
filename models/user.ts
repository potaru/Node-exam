import Sequelize from 'sequelize';
import sequelize from '../config/config_db_connection';
import config_db from '../config/config_db';

const User = sequelize.define('User',{
	id: {
		type: Sequelize.INTEGER.UNSIGNED,
		primaryKey: true,
		autoIncrement: true,
	},
	userid: {
		type: Sequelize.STRING,
		allowNull: false

	},
	password: {
		type:Sequelize.STRING,
		allowNull: false
	},
	name: {
		type:Sequelize.STRING,
		allowNull: false
	},
	createdAt: {
		type: 'TIMESTAMP'
		
	},
	updatedAt: {
		type: 'TIMESTAMP'
	}
}, { tableName: "User" , createdAt: "createdAt", updatedAt: "updatedAt"});

export default User;

