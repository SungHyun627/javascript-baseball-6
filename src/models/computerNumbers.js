class ComputerNumbers {
  #computerNumbers;

  constructor(computerNumbers) {
    this.#computerNumbers = computerNumbers;
  }

  getComputerNumbers() {
    return this.#computerNumbers;
  }
}

export default ComputerNumbers;
