"use strict"

const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };

const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };

const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

function getMyTaxes(salary){
    let result = salary*this.tax;
    return result;
}
let resSalary = getMyTaxes.call(litva,20000);
console.log("Cкільки податків ви заплатите як IT-спеціаліст в якійсь з країн: ", resSalary);


function getMiddleTaxes(){
    let result = this.tax * this.middleSalary;
    return result;
}
let  resGetMiddleTaxes = getMiddleTaxes.call(ukraine)
console.log("середній податок спеціалістів в країні",resGetMiddleTaxes);

function getTotalTaxes(){
let result = this.tax * this.middleSalary * this.vacancies;
return result;

}
let  getTotalTaxes1 = getTotalTaxes.call(ukraine)
console.log("результат того скільки податків  в сумі заплатять програмісти",getTotalTaxes1);


function getMySalary(country) {
    setInterval(() => {
 
       let salary = Math.floor(Math.random() * (2000 - 1500) + 1500);
       let taxes = Math.floor(getMyTaxes.call(country, salary));
       let profit = salary - taxes;
       const result = { salary, taxes, profit };
       return console.log(result);
    }
       , 2000);
 
 }
 
 getMySalary(ukraine);
