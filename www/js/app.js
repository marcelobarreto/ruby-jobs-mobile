var app = angular.module('rubyJobs', ['ionic', 'ngResource', 'jobs.service']);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })
  .state('app.jobs', {
    url: '/jobs',
    views: {
      'menuContent': {
        templateUrl: 'templates/jobs.html',
        controller: 'JobsCtrl'
      }
    }
  })
  .state('app.job', {
    url: '/jobs/:id',
    views: {
      'menuContent': {
        templateUrl: 'templates/job.html',
        controller: 'JobCtrl'
      }
    }
  });

  $urlRouterProvider.otherwise('/app/jobs');
});
