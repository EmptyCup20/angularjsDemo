/**
 *
 * @Author zhangxin14
 * @Date   2015/11/23
 *
 */
var app = angular.module("myNoteApp", []).controller("EmployeeCtrl", ["$scope", function ($scope) {
    $scope.editing = false;

    $scope.employees = window.localStorage.selectedEmployee ?  JSON.parse(window.localStorage.selectedEmployee) : [];
    $scope.selectedEmployee = null;
    $scope.editingEmployee = {};

    $scope.provinceArr = ["江苏", "云南"];
    $scope.cityArr = [];
    $scope.countyArr = [];

    $scope.formatGender = function (gender) {
        if (gender == 0)
            return "女";

        if (gender == 1)
            return "男";
    };

    $scope.$watch("selectedEmployee", function (employee) {
        $scope.editingEmployee = employee || {};
    });

    $scope.$watch("editingEmployee.province", function (province) {
        // 真正有用的代码在这里，实际场景中这里可以是调用后端服务查询的关联数据
        switch (province) {
            case "江苏":
            {
                $scope.cityArr = ["南京", "苏州"];
                break;
            }
            case "云南":
            {
                $scope.cityArr = ["昆明", "丽江"];
                break;
            }
        }
    });

    $scope.selectEmployee = function (employee) {
        $scope.selectedEmployee = employee;
    };

    $scope.create = function () {
        $scope.state = "New";
        $scope.editing = true;

        $scope.editingEmployee = {};
    };

    $scope.modify = function () {
        $scope.state = "Modify";
        $scope.editing = true;

        $scope.editingEmployee = angular.extend({}, $scope.selectedEmployee);
    };

    $scope.remove = function () {
        if (confirm("确认删除此员工吗？")) {
            for (var i = 0; i < $scope.employees.length; i++) {
                if ($scope.employees[i] == $scope.selectedEmployee) {
                    $scope.employees.splice(i, 1);
                    $scope.selectedEmployee = null;
                    break;
                }
            }
        }
    };

    $scope.ok = function () {
        if ($scope.state === "New") {
            $scope.employees.push($scope.editingEmployee);
            $scope.selectedEmployee = $scope.editingEmployee;
        }
        else if ($scope.state === "Modify") {
            $scope.selectedEmployee = angular.extend($scope.selectedEmployee, $scope.editingEmployee);
        }
        $scope.state = "View";
        $scope.editing = false;
        window.localStorage.selectedEmployee = angular.toJson($scope.employees);
    };

    $scope.cancel = function () {
        $scope.state = "View";
        $scope.editing = false;

        $scope.editingEmployee = $scope.selectedEmployee;
    };

    $scope.okDisabled = function () {
        if ($scope.editing && ($scope.editingEmployee.name) && ($scope.editingEmployee.name.length >= 5)) {
            return false;
        }
        else {
            return true;
        }
    };
}]);
