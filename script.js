buttons = document.getElementsByClassName("grid-item");

function add(a,b){
    return a + b;
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

function operate(operator, a, b){
    switch(operator){
        case 'sum':
            return add(a,b);
        case 'subtract':
            return subtract(a,b);
        case 'multiply':
            return multiply(a,b);
        case 'divide':
            return divide(a,b);
    }

}

function display(e){
    document.querySelector('.displayed_number').innerHTML = e.target.innerHTML;
}

for (i=0; i<buttons.length; i++){
    buttons[i].addEventListener('click',display);
}
