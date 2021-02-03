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

  choose(message, options = []) {
    do {
      console.log(this.displayOptions(options));
      var response = prompt(message);
    } while (!this.isValidOption(response, options));

    return response;
  }

  display(message) {
    console.log(message);
  }

  displayOptions(options) {
    return options
      .map((option, index) => {
        return `${index + 1}: ${option}`;
      })
      .join("\n");
  }

  isNumber(input) {
    let number = Number(input);
    return !isNaN(number);
  }

  isString(input) {
    return input ? true : false;
  }

  isValidOption(input, options) {
    return Number(input) <= options.length;
  }
}

module.exports.UI = UserInterface;
