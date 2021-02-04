"use strict";

const { UI } = require("./UserInterface");
const { Player } = require("./Player");
const { AI } = require("./AI");
const {
  getGestures,
  getGestureRules,
  getWinningGesture,
} = require("./gestures");

class Game {
  modes = ["Single Player", "Multiplayer"];
  gestures = getGestures();

  constructor() {
    this.rounds = 5;
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
    while (!this.isOver()) {
      this.chooseGestures();
      this.calculateWinner();
    }
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

  chooseGestures() {
    this.players.forEach((player) => {
      player.chooseGesture(this.gestures);
    });
  }

  endGame() {}

  calculateWinner() {
    let gestures = this.players.map((player) => player.selectedGesture);
    let winningGesture = getWinningGesture(...gestures);

    if (!winningGesture) {
      // TODO: Handle ties.
      return;
    }

    this.players.forEach((player) => {
      if (player.selectedGesture === winningGesture.gesture) {
        player.incrementScore();
      }
    });

    UI.display(winningGesture.rule);
    this.displayScores();
  }

  displayScores() {
    this.players.forEach((player) =>
      console.log(`${player.name}: ${player.score}`)
    );
  }

  isOver() {
    let isOver = false;
    let maxScore = this.rounds / 2;
    this.players.forEach((player) => {
      if (player.score > maxScore) {
        isOver = true;
      }
    });

    return isOver;
  }
}

module.exports.Game = Game;
