// Задание 1
const people1 = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];

console.log(people1.sort((a, b) => a.age - b.age));



// Задание 2
function isPositive(numb2) {
    return numb2 > 0;
}

function isMale(mass2) {
    return mass2.gender === "male";
}

function filter(array2, ruleFunction) {
    const result = [];
    for (let i = 0; i < array2.length; i++) {
        if (ruleFunction(array2[i])) {
            result.push(array2[i]);
        };
    }
    return result;
}

console.log(filter([3, -4, 1, 9], isPositive));

const people2 = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];

console.log(filter(people2, isMale));



// Задание 3
const intervalId = setInterval(() => {
    console.log(new Date());
}, 3000);

setTimeout(() => {
    clearInterval(intervalId);
    console.log('30 секунд прошло');
}, 30000);



// Задание 4
function delayForSecond(callback) {
    setTimeout(callback, 1000);
};

delayForSecond(function () {
    console.log('Привет, Глеб!');
});



// Задание 5
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if (cb) { cb(); }
    }, 1000)
}

function sayHi(name) {
    console.log(`Привет, ${name}!`);
}

delayForSecond(() => sayHi('Глеб'));