'use strict';

require('angular/angular');
require('angular-route/angular-route');
var controllers = require('./controllers');

var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', '$httpProvider',
	function($routeProvider, $httpProvider) {
		$routeProvider.when('/talks', {
			templateUrl: './views/talks.html',
			controller: 'talksController'
		}).when('/search', {
      templateUrl: './views/search.html',
      controller: 'searchController'
    }).otherwise({redirectTo: '/talks'});
	}
]);

app.controller('talksController', ['$scope', controllers.talks]);
app.controller('searchController', ['$scope', controllers.search]);
