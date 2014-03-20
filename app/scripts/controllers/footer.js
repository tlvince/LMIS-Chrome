'use strict';

angular.module('lmisChromeApp')
  .controller('FooterCtrl', function($scope) {
    $scope.year = new Date().getFullYear();
    $scope.version = '0.3.0-pouch-demo';
  });
