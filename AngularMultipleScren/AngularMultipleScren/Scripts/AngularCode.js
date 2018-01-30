var app = angular.module("myApp", ['angularUtils.directives.dirPagination']);
app.controller("myCtrl", function ($scope, $http) {
    $scope.InsertData = function () {
        var Action = document.getElementById("btnSave").getAttribute("value");
        if (Action == "Submit") {
            $scope.Employe = {};
            $scope.Employe.Emp_Name = $scope.EmpName;
            $scope.Employe.Emp_City = $scope.EmpCity;
            $scope.Employe.Emp_Age = $scope.EmpAge;
            $http({
                method: "post",
                url: "/Home/Insert_Employee",
                datatype: "json",
                data: JSON.stringify($scope.Employe)
            }).then(function (response) {
                alert(response.data);

            })
        }
    }
    $scope.UpdateEmp = function (Emp) {
        $http({
            method: "post",
            url: "/Home/Update_Employee",
            datatype: "json",
            data: JSON.stringify(Emp)
        }).then(function (response) {
            alert(response);
            window.location.href = 'home/about';
        })


    }
    $scope.sort = function (keyname) {
        $scope.sortKey = keyname;   //set the sortKey to the param passed
        $scope.reverse = !$scope.reverse; //if true make it false and vice versa
    }
    $scope.PopulateData = function () {
        $http({
            method: "get",
            url: "/Home/PopulateData"
        }).then(function (response) {
            $scope.employees = response.data;
            $scope.EmpName = $scope.employees.Emp_Name;
        }, function () {

        })
    }

    $scope.GetAllData = function () {
        $http({
            method: "get",
            url: "/Home/Get_AllEmployee"
        }).then(function (response) {
            $scope.employees = response.data;
        }, function () {
            alert("Error Occur");
        })
    };
})