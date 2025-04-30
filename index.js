// prompt user for flavors

// FOR TESTing purpose
//userFlavor = "vanilla,vanilla,vanilla,strawberry,coffee,coffee";
// userFlavor = "vanilla,vanilla,vanilla,strawberry,coffee,coffee,blueberry";

// UNCOMMENT if you want to prompt the user for an input 
userFlavor = prompt("Please enter flavors seperated by ',' a comma");

//splits input into an array of strings
userFlavorOrder = userFlavor.split(",");

//find unique flavors by using Set
const uniqueFlavors = new Set(userFlavorOrder)
//convert Set into Array
const arrayUniqueFlavors = Array.from(uniqueFlavors)

// create an empty object
let flavorOrders = {};

//initialize object to 0
arrayUniqueFlavors.forEach(
	(flavor) => { 
      flavorOrders[flavor] = 0
   }
)

// checks if object is initialized to 0
console.table(flavorOrders);
// console.log("___________________________");

function count(array) {
	for(let i = 0; i < array.length; i++){
		key = array[i]
		flavorOrders[key]++
	}
  return flavorOrders;
}

console.table(count(userFlavorOrder));