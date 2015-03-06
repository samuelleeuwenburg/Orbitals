class Orb {
  constructor(origin, shelf = 10) {
    this.origin = origin

    this.color = new Color(255, 255, 255, 0.8);

    this.rect = new Rectangle(); 

    this.rect.w = shelf * 0.02 + 6;
    this.rect.h = shelf * 0.02 + 6;

    this.angle = Math.random() * 360;
    this.range = 0;
    this.rotationSpeed = 1;
    this.amplification = 1;
    this.growthRate = 1;
  }

  update(input) {

    this.rotationSpeed = input * 0.00005 + 0.005;
    let input = input * this.amplification;

    this.color.r = input + 50;
    this.color.g = input;
    this.color.b = input;
  
    if (this.range < input) {
      if (this.range + this.growthRate > input) {
        this.range = input;
      } else {
        this.range += this.growthRate;
      }
    } else {
      if (this.range - this.growthRate < input) {
        this.range = input;
      } else {
        this.range -= this.growthRate;
      }
    }

    this.angle += this.rotationSpeed; 

    if (this.angle > 360) {
      this.angle = 0;
    }

    this.rect.x = this.origin.x + this.range * Math.cos(this.angle);
    this.rect.y = this.origin.y + this.range * Math.sin(this.angle);
  
  }

  draw(graphics) {
    graphics.drawCircle(this.rect, this.color);
  }
}
