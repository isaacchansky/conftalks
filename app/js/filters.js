'use strict';

exports.truncateTitle = function truncateTitle (titleString, length) {
  return titleString.slice(0, length)+"...";
}
