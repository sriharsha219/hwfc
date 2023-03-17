// script for Grade Calculator
var myapp = angular.module("WelcomeApp",[])
myapp.controller("PageControl", function($scope){

$scope.Calculator=function(){
var total=300;
$scope.gradeletter='';
var sum = $scope.score1+$scope.score2+$scope.score3;
var percentage = (sum / total)*100;
		if((percentage<=100) && (percentage >=90)){
		   $scope.gradeletter='A'
		}
		if((percentage<=90) && (percentage >=80)){
		   $scope.gradeletter='B'
		}
		if((percentage<=80) && (percentage >=70)){
		   $scope.gradeletter='C'
		}
		if((percentage<=70) && (percentage >=60)){
		   $scope.gradeletter='D'
		}
		if((percentage<=60) && (percentage >=50)){
		   $scope.gradeletter='E'
		}
		if(percentage<=50){
		   $scope.gradeletter='F'
		}
		};	            
//
$scope.Reset = function(){
$scope.score1='';
$scope.score2='';
$scope.score3='';
$scope.gradeletter='';
};
	
});
