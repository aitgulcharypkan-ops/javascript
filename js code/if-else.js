let number = prompt("Enter your number:");
if (number>10) {
    console.log("число больше 10");
} else{
    console.log("число меньше или равно 10");
}
//2
let userConfirmed = confirm("Вы уверены, что хотите удалить файл?");

if (userConfirmed) {
   console.log("файл удален.");
} else {
   console.log("удаление отменено.");
};
//3
let userAge=prompt("enter your age:");
if (userAge < 18) {
   console.log("вы еще подросток");
} else if (userAge < 30) {
   console.log("вы молодой взрослый");
} else if (userAge > 30) {
   console.log("вы взрослый");
} 
//4
let num = prompt("Введите число:");
if (num % 2 === 0) {
    console.log("Четное число");
} else {
    console.log("Нечетное число");
}
//5
let day = Number(prompt("Введите день недели (1-7):"));

switch (day) {
    case 1:
        console.log("Понедельник");
        break;
    case 2:
        console.log("Вторник");
        break;
    case 3:
        console.log("Среда");
        break;
    case 4:
        console.log("Четверг");
        break;
    case 5:
        console.log("Пятница");
        break;
    case 6:
        console.log("Суббота");
        break;
    case 7:
        console.log("Воскресенье");
        break;
    default:
        console.log("Некорректное значение");
}
//6
let num1=prompt("enter first num:");
let num2=prompt("enter second num:");
if (num1==num2){
    console.log("числа равны");
} else{
    let result = (num1>num2)? "первое число больше" : "второе число больше";
    console.log(result);
}
//6.1
let month = +prompt("Введите номер месяца (1-12):");
let season;

switch (month) {
    case 12:
    case 1:
    case 2:
        season = "Зима";
        break;

    case 3:
    case 4:
    case 5:
        season = "Весна";
        break;

    case 6:
    case 7:
    case 8:
        season = "Лето";
        break;

    case 9:
    case 10:
    case 11:
        season = "Осень";
        break;

    default:
        season = "Некорректный номер месяца!";
}
console.log(season);
