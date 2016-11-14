/*jshint esversion: 6 */

const express = require('express');
const router = express.Router();
const wikiRouter = require('./wiki.js');
const bodyParser = require('body-parser');
const morgan = require('morgan');


router.use('/', morgan('dev'));

router.use(express.static('./public'));

router.use(bodyParser.urlencoded({ extended: false}));
router.use(bodyParser.json());


router.use('/wiki', wikiRouter);

router.get('/', function(req, res, next){
	res.send('go somewhere else');
});



module.exports = router;