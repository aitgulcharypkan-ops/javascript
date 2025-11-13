let a = 10;
let b = 5;
let c = 2;
console.log(a+b+c);
console.log(a+c-b);
console.log(a*b/c);
console.log(a%b);
//2
let x=7;
++x;
console.log(x);
--x;
console.log(x);
//3
let text="the result is:" + "4+5";
console.log(text);
//4
let A = 15;
let B = 10;
let C = 3;
let condition1 = (A > B) && (A > 0) && (B > 0);
console.log("A > B > 0:", condition1);
let condition2 = (C < 10) || (C === 2);
console.log("C < 10 && C == 2:", condition2);
let condition3 = (a / c !== 5);
console.log("A / C != 5:", condition3);
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