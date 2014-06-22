'use strict';

require('angular/angular');
require('angular-route/angular-route');
var controllers = require('./controllers');

var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', '$httpProvider',
	function($routeProvider, $httpProvider) {
		$routeProvider.when('/', {
			templateUrl: './views/conferences.html',
			controller: 'conferencesController'
		}).when('/search', {
      templateUrl: './views/search.html',
      controller: 'searchController'
    }).otherwise({redirectTo: '/'});
	}
]);

app.controller('conferencesController', ['$scope', controllers.conferences]);
app.controller('searchController', ['$scope', controllers.search]);
