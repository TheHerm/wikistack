const models = require('./models');
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const template = nunjucks.configure('views', {noCache: true})
app.set('view engine', 'html');
app.engine('html', nunjucks.render);
app.use(express.static('./public'));

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json());





models.User.sync({})
.then(function(){
	return models.Page.sync({})
})
.then(function(){
	server.listen(3001, function(){
		console.log('Server is listening on port 3001')
	});
})
.catch(console.error);


