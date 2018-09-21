const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

askIfGreaterThan = function(el1, el2, callback) {
  reader.question(`Is ${el1} greater than ${el2}? Write 'yes' or 'no'. `,
    function(response) {
      if (response === "yes") {
        callback(true);
      } else {
        callback(false);
      }
    }
  );
}
// askIfGreaterThan(3, 4, n => console.log(n));

innerBubbleSortLoop = function(arr, i, madeAnySwaps, outerBubbleSortLoop) {

  if (i == (arr.length - 1)) {
    outerBubbleSortLoop(madeAnySwaps);
  }

  if (i < arr.length - 1) {
    askIfGreaterThan(arr[i], arr[i+1], function(response) {
      if (response === true) {
        let temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        madeAnySwaps = true;
      }

      innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop);
    });
  }
}
// innerBubbleSortLoop([3, 2, 5], 0, false, n => console.log(n, " outer sort"));


absurdBubbleSort = function(arr, sortCompletionCallback) {
  outerBubbleSortLoop = function(madeSwaps) {
    if (madeSwaps === true) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    } else {
      sortCompletionCallback(arr);
    }
  }

  outerBubbleSortLoop(true);
}


absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});
