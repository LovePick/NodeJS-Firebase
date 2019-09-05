//ref: https://www.npmjs.com/package/fcm-node

var FCM = require('fcm-node');
var serverKey = 'MF6YSH2Atnxk7gfob_mcOw4KEAGb3seF1G9rwXGnm9rWXxv3'; // put your server key here
var fcm = new FCM(serverKey);

var message = { //this may vary according to the message type (single recipient, multicast, topic, et cetera)

    notification: {
        title: 'Title of your push notification',
        body: 'Body of your push notification'
    },
    to: 'SZIYXEocKhBfMu-oFJ7WJ0nTRDn_nQa0dCQM0jz0',//FCM Device token
};

fcm.send(message, function (err, response) {
    if (err) {
        console.log("Something has gone wrong!");
    } else {
        console.log("Successfully sent with response: ", response);
    }
});