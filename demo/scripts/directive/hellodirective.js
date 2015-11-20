/**
 *
 * @Author zhangxin14
 * @Date   2015/10/19
 *
 */
var controlModule = angular.module('directivecontroll', [])
    .controller('directivecontroller', function ($scope) {
        $scope.people = [
            {"name": "aaa", "city": "beijing"},
            {"name": "bbb", "city": "shanghai"}
        ];
        $scope.eqution = {};
        $scope.change = function () {
            $scope.eqution.output = parseInt($scope.eqution.x) + 2;
        };
    });
var directiveModule = angular.module('directivedemo', []);
directiveModule.directive('hello', function () {
    return {
        restrict: 'AECM',
        replace: 'true',
        scope:{
            url:'@',
            urlText:'@'
        },
        template:'<div>hello directive!</div>'
        //template:'<a ng-href="{{url}}">{{urlText}}</a>'
    };
});
directiveModule.directive('data', function () {
    return {
        restrict: 'AE',
        replace: 'true',
        scope: {
            insideurl: '=cusUrl',
            text: '@'
        },
        template: '<div>' + '<label>inside url:</label>' +
        '<input ng-model="insideurl"/>' +
        '<a href="https://{{insideurl}}" target="_blank">' + '{{text}}' + '</a>' +
        '</div>'
    };
});
directiveModule
    .controller('scopeController',function($scope){
        $scope.myData = 'hello scope!'
    })
    .directive('scopeusage',function(){
    return {
        restrict: 'AE',
        replace: 'true',
        scope:{
            myData:'@'
        },
        priority: 100,
        template:'<div>scopeusage directive:{{myData}}</div>'
        }
    })
    .directive('scope',function() {
        return {
            restrict: 'AE',
            replace: 'true',
            scope: true,
            priority: 100,
            template: '<div>scope directive:{{myData}}</div>'
        }
    });
