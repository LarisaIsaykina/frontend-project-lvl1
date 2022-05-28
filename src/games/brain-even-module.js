/* eslint-disable import/prefer-default-export */
import {
  // eslint-disable-next-line max-len
  getUserAnswer, interactWithUser,
} from '../index.js';
import { getRandomDigit } from '../utils.js';

const isEven = (number) => {
  const remainder = number % 2;
  if (remainder === 0) {
    return true;
  }
  return false;
};
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

const generateRound = () => {
  const num = getRandomDigit(1, 100);
  console.log(`Question: ${num}`);
  const userAnswer = getUserAnswer();
  const correctAnswer = isEven(num);
  const normalizedAnswer = normalize(correctAnswer);
  return [userAnswer, normalizedAnswer];
};

export const playWithUser = () => {
  interactWithUser('Answer "yes" if the number is even, otherwise answer "no".', generateRound);
};
