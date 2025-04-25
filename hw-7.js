//Задание 1
const str1 = 'js'
const newStr1 = str1.toUpperCase()
console.log(newStr1)


// Задание 2
function filter(arr2, str2) {
    const lowerStr = str2.toLowerCase();
    return arr2.filter(item => item.toLowerCase().startsWith(lowerStr));
}
console.log(filter(['Манюня', 'Лиска', 'Маруся'], 'ма'));


// Задание 3
let numb = 32.58884;
console.log(Math.floor(numb));
console.log(Math.ceil(numb));
console.log(Math.round(numb));


// Задание 4
const numb4 = [52, 53, 49, 77, 21, 32]
console.log(Math.min(...numb4));
console.log(Math.max(...numb4));



// Задание 5
function task5(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(task5(1, 10));



// Задание 6
function task6() {
    let numb6 = +prompt('Введите число больше 0')
    if (numb6 <= 0) {
        alert('Введено некорректное число');
    } else {
        let arr6 = [];
        for (let i = 0; i < numb6 / 2; i++) {
            arr6.push(Math.floor(Math.random() * numb6));
        }
        return arr6
    }
}
console.log(task6())



// Задание 7
function task7(min, max) {
    let a1 = +prompt('Введите первое число');
    let a2 = +prompt('Введите второе число');
    if (a1 < a2) {
        min = a1;
        max = a2;
    } else if (a1 === a2) {
        alert('Введите разные числа')
    } else {
        max = a1;
        min = a2;
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(task7())


// Задание 8
console.log(new Date());



// Задание 9
let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate)



// Задание 10
function formatDate(date) {
    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const dayOfWeek = days[date.getDate()];
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return `Дата : ${day} ${months[month]} ${year} - это ${dayOfWeek}.
    Время : ${hours}:${minutes}:${seconds} `;
}
console.log(formatDate(new Date()));