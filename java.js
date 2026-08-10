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
let result;
let restart = false;


buttons.forEach((button) => {
    button.addEventListener("click", function () {
        if (restart === false && operator_click === true && "0123456789".includes(button.textContent))
        {
            console.log(result + "," + first_num + "," + second_num + "," + operator);
            display.value += " " + button.textContent;

            second_num += button.textContent; 
            console.log(result + "," + first_num + "," + second_num + "," + operator); 
        }

        else if (restart === false && operator_click === false && "0123456789".includes(button.textContent))
        {
            console.log(result + "," + first_num + "," + second_num + "," + operator);
            display.value += button.textContent;

            first_num += button.textContent;
            console.log(result + "," + first_num + "," + second_num + "," + operator);
        }

        else if (restart === true && "0123456789".includes(button.textContent))
        {
            first_num = button.textContent;
            second_num = "";
            display.value = first_num;
            restart = false;
            console.log(result + "," + first_num + "," + second_num + "," + operator);
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
                result = operate(operator, Number(first_num), Number(second_num));

                if (operator == divide && second_num == '0')
                {
                    display.value = "undefined";

                    result = "";
                    first_num = "";
                    second_num = "";

                    restart = true;
                    console.log(result + "," + first_num + "," + second_num + "," + operator);
                }

                else 
                {
                    display.value = result + " " + button.textContent;
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
                    console.log(result + "," + first_num + "," + second_num + "," + operator);
                }
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
                console.log(result + "," + first_num + "," + second_num + "," + operator);
            }
        }

        // if press equals, evaluate the expression
        // what if you do 1 + 1 = 2 + smth? That functionality was not specified in the instructions, so thats chill
        else if (button.textContent == "=")
        {
            result = operate(operator, Number(first_num), Number(second_num));
            console.log(result + "," + first_num + "," + second_num + "," + operator);
            display.value = result;

            if (operator == divide && second_num == '0')
            {
                display.value = "undefined";
                // result = "";
            }

            operator_click = false;
            first_num = "";
            second_num = "";
            restart = true;
            
            console.log(result + "," + first_num + "," + second_num + "," + operator);
            
        }

        else if (button.textContent == "AC")
        {
            display.value = "";
            first_num = "";
            second_num = "";
            console.log(result + "," + first_num + "," + second_num + "," + operator);
        }
    });
});



