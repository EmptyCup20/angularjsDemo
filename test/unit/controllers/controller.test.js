'use strict';

describe('controllerTest', function(){
    var scope;
//我们会在测试中使用这个scope

//模拟我们的Application模块并注入我们自己的依赖
    beforeEach(angular.mock.module('myApp'));

//模拟Controller，并且包含 $rootScope 和 $controller
    beforeEach(angular.mock.inject(function($rootScope, $controller){

//创建一个空的 scope
        scope = $rootScope.$new();

//声明 Controller并且注入已创建的空的 scope
        $controller('namesCtrl', {$scope: scope});
        $controller('myCtrl', {$scope: scope});
        $controller('personCtrl', {$scope: scope});
    }));
// 测试从这里开始
    it('test the scope firstName varible', function(){
        expect(scope.firstName).toBe('John');
    });
    it('test the scope lastName varible', function(){
        expect(scope.lastName).toBe('Doe');
    });
    it('test the scope lastName varible', function(){
        expect(scope.fullName()).toBe('John Doe');
    });
    it('test the scope names varible', function(){
        expect(scope.names[0].name).toBe('Jani');
    });
    it('test the scope names varible', function(){
        expect(scope.names[0].country).toBe('Norway');
    });
    it('test the scope names varible', function(){
        expect(scope.names[1].name).toBe('Hege');
    });
    it('test the scope names varible', function(){
        expect(scope.names[1].country).toBe('Sweden');
    });
    it('test the scope names varible', function(){
        expect(scope.names[2].name).toBe('Kai');
    });
    it('test the scope names varible', function(){
        expect(scope.names[2].country).toBe('Denmark');
    });

});