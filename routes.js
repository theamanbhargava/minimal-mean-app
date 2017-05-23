!(function() {
  'use strict'

  var express = require('express'),
    router = express.Router(),
    TestController = require('./app/controllers/TestController');

  var route = function(app) {
    
    router.post('/create', TestController.create);
    router.get('/read/:id', TestController.read);
    router.put('/update/:id', TestController.update);
    router.delete('/delete/:id', TestController.delete);

    app.use('/api', router);
  }

  module.exports = route;
})();