import chalk from "chalk";

const twoSpaces = " ".repeat(2);
const fourSpaces = twoSpaces.repeat(2);

const level1 = (word) => chalk.hex("#5DA7DB").bold(word);
const level2 = (word) => chalk.hex("#81C6E8").bold(word);
const level3 = (word) => chalk.hex("#7DE5ED").bold(word);

export default function display(data) {
  data.map((word) => {
    console.log(`\n${level1("word")}: ${word.word}`);
    console.log(`${level1("phonetic")}: ${word.phonetic}`);
    word.origin !== undefined &&
      console.log(`${level1("origin")}: ${word.origin}`);

    word.meanings.map((meaning) => {
      console.log(
        twoSpaces + `${level2("Part of Speech")}: ${meaning.partOfSpeech}`
      );
      meaning.definitions.map((definition, index) => {
        console.log(
          fourSpaces +
            `${level3(`definition ${index + 1}`)}: ${definition.definition}`
        );
        definition.example !== undefined &&
          console.log(
            fourSpaces + `${level3("example")}: ${definition.example}`
          );
        definition.synonyms.length != 0 &&
          console.log(
            fourSpaces +
              `${level3("synonyms")}: ${definition.synonyms.join(", ")}`
          );
        definition.antonyms.length != 0 &&
          console.log(
            fourSpaces +
              `${chalk
                .hex("#FF9494")
                .bold("antonyms")}: ${definition.antonyms.join(", ")}`
          );
        console.log();
      });
    });
  });
}

export function displayWithFlags(data, onlySynonyms, onlyAntonyms) {
  const allSynonyms = [];
  const allAntonyms = [];
  let dataWord = "";
  let dataPhonetic = "";
  data.map((word) => {
    if (dataWord.length === 0) {
      dataWord = word.word;
    }
    if (dataPhonetic.length === 0) {
      dataPhonetic = word.phonetic;
    }
    word.meanings.map((meaning) => {
      meaning.definitions.map((definition, index) => {
        allAntonyms.push(...definition.antonyms);
        allSynonyms.push(...definition.synonyms);
      });
    });
  });

  const synonymsString =
    allSynonyms.length == 0 ? "No Synonyms found" : allSynonyms.join(", ");
  const antonymsString =
    allAntonyms.length == 0 ? "No Antonyms found" : allAntonyms.join(", ");

  console.log(`${level1("word")}: ${dataWord}`);
  console.log(`${level1("phonetic")}: ${dataPhonetic}\n`);
  onlySynonyms && console.log(`${level3("synonyms")}: ${synonymsString}`);
  onlyAntonyms &&
    console.log(`${chalk.hex("#FF9494").bold("antonyms")}: ${antonymsString}`);
  console.log();
}
