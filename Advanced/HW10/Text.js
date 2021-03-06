"use strict";

class Student {
  deletStudent = false;

  constructor(university, course, fullName, marks) {
    this.university = university;
    this.course = course;
    this.fullName = fullName;
    this.marks = marks;
  }
  getInfo() {
    console.log(
      `Студент ${this.course}-го курсу ${this.university}, ${this.fullName}`
    );
  }

  get getMarks() {
    if (this.deletStudent) {
      return null;
    }
    return this.marks;
  }

  set addMarks(mark) {
    if (this.deletStudent) return;
    this.marks.push(mark);
  }

  getAverageMark() {
    let averageMark = 0;
    averageMark =
      this.marks.reduce((prev, curr) => prev + curr, 0) / this.marks.length;
    return averageMark.toFixed(1);
  }

  dismiss() {
    this.deletStudent = true;
    console.log("Студента виключено");
  }

  recover() {
    this.deletStudent = false;
    console.log("Студента поновлено");
  }
}

const studentIvan = new Student(
  "Вищої Школи Психотерапії м.Одеса",
  1,
  "Остап Бандер",
  [5, 4, 4, 5, 5]
);

console.log(studentIvan);
studentIvan.getInfo();
console.log(studentIvan.getMarks);
console.log((studentIvan.addMarks = 5));
console.log(studentIvan.getMarks);
console.log("Середня оцінка", studentIvan.getAverageMark());
studentIvan.dismiss();
console.log(studentIvan);
console.log(studentIvan.getMarks);
console.log((studentIvan.addMarks = 5));
console.log(studentIvan.getMarks);
studentIvan.recover();
console.log(studentIvan);
console.log(studentIvan.getMarks);
console.log((studentIvan.addMarks = 5));
console.log(studentIvan.getMarks);