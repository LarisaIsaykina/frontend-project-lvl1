import {
  greeting, askUserName, getRandomDigit, getUserAnswer, check,
} from '../index.js';

const userName = askUserName();
greeting(userName);
console.log('Find the greatest common divisor of given numbers.');

const findGcd = (firstNum, secondNum) => {
  if (firstNum === secondNum) {
    return firstNum;
  }
  if (firstNum < secondNum) {
    let divisor = firstNum;
    while (divisor >= 1) {
      const firstRemainder = firstNum % divisor;
      const secondRemainder = secondNum % divisor;
      if ((firstRemainder === 0) && (secondRemainder === 0)) {
        return divisor;
      }
      divisor -= 1;
    } return divisor;
  }
  let divisor = secondNum;
  while (divisor >= 1) {
    const firstRemainder = firstNum % divisor;
    const secondRemainder = secondNum % divisor;
    if ((firstRemainder === 0) && (secondRemainder === 0)) {
      return divisor;
    }
    divisor -= 1;
  } return divisor;
};

// eslint-disable-next-line import/prefer-default-export
export const playWithUser = () => {
  let i = 0;
  while (i <= 2) {
    const firstNumber = getRandomDigit(1, 100);
    const secondNumber = getRandomDigit(1, 100);
    console.log(`Question: ${firstNumber} ${secondNumber} `);
    const userAnswer = Number(getUserAnswer());
    const correctAnswer = findGcd(firstNumber, secondNumber);

    if (check(correctAnswer, userAnswer, userName) === true) {
      i += 1;
    } else {
      return;
    }
  } console.log(`Congratulations, ${userName}!`);
};
