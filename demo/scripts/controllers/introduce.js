/**
 * Created by xiangxiao3 on 2015/11/22.
 */
var introduce = angular.module('introduce', []);

introduce.controller('myCtrl', function($scope) {
    $scope.firstName= "John";
    $scope.lastName= "Doe";
});