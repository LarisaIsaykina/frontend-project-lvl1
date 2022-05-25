#!/usr/bin/env node

import {
  // eslint-disable-next-line max-len
  greeting, askUserName, getRandomDigit, getUserAnswer, getRandomSign, calculateCorrectAnswer, checkFirstLevel,
} from '../src/index.js';

const userName = askUserName();
greeting(userName);

console.log('What is the result of the expression?');

const collOfSigns = ['+', '-', '*'];

const playWithUser = () => {
  let i = 0;
  while (i <= 2) {
    const randomSign = getRandomSign(collOfSigns);
    const firstNumber = getRandomDigit(1, 100);
    const secondNumber = getRandomDigit(1, 100);
    console.log(`Question: ${firstNumber} ${randomSign} ${secondNumber} `);
    const userAnswer = Number(getUserAnswer());
    const correctAnswer = calculateCorrectAnswer(firstNumber, secondNumber, randomSign);

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
