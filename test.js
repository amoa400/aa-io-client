var aaio = require('./index');
var log = require('util').log;

var client = new aaio('http://127.0.0.1:6678?token=123');

client.on('open', function() {
  log('connected to server on port 6678');
});

client.on('close', function() {
  log('connection has closed');
});

client.on('dead', function() {
  log('connection has dead');
});

client.on('message', function(message) {
  log('message, id: content: ' + JSON.stringify(message));
});

var count = 0;
setInterval(function() {
  client.send({n: count++});
}, 1000);
