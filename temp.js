// require = require("esm")(module);
import data from "./data.js";
// import require from "require";
// import readline from "readline";
// const readl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
display(data);

// readline.question("What word's meaning are you looking for?\n", (word) => {
//   console.log(`the meanings for (${word}) are\n`);
//   const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
// fetch(url)
//   .then((res) => res.json())
//   .then((data) => {
//     display(data);
// console.log(data);
// data.meanings.map((el) => {
//   console.log(el.partOfSpeech);
//   const lineDivide = "-";
//   console.log(`${lineDivide.repeat(30)}`);
// });
//   }
// );
//   readline.close();
// });

function display(data) {
  data.map((word) => {
    // TODO: style the word
    console.log(`word: ${word.word}`);

    //phonetic
    console.log(`phonetic: ${word.phonetic}`);

    //origin
    console.log(`origin: ${word.origin}`);

    // meanings
    word.meanings.map((meaning) => {
      // parts of speech
      console.log(`\tpartOfSpeech: ${meaning.partOfSpeech}`);
      // console.log(`\tdefinitions: [`)
      meaning.definitions.map((definition) => {
        console.log(`\t\t definition: ${definition.definition}`);
        console.log(`\t\t example sentence: ${definition.example}`);
        definition.synonyms.length != 0 &&
          console.log(`\t\t synonyms: ${definition.synonyms.join(", ")}`);
        definition.antonyms.length != 0 &&
          console.log(`\t\t antonyms: ${definition.antonyms.join(", ")}`);
      });
    });

    // word.meanings.map((el) => {
    //   console.log(`${el.partOfSpeech}`);
    //   el.definitions.map((def) => {
    //     console.log(`  definition: ${def.definition}`);
    //     console.log(`  example: ${def.example}`);
    //     console.log(`  synonyms: ${def.synonyms.join(", ")}`);
    //     console.log(`  antonyms: ${def.antonyms.join(", ")}`);
    //   });
    //   const lineDivide = "-";
    //   console.log(`${lineDivide.repeat(30)}`);
    // });
  });
}
