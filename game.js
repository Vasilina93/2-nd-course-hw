function whatNumber() {
    const chislo = Math.floor(Math.random() * 100) + 1;
    let step = 0;
    let userAnswer;
    while (true) {
        userAnswer = Number(prompt('Угадай число от 1 до 100'));
        step++;
        if (chislo === userAnswer) {
            alert('Поздравляю, ты угадал');
            break;
        } else if (chislo < userAnswer) {
            alert('Не угадал, загаданное число меньше');
        } else {
            alert('Не угадал, загаданное число больше')
        }
    }
}

function arithmetic(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function freeArithmetic() {
    const numb1 = arithmetic(1, 50);
    const numb2 = arithmetic(1, 50);
    const option = arithmetic(0, 3);
    let sign, correctAnswer;
    switch (option) {
        case 0:
            sign = '+';
            correctAnswer = numb1 + numb2;
            break;
        case 1:
            sign = '-';
            correctAnswer = numb1 - numb2;
            break;
        case 2:
            sign = '*';
            numb1 = arithmetic(1, 10);
            numb2 = arithmetic(1, 10);
            correctAnswer = numb1 * numb2;
            break;
        case 3:
            sign = '/';
            numb2 = arithmetic(1, 10);
            numb1 = numb2 * arithmetic(1, 10);
            correctAnswer = numb1 / numb2;
            break;
    }
    const userAnswer = +prompt(`Сколько будет ${numb1} ${sign} ${numb2}?`);
    if (userAnswer === correctAnswer) {
        alert('Ответ верный');
    } else {
        alert('Неверный ответ');
    }
}

function flipText() {
    const userText = prompt("Введите текст");
    const reverseText = userText.split('').reverse().join('');
    alert('Перевернутый текст: ' + reverseText);
}

function viktorina() {
    const quiz = [
        {
            question: "Какой цвет неба?",
            options: ["  1. Красный", "  2. Синий", "  3. Зеленый"],
            correctAnswer: 2 // номер правильного ответа
        },
        {
            question: "Сколько дней в неделе?",
            options: ["  1. Шесть", "  2. Семь", "  3. Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["  1. Четыре", "  2. Пять", "  3. Шесть"],
            correctAnswer: 2
        }
    ];
    let right = 0;
    for (let i = 0; i < quiz.length; i++) {
        const userAnswer = +prompt(`Ответьте на вопрос: ${quiz[i].question}, варианты ответа (введите цифру): ${quiz[i].options}`);
        if (userAnswer === quiz[i].correctAnswer) {
            right++;
            alert('Верно');
        } else {
            alert('Ответ неверный');
        }
    }
    alert(`Вы ответили верно ${right} раз`);

}


function rockPaperScissors() {
    const userAnswer = prompt("Камень, ножницы, бумага?").toLowerCase();
    if (userAnswer !== 'камень' && userAnswer !== 'ножницы' && userAnswer !== 'бумага') {
        alert('Такого варианта нет');
        return;
    }

    const answer = ['камень', 'ножницы', 'бумага'];
    const computerAnswer = answer[Math.floor(Math.random() * answer.length)];
    alert(`Вы выбрали: ${userAnswer}\nКомпьютер выбрал: ${computerAnswer}`);

    if (userAnswer === computerAnswer) {
        alert('Ничья!');
    } else if (
        (userAnswer === 'камень' && computerAnswer === 'ножницы') ||
        (userAnswer === 'ножницы' && computerAnswer === 'бумага') ||
        (userAnswer === 'бумага' && computerAnswer === 'камень')
    ) {
        alert('Вы победили!');
    } else {
        alert('Компьютер победил!');
    }
}


function colorChange() {
    const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'grey', 'violet', 'lilac', 'pink', 'brown', 'darkblue'];
    const changeColor = colors[Math.floor(Math.random() * colors.length)];

    minigames.body.style.backgroundColor = changeColor;
    return changeColor;
}