const url =
  "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple";
fetch(url)
  .then((res) => res.json())
  .then((data) => console.log(data.results));
