// arrays are stored in variables
// syntax is square brackets, data types separated by commas
var koders = ["Adventurous Alexandra", "Kurious Kennedy", "Brilliant Blossom", "Boisterous Bananabelle", "Amazing Amanda", "Astounding Alex", "Popular Priya", "Daring Dana", "Friendly Faith", "Avocado Anya", "Artistic Aliza", "Cat CJ", "Curious Carly", "ReallyTall Rachael", "Kool Kaylin", "Zany Zahwa", "Ecstatic Elaine", "Koder Kamryn"]

// accessing index 0, the first value in the array: arrayName[index]
koders[0]

// check how many elements are in an array: arrayName.length
koders.length

// access the last element in our 18 element array
koders[17]

// adding elements to an array
koders[18] = "Mountain Marley"

// replace a value
// koders[1] = "Tyrannical Taylor"
// console.log(koders)

// add elements without replacing
koders.splice(1, 0, "Tyrannical Taylor");

// remove element from the array
koders.splice(1, 1)

// .push = adds element to the end of the list
koders.push("Apples")

// .pop = removes the last element, doesn't need an argument
koders.pop()

// .shift = removes the first element and then returns the new length of the array
koders.shift()

// .unshift =  adds one or more elements to the beginning of an array and returns the new length of the array
koders.unshift("Adventurous Alexandra")
console.log(koders)