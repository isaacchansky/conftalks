'use strict';

exports.confs = function($scope) {
  $scope.conferences = require('../data/conferences');
};

exports.singleConf = function($scope, $routeParams) {
  $scope.conferences = require('../data/conferences');
  $scope.$on('$routeChangeSuccess', function (ev, current) {
   var conference = $scope.conferences[current.params.id];
   $scope.title = conference.title;
   $scope.talks = conference.talks;
});
};
