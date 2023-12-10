import { RESULT_MESSAGES } from '../constants/messages.js';

class GameResultFormattingService {
  getGameResultFormat({ strikeCount, ballCount }) {
    if (strikeCount === 0 && ballCount === 0) {
      return RESULT_MESSAGES.notExistMatchingNumber;
    }
    if (strikeCount === 3) return RESULT_MESSAGES.matchingAllnumbers;
    if (strikeCount === 0) return `${ballCount}볼`;
    if (ballCount === 0) return `${strikeCount}스트라이크`;
    return `${ballCount} 볼 ${strikeCount} 스트라이크`;
  }
}

export default GameResultFormattingService;
