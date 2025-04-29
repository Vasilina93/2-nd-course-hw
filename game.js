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