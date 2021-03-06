import interactWithUser from '../index.js';
import { getRandomDigit } from '../utils.js';

const symbols = ['+', '-', '*'];

const calculate = (firstNum, secondNum, symbol) => {
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
  const question = `Question: ${firstNumber} ${randomSymbol} ${secondNumber} `;
  const correctAnswer = calculate(firstNumber, secondNumber, randomSymbol);

  return [question, correctAnswer.toString()];
};

const playWithUser = () => {
  const taskMessage = 'What is the result of the expression?';
  interactWithUser(taskMessage, generateRound);
};

export default playWithUser;
