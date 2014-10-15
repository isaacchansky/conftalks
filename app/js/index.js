'use strict';

require('angular/angular');
require('angular-route/angular-route');

var controllers = require('./controllers');
var directives = require('./directives');
var services = require('./services');
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
    .when('/watch', {
      templateUrl: './views/watch.html',
      controller: 'watchCtrl'
    })
    .when('/:id', {
      templateUrl: './views/single-conference.html',
      controller: 'singleConfCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
	}
]);

app.directive('confVideo', directives.confvideo);
app.directive('ytEmbed', directives.ytEmbed);

app.service ('ytVideoDataService', services.ytVideoDataService);

app.controller('confsCtrl', ['$scope', controllers.confs]);
app.controller('singleConfCtrl', ['$scope', 'ytVideoDataService', controllers.singleConf]);
app.controller('watchCtrl', ['$scope', '$routeParams', '$sce', controllers.watch]);

