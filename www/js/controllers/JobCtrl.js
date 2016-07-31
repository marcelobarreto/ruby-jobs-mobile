app.controller('JobCtrl', function($scope, $stateParams, Jobs) {
  $scope.job = Jobs.get({id: $stateParams.id});
});
