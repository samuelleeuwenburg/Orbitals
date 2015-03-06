class Color {

  constructor(r = 0, g = 0, b = 0, a = 1) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  }


  get rgba() {
    return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`;
  }

  setBlend(color, color2,  amount) {

    amount = amount * 0.01;
    
    this.r = color.r + color2.r * amount;
    this.g = color.g + color2.g * amount;
    this.b = color.b + color2.b * amount;
    this.a = color.a;


    if (this.r > 255) {
      this.r = 255;
    }
    if (this.g > 255) {
      this.g = 255;
    }
    if (this.b > 255) {
      this.b = 255;
    }

  }
  blend(color, amount) {

    amount = 0.1;

    this.r += color.r * amount;
    this.g += color.g * amount;
    this.b += color.b * amount;

    if (this.r > 255) {
      this.r = 255;
    }
    if (this.g > 255) {
      this.g = 255;
    }
    if (this.b > 255) {
      this.b = 255;
    }



  }
  
}
