class Graphics {

  constructor() {
    this.canvas = document.getElementById('main-canvas');
    this.context = this.canvas.getContext('2d');
  }

  clear() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  drawRectangle(rect, color = new Color()) {
    this.context.fillStyle = color.rgba;
    this.context.fillRect(...rect.dimensions);
  }

  drawCircle(rect, color = new Color()) {
    this.context.beginPath();
    this.context.arc(...rect.center, rect.w / 2, 0, 2 * Math.PI, false);
    this.context.fillStyle = color.rgba;
    this.context.fill();
  }

  drawImage(rect, image) {
    this.context.drawImage(image, ...rect.dimensions);
  }

}
