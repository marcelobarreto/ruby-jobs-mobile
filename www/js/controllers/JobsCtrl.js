app.controller('JobsCtrl', function($scope, Jobs) {
  $scope.jobs = Jobs.query();
  $scope.nextPage = 2; // nextPage starts on 2 because the first is already loaded.
  $scope.moreItemsAvailable = true;

  $scope.loadMore = function() {
    var jobs = Jobs.query({page: $scope.nextPage}, function(response) {
      if (response.length > 0) {
        $scope.jobs = $scope.jobs.concat(jobs);
        $scope.nextPage ++;
      } else {
        $scope.moreItemsAvailable = false;
      }

      $scope.$broadcast('scroll.infiniteScrollComplete');
    });
  };
});
