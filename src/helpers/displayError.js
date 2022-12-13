import chalk from "chalk";

export default function displayError(word) {
  console.error(
    `\nThe word->${chalk.yellowBright(
      ` ${word} `
    )} you are looking ${chalk.bgRed(" doesn't exist ")}\n`
  );
}
