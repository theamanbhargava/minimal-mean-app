angular.module('testApp', [
  'ui.router'
]);
window.baseUrl = window.location.protocol + "//" + window.location.host + "/";
var lang = 'en';

angular.module('testApp').run(
    ['$rootScope', '$state', '$stateParams',
      function($rootScope, $state, $stateParams) {
        $rootScope.$state = "root";
        $rootScope.$stateParams = $stateParams;
      }
    ]
  )
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state("root", {
        url: "",
        views: {
          'header': {
            templateUrl: 'partials/test-header.html',
            controller: 'TestHeaderController'
          },
          'footer': {
            templateUrl: 'partials/test-footer.html',
            controller: 'TestFooterController'
          },
          'content': {
            templateUrl: 'partials/test-content.html',
            controller: 'TestContentController'
          }
        }
      });
  });