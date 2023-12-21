import readlineSync from 'readline-sync';
import startRPS from '../index.js';

  const greetingsMsg = 'Добро пожаловать!';
  
  const startEngine = (ruleMsg, getGameOptions) => {
    console.log(`${greetingsMsg}`);
    const userName = readlineSync.question('Введите ваше имя: ');
    console.log(`\nПривет, ${userName}!`);
    startRPS();
  };

  export default startEngine;
