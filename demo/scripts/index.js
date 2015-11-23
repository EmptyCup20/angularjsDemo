/**
 * Created by xiangxiao3 on 2015/10/9.
 */
var myApp = angular.module('myApp', [
    'ngRoute',
    'controllers',
    'bindingdemo',
    'filterdemo',
    'directivedemo',
    'directivecontroll',
    'introduce'
]);

myApp.run(function($rootScope,$timeout){
    $rootScope.name = "World";
    $timeout(function(){
        $rootScope.myHref = 'https://www.baidu.com';
    },2000)
});

myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/HelloWorld.html'
    });
    $routeProvider.when('/introduce', {
        templateUrl: 'views/introduce.html',
        controller: 'myCtrl'
    });

    $routeProvider.when('/controllers', {
        templateUrl: 'views/controllerdemo.html',
        controller: 'myCtrl'
    });
    $routeProvider.when('/bindingdemo',{
        templateUrl: 'views/bindingdemo.html',
        controller: 'bindingdemocontroller'
    });
    $routeProvider.when('/filterdemo',{
        templateUrl: 'views/filterdemo.html',
        controller: 'filterdemocontroller'
    });
    $routeProvider.when('/directivedemo',{
        templateUrl: 'views/directivedemo.html'
    })
}]);


