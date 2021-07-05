(function() {
'use strict';

angular.module('CounterApp',[])
.controller('CounterController',CounterController);

CounterController.$inject=['$scope','$timeout'];

function CounterController($scope,$timeout) {

    $scope.counter=0;
    $scope.name="manu";
    
    $scope.upCounter=function() {
        $timeout(function(){
                $scope.counter++;
                console.log("counter incremented");    
        },2000);
    };

    // $scope.upCounter=function() {
    //     setTimeout(function(){
    //         $scope.$apply(function () {
    //             $scope.counter++;
    //             console.log("counter incremented");
    //         });    
    //     },2000);
    // };
}


})();

// function CounterController($scope) {
//     //$scope.onceCounter=0;
//     $scope.counter=0;
//     $scope.name="manu";
//     //$scope.showNumberOfWatchers=function(){
//       //  console.log("# of watchers: ", $scope.$$watchersCount);
//     //};

//     // $scope.countOnce=function(){
//     //     $scope.onceCounter=1;
//     // };

//     $scope.upCounter=function() {
//         $scope.counter++;
//     };

//     // $scope.$watch(function() {
//     //     console.log("Digest Loop Fired!");
//     // })
//     // $scope.$watch('onceCounter',function(newValue,oldValue) {
//     //     console.log(" onceCounter old Value: ",oldValue);
//     //     console.log("onceCounter new Value: ",newValue);
//     // });

//     // $scope.$watch('counter',function(newValue,oldValue) {
//     //     console.log(" counter old Value: ",oldValue);
//     //     console.log("counter new Value: ",newValue);
//     // });
// }