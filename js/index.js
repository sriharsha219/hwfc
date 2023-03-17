var myapp = angular.module("AngularJSApp",[])
myapp.controller("UserRegistration", function($scope,$http){
$scope.CreateUser = function () {
if($scope.pwd == $scope.confirmpwd){
           var dataObj = {
				FirstName: $scope.fname,
                LastName: $scope.lname,
				EmailId: $scope.emailid,
				Password: $scope.pwd
		};	
		var res = $http.post('https://kz70q4twvf.execute-api.us-east-2.amazonaws.com/POSTStage/dynamoaccess', dataObj);
		res.then(function(response) {
			alert(response.data);
			$scope.fname="";
			$scope.lname="";
			$scope.emailid="";
			$scope.pwd="";
			$scope.confirmpwd="";
		});	            
     }
	 else{
	 alert("Passwords don't match..!");
	 $scope.pwd="";
	 $scope.confirmpwd="";
	 }
  }
});
//
// script for User Logincheck
myapp.controller("UserLogin", function($scope,$http){
$scope.Login = function () {
        
        if(($scope.emailid = null ) || ($scope.pwd = null)){ 
           alert('Please enter your emailid and password');
           }
		var res = $http.get('https://74we3x1wr9.execute-api.us-east-2.amazonaws.com/GETStage/dynamoread?EmailId='+$scope.emailid);
		res.then(function(response) {
			var resdata = response.data;
			if((resdata.EmailId == $scope.emailid ) && (resdata.Password == $scope.pwd)){
			window.open ('welcome.html','_self');					 
						} else {
						alert('Invalid Credentials');
						$scope.emailid="";
						$scope.pwd="";
						}	
		});	            
   }
});
