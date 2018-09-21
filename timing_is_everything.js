// Clock

class Clock {
  constructor() {

    let time = new Date();
    this.hours = time.getHours();
    this.minutes = time.getMinutes();
    this.seconds = time.getSeconds();

    this.printTime();

    setInterval(this._tick.bind(this), 1000);
  }

  printTime() {
    console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
  }

  _tick() {
    if (this.seconds == 59) {
      this.seconds = 0;
      if (this.minutes == 59) {
        this.minutes = 0;
        this.hours++;
      } else {
        this.minutes++;
      }
    } else {
      this.seconds++;
    }

    this.printTime();
  }
}

const clock = new Clock();
