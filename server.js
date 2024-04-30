var express = require("express");
var app = express();

const client = require('./dbConnection');
let router = require('./routers/router');

app.use(express.static(__dirname + '/'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api', router);

var port = process.env.port || 3000;
console.log("App listening to: " + port);
client.connect(err => {
    if (err) {
        console.error('connection failed', err);
        process.exit(1);
    } else {
        console.log('Connection successfull');
        app.listen(port, () => {
            console.log("App listening to: " + port);
        });
    }
});
console.log("App listening to: " + port);
module.exports = app; 