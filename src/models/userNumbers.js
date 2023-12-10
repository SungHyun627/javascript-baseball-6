import { ERROR_MESSAGES } from '../constants/messages.js';
import { BASEBALL_NUMBERS } from '../constants/numbers.js';

class UserNumbers {
  #userNumbers;

  constructor(userNumbers) {
    this.#userNumbers = userNumbers;
    this.#validateUserNumbers();
  }

  #validateUserNumbers() {
    if (!this.#isNumbers()) throw new Error(ERROR_MESSAGES.notNumber);
    if (!this.#isAllNumbersInRange()) throw new Error(ERROR_MESSAGES.notInRange);
  }

  #isNumbers() {
    const regex = /[0-9]/;
    return this.#userNumbers.every((userNumber) => regex.test(userNumber));
  }

  #isAllNumbersInRange() {
    return this.#userNumbers.every(
      (userNumber) => BASEBALL_NUMBERS.max >= userNumber && BASEBALL_NUMBERS.min <= userNumber
    );
  }
}

export default UserNumbers;
