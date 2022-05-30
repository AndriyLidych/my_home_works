
   function getMaxDigit(number) {
    number=number.toString()
       
       let currentNumber = number[0]
       for (let i = 1; i < number.length; i++){
           if (currentNumber < number[i]) {
           
               currentNumber = number[i]
           }
       }
        return currentNumber
   }
   document.writeln(`1 найбільша Цифра із числа ${getMaxDigit(734568912)}`);

    function powFunction(a,b){
       let = num = 1;
       for (let i = 0; i < b; i++){
           num *=a;

           
       }
     return num
   }
   document.writeln(`2 степінь ${powFunction(7,3)}`);

   function letterToUpperCase(string){
       string = string.toLowerCase()
       return string.charAt(0).toUpperCase() + string.slice(1)
     
   }
   document.writeln(`3 Літера Верхнього регістру ${letterToUpperCase("vaLeRA")}`);

   function discount (numeric){
        return numeric - (19.5* numeric)/100;
   }
   document.writeln(`4 сума - знижка ${discount(2000)}`);

   function getRandomNumber(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
   document.writeln(`5 випадкове число в проміжку ${getRandomNumber(1, 10)}`);"<br>"

   function countLetter (letter, string) {
    string=string.toLowerCase()
     return (string.split(letter).length -1 )
 }
 
 document.writeln(`6 повторення літери ${countLetter("а", "Асталавіста")}`);

   