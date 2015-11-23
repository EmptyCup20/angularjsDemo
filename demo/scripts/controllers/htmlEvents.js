/**
 *
 * @Author zhangxin14
 * @Date   2015/11/23
 *
 */
var htmlEvents = angular.module('htmlEvents', [])
    .controller('personCtrl_1', function ($scope) {
        $scope.firstName = "John";
        $scope.lastName = "Doe";
        $scope.myVar = false;
        $scope.toggle = function () {
            $scope.myVar = !$scope.myVar;
        };
    })
    .controller('personCtrl_2', function($scope) {
        $scope.firstName = "John";
        $scope.lastName = "Doe";
        $scope.myVar = true;
        $scope.toggle = function() {
            $scope.myVar = !$scope.myVar;
        }
    });
