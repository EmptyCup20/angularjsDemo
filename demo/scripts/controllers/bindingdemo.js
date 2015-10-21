/**
 *
 * @Author zhangxin14
 * @Date   2015/10/12
 *
 */
var bindingDemomodule = angular.module('bindingdemo', []);
bindingDemomodule.controller('bindingdemocontroller', function ($scope) {
    $scope.bindText = {
        text : 'bindingDemo'
    };
});