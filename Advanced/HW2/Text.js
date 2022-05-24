
let Number_First;

do {
    Number_First = +prompt('введіть число від якого рахуватимемо');
} while (!Number.isInteger(Number_First) || Number_First < 0);

let Second_Number;

do {
    Second_Number = +prompt('введіть число до якого рахуватимемо');
} while (!Number.isInteger(Second_Number) || Second_Number < 0 || Second_Number < Number_First);    

let Skipped = confirm('пропускати парні числа?');


let Ended_Sum = 0;
for (let i = Number_First; i <= Second_Number; i++) {
    if (!Skipped) {
        Ended_Sum += i;
    } else {
        if (i % 2 !== 0) {
            Ended_Sum += i;
        }
    }
};
alert(`остаточна сума =${Ended_Sum}`)