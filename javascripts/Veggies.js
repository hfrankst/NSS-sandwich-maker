// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var veggiePrices;

  // Augment the original object with another method
  maker.addVeggies = function(userIngredient) {
    return ???;
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});