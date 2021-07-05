
    (function() {
        'use strict';
        
        angular.module('ShoppingListCheckOff',[])
        .controller('ToBuyController',ToBuyController)
        .controller('AlreadyBoughtController',AlreadyBoughtController)
        .service('ShoppingListCheckOffService',ShoppingListCheckOffService);
    
        ToBuyController.$inject=['ShoppingListCheckOffService'];
        function ToBuyController(ShoppingListCheckOffService){
    
    
            var ToBuy=this;
            
            ToBuy.itemName="";
            ToBuy.itemQuantity="";
    
            ToBuy.addItem=function() {
                try{
                    ShoppingListCheckOffService.addItem(ToBuy.itemName,ToBuy.itemQuantity);
                }
                catch(error){
                    ToBuy.errorMessage=error.message;
                }
                
            }
            ToBuy.removeItem=function(itemIndex) {
                ShoppingListCheckOffService.removeItem(itemIndex);
            };
        }
    
        AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
        function AlreadyBoughtController(ShoppingListCheckOffService){
            var AlreadyBought=this;
            
            AlreadyBought.itemName="";
            AlreadyBought.itemQuantity="";
    
            AlreadyBought.addItem=function() {
                try{
                    ShoppingListCheckOffService.addItem(AlreadyBought.itemName,AlreadyBought.itemQuantity);
                }
                catch(error){
                    AlreadyBought.errorMessage=error.message;
                }
                
            }
            AlreadyBought.removeItem=function(itemIndex) {
                ShoppingListCheckOffService.removeItem(itemIndex);
            };
        }
    
        function ShoppingListCheckOffService(maxItems){
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
        
    
    })();