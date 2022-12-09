#!/usr/bin/env node

import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { createSpinner } from "nanospinner";

import display from "./display.js";
import data from "./data.js";

const rl = readline.createInterface({ input, output });
const word = await rl.question("word please -> ");

const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
async function getData() {
  const spinner = createSpinner("Beep boop beep boop...").start();
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      spinner.success();
      display(data);
    });
}
await getData();

rl.close();
