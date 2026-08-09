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

let first_num = "";
let operator = "";
let second_num = "";

// 3. function operate

function operate(op, x, y)
{
    return op(x, y);
}

// 5. functions to update number variables

const buttons = document.querySelectorAll("button");
let operator_click = false;

buttons.forEach((button) => {
    button.addEventListener("click", function () {
        if (operator_click === true && "0123456789".includes(button.textContent))
        {
            second_num += button.textContent; 
            console.log(second_num);   
        }

        else if (operator_click === false && "0123456789".includes(button.textContent))
        {
            first_num += button.textContent;
            console.log(first_num);
        }

        else if ("+-x÷".includes(button.textContent))
        {
            operator_click = true;

            if (button.textContent == "+")
            {
                operator = add;
            }
            else if (button.textContent == "-")
            {
                operator = subtract;
            }
            else if (button.textContent == "x")
            {
                operator = multiply;
            }
            else if (button.textContent == "÷")
            {
                operator = divide;
            }
            console.log(operator);
            console.log(operator_click);
        }

        else if (button.textContent == "=")
        {
            let result = operate(operator, Number(first_num), Number(second_num));
            console.log(result);


        }
    });
});



// when we get 1 + 1 - smth, we need to make it so that when we hit "-", it also evaluates the previous expression
// try using the true/false, if operator is true, meaning we clicked it before, the next time we click it (when it is true), we treat it as an equal sign.
// in other words, if operator === false, clicking the operator will store the operator in that variable and set it equal to true,
// but clicking it again (when it is true) will treat it as an equal sign and evaluate the previous expression. Then, set it back to false.