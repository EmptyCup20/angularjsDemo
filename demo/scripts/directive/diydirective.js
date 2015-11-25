/**
 *
 * @Author zhangxin14
 * @Date   2015/11/24
 *
 */
var diydirective = angular.module('diydirective',[])
.directive('my-directive',function(){
        return{
            restrict:'A',
            scope:true
        }
    }).directive('onedirective', function() {
        return {
            restrict: 'A',
            scope: {},
            priority: 100,
            template: '<div>Inside myDirective {{ myProperty }}</div>'
        };
    });