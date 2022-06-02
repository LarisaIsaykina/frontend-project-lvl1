import {
  interactWithUser,
} from '../index.js';
import { getRandomDigit } from '../utils.js';

const symbols = ['+', '-', '*'];

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
  const randomSymbol = symbols[getRandomDigit(0, symbols.length - 1)];
  const min = 1;
  const max = 100;
  const firstNumber = getRandomDigit(min, max);
  const secondNumber = getRandomDigit(min, max);
  console.log(`Question: ${firstNumber} ${randomSymbol} ${secondNumber} `);
  const correctAnswer = calculateCorrectAnswer(firstNumber, secondNumber, randomSymbol);
  return correctAnswer.toString();
};
// eslint-disable-next-line import/prefer-default-export
export const playWithUser = () => {
  interactWithUser('What is the result of the expression?', generateRound);
};
