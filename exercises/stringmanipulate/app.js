var ask = require('readline-sync');
console.log('Hey! My name is Zeus. I want to get to know you!\n');
var firstName = ask.question('What is your first name? ');

console.log("Well hello there " + firstName + "!" );

var lastName = ask.question("How about your last name? ");
console.log(lastName + "? That's an awesome name! ");

console.log("It's a pleasure to meet you Mr. " + lastName.toUpperCase());

var age = ask.question("Might I ask your age?");

console.log("Wow! You sure don't look " + age + "!");