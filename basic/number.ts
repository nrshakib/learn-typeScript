var number1: number = 10;

var number2: string = "20";

console.log(number1);
console.log(number2);

var total = number1 + Number(number2);
console.log(total);

var binary: number = 0b001;
var octal: number = 0o010;
var hex: number = 0x10;

console.log(binary);
console.log(octal);
console.log(hex);

var allTotal: number = number1 + binary + octal + hex;
console.log(allTotal); //35z

var item1: number = 10.5;
var item2: string = "20.5";
var convertItem2 = Number(item2); // way 01
var convertItem2 = +item2; // way 02

var totalItem: number = item1 + +item2;
console.log(totalItem);

var data: number | string = "Shakib";
// var data: number | string = 20;
console.log(data);
