'use strict';

describe('controllerDemoController', function(){
    var scope;
//���ǻ��ڲ�����ʹ�����scope


//ģ�����ǵ�Applicationģ�鲢ע�������Լ�������
    beforeEach(angular.mock.module('myApp'));

//ģ��Controller�����Ұ��� $rootScope �� $controller
    beforeEach(angular.mock.inject(function($rootScope, $controller){

//����һ���յ� scope
        scope = $rootScope.$new();

//���� Controller����ע���Ѵ����Ŀյ� scope
        $controller('controllerDemoController', {$scope: scope});
    }));
// ���Դ����￪ʼ
    it('should have variable text = "Hello World!"', function(){
        expect(scope.controllerName).toBe('World');
    });
});