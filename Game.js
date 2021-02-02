"use strict";

const prompt = require("prompt-sync")();
const { Player } = require("./Player");
const { AI } = require("./AI");
class Game {
  constructor() {
    this.gameType = prompt("Game mode (single player or multiplayer)?");

    this.playerOne = new Player(prompt("Enter name for player 1: "));

    if (this.gameType == "single") {
      this.playerTwo = new Player(prompt("Enter name for player 2: "));
    } else {
      this.playerTwo = new AI();
    }
  }

  startGame() {
    console.log("Game Start");
  }
}

module.exports.Game = Game;
