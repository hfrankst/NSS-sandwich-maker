"use strict";
// Variable to hold the final price. Default to 0.
var finalSandwichPrice = 0;

// Variable to hold topping that the user selects
var selectedTopping;

// variables to grab the <select> elements for each of the sammie components
var breadChooser = document.getElementById("bread-chooser");
var meatChooser = document.getElementById("meat-chooser");
var cheeseChooser = document.getElementById("cheese-chooser");
var condimentChooser = document.getElementById("condiment-chooser");
var veggieChooser = document.getElementById("veggie-chooser");
var sammiePrice = document.getElementById("finishedSammie");
console.log(breadChooser);
console.log(meatChooser);
console.log(cheeseChooser);
console.log(condimentChooser);
console.log(veggieChooser);
/* 
  A <select> element broadcasts a change event, so you listen for it
  and get the value of the topping from your augmented IIFE
*/

///////Event Listeners for each of the sammie components

/////////////////BREAD/////////////////////
breadChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;
	console.log("Your bread choice: ", selectedTopping);

  // Determine the price of the topping chosen. Get the value of the 'bread' key.
  SandwichMaker.addBread(selectedTopping); 

  // Add the topping to the SandwichMaker to increase the total price
  SandwichMaker.addTopping(selectedTopping + finalSandwichPrice);
  console.log("Price after bread: ", selectedTopping.value);
});

//////////////////MEAT////////////////////
meatChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;
	console.log("Your meat choice: ", selectedTopping);

  // Determine the price of the topping chosen
  SandwichMaker.addMeat(selectedTopping);
  // Add the topping to the SandwichMaker to increase the total price
    SandwichMaker.addTopping(selectedTopping + finalSandwichPrice);

});

///////////////////CHEESE////////////////////
cheeseChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;
	console.log("Your cheese choice: ", selectedTopping);

  // Determine the price of the topping chosen
  SandwichMaker.addCheese(selectedTopping);
  // Add the topping to the SandwichMaker to increase the total price
});

///////////////////CONDIMENTS////////////////////
condimentChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;
	console.log("Your condiment choice: ", selectedTopping);

  // Determine the price of the topping chosen
  SandwichMaker.addCondiments(selectedTopping);
  // Add the topping to the SandwichMaker to increase the total price
});

///////////////////VEGGIE////////////////////
veggieChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;
	console.log("Your veggie choice: ", selectedTopping);

  // Determine the price of the topping chosen
  SandwichMaker.addVeggies(selectedTopping);
  // Add the topping to the SandwichMaker to increase the total price
});

// sammiePrice.innerHTML =  
console.log("The total price of your sammie is: ", finalSandwichPrice);