import { ERROR_MESSAGES } from '../constants/messages.js';

class UserNumbers {
  #userNumbers;

  constructor(userNumbers) {
    this.#userNumbers = userNumbers;
    this.#validateUserNumbers();
  }

  #validateUserNumbers() {
    if (!this.#isNumbers()) throw new Error(ERROR_MESSAGES.notNumber);
  }

  #isNumbers() {
    const regex = /[0-9]/;
    return this.#userNumbers.every((userNumber) => regex.test(userNumber));
  }
}

export default UserNumbers;
