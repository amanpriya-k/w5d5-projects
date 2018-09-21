const readline = require("readline")

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



class Game {

  constructor() {
    this.towers = [[1, 2, 3], [], []];
  }

  promptMove(callback) {
    this.displayTowers();
    reader.question("Which tower do you want to move the top disk from?  ",
      function(response1) {
        let startTower = parseInt(response1);

        reader.question("Which tower do you want to move the disk to?  ",
          function(response2) {
            let endTower = parseInt(response2);

            callback(startTower, endTower);
          }
        )
      }
    )
  }


  displayTowers() {
    console.log('Current state: ')
    console.log(`tower 0: ${this.towers[0]}`)
    console.log(`tower 1: ${this.towers[1]}`)
    console.log(`tower 2: ${this.towers[2]}`)
    console.log('-----------------')
  }

}

const game = new Game();
// game.promptMove((s, e) => (console.log(s, e)));
