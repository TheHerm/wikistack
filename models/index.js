var sqlize = require('Sequelize');
var Sequelize = new sqlize('postgres://localhost:5432/wikistack')
console.log(Sequelize)
var pageSchema = {
	title: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			len: [1, 100]
		}
	},
	urlTitle: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			isUrl: true
		}	
	},
	content: {
		type: Sequelize.TEXT,
		allowNull: false,
		defaultValue : "PAGE CONTENT"
	},
	status: {
		type: Sequelize.STRING
	},
	date: {
		type: Sequelize.DATE,
		defaultValue: Sequelize.NOW
	}
}

var pageConfig = {};

var userSchema = {
	name: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			len: [1, 100]
		}
	},
	email: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			isEmail: true
		}
	}
}

var userConfig = {};

var Page = Sequelize.define('page', pageSchema, pageConfig);
var User = Sequelize.define('user', userSchema, userConfig);






module.exports = {
	Page: Page,
	User: User
}