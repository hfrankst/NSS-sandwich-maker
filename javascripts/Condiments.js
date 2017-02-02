// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var condimentPrices = {
  	"spicy mustard": ".75",
  	"mayo": ".25",
  	"red pepper relish": ".89",
  	"siracha": ".75"
  };
  console.log("Condiment Options ", condimentPrices);
  
  // Augment the original object with another method
  // maker.addCondiments = function(userIngredient) {
  //   return ???;
  // };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});