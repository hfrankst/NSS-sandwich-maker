"use strict";
// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var veggiePrices = {
  	"Lettuce": .50,
  	"Cucumber": .75,
  	"Hummus": 1.25,
  	"Tomato": 1.00
  };

  // Augment the original object with another method
  maker.addVeggies = function(userIngredient) {
  	console.log("Price of your Veggie $", veggiePrices[userIngredient]);
    return veggiePrices[userIngredient];
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});