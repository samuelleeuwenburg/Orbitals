class AppLoop extends MainLoop {
  constructor() {
    super();

    this.rect = new Rectangle();

    this.velocity = 0.9;
    this.speed = 1;

    this.speedX = 0;
    this.speedY = 0;
  }

  update() {

    if (this.inputHandler.isKeyDown(65)) {
      this.speedX -= this.speed;
    }

    if (this.inputHandler.isKeyDown(68)) {
      this.speedX += this.speed;
    }

    if (this.inputHandler.isKeyDown(87)) {
      this.speedY -= this.speed;
    }

    if (this.inputHandler.isKeyDown(83)) {
      this.speedY += this.speed;
    }

    this.speedX *= this.velocity;
    this.speedY *= this.velocity;

    this.rect.x += this.speedX;
    this.rect.y += this.speedY;

    
    if (this.rect.x > this.graphics.canvas.width ||
        this.rect.x < 0) {

      this.speedX *= -1;
      this.rect.x += this.speedX;
    }
    if (this.rect.y > this.graphics.canvas.height ||
        this.rect.y < 0) {

      this.speedY *= -1;
      this.rect.y += this.speedY;
    }

    super.update();
  }

  render() {
    super.render();

    this.graphics.drawCircle(this.rect);
  }
}
