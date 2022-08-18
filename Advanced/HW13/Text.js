async  function getRandomChinese(length) {
   let chineseStr = [];
   const getSign = () => new Promise((resolved) => {
      return setTimeout(() => {
         const sign = Date.now().toString().slice(-5);
         let charCode = String.fromCharCode(sign);
         resolved(charCode);
      }, 500);
   });
   
   do {
      await getSign().then((element) => chineseStr.push(element));
   } while (chineseStr.length < length);

   return new Promise((resolved) => {
      setTimeout(() => {
         resolved(console.log(chineseStr.join('')));
      }, length * 50);
   });
   //await getRandomChinese(4);
}


getRandomChinese(4);


  