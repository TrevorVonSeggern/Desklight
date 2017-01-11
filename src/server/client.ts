/**
 * Created by trevor on 3/20/16.
 */
// var jsdom = require('jsdom');
// var beautify = require('js-beautify');
import * as express from 'express'
import * as benv from 'benv'
import * as fs from 'fs'

export let client = express();

benv.setup(function () {
	// benv.expose({
	// 	$: benv.require('../../bower_components/zepto/zepto.js', 'Zepto'),
	// 	angular: benv.require('../../bower_components/angular/angular.js', 'angular'),
	// 	Node: require('Node')
	// });
	// require('jquery');
	// require('ngRoute');
	// require('ngCookies');
	// require('ngMaterial');
	// require('ngAnimate');
	// require('ngAria');
	// require('bcrypt');
	// require('googlechart');
	// require('../client/app/appConfig');

	// start angular digest cycle
	document.write(fs.readFileSync('./src/client/index.html'));
	// angular.bootstrap(document, ['app']);

	// console.log(document.documentElement.outerHTML);
});

let cacheOptions = {
	etag: true,
	// maxage: '3h',
};

client.use('/', express.static('./assets', cacheOptions));
client.use('/bower_components', express.static('./bower_components/', cacheOptions));
client.use('/src/client', express.static('./src/client/', cacheOptions));
client.use('/src/models', express.static('./src/models/', cacheOptions));
client.use('/src/SystemConfig.js', express.static('./src/SystemConfig.js', cacheOptions));
client.use('/src/SystemConfig.ts', express.static('./src/SystemConfig.ts', cacheOptions));

client.get('/index.html', getIndex);
client.get('/', getIndex);

function getIndex(req, res) {
	fs.readFile('./src/client/index.html', 'utf8', function (err, page) {
		if (err) throw err;
		res.send(page);
	});
}