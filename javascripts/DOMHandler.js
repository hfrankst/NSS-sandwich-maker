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
// console.log(breadChooser);
// console.log(meatChooser);
// console.log(cheeseChooser);
// console.log(condimentChooser);
// console.log(veggieChooser);
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

  // Determine the price of the topping chosen. Get the value of the 'bread' key. the addBread function is in Bread.js
  // SandwichMaker.addBread(selectedTopping); 

  // Add the topping to the SandwichMaker to increase the total price. The addTopping function is in SandwichMaker.js
  var postBreadChoice = SandwichMaker.addTopping(SandwichMaker.addBread(selectedTopping));
  console.log("Price after bread: ", postBreadChoice);
});

//////////////////MEAT////////////////////
meatChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;
	console.log("Your meat choice: ", selectedTopping);

  // Determine the price of the topping chosen
  // SandwichMaker.addMeat(selectedTopping);

  // Add the topping to the SandwichMaker to increase the total price
  var postMeatChoice = SandwichMaker.addTopping(SandwichMaker.addMeat(selectedTopping));
  console.log("Price after meat: ", postMeatChoice);
});

///////////////////CHEESE////////////////////
cheeseChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;
	console.log("Your cheese choice: ", selectedTopping);

  // Determine the price of the topping chosen
  // SandwichMaker.addCheese(selectedTopping);

  // Add the topping to the SandwichMaker to increase the total price
  var postCheeseChoice = SandwichMaker.addTopping(SandwichMaker.addCheese(selectedTopping));
  console.log("Price after cheese: ", postCheeseChoice);
});

///////////////////CONDIMENTS////////////////////
condimentChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;
	console.log("Your condiment choice: ", selectedTopping);

  // Determine the price of the topping chosen
  // SandwichMaker.addCondiments(selectedTopping);

  // Add the topping to the SandwichMaker to increase the total price
  var postCondimentChoice = SandwichMaker.addTopping(SandwichMaker.addCondiments(selectedTopping));
  console.log("Price after condiment: ", postCondimentChoice);
});

///////////////////VEGGIE////////////////////
veggieChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;
	console.log("Your veggie choice: ", selectedTopping);

  // Determine the price of the topping chosen
  // SandwichMaker.addVeggies(selectedTopping);
  // Add the topping to the SandwichMaker to increase the total price
  var postVeggieChoice = SandwichMaker.addTopping(SandwichMaker.addVeggies(selectedTopping));
  console.log("Price after veggies: ", postVeggieChoice);
  sammiePrice.innerHTML = `$` + postVeggieChoice.toFixed(2);
});

// sammiePrice.innerHTML = postVeggieChoice;  
// console.log("The total price of your sammie is: ", finalSandwichPrice);