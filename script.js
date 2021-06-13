buttons = document.getElementsByClassName("grid-item");
calculated_value = '';
input_value = '';
operator_chosen = '';


function add(a,b){
    return Number(a) + Number(b);
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    return a / b;
}

function power(a,b){
    return Math.pow(a,b);
}

function remainder(a,b){
    return a%b;
}

function operate(operator, a, b){
    switch(operator){
        case 'add':
            answer = add(a,b);
            if (answer.toString().length > 14){
                answer = answer.toExponential(7);
            }
            return answer;
        case 'subtract':
            answer = subtract(a,b);
            return answer;
        case 'multiply':
            answer = multiply(a,b);
            if (answer.toString().length > 14){
                answer = answer.toExponential(7);
            }
            return answer;
        case 'divide':
            answer = divide(a,b);
            if (answer.toString().length > 14){
                answer = answer.toFixed(10);
            }
            return answer;
        case 'power':
            answer = power(a,b);
            if (answer.toString().length > 14){
                answer = answer.toExponential(7);
            }
            return answer;
        case 'remainder':
            answer = remainder(a,b);
            return answer;
    }

}

function clicked_numbers(e){
    if (input_value.length < 14){
        input_value += e.target.id;
        document.querySelector('.displayed_number').innerHTML = input_value;
    }
}

function clicked_operators(e){
    if(operator_chosen == ''){
        operator_chosen = e.target.id;
        calculated_value = input_value;
        input_value = '';
        //else calculated_value = operate(operator_chosen, calculated_value, input_value);
    }
    else if (operator_chosen == 'equal'){
        operator_chosen = e.target.id;
    }
    else {
        calculated_value = operate(operator_chosen, calculated_value, input_value);
        input_value = '';
        operator_chosen = e.target.id;
        document.querySelector('.displayed_number').innerHTML = calculated_value;
    }
    
}

function clicked_clear(e){
    input_value = '';
    calculated_value = '';
    operator_chosen = '';
    document.querySelector('.displayed_number').innerHTML = input_value;
}

function clicked_equal(e){
    calculated_value = operate(operator_chosen, calculated_value, input_value);
    document.querySelector('.displayed_number').innerHTML = calculated_value; 
    input_value = '';
    operator_chosen = 'equal';
    //calculated_value = '';
}

function clicked_delete(e){
    if (input_value != ''){
        input_value = input_value.substring(0,input_value.length - 1);
        document.querySelector('.displayed_number').innerHTML = input_value;
    }
}

function clicked_convert(e){
    if (input_value != ''){
        input_value = multiply(-1, input_value);
        document.querySelector('.displayed_number').innerHTML = input_value;
    }
    else if (operator_chosen == 'equal'){
        calculated_value = multiply(-1, calculated_value);
        document.querySelector('.displayed_number').innerHTML = calculated_value;
    }
}

function clicked(e){
    switch (e.target.id){
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            clicked_numbers(e);
            break;
        case 'ac':
            clicked_clear(e);
            break;
        case 'power':
        case 'remainder':
        case 'add':
        case 'subtract':
        case 'multiply':
        case 'divide':
            clicked_operators(e);
            break;
        case 'delete':
            clicked_delete(e);
            break;
        case 'convert':
            clicked_convert(e);
            break;
        case 'calculate': 
            clicked_equal(e);
            break;
    }
    //document.querySelector('.displayed_number').innerHTML = e.target.innerHTML;
}

for (i=0; i<buttons.length; i++){
    buttons[i].addEventListener('click',clicked);
}
