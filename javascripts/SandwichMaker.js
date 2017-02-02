"use strict";

var SandwichMaker = (function() {

  // Private variable to store the price
  var totalPrice = 0;
  console.log("The total price is: ",totalPrice);

  // Return the public interface that other code can interact with
  return {
    addTopping: function(toppingPrice) {
      totalPrice += toppingPrice;
    }
  };

  //need a function to grab the total price in order to put it on the DOM via .innerHTML
})(SandwichMaker || {});