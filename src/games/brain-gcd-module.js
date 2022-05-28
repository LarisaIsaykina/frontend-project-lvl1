import {
  getUserAnswer, interactWithUser,
} from '../index.js';
import { getRandomDigit } from '../utils.js';

const findGcd = (firstNum, secondNum) => {
  if (!secondNum) {
    return firstNum;
  }
  return findGcd(secondNum, firstNum % secondNum);
};

const generateRound = () => {
  const firstNum = getRandomDigit(1, 100);
  const secondNum = getRandomDigit(1, 100);
  console.log(`Question: ${firstNum} ${secondNum}`);
  const userAnswer = Number(getUserAnswer());
  const correctAnswer = findGcd(firstNum, secondNum);
  return [userAnswer, correctAnswer];
};

// eslint-disable-next-line import/prefer-default-export
export const playWithUser = () => {
  interactWithUser('Find the greatest common divisor of given numbers.', generateRound);
};
