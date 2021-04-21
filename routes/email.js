
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'globalwebkraft@gmail.com',
    pass: 'ayanazad1'
  }
});


var mailOptions = {
  from: 'globalwebkraft@gmail.com',
  to: 'mahbubaliazad@gmail.com, enjoymath9@gmail.com',
  subject: 'Sending Email using Node.js',
  text: `Hello Mr. World, Thank you for your cooperation with Global WebKraft.
          Wish you a very happy Eid ul fitre 2021.`      
};


transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } 
  else {
    console.log('Email sent: ' + info.response);
  }
});