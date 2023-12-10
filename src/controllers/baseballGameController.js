import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';

class BaseBallGameController {
  #views = {
    inputView: InputView,
    outputView: OutputView,
  };

  async run() {
    this.#printGameStartMessage();
  }

  #printGameStartMessage() {
    this.#views.outputView.printGameStartMessage();
  }
}

export default BaseBallGameController;
