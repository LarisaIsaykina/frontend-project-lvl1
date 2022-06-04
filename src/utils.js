export const getRandomDigit = (min, max) => {
  const newMin = Math.ceil(min);
  const newMax = Math.floor(max);
  return Math.floor(Math.random() * (newMax - newMin + 1) + newMin);
};

export const calculate = (firstNum, secondNum, symbol) => {
  switch (symbol) {
    case '+':
      return firstNum + secondNum;
    case '-':
      return firstNum - secondNum;
    case '*':
      return firstNum * secondNum;
    default:
      return symbol;
  }
};

export const isEven = (number) => number % 2 === 0;

export const findGcd = (firstNum, secondNum) => {
  if (!secondNum) {
    return firstNum;
  }
  return findGcd(secondNum, firstNum % secondNum);
};

export const isPrime = (value) => {
  let divisor = value;
  const arr = [];
  while (divisor > 0) {
    const remainder = value % divisor;
    if (remainder === 0) {
      arr.push(divisor);
      divisor -= 1;
    } else {
      divisor -= 1;
    }
  } if (arr.length > 2 || arr.length === 1) {
    return false;
  }
  return true;
};

export const generateProgression = (firstMember, step, length, hiddenIndex) => {
  const arr = [];
  let i = 0;
  let firstDigit = firstMember;

  while (i <= length - 1) {
    if (i === hiddenIndex) {
      arr.push('..');
      firstDigit += step;
      i += 1;
    } else {
      arr.push(firstDigit);
      firstDigit += step;
      i += 1;
    }
  }

  return arr.join(' ');
};
