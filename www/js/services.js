angular.module('starter.services', [])

angular.module('starter').factory('Jobs', function($resource) {
  return $resource('http://www.rubyjobs.me/api/v1/jobs/:id', {id: '@id'}, {})
});
