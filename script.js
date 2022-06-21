
//creating a calculator using the if...else...if in JS.
const operator= prompt ('Enter operator to perform the calculation (either +, -, * or /):');
const number1= parseFloat (prompt('Enter first number:'));
const number2= parseFloat (prompt('Enter second number:'));
let result;
if (operator == '+') {//use + (addition) operator to add two numbers
result = number1 + number2;
}
else if (operator == '-') {//use - (subtraction) operator to subtract two numbers
result = number1 - number2;
}
else if (operator == '*') {//use * (multiplication) operator to multiply two numbers
result = number1 * number2;
}
else {result = number1 / number2; //use / (division) operator to divide two numbers
}
//result of the calculations
window. alert (" Result is " + result);
