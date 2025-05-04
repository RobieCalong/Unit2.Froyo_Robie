//Assignment :: 
/*
Build your website according to this user story:

A visitor receives a prompt upon opening the website to enter a list of comma-separated froyo flavors. They type vanilla,vanilla,vanilla,strawberry,coffee,coffee. When they view the browser console, they observe a table listing how many of each flavor they have ordered. In this case, they will be able to observe that they have ordered three vanilla, two coffee, and one strawberry froyo.

HTML file connected to the JS file
prompt the user for froyo flavors and store their result
parse the user input into an array of froyo flavors
build an object to track which flavors you have observed so far
As you iterate through the array of flavors, when should that object be updated?
*/


// FOR TESTing purpose
//const userFlavor = "vanilla,vanilla,vanilla,strawberry,coffee,coffee";
const userFlavor = "vanilla,vanilla,vanilla,strawberry,coffee,coffee,blueberry";

// UNCOMMENT if you want to prompt the user for an input 
// const userFlavor = prompt("Please enter flavors seperated by ',' a comma");

//splits input into an array of strings
const userFlavorOrder = userFlavor.split(",")

//find unique flavors by using Set
const uniqueFlavors = new Set(userFlavorOrder)
//convert Set into Array
const arrayUniqueFlavors = Array.from(uniqueFlavors)

// create an empty object
let flavorOrders = {};

//initialize object to 0
arrayUniqueFlavors.forEach((flavor) => { 
      flavorOrders[flavor] = 0
   }
)

// checks if object is initialized to 0
console.table(flavorOrders);
console.log("___________________________")


function count(array) {
	for(let i = 0; i < array.length; i++){
		key = array[i]												//for every flavor found in the array will add +1
		flavorOrders[key] = flavorOrders[key] + 1
	}
  return flavorOrders;											//return an object of flavors
}

console.table(count(userFlavorOrder))
console.log("___________________________")




// // DIFFERENT SOLUTION:: 
// // const secondPrompt = prompt("Please enter flavors seperated by ',' a comma");
// const secondPrompt = "vanilla,vanilla,vanilla,strawberry,coffee,coffee,blueberry";

// const flavorArray = secondPrompt.split(",");

// const secondFlavorObject = {}									//declare empty object

// for(let i=0; i<flavorArray.length; i++){					//iterate each flavor
//    if(flavorArray[i] in secondFlavorObject){				//if flavor is 'in' the object
//       secondFlavorObject[flavorArray[i]] += 1			// +1 if its already in the list
//    } else {
//       secondFlavorObject[flavorArray[i]] = 1				// = 1 if its a new flavor
//    }
// }
// console.log("this is 2nd result: ", secondFlavorObject)