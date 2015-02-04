class Graphics {

  constructor() {
    this.canvas = document.getElementById('main-canvas');
    this.context = this.canvas.getContext('2d');
  }

  clear() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  drawRectangle(rect, color) {
    this.context.fillStyle = color.rgba;
    this.context.fillRect(...rect.dimensions);
  }

}
