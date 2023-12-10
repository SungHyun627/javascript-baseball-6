import { ERROR_MESSAGES } from '../constants/messages.js';
import {
  BASEBALL_NUMBERS_RANGE,
  BASEBALL_NUMBERS_LENGTH,
  RESTART_NUMBERS,
} from '../constants/numbers.js';

class RestartNumber {
  #restartNumber;

  constructor(restartNumber) {
    this.#restartNumber = restartNumber;
    this.#validateRestartNumber();
  }

  #validateRestartNumber() {
    if (!this.#isNumber()) throw new Error(ERROR_MESSAGES.notNumber);
    if (!this.#isRestartNumberInRange()) throw new Error(ERROR_MESSAGES.notInRangeForRestartNumber);
  }

  #isNumber() {
    const regex = /[0-9]/;
    return regex.test(this.#restartNumber);
  }

  #isRestartNumberInRange() {
    return RESTART_NUMBERS.includes(this.#restartNumber);
  }

  getRestartNumber() {
    return this.#restartNumber;
  }
}

export default RestartNumber;
