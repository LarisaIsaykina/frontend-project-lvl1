import interactWithUser from '../index.js';
import { getRandomDigit } from '../utils.js';

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const num = getRandomDigit(1, 299);
  const question = `Question: ${num}`;
  const correctAnswer = isEven(num) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const playWithUser = () => {
  const taskMessage = 'Answer "yes" if the number is even, otherwise answer "no".';
  interactWithUser(taskMessage, generateRound);
};

export default playWithUser;
