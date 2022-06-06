import interactWithUser from '../index.js';
import { getRandomDigit } from '../utils.js';

const generateProgression = (firstMember, step, length, hiddenIndex) => {
  const arr = [];
  let i = 0;
  let firstDigit = firstMember;

  while (i <= length - 1) {
    if (i === hiddenIndex) {
      arr.push('..');
      firstDigit += step;
      i += 1;
    } else {
      arr.push(firstDigit);
      firstDigit += step;
      i += 1;
    }
  }

  return arr.join(' ');
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
  const correctAnswer = firstMember + step * hiddenIndex;
  const question = `Question: ${progression}`;

  return [question, correctAnswer.toString()];
};

const playWithUser = () => {
  const gameTask = 'What number is missing in the progression?';
  interactWithUser(gameTask, generateRound);
};

export default playWithUser;
