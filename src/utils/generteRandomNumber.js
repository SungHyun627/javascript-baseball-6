import { Random } from '@woowacourse/mission-utils';

const generteRandomNumberInRange = (min, max) => Random.pickNumberInRange(min, max);
export const generateNotDuplicatedNumbersInRange = (min, max, numOfnumbers) => {
  const numbers = [];
  let count = 0;
  while (count !== numOfnumbers) {
    const generatedNumber = generteRandomNumberInRange(min, max);
    if (numbers.includes(generatedNumber)) continue;
    numbers.push(generatedNumber);
    count += 1;
  }
  return numbers;
};
