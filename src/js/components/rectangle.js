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

  get position() {
    return {
      x: this.x,
      y: this.y
    };
  }

  set position(pos) {
    this.x = pos.x;
    this.y = pos.y;
  }

  get center() {
    return [
      this.x + this.w / 2,
      this.y + this.h / 2
    ];
  }

  intersects(rect) {
    return (rect.x < this.x + this.w &&
            rect.y < this.y + this.h &&
            this.x < rect.x + rect.w &&
            this.y < rect.y + rect.h);
  } 

}
