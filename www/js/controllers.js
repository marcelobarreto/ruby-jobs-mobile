angular.module('starter.controllers', [])

.controller('JobsCtrl', function($scope, $cordovaSocialSharing, $ionicModal, Jobs) {
  $scope.jobs = Jobs.all();
  $scope.nextPage = 2; // nextPage starts on 2 because the first is already loaded.
  $scope.moreItemsAvailable = true;

  $ionicModal.fromTemplateUrl('templates/share.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.openModal = function() {
    $scope.modal.show();
  };

  $scope.closeModal = function() {
    $scope.modal.hide();
  };

  $scope.share = function() {
    $scope.modal.show();
  }

  $scope.loadMore = function() {
    var jobs = Jobs.all({page: $scope.nextPage}, function(response) {
      if (response.length > 0) {
        $scope.jobs = $scope.jobs.concat(jobs);
        $scope.nextPage ++;
      } else {
        $scope.moreItemsAvailable = false;
      }

      $scope.$broadcast('scroll.infiniteScrollComplete');
    });
  }
})

.controller('JobViewCtrl', function($scope, $stateParams, Jobs) {
  var job = Jobs.get({id: $stateParams.id}, function(){
    $scope.job = job;
  })
});
