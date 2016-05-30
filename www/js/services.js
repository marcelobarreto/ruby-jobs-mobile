angular.module('starter.services', [])

angular.module('starter').factory('Jobs', function($resource) {
  return $resource('http://ruby-jobs-api.herokuapp.com/api/v1/jobs/:id', {id: '@id'}, {})
});
