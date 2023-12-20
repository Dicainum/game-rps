import readlineSync from 'readline-sync';

const startRPS = (ruleMsg, getGameOptions) => {
    
// камень = 0;
// ножницы = 1;
// бумага = 2;


function getUserChoise (){
    const userChoise = readlineSync.question('Введите один из вариантов\n1. камень \n2. ножницы\n3. бумага \n');
    if (userChoise === null) {
        return userChoise;
    }
    return parseInt(userChoise - 1);
}

function gameStep() {
    const computerChoise = Math.floor(Math.random() * 3);
    console.log(computerChoise);
    const userChoise = getUserChoise();
    console.log(userChoise);
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
        result = 'Пользователь выиграл';
    }
    else if (userScore < computerScore){
        result = 'Компьютер выиграл';
    }
    else if (userScore === computerScore){
        result = 'Ничья!';
    }
    console.log(result);
}

gameStep();}

export default startRPS;