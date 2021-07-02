(function () 
{
    'use strict';
    angular.module('MsgApp',[])
    .controller('MsgController',MsgController)
    .filter('love',LovesFilter);
    MsgController.$inject=['$scope','lovesFilter'];
    
    function MsgController($scope,lovesFilter)
    {
    
        $scope.stateOfBeing="1";
        
       $scope.sayMessage=function(){
           var msg="i like to see flowers";
           return msg;
       };

       $scope.sayLovesMessage=function(){
            var msg="i like to see flowers";
            msg=lovesFilter(msg);
            return msg;
        };

       $scope.feedME=function() {
           $scope.stateOfBeing="2";
       };
  
    }
    function LovesFilter(){
        return function(input){
            input=input||"";
            input=input.replace("like","love");
            return input;
        };
    }
   
}
) ();
