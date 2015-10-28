/**
 * Created by xiangxiao3 on 2015/10/9.
 */
var controllerDemoModule = angular.module('controllerDemo', [])
    .controller('controllerDemoController', function($scope){
        $scope.controllerName = "World";
    });