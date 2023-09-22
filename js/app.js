'use strict';

function sum(a, b) { 
  let result = a + b;
  let string = `The sum of ${a} and ${b} is ${result}.`;
  return [result, string];
}


testSum(4, 7);


function multiply(a, b) { 
  let result = a * b;
  let string = `The product of ${a} and ${b} is ${result}.`;
  return [result, string];
}

testMultiply(5,9);


function sumAndMultiply(a, b, c) {

  let sumAB = sum(a, b)[0];
  let sumOfThree = sum(sumAB, c)[0];

  let productAB = multiply(a, b)[0];
  let productOfThree = multiply(productAB, c)[0];

  return [sumOfThree, productOfThree, `${a} and ${b} and ${c} sum to ${sumOfThree}.`,`The product of ${a} and ${b} and ${c} is ${productOfThree}.`]
}


let testArray = [2, 3, 4]; 

function sumArray(sumArr) {
  let sum = 0;
  for (let i = 0; i < sumArr.length; i++) {
    sum += sumArr[i];
  }
  return [sum, `${sumArr} was passed in as an array of numbers, and ${sum} is their sum.`];
}


testSumArray(testArray);


function multiplyArray(multArr) { 
  let product = 1;
  for (let i = 0; i < multArr.length; i++) {
    product = multiply(multArr[i], product)[0];
  }
  let resultString = `The numbers ${multArr} have a product of ${product}.`;
  return [product, resultString];
}




let testDynamicArray = [1,2,3,4,5]; 

function multiplyAnyArray(dynamicArray) { 
  let product = 1;
  for (let i = 0; i < dynamicArray.length; i++) {
    product = multiply(dynamicArray[i], product)[0]
  }
  return [product, `The numbers ${dynamicArray} have a product of ${product}.`];
}


testMultiplyAnyArray(testDynamicArray);

