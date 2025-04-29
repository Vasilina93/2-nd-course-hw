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
            correctAnswer = numb1 + numb2;
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