////<-------------1. Calculator Functions:------------------>
//// Q. Write a main function `calculator()` that takes two numbers and an operator (as a string) as inputs and calls the appropriate function from the ones defined above to perform the calculation. Print the result.

// function add(x, y) {
//     return x + y;
// }

// function subtract(x, y) {
//     return x - y;
// }

// function multiply(x, y) {
//     return x * y;
// }

// function divide(x, y) {
//     if (y !== 0) {
//         return x / y;
//     } else {
//         return "Cannot divide by zero";
//     }
// }

// function calculator(num1, num2, operator) {
//     let result;
//     switch (operator) {
//         case "+":
//             result = add(num1, num2);
//             break;
//         case "-":
//             result = subtract(num1, num2);
//             break;
//         case "*":
//             result = multiply(num1, num2);
//             break;
//         case "/":
//             result = divide(num1, num2);
//             break;
//         default:
//             result = "Invalid operator";
//     }
//     console.log("Result:", result);
// }

// calculator(5, 3, "+"); 
// calculator(10, 2, "-"); 
// calculator(5, 2, "*");  
// calculator(10, 0, "/");  
// calculator(5, 2, "&");  

//////////////////////////////////////////////////////////////////////
////<----------------2. Temperature Conversion:---------------------->
//// Q.  Write a main function `convert_temperature(temp, scale)` that takes a temperature value and a scale ('C' for Celsius, 'F' for Fahrenheit) and calls the appropriate conversion function. Print the result.

 function convert_temperature(temp, scale) {
     if (scale === 'C') {
       return convertToFahrenheit(temp);
    } else if (scale === 'F') {
      return convertToCelsius(temp);
    } else {
      return 'Invalid scale';
    }
  }
  
  function convertToFahrenheit(celsius) {
     return (celsius * 9/5) + 32;
   }
  
   function convertToCelsius(fahrenheit) {
     return (fahrenheit - 32) * 5/9;
   }
  
  // Example usage:
   let tempCelsius = 20;
  let tempFahrenheit = 68;
  
  console.log(tempCelsius + "°C is equal to " + convert_temperature(tempCelsius, 'C') + "°F");
  console.log(tempFahrenheit + "°F is equal to " + convert_temperature(tempFahrenheit, 'F') + "°C");


