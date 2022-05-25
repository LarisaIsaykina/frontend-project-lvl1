#!/usr/bin/env node

import {
  // eslint-disable-next-line max-len
  greeting, askUserName, getUserAnswer, findGcd, getRandomDigit,
  checkFirstLevel,
} from '../src/index.js';

const userName = askUserName();
greeting(userName);

console.log('Find the greatest common divisor of given numbers.');

const playWithUser = () => {
  let i = 0;
  while (i <= 2) {
    const firstNumber = getRandomDigit(1, 100);
    const secondNumber = getRandomDigit(1, 100);
    console.log(`Question: ${firstNumber}   ${secondNumber} `);
    const userAnswer = Number(getUserAnswer());
    const correctAnswer = findGcd(firstNumber, secondNumber);

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
