"use strict";

const { UI } = require("./UserInterface");
const { Player } = require("./Player");
const { AI } = require("./AI");
const { getGestures, getGestureRules } = require("./gestures");

class Game {
  modes = ["Single Player", "Multiplayer"];
  gestures = getGestures();

  constructor() {
    this.setupGame();
    this.createPlayers();
  }

  setupGame() {
    let mode = UI.choose("Please select game mode: ", this.modes);
    this.isSingle = mode === this.modes[0] ? true : false;
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
    this.selectGestures();
    this.calculateWinner();
  }

  displayRules() {
    UI.display(
      "Rock Paper Scissors Lizard Spock is played between two people.",
      "Each player will select a gesture that represents one of the following: "
    );
    UI.list(this.gestures);
    UI.display(
      "The outcome of the game is determined by the following rules: "
    );
    UI.list(getGestureRules());
  }

  selectGestures() {
    this.players.forEach((player) => {
      player.chooseGesture(this.gestures);
    });
  }

  endGame() {}

  calculateWinner() {}

  isOver() {}
}

module.exports.Game = Game;
