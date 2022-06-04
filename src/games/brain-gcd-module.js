import interactWithUser from '../index.js';
import { getRandomDigit, findGcd } from '../utils.js';

const generateRound = () => {
  const min = 1;
  const max = 200;
  const firstNum = getRandomDigit(min, max);
  const secondNum = getRandomDigit(min, max);
  const question = `Question: ${firstNum} ${secondNum}`;
  const correctAnswer = findGcd(firstNum, secondNum);

  return [question, correctAnswer.toString()];
};

const playWithUser = () => {
  const taskMessage = 'Find the greatest common divisor of given numbers.';
  interactWithUser(taskMessage, generateRound);
};

export default playWithUser;
