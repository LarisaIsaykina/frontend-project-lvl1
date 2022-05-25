#!/usr/bin/env node

import {
  greeting, askUserName, getRandomDigit, getUserAnswer, isPrime, checkFirstLevel,
} from '../src/index.js';

const userName = askUserName();
greeting(userName);

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const playWithUser = () => {
  let i = 0;
  while (i <= 2) {
    const num = getRandomDigit(1, 100);

    console.log(`Question: ${num}`);

    const userAnswer = getUserAnswer();
    const correctAnswer = isPrime(num);
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
