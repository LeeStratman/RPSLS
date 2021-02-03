"use strict";

const { UI } = require("./UserInterface");

class Player {
  constructor(name) {
    this.name = name;
    this.score = 0;
    this.selectedGesture = null;
  }

  chooseGesture(gestures) {
    let index = UI.choose("Choose an option: ", gestures);
    this.selectedGesture = gestures[Number(index) - 1];
  }
}

module.exports.Player = Player;
