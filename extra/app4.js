(function() {
    'use strict';
    var shoppingList1=[
        "Milk","donuts","chocholate","butter","bread"
    ];
    
    var shoppingList2=[
        {
            name:"milk",
            quantity:"2"
        },
        {
            name:"donuts",
            quantity:"20"
        },
        {
            name:"cookies",
            quantity:"12"
        },
        {
            name:"choclate",
            quantity:"200"
        },
        {
            name:"bread",
            quantity:"25"
        }
    ];
    angular.module('ShoppingListApp',[])
    .controller('ShoppingListController',ShoppingListController);

    ShoppingListController.$inject=['$scope'];
    function ShoppingListController($scope){
        $scope.shoppingList1=shoppingList1;
        $scope.shoppingList2=shoppingList2;

        $scope.addToList=function(){
            var newItem ={
                name: $scope.newItemName,
                quantity:$scope.newItemQuantity
            };
            $scope.shoppingList2.push(newItem);
        };
    }

    })();

    // (function() {
    //     'use strict';
    //     var shoppingList1=[
    //         "Milk","donuts","chocholate","butter","bread"
    //     ];
        
        
    //     angular.module('ShoppingListApp',[])
    //     .controller('ShoppingListController',ShoppingListController);
    
    //     ShoppingListController.$inject=['$scope'];
    //     function ShoppingListController($scope){
    //         $scope.shoppingList1=shoppingList1;
    //        // $scope.shoppingList2=shoppingList2;
    
           
    //     }
    
    //     })();