import { add } from './util.js';

import { subtract } from './util.js';

import { multiply } from './util.js';

import { divide } from './util.js';

// get dom elements
// get add-input-1
const addInput1 = document.getElementById('add-input-1');
// get add-input-2
const addInput2 = document.getElementById('add-input-2');
// get add-button
const boogerButton = document.getElementById('add-button');
// get the add-result span
const boogerSpan = document.getElementById('add-result');

// initialize state 

// set the event handler to the button
boogerButton.addEventListener('click', () => {
    // in the click event handler . . .
    // make sure we have the inputs (console.log)
    // make sure we have the span
    // make sure we have the .values of the inputs
    const value1 = addInput1.value;
    const value2 = addInput2.value;

    // add the two values together
    const sum = add(value1, value2);

    // update the textContent of the span
    boogerSpan.textContent = sum;
});
//get dom elements
//get sub-input-1
const subInput1 = document.getElementById('sub-input-1');
//get sub-input-2
const subInput2 = document.getElementById('sub-input-2');
//get sub-button
const subButton = document.getElementById('sub-button');
//get sub-result span
const subSpan = document.getElementById('sub-result');

//intialize state

//set event handler to the button
subButton.addEventListener('click', () => {
    //inside handler
    //make sure we have inputs
    //console.log(subInput1, subInput2);
    //make sure we have span
    //console.log(subSpan);
    //makes sure we have .value of inputs
    const subValue1 = subInput1.value;
    const subValue2 = subInput2.value;
    //subtract values
    const sub = subtract(subValue1, subValue2);
    //update textContent of span
    subSpan.textContent = sub;
});


//get dom elements
//get mul-input-1
const mulInput1 = document.getElementById('mul-input-1');
//get mul-input-2
const mulInput2 = document.getElementById('mul-input-2');
//get mul-button
const mulButton = document.getElementById('mul-button');
//get mul-result span
const mulSpan = document.getElementById('mul-result');

//intialize state

//set event handler to the button
mulButton.addEventListener('click', () => {
    //inside handler
    //make sure we have inputs
    //make sure we have span
    //make sure we have value of inputs
    const mulValue1 = mulInput1.value;
    const mulValue2 = mulInput2.value;
    //muliply values
    const mul = multiply(mulValue1, mulValue2);
    //update textContent of span
    mulSpan.textContent = mul;
});

//get dom elements
//get div-input-1
const divInput1 = document.getElementById('div-input-1');
//get div-input-2
const divInput2 = document.getElementById('div-input-2');
//get div-button
const divButton = document.getElementById('div-button');
//get div-result span
const divSpan = document.getElementById('div-result');

//intialize state

//set event handler to the button
divButton.addEventListener('click', () => {
    //inside handler
    //make sure we have inputs
    //make sure we have span
    //make sure we have value of inputs
    const divValue1 = divInput1.value;
    const divValue2 = divInput2.value;
    //divide values
    const div = divide(divValue1, divValue2);
    //update textContent of span
    divSpan.textContent = div;
});

