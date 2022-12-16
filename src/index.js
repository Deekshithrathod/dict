#!/usr/bin/env node

import chalk from "chalk";
import { createSpinner } from "nanospinner";

import display from "./helpers/display.js";
import displayError from "./helpers/displayError.js";
import isValidResponse from "./helpers/isValidResponse.js";

// adding this line to supress warning logged for using fetch API
process.removeAllListeners("warning");
const word = process.argv[2];

if (word === undefined) {
  console.log(`\nPlease enter a ${chalk.bgYellow(" valid word ")}\n`);
  process.exit(0);
}

const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

async function getData() {
  const spinner = createSpinner(`Beep boop beep boop...\n`).start();
  fetch(url)
    .then((res) => {
      if (!isValidResponse(res)) {
        displayError(word);
        process.exit(0);
      }
      return res.json();
    })
    .then((data) => {
      spinner.success();
      display(data);
    });
}
await getData();
