var fs = require("fs"),
        login = require("facebook-chat-api"),
        log = require("npmlog");


login({email: "mail", password: "pass"}, function callback (err, api) {
    if(err) return console.error(err);
    var yourID = 1;
    var folder = fs.readdirSync(__dirname + '/temp/parts');

    function uploader(i)
        {
                var j = i+1;

                if (i < folder.length)
                {
                        var msg = {
                                body: folder[i],
                                attachment: fs.createReadStream(__dirname + '/temp/parts/' + folder[i])
                        }
                        log.info("Uploading " + folder[i] + ". " + j + "/" + folder.length);
                        api.sendMessage(msg, yourID, function(err) {
                                if( err ){console.log('error: '+err);}
                                else {uploader(i+1);}
                        });
                }
        }
        uploader(0);

        var msg = {body: "-----------------------------------------\r\n" + process.argv[2] + "\r\nCasti: " + folder.length + "; Velikost: " + process.argv[3]};
        api.sendMessage(msg, yourID);

});
