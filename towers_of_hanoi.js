const readline = require("readline")

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Game {

  constructor() {
    this.towers = [[3, 2, 1], [], []];
  }

  promptMove(callback) {
    this.displayTowers();
    reader.question("Which tower do you want to move the top disk from?  ",
      function(response1) {
        let startTower = parseInt(response1);

        reader.question("Which tower do you want to move the disk to?  ",
          function(response2) {
            let endTower = parseInt(response2);

            return callback(startTower, endTower);
          }
        )
      }
    )
  }

  isValidMove(startIdx, endIdx) {
    if (this.towers[startIdx].length === 0) {
      return false;
    } else if (this.towers[startIdx].slice(-1)[0] > this.towers[endIdx].slice(-1)[0]) {
      return false;
    }
    return true;
  }

  move(startTowerIdx, endTowerIdx) {
    if (this.isValidMove(startTowerIdx, endTowerIdx)) {
      let lastEl = this.towers[startTowerIdx].pop();
      this.towers[endTowerIdx].push(lastEl);
      return true;
    }
    return false;
  }

  isWon() {
    if (this.towers[1].length === 3 || this.towers[2].length === 3) {
      console.log('won')
      return true;
    }
    console.log('not won')
    return false;
  }

  displayTowers() {
    console.log('Current state: ')
    console.log(`tower 0: ${this.towers[0]}`)
    console.log(`tower 1: ${this.towers[1]}`)
    console.log(`tower 2: ${this.towers[2]}`)
    console.log('-----------------')
  }

  run(callback) {
    while (!this.isWon()) {
      let moveable = false;
      this.promptMove( (start, end) => ( moveable = this.isValidMove(start, end) ) );
      if (moveable) {
        console.log('prompted and moveable')
      } else {
        console.log('invalid move.')
        return false;
      }
    }
    console.log('you won!')
    this.displayTowers();
    callback();
    return true;
  }

}


// testing individual methods
const game = new Game();
// game.displayTowers();
// game.isValidMove(0, 1);
// game.isValidMove(2, 1);
// game.isValidMove(1, 0);
// game.promptMove((s, e) => (console.log(s, e)));
// // game.move(0, 1);
// game.towers = [[], [3, 2, 1], []];
// game.isWon();
// game.towers = [[], [], [3, 2, 1]];
// game.isWon();
// game.towers = [[], [1], [3, 2]];
// game.isWon();
game.run( () => console.log('game over'));
