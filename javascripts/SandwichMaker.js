"use strict";

var SandwichMaker = (function() {

  // Private variable to store the price
  var totalPrice = 0;
  console.log("The total price is: ",totalPrice);

  // Return the public interface that other code can interact with
  return {
    addTopping: function(toppingPrice) {
      totalPrice += toppingPrice;
      console.log("Your price is ", totalPrice);
      return totalPrice;
    }
  };

})(SandwichMaker || {});