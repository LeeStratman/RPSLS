"use strict";

const gestures = ["rock", "paper", "scissors", "lizard", "spock"];

const rules = [
  "rock crushes scissors",
  "rock crushes lizard",
  "scissors cuts paper",
  "scissors decapitates lizard",
  "paper covers rock",
  "paper disproves spock",
  "lizard poisons spock",
  "lizard eats paper",
  "spock smashes scissors",
  "spock vaporizes rock",
];

function getWinningRule(gesture1, gesture2) {
  return rules
    .filter((rule) => {
      if (rule.includes(gesture1) && rule.includes(gesture2)) {
        return true;
      }

      return false;
    })
    .join();
}

function getWinningGesture(gesture1, gesture2) {
  // Tie.
  if (gesture1 === gesture2) {
    return false;
  }

  let rule = getWinningRule(gesture1, gesture2);

  // No rule exists.
  if (!rule) {
    return false;
  }

  return {
    gesture: rule.split(" ")[0],
    rule,
  };
}

module.exports = { gestures, rules, getWinningGesture };
