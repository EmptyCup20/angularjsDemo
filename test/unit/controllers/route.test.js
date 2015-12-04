/**
 *
 * @Author zhangxin14
 * @Date   2015/12/4
 *
 */
describe('route test', function() {
    
    beforeEach(module('myApp'));
    
    var location, route, rootScope;
    
    beforeEach(inject(
        function(_$location_, _$route_, _$rootScope_) {
        location = _$location_;
        route = _$route_;
        rootScope = _$rootScope_;}
    ));
    describe('index route', function() {
        beforeEach(inject(
            function($httpBackend) {
                $httpBackend.expectGET('views/introduce.html').respond(200, 'main html');
            }
        ));
        it('first page', function() {
            location.path('/');
            rootScope.$digest();
            expect(root.current.controller).toBe('myCtrl');
        });
    });
});
