import readlineSync from 'readline-sync';

export const askUserName = () => {
  const userName = readlineSync.question('May I have your name?  ');
  return userName;
};

export const greeting = (userName) => {
  console.log(`Hello, ${userName}!`);
};

export const getUserAnswer = () => {
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
};

export const getRandomDigit = (min, max) => {
  const number = Math.random() * (max - min) + min;
  return Math.round(number);
};

export const checkUserAnswer = (correctAnswer, userAnswer, userName) => {
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' is a wrong answer ;(. Correct answer was '${correctAnswer}'. Try again, ${userName}!`);
  }
};

export const checkFirstLevel = (correctAnswer, userAnswer) => {
  if (userAnswer === correctAnswer) {
    return true;
  }
  return false;
};

export const isPrime = (value) => {
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

export const getRandomSign = (arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length);

  const randomSign = arr[randomIndex];

  return randomSign;
};

export const calculateCorrectAnswer = (firstNum, secondNum, arithSign) => {
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

export const isEven = (digit) => {
  const remainder = digit % 2;
  if (remainder === 0) {
    return 'yes';
  }
  return 'no';
};

export const generateProgression = () => {
  const step = getRandomDigit(2, 7);
  const firstMember = getRandomDigit(1, 200);
  const hiddenIndex = getRandomDigit(0, 9);
  const arr = [];
  let i = 0;
  let firstDigit = firstMember;

  let hiddenValue;

  while (i <= 9) {
    if (i === hiddenIndex) {
      arr.push('..');
      hiddenValue = firstMember + step * hiddenIndex;

      firstDigit += step;
      i += 1;
    } else {
      arr.push(firstDigit);
      firstDigit += step;
      i += 1;
    }
  }
  return [arr.join('  '), hiddenValue];
};

export const findGcd = (firstNum, secondNum) => {
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
