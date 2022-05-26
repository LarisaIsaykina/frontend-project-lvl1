import {
  greeting, askUserName, getRandomDigit, getUserAnswer, check,
} from '../index.js';

const userName = askUserName();
greeting(userName);

console.log('What is the result of the expression?');

const collOfSigns = ['+', '-', '*'];

const getRandomSign = (arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length);

  const randomSign = arr[randomIndex];

  return randomSign;
};

const calculateCorrectAnswer = (firstNum, secondNum, arithSign) => {
  switch (arithSign) {
    case '+':
      return firstNum + secondNum;
    case '-':
      return firstNum - secondNum;
    case '*':
      return firstNum * secondNum;
    default:
      return NaN;
  }
};

// eslint-disable-next-line import/prefer-default-export
export const playWithUser = () => {
  let i = 0;
  while (i <= 2) {
    const randomSign = getRandomSign(collOfSigns);
    const firstNumber = getRandomDigit(1, 100);
    const secondNumber = getRandomDigit(1, 100);
    console.log(`Question: ${firstNumber} ${randomSign} ${secondNumber} `);
    const userAnswer = Number(getUserAnswer());
    const correctAnswer = calculateCorrectAnswer(firstNumber, secondNumber, randomSign);

    if (check(correctAnswer, userAnswer, userName) === true) {
      i += 1;
    } else {
      return;
    }
  } console.log(`Congratulations, ${userName}!`);
};
