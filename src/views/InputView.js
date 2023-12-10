import { Console } from '@woowacourse/mission-utils';
import { GUIDE_MESSAGES } from '../constants/messages.js';

const InputView = {
  readUserNumbers: async () => {
    const useroNumbers = await Console.readLineAsync(GUIDE_MESSAGES.enterUserNumbers);
    return useroNumbers;
  },
  readRestartNumber: async () => {
    const restartNumber = await Console.readLineAsync(GUIDE_MESSAGES.enterRestartNumber);
    return restartNumber;
  },
};

export default InputView;
