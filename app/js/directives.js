'use strict';

exports.confvideo = function(){
  var URIparser = function(url){
    var p = document.createElement('a');
    p.href = url;
    p.paramHash = {}
    p.search
      .replace('?','')
      .split('&')
      .map(function(item){
        if(item){
          var k = decodeURIComponent(item.split('=')[0]);
          var v = decodeURIComponent(item.split('=')[1]);
          p.paramHash[k] = v;
        }
      });
    return p;
  };

  var YTembed = function(parsedURI){
    return parsedURI.href;
  }

  var getPlaceholderImg = function(parsedURI){
    return "http://img.youtube.com/vi/"+ parsedURI.paramHash['v']+"/0.jpg";
  };

  return {
    restrict: 'E',
    scope: {
      url: '=url',
      title: '=title',
      description: '=description'
    },
    templateUrl: '../views/video.html',
    link: function(scope, element){
      var parsedURI = URIparser(scope.url);

      scope.placeholder = getPlaceholderImg(parsedURI);
      scope.embed = YTembed(parsedURI);
    }
  }
}
