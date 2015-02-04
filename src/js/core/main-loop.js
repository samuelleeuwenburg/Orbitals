class MainLoop {

  constructor() {
    this.graphics = new Graphics();
    this.inputHandler = new InputHandler();

    this.r = new Rectangle();
    this.c = new Color();
  }

  update() {

    if (this.inputHandler.mouseState === 0) {
      console.log('click!');
    }

    this.inputHandler.update();
  }

  render() {
    this.graphics.clear();

    this.graphics.drawRectangle(this.r, this.c);
  }
}
