class Clock {
  constructor() {

    let time = new Date();
    // 1. Create a Date object.
    this.hours = time.getHours();
    this.minutes = time.getMinutes();
    this.seconds = time.getSeconds();

    this.printTime();

    setInterval(this._tick.bind(this), 1000);
    // 2. Store the hours, minutes, and seconds.
    // 3. Call printTime.
    // 4. Schedule the tick at 1 second intervals.
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
    // 1. Increment the time by one second.
    // 2. Call printTime.
  }
}

const clock = new Clock();
