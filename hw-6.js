// Задание 1
const mass = [1, 5, 4, 10, 0, 3];
for (i = 0; i < mass.length; i++) {
    console.log(mass[i])
    if (mass[i] === 10) {
        break;
    }
}


// Задание 2
const mass2 = [1, 5, 4, 10, 0, 3]
console.log(mass2.indexOf(4))


// Задание 3
const mass3 = [1, 3, 5, 10, 20]
console.log(mass3.join(' '))


// Задание 4
let newMass = []
for (let i = 0; i < 3; i++) {
    const mass4 = [];
    for (let i = 0; i < 3; i++) {
        mass4.push(1);
    }
    newMass.push(mass4);
}
console.log(newMass)


// Задание 5
let mass5 = [1, 1, 1]
mass5.push(2, 2, 2)
console.log(mass5)


// Задание 6
const mass6 = [9, 8, 7, 'a', 6, 5]
mass6.sort()
mass6.pop()
console.log(mass6)


// Задание 7
const mass7 = [9, 8, 7, 6, 5]
let x = +prompt('Угадай число')
if (mass7.includes(x)) {
    alert('Угадал')
} else {
    alert('Не угадал')
}


// Задание 8
let str = 'abcdef';
str = str.split('').reverse().join('');
console.log(str)


// Задание 9
const mass9 = [[1, 2, 3], [4, 5, 6]]
const newMass9 = mass9.flat()
console.log(newMass9)



// Задание 10
const mass10 = [3, 5, 2, 7, 9, 10, 1, 4, 6, 8]
for (let i = 0; i < mass10.length; i++) {
    if (mass10[i + 1])
        console.log(mass10[i] + mass10[i + 1]);
}


// Задание 11
function square(mass11) {
    return mass11.map(item => item ** 2);
}
console.log(square([2, 5, 9]));



// Задание 12
function strLength(mass12) {
    return mass12.map(item => item.length);
}
console.log(strLength(['eivfj', 'qwerty']));



// Задание 13
function negative(mass13) {
    return mass13.filter(item => item < 0);
}
console.log(negative([-1, 3, 6, -8, 2, -2]));



// Задание 14
function random() {
    return Math.floor(Math.random() * 10);
}
const mass14 = [];
for (let i = 0; i < 10; i++) {
    mass14.push(random());
}
const newMass14 = [];
for (let i = 0; i < mass14.length; i++) {
    if (mass14[i] % 2 === 0) {
        newMass14.push(mass14[i]);
    }
}
console.log(newMass14)




// Задание 15
function random() {
    return Math.floor(Math.random() * 10);
}
const mass15 = [];
for (let i = 0; i < 6; i++) {
    mass15.push(random());
}
console.log(mass15);
console.log(mass15.reduce((a, b) => a + b) / mass15.length);
