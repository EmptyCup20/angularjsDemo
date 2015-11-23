/**
 *
 * @Author zhangxin14
 * @Date   2015/11/23
 *
 */
var http = angular.module('http', [])
    .controller('customersCtrl', function ($scope, $http) {
        $http.get("data/Customers_JSON.php")
            .success(function (response) {
                $scope.names = response;
            });
    });