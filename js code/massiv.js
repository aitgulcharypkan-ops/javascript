let fruits=["apple","banana","orange"]
console.log(fruits)
//2
console.log(fruits[0]); 
console.log(fruits[fruits.length - 1]);
fruits.push("pear");
console.log(fruits)
//3
let lastFruit = fruits.pop();
console.log(lastFruit); 
let firstFruit = fruits.pop();
console.log(lastFruit); 
console.log(fruits)
//4
const fruit = ["Apple", "Banana", "Orange", "Pear"];
fruit.forEach(function(item) {
    console.log(item);
});
//5
let length = fruits.map(item => item.length);
console.log(length); 
//6
let numbers=[1,2,3,4,5,6,7,8,9,10]
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);
//7
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); 
//8
const result = numbers.find(num => num > 5);
console.log(result); 
//9
let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]
let arr3 = arr1.concat(arr2);
console.log(arr3); 
//10
let fruitis = ["Apple", "Banana", "Cherry"];
let hasBanana = fruitis.includes("Banana");
console.log(hasBanana);
//11
fruitis.reverse();
console.log(fruitis);