var Mbox = require('node-mbox');
var MailParser = require('mailparser').MailParser;

var mboxFilePath = process.argv[2];
var mbox = new Mbox(mboxFilePath);

mbox.on('message', function(msg) {
  console.log("Got a message: " + msg);
  var mailparser = new MailParser({ streamAttachments : true });
  mailparser.on("header", function(headers) {
    console.log("From: ", headers.from);
    console.log("Subject: ", headers.subject);
  });
});
