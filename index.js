'use strict';

var EE      = require('events').EventEmitter;
var Hapi    = require('hapi');
var routes  = require('./routes');
//
// Log plugin
//

var logRegister = {
  register: require('good'),
  options: {
    opsInterval: 30000,
    reporters: [{
      reporter: require('good-console'),
      events:{
        log     : '*',
        response: '*',
        request : '*',
        error   : '*',
        ops     : '*'
      }
    }]
  }
};

var tvRegister = {
  register: require('tv')
};

//
// hapi server
//

module.exports = service;

function service(options) {
  var plugins = [logRegister, tvRegister];
  var server = new Hapi.Server();
  server.connection(options.server);
  server.route(routes);
  server.register(plugins, function(err) {
    if (err) {
      throw err;
    }

    server.start(function() {
      server.log('service', 'Server started at ' + server.info.uri);
    });
  });

  //
  // expose some of the server's methods
  //

  var exposeApp = new EE();

  exposeApp.stop = function stop(cb) {
    server.root.stop();
    cb();
  };

  server.on('start', function() {
    exposeApp.emit('start');
  });

  server.on('stop', function() {
    exposeApp.emit('stop');
  });

  return exposeApp;
}