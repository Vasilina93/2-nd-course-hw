// Задание 1
function min(a, b) {
    if (a <= b) {
        return a;
    } else {
        return b;
    }
}
console.log(min(4, 8));
console.log(min(6, 6));



//Задание 2
function parity(n) {
    if (n % 2 === 0) {
        return 'Число чётное';
    } else {
        return 'Число нечётное';
    }
}
console.log(parity(4));
console.log(parity(7));



// Задание 3
function squ(x) {
    console.log(x * x);
    return x * x;
}
squ(3);



// Задание 4
function age() {
    let g = prompt('Сколько тебе лет?');
    if (g <= 0) {
        alert('Вы ввели неправильное значение');
    } else {
        if (g <= 12) {
            alert('Привет, друг!');
        } else {
            alert('Добро пожаловать!');
        }
    }
}


// Задание 5
function numbers(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return 'Одно или оба значения не являются числом';
    } else {
        return a * b;
    }
}
console.log(numbers(3, 5));


// Задание 6
function numb() {
    let n = prompt('Введите число');
    if (isNaN(n)) {
        return 'Переданный параметр не является числом';
    } else {
        q = n ** 3;
        return `${n} в кубе равняется ${q}`;
    }
}
console.log(numb())


// Задание 7
const circle1 = {
    radius: 5,
    getArea() {
        return Math.PI * (circle1.radius ** 2);
    },
    getPerimeter() {
        return 2 * Math.PI * circle1.radius;
    }
}
const circle2 = {
    radius: 3,
    getArea() {
        return Math.PI * (circle2.radius ** 2);
    },
    getPerimeter() {
        return 2 * Math.PI * circle2.radius;
    }
}
console.log(circle1.getArea());
console.log(circle2.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getPerimeter());
