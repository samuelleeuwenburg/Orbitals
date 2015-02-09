window.requestAnimFrame = window.requestAnimFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  function(callback) {
    window.setTimeout(callback, 1000 / 60);
  };

let tick = function() {
  requestAnimFrame(tick);

  loop.update();
  loop.render();
};

let loop = new AppLoop();
tick();
