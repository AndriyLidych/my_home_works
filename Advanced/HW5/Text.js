"use strict"
// 1 завдання
function getRandomArray(length, min, max) {
    let arayRandom = Array(length);
    for (let i = 0; i < arayRandom.length; i++) {
        arayRandom[i] = Math.floor(min + Math.random() * (max - min + 1))
    }
    return arayRandom;
}
console.log(getRandomArray(8, 10, 20));



//3 завдання
function getAverage(...numbers) {
    let integers = numbers.filter(index => Number.isInteger(index));
    let resulted = 0;
    for (let i = 0; i < integers.length; i++) {
       resuletd = resulted + integers[i];
    }
    return resulted / integers.length;
 }

 console.log(getAverage(5, 3, 4, 5, 5, 3, 4, 5));

 //4 завдання

 function filterEvenNumbers(...numbers) {
    let evenNumber = numbers.filter(function (item) {
       return item % 2 !== 0;
    })
    return evenNumber;
 }

 console.log(filterEvenNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 6, 7, 8, 9,));




 function countPositiveNumbers(...numbers) {
   let positiveNumbers = numbers.filter(function (item) {
      return item > 0;
   })
   return positiveNumbers.length;
}

console.log(countPositiveNumbers(2, 5, - 6, -5, 6, 3, 4, -7));


function getDividedByFive(...numbers) {
   let dividedByFive = numbers.filter(function (item) {
      return item % 5 === 0
   })
   return dividedByFive;
}

console.log(getDividedByFive(1, 3, 5, 10, 15, 20, 21, 22, 20, 45, 46))


