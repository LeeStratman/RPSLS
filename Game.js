"use strict";

const UserInterface = require("./UserInterface");
const { Player } = require("./Player");
const { AI } = require("./AI");
class Game {
  constructor() {
    this.UserInterface = new UserInterface();
    this.setupGame();
    this.createPlayers();
  }

  setupGame() {
    this.isSingle =
      this.UserInterface.choose(["Single Player", "Multiplayer"]) === "1"
        ? true
        : false;
    this.rounds = 5;
  }

  createPlayers() {
    this.players = [];

    this.players.push(
      new Player(this.UserInterface.ask("Enter name for player 1: "))
    );
    this.isSingle
      ? this.players.push(new AI())
      : this.players.push(
          new Player(this.UserInterface.ask("Enter name for player 2: "))
        );
  }

  startGame() {
    console.log("Game Start");
  }

  displayRules() {}

  endGame() {}

  calculateWinner() {}

  isOver() {}
}

module.exports.Game = Game;
