class InputHandler {

  constructor() {
    this.keys = {};

    this.mouseState = -1;
    this.mouseReset = true;
    this.mouseCoords = new Rectangle(0, 0, 1, 1);

    this.canvas = document.getElementById('main-canvas');

    window.addEventListener('keydown', event => {
      this.keys[event.keyCode] = true;
    });
    window.addEventListener('keyup', event => {
      this.keys[event.keyCode] = false;
    });

    window.addEventListener('mousedown', event => {
      if (event.target !== this.canvas) {
        return false;
      }

      this.mouseState = event.button;
    });


    document.onmousemove = event => {
      if (event.target !== this.canvas) {
        return false;
      }

      this.mouseCoords.x = event.clientX - this.canvas.offsetLeft;
      this.mouseCoords.y = event.clientY - this.canvas.offsetTop;
    };
  }

  update() {

    // detect single mouse click
    if (this.mouseState !== -1) {
      if (this.mouseReset) {
        this.mouseState = -2;
      } else {
        this.mouseReset = true;
      }
    }

  }

}
