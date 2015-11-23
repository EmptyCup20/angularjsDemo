/**
 *
 * @Author zhangxin14
 * @Date   2015/11/23
 *
 */
var validation = angular.module('validation', []);
validation.controller('validateCtrl', function($scope) {
    $scope.user = 'John Doe';
    $scope.email = 'john.doe@gmail.com';
});