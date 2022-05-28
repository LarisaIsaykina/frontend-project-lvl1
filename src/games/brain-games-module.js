import { greeting, askUserName } from '../index.js';

// eslint-disable-next-line import/prefer-default-export
export const playWithUser = () => {
  const userName = askUserName();
  greeting(userName);
};
