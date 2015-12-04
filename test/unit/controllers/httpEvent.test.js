/**
 *
 * @Author zhangxin14
 * @Date   2015/12/4
 *
 */
'use strict';

/*describe('fliterControllerTest', function(){
 var scope;
 beforeEach(angular.mock.module('myApp'));
 beforeEach(angular.mock.inject(function($rootScope, $controller){
 scope = $rootScope.$new();
 $controller('personCtrl_1',{$scope:scope});
 $controller('personCtrl_2',{$scope:scope});
 }));
 it('test the scope lastName varible', function(){
 expect(scope.firstName).toBe("John");
 });
 it('test the scope lastName varible', function(){
 expect(scope.lastName).toBe("Doe");
 });
 //it('test the scope lastName varible', function(){
 //    expect(scope.myVar).toBeFalsy();
 //});
 it('test the scope lastName varible', function(){
 expect(scope.myVar).toBeTruthy();
 });
 });*/

describe('fliterControllerTest', function () {
    var scope;
    beforeEach(angular.mock.module('myApp'));
    describe('personCtrl_1', function () {
        beforeEach(angular.mock.inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            $controller('personCtrl_1', {
                $scope: scope
            });
        }));
        it('test the scope lastName varible', function () {
            expect(scope.firstName).toBe("John");
        });
        it('test the scope lastName varible', function () {
            expect(scope.lastName).toBe("Doe");
        });
        it('test the scope lastName varible', function () {
            expect(scope.myVar).toBeFalsy();
        });
    });
    describe('personCtrl_1', function () {
        beforeEach(angular.mock.inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            $controller('personCtrl_2', {
                $scope: scope
            });
        }));
        it('test the scope lastName varible', function () {
            expect(scope.firstName).toBe("John");
        });
        it('test the scope lastName varible', function () {
            expect(scope.lastName).toBe("Doe");
        });
        it('test the scope lastName varible', function () {
            expect(scope.myVar).toBeTruthy();
        });
    });
});