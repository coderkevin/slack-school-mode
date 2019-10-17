import dotenv from 'dotenv';

const ENV = process.env.NODE_ENV || 'development';

if ( ENV === 'development' ) {
	dotenv.config();	
}

const config = {
	ENV: process.env.NODE_ENV,
	PORT: process.env.PORT,
};

export default config;
