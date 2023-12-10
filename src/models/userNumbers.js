import { ERROR_MESSAGES } from '../constants/messages.js';
import { BASEBALL_NUMBERS_RANGE, BASEBALL_NUMBERS_COUNT } from '../constants/numbers.js';

class UserNumbers {
  #userNumbers;

  constructor(userNumbers) {
    this.#userNumbers = userNumbers;
    this.#validateUserNumbers();
  }

  #validateUserNumbers() {
    if (!this.#isNumbers()) throw new Error(ERROR_MESSAGES.notNumber);
    if (!this.#isAllNumbersInRange()) throw new Error(ERROR_MESSAGES.notInRange);
    if (!this.#isThreeDigits()) throw new Error(ERROR_MESSAGES.notThreeDigits);
    return true;
  }

  #isNumbers() {
    const regex = /[0-9]/;
    return this.#userNumbers.every((userNumber) => regex.test(userNumber));
  }

  #isThreeDigits() {
    return this.#userNumbers.length === BASEBALL_NUMBERS_COUNT;
  }
  #isAllNumbersInRange() {
    return this.#userNumbers.every(
      (userNumber) =>
        BASEBALL_NUMBERS_RANGE.max >= userNumber && BASEBALL_NUMBERS_RANGE.min <= userNumber
    );
  }
}

export default UserNumbers;
