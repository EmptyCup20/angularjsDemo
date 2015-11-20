/**
 *
 * @Author zhangxin14
 * @Date   2015/10/19
 *
 */

/*directive('', ['', function(){
    Runs during compile
    return {
        name: '',
        priority: 1,
        terminal: true,
        scope: {}, // {} = isolate, true = child, false/undefined = no change
        controller: function($scope, $element, $attrs, $transclude) {},
        require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
        restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
        template: '',
        templateUrl: '',
        replace: true,
        transclude: true,
        compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
        link: function($scope, iElm, iAttrs, controller) {
            
        }
    };
}]);*/

var controlModule = angular.module('directivecontroll', [])
    .controller('directivecontroller', function ($scope) {
        $scope.people = [{
            "name": "aaa",
            "city": "beijing"
        }, {
            "name": "bbb",
            "city": "shanghai"
        }];
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
        scope: {
            url: '@',
            urlText: '@'
        },
        template: '<div>hello directive!</div>'
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
        '<input ng-model="insideurl" placeholder="与上面进行了数据绑定"/>' +
        '<a href="https://{{insideurl}}" target="_blank">' + '{{text}}' + '</a>' +
        '</div>'
    };
});
directiveModule
    .controller('scopeController', function ($scope) {
        $scope.myData = 'hello scope!';
    })
    .directive('scopeusage', function () {
        return {
            restrict: 'AE',
            replace: 'true',
            scope: {
                myData: '@'
            },
            priority: 100,
            template: '<div>scopeusage directive:{{myData}}</div>'
        };
    })
    .directive('scope', function () {
        return {
            restrict: 'AE',
            replace: 'true',
            scope: true,
            priority: 100,
            template: '<div>scope directive:{{myData}}</div>'
        };
    });
directiveModule
    .directive('pane', function () {
        return {
            restrict: 'EA',
            transclude: true,
            scope: {
                title: '@'
            },
            template: '<div style="border: 1px solid black;">' +
            '<div style="background-color: gray">{{title}}</div>' +
            '<ng-transclude></ng-transclude>' +
            '</div>'
        };
    })
    .controller('ExampleController', ['$scope', function ($scope) {
        $scope.title = '标题';
        $scope.text = '可以修改标题和内容，并实时显示在下面';
    }])
    .directive('coll', function () {
        return {
            restrict: 'AE',
            replace: true,
            controller: function ($scope, $element, $attrs, $transclude) {
                console.log($scope);
                console.log($element);
                console.log($attrs);
                console.log($transclude);
                $scope.showParma = function () {
                    alert('$scope:' + $scope);
                    alert('$element:' + $element);
                    alert('$attrs:' + $attrs);
                    alert('$transclude:' + $transclude);
                }
            }
        };
    });

directiveModule.directive('tabshow', function () {
    return {
        restrict: 'AE',
        replace: true,
        transclude:true,
        scope:{
            title:'@myTitle'
        },
        template:'<div>' +
                    '<div ng-click="toggle()" class="header">{{title}}</div>' +
                    '<div ng-transclude ng-show="showMe" class="content"></div>' +
                 '</div>',
        link:function(scope,element,attrs){
            scope.showMe = true;
            scope.toggle = function(){
                scope.showMe = !scope.showMe;
            };
            console.log(scope);
            console.log(element);
            console.log(attrs);
        }
    }
}).controller('tabShowDemo', function ($scope) {
    $scope.title = '这是标题';
    $scope.content = '点击标题显示或者隐藏';
    console.log($scope);
});