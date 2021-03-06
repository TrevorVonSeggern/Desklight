/**
 * Created by trevor on 3/20/16.
 */
import express = require('express');
import * as passport from 'passport';
import {LightRouter} from "./light/controller";

// init the api
export let api = express();
api.use(passport.initialize());

// configure the mssql connection
// var connection = new sql.Connection(config);

api.all('/*', (req: any, res, next: () => void) => {
	// CORS headers
	res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
	res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');

	if (req.method == 'OPTIONS')
		return res.status(200).end();
	next();
});

let router = express.Router();


router.use('/light', LightRouter);

router.get('/', function (req, res) {
	res.json({message: 'You are running dangerously low on beer!'});
});

api.use('/', router);
