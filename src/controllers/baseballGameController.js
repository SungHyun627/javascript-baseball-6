import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import { numbersStringToArray } from '../utils/string.js';
import { Console } from '@woowacourse/mission-utils';

class BaseBallGameController {
  #views = {
    inputView: InputView,
    outputView: OutputView,
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
  }
}

export default BaseBallGameController;
