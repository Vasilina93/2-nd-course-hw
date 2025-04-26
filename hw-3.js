// Задание 1
let password = 'пароль';
let mayPassword = prompt('Введите пароль');
if (password === mayPassword) {
    alert('Пароль введён верно');
} else {
    alert('Пароль введён неверно');
}


// Задание 2
let c = 3;
if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}


// Задание 3
let d = 40;
let e = 120;
if (d > 100 || e > 100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}


// Задание 4
let a = '2';
let b = '3';
// Код выше изменять менять нельзя. Чтобы решить задачу исправьте код ниже:
alert(Number(a) + Number(b));


// Задание 5
let monthNumber = Number(prompt('Введите номер месяца'));
if (monthNumber > 0 && monthNumber < 13) {
    switch (monthNumber) {
        case 12:
        case 1:
        case 2:
            alert('Зима');
            break;
        case 3:
        case 4:
        case 5:
            alert('Весна');
            break;
        case 6:
        case 7:
        case 8:
            alert('Лето');
            break;
        case 9:
        case 10:
        case 11:
            alert('Осень');
            break;
        default:
            break;
    }

} else {
    alert('Такого номера месяца нет');
}


// Дополнительные задания
// Задание 1
let x = Number(prompt('Пожалуйста, введите любое число'));
if (isNaN(x)) {
    alert('Не является числом');
} else {
    if (x % 2 === 0) {
        alert('Число чётное');
    } else {
        alert('Число нечётное');
    }
}


// Задание 2
let clientOS = Number(prompt('Чем Вы пользуетесь? При iOS нажмите 0, Android - 1'));
switch (clientOS) {
    case 0:
        alert('Установите версию приложения для iOS по ссылке');
        break;
    case 1:
        alert('Установите версию приложения для Android по ссылке');
        break;
    default:
        alert('Введено неверное значение');
        break;
}


// Задание 3
let clientOP = Number(prompt('Чем Вы пользуетесь? При iOS нажмите 0, Android - 1'));
let dateMake = prompt('Год создания Вашего телефона?');
if (clientOP === 0 && dateMake > 2015) {
    alert('Установите версию приложения для iOS по ссылке');
} else {
    if (clientOP === 0 && dateMake < 2015) {
        alert('Установите облегченную версию приложения для iOS по ссылке');
    } else {
        if (clientOP === 1 && dateMake > 2015) {
            alert('Установите версию приложения для Android по ссылке');
        } else {
            alert('Установите облегченную версию приложения для Android по ссылке');
        }
    }
}