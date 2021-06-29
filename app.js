(function () 
{
    'use strict';
    angular.module('myFirstApp',[])
    .controller('MyFirstController', function($scope)
    {
        $scope.name="Manushri";
        $scope.sayHello=function()
        {
            return "hello manushri";
        };
    });
}

) ();