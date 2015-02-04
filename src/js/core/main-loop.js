class MainLoop {

  constructor() {
    this.graphics = new Graphics();

    this.r = new Rectangle();
    this.c = new Color();
  }

  update() {
  }

  render() {
    this.graphics.clear();

    this.graphics.drawRectangle(this.r, this.c);
  }
}
