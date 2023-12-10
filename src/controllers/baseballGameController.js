import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import { numbersStringToArray } from '../utils/string.js';
import UserNumbers from '../models/userNumbers.js';

class BaseBallGameController {
  #views = {
    inputView: InputView,
    outputView: OutputView,
  };

  #numbers = {
    userNumbers: [],
  };

  async run() {
    this.#printGameStartMessage();
    await this.#readUserNumbers();
  }

  #printGameStartMessage() {
    this.#views.outputView.printGameStartMessage();
  }

  async #readUserNumbers() {
    const userNumbers = numbersStringToArray(await this.#views.inputView.readUserNumbers());
    this.#numbers.userNumbers = new UserNumbers(userNumbers);
  }
}

export default BaseBallGameController;
