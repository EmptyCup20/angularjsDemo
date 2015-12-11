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
        $controller('ExampleController',{$scope:scope});
    }));
    it('test the scope lastName varible', function(){
        expect(scope.master.firstName).toBe("John");
    });
    it('test the scope lastName varible', function(){
        expect(scope.master.lastName).toBe("Doe");
    });
    //it('form reset test',function(){

    //})
});