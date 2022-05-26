/* eslint-disable import/prefer-default-export */
import {
  // eslint-disable-next-line max-len
  greeting, askUserName, getRandomDigit, getUserAnswer, check,
} from '../index.js';

const userName = askUserName();
greeting(userName);

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const isEven = (digit) => {
  const remainder = digit % 2;
  if (remainder === 0) {
    return 'yes';
  }
  return 'no';
};

export const playWithUser = () => {
  let i = 0;
  while (i <= 2) {
    const randomNumber = getRandomDigit(1, 100);

    console.log(`Question: ${randomNumber}`);

    const userAnswer = getUserAnswer();
    const correctAnswer = isEven(randomNumber);

    if (check(correctAnswer, userAnswer, userName) === true) {
      i += 1;
    } else {
      return;
    }
  } console.log(`Congratulations, ${userName}!`);
};
