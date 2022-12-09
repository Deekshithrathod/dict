import chalk from "chalk";

export default function display(data) {
  const twoSpaces = " ".repeat(2);
  const fourSpaces = twoSpaces.repeat(2);

  const level1 = (word) => chalk.hex("#5DA7DB").bold(word);
  const level2 = (word) => chalk.hex("#81C6E8").bold(word);
  const level3 = (word) => chalk.hex("#7DE5ED").bold(word);

  data.map((word) => {
    // TODO: style the word
    console.log(`\n${level1("word")}: ${word.word}`);

    //phonetic
    console.log(`${level1("phonetic")}: ${word.phonetic}`);

    //origin
    console.log(`${level1("origin")}: ${word.origin}`);

    // meanings
    word.meanings.map((meaning) => {
      // parts of speech
      console.log(
        twoSpaces + `${level2("Part of Speech")}: ${meaning.partOfSpeech}`
      );
      meaning.definitions.map((definition) => {
        console.log(
          fourSpaces + `${level3("definition")}: ${definition.definition}`
        );
        console.log(fourSpaces + `${level3("example")}: ${definition.example}`);
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
