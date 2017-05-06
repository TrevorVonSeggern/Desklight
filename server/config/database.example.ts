export let config = {
	local: true,
	type: 'sql',
	sql: {
		database: 'databaseName',
		host: 'localhost',
		password: 'password',
		port: 3306,
		user: 'userid',
		waitForConnections: true,
		connectionLimit: 50
	},
	light: {
		particleUsername: 'userid',
		particlePassword: 'password'
	},
	awsConfig: {
		accessKeyId: 'accessKeyId',
		secretAccessKey: 'secretAccessKey',
		region: 'us-west-1'
	},
};
