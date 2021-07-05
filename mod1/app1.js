(function () 
{
    'use strict';
    angular.module('MsgApp',[])
    .controller('MsgController',MsgController)
    .filter('love',LovesFilter)
    .filter('truth',TruthFilter);
    MsgController.$inject=['$scope','loveFilter'];
    
    function MsgController($scope,loveFilter)
    {
    
        $scope.name="Manushri";
        
        $scope.stateOfBeing="1";
        $scope.cookieCost=5;
        
       $scope.sayMessage=function(){
           var msg="i like to see flowers";
           return msg;
       };

       $scope.sayLovesMessage=function(){
            var msg="i like to see flowers";
            msg=loveFilter(msg);
            return msg;
        };

       $scope.feedME=function() {
           $scope.stateOfBeing="2";
       };
  
    }
    function LovesFilter(){
        return function(input){
            input=input || "";
            input=input.replace("like","love");
            return input;
        };
    }

    function TruthFilter(){
        return function(input,target,replace){
            input=input || "";
            input=input.replace(target,replace);
            return input;
        };
    }
   
}) ();
