var fs = require('fs');
var path = require('path');
var _ = require('underscore');

/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  siteAssets: path.join(__dirname, '../web/public'),
  archivedSites: path.join(__dirname, '../archives/sites'),
  list: path.join(__dirname, '../archives/sites.txt')
};

// Used for stubbing paths for tests, do not modify
exports.initialize = function(pathsObj) {
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!
exports.processUrl = function(targetUrl) {
  fs.readFile(exports.paths.list, function(err, data) {
    if (err) {
      throw err;
    } else {
      console.log("successfully reading list file! data is: " + data.toString() + '*****')
      var splitData = data.toString().split('\n');
      if (exports.isUrlInList(splitData, targetUrl)) {
        if (exports.isUrlArchived(targetUrl)) {
          //serve the saved html page
        } else {
          //return a 5xx cause we fucked up and the url is in the list but not archived
        }
      } else {
        //serve the loading page
        exports.downloadUrls(targetUrl); 
      }
    }
  });
};

exports.isUrlInList = function(list, targetUrl) {
  // return whether 
};

exports.addUrlToList = function() {
};

exports.isUrlArchived = function(targetUrl) {
};

exports.downloadUrls = function(targetUrl) {
};

// exports = {
//   initialize: initialize,
//   processUrl: processUrl,
//   isUrlInList: isUrlInList,
//   addUrlToList: addUrlToList,
//   isUrlArchived: isUrlArchived,
//   downloadUrls: downloadUrls
// };
