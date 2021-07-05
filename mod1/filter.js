var numberArray =[1,2,3,4,5,6,7,8,9,10];
console.log("Number array:", numberArray);

function above5(value){
    return value>5;
}
var filteredNumberArray=numberArray.filter(above5);
console.log("filtered array: ",filteredNumberArray);

var shoppingList1=[
    "Milk","donuts","chocholate cookie","butter cookie","bread"
];
console.log("Shopping list:",shoppingList1);

var searchValue="cookie";
function containsFilter(value){
    return value.indexOf(searchValue)!==-1;
}

var searchedShoppingList = shoppingList1.filter(containsFilter);
console.log("Searched Shopping List: ", searchedShoppingList);