import {
  // eslint-disable-next-line max-len
  greeting, askUserName, getRandomDigit, getUserAnswer, check,
} from '../index.js';

const userName = askUserName();
greeting(userName);

console.log('What number is missing in the progression?');

const generateProgression = () => {
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

// eslint-disable-next-line import/prefer-default-export
export const playWithUser = () => {
  let i = 0;
  while (i <= 2) {
    const pair = generateProgression();

    console.log(`Question: ${pair[0]}`);

    const userAnswer = Number(getUserAnswer());
    const correctAnswer = pair[1];

    if (check(correctAnswer, userAnswer, userName) === true) {
      i += 1;
    } else {
      return;
    }
  } console.log(`Congratulations, ${userName}!`);
};
