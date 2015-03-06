class AppLoop extends MainLoop {
  constructor() {
    super();

    this.audio = new AudioAsset('/audio/autumn-leaves.mp3');

    this.audio.promise.then(() => {
      this.audio.play();

      this.origin = new Rectangle(300, 400, 10, 3);

      this.origin.x = this.graphics.canvas.width / 2;
      this.origin.y = this.graphics.canvas.height / 2;

      this.freqOrbs = [];

      for (let i = 0; i < this.audio.freqsChan1.length; i++) {
        this.freqOrbs.push(new Orb(this.origin, i));
      }
      
    });
  }

  update() {

    this.audio.promise.then(() => {
      
      for (let i = 0; i < this.audio.freqsChan1.length; i++) {

        let average = (this.audio.freqsChan1[i] + this.audio.freqsChan2[i]) / 2;
        this.freqOrbs[i].update(average);
      }

    });

    super.update();
  }

  render() {
    super.render();

    this.audio.promise.then(() => {

      for (let i = 0; i < this.audio.freqsChan1.length; i++) {
        this.freqOrbs[i].draw(this.graphics);
      }

    });

  }
}
