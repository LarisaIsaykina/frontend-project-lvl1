#!/usr/bin/env node

import {
  // eslint-disable-next-line max-len
  greeting, askUserName, getUserAnswer, generateProgression,
  checkFirstLevel,
} from '../src/index.js';

const userName = askUserName();
greeting(userName);

console.log('What number is missing in the progression?');

const playWithUser = () => {
  let i = 0;
  while (i <= 2) {
    const pair = generateProgression();

    console.log(`Question: ${pair[0]}`);

    const userAnswer = Number(getUserAnswer());
    const correctAnswer = pair[1];

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
