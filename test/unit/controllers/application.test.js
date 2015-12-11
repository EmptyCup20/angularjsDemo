/**
 *
 * @Author zhangxin14
 * @Date   2015/12/4
 *
 */
'use strict';
describe('applicationTest',function(){
    var scope;
    beforeEach(angular.mock.module('myApp'));
    beforeEach(angular.mock.inject(function($rootScope,$controller){
        scope = $rootScope.$new();
        $controller('myNoteCtrl',{$scope:scope});
    }));
    it('myNoteApp',function(){
        expect(scope.message).toBe("");
    });
    it('myNoteApp',function(){
        expect(scope.left()).toBe(100);
    });
    it('myNoteApp',function(){
        scope.message = 'dsafdsaf';
        scope.clear();
        expect(scope.message).toBe('');
    });
});