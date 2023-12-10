import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import { numbersStringToArray } from '../utils/string.js';
import UserNumbers from '../models/userNumbers.js';
import { generateNotDuplicatedNumbersInRange } from '../utils/generteRandomNumber.js';
import { BASEBALL_NUMBERS_LENGTH, BASEBALL_NUMBERS_RANGE } from '../constants/numbers.js';
import ComputerNumbers from '../models/computerNumbers.js';
import CalculateStrikeBallCountService from '../services/calculateStrikeBallCountService.js';
import GameResultFormattingService from '../services/gameResultFormattingService.js';
import { Console } from '@woowacourse/mission-utils';
import RestartNumber from '../models/restartNumber.js';

class BaseBallGameController {
  #views = {
    inputView: InputView,
    outputView: OutputView,
  };

  #numbers = {
    userNumbers: [],
    computerNumbers: [],
    restartNumber: [],
  };

  #services = {
    calculateStrikeBallCountService: new CalculateStrikeBallCountService(),
    gameResultFormattingService: new GameResultFormattingService(),
  };

  async run() {
    this.#printGameStartMessage();
    await this.#playbaseballGame();
  }

  async #playbaseballGame() {
    this.#generateComputerNumbers();
    await this.#readUserNumbers();
    this.#printGameResult();
    this.#runNextStep();
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
    Console.print(userNumbers);
    Console.print(computerNumbers);
    return this.#services.calculateStrikeBallCountService.getStrikeBallCounts(
      userNumbers,
      computerNumbers
    );
  }

  #printGameResult() {
    const strikeBallCounts = this.#getStrikeBallCounts();
    const gameResult = this.#services.gameResultFormattingService.getGameResultFormat({
      ...strikeBallCounts,
    });
    this.#views.outputView.printGameResult(gameResult);
  }

  async #runNextStep() {
    const { strikeCount } = this.#getStrikeBallCounts();
    if (strikeCount !== 3) {
      await this.#readUserNumbers();
      this.#printGameResult();
      this.#runNextStep();
      return;
    }
    this.#readRestartNumber();
  }

  async #readRestartNumber() {
    const restartNumber = await this.#views.inputView.readRestartNumber();
    this.#numbers.restartNumber = new RestartNumber(restartNumber);
  }
}

export default BaseBallGameController;
