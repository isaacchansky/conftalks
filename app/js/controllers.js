'use strict';

exports.confs = function($scope) {
  $scope.conferences = require('../data/conferences');
};

exports.singleConf = function($scope, ytVideoDataService) {
  var config = require('./config');
  $scope.conferences = require('../data/conferences');

  $scope.$on('$routeChangeSuccess', function (ev, current) {

    var conf = $scope.conferences[current.params.id],
       talkIDs = conf.talks.map(function(i){return i.url.split('=')[1];});
    $scope.title = conf.title;

    ytVideoDataService.getVideoData(talkIDs).
    then(function ytVideoDataSuccess (resp){
      $scope.talks = resp.data.items.map(function(item){
        return {
          description: item.snippet.description,
          title: item.snippet.title,
          url: "https://www.youtube.com/watch?v="+item.id
        }
      })
    },
    function ytVideoDataFail (argument) {
    });

  });
};

exports.watch = function($scope, $routeParams, $sce) {
  $scope.url = $sce.trustAsResourceUrl("http://www.youtube.com/embed/"+$routeParams.id);
  $scope.title = $routeParams.title;
  $scope.description = $routeParams.desc;
}
