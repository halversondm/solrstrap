/**
 * Created by Daniel on 11/16/2015.
 */
var express = require('express');
var app = express();

app.use('/vendors', express.static('node_modules'));
app.use(express.static(__dirname + '/app'));


var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});