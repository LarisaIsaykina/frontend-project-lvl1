/* eslint-disable import/prefer-default-export */
import {
  // eslint-disable-next-line max-len
  greeting, askUserName, getRandomDigit, getUserAnswer, check,
} from '../index.js';

const userName = askUserName();
greeting(userName);

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const isPrime = (value) => {
  let divisor = value;
  const arr = [];
  while (divisor > 0) {
    const remainder = value % divisor;
    if (remainder === 0) {
      arr.push(divisor);
      divisor -= 1;
    } else {
      divisor -= 1;
    }
  } if (arr.length > 2 || arr.length === 1) {
    return 'no';
  }
  return 'yes';
};

export const playWithUser = () => {
  let i = 0;
  while (i <= 2) {
    const num = getRandomDigit(1, 100);

    console.log(`Question: ${num}`);
    const userAnswer = getUserAnswer();
    const correctAnswer = isPrime(num);

    if (check(correctAnswer, userAnswer, userName) === true) {
      i += 1;
    } else {
      return;
    }
  } console.log(`Congratulations, ${userName}!`);
};
