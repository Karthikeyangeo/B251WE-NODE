console.log('Hello ,🌍...!😊');

const double =(num) => num*2;
console.log(double(40));
// let num1 = process.argv[2];
// console.log(double(num1));

const sum =(a,b)=>a + b;
const [, ,num1,num2] = process.argv;
console.log(sum(+num1 , +num2));