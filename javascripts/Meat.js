// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var meatPrices = {
  	"turkey": "3.00",
  	"roast beef": "4.00",
  	"buffalo chicken": "2.50",
  	"honey ham": "3.50"
  };
  console.log("Meat Options ", meatPrices);

  // Augment the original object with another method
  // maker.addMeat = function(userIngredient) {
  //   return ???;
  // };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});