// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var breadPrices = {
  	"sourdough": "4.00",
  	"marbled rye": "3.50",
  	"5 grain": "3.00",
  	"french baguette": "5.00"
  };
  console.log("Bread Options ", breadPrices);

  // Augment the original object with another method
  // maker.addBread = function(userIngredient) {
  //   return ???;
  // };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});