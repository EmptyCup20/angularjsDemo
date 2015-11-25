/**
 * Created by xiangxiao3 on 2015/10/9.
 */
var myApp = angular.module('myApp', [
    'ngRoute',
    'controllers',
    'introduce',
    'expressions',
    'directivesCtrl',
    'filters',
    'http',
    'htmlEvents',
    'myEx',
    'validation',
    'api',
    'myNoteApp'
]).run(function ($rootScope) {
    $rootScope.name = "World";
});


myApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/tutorial.html'
    })
    .when('/introduce', {
        templateUrl: 'views/introduce.html'
    })
    .when('/expressions', {
        templateUrl: 'views/expressions.html'
    })
    .when('/controllers', {
        templateUrl: 'views/controller.html'
    })
    .when('/scope', {
        templateUrl: 'views/scope.html'
    })
    .when('/route', {
        templateUrl: 'views/route.html',
        controller: 'routeCtrl'
    })
    .when('/filters', {
        templateUrl: 'views/filters.html'
    })
    .when('/directives', {
        templateUrl: 'views/directives.html'
    })
    .when('/diydirective', {
        templateUrl: 'views/diydirective.html'
    })
    .when('/http', {
        templateUrl: 'views/http.html'
    })
    .when('/tables', {
        templateUrl: 'views/tables.html'
    })
    .when('/sql', {
        templateUrl: 'views/sql.html'
    })
    .when('/htmlDom', {
        templateUrl: 'views/htmlDom.html'
    })
    .when('/htmlEvents', {
        templateUrl: 'views/htmlEvents.html'
    })
    .when('/modules', {
        templateUrl: 'views/modules.html'
    })
    .when('/forms', {
        templateUrl: 'views/forms.html'
    })
    .when('/validation', {
        templateUrl: 'views/validation.html'
    })
    .when('/api', {
        templateUrl: 'views/api.html'
    })
    .when('/bootstrap', {
        templateUrl: 'views/bootstrap.html'
    })
    .when('/include', {
        templateUrl: 'views/include.html'
    })
    .when('/application', {
        templateUrl: 'views/application.html'
    });
    //.otherwise({redirectTo: '/'});
}]);
