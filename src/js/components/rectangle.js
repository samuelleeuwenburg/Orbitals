class Rectangle {

  constructor(x = 10, y = 10, w = 10, h = 10) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  get dimensions() {
    return [
      this.x,
      this.y,
      this.w,
      this.h
    ];
  }

  intersects(rect) {
    return (rect.x < this.x + this.w &&
            rect.y < this.y + this.h &&
            this.x < rect.x + rect.w &&
            this.y < rect.y + rect.h);
  } 

}
