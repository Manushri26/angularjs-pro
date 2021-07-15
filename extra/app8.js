(function() {
    'use strict';
    
    angular.module('ShoppingListApp',[])
    .controller('ShoppingListController1',ShoppingListController1)
    //.controller('ShoppingListController2',ShoppingListController2)
    .provider('ShoppingListService',ShoppingListServiceProvider)
    .config(Config);

    Config.$inject=['ShoppingListServiceProvider'];
    function Config(ShoppingListServiceProvider) {
        ShoppingListServiceProvider.defaults.maxItems=2;
    }

    ShoppingListController1.$inject=['ShoppingListService'];
    function ShoppingListController1(ShoppingListService){
        var list1=this;
        list1.items=ShoppingListService.getItems();
        
        list1.itemName="";
        list1.itemQuantity="";

        list1.addItem=function() {
            try{
                ShoppingListService.addItem(list1.itemName,list1.itemQuantity);
            }
            catch(error) {
                list1.errorMessage=error.message;
            }
        }
        list1.removeItem=function(itemIndex) {
            ShoppingListService.removeItem(itemIndex);
        };
    }


    function ShoppingListService(maxItems){
        var service=this;
        var items=[];

        service.addItem=function(itemName,quantity) {
            
            if((maxItems===undefined)||(maxItems!==undefined)&&(items.length<maxItems)) {
                var item={
                    name:itemName,
                    quantity:quantity
                };
                items.push(item);
            }
            else {
                throw new Error("max items("+maxItems+") reached.");
            }
            
        };
        service.getItems=function() {
            return items;
        }
        service.removeItem=function(itemIndex){
            items.splice(itemIndex,1);

        }
    }
    function ShoppingListServiceProvider() {
        var provider=this;
        provider.defaults={
            maxItems:10
        };

        provider.$get=function() {
            var shoppingList=new ShoppingListService(provider.defaults.maxItems);
            return shoppingList;
        };
    }

    })();