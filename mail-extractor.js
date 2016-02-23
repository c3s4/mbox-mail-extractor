var Mbox = require('node-mbox');
var MailParser = require('mailparser').MailParser;

var mboxFilePath = process.argv[2];
var senderMailAddress = process.argv[3];
var mbox = new Mbox(mboxFilePath);

mbox.on('message', function(msg) {
  console.log("Got a message: " + msg);
  var mailparser = new MailParser({ streamAttachments : true });
  mailparser.on("end", function(mail) {
    console.log("From: ", mail.from);
    console.log("Subject: ", mail.subject);
  });
});
