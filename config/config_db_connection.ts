import Sequelize from 'sequelize';
import config_db from './config_db';

const sequelize = new Sequelize(
	config_db.database,
	config_db.user,
	config_db.password,
	{
		'host': 'localhost',
		'dialect': 'mysql'
	}
);

export default sequelize;