'use strict';

exports.ytVideoDataService = function ytVideoDataService ($http) {
  var config = require('./config');
  this.getVideoData = function getVideoData (videoIDs) {
    return $http({
      method: "GET",
      url: config.YT_API_URL,
      params: {
        id: videoIDs.join(','),
        key: config.YT_API_KEY,
        part: "snippet"
      }
   });
  }
}
