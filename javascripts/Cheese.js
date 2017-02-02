"use strict";
// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var cheesePrices = {
  	"Sharp Cheddar": 2.00,
  	"Manchego": 2.25,
  	"Feta": 3.00,
  	"Swiss": 2.00 
  };

  // Augment the original object with another method
  maker.addCheese = function(userIngredient) {
  console.log("Price of your Cheese $", cheesePrices[userIngredient]);
    return cheesePrices[userIngredient];
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});