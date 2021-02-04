"use strict";

const { UI } = require("./UserInterface");
const { Player } = require("./Player");
const { AI } = require("./AI");
const Rules = require("./Rules");

class Game {
  constructor() {
    this.name = "RPSLS";
    this.mode = null;
    this.players = [];
    this.rules = new Rules();
    this.maxTotalScore = 5;
    this.round = 0;
    this.history = [];
  }

  startGame() {
    this.welcomeMessage();
    this.displayRules();
    this.setupGame();
    this.createPlayers();

    while (!this.isOver()) {
      this.displayRound();
      this.chooseGestures();
      this.calculateWinner();
      this.displayRoundResults();
      this.incrementRounds();
    }

    this.displayGameResults();
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
    this.mode = UI.choose("Enter game mode: ", [
      "Single Player",
      "Multiplayer",
      "Simulation",
    ]);
  }

  createPlayers() {
    switch (this.mode) {
      case "Single Player":
        this.addPlayer("human");
        this.addPlayer("ai");
        break;
      case "Multiplayer":
        this.addPlayer("human");
        this.addPlayer("human");
        break;
      case "Simulation":
        this.addPlayer("ai");
        this.addPlayer("ai");
        break;
    }
  }

  addPlayer(type = "human") {
    this.players.push(
      type == "human"
        ? new Player(this.askForPlayerName())
        : new AI(`Player ${this.players.length + 1}`)
    );
  }

  askForPlayerName() {
    return UI.ask(`Enter name for player ${this.players.length + 1}: `);
  }

  displayRules() {
    UI.display(
      "DIRECTIONS:",
      "Rock Paper Scissors Lizard Spock is played between two people or against the computer.",
      `During every round, each player will select a gesture (${this.rules
        .gestures()
        .join(", ")}).`,
      "The round winner is determined based on the following rules: ",
      ""
    );

    UI.list(this.rules.list());

    UI.display("");
  }

  displayRound() {
    UI.display(
      "",
      "--------------------",
      `Round: ${this.round + 1}`,
      "--------------------",
      ""
    );
  }

  chooseGestures() {
    this.players.forEach((player) => {
      player.chooseGesture(this.rules.gestures());
    });
  }

  endGame() {}

  calculateWinner() {
    let gestures = this.players.map((player) => player.selectedGesture);
    const [winner, action, loser] = this.rules.getRule(...gestures);
    let roundResults = { player: "TIE", rule: `${winner} ${action} ${loser}` };

    if (action !== "ties") {
      this.players.forEach((player) => {
        if (player.selectedGesture === winner) {
          player.incrementScore();
          roundResults.player = player.name;
        }
      });
    }

    this.history.push(roundResults);
  }

  displayRoundResults() {
    const { player, rule } = this.history[this.round];
    UI.display(
      "",
      `ROUND ${this.round + 1} RESULTS: `,
      `Winner: ${player}`,
      `${rule}`,
      ""
    );
    this.displayScores();
  }

  incrementRounds() {
    this.round++;
  }

  displayScores() {
    let scores = this.players
      .map((player) => `${player.name}: ${player.score}`)
      .join("\n");

    UI.display("CURRENT SCORES:", scores);
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

  displayGameResults() {}
}

module.exports.Game = Game;
