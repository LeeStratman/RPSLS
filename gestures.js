"use strict";

// const gestures = ["rock", "scissors", "paper", "lizard", "spock"];
const gestures = [
  {
    value: "rock",
    defeats: [
      { action: "crushes", gesture: "scissors" },
      { action: "crushes", gesture: "lizard" },
    ],
  },
  {
    value: "scissors",
    defeats: [
      { action: "cuts", gesture: "paper" },
      { action: "decapitates", gesture: "lizard" },
    ],
  },
  {
    value: "paper",
    defeats: [
      { action: "covers", gesture: "rock" },
      { action: "disproves", gesture: "spock" },
    ],
  },
  {
    value: "lizard",
    defeats: [
      { action: "poisons", gesture: "spock" },
      { action: "eats", gesture: "paper" },
    ],
  },
  {
    value: "spock",
    defeats: [
      { action: "smashes", gesture: "scissors" },
      { action: "vaporizes", gesture: "rock" },
    ],
  },
];

function getGestures() {
  return gestures.map((gesture) => gesture.value);
}

function getGestureList() {
  return getGestures()
    .map((gesture, index) => `${index + 1}: ${gesture}`)
    .join("\n");
}

function getGestureRules() {
  return gestures
    .map((gesture) => {
      return gesture.defeats
        .map((defeat) => {
          return `${gesture.value} ${defeat.action} ${defeat.gesture}`;
        })
        .join("\n");
    })
    .join("\n");
}

module.exports = { getGestures, getGestureList, getGestureRules };
