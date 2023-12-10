export const GUIDE_MESSAGES = Object.freeze({
  startGame: '숫자 야구 게임을 시작합니다.',
  enterUserNumbers: '숫자를 입력해주세요 : ',
});

export const ERROR_MESSAGES = Object.freeze({
  notNumber: '[ERROR] 숫자가 아닙니다.',
  notInRange: '[ERROR] 1과 9사이의 숫자가 아닙니다.',
  notThreeDigits: '[ERROR] 주어진 숫자의 개수가 3개가 아닙니다.',
  duplicated: '[ERROR] 중복된 숫자가 있습니다.',
});

export const RESULT_MESSAGES = Object.freeze({
  notExistMatchingNumber: '낫싱',
  matchingAllnumbers: '3개의 숫자를 모두 맞히셨습니다!',
  gameOver: '게임 종료',
});
