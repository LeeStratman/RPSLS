"use strict";

class Rules {
  constructor(rules) {
    this.rules = [
      ["rock", "crushes", "scissors"],
      ["rock", "crushes", "lizard"],
      ["scissors", "cuts", "paper"],
      ["scissors", "decapitates", "lizard"],
      ["paper", "covers", "rock"],
      ["paper", "disproves", "spock"],
      ["lizard", "poisons", "spock"],
      ["lizard", "eats", "paper"],
      ["spock", "smashes", "scissors"],
      ["spock", "vaporizes", "rock"],
    ];
  }

  getRule(gesture1, gesture2) {
    return gesture1 === gesture2
      ? [gesture1, "ties", gesture2]
      : this.rules.find(
          (rule) => rule.includes(gesture1) && rule.includes(gesture2)
        );
  }

  list() {
    return this.rules.map((rule) => rule.join(" "));
  }

  gestures() {
    return [
      ...new Set([
        ...this.rules
          .map((rule) => rule.filter((item, index) => index != 1))
          .flat(),
      ]),
    ];
  }
}

module.exports = Rules;
