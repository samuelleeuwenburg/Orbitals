class InputHandler {

  constructor() {

    this.curKeys = new Map();
    this.prevKeys = new Map();

    this.mouseState = -1;
    this.mouseReset = true;
    this.mouseCoords = new Rectangle(0, 0, 1, 1);

    this.canvas = document.getElementById('main-canvas');

    window.addEventListener('keydown', event => {
      this.curKeys.set(event.keyCode, true);
    });
    window.addEventListener('keyup', event => {
      this.curKeys.set(event.keyCode, false);
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

	isKeyDown(key) {
		return this.curKeys.get(key) || false;
	}
	isKeyUp(key) {
		return !this.curKeys.get(key) || false;
	}
	isKeyPressed(key) {
		return (this.curKeys.get(key) && !this.prevKeys.get(key)) || false;
	}
	isKeyReleased(key) {
		return (!this.curKeys.get(key) && this.prevKeys.get(key)) || false;
	}

  update() {

    for (let key of this.curKeys) {
      this.prevKeys.set(key[0], key[1]);
    }

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
