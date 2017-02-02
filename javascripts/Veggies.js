// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var veggiePrices = {
  	"lettuce": ".50",
  	"cucumber": ".75",
  	"hummus": "1.25",
  	"tomato": "1.00"
  };
  console.log("Veggie Options ", veggiePrices);

  // Augment the original object with another method
  // maker.addVeggies = function(userIngredient) {
  //   return ???;
  // };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});