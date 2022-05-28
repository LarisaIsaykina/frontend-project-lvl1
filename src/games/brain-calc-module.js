import {
  getUserAnswer, interactWithUser,
} from '../index.js';
import { getRandomDigit } from '../utils.js';

const collOfSymbols = ['+', '-', '*'];

const calculateCorrectAnswer = (firstNum, secondNum, symbol) => {
  switch (symbol) {
    case '+':
      return firstNum + secondNum;
    case '-':
      return firstNum - secondNum;
    case '*':
      return firstNum * secondNum;
    default:
      return symbol;
  }
};

const generateRound = () => {
  const randomSymbol = collOfSymbols[getRandomDigit(0, collOfSymbols.length - 1)];
  const firstNumber = getRandomDigit(1, 100);
  const secondNumber = getRandomDigit(1, 100);
  console.log(`Question: ${firstNumber} ${randomSymbol} ${secondNumber} `);
  const userAnswer = Number(getUserAnswer());
  const correctAnswer = calculateCorrectAnswer(firstNumber, secondNumber, randomSymbol);
  return [userAnswer, correctAnswer];
};
// eslint-disable-next-line import/prefer-default-export
export const playWithUser = () => {
  interactWithUser('What is the result of the expression?', generateRound);
};
