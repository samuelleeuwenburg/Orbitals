class MainLoop {

  constructor() {
    this.graphics = new Graphics();
    this.inputHandler = new InputHandler();
    
    this.rect = new Rectangle(10, 10, 500, 380);
    this.img = new ImageAsset('http://velocityagency.com/wp-content/uploads/2013/08/go.jpg');
  }

  update() {
    this.inputHandler.update();
  }

  render() {
    this.graphics.clear();

    if (this.img.loaded) {
      this.graphics.drawImage(this.rect, this.img.image)
    }
  }
}
