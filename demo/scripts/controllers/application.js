/**
 *
 * @Author zhangxin14
 * @Date   2015/11/23
 *
 */
var app = angular.module("myNoteApp", []);
app.controller("myNoteCtrl", function($scope) {
    $scope.message = "";
    $scope.left  = function() {return 100 - $scope.message.length;};
    $scope.clear = function() {$scope.message = "";};
    $scope.save  = function() {alert("Note Saved");};
});