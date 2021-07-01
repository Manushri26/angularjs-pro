(function () 
{
    'use strict';
    angular.module('LunchCheck',[])
    .controller('LunchCheckController',LunchCheckController);
    Check.$inject=['$scope'];
    
    function LunchCheckController($scope)
    {
        $scope.name="";
        $scope.finalMsg="";
        $scope.Check=function(){
            

        let arrayOfStrings = $scope.name.split(',');
        var lengthOfString=arrayOfStrings.length;
        
        var c=0;
        for(var i=0;i<lengthOfString;i++)
        {
            if(arrayOfStrings[i]!=false)
            {
                c++;
            }
        }
        //$scope.lengtharr=c;
        if(c==0)
        {
            $scope.finalMsg="Please enter data first";
        }
        else if(lengthOfString>0&&lengthOfString<=3)
        {
            $scope.finalMsg="Enjoy!";
        }
        else
        {
            $scope.finalMsg="Too Much!";
        }
        
        };

        
        
    }
   
}
) ();
