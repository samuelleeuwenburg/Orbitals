class Orb {
  constructor(origin, shelf = 10) {
    this.origin = origin

    this.blendColor = new Color(255, 255, 255, 0.4);
    this.originalColor = new Color(0, 255, 200, 0.4);

    this.rect = new Rectangle(); 

    this.rect.w = shelf * 0.022 + 5;
    this.rect.h = shelf * 0.022 + 5;

    this.angle = Math.random() * 360;
    this.range = 0;
    this.direction = Math.floor(Math.random() * 2);
    this.rotationSpeed = 1;
    this.amplification = 1;
    this.growthRate = 6;
    this.decayRate = 0.4;
  }

  update(input) {

    this.rotationSpeed = input * 0.00018;
    let input = input * this.amplification;

    this.color = new Color();
    this.color.setBlend(this.originalColor, this.blendColor, input);


    if (this.range < input) {
      if (this.range + this.growthRate > input) {
        this.range = input;
      } else {
        this.range += this.growthRate;
      }
    } else {
      this.range -= this.decayRate;
    }

    if (this.direction) {
      this.angle += this.rotationSpeed; 
    } else {
      this.angle -= this.rotationSpeed; 
    }

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
