import { BASEBALL_NUMBERS_LENGTH } from '../constants/numbers.js';

class CalculateStrikeBallCountService {
  getStrikeBallCounts(userNumbers, computerNumbers) {
    const strikeCount = this.#getStrikeCount(userNumbers, computerNumbers);
    const ballCount = this.#getBallCount(userNumbers, computerNumbers);
    return { strikeCount, ballCount };
  }

  #getStrikeCount(userNumbers, computerNumbers) {
    let strikeCount = 0;
    for (let idx = 0; idx < BASEBALL_NUMBERS_LENGTH; idx++) {
      if (userNumbers[idx] === computerNumbers[idx]) strikeCount += 1;
    }
    return strikeCount;
  }

  #getBallCount(userNumbers, computerNumbers) {
    let ballCount = 0;
    userNumbers.forEach((userNumber, idx) => {
      if (computerNumbers.includes(userNumber) && userNumbers[idx] !== computerNumbers[idx])
        ballCount += 1;
    });
    return ballCount;
  }
}

export default CalculateStrikeBallCountService;
