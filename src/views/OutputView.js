import { Console } from '@woowacourse/mission-utils';
import { GUIDE_MESSAGES } from '../constants/messages.js';
const OutputView = {
  printGameStartMessage: () => {
    Console.print(GUIDE_MESSAGES.startGame);
  },
};

export default OutputView;
