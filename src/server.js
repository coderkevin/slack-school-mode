import express from 'express';
import bodyParser from 'body-parser';
import config from './config';

function createApp() {
	const app = express();

	app.use( bodyParser.urlencoded( { extended: true } ) );
	app.use( bodyParser.json() );

	app.get('/', (req, res) => { res.send('\n 👋 🌍 \n') });

	app.listen( config.PORT );
	console.log( 'slack-school-mode listening on port ' + config.PORT );
}

createApp();
