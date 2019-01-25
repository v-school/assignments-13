var shopper = {
    name: "Fred",
    age: 28,
    hasMoney: false,
    groceryCart: function(sentence) 
        {
        console.log("Apples," + " Milk," + " Juice, " + sentence)
        
        }


}
console.log(shopper.hasMoney)
console.log(shopper.name)
shopper.groceryCart("Shopping, complete! Congrats")