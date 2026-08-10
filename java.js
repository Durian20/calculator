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

const display = document.querySelector("input");
display.value = "";

const buttons = document.querySelectorAll("button");
let operator_click = false;
let equals_click = false;

buttons.forEach((button) => {
    button.addEventListener("click", function () {
        if (equals_click === false && operator_click === true && "0123456789".includes(button.textContent))
        {
            display.value += " " + button.textContent;

            second_num += button.textContent; 
            console.log(second_num);   
        }

        else if (equals_click === false && operator_click === false && "0123456789".includes(button.textContent))
        {
            display.value += button.textContent;

            first_num += button.textContent;
            console.log(first_num);
        }

        else if (equals_click === true)
        {
            first_num = button.textContent;
            second_num = "";
            display.value = first_num;
            equals_click = false;
        }

        else if ("+-x÷".includes(button.textContent))
        {
            // say if we already clicked 1+1, if we click "-" after, evaluate 1+1 first
            // check if we clicked an operator button a second time
            // we also want to set the result of previous expression as first_num
            // still check which symbol we pressed, so that we can populate the operator variable
            // we would then have first_num, operator so far
            // operator_click will still be true, so next time we click a number, it will populate second_num.
            // then we can press equals and evaluate the second expression 
        
            if (operator_click === true)
            {
                let result = operate(operator, Number(first_num), Number(second_num));
                display.value = result + " " + button.textContent;
                console.log(result);
                first_num = result;
                second_num = "";

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

            else
            {
                display.value += " " + button.textContent;
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
        }

        // if press equals, evaluate the expression
        // what if you do 1 + 1 = 2 + smth? That functionality was not specified in the instructions, so thats chill
        else if (button.textContent == "=")
        {
            let result = operate(operator, Number(first_num), Number(second_num));
            display.value = result;

            if (operator == divide && second_num == '0')
            {
                display.value = "Undefined";
            }

            operator_click = false;
            first_num = "";
            second_num = "";
            equals_click = true;
            
            console.log(result);
            
        }

        else if (button.textContent == "AC")
        {
            display.value = "";
            first_num = "";
            second_num = "";
        }
    });
});

// Working the display

// need to select the input tag
// use the value property to manipulate the textbox

