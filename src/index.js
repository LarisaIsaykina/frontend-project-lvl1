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

export const checkFirstLevel = (correctAnswer, userAnswer) => {
  if (userAnswer === correctAnswer) {
    return true;
  }
  return false;
};

export const check = (correctAnswer, userAnswer, userName) => {
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${userAnswer}' is a wrong answer ;(. Correct answer was '${correctAnswer}'. Try again, ${userName}!`);
  return false;
};
