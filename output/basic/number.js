"use strict";
var number1 = 10;
var number2 = "20";
console.log(number1);
console.log(number2);
var total = number1 + Number(number2);
console.log(total);
var binary = 0b001;
var octal = 0o010;
var hex = 0x10;
console.log(binary);
console.log(octal);
console.log(hex);
var allTotal = number1 + binary + octal + hex;
console.log(allTotal); //35z
var item1 = 10.5;
var item2 = "20.5";
var convertItem2 = Number(item2); // way 01
var convertItem2 = +item2; // way 02
var totalItem = item1 + +item2;
console.log(totalItem);
var data = "Shakib";
// var data: number | string = 20;
console.log(data);
