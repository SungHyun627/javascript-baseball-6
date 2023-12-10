import BaseBallGameController from './controllers/baseballGamecontroller.js';
class App {
  play() {
    const baseBallGameController = new BaseBallGameController();
    baseBallGameController.run();
  }
}

const app = new App();
app.play();
export default App;
