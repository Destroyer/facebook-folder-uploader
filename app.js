var fs    = require("fs"),
login = require("facebook-chat-api");

login({email: "mail", password: "pass"}, function callback (err, api) {
        if(err) return console.error(err);
        var yourID = 1;

        var folder = fs.readdirSync(__dirname + '/temp/');
        folder.forEach(function(value) {
        	var msg = {
                        body: value,
                        attachment: fs.createReadStream(__dirname + '/temp/' + value)
        	}
        	api.sendMessage(msg, yourID);
	});
});
