let person = {
   name: "John",
   age: 30,
   city: "Tokyo"
};
console.log(person);
//2
person.city = "Kannam";
console.log(person.city); 

//3
const personman = {
    name: "Khardin",
    age: 19,
    city: "London",
    
    greet: function() {
        console.log(`Привет, меня зовут ${this.name}, мне ${this.age} лет!`);
    }
};
personman.greet();

//4
const obj1 = { a: 10, b: 20 };
const obj2 = { a: 10, b: 20 };
console.log(obj1 == obj2);  
console.log(obj1 === obj2); 
//В JavaScript объекты сравниваются по ссылке, а не по содержимому
//5
const book = {
    title: "Such different world",
    author: "Feia.Moren",
    details: {
        year: 2023,
        pages: 271
    }
};
const copyBook = Object.assign({}, book);
copyBook.details.year = 2025;
console.log(book.details.year);    
console.log(copyBook.details.year); 
//Object.assign() делает поверхностную копию объекта.Это значит, что сам объект копируется, но вложенные объекты остаются общими для обеих переменных
//6
const calculator = {
    a: 5,
    b: 3,
    sum: function() {
        return this.a + this.b;
    },
    multiply: function() {
        return this.a * this.b;
    }
};

console.log("Сумма:", calculator.sum());       
console.log("Произведение:", calculator.multiply()); 
//7
const car = {
    brand: "Toyota",
    model: "Corolla"
};
car.model = "Camry";
console.log(car); 
//В JavaScript использование ключевого слова const не предотвращает изменение содержимого объектов. 
// const только гарантирует, что переменная не может быть переназначена на другой объект , но свойства и элементы
//  внутри него могут быть изменены.
