require('dotenv').config();

var send = require('gmail-send')({
	//var send = require('../index.js')({
	user: process.env.GMAIL_USER,
	// user: credentials.user,                  // Your GMail account used to send emails
	pass: process.env.GMAIL_PASS,
	// pass: credentials.pass,                  // Application-specific password
	to: ['fnaquira@conflux-aqp.com'],
	// to:   credentials.user,                  // Send to yourself
	// you also may set array of recipients:
	// [ 'user1@gmail.com', 'user2@gmail.com' ]
	from: 'Facturacion Conflux fnaquiravargas@gmail.com', // from: by default equals to user
	// replyTo: credentials.user,            // replyTo: by default undefined
	// bcc: 'some-user@mail.com',            // almost any option of `nodemailer` will be passed to it
	subject: 'test subject',
	text: 'gmail-send example 1', // Plain text
	html: '<b>html text</b><i> y este italic</i>' // HTML
});

console.log('* [example 1.1] sending test email');

send(
	{
		// Overriding default parameters
		subject: 'Factura de ejemplo', // Override value set as default
		files: [
			{
				filename: 'manual.pdf',
				path: 'https://conflux-web.s3.amazonaws.com/see-v3-analisisVentas.pdf'
			}
		]
	},
	function(err, res) {
		console.log(
			'* [example 1.1] send() callback returned: err:',
			err,
			'; res:',
			res
		);
	}
);
