!(function() {
  'use strict'

  var mongoose = require('mongoose'),
    timestamps = require('mongoose-timestamp'),
    Schema = mongoose.Schema,
    testSchema;

  /*
   * Define Test Schema
   */
  testSchema = new Schema({
    key1: { type: String, required: true },
    key2: { type: String, required: true }
  });

  testSchema.plugin(timestamps, {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });

  testSchema.statics.save = function(data, callback) {

    var TestModel = new Test(data);

    TestModel.save(function(err, resp) {
      if (err) {
        callback(err);
      } else {
        callback(null, resp);
      }
    });
  };

  testSchema.statics.get = function(id, callback) {
    Test.findOne({ '_id': id }).exec(callback);
  };

  testSchema.statics.update = function(id, data, callback) {
    Test.findByIdAndUpdate(id, { $set: data }, { new: true },callback);
  };

  testSchema.statics.remove = function(id, callback) {
    Test.findByIdAndRemove({ '_id': id }).exec(callback);
  };

  var Test = mongoose.model('Test', testSchema);
  module.exports = Test;

})();