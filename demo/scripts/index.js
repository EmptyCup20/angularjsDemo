/**
 * Created by xiangxiao3 on 2015/10/9.
 */
var myApp = angular.module('myApp', [
    'ngRoute',
    'controllers',
    'introduce',
    'expressions',
    'directives',
    'filters',
    'http',
    'htmlEvents',
    'myEx',
    'validation',
    'api',
    'myNoteApp'
]);


myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/tutorial.html'
    });
    $routeProvider.when('/introduce', {
        templateUrl: 'views/introduce.html'
    });
    $routeProvider.when('/expressions',{
        templateUrl: 'views/expressions.html'
    });
    $routeProvider.when('/controllers', {
        templateUrl: 'views/controller.html'
    });
    $routeProvider.when('/filters', {
        templateUrl: 'views/filters.html'
    });
    $routeProvider.when('/directives', {
        templateUrl: 'views/directives.html'
    });
    $routeProvider.when('/http', {
        templateUrl: 'views/http.html'
    });
    $routeProvider.when('/tables', {
        templateUrl: 'views/tables.html'
    });
    $routeProvider.when('/sql', {
        templateUrl: 'views/sql.html'
    });
    $routeProvider.when('/htmlDom', {
        templateUrl: 'views/htmlDom.html'
    });
    $routeProvider.when('/htmlEvents', {
        templateUrl: 'views/htmlEvents.html'
    });
    $routeProvider.when('/modules', {
        templateUrl: 'views/modules.html'
    });
    $routeProvider.when('/forms', {
        templateUrl: 'views/forms.html'
    });
    $routeProvider.when('/validation', {
        templateUrl: 'views/validation.html'
    });
    $routeProvider.when('/api', {
        templateUrl: 'views/api.html'
    });
    $routeProvider.when('/bootstrap', {
        templateUrl: 'views/bootstrap.html'
    });
    $routeProvider.when('/include', {
        templateUrl: 'views/include.html'
    });
    $routeProvider.when('/application', {
        templateUrl: 'views/application.html'
    });
}]);


