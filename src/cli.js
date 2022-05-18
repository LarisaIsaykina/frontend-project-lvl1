import readlineSync from "readline-sync";

export const greeting = () => {
  const userName = readlineSync.question("May I have your name?");
  const result = console.log(`Hello, ${userName}!`);
  return result;
};
