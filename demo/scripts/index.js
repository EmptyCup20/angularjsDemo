/**
 * Created by xiangxiao3 on 2015/10/9.
 */
var myApp = angular.module('myApp', [
    'ngRoute',
    'controllerDemo'
]);

myApp.run(function($rootScope){
    $rootScope.name = "World";
})

myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/HelloWorld.html'
    })

    $routeProvider.when('/controllerdemo', {
        templateUrl: 'views/controllerdemo.html',
        controller: 'controllerDemoController'
    })
}])


