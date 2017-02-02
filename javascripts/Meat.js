"use strict";
// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var meatPrices = {
  	"Turkey": 3.00,
  	"Roast Beef": 4.00,
  	"Buffalo Chicken": 2.50,
  	"Honey Ham": 3.50
  };

  // Augment the original object with another method
  maker.addMeat = function(userIngredient) {
  	console.log("Price of your meat $", meatPrices[userIngredient]);
    return meatPrices[userIngredient];
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});