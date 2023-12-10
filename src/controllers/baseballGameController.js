import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import { numbersStringToArray } from '../utils/string.js';
import UserNumbers from '../models/userNumbers.js';
import { generateNotDuplicatedNumbersInRange } from '../utils/generteRandomNumber.js';
import { BASEBALL_NUMBERS_COUNT, BASEBALL_NUMBERS_RANGE } from '../constants/numbers.js';
import ComputerNumbers from '../models/computerNumbers.js';

class BaseBallGameController {
  #views = {
    inputView: InputView,
    outputView: OutputView,
  };

  #numbers = {
    userNumbers: [],
    computerNumbers: [],
  };

  async run() {
    this.#printGameStartMessage();
    this.#playbaseballGame();
  }

  async #playbaseballGame() {
    this.#generateComputerNumbers();
    await this.#readUserNumbers();
  }

  #printGameStartMessage() {
    this.#views.outputView.printGameStartMessage();
  }

  #generateComputerNumbers() {
    const computerNumbers = generateNotDuplicatedNumbersInRange(
      BASEBALL_NUMBERS_RANGE.min,
      BASEBALL_NUMBERS_RANGE.max,
      BASEBALL_NUMBERS_COUNT
    );
    this.#numbers.computerNumbers = new ComputerNumbers(computerNumbers);
  }

  async #readUserNumbers() {
    const userNumbers = numbersStringToArray(await this.#views.inputView.readUserNumbers());
    this.#numbers.userNumbers = new UserNumbers(userNumbers);
  }
}

export default BaseBallGameController;
