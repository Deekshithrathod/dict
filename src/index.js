#!/usr/bin/env node

import { createSpinner } from "nanospinner";

import display from "./display.js";

const word = process.argv[2];

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
