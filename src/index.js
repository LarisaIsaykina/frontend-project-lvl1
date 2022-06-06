import readlineSync from 'readline-sync';

const interactWithUser = (gameTask, generateRoundsData) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name?  ');

  console.log(`Hello, ${userName}!`);
  console.log(gameTask);

  const roundCount = 3;

  for (let i = 1; i <= roundCount; i += 1) {
    const pairQuestionAnswer = generateRoundsData();
    const question = pairQuestionAnswer[0];
    const correctAnswer = pairQuestionAnswer[1];

    console.log(question);

    const userAnswer = readlineSync.question('Your answer: ');

    if (correctAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is a wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${userName}!`);
      return;
    } console.log('Correct!');
  } console.log(`Congratulations, ${userName}!`);
};

export default interactWithUser;
