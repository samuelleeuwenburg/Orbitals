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

  get left() { 
    return this.x; 
  }
  get right() { 
    return this.x + this.w; 
  }
  get top() { 
    return this.y;
  }
  get bottom() { 
    return this.y + this.h; 
  }

  intersects(rect) {
    return (rect.left < this.right &&
            rect.top < this.bottom &&
            this.left < rect.right &&
            this.top < rect.bottom);
  } 

}
