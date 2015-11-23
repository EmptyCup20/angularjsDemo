/**
 *
 * @Author zhangxin14
 * @Date   2015/11/23
 *
 */
var api = angular.module('api', []);
api.controller('lowercaseCtrl', function($scope) {
    $scope.x1 = "JOHN";
    $scope.x2 = angular.lowercase($scope.x1);
}).controller('uppercaseCtrl', function($scope) {
    $scope.x1 = "John";
    $scope.x2 = angular.uppercase($scope.x1);
}).controller('isStringCtrl', function($scope) {
    $scope.x1 = "JOHN";
    $scope.x2 = angular.isString($scope.x1);
}).controller('isNumberCtrl', function($scope) {
    $scope.x1 = "JOHN";
    $scope.x2 = angular.isNumber($scope.x1);
});