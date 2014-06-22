'use strict';

require('angular/angular');
require('angular-route/angular-route');

var controllers = require('./controllers');
var directives = require('./directives');
var app = angular.module('app', ['ngRoute']);

app.config([
  '$routeProvider',
  '$httpProvider',
	function($routeProvider, $httpProvider) {
		$routeProvider
    .when('/', {
			templateUrl: './views/conferences.html',
			controller: 'confsCtrl'
		})
    .when('/:id', {
      templateUrl: './views/single-conference.html',
      controller: 'singleConfCtrl'
    })
    .when('/search', {
      templateUrl: './views/search.html',
      controller: 'searchCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
	}
]);

app.directive('confVideo', directives.confvideo);

app.controller('confsCtrl', ['$scope', controllers.confs]);
app.controller('singleConfCtrl', ['$scope', controllers.singleConf]);
app.controller('searchCtrl', ['$scope', controllers.search]);

