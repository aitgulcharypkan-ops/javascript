let a = 10;
let b = 5;
let c = 2;
console.log(a+b+c);
console.log(a+c-b);
console.log(a*b/c);
console.log(a%b);
//2
let x = 7;
console.log("x++ + ++x =", x++ + ++x);
console.log("x-- - --x =", x-- - --x);
//3
let num1 = 4;
let num2 = 5;
let result = "The result is: " + (num1 + num2);
console.log(result);
//4
let g = 10;
let d = 3;
let r = 5;
console.log(g > d && g > 0 && d > 0);
console.log(r < 10 || r === 2);
console.log((g / r) !== 5);

//5
console.log(10 == "10"); 
console.log(10 === "10"); 
//6
let X = 9;
let y = 8;
let result1 = ((X % 2 === 0) || (X % 3 === 0)) && (X % 6 !== 0);
console.log(result1); 
let result2 = !(y > 10 || y < 5);
console.log(result2); 