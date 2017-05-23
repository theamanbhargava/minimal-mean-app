angular.module('testApp').controller('TestContentController', ['$scope', '$rootScope', '$http', function($scope, $rootScope, $http) {

  $scope.testContentVariable = "Test Content Scope Variable";
  $scope.successText = "";
  $scope.errorText = "";
  $scope.id = undefined;

  $scope.create = function() {

    $http.post('/api/create', {

      key1: "value1",
      key2: "value2"

    }).then(function successCb(resp) {

      $scope.successText = "Create Success - " + JSON.stringify(resp, null, 2);
      $scope.id = resp.data.data._id;

    }, function failureCb(err) {

      $scope.errorText = "Create Error - " + JSON.stringify(err, null, 2);
    });
  };

  $scope.read = function() {

    $scope.successText = $scope.errorText = "";

    $http.get('/api/read/' + $scope.id).then(function successCb(resp) {

      $scope.successText = "Read Success - " + JSON.stringify(resp, null, 2);

    }, function failureCb(err) {

      $scope.errorText = "Read Error - " + JSON.stringify(err, null, 2);
    });
  };

  $scope.update = function() {

    $http.put('/api/update/'+$scope.id, {

      key1: "new value 5",
      key2: "new value 6"

    }).then(function successCb(resp) {

      $scope.successText = "Update Success - " + JSON.stringify(resp, null, 2);

    }, function failureCb(err) {

      $scope.errorText = "Update Error - " + JSON.stringify(err, null, 2);
    });
  };

  $scope.delete = function() {

    $http.delete('/api/delete/'+$scope.id).then(function successCb(resp) {

      $scope.successText = "Delete Success - " + JSON.stringify(resp, null, 2);

    }, function failureCb(err) {

      $scope.errorText = "Delete Error - " + JSON.stringify(err, null, 2);
    });
  };

  

}]);