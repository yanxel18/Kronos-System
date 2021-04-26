'use strict';
const cluster = require('cluster');
const os = require('os');
const express = require('express'); 
const cpuCount = os.cpus().length;
const app = express();
const myroute = require('./router/router')

require('events').EventEmitter.defaultMaxListeners = 0;
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
if (cluster.isMaster) {
  for (var i = 0; i < cpuCount; i++) {
    cluster.fork();
  }
  cluster.on('exit', function (worker, code, signal) {
    var msg1 = 'WORKER PID: [' + worker.process.pid + '] ';
    var msg2 = 'MSG: '
    var parts = [];
    code && parts.push('code ' + code);
    signal && parts.push('signal ' + signal);
    msg2 += 'WORKER PROCESS CRASHED WITH ' + parts.join(' and ');
    console.log(msg2);
    cluster.fork();
  });
}
else {
  app.use(express.json())
  app.use('/', myroute)
  app.listen(4000);
}
