"use strict";
const num1Element = document.getElementById('num1');
const num2Element = document.getElementById('num2');
const buttonElement = document.querySelector('button');
const numResults = [];
const textResults = [];
function add(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + ' ' + num2;
    }
}
function printResult(resultObj) {
    console.log(resultObj.val);
}
// makes sure that button element could not be null
if (buttonElement) {
    buttonElement.addEventListener('click', () => {
        const num1 = num1Element.value;
        const num2 = num2Element.value;
        const result = add(+num1, +num2); //returns int now
        console.log(result);
    });
}
//button element could be null
// buttonElement.addEventListener('click',()=>{
//     const num1 = num1Element.value;
//     const num2 = num2Element.value;
//     const result = add(+num1, +num2);   //returns int now
//     numResults.push(result as number);
//     //what if i want only addition of string and int
//     const StringResult = add(num1,num2);
//     textResults.push(StringResult as string);
//     printResult({ val: result as number, timestamp: new Date() })
//     console.log(numResults,textResults);
// });
// console.log(add(1,6));
// console.log(add('1','6'));
//in tsconfig strict true makes sure that we have to specify type beside argument
//everything here about strict works only until we run tsc app.js once its run its not taken into account
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('It worked!');
    }, 1000);
});
myPromise.then((result) => {
    console.log(result.split('w'));
});
