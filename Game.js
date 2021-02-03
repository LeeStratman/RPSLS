"use strict";

const { UI } = require("./UserInterface");
const { Player } = require("./Player");
const { AI } = require("./AI");
const { getGestures, getGestureRules } = require("./gestures");

class Game {
  constructor() {
    this.setupGame();
    this.createPlayers();
  }

  setupGame() {
    this.isSingle =
      UI.choose("Please select game mode: ", [
        "Single Player",
        "Multiplayer",
      ]) === "1"
        ? true
        : false;
    this.rounds = 5;
  }

  createPlayers() {
    this.players = [];

    this.players.push(new Player(UI.ask("Enter name for player 1: ")));
    this.isSingle
      ? this.players.push(new AI())
      : this.players.push(new Player(UI.ask("Enter name for player 2: ")));
  }

  startGame() {
    this.displayRules();
    let selectedGestures = this.selectGestures();
    this.calculateWinner(...selectedGestures);
  }

  displayRules() {
    UI.display(
      "Rock Paper Scissors Lizard Spock is played between two people.",
      "Each player will select a gesture that represents one of the following: "
    );
    UI.list(getGestures());
    UI.display(
      "The outcome of the game is determined by the following rules: "
    );
    UI.list(getGestureRules());
  }

  selectGestures() {
    return this.players.map((player, index) => {
      return player.chooseGesture();
    });
  }

  endGame() {}

  calculateWinner(gesture1, gesture2) {}

  isOver() {}
}

module.exports.Game = Game;
