/**
 *
 * @Author zhangxin14
 * @Date   2015/11/23
 *
 */
var forms = angular.module('myEx', []);
forms.controller('ExampleController', function($scope) {
    $scope.master = {"firstName":"John","lastName":"Doe"};
    $scope.reset = function() {
        $scope.user = angular.copy($scope.master);
    };
    $scope.reset();
});