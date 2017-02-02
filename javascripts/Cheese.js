// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var cheesePrices = {
  	"sharp cheddar": "2.00",
  	"manchego": "2.25",
  	"feta": "3.00",
  	"swiss": "2.00" 
  };
  console.log("Cheese Options ", cheesePrices)

  // Augment the original object with another method
  // maker.addCheese = function(userIngredient) {
  //   return ???;
  // };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});