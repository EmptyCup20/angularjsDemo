/**
 *
 * @Author zhangxin14
 * @Date   2015/10/19
 *
 */
var controlModule = angular.module('directivecontroll',[])
    .controller('directivecontroller',function($scope){
        $scope.people = [
            {"name":"aaa","city":"beijing"},
            {"name":"bbb","city":"shanghai"}
        ];
        $scope.eqution={};
        $scope.change = function(){
            $scope.eqution.output = parseInt($scope.eqution.x)+2;
        }
    });
var directiveModule = angular.module('directivedemo',[]);
directiveModule.directive('hello',function(){
    return {
        restrict: 'AECM',
        replace:'true',
        template: '<div>hello directive!</div>'
    };
});
directiveModule.directive('data',function(){
    return {
        restrict: 'AE',
        replace:'true',
        scope:{
            insideurl:'=cusUrl',
            text:'@'
        },
        template: '<div>'+'<label>inside url:</label>'+
                  '<input ng-model="insideurl"/>'+
                  '<a href="https://{{insideurl}}" target="_blank">'+'{{text}}'+'</a>'+
            '</div>'
    };
});
