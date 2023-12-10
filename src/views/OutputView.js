import { Console } from '@woowacourse/mission-utils';
import { GUIDE_MESSAGES } from '../constants/messages.js';

const OutputView = {
  printGameStartMessage: () => {
    Console.print(GUIDE_MESSAGES.startGame);
  },
  printGameResult: (gameResult) => {
    Console.print(gameResult);
  },
};

export default OutputView;
