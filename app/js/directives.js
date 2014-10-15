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

  var ytUrl = function(parsedURI){
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
      scope.embed = ytUrl(parsedURI);
      scope.id = parsedURI.paramHash.v;
      scope.encodedTitle = encodeURI(scope.title);
      scope.encodedDescription = encodeURI(scope.description);
    }
  }
}

exports.ytEmbed = function(){
  var YTembed = function(url){
    var iframe = document.createElement('iframe');
    iframe.src = url;
    iframe.setAttribute('allowfullscreen', true);
    iframe.setAttribute('frameborder', 0);
    return iframe;
  }
  return {
    restrict: 'E',
    scope: {
      src: '=url',
    },
    templateUrl: '../views/video.html',
    link: function(scope, element){
      scope.embed = YTembed(scope.url);
      element.append(scope.embed);
    }
  }
}
