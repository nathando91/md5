const md5 = require("md5");

function generateRandomString(round) {
  const allCharacters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%";
  const normalChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const firstChar = normalChars.charAt(
    Math.round(Math.random() * (normalChars.length - 1))
  );

  const resultString =
    "{" +
    [1, 2, 3, 4, 5, 6]
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .join("-") +
    "}";

  // Generate random part of the string
  const randomPartArray = Array.from({ length: 24 }, () =>
    allCharacters.charAt(Math.round(Math.random() * (allCharacters.length - 1)))
  );

  randomPartArray.splice(
    Math.floor(Math.random() * (24 - resultString.length + 1)),
    0,
    ...resultString.split("")
  );

  // Concatenate all parts using Array and join
  const generatedString = ["#", firstChar, round, "_", ...randomPartArray].join(
    ""
  );

  return generatedString;
}

// const generatedCode = generateRandomString(1290073);
// console.log(generatedCode);

// #a1290073_rl2#7f{2-2-5}5tYPpF6qjw1jASi6lK
// 985fd0aa8ccd6c7384bdfb01d402485e

// Example usage
// const inputString = "#a1290073_rl2#7f{2-2-5}5tYPpF6qjw1jASi6lK";
// const md5Result = md5(inputString);
// console.log(md5Result);

let done = false;

console.log("Start", new Date());
while (!done) {
  done =
    "985fd0aa8ccd6c7384bdfb01d402485e" === md5(generateRandomString(1290073)) &&
    console.log("TIM RA ROI");
}

console.log("End", new Date());
