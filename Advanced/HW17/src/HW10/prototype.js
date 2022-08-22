export class Student {
    constructor(university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
    }

    getInfo() {
        return `${this.course}, ${this.university}, ${this.fullName}`;
    }

    canGetMarks = true;
    massArr = [5, 4, 4, 5];

    get marks() {
        return this.canGetMarks ? this.massArr : null;
    }

    set marks(number) {
        if (this.canGetMarks) this.massArr.push(number);
        else return null;
    }

    getAverageMark() {
        let result = this.massArr.reduce((acc, el) => acc + el, 0);
        return (result / this.massArr.length).toFixed(1);
    }

    dismiss() {
        return this.canGetMarks = false;
    }

    recover() {
        return this.canGetMarks = true;
    }

}
