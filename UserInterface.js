"use strict";

const prompt = require("prompt-sync")();

class UserInterface {
  ask(question, isNumber = false) {
    let validation = isNumber ? this.isNumber : this.isString;
    do {
      var response = prompt(question);
    } while (!validation(response));

    return response;
  }

  choose(options = []) {
    do {
      var response = prompt(this.displayOptions(options));
    } while (!this.isValidOption(response, options));

    return response;
  }

  display(message) {
    console.log(message);
  }

  displayOptions(options) {
    return options
      .map((option, index) => {
        return `${index}: ${option}`;
      })
      .join("\n");
  }

  isNumber(input) {}

  isString(input) {}

  isValidOption(input, options) {}
}

module.exports.UI = UserInterface;
