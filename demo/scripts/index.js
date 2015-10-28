/**
 * Created by xiangxiao3 on 2015/10/9.
 */
var myApp = angular.module('myApp', [
    'ngRoute',
    'controllerDemo',
    'bindingdemo',
    'filterdemo',
    'directivedemo',
    'directivecontroll'
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

    $routeProvider.when('/controllerdemo', {
        templateUrl: 'views/controllerdemo.html',
        controller: 'controllerDemoController'
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


