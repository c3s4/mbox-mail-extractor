var Mbox = require('node-mbox');
var MailParser = require('mailparser').MailParser;

var mboxFilePath = process.argv[2];
var inputSenderMailAddress = process.argv[3];
var inputRecipientMailAddress = process.argv[4];
var mbox = new Mbox(mboxFilePath);

mbox.on('message', function(msg) {
  console.log("Got a message: " + msg);
  var mailparser = new MailParser({ streamAttachments : true });
  mailparser.on("end", function(mail) {
    console.log("From: ", mail.from);
    console.log("Subject: ", mail.subject);
    var senders = mail.from;
    var recipients = mail.to;
    if (senders.length > 0) {
      var senderAddress = senders[0].address;
    }

    if (recipients.length == 1) {
      console.log("There is only one recipient: " + recipients);
      if ((senderAddress == inputSenderMailAddress) && (to[0] == inputRecipientMailAddress)) {
        console.log("The recipient and the sender are who you are expecting", to[0], senderAddress);
      }
    } else {
      console.log("There are many recipients: " + recipients);
    }

  });
});
