"use strict";

window.requestAnimFrame = window.requestAnimFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
  window.setTimeout(callback, 1000 / 60);
};

var mainLoop = undefined;
var init = function () {
  mainLoop = new MainLoop();
};

var loop = function () {
  requestAnimFrame(loop);

  mainLoop.update();
  mainLoop.render();
};

document.addEventListener("DOMContentLoaded", function () {
  init();
  loop();
});
"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var Color = (function () {
  function Color() {
    var r = arguments[0] === undefined ? 0 : arguments[0];
    var g = arguments[1] === undefined ? 0 : arguments[1];
    var b = arguments[2] === undefined ? 0 : arguments[2];
    var a = arguments[3] === undefined ? 1 : arguments[3];
    _classCallCheck(this, Color);

    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  }

  _prototypeProperties(Color, null, {
    rgba: {
      get: function () {
        return "rgba(" + this.r + ", " + this.g + ", " + this.b + ", " + this.a + ")";
      },
      configurable: true
    }
  });

  return Color;
})();
"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var Rectangle = (function () {
  function Rectangle() {
    var x = arguments[0] === undefined ? 10 : arguments[0];
    var y = arguments[1] === undefined ? 10 : arguments[1];
    var w = arguments[2] === undefined ? 10 : arguments[2];
    var h = arguments[3] === undefined ? 10 : arguments[3];
    _classCallCheck(this, Rectangle);

    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  _prototypeProperties(Rectangle, null, {
    dimensions: {
      get: function () {
        return [this.x, this.y, this.w, this.h];
      },
      configurable: true
    },
    intersects: {
      value: function intersects(rect) {
        return rect.x < this.x + this.w && rect.y < this.y + this.h && this.x < rect.x + rect.w && this.y < rect.y + rect.h;
      },
      writable: true,
      configurable: true
    }
  });

  return Rectangle;
})();
"use strict";

var _toArray = function (arr) { return Array.isArray(arr) ? arr : Array.from(arr); };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var Graphics = (function () {
  function Graphics() {
    _classCallCheck(this, Graphics);

    this.canvas = document.getElementById("main-canvas");
    this.context = this.canvas.getContext("2d");
  }

  _prototypeProperties(Graphics, null, {
    clear: {
      value: function clear() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      },
      writable: true,
      configurable: true
    },
    drawRectangle: {
      value: function drawRectangle(rect, color) {
        var _context;
        this.context.fillStyle = color.rgba;
        (_context = this.context).fillRect.apply(_context, _toArray(rect.dimensions));
      },
      writable: true,
      configurable: true
    }
  });

  return Graphics;
})();
"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var MainLoop = (function () {
  function MainLoop() {
    _classCallCheck(this, MainLoop);

    this.graphics = new Graphics();

    this.r = new Rectangle();
    this.c = new Color();
  }

  _prototypeProperties(MainLoop, null, {
    update: {
      value: function update() {},
      writable: true,
      configurable: true
    },
    render: {
      value: function render() {
        this.graphics.clear();

        this.graphics.drawRectangle(this.r, this.c);
      },
      writable: true,
      configurable: true
    }
  });

  return MainLoop;
})();