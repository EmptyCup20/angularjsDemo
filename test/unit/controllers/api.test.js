/**
 *
 * @Author zhangxin14
 * @Date   2015/12/4
 *
 */
'use strict';
describe('apiControllerTest',function(){
    var scope;
    beforeEach(angular.mock.module('myApp'));
    beforeEach(angular.mock.inject(function($rootScope,$controller){
        scope = $rootScope.$new();
        $controller('lowercaseCtrl',{$scope:scope});
        $controller('uppercaseCtrl',{$scope:scope});
        $controller('isStringCtrl',{$scope:scope});
        $controller('isNumberCtrl',{$scope:scope});
    }));
    it('lowercaseCtrl_1',function(){
        expect(scope.x1).toBe('JOHN');
    });
    it('lowercaseCtrl_2',function(){
        var x2 = angular.lowercase(scope.x1);
        expect(x2).toBe('john');
    });
    it('uppercaseCtrl_1',function(){
        expect(scope.x1).toBe('JOHN');
    });
    it('uppercaseCtrl_2',function(){
        var x2 = angular.uppercase(scope.x1);
        expect(x2).toBe('JOHN');
    });
    it('isStringCtrl_1',function(){
        expect(scope.x1).toBe('JOHN');
    });
    it('isStringCtrl_2',function(){
        var x2 = angular.isString(scope.x1);
        expect(x2).toBeTruthy();
    });
    it('isNumberCtrl_1',function(){
        expect(scope.x1).toBe('JOHN');
    });
    it('isNumberCtrl_2',function(){
        var x2 = angular.isNumber(scope.x1);
        expect(x2).not.toBeTruthy();
    });
});