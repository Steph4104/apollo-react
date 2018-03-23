import Sequelize from 'sequelize';
// import Mongoose from 'mongoose';

// create the connection for Sql
const sqlDb = new Sequelize('apollodemo', "root", "sclah418", {
	host: '127.0.0.1',
	dialect: 'mysql'
});

// define the model
const PostModel = sqlDb.define('channel', {
	content: { type: Sequelize.STRING },
	views: { type: Sequelize.INTEGER }
},{
	timestamps: false
});

// create the table if it doesn't exist yet
sqlDb.sync();

// export Post
const Channel = sqlDb.models.channel;
export { Channel };