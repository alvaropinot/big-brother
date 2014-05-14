'use strict';

angular.module('bigBrotherApp')
  .controller('TajoCtrl', function ($scope, $routeParams) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

   	$scope.tajoId = $routeParams.tajoId;

    //console.log($routeParams);
  });
