/**
 *
 * @Author zhangxin14
 * @Date   2015/10/16
 *
 */
var filterDemoModule = angular.module('filterdemo',[]);
filterDemoModule.controller('filterdemocontroller',function($scope){
    $scope.num = 12.326;
    $scope.today= Date.now();
    $scope.searchs = [
        {name: 'bbc', phone: '13456'},
        {name: 'acd', phone: '23564'},
        {name: 'ndb', phone: '45123'},
        {name: 'zbv', phone: '456879'},
        {name: 'yhd', phone: '856412'}
    ],
    $scope.text = 'sdafafaSDFFS'
});