(function () 
{
    'use strict';
    angular.module('LunchCheck',[])
    .controller('LunchCheckController', function($scope)
    {
        $scope.name="";
        $scope.finalMsg="";
        $scope.displayMsg=function(){
            var ansMsg=Check($scope.name);
            $scope.finalMsg=ansMsg;
        };
    function Check(string)
    {
        var ansMsg="";
        if(string=="")
        {
            ansMsg="Please enter data first";
            return ansMsg;
        }
        const arrayOfStrings = string.split(',');
        var lengthOfString=arrayOfStrings.length;
        if(lengthOfString<=3)
        {
            ansMsg="Enjoy!";
        }
        else 
        {
            ansMsg="Too Much!";
        }
        return ansMsg;
    }

});
   
}
) ();
