class Game {
  constructor() {
    this.playerOne = new Player(prompt("Enter name for player 1: "));
    this.playerTwo = new Player(prompt("Enter name for player 2: "));
  }

  startGame() {
    console.log("Game Start");
  }
}

module.exports.Game = Game;
