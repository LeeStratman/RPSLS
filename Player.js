"use strict";

const UI = require("./UserInterface");

class Player {
  constructor(name) {
    this.name = name;
    this.score = 0;
    this.selectedGesture = null;
  }

  chooseGesture(gestures) {
    this.selectedGesture = UI.choose(
      `${this.name} - Choose an option: `,
      gestures
    );
  }

  incrementScore() {
    this.score++;
  }
}

module.exports = Player;
