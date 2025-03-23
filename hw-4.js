// Задание 1
for (let i = 1; i < 3; i++) {
    console.log('Привет');
}

// Задание 2
let j = 1;
while (j <= 5) {
    console.log(j);
    j++;
}


// Задание 3
let z = 7;
while (z <= 22) {
    console.log(z);
    z++;
}


// Задание 4
const obj = {
    Коля: 200,
    Вася: 300,
    Петя: 400
}
for (let key in obj) {
    console.log(`Зарплата сотрудника по имени ${key} составляет ${obj[key]} долларов`);
}


// Задание 5
let num = 0;
let n = 1000;
while (n >= 50) {
    n /= 2;
    if (n >= 50) {
        num++;
        continue;
    }
    num++;
    console.log(`Результат деления составил ${n}`);
    console.log(`Количество итераций - ${num}`);
}


// Задание 6
let monthDay = 31;
for (let friday = 1; friday <= monthDay; friday += 7) {
    console.log(`Сегодня пятница, ${friday}-е число. Необходимо подготовить отчёт`);
}



// Доп задания
// Задание 1
let k = 100;
let rep = 0;
while (k > 0) {
    k -= 7;
    if (k > 0) {
        rep++;
        continue;
    }
    rep++;
    console.log(`Получилось число: ${k}`);
    console.log(`Количество итераций - ${rep}`);
}


//Задание 2
const months = {
    1: 'Январь',
    2: 'Февраль',
    3: 'Март',
    4: 'Апрель',
    5: 'Май',
    6: 'Июнь',
    7: 'Июль',
    8: 'Август',
    9: 'Сентябрь',
    10: 'Октябрь',
    11: 'Ноябрь',
    12: 'Декабрь'
}
for (let key in months) {
    console.log(`Месяц ${months[key]} под номером ${key}`);
}


//Задание 3
const book = {
    Название: 'Букварь',
    Автор: 'Жуков',
    Год: 1990,
    Жанр: 'Научная литература'
}
for (let key in book) {
    console.log(`${key} ${book[key]}`);
}


//Задание 4 пока ступр
let chicla [
    10, 3, 26, 8, 88, 15, 90, 58, 33, 22
]
chicla(element => {

});