/**
 *
 * @Author zhangxin14
 * @Date   2015/10/19
 *
 */
var directiveModule = angular.module('directivedemo',[]);
directiveModule.directive('hello',function(){
    return {
        restrict: 'AECM',
        replace:'true',
        template: '<div>hello directive!</div>'
    };
});