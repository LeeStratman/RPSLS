"use strict";

const gestures = ["rock", "paper", "scissors", "lizard", "spock"];

const rules = [
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

function getGestures() {
  return gestures;
}

function getGestureRules() {
  return rules.map((rule) => rule.join(" "));
}

function getWinningRule(gesture1, gesture2) {
  if (gesture1 === gesture2) {
    return false;
  }

  return rules
    .filter((rule) => {
      if (rule.includes(gesture1) && rule.includes(gesture2)) {
        return true;
      }

      return false;
    })
    .flat();
}

function getWinningGesture(gesture1, gesture2) {
  let rule = getWinningRule(gesture1, gesture2);

  if (!rule) {
    return false;
  }

  return {
    gesture: rule[0],
    rule: rule.join(" "),
  };
}

module.exports = { getGestures, getGestureRules, getWinningGesture };
