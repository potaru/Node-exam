import Sequelize from 'sequelize';
import sequelize from '../config/config_db_connection';
import config_db from '../config/config_db';

const Post = sequelize.define('Post',{
	id: {
		type: Sequelize.INTEGER.UNSIGNED,
		primaryKey: true,
		autoIncrement: true,
	},
	userid: {
		type: Sequelize.STRING,
		allowNull: false
	},
	title: {
		type: Sequelize.STRING,
		allowNull: false
	},
	content: {
		type: Sequelize.STRING,
		allowNull: false
	},
	createdAt: {
		type: 'TIMESTAMP'
		
	},
	updatedAt: {
		type: 'TIMESTAMP'
	}
}, { tableName: "Post" , createdAt: "createdAt", updatedAt: "updatedAt"});

export default Post;

