#!/usr/bin/env node

import readlineSync from 'readline-sync';

const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const getRandomDigit = (min, max) => {
  const number = Math.random() * (max - min) + min;
  return Math.round(number);
};

const isEven = (digit) => {
  const remainder = digit % 2;
  if (remainder === 0) {
    return 'yes';
  }
  return 'no';
};

// eslint-disable-next-line import/prefer-default-export
const checkUserAnswer = (answer, number) => {
  if (answer === isEven(number)) {
    return true;
  }
  return false;
};

const playWithUser = () => {
  // eslint-disable-next-line no-unreachable-loop
  for (let i = 0; i <= 2; i += 1) {
    const randomNumber = getRandomDigit(1, 100);

    console.log(`Question: ${randomNumber}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (checkUserAnswer(userAnswer, randomNumber) === true) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is a wrong answer ;(. Correct answer was '${isEven(randomNumber)}'. Try again, ${userName}!`);
      return;
    }
  } console.log(`Congratulations, ${userName}!`);
};

playWithUser();
