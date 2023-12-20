import readlineSync from 'readline-sync';
import startRPS from '../index.js';

  const greetingsMsg = 'Добро пожаловать!';
  //const timesCount = 3;
  
  const startEngine = (ruleMsg, getGameOptions) => {
    console.log(`${greetingsMsg}`);
    const userName = readlineSync.question('Введите ваше имя: ');
    console.log(`Привет, ${userName}!`);
    startRPS();
  };

  export default startEngine;
