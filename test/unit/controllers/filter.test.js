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
        $controller('costCtrl',{$scope:scope});
    }));
    it('test the scope lastName varible', function(){
        expect(scope.quantity).toBe(1);
    });
    it('test the scope lastName varible', function(){
        expect(scope.price).toBe(5);
    });
});