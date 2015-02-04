window.requestAnimFrame = window.requestAnimFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  function(callback) {
    window.setTimeout(callback, 1000 / 60);
  };

let mainLoop = undefined;
let init = function() {
  mainLoop = new MainLoop();
};

let loop = function() {
  requestAnimFrame(loop);

  mainLoop.update();
  mainLoop.render();
};

document.addEventListener('DOMContentLoaded', () => {
    init();
    loop();
});
