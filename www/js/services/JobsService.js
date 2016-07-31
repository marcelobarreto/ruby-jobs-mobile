angular.module('jobs.service', [])

angular.module('rubyJobs').factory('Jobs', function($resource) {
  return $resource('http://www.rubyjobs.me/api/v1/jobs/:id', {id: '@id'}, {})
});
