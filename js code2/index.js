let names="book"
console.log(names)
let price="300"
console.log(price)
let number="50"
console.log(number)
console.log(price*number)
//2
const product={
    name:"Laptop",
    price:45555.56,
    category:"technology"
};

console.log(product)
console.log(`Продукт ${product.name} стоит ${product.price} тенге и относится к категории ${product.category}`)
//3
let name="Asselia"
let age="19"
let hasPassport="true"
console.log(`девочка по имени ${name}, по возрасту ${age} имеет паспорт ${hasPassport}`)
//4
firstName="Kasym"
lastName="Kausar"
console.log(firstName + lastName);
//5
let a=10
let b=5
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)
//6
const products={
    name:"album",
    price:25000,
    discountPercent:50
};
console.log(products.price - (products.price*products.discountPercent/100))