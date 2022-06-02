import {
  // eslint-disable-next-line max-len
  interactWithUser,
} from '../index.js';
import { getRandomDigit } from '../utils.js';

const generateProgression = (firstMember, step, length, hiddenIndex) => {
  const arr = [];
  let i = 0;
  let firstDigit = firstMember;

  let hiddenValue;

  while (i <= length - 1) {
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
  const lengthOfProgression = 10;
  const minStep = 2;
  const maxStep = 9;
  const step = getRandomDigit(minStep, maxStep);
  const minValue = 1;
  const maxValue = 200;
  const firstMember = getRandomDigit(minValue, maxValue);
  const minIndex = 0;
  const maxIndex = lengthOfProgression - 1;
  const hiddenIndex = getRandomDigit(minIndex, maxIndex);
  const progression = generateProgression(firstMember, step, lengthOfProgression, hiddenIndex);
  console.log(`Question: ${progression[0]}`);
  const correctAnswer = progression[1];
  return correctAnswer.toString();
};

// eslint-disable-next-line import/prefer-default-export
export const playWithUser = () => {
  interactWithUser('What number is missing in the progression?', generateRound);
};
