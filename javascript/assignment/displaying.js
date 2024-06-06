/////<----------1. Basic Output:----------->

//// Q.Write a program that displays a welcome message and your favorite quote using console output.

////<--------Welcome message---------->
console.log("Welcome to the JavaScript program");

////<--------Favorite quote------------>
console.log("Life is really simple, but we insist on making it complicated.");


//////////////////////////////////////////////////////////////////////////
/////<----------2. Formatted Output:----------------->
// Q. Develop a program that accepts a user's first name, last name, and year of birth as inputs. Display a formatted message that includes their full name and age (assuming the current year is 2024).

function displayMessage(firstName, lastName, yearOfBirth) {
    var age = 2024 - yearOfBirth;
    var fullName = firstName + " " + lastName;
    console.log("Hello " + fullName + "! You are " + age + " years old.");
}

var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var yearOfBirth = parseInt(prompt("Enter your year of birth:"));

displayMessage(firstName, lastName, yearOfBirth);