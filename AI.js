"use strict";

const { Player } = require("./Player");
class AI extends Player {
  constructor() {
    super("AI");
  }
}

module.exports.AI = AI;
