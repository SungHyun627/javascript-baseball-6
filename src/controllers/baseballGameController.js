import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import { numbersStringToArray } from '../utils/string.js';
import UserNumbers from '../models/userNumbers.js';
import { generateNotDuplicatedNumbersInRange } from '../utils/generteRandomNumber.js';
import { BASEBALL_NUMBERS_LENGTH, BASEBALL_NUMBERS_RANGE } from '../constants/numbers.js';
import ComputerNumbers from '../models/computerNumbers.js';
import CalculateStrikeBallCountService from '../services/calculateStrikeBallCountService.js';

class BaseBallGameController {
  #views = {
    inputView: InputView,
    outputView: OutputView,
  };

  #numbers = {
    userNumbers: [],
    computerNumbers: [],
  };

  #services = {
    calculateStrikeBallCountService: new CalculateStrikeBallCountService(),
  };

  async run() {
    this.#printGameStartMessage();
    await this.#playbaseballGame();
  }

  async #playbaseballGame() {
    this.#generateComputerNumbers();
    await this.#readUserNumbers();
    this.#getStrikeBallCounts();
  }

  #printGameStartMessage() {
    this.#views.outputView.printGameStartMessage();
  }

  #generateComputerNumbers() {
    const computerNumbers = generateNotDuplicatedNumbersInRange(
      BASEBALL_NUMBERS_RANGE.min,
      BASEBALL_NUMBERS_RANGE.max,
      BASEBALL_NUMBERS_LENGTH
    );
    this.#numbers.computerNumbers = new ComputerNumbers(computerNumbers);
  }

  async #readUserNumbers() {
    const userNumbers = numbersStringToArray(await this.#views.inputView.readUserNumbers());
    this.#numbers.userNumbers = new UserNumbers(userNumbers);
  }

  #getStrikeBallCounts() {
    const userNumbers = this.#numbers.userNumbers.getUserNumbers();
    const computerNumbers = this.#numbers.computerNumbers.getComputerNumbers();
    return this.#services.calculateStrikeBallCountService.getStrikeBallCounts(
      userNumbers,
      computerNumbers
    );
  }
}

export default BaseBallGameController;
