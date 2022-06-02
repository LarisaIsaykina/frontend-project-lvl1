/* eslint-disable import/prefer-default-export */
import {
  // eslint-disable-next-line max-len
  interactWithUser,
} from '../index.js';
import { getRandomDigit } from '../utils.js';

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
    return false;
  }
  return true;
};

const generateRound = () => {
  const min = 1;
  const max = 300;
  const num = getRandomDigit(min, max);
  console.log(`Question: ${num}`);
  const correctAnswer = isPrime(num) ? 'yes' : 'no';
  return correctAnswer;
};

export const playWithUser = () => {
  interactWithUser('Answer "yes" if the number is prime. Otherwise answer "no".', generateRound);
};
