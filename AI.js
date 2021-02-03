"use strict";

const { Player } = require("./Player");

class AI extends Player {
  constructor() {
    super("AI");
  }

  chooseGesture(gestures) {
    let index = this.randomNumber(gestures.length);
    return gestures[index];
  }

  randomNumber(max = 1) {
    return Math.floor(Math.random() * max) + 1;
  }
}

module.exports.AI = AI;
