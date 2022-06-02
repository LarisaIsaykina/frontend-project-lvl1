/* eslint-disable import/prefer-default-export */
import readlineSync from 'readline-sync';
import { greeting } from './cli.js';

export const interactWithUser = (gameTask, getAnswer) => {
  const userName = greeting();
  console.log(gameTask);
  let i = 1;
  const roundCount = 3;
  while (i <= roundCount) {
    const correctAnswer = getAnswer();
    const userAnswer = readlineSync.question('Your answer: ');

    if (correctAnswer === userAnswer) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`'${userAnswer}' is a wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${userName}!`);
      return;
    }
  } console.log(`Congratulations, ${userName}!`);
};
