angular.module('starter.services', [])

angular.module('starter').factory('Jobs', function($resource) {
  return $resource('http://localhost:3000/api/v1/jobs/:id', { id: '@id' }, {
    all: {
      method: "GET",
      isArray: true
    },
    show: {
      method: "GET"
    }
  })
});
