/**
 * Created by xiangxiao3 on 2015/10/9.
 */
var controllerDemoModule = angular.module('controllers', [])
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
    .controller('routeCtrl',function($scope,$routeParams,$location){
        console.log($routeParams);
        console.log($location.path());
        console.log($location.hash());
        console.log($location.host());
        console.log($location.port());
        console.log($location.protocol());
        console.log($location.search());
        console.log($location.url());
    });