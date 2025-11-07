//1
let ages=30;
console.log(age); //let - может быть изменена, но не может быть повторно объявлена в одной и той же области видимости.

age=31;
console.log(age);

const year=30;
console.log(year); //const - не может быть изменена или повторно объявлена.
//2
//`var` — это старый способ объявления переменных в JavaScript. Его использование считается устаревшим, потому что он не ограничивается блоком кода (имеет *функциональную область видимости*) и может вызывать ошибки.
//Сейчас вместо него используют `let` и `const`, которые работают предсказуемее и безопаснее.


//3
let number=42;
let str="hello";
let bool=true;
let empty=null;
let undef;
let notANumber=NaN;
console.log(num, typeof num);
console.log(str, typeof str);
console.log(bool, typeof bool);
console.log(empty, typeof empty);
console.log(undef, typeof undef);
console.log(notANumber, typeof notANumber);
//4
let nullValue = null;
let undefinedValue = undefined;

console.log(String(nullValue));
console.log(Number(nullValue)); 
console.log(String(undefinedValue)); 
console.log(Number(undefinedValue)); 
//null и undefined могут быть преобразованы в другие типы данных, хотя это и не всегда имеет практический смысл.
//5
let num = 123;
let strNum = String(num); 
console.log(strNum); 
//В JavaScript действует динамическая типизация — это значит, что тип переменной определяется во время выполнения программы, а не заранее.
//6
let name=prompt('enter your name:');
let age=prompt("enter your age:");
console.log("Name:", name);
console.log("Age:", age);