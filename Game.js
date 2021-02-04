"use strict";

const { UI } = require("./UserInterface");
const { Player } = require("./Player");
const { AI } = require("./AI");
const { gestures, rules, getWinningGesture } = require("./gestures");

class Game {
  constructor() {
    this.name = "RPSLS";
    this.modes = ["Single Player", "Multiplayer"];
    this.gestures = gestures;
    this.rules = rules;
    this.maxTotalScore = 5;
    this.round = 0;
  }

  startGame() {
    this.welcomeMessage();
    this.setupGame();
    this.createPlayers();
    this.displayRules();
    while (!this.isOver()) {
      this.chooseGestures();
      this.calculateWinner();
    }
  }

  welcomeMessage() {
    UI.display(
      "",
      "#################",
      `Welcome to ${this.name}`,
      "#################",
      ""
    );
  }

  setupGame() {
    let mode = UI.choose("Enter game mode: ", this.modes);
    this.isSingle = mode === this.modes[0] ? true : false;
  }

  createPlayers() {
    this.players = [];

    this.players.push(new Player(UI.ask("Enter name for player 1: ")));
    this.isSingle
      ? this.players.push(new AI())
      : this.players.push(new Player(UI.ask("Enter name for player 2: ")));
  }

  displayRules() {
    UI.display(
      "Rock Paper Scissors Lizard Spock is played between two people.",
      "During every round, each player will select a gesture (rock, paper, scissors, lizard, spock).",
      "The round winner is determined based on the following rules: "
    );
    UI.list(this.rules);
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

  displayRoundResults() {}

  displayScores() {
    this.players.forEach((player) =>
      console.log(`${player.name}: ${player.score}`)
    );
  }

  isOver() {
    let isOver = false;
    let maxSingleScore = this.maxTotalScore / 2;
    this.players.forEach((player) => {
      if (player.score > maxSingleScore) {
        isOver = true;
      }
    });

    return isOver;
  }
}

module.exports.Game = Game;
