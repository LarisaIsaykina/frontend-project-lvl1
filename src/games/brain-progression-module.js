import interactWithUser from '../index.js';
import { getRandomDigit, generateProgression } from '../utils.js';

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
