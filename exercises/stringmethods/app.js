// When do you create/define a variable? Like when creating functions
// var firstName = "Dan "

// function bigAndSmall(firstName){
//     return (firstName.toUpperCase() + firstName.toLowerCase());
    
// }

// console.log(bigAndSmall("Dan "));

//Second Question

// function doubleAndHalf(str) {
//     var length =str.length;
//     var half = length / 2;
//     var resultFloored = Math.floor(half);
// //     return resultFloored;
// //  }
//  function doubleAndHalf(str){
//     return Math.floor(str.length / 2);
//  }

// console.log(doubleAndHalf("Hello")); //=>2
// console.log(doubleAndHalf("Hello World")); //==5

//Question 3 
var str = "I am danny"
function returnFirstHalf(str){
    Math.floor(str.slice(0, 2));
}

console.log(str);