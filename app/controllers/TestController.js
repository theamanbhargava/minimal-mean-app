!(function() {

  'use strict'

  var TestModel = require('../models/TestModel');

  var TestController = {

    create: function(req, res, next) {

      TestModel.save(req.body, function (err, resp) {

        if (err) {
          res.json({success: false, data: err, message: "Error"});
        } else {
          res.json({success: true, data: resp, message: "Success"});
        }
      });
    },

    read: function(req, res, next) {

      TestModel.get(req.params.id, function (err, resp) {

        if (err) {
          res.json({success: false, data: err, message: "Error"});
        } else {
          res.json({success: true, data: resp, message: "Success"});
        }
      });
    },

    update: function(req, res, next) {

      TestModel.update(req.params.id, req.body, function (err, resp) {

        if (err) {
          res.json({success: false, data: err, message: "Error"});
        } else {
          res.json({success: true, data: resp, message: "Success"});
        }
      });
    },

    delete: function(req, res, next) {

      TestModel.remove(req.params.id, function (err, resp) {

        if (err) {
          res.json({success: false, data: err, message: "Error"});
        } else {
          res.json({success: true, data: resp, message: "Success"});
        }
      });
    }

  };

  module.exports = TestController;

})();