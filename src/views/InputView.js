import { Console } from '@woowacourse/mission-utils';
import { GUIDE_MESSAGES } from '../constants/messages.js';

const InputView = {
  readUserNumbers: async () => {
    const useroNumbers = await Console.readLineAsync(GUIDE_MESSAGES.enterUserNumbers);
    return useroNumbers;
  },
};

export default InputView;
