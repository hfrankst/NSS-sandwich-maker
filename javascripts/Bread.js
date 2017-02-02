"use strict";
// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var breadPrices = {
  	"Sourdough": 4.00,
  	"Marbled Rye": 3.50,
  	"5 Grain": 3.00,
  	"French Baguette": 5.00
  };

  // Augment the original object with another method
  maker.addBread = function(userIngredient) {
	  console.log("Price of your Bread $", breadPrices[userIngredient]);
    return breadPrices[userIngredient];
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});