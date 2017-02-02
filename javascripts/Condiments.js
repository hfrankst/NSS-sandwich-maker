"use strict";
// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var condimentPrices = {
  	"Spicy Mustard": .75,
  	"Mayo": .25,
  	"Red Pepper Relish": .89,
  	"Siracha": .75
  };

  // Augment the original object with another method
  maker.addCondiments = function(userIngredient) {
  	console.log("Price of your Condiment $", condimentPrices[userIngredient]);
    return condimentPrices[userIngredient];
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});