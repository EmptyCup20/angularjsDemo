'use strict';

var app = angular.module('myApp', []);

app.controller('TestCtrl', function($scope){
    $scope.text = 'Hello World!';
})