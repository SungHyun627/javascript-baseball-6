import InputView from './views/InputView.js';
import OutputView from './views/OutputView.js';

class App {
  #views = {
    inputView: InputView,
    outputView: OutputView,
  };

  async play() {
    await this.#runGame();
  }

  async #runGame() {
    this.#printGameStartMessage();
  }

  #printGameStartMessage() {
    this.#views.outputView.printGameStartMessage();
  }
}

const app = new App();
app.play();
export default App;
