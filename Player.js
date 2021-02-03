"use strict";

const { UI } = require("./UserInterface");
const { getGestures } = require("./gestures");
class Player {
  constructor(name) {
    this.name = name;
    this.score = 0;
    this.UI = new UI();
    this.gestures = getGestures();
  }

  chooseGesture() {
    let index = this.UI.choose("Choose an option: ", this.gestures);
    return this.gestures[Number(index) - 1];
  }
}

module.exports.Player = Player;
