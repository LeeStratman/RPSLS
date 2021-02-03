"use strict";

const gestures = ["rock", "scissors", "paper", "lizard", "spock"];
const rules = [
  "Rock crushes Scissors",
  "Scissors cuts Paper",
  "Paper covers Rock",
  "Rock crushes Lizard",
  "Lizard poisons Spock",
  "Spock smashes Scissors",
  "Scissors decapitates Lizard",
  "Lizard eats Paper",
  "Paper disproves Spock",
  "Spock vaporizes Rock",
];

getGestureList() {
	return gestures
		.map((gesture, index) => `${index + 1}: ${gesture}`)
		.join("\n");
}

getGestureRules() {
	return rules.map((rule, index) => `${index + 1}: ${rule}`).join("\n");
}
module.exports = { getGestureList, getGestureRules };
