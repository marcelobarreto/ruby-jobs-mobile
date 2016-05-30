angular.module('starter.controllers', [])

.controller('JobsCtrl', function($scope, Jobs) {
  $scope.jobs = Jobs.all();
  $scope.page = 2;
  $scope.moreItemsAvailable = true;

  $scope.loadMore = function() {
    var jobs = Jobs.all({page: $scope.page}, function(response) {
      if (response.length > 0) {
        $scope.jobs = $scope.jobs.concat(jobs);
        $scope.page ++;
      } else {
        $scope.moreItemsAvailable = false;
      }

      $scope.$broadcast('scroll.infiniteScrollComplete');
    });
  }

  $scope.share = function(job) {
    console.log(job.id);
  }
})

.controller('JobViewCtrl', function($scope, $stateParams, Jobs) {
  var job = Jobs.get({id: $stateParams.id}, function(){
    $scope.job = job;
  })
});
