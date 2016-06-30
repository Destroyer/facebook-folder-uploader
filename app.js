var fs    = require("fs"),
login = require("facebook-chat-api");

login({email: "mail", password: "pass"}, function callback (err, api) {
        if(err) return console.error(err);
        var yourID = 1;

        var folder = fs.readdirSync(__dirname + '/temp/');
        var msg = {
                body: "Here:",
                attachment: folder
        }
        api.sendMessage(msg, yourID);
});
