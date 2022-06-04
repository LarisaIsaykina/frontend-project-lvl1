import interactWithUser from '../index.js';
import { getRandomDigit, isEven } from '../utils.js';

const generateRound = () => {
  const min = 1;
  const max = 299;
  const num = getRandomDigit(min, max);
  const question = `Question: ${num}`;
  const correctAnswer = isEven(num) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const playWithUser = () => {
  const taskMessage = 'Answer "yes" if the number is even, otherwise answer "no".';
  interactWithUser(taskMessage, generateRound);
};

export default playWithUser;
