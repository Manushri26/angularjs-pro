(function() {
    'use strict';
    
    angular.module('App',[])
    .controller('ShoppingListController',ShoppingListController)
    .service('ShoppingListService',ShoppingListService)
    .service('WeightLossFilterService',WeightLossFilterService);

    ShoppingListController.$inject=['ShoppingListService'];
    function ShoppingListController(ShoppingListService){
        var list=this;

        list.items=ShoppingListService.getItems();
        list.itemName="";
        list.itemQuantity="";

        list.addItem=function() {
            ShoppingListService.addItem(list.itemName,list.itemQuantity);
        }
        list.removeItem=function(itemIndex) {
            ShoppingListService.removeItem(itemIndex);
        };
    }

    ShoppingListService.$inject=['$q','WeightLossFilterService']
    function ShoppingListService($q,WeightLossFilterService){
        var service=this;
        var items=[];

        // service.addItem=function(itemName,quantity) {
            
        //     var promise=WeightLossFilterService.checkName(itemName);
            
        //     promise.then(function(response){
        //         var nextPromise=WeightLossFilterService.checkQuantity(quantity);

        //         nextPromise.then(function (result){

        //             var item={
        //                 name:itemName,
        //                 quantity:quantity
        //             };
        //             items.push(item);
               
        //         }, function(errorResponse){
        //             console.log(errorResponse.message);
        //         });
        //     }, function (errorResponse){
        //         console.log(errorResponse.message);
        //     });
            
            
        // };

    //     service.addItem=function(itemName,quantity) {
            
    //         var promise=WeightLossFilterService.checkName(itemName);
                
    //         promise
    //         .then(function(response){
    //             return WeightLossFilterService.checkQuantity(quantity);
    //         })
    //         .then(function (result){
    //             var item={
    //             name:itemName,
    //             quantity:quantity
    //         };
    //             items.push(item);
    //     })
    //         .catch (function(errorResponse){
    //             console.log(errorResponse.message);
    //       });
    // };

    service.addItem=function(itemName,quantity) {
        var namepromise=WeightLossFilterService.checkName(itemName);
        var  quantitypromise=WeightLossFilterService.checkQuantity(quantity);
                
        $q.all([namepromise,quantitypromise])
                .then(function (result){
                    var item={
                    name:itemName,
                    quantity:quantity
                };
                    items.push(item);
            })
                .catch (function(errorResponse){
                    console.log(errorResponse.message);
              });
        };

        service.getItems=function() {
            return items;
        };
        service.removeItem=function(itemIndex){
            items.splice(itemIndex,1);

        };
    }



    WeightLossFilterService.$inject=['$q','$timeout']
    function WeightLossFilterService($q,$timeout){
        var service=this;

    service.checkName=function (itemName) {
        var deferred=$q.defer();

        var result={
            message: ""
        };

        $timeout(function(){
            if(itemName.toLowerCase().indexOf('cookie')===-1){
                deferred.resolve(result);
            }
            else{
                result.message="Stay away from cookies, Manushri";
                deferred.reject(result);
            }
        },3000);
        return deferred.promise;
    };

    service.checkQuantity=function(quantity)
    {
        var deferred=$q.defer();

        var result={
            message: ""
        };
        $timeout(function(){
            if(quantity<6){
                deferred.resolve(result);
            }
            else{
                result.message="this is extra, Manushri";
                deferred.reject(result);
            }
        },1000);
        return deferred.promise;
    };
    }

    })();