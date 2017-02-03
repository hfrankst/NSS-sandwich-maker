"use strict";

var SandwichMaker = (function() {

  // Private variable to store the price
  var totalPrice = 0;
  console.log("Starting total price is: ",totalPrice);

  // Return the public interface that other code can interact with
  return {
    addTopping: function(toppingPrice) {
      totalPrice = totalPrice + toppingPrice;
      console.log("Sandwich price is ", totalPrice);
      return totalPrice;
    }
  };

})(SandwichMaker || {});