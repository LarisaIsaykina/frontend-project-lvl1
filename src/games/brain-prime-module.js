import interactWithUser from '../index.js';
import { getRandomDigit, isPrime } from '../utils.js';

const generateRound = () => {
  const min = 1;
  const max = 300;
  const num = getRandomDigit(min, max);
  const question = `Question: ${num}`;
  const correctAnswer = isPrime(num) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const playWithUser = () => {
  const taskMessage = 'Answer "yes" if the number is prime. Otherwise answer "no".';
  interactWithUser(taskMessage, generateRound);
};

export default playWithUser;
