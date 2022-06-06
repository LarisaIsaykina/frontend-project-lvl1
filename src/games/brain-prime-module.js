import interactWithUser from '../index.js';
import { getRandomDigit } from '../utils.js';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const generateRound = () => {
  const num = getRandomDigit(1, 300);
  const question = `Question: ${num}`;
  const correctAnswer = isPrime(num) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const playWithUser = () => {
  const taskMessage = 'Answer "yes" if the number is prime. Otherwise answer "no".';
  interactWithUser(taskMessage, generateRound);
};

export default playWithUser;
