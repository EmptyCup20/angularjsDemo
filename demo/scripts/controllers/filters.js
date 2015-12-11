/**
 *
 * @Author zhangxin14
 * @Date   2015/11/23
 *
 */
var filters = angular.module('filters', [])
    .controller('myCtrl', function($scope) {
        $scope.firstName = "John";
        $scope.lastName = "Doe";
    })
    .controller('personCtrl', function($scope) {
        $scope.firstName = "John";
        $scope.lastName = "Doe";
        $scope.fullName = function() {
            return $scope.firstName + " " + $scope.lastName;
        }
    })
    .controller('namesCtrl', function($scope) {
        $scope.names = [
            {name:'Jani',country:'Norway'},
            {name:'Hege',country:'Sweden'},
            {name:'Kai',country:'Denmark'}
        ];
    })
    .controller('costCtrl',function($scope){
        $scope.quantity = 1;
        $scope.price = 5;
    });