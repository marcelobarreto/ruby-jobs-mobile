angular.module('starter.controllers', [])

.controller('JobsCtrl', function($scope, Jobs) {
  $scope.jobs = Jobs.all();

  $scope.share = function(job) {
    console.log(job.id);
  }
})

.controller('JobViewCtrl', function($scope, $stateParams, Jobs) {
  var job = Jobs.get({ id: $stateParams.id }, function(){
    $scope.job = job;
  })
});
