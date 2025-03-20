// Задание 1
let a = 10;
alert(a);
a = 20;
alert(a);

// Задание 2
const date = 2007;
alert(date);

// Задание 3
const nameCreator = 'Брендан Эйх';
alert(nameCreator);

//Задание 4
let d = 10;
let b = 2;
alert(d + b);
alert(d - b);
alert(d * b);
alert(d / b);

// Задание 5
let result = 2 ** 5;
alert(result);

// Задание 6
let x = 9;
let y = 2;
alert(x % y);

// Задание 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

// Задание 8
let age = Number(prompt("Сколько Вам лет?"));
alert(age);

// Задание 9
const user = {
    name: 'Kate',
    age: 25,
    isAdmin: true
}

//Задание 10
let nameYou = prompt('Как Вас зовут?');
alert(`Привет, ${nameYou}!`);

// Дополнительное задание
let number = Number(prompt("Загадайте любое число"));
let double = number * 2;
alert(`Удвоенное загаданное число равно ${double}`);
let summ = double + 10;
alert(`Прибавив к нему 10, получим ${summ}`);
let delet = summ / 2;
alert(`Теперь разделим на 2 и получим ${delet}`);
let itog = delet - number;
alert(`Вычтим первоначальное загаданное число и получим ответ равный ${itog}`);

