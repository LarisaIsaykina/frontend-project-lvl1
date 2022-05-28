import readlineSync from 'readline-sync';

export const askUserName = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?  ');
  return userName;
};

export const greeting = (userName) => {
  console.log(`Hello, ${userName}!`);
};

export const getUserAnswer = () => {
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
};

export const interactWithUser = (gameTask, getAnswers) => {
  const userName = askUserName();
  greeting(userName);

  console.log(gameTask);
  let i = 0;
  while (i <= 2) {
    const pairOfAnswers = getAnswers();
    if (pairOfAnswers[0] === pairOfAnswers[1]) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`'${pairOfAnswers[0]}' is a wrong answer ;(. Correct answer was '${pairOfAnswers[1]}'. Let's try again, ${userName}!`);
      return;
    }
  } console.log(`Congratulations, ${userName}!`);
};
