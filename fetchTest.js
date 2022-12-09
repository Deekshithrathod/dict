import display from "./display.js";
import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });
const word = await rl.question("What is your favorite food? ");
console.log(`Oh, so your favorite food is ${word}`);

const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
fetch(url)
  .then((res) => res.json())
  .then((data) => display(data));
