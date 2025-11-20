const greet = function(name) {
   console.log("Hello, " + name + "!");
};
greet("world!")
//2
function sayHello(name) {
   console.log("Hello, " + name + "!");
}

sayHello("Alice"); 
sayHello("Dannie");
sayHello("Tessa");
//3
function sum(a, b) {
  return a + b;
}
const result = sum(5, 7); 
console.log(result); 
//4
function isEven(number) {
  return number % 2 === 0;
}
console.log(isEven(4));  
console.log(isEven(7));  
console.log(isEven(10)); 
console.log(isEven(3));  
//5
function max(a, b) {
  if (a > b) {
    return a;
  } else if (b > a) {
    return b;
  } else {
    return "Числа равны";
  }
}
console.log(max(5, 9));   
console.log(max(12, 4));  
console.log(max(7, 7));   
//6
function getInitials(firstName, lastName) {
  const firstInitial = firstName[0];
  const lastInitial = lastName[0];
  return firstInitial + "." + lastInitial + ".";
}
console.log(getInitials("Алиса", "Боброва")); 
console.log(getInitials("Иван", "Сергеев"));  
console.log(getInitials("Мария", "Тлеуберген"));
console.log(getInitials("Данияр", "Канат"));   
//7
console.log(square(5));
function square(n) {
  return n * n;
}
function square(n) {
  return n * n;
}
function cube(n) {
  return square(n) * n; 
}
console.log(square(4)); 
console.log(cube(4));   
console.log(square(7)); 
console.log(cube(7));   
//8
const add = (a, b) => a + b;
console.log(add(5, 7)); 
//8.1
function getFactorial(n) {
  let result = 1; 

  for (let i = 1; i <= n; i++) {
    result *= i; 
  }

  return result;
}
console.log(getFactorial(5)); 