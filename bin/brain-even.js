#!/usr/bin/env node
import {
  // eslint-disable-next-line max-len
  greeting, askUserName, getRandomDigit, getUserAnswer, isEven, checkFirstLevel,
} from '../src/index.js';

const userName = askUserName();
greeting(userName);

console.log('Answer "yes" if the number is even, otherwise answer "no".');

// eslint-disable-next-line import/prefer-default-export

const playWithUser = () => {
  let i = 0;
  while (i <= 2) {
    const randomNumber = getRandomDigit(1, 100);

    console.log(`Question: ${randomNumber}`);

    const userAnswer = getUserAnswer();
    const correctAnswer = isEven(randomNumber);

    const boolean = checkFirstLevel(correctAnswer, userAnswer);
    if (boolean === true) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`'${userAnswer}' is a wrong answer ;(. Correct answer was '${correctAnswer}'. Try again, ${userName}!`);
      return;
    }
  } console.log(`Congratulations, ${userName}!`);
};

playWithUser();
