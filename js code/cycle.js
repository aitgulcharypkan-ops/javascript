let i = 1;
while (i <= 10) {
  console.log(i);
  i++; 
}
//2
let counter = 1;

while (counter <= 10) {
    if (counter === 5) {
        counter++;     
        continue;
    }

    if (counter === 8) {
        break;         
    }

    console.log(counter);
    counter++;
}
//3
let count = 1;
do {
   console.log("Счетчик: " + count);
   count++;
} while (count < 5);
//цикл do-while гарантирует, что его тело будет выполнено хотя бы один раз, даже если условие сразу ложно.
//4
while (true) {
    let answer = prompt("Введите число:");
    if (answer === "10") {
        alert("Правильно! Цикл завершён.");
        break; 
    }
    alert("Неправильно, попробуйте ещё раз!");
}
//5
for (let i = 1; i < 10; i++) {
   console.log(i);
};
//6
let num = 1;
for (;;) { 
    console.log(num);
    if (num > 100) {
        break; 
    }
    num++; 
}
//7
const numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
//8
//я бы использовала цикл while при случаях когда неизвестно, сколько раз нужно повторять цикл. а цикл for 
// при случаях когда я уже знаю сколько раз нужно повторять цикл.
// пример: считываем числа, пока пользователь не введёт 0
let sum = 0;
let input;
while (true) {
    input = Number(prompt("Введите число (0 для выхода):", "0"));
    if (isNaN(input)) {
        alert("Введите корректное число");
        continue; 
    }
    if (input === 0) break; 
    sum += input;
}
console.log("Сумма введённых чисел:", sum);
// Пример: вывод чисел от 1 до 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
//9
for (let i = 10; i >= 1; i--) {
  console.log(i);
}
//10
for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0) {
    continue; 
  }
  console.log(i); 
}

