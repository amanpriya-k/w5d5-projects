const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

addNumbers = function(sum, numsLeft, completionCallback) {
  if (numsLeft > 0) {
    reader.question("Input a number: ", function(n) {
      const num = parseInt(n);
      sum = sum + num;
      console.log("Current sum: ", sum);

      addNumbers(sum, numsLeft-1, completionCallback);
    } )
  } else {
    completionCallback(sum)
  }
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
