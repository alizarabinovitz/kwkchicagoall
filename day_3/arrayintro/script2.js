var koders = ["Adventurous Alexandra", "Kurious Kennedy", "Brilliant Blossom", "Boisterous Bananabelle", "Amazing Amanda", "Astounding Alex", "Popular Priya", "Daring Dana", "Friendly Faith", "Avocado Anya", "Artistic Aliza", "Cat CJ", "Curious Carly", "ReallyTall Rachael", "Kool Kaylin", "Zany Zahwa", "Ecstatic Elaine", "Koder Kamryn"]

// the below is tedious and would not work if the array length changed
// console.log(koders[0] + "received a donut!")
// console.log(koders[0] + "recieved a donut!")

// better to use a for loop
for(var i = 0; i < koders.length; i++){
    console.log(koders[i] + " recieved a donut!")
}

// string interpolation - plugging in a string into your string, to have the same function
for (var i = 0; i < koders.length; i++){
    console.log(`${koders[i]} recieved a donut!`)
}