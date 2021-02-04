"use strict";

const prompt = require("prompt-sync")();
const chalk = require("chalk");

class UserInterface {
  ask(question, isNumber = false) {
    let validation = isNumber ? this.isNumber : this.isString;
    do {
      var response = prompt(question);
    } while (!validation(response));

    return response;
  }

  choose(message, options = null) {
    if (!options) {
      return false;
    }

    do {
      console.log(chalk.green("Please choose an option below: "));
      console.log(this.displayOptions(options));
      var response = prompt(message);
    } while (!this.isValidOption(response, options));

    return options[Number(response) - 1];
  }

  display(...messages) {
    messages.forEach((message) => {
      console.log(message);
    });
  }

  list(items) {
    console.log(items.map((item, index) => `${index + 1}: ${item}`).join("\n"));
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
    let isValid = Number(input) <= options.length;

    if (!isValid) {
      this.displayError("Invalid option. Please try again.");
    }

    return isValid;
  }

  displayError(message) {
    console.log(chalk.red.bold(message));
  }
}

module.exports.UI = new UserInterface();
