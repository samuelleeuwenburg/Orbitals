class MainLoop {

  constructor() {
    this.graphics = new Graphics();
    this.inputHandler = new InputHandler();
  }

  update() {

    this.inputHandler.update();
  }

  render() {
    this.graphics.clear();
  }
}
