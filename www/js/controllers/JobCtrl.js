app.controller('JobCtrl', function($scope, $stateParams, $ionicLoading, $timeout, Jobs) {
  var showLoading = function() {
    $ionicLoading.show({
      content: 'Carregando...',
      animation: 'fade-in',
      showBackdrop: true,
      maxWidth: 200,
      showDelay: 0
    });
  };

  var loadJob = function() {
    showLoading();

    $scope.job = Jobs.get({id: $stateParams.id});

    $ionicLoading.hide();
  };

  loadJob();
});
