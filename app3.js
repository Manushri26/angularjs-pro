(function() {
    'use strict';
    
    angular.module('BindingApp',[])
    .controller('BindingController',BindingController);
    
    BindingController.$inject=['$scope'];
    
    function BindingController($scope) {
    
        $scope.firstName="Manushri";
        //$scope.fullName="";
        
        $scope.showNumberOfWatchers=function() {
            console.log("# of watchers",$scope.$$watchersCount);    
        };

        $scope.setFullName=function() {
            $scope.fullName=$scope.firstName+" "+"Jain";
        };
        
        $scope.logFirstName=function() {
           console.log("first name is: ", $scope.firstName);
        };

        $scope.logFullName=function() {
            console.log("full name is: ", $scope.fullName);
        };
    }
    
    
    })();