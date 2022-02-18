alert("Console!!");

const Memory = 15.678;
const VideoMemory = 123.965;
const Processor = 90.2345;

const maxPrice = Math.max(Memory,VideoMemory,Processor);
console.log(`max price: ${maxPrice}`);

const minPrice = Math.min(Memory,VideoMemory,Processor);
console.log(`min price: ${minPrice}`);

const SumOfPrice = (Memory+VideoMemory+Processor);
console.log(`Sum Of Price : ${SumOfPrice}`);

const minRoundPrice = Math.floor(Memory) + Math.floor(VideoMemory) + Math.floor(Processor);
console.log(`min Round Price: ${minRoundPrice}`);

const maxRoundPrice = Math.ceil((SumOfPrice / 100)) * 100;
console.log(`max Round Price: ${maxRoundPrice}`);

const SumProduct = minRoundPrice % 2 == 0 ? true : false;
console.log (`bool value: ${SumProduct}`);

const DifOfProduct = (500 - SumOfPrice);
console.log (`Dif Of Product: ${DifOfProduct}`);


const AverageValue = (SumOfPrice / 3).toFixed(2);
console.log (`AverageValue: ${AverageValue}`);

const discount = Math.random().toFixed(2);

const Payment = (SumOfPrice-discount).toFixed(2);
console.log (`Payment: ${Payment}`);

const Profit =(SumOfPrice / 2);

const WithoutProfit = (Profit-discount).toFixed(2);
console.log(`Clear Profit:${WithoutProfit}`);







