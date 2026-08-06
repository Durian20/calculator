// 1. operation functions

function add(x, y)
{
    return x + y;
}

function subtract(x, y)
{
    return x - y;
}

function multiply(x, y)
{
    return x * y;
}

function divide(x, y)
{
    return x / y;
}

// 2. operation variables

let first_num;
let operator;
let second_num;

// 3. function operate

function operate(op, x, y)
{
    return op(x, y);
}

// 5. functions to update number variables
// when a number is clicked, add the number associated with the button to a variable
// when an operator button is clicked, change first_num to be that number, so that if you enter two nums in a row, it will add them both to the variable
// then the operator variable is updated
// ex// if + is clicked, assign operator to be +
// then click the next num, and assign second_num to be that value
// once the variables are assigned, check if the operator is +, -, x, or /. If +, apply add function to first_num and second_num for instance
// search up how to dynamically display all of these 

// can do a while loop, while the number is being clicked, keep updating first_num
// once an operator is clicked, exit loop and update the operator variable
// then do another while loop and apply it to the second_num, but this time break when you press =
// whole goal is to populate the variables and then input them into their corresponding arguments in the operate function



