/**
 *
 * @Author zhangxin14
 * @Date   2015/12/4
 *
 */
'use strict';

describe('fliterControllerTest', function(){
    var scope;
    beforeEach(angular.mock.module('myApp'));
    beforeEach(angular.mock.inject(function($rootScope, $controller){
        scope = $rootScope.$new();
        $controller('validateCtrl',{$scope:scope});
    }));
    it('validation test',function(){
        expect(scope.user).toBe('John Doe');
    });
    it('validation test',function(){
        expect(scope.email).toBe('john.doe@gmail.com');
    });
    it('validation test',function(){
        expect(scope.text).toBe("这里是必填项");
    });
    it('validation test',function(){
        expect(scope.pattern).toBe("abc");
    });
});