
var app = angular.module('formExample', []);


app.controller("formCtrl", ['$scope', '$http', function($scope, $http) {
        $scope.url = 'http://localhost:4300/custSearch';

        $scope.formsubmit = function(isValid) {


            if (isValid) {
              

                $http.post($scope.url, {"name": $scope.name, "email": $scope.email, "message": $scope.message}).
                        success(function(data, status) {
                            console.log(data);
							console.log("ok"+status);
                            $scope.status = status;
                            $scope.data = data;
                            $scope.companies = data; // Show result from server in our <pre></pre> element
                        })
            }else{
                
                  alert('Form is not valid');
            }


        }




    }]);
