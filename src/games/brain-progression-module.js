import {
  // eslint-disable-next-line max-len
  getUserAnswer, interactWithUser,
} from '../index.js';
import { getRandomDigit } from '../utils.js';

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
  return [arr.join(' '), hiddenValue];
};

const generateRound = () => {
  const progression = generateProgression();
  console.log(`Question: ${progression[0]}`);
  const userAnswer = Number(getUserAnswer());
  const correctAnswer = progression[1];
  return [userAnswer, correctAnswer];
};

// eslint-disable-next-line import/prefer-default-export
export const playWithUser = () => {
  interactWithUser('What number is missing in the progression?', generateRound);
};
