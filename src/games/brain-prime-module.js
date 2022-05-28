/* eslint-disable import/prefer-default-export */
import {
  // eslint-disable-next-line max-len
  getUserAnswer, interactWithUser,
} from '../index.js';
import { getRandomDigit } from '../utils.js';

const normalize = (answer) => {
  switch (answer) {
    case true:
      return 'yes';
    case false:
      return 'no';
    default:
      return answer;
  }
};

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
  const num = getRandomDigit(1, 100);
  console.log(`Question: ${num}`);
  const userAnswer = getUserAnswer();
  const correctAnswer = isPrime(num);
  const normalizedAnswer = normalize(correctAnswer);
  return [userAnswer, normalizedAnswer];
};

export const playWithUser = () => {
  interactWithUser('Answer "yes" if the number is prime. Otherwise answer "no".', generateRound);
};
