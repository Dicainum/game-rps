import readlineSync from 'readline-sync';

const startRPS = (ruleMsg, getGameOptions) => {
    
// камень = 0;
// ножницы = 1;
// бумага = 2;

function getUserChoise (){
    const userChoise = readlineSync.question('\nВведите один из вариантов(введите цифру)\n1. Камень \n2. Ножницы\n3. Бумага \n\nВаш выбор: ');
    if (userChoise === null) {
        return userChoise;
    }
    return parseInt(userChoise - 1);
}

const gameStep = () => {
    let computerChoise = Math.floor(Math.random() * 3);
    let userChoise = getUserChoise();
    const arr = ["Камень", "Ножницы", "Бумага"];
    console.log("\nВы выбрали:", arr[userChoise]);
    console.log("\nВыбор компьютера:", arr[computerChoise]);
    let computerScore = 0;
    let userScore = 0;
    let result = '';

    if (userChoise == null) return false;

    else {

    if (computerChoise === 0 && userChoise === 2 
        || computerChoise === 1 && userChoise === 0 
        || computerChoise === 2 && userChoise === 1)
    {
        userScore++
    } 

    else if (computerChoise === 0 && userChoise === 1 
        || computerChoise === 1 && userChoise === 2
        || computerChoise === 2 && userChoise === 0)
    {
        computerScore++
    }

    else if (computerChoise === 0 && userChoise === 0 
        || computerChoise === 1 && userChoise === 1
        || computerChoise === 2 && userChoise === 2)
    {
        computerScore++
        userScore++
    }

    else return true;
}

    if (userScore > computerScore){
        console.log('\nВы победили выбрав', userChoise+1,"-", arr[userChoise],', компьютер выбрал', computerChoise+1,"-", arr[computerChoise]);
    //   console.log('\nВы победили! Ваш счёт: пользователь -', userScore, ', компьютер -', computerScore);
    }
    else if (userScore < computerScore){
        console.log('\nКомпьютер выиграл выбрав', computerChoise+1,"-", arr[computerChoise],', вы выбрали', userChoise+1,"-", arr[userChoise]);
    //    console.log('\nКомпьютер выиграл. Ваш счёт: пользователь -', userScore, ', компьютер -', computerScore);
    }
    else if (userScore === computerScore){
        console.log('\nНичья!');
    //    console.log('\nНичья! Ваш счёт: пользователь -', userScore, ', компьютер -', computerScore);
    }
    console.log(result);
}

gameStep();

const playAgain = readlineSync.question('Вы хотите сыграть ещё одну игру?(да|нет)\n');
    let x = playAgain.toLowerCase();
    if (x === "да") {
        gameStep();
    }
    else {
        console.log('\nСпасибо за игру!');
    }
    
};

const run = () => {
  startRPS();
};

export default run;
