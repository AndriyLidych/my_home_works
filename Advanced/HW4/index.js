"use strict"
const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];

const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];

const marks = [4, 5, 5, 3, 4, 5];

let girls = [];
let boys = [];

function girlBoy() {
    girls.push(students[0], students[1], students[4]);
    boys.push(students[2], students[3], students[5]);
    return;
}
girlBoy();

let groupOfStudents = [];

function pairs() {
    for (let i = 0; i < boys.length; i++){
    groupOfStudents.push([girls[i] + ' та ' + boys[i]]);
    }
   return;
}
pairs();
console.log(groupOfStudents);

let studentsSubject = [];
function subject(){
    for (let i = 0; i < groupOfStudents.length; i++){
        studentsSubject.push([boys[i] + ' та ' + girls[i] + ' , предмет , ' + themes[i]]);
    }
return;
}
subject();
console.log(studentsSubject);

let soloMarks = [];
 function undividualMarks(){
     for (let i = 0; i <students.length; i++){
        soloMarks.push([students[i] + ',  оцінка ' + marks[i]])

     }
     return;
 }
 undividualMarks();
 console.log(soloMarks);

  let theFinalResult = [];
 function theFinalResults(){
     for( let i = 0; i <3; i++){
        theFinalResult.push([boys[i] + ' та ' + girls[i] + ' , предмет , ' + themes[i], (Math.floor(Math.random()*(5+1)+1 ))]);
     }return;
 }
 theFinalResults();
 
 console.log(theFinalResult);
 


